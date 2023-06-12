import { Container, Sprite } from "pixi.js";

export class MushroomHat extends Container{

    constructor(){
        super();

        const mushroom: Sprite = Sprite.from("Mushroom");
	
        const hat: Sprite = Sprite.from("Hat");
        hat.y = -150

        this.addChild(mushroom);
        this.addChild(hat);
    }
}


