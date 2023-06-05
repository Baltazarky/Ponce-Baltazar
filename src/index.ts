import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 920,
	height: 920
});

Loader.shared.add({url: "./homero.png", name: "homero"});

Loader.shared.onComplete.add(()=>{
	const homero: Sprite = Sprite.from("homero");

	console.log("Holiwis!", homero.width, homero.height);

	homero.anchor.set(0.5);

	homero.x = app.screen.width / 2;
	homero.y = app.screen.height / 2;

	app.stage.addChild(homero);
});

Loader.shared.load();

