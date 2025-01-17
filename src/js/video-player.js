import {client} from "./utils/API-connect";

export default function setVideo(cityTitle) {
    const query = cityTitle;
    client.videos.search({ query, per_page: 1 })
        .then((data) => {
            console.log(data.videos[0].url);
            // document.getElementById("video-player").innerHTML = `<source src="${data.videos[0].url}" type="video/mp4">`;
        });
}