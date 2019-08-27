//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var speedX, speedY;
var l, w;
var changeL, changeW;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x= 400;
  y= 400;
  l= 100;
  w= 100;



}

//  The draw function is called @ 30 fps
function draw() {
  speedX= random(-5, 5);
  speedY= random(-5, 5);
  changeL= random(-5, 5);
  changeW= random(-5, 5);
  x= x + speedX;
  y= y + speedY;
  l= l + changeL
  w= w + changeW
  fill(0, 0, 200);
  ellipse(x, y, l, w);
}
