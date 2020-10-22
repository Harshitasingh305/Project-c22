var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(40, 200, 20, 20);
  car.shapeColor="black";
  wall=createSprite(700,200,60,height/2)
  wall.shapeColor="red"
  car.velocityX=speed; 
}

function draw() {
  background("pink"); 
  wall.shapeColor=80,80,80;
  
  if(wall.x-car.x<(wall.width+car.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180&& deformation>100)
  {
     car.shapeColor=color(255,0,0)


  }
   if(deformation<180&& deformation>100)
  {
     car.shapeColor=color(230,230,0)


  }
   if(deformation<100)
  {
     car.shapeColor=color(0,255,0)


  }


  }
  drawSprites();
}