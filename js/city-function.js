function removeActiveFromAllElements() {
    cityContainers.forEach((city) => {
        if (city.classList.contains("active")) {
            city.classList.toggle("active");
        }
    });
}

let cityContainers = document.querySelectorAll(".city-container");
cityContainers.forEach(function(city) {
    city.addEventListener("click", function() {
        removeActiveFromAllElements();
        city.classList.toggle("active");
    });
});