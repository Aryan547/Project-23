const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	box1 = new Box(400,690,200,20,"red");
	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	
	Engine.run(engine);
}


function draw() {

  rectMode(CENTER);
  background(0);

  //Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
    box1.display();
	box2.display();
	box3.display();

	drawSprites();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW ) {
		Matter.Body.setStatic(packageBody, false);
}
    if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x-20
		Matter.Body.translate(packageBody, {x:-20, y:0})
	}

	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x+20
		Matter.Body.translate(packageBody, {x:+20, y:0})
	}
}