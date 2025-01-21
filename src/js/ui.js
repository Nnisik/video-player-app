const searchGallery = document.getElementById("city-selection");
const videoPlayer = document.getElementById("video-player");

export function clearSearchGallery() {
    searchGallery.innerHTML = "";
}

function galleryElementHeader(id, title) {
    const videoHeader = document.createElement("h2");
    videoHeader.classList.add("city-name");
    videoHeader.innerText = `${title} - ${id}`;
    return videoHeader;
}

function galleryElementPoster(id, image) {
    const videoPoster = document.createElement("img");
    videoPoster.classList.add("city-img");
    videoPoster.src = image;
    videoPoster.alt = id;
    return videoPoster;
}

export function fillSearchGallery(video) {
    // search option container
    const videoSelectContainer = document.createElement("li");
    videoSelectContainer.classList.add("city-container");
    // Add click event listener to the element
    videoSelectContainer.addEventListener('click', () => {
        setVideoIntoPlayer(video.file.link);
    });
    // search header
    videoSelectContainer.append(galleryElementHeader(video.id, video.title));
    // video poster
    videoSelectContainer.append(galleryElementPoster(video.id, video.image));
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