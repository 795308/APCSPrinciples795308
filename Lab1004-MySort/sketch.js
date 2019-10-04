//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [3,6,1,2,3];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text("" + list[0]);
  text("" + list[1]);
  text("" + list[2]);
  text("" + list[3]);
  text("" + list[4]);
  for(var i = 0; i < list.length-1; i++){

  }

}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
