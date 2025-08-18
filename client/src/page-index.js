import { showAlert } from "./utils";

window.addEventListener("load", () => {

    //showAlert();
    let btnSky = document.getElementById("btn-sky");
    let btnSea = document.getElementById("btn-sea");
    let btnDeep = document.getElementById("btn-deep");

    btnSky.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sky.png')";
    }

    btnSea.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/sea.jpg')";
    }

    btnDeep.onclick = () => {
        document.querySelector("body").style.backgroundImage = "url('img/deep.jpg')";
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