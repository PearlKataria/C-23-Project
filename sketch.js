var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redBox1,redBox2,redBox3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
var packagesprite_options={
	restitution:1.0
}
	packageSprite=createSprite(width/2, 80, 10,10,packagesprite_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	var redBox1_options={
		isStatic:true
	}
	redBox1=createSprite(380,650,200,20,redBox1_options)
	redBox1.shapeColor=color("red")

	var redBox2_options={
		isStatic:false
	}
	redBox2=createSprite(270,610,20,100,redBox2_options)
	redBox2.shapeColor=color("red")

	var redBox3_options={
		isStatic:false
	}
	redBox3=createSprite(490,610,20,100,redBox3_options)
	redBox3.shapeColor=color("red")
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



