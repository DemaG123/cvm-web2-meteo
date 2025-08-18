export class Seagull {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = window.innerWidth + "px";
        this.node.style.top = Math.floor(Math.random() * 200) + "px";
        this.node.addEventListener("mouseover", () => {
            this.speedX = 15;
        });
        this.speedX = 5;

    }

    
    tick(){
        
        let newPositionY = this.node.offsetLeft - this.speedX;

        this.node.style.left = newPositionY + "px";

        if (newPositionY < -175) {
            this.node.style.left = window.innerWidth + "px";
            this.node.style.top = Math.floor(Math.random() * 200) + "px";
            this.speedX = 5;
        }

    }

}