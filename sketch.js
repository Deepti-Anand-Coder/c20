var s1, s2;
function setup() {
  createCanvas(800,400);
  s1 = createSprite(400, 200, 70, 70);
  s2 = createSprite(200, 200, 50, 50);

  s1.shapeColor = "green" ;
  s2.shapeColor = "green" ;
  


}

function draw() {
  background(255,255,255);  

  s1.x= mouseX;
  s1.y = mouseY; 

  console.log(s1.x - s2.x);
  if(s1. x - s2.x < s1.width/2 + s2.width/2  && s2. x - s1.x < s1.width/2 + s2.width/2 && 
    s1. y - s2.y < s1.height/2 + s2.height/2  && s2. y - s1.y < s1.height/2 + s2.height/2 )
  {
    s1.shapeColor = "red" ;
    s2.shapeColor = "red" ;

  }
  else
  {

    s1.shapeColor = "green" ;
    s2.shapeColor = "green" ;
  }

  
  drawSprites();
}