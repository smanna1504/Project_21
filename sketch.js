//CREATE THE VARIABLES
var thickness,wall;
var speed,weight,bullet;

//SETUP FNC.
function setup() {
//CREATE THE CANVAS
createCanvas(1600,400);
//CREATE RANDOM NOS. FOR SPEED,WEIGHT&THICKNESS
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
//CREATE BULLET
bullet=createSprite(50,200,20,60);
bullet.shapeColor="white";
//CREATE WALL
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
//BULLET VELOCITY
bullet.velocityX=speed;
}

function draw() {
//BACKGROUND COLOUR
background(255,255,255);  

//HAS COLLIDED FNC. CALL
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
//DAMAGE BY BULLET CALCULATION
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

 if (damage>10){
   wall.shapeColor=color(255,0,0);
 }

 if(damage<10){
   wall.shapeColor=color(0,255,0);
}

}
//DRAW SPRITES
drawSprites();
}
