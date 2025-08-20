import { fetchData } from "./meteo-api";

window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData); 

    // let btnDestination = document.getElementById("btn-destination");

    const select = document.getElementById('island-select');
    const button = document.getElementById('btn-destination');

    button.onclick = (event) => {
        const selectedIsland = select.value;
        console.log("Selected island:", selectedIsland);
    }

})