export class Seagull {

    constructor(id) {
        this.id = id;
        this.node = document.getElementById(this.id);
        this.node.style.left = window.innerWidth + "px";

        
        
        
        this.speedY = 5;

    }

    
    tick(){
        let newPositionY = this.node.offsetLeft - this.speedY;

        this.node.style.left = newPositionY + "px";

        if (newPositionY == -175) {
            this.node.style.left = window.innerWidth + "px";
            
        }

    }

}