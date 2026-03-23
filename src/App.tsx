import styles from "./styles/style.module.css"
import {useState} from "react";
import VideoProp from "./types/videoProp.ts";
import {client} from "./utils/API-connect.ts";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function buildVideoListElement(dataElement, searchQuery):VideoProp {
    return {
        id: dataElement.id,
        name: capitalizeFirstLetter(searchQuery),
        url: dataElement.video_files[0].link,
        image: dataElement.image
    }
}

function App() {
    const handleSearchBtn = () => {
        const query = searchState;
        client.videos.search({query})
            .then((data) => { return data.videos })
            .then((data) => {
                const videoList:VideoProp[] = [];
                data.map((video) => {
                    if (video.height < video.width) {
                        videoList.push(buildVideoListElement(video, query))
                    }
                });
                fillVideoList(videoList);
            })
            .catch((error) => console.log(error))
    }

    const [searchState, setSearchState]:any = useState("");
    const [videosList, fillVideoList] = useState([]);
    const [currentVideo, setCurrentVideo]:VideoProp = useState({id: 0, name: "", url: "", image:""});

    return (
        <div className={styles.app}>
            <div>
                <video autoPlay={true} muted={false} loop={true} className={styles.videoPlayer} src={currentVideo.url} />
                <div className={styles.videoDescription}>
                    <h2>{ currentVideo.name }</h2>
                </div>
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.searchForm}>
                    <input type={"text"} autoComplete={"off"} value={searchState} onChange={(e) => {setSearchState(String(e.target.value))}}/>
                    <button onClick={ handleSearchBtn }>Search</button>
                </div>
                <div className={styles.search_resultsContainer}>
                    { videosList.map(video =>
                        <div className={styles.cityElem} key={video.id} onClick={() => setCurrentVideo(video)}>
                            <div>
                                <h3>{video.name}</h3>
                            </div>
                            <img src={video.image} alt={String(video.id)}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App