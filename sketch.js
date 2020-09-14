var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect= createSprite(300,100,30,30);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x -  movingRect.x<fixedRect.width/2+movingRect.width/2){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{fixedRect.shapeColor="blue";
  movingRect.shapeColor="red";

  }

  drawSprites();
}