import {client} from "./utils/API-connect";

export default function setVideo(cityTitle) {
    const query = cityTitle;
    client.videos.search({ query, per_page: 1 })
        .then((data) => {
            document.getElementById("video-player").src = data.videos[0].url;
        });
}