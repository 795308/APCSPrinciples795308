//  Nico McCarten
// 	10/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];//Array containing Bars
var numBars = 80
var rectX = 0;
var horizLoc = [];
var heights = [];
function setup() {
  frameRate(100);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  for (n = 0; n < numBars)
}

function draw() {
  //frameRate(30);
  if (j < numBars){
    i = j
    if(i > 0){
      if(bars[i].h < bars[i-1].h){
        swap(bars, i , i-1);
        runBars();
      }
      i--;
    }
    j++;
  }
}

function loadBars(num){
  for(var i = 0; i<num; i++){
    var barHeight = Math.floor(random(height));
    var loc = createVector(i*barWidth, barHeight);
    bars[i] = new Bar(loc);
  }
}

function runBars(){
  background(5,5,5);
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}

function swap(bars, a, b){
  var temp = bars[a].loc.x;
  bars[a].loc.x = bars[b].loc.x;
  bars[b].loc.x = temp;
}
