export class Shark {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = window.innerWidth + "px";
        this.node.style.top = Math.floor(Math.random() * 200) + "px";
        this.node.addEventListener("mouseover", () => {
            this.node.style.backgroundImage = "url('img/shark-attack.gif')";
            this.node.style.width = window.innerWidth + "px";
            this.node.style.height = window.innerHeight + "px";
            this.node.style.left = 0 + "px";
            this.node.style.top = 0 + "px";
            this.speedX = 0;    

            setTimeout(() => {
                this.node.style.backgroundImage = "url('img/shark.gif')";
                this.speedX = 5;
                this.node.style.left = window.innerWidth + "px";
                this.node.style.top = Math.floor(Math.random() * 200) + "px";
                this.node.style.width = 225 + "px";
                this.node.style.height = 175 + "px";
            }, 1000);



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