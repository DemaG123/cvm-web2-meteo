import { showAlert } from "./utils";
import { Seagull } from "./js/seagull.js";
import { Shark } from "./js/shark.js";

window.addEventListener("load", () => {
    let spriteList = [];
    let seagull = new Seagull(1);
    let shark = new Shark(2); 
    for (let i = 1; i <= 2; i++) {
    spriteList.push(seagull);
    spriteList.push(shark);
    }

    const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        let sprite = spriteList[i];
        sprite.tick();       
    }

    window.requestAnimationFrame(tick); 
    }

    tick();

    //showAlert();
    let btnSky = document.getElementById("btn-sky");
    let btnSea = document.getElementById("btn-sea");
    let btnDeep = document.getElementById("btn-deep");
    document.querySelector(".shark").style.display = "none";

    btnSky.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sky.png')";
        document.querySelector(".seagull").style.display = "block";
        document.querySelector(".shark").style.display = "none";
    }

    btnSea.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sea.jpg')";
        document.querySelector(".seagull").style.display = "block";
        document.querySelector(".shark").style.display = "none";
    }

    btnDeep.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/deep.jpg')";
        document.querySelector(".seagull").style.display = "none";
        document.querySelector(".shark").style.display = "block";
    }

    btnSky.onmouseover = () => {
        btnSky.style.backgroundColor = "yellow";
    }

    btnSky.onmouseout = () => {
        btnSky.style.backgroundColor = "aqua";
    }

    btnSea.onmouseover = () => {
        btnSea.style.backgroundColor = "yellow";
    }

    btnSea.onmouseout = () => {
        btnSea.style.backgroundColor = "aqua";
    }

    btnDeep.onmouseover = () => {
        btnDeep.style.backgroundColor = "yellow";
    }

    btnDeep.onmouseout = () => {
        btnDeep.style.backgroundColor = "aqua";
    }
    
    document.querySelector("#error-message").style.display = "none";

    document.querySelector("#password-form").onsubmit = () => {
        let success = true;

        if (document.querySelector("#password").value !== "web2") {
            
            document.querySelector("#password").value = ""
            document.querySelector("#error-message").style.display = "block";
            success = false;
        }

        return success;
    }
})