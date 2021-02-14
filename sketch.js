const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	b1=new Bob(300,300);
	b2=new Bob(350,300);
    b3=new Bob(400,300)
	b4=new Bob(450,300);
	b5=new Bob(500,300);
	roof=new Roof(width/2,height/4,width/3,20);
	rope1=new Rope(b1.body,roof.body,-100);
	rope2=new Rope(b2.body,roof.body,-50);
    rope3=new Rope(b3.body,roof.body,0);
	rope4=new Rope(b4.body,roof.body,50);
	rope5=new Rope(b5.body,roof.body,100);
	Engine.run(engine);
}


function draw() 
{
	background(0);
  rectMode(CENTER);
  b1.display();
   b2.display();
 b3.display();
  b4.display();
  b5.display();
  roof.display();
  rope1.display();
  rope2.display();
rope3.display();
  rope4.display();
  rope5.display(); 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});
	}
}

