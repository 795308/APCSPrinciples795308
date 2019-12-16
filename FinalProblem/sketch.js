//  Nico McCarten
// 	12/16/19
//  This is a comment
//  The setup function function is called once when your program begins
var ship;//ship loaded into this
var planets = [];//array of planets
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(4);//loads 4 planets and 1 ship


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);//covers background
  runObjects();//runs the planets and ships
}
function loadObjects(num){
  for(var i = 0; i < num; i++){
    planets[i] = new Planet(random(width), random(height));
  }//loads a number of planets equal to num
  ship = new Ship(random(width), random(height), random(-1, 1), random(-1, 1));//loads ship object
}//loads objects into array
function runObjects(){
  for(var i = 0; i < planets.length; i++){
    planets[i].run()
  }//runs planets
  ship.run();//runs ship
}//runs the object

function bubbleSort(){
  for(var j = 0; j < ship.distToPlanet.length; j++){
    if(ship.distToPlanet[j] > ship.distToPlanet[j+1]){
      swap(ship.distToPlanet, j, j+1);//sorts distToPlanet so that the lowest is in 0
      swap(planets, j, j+1);//sorts planets so that the closest one to the ship is in 0
    }
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}//swaps things two things in an array when called
