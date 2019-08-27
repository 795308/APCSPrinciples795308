//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(255,0,0);
  quad(400, 100, 200, 400, 400, 700, 600, 400);

  fill(0,0,255);
  ellipse(400,400,100,100);

  fill(0,100,0);
  triangle(425, 400, 525, 350, 525, 450);
  triangle(400, 375, 350, 275, 450, 275);
  triangle(375, 400, 275, 350, 275, 450);
  triangle(400, 425, 350, 525, 450, 525);
}
