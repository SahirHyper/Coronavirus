









function preload(){
  
}
  
function setup() {
 createCanvas(400,400);
  
var ball1 = createSprite(15,15,20,20);
ball1.shapeColor = "green"; 
var ball2 = createSprite(385,15,20,20);
ball2.shapeColor="green";
var ball3 = createSprite(15,385,20,20);
ball3.shapeColor="green";
var ball4 = createSprite(385,385,20,20);
ball4.shapeColor="green";
var covidBall = createSprite(200,200,20,20);
covidBall.shapeColor="red";
  
var wall1 = createSprite(400,5,10,800);
  wall1.shapeColor = "blue";
var wall2 = createSprite(0,5,10,800)
 wall2.shapeColor = "blue";
var wall3 = createSprite(5,10,800,5)
 wall3.shapeColor = "blue";
var wall4 = createSprite(5,390,800,5)
 wall4.shapeColor = "blue";
  


ball1.velocityY = -7;
ball2.velocityY = 7;
ball3.velocityY = -7;
ball4.velocityY = -7;
  
ball1.collide(wall1);
ball1.collide(wall2);
ball1.collide(wall3);
ball1.collide(wall4);
  
ball2.collide(wall1);
ball2.collide(wall2);
ball2.collide(wall3);
ball2.collide(wall4);
  
ball3.collide(wall1);
ball3.collide(wall2);
ball3.collide(wall3);
ball3.collide(wall4);
  
ball4.collide(wall1);
ball4.collide(wall2);
ball4.collide(wall3);
ball4.collide(wall4);
  

  
}

function draw() {
background("white");
  text("X:"+mouseX+" Y:"+mouseY,mouseX+10,mouseY+10);
  

   
 drawSprites();  
 }
  
  

  
