// World, Engine, Bodies. 
// namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options={     
    'restitution':1
  }

  
  ball = Bodies.circle(200,10,30,ball_options);
  World.add(world, ball);
  
  //JSON format
  var ground_options={
    'isStatic':true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world, ground);
}

function draw() {
  background("black");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}