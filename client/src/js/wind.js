export class Wind {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        this.node.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        this.speedX = 5;
    }

    tick(){
        
        let newPositionY = this.node.offsetLeft - this.speedX;

        this.node.style.left = newPositionY + "px";

        if (newPositionY < 0) {
            this.node.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
            this.node.style.left = window.innerWidth + 100 + "px";
        }

    }

}