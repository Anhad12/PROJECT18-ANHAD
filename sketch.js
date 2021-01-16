var fruit1;
var fruit2;
var fruit3;
var fruit4;
var alienA;
var sword;
var gameOver;
var fruitGroup;
var alienGroup;
var gameState="play";
var score=0;
var go;
var sound1;
var sound2;
function preload(){
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
 alienA=loadAnimation("alien1.png","alien2.png");
 sword=loadImage("sword.png");
 gameOver=loadImage("gameover.png")
 sound1=loadSound("knifeSwooshSound.mp3");
sound2=loadSound("gameover.mp3");
}
function setup(){
//createCanvas(600,600);
createCanvas(windowWidth,windowHeight);
sword1=createSprite(width/2,30,10,10);
sword1.addImage("sword1",sword);
fruitGroup=new Group();
alienGroup=new Group();
go=createSprite(width/2,height/2,20,20);
  go.addImage(gameOver);
}
function draw(){
  background("green");
  if(gameState==="play"){
    go.visible=false;
  sword1.x=World.mouseX;
  sword1.y=World.mouseY;
  spawnFruits();
  spawnAliens();
  text("score"+score,50,100);
  if (sword1.isTouching(fruitGroup)){
  score=score+1;
  sound1.play();
  fruitGroup.destroyEach();
  }
  if(sword1.isTouching(alienGroup)){
    gameState="end";
    sound2.play();
  }
  }
  if(gameState==="end"){
  go.visible=true;
  }
  drawSprites();

  
}
function spawnFruits(){
 if (frameCount % 60 === 0){
   var fruit = createSprite(width,Math.round(random(0,height)),10,40);
   fruit.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.2;
    fruit.lifetime = 300;
   
   //add each obstacle to the group
    fruitGroup.add(fruit);
 }
}
function spawnAliens(){
 if (frameCount % 200 === 0){
   var alien = createSprite(width+20,Math.round(random(0,height)),10,40);
   alien.velocityX = -6;
   alien.addAnimation("alien1",alienA);
    //assign scale and lifetime to the obstacle           
    alien.scale = 0.8;
    alien.lifetime = 300;
   
   //add each obstacle to the group
    alienGroup.add(alien);
 }

}