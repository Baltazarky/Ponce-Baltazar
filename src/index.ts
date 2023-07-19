import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)) / 2;
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./homero.png", name: "homero"});
Loader.shared.add({url: "./bigote.png", name: "bigote"});

Loader.shared.onComplete.add(()=>{
	const homero: Sprite = Sprite.from("homero");

	console.log("Holiwis!", homero.width, homero.height);

	homero.anchor.set(0.5);

	homero.x = app.screen.width / 2;
	homero.y = app.screen.height / 2;

	//Escalar el tamaño del sprite
	//homero.scale.y = 0.5;
	//homero.scale.x = 0.5;

	//Rotar el sprite
	//homero.angle = 45;

	const bigote: Sprite = Sprite.from("bigote");

	bigote.x = app.screen.width / 2.35;
	bigote.y = app.screen.height / 2.88;

	bigote.angle = -15;

	bigote.scale.x = 0.3;
	bigote.scale.y = 0.3;

	const homeroBigote: Container = new Container();

	homeroBigote.addChild(homero);
	homeroBigote.addChild(bigote);

	homeroBigote.scale.set(0.5)

	app.stage.addChild(homeroBigote);

	
});

Loader.shared.load();

