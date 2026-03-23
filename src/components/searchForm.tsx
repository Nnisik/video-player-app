import styles from "../styles/style.module.css";
import {useState} from "react";
import getSearchedVideos from "../services/videoPlayer_API.ts";

const searchForm = () => {
    const [searchState, setSearchState]:any = useState("");

    return (
        <div className={styles.searchForm}>
            <input
                type={"text"}
                autoComplete={"off"}
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}/>
        </div>
    );
}

export default searchForm;