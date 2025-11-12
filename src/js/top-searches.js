import {getCity} from "./city-search";

function fillSearchFromTop(option) {
    searchInput.value = option;
    getCity();
}

document.getElementsByClassName("pop-search_option").forEach(element => {
    element.onclick(fillSearchFromTop(element.dataset.city));
});