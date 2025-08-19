import { showAlert } from "./utils";
import { Seagull } from "./js/seagull.js";

window.addEventListener("load", () => {
    let spriteList = [];

    for (let i = 1; i <= 1; i++) {
    let seagull = new Seagull(i); 
    spriteList.push(seagull);
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

    btnSky.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sky.png')";
        document.querySelector(".seagull").style.display = "block";
    }

    btnSea.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sea.jpg')";
        document.querySelector(".seagull").style.display = "block";
    }

    btnDeep.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/deep.jpg')";
        document.querySelector(".seagull").style.display = "none";
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