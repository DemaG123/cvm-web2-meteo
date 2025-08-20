import { fetchData } from "./meteo-api";
import { Snow } from "./js/snow.js";
import { Rain } from "./js/rain.js";

window.addEventListener("load", async () => {
    let rainList = [];
    let snowList = [];
    let isRaining = false;
    let isSnowing = false;

    
    for (let i = 0; i < 100; i++) {
    let rain = new Rain("goutte_"+i); 
    rainList.push(rain);
    }

    for (let i = 100; i < 200; i++) {
    let snow = new Snow("flake_"+i); 
    snowList.push(snow);
    }
    
    const tick = () => {
        if (isRaining) {
            for (let i = 0; i < rainList.length; i++) {
                let sprite = rainList[i];
                sprite.tick();       
            }
        }
        if (isSnowing) {
            for (let i = 0; i < snowList.length; i++) {
                let sprite = snowList[i];
                sprite.tick();       
            }
        }
        window.requestAnimationFrame(tick); 
    }
    tick();                                                                             

    
    document.addEventListener("keydown", (event) => {
        if (event.key == "r" || event.key == "R") {
            isRaining = true;
            rainList.forEach(sprite => {
                let singleSprite = document.getElementById(sprite.id);
                singleSprite.style.display = "block";
            })
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.key == "r" || event.key == "R") {
            isRaining = false;
            rainList.forEach(sprite => {
                let singleSprite = document.getElementById(sprite.id);
                singleSprite.style.display = "none";
            })            
        }
    })

    document.addEventListener("keydown", (event) => {
        if (event.key == "s" || event.key == "S") {
            isSnowing = true;
            snowList.forEach(sprite => {
                let singleSprite = document.getElementById(sprite.id);
                singleSprite.style.display = "block";
            })
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.key == "s" || event.key == "S") {
            isSnowing = false;
            snowList.forEach(sprite => {
                let singleSprite = document.getElementById(sprite.id);
                singleSprite.style.display = "none";
            })            
        }
    })

    let weatherDataM = await fetchData(45.5019, -73.5674);
    let weatherDataT = await fetchData(35.6762, 139.6503);
    let weatherDataA = await fetchData(36.6997, 3.0588);
    
    console.log(weatherDataM); 
    
    const select = document.getElementById('island-select');
    const button = document.getElementById('btn-destination');
    
    let listNode = document.querySelector("#info-list");
    
    button.onclick = (event) => {
    const selectedIsland = select.value;
        
        let newTitleNode = document.createElement("div");
        let newImgNode = document.createElement("div");
        let newTextNode = document.createElement("div");

        listNode.innerHTML = "";
        listNode.append(newTitleNode);
        listNode.append(newImgNode);

        newImgNode.style.backgroundSize = "100% 100%" ;
        newImgNode.style.width = "100%";
        newImgNode.style.height = "40%";
        newImgNode.style.margin = "0 auto";
        newImgNode.style.borderRadius = 20 + "px";

        newTitleNode.style.margin = "10px auto 10px";
        newTitleNode.innerText = selectedIsland;
        newTextNode.style.textAlign = "center";
        
        if (selectedIsland == "Montréal") {
            newTextNode.innerHTML = "";
            newImgNode.style.backgroundImage = "url('img/montreal.avif')";
            newTextNode.innerHTML = "Date : " + weatherDataM.time;
            newTextNode.innerHTML += "<br>Temperature : " + weatherDataM.temperature;
            newTextNode.innerHTML += "<br>Ressenti : " + weatherDataM.apparentTemperature;
            newTextNode.innerHTML += "<br>Pluie : " + weatherDataM.rain;
            newTextNode.innerHTML += "<br>Precipitation : " + weatherDataM.precipitation;
            newTextNode.innerHTML += "<br>Neige : " + weatherDataM.snowfall;
            newTextNode.innerHTML += "<br>Vitesse du vent : " + weatherDataM.windSpeed10m;
            
            listNode.append(newTextNode);
        }
        if (selectedIsland == "Tokyo") {
            newTextNode.innerHTML = "";
            newImgNode.style.backgroundImage = "url('img/tokyo.jpg')";
            newTextNode.innerHTML = "Date : " + weatherDataT.time;
            newTextNode.innerHTML += "<br>Temperature : " + weatherDataT.temperature;
            newTextNode.innerHTML += "<br>Ressenti : " + weatherDataT.apparentTemperature;
            newTextNode.innerHTML += "<br>Pluie : " + weatherDataT.rain;
            newTextNode.innerHTML += "<br>Precipitation : " + weatherDataT.precipitation;
            newTextNode.innerHTML += "<br>Neige : " + weatherDataT.snowfall;
            newTextNode.innerHTML += "<br>Vitesse du vent : " + weatherDataT.windSpeed10m;
            listNode.append(newTextNode);
        }
        if (selectedIsland == "Alger") {
            newTextNode.innerHTML = "";
            newImgNode.style.backgroundImage = "url('img/alger.jpg')";
            newTextNode.innerHTML = "Date : " + weatherDataA.time;
            newTextNode.innerHTML += "<br>Temperature : " + weatherDataA.temperature;
            newTextNode.innerHTML += "<br>Ressenti : " + weatherDataA.apparentTemperature;
            newTextNode.innerHTML += "<br>Pluie : " + weatherDataA.rain;
            newTextNode.innerHTML += "<br>Precipitation : " + weatherDataA.precipitation;
            newTextNode.innerHTML += "<br>Neige : " + weatherDataA.snowfall;
            newTextNode.innerHTML += "<br>Vitesse du vent : " + weatherDataA.windSpeed10m;
            listNode.append(newTextNode);
        }

        

    }

})