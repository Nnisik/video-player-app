import capitalizeFirstLetter from "./utils/capitalise-first-letter";

const searchGallery = document.getElementById("city-selection");
const videoPlayer = document.getElementById("video-player");

export function clearSearchGallery() {
    searchGallery.innerHTML = "";
}

export function fillSearchGallery(video) {
    // search option container
    const videoSelectContainer = document.createElement("li");
    videoSelectContainer.classList.add("city-container");
    videoSelectContainer.setAttribute("data-id", video.id);
    // search header
    const videoHeader = document.createElement("h2");
    videoHeader.classList.add("city-name");
    videoHeader.innerText = `${video.title} - ${video.id}`;
    videoSelectContainer.append(videoHeader);
    // video poster
    const videoPoster = document.createElement("img");
    videoPoster.classList.add("city-img");
    videoPoster.src = video.image;
    videoPoster.alt = video.id;
    videoSelectContainer.append(videoPoster);
    searchGallery.appendChild(videoSelectContainer);
}

export function setVideoIntoPlayer(videoLink) {
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

export function setNewVideoTitle(newTitle) {
    document.getElementById("current-location").innerText = newTitle;
}