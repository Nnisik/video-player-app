import {clearSearchGallery, fillSearchGallery, setNewVideoTitle} from "./ui";
import {client} from "./utils/API-connect";
import capitalizeFirstLetter from "./utils/capitalise-first-letter";
import {setVideoIntoPlayer} from "./video-player";
import {searchInput} from "./utils/elements-links";

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
                if (video.height < video.width) {
                    videoList.push(buildDataSet(video, query));
                }
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

export function getCity() {
    let searchValue = searchInput.value;
    setNewVideoTitle(capitalizeFirstLetter(searchValue));
    getVideos(searchValue);
}