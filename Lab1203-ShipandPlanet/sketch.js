//  Nico McCarten
// 	12/3/19
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);
  runObjects();
}
function loadObjects(n){
  planet = new Planet(width/2, height/2, random(-1,1), random(-1,1));
  ship = new Ship(random(width), random(height), random(-1, 1), random(-1, 1));
}//loads balls into array
function runObjects(){
  planet.run();
  ship.run();
}//runs the balls
