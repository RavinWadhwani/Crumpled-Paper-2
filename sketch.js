
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	  //Create the Bodies Here.
    
    
    paper =  new Paper (200,400,70);
    ground = new Ground (600,680,1200,20);
    dustbin = new Dustbin(800,350);
	  Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
 
 paper.display();
 ground.display();
 dustbin.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:700,y:-700});
  }
}


