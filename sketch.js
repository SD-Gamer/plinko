const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload(){
  //rebound = loadSound("rebound.mp3");
}

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <= width; k = k + 150) {
      divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  ground1 = new Ground(75,790,150,20);
  ground2 = new Ground(375,790,150,20);
  ground3 = new Ground(675,790,150,20);
  ground4 = new Ground(975,790,150,20);

  for(var j = 75;j <= width;j = j+50) {
    plinkos.push(new Plinko(j,75))
   }
  for(var j = 50;j <= width - 10 ; j = j+50) {
    plinkos.push(new Plinko(j,175))
  }
  for(var j = 75;j <= width ; j = j+50) {
    plinkos.push(new Plinko(j,275))
  }
  for(var j = 50;j <= width - 10; j = j+50) {
    plinkos.push(new Plinko(j,375))
  }
  score = 0;
  Matter.Events.on(engine,'collisionStart',collision);


  Engine.run(engine);
}

var plinkos = [];
var balls = [];
var divisions = [];
var divisionHeight = 300;

function draw() {
  background("lightBlue");  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for(var i = 0; i < plinkos.length; i++){
      plinkos[i].display();
  }
  for(var i = 0; i < balls.length; i++){
    curBall = balls[i];
    curBall.display();
    if(curBall.score === 0) {
       if(ballisIn(curBall)){
         xPos = curBall.body.position.x
         if(xPos > 10 && xPos < 140) {
            curBall.score = 100;
         }
         if(xPos > 310 && xPos < 440) {
           curBall.score = 200;
         }
         if(xPos > 610 && xPos < 740 ) {
            curBall.score = 300;
           }
         if(xPos > 910 && xPos < 1040) {
            curBall.score = 400;
         }
         console.log(curBall.score);
       }
       score += curBall.score;
    }
  }
}
function mousePressed() {
  balls.push(new Ball(mouseX,10,10));
}
function collision(event) {
  var pairs = event.pairs;
  for(var i = 0; i < pairs.length;i++){
      console.log("in collision"+i);
      var labelA = pairs[i].bodyA.label;
      var labelB = pairs[i].bodyB.label;
      if((labelA === 'balls' && labelB === 'plinko') ||
         (labelA === 'plinko' && labelB === 'balls')) {
          //rebound.play();
         }      
  }
}

function ballisIn(object){
  if((object.body.position.y >= height - divisionHeight) && object.body.position.y <= height) {
     return true;
     } 
     else {
        return false; 
      } 
   }