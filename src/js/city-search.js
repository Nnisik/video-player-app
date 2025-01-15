import setVideo from "./video-player";
import capitalizeFirstLetter from "./utils/capitalise-first-letter";
import {setNewVideoTitle} from "./ui";

const searchInput = document.getElementById("search-field");

export function getCity() {
    let searchValue = searchInput.value;
    setNewVideoTitle(capitalizeFirstLetter(searchValue));
    setVideo(searchValue);
}