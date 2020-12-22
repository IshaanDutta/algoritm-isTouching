var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 300, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(500,100,50,80);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 80);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject2.shapeColor = "purple";
  gameObject3 = createSprite(300, 100, 50, 80);
  gameObject3.shapeColor = "white";
  gameObject4 = createSprite(400, 100, 50, 80);
  gameObject4.shapeColor = "pink";
}

function draw() {      
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect, gameObject2))
  {
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
  }
  else
  {
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "purple";
  }
  drawSprites();
}
