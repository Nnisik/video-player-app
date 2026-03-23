import { createClient } from 'pexels';
import {videosList} from "../components/searchContainer.tsx";
import VideoProp from "../types/videoProp.ts";

// const client = createClient(process.env.API_KEY);

// FIXME
const getSearchedVideos = (searchQuery:any) => {
    let query:String = searchQuery;
    client.videos.search({ query, per_page:1 })
        .then((data) => {
            return data.videos;
        })
        .then((data) => {
            // set own video list
            const videoList:Object[] = [];
            data.forEach(video => {
                if (video.height < video.width) {
                    let videoData:VideoProp = {
                        id: video.id,
                        name: query,
                        url: video.url,
                        image: video.image
                    }
                    videoList.push(videoData);
                }
            });
            return videoList;
        })
        .then((videoList) => {
            videosList = [];
            videoList.forEach((video) => {
                videosList.push(video);
            });
        })
        .catch((err) => {
            console.log(err);
        })
}
export default getSearchedVideos