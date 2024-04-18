function changeVideo(videoPath) {
    videoPath.src = videoPath;
    return;
}

function removeActiveFromAllElements() {
    cityContainers.forEach((city) => {
        if (city.classList.contains("active")) {
            city.classList.toggle("active");
        }
    });
}

const videoPlayer = document.querySelector("#video-player");

let cityContainers = document.querySelectorAll(".city-container");
cityContainers.forEach(function(city) {
    city.addEventListener("click", function() {
        document.querySelector("#video-player").src = city.dataset.img;
        document.querySelector("#current-location").innerHTML = city.dataset.city;
        removeActiveFromAllElements();
        city.classList.toggle("active");
    });
});

// spbButton.addEventListener("click", function() {
//     videoPlayer.src = "./assets/images/aerial-drone-view-batumi-georgia-old-modern-buildings-greenery-roads-mountains.jpg";
// });