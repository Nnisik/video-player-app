import {videoPlayer} from "./utils/elements-links";

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

