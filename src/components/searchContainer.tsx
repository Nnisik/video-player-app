import styles from "../styles/style.module.css";
import VideoProp from "../types/videoProp.ts";
import {useState} from "react";


const searchContainer = () => {
    const [searchState, setSearchState]:any = useState("");
    const [videosList, fillVideoList]:VideoProp[] = useState([]);
        /*
        [{
            id: 1,
            name: "Paris",
            url: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
        }, {
            id: 2,
            name: "Vienna",
            url: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stephansdom_Wien_2022-08-08_13.jpg/250px-Stephansdom_Wien_2022-08-08_13.jpg"
        },
        {
            id: 3,
            name: "Paris",
            url: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
        },
        {
            id: 4,
            name: "Vienna",
            url: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stephansdom_Wien_2022-08-08_13.jpg/250px-Stephansdom_Wien_2022-08-08_13.jpg"
        }
    ];*/

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchForm}>
                <input
                    type={"text"}
                    autoComplete={"off"}
                    value={searchState}
                    onChange={(e) => {
                        // setSearchState(e.target.value)
                        // TODO: set API calling
                        // TODO: fill videoList with data from API call
                        fetch("")
                    }
                }/>
            </div>
            <div className={styles.search_resultsContainer}>
                { videosList.map(video =>
                    <div className={styles.cityElem}>
                        <div>
                            <h3>{video.name}</h3>
                            <p>{video.id}</p>
                        </div>
                        <img src={video.image} alt={String(video.id)}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default searchContainer;