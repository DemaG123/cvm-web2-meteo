export class Rain {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = Math.floor(Math.random() * (window.innerWidth * 1.5 - (-window.innerWidth/2)) + ((-window.innerWidth/2)) ) + "px";
        this.node.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        this.speedX = 15;
        this.node.style.transform = "rotate(-22.5deg)";
    }

    tick(){
        
        let newPositionY = this.node.offsetTop + this.speedX;
        let newPositionX = this.node.offsetLeft + this.speedX/2;

        this.node.style.top = newPositionY + "px";
        this.node.style.left = newPositionX + "px";

        if (newPositionY > window.innerHeight) {
            this.node.style.left = Math.floor(Math.random() * (window.innerWidth * 1.5 - (-window.innerWidth/2)) + ((-window.innerWidth/2)) ) + "px";
            this.node.style.top = -100 + "px";
        }

        this.node.addEventListener("mouseover", () => {
            this.node.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            this.node.style.top = -100 + "px";
        });         
        

    }

}