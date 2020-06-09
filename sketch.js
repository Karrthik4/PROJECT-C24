const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paper;

	
function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	 
	ground = new Ground();

	paper = new Paper(250,540,23);

	side1 = new Dustbin(902, 535, 10 ,90);
	side2 = new Dustbin(967,575,120,10);
	side3 = new Dustbin(1024, 535, 10, 90);

    Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  paper.display();

  side1.display();
  side2.display();
  side3.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	}
}


