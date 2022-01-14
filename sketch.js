
var path, road
var manrun, mrl


function preload(){
road1 = loadImage("path.png");
mrl = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);

 path=createSprite(200,200);
 path.addImage(road1);
 path.velocityY = 4;
 path.scale = 1.2;

manrun = createSprite(200,200);
manrun.addAnimation("running", mrl);
manrun.scale = 0.07;
}

function draw() {
  background(0);
  if(path.y>500){
    path.y = height/2;
  }

  manrun.x = mouseX;
  drawSprites();

}
