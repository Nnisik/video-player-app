import styles from "../styles/style.module.css";
import {useState} from "react";
import VideoProp from "../types/videoProp.ts";

// export let [playingVideo, setPlayingVideo]:VideoProp = useState({});


const videoPlayerElement = () => {

    let [playingVideo, setPlayingVideo] = useState({name:"Paris"});

    return (
        <div>
            <video className={styles.videoPlayer} />
            <div className={styles.videoDescription}>
                <h2>{playingVideo.name}</h2>
            </div>
        </div>
    );
}

export default videoPlayerElement;