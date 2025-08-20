export class Snow {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        this.node.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        this.speedX = 5;
    }

    tick(){
        
        let newPositionY = this.node.offsetTop + this.speedX;

        this.node.style.top = newPositionY + "px";

        if (newPositionY > window.innerHeight) {
            this.node.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            this.node.style.top = -100 + "px";
        }

    }

}