import { createClient } from 'pexels';
import {API_KEY} from "./constant";

const client = createClient(API_KEY);

const searchGallery = document.getElementById("city-selection");
const videoPlayer = document.getElementById("video-player");
const locationHeader = document.getElementById("current-location");
const searchInput = document.getElementById("search-field");

function setVideoIntoPlayer(videoLink) {
    // Check if the video element exists
    if (!videoPlayer) {
        console.error("No video element found");
        return;
    }
    // Update the video source
    videoPlayer.src = videoLink;
    // Reload the video to apply the new source
    videoPlayer.load();
    // Optionally, play the video immediately
    videoPlayer.play();
}

function clearSearchGallery() {
    searchGallery.innerHTML = "";
}

function galleryElementHeader(title) {
    const videoHeader = document.createElement("h2");
    videoHeader.classList.add("city-name");
    videoHeader.innerText = `${title}`;
    return videoHeader;
}

function galleryElementPoster(id, image) {
    const videoPoster = document.createElement("img");
    videoPoster.classList.add("city-img");
    videoPoster.src = image;
    videoPoster.alt = id;
    return videoPoster;
}

function fillSearchGallery(video) {
    // search option container
    const videoSelectContainer = document.createElement("li");
    videoSelectContainer.classList.add("city-container");
    // Add click event listener to the element
    videoSelectContainer.addEventListener('click', () => {
        setVideoIntoPlayer(video.file.link);
    });
    // search header
    videoSelectContainer.append(galleryElementHeader(video.title));
    // video poster
    videoSelectContainer.append(galleryElementPoster(video.id, video.image));
    searchGallery.appendChild(videoSelectContainer);
}

function setNewVideoTitle(newTitle) {
    locationHeader.innerText = newTitle;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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

function getCity() {
    let searchValue = searchInput.value;
    setNewVideoTitle(capitalizeFirstLetter(searchValue));
    getVideos(searchValue);
}

function fillSearchFromTop(option) {
    searchInput.value = option;
    getCity();
}

document.getElementById("search-button").onclick = () => {
    getCity();
}

document.getElementsByClassName("pop-search_option").forEach(element => {
    element.onclick(fillSearchFromTop(element.dataset.city));
});