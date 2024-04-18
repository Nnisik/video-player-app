//import { dataCities } from "../json/data-cities.json";
let list = document.querySelector("#city-selection");
window.onload = () => {
  fetch("../json/data-cities.json")
    .then((response) => response.json())
    .then((json) => {
      json.map((city) => {
        const cityContainer = document.createElement("li");
        cityContainer.classList.add("city-container");
        cityContainer.setAttribute("data-img", city["img-link"]);
        // information container
        const cityInformationContainer = document.createElement("div");
        cityInformationContainer.classList.add("city-info");
        // city name
        const cityName = document.createElement("h2");
        cityName.classList.add("city-name");
        cityName.textContent = city["city"];
        cityInformationContainer.appendChild(cityName);
        // description
        const description = document.createElement("p");
        description.innerHTML = "Вот, что видит кто-то из команды Практикума, когда не смотрит на код, а смотрит в окно.";
        description.classList.add("city-about");
        cityInformationContainer.appendChild(description);
        cityContainer.append(cityInformationContainer);
        // adding image
        const image = document.createElement("img");
        image.classList.add("city-img");
        image.src = city["img-link"];
        cityContainer.appendChild(image);
        list.appendChild(cityContainer);
      });
    });
};
