const Engine = Matter.Engine; // E stands for Engine
const World = Matter.World; // W stands for World
const Bodies = Matter.Bodies; // B stands for Bodies
//in any physics library there are 3 things- engine, world, body

var engine, world, bodies; // the same above applies here
var ground, ball;

function setup() {
  createCanvas(400, 400);
  //createSprite(200, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true,
  }
  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  World.add(world, ground);
  var ball_options = {
    restitution:1.0,
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
}

function draw() {
  background("black");
  Engine.update(engine);

rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}