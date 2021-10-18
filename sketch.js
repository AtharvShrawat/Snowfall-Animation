var Engine = Matter.Engine;
  var World = Matter.World;
  var Events = Matter.Events;
  var Bodies = Matter.Bodies;

var snowflakes,ground;

function preload() {
  snowflakes = loadImage("snow4.webp");
  ground = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(width/2,height,width,20);

}

function draw() {
  background(255,255,255);  
  drawSprites();  
  Engine.update(engine);
  ground.display();

if(frameCount%60===0){
    snowflakes.push(new snowflakes(random(width/2-30, width/2+30), 10,10));


  for (var j = 0; j < snowflakes.length; j++) {
   
    snowflakes[j].display();
}
}
}