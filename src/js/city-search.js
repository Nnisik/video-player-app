import {clearSearchGallery, fillSearchGallery, setNewVideoTitle, setVideoIntoPlayer} from "./ui";
import {client} from "./utils/API-connect";
import capitalizeFirstLetter from "./utils/capitalise-first-letter";

function buildDataSet(videoData, title) {
    return {
        id: videoData.id,
        title: capitalizeFirstLetter(title),
        image: videoData.image,
        file: {
            quality: videoData.video_files[0].quality,
            link: videoData.video_files[0].link
        }
    };
}

function getVideos(cityTitle) {
    const query = cityTitle;
    client.videos.search({ query })
        .then((data) => {
            return data.videos;
        })
        .then((data) => {
            // set own video list
            const videoList = [];
            data.forEach(video => {
                videoList.push(buildDataSet(video, query));
            });
            return videoList;
        })
        .then((data) => {
            clearSearchGallery();
            data.forEach((video) => {
                fillSearchGallery(video);
            });
            setVideoIntoPlayer(data[0].file.link);
        })
        .catch((err) => {
            console.log(err);
        })
}

const searchInput = document.getElementById("search-field");

export function getCity() {
    let searchValue = searchInput.value;
    setNewVideoTitle(capitalizeFirstLetter(searchValue));
    getVideos(searchValue);
}