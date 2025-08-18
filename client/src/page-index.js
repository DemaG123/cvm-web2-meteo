import { showAlert } from "./utils";

window.addEventListener("load", () => {

    //showAlert();
    
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