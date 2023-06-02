import { Application, Loader, Sprite } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

window.addEventListener("resize",()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const screenWidth = app.screen.width * scale;
	const screenHeight = app.screen.height * scale;

	app.view.style.width = screenWidth + "px";
	app.view.style.height = screenHeight + "px";

})


Loader.shared.add({url: "./clampy.png" , name: "Clampy"});
Loader.shared.add({url: "./mushroom.png", name: "Mushroom"});

Loader.shared.onComplete.add(() => {

	const mushroom: Sprite = Sprite.from("Mushroom");
	console.log("Hola mundo!", mushroom.width, mushroom.height);
	mushroom.anchor.set(0.5);
	mushroom.x = app.screen.width/2;
	mushroom.y = app.screen.height/2;
	app.stage.addChild(mushroom);
	
});

Loader.shared.load();

