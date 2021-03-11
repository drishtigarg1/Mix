const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100, 100);

	ground = new Ground(600,height,1200,20);

	stone = new Stone(700,320,70,70);

	rubber = new Rubber(400,320,70);

	sand_particles1 = new Sand_particles(300,300,10);
	sand_particles2 = new Sand_particles(310,300,10);
	sand_particles3 = new Sand_particles(320,300,10);
	sand_particles4 = new Sand_particles(330,300,10);
	sand_particles5 = new Sand_particles(340,300,10);

	iron = new Iron(400, 320, 30, 20);

  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  hammer.display();

  ground.display();

  stone.display();

  rubber.display();

  sand_particles1.display();
  sand_particles2.display();
  sand_particles3.display();
  sand_particles4.display();
  sand_particles5.display();

  iron.display();
  
}



