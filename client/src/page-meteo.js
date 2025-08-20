import { fetchData } from "./meteo-api";

window.addEventListener("load", async () => {
    let weatherDataM = await fetchData(45.5019, -73.5674);
    let weatherDataT = await fetchData(35.6762, 139.6503);
    let weatherDataA = await fetchData(36.6997, 3.0588);
    
    console.log(weatherDataM); 
    
    const select = document.getElementById('island-select');
    const button = document.getElementById('btn-destination');
    
    let listNode = document.querySelector("#info-list");
    
    button.onclick = (event) => {
    const selectedIsland = select.value;
        
        let newLineNode = document.createElement("div");
        let newImgNode = document.createElement("div");
        newLineNode.style.margin = "10px auto 10px";
        newLineNode.innerText = selectedIsland;
        listNode.innerHTML = "";
        
        listNode.append(newLineNode);
        setInterval(() => {
            
            if (selectedIsland == "Montréal") {
                newImgNode.style.backgroundImage = "url('img/montreal.avif')";
            }
            if (selectedIsland == "Tokyo") {
                newImgNode.style.backgroundImage = "url('img/tokyo.jpg')";
            }
            if (selectedIsland == "Alger") {
                newImgNode.style.backgroundImage = "url('img/alger.jpg')";
            }
            newImgNode.style.backgroundSize = "100% 100%" ;
            newImgNode.style.width = "100%";
            newImgNode.style.height = 300 + "px";
            newImgNode.style.margin = "0 auto";
            newImgNode.style.borderRadius = 20 + "px";
        }, 1000);
        listNode.append(newImgNode);

    }

})