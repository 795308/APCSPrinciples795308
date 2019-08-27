//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var speedX, speedY;
var x2, y2;
var speedX2, speedY2;
var x3, y3;
var speedX3, speedY3;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x= 200;
  y= 200;
  x2= 600;
  y2= 200;
  x3= 200;
  y3= 600;
  speedX= 1;
  speedY= -1;
  speedX2= 1;
  speedY2= 1;
  speedX3= -1;
  speedY3= -1;


}

//  The draw function is called @ 30 fps
function draw() {
  x= x + speedX;
  y= y + speedY;
  x2= x2 + speedX2;
  y2= y2 + speedY2;
  x3= x3 + speedX3;
  y3= y3 + speedY3;
  fill(255,0,0);
  ellipse(x, y, 100, 100);
  fill(0,255,0);
  ellipse(x2, y2, 100, 100);
  fill(0,0,255);
  ellipse(x3, y3, 100, 100);
  if(x<0){
    speedX = -1*speedX
  }
  if(x>width){
    speedX = -1*speedX
  }
  if(y<0){
    speedY = -1*speedY
  }
  if(y>width){
    speedY = -1*speedY
  }
  if(x2<0){
    speedX2 = -1*speedX2
  }
  if(x2>width){
    speedX2 = -1*speedX2
  }
  if(y2<0){
    speedY2 = -1*speedY2
  }
  if(y2>width){
    speedY2 = -1*speedY2
  }
  if(x3<0){
    speedX3 = -1*speedX3
  }
  if(x3>width){
    speedX3 = -1*speedX3
  }
  if(y3<0){
    speedY3 = -1*speedY3
  }
  if(y3>width){
    speedY3 = -1*speedY3
  }
}
