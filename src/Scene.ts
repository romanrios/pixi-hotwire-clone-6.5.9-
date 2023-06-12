import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from "pixi.js";
import { MushroomHat } from "./MushroomHat";

export class Scene extends Container {
    constructor() {
        super();

        // Graphics
        const graphy : Graphics =  new Graphics;
        graphy.lineStyle({color: 0xFF00FF, width: 10, alpha:1});
        graphy.moveTo(0,0);
        graphy.lineTo(0,500);
        graphy.lineTo(500,0);
        graphy.lineTo(0,0);
        graphy.beginFill(0xffffff,0.6);
        graphy.drawCircle(0,0,100);
        graphy.position.set(420,120);
        this.addChild(graphy);

        // Class extending form Container
        const mushroomWithHat: MushroomHat = new MushroomHat();
        mushroomWithHat.scale.set(0.5);
        mushroomWithHat.position.set(400,300);
        this.addChild(mushroomWithHat);

        const mushroomWithHat2: MushroomHat = new MushroomHat();
        mushroomWithHat2.position.set(100,300);
        this.addChild(mushroomWithHat2);

        // Animated Sprite
        const robotAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("RobotWalk0"),
                Texture.from("RobotWalk1"),
                Texture.from("RobotWalk2"),
                Texture.from("RobotWalk3"),
                Texture.from("RobotWalk4"),
                Texture.from("RobotWalk5"),
                Texture.from("RobotWalk6"),
                Texture.from("RobotWalk7")
            ],
        );
        robotAnimated.play();
        robotAnimated.animationSpeed = 0.3;
        robotAnimated.scale.set(1.5);
        robotAnimated.position.set(600, 50);
        this.addChild(robotAnimated);

        // Text
        const myText: Text = new Text("Hello World", {
            fontSize: 90,
            fill: 0x000000,
            fontFamily: "Arial"
        });
        myText.position.set(60,80);
        myText.angle = -10;
        this.addChild(myText);

        // Nice-Slice Plane
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            40, 40, 40, 40
            );
        this.addChild(panel);
        panel.width = 600;
        panel.height = 300;
        panel.position.set(600,242);


        const panel2 = new NineSlicePlane(
            Texture.from("Panel"),
            40, 40, 40, 40
            );
        this.addChild(panel2);
        panel2.width = 200;
        panel2.height = 400;
        panel2.position.set(900,300);


    }
}