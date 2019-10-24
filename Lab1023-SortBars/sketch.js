//  Nico McCarten
// 	10/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];//Array containing Bars
var numbars, barWidth;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  barWidth = 10;
  numBars = width/barWidth
  loadBars(numBars);
  runBars();
  shuffle(bars, true);
}

function draw() {
  background(5, 5, 5);
  frameRate(1000);
  runBars();
  bubbleSort();
}

function loadBars(num){
  for(var i = 0; i<num; i++){
    var barHeight = Math.floor(random(height));
    var loc = createVector(i*barWidth, barHeight);
    bars[i] = new Bar(loc);
  }
}

function runBars(){
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}

function swap(bars, a, b){
  var temp = bars[a].loc.x;
  bars[a].loc.x = bars[b].loc.x;
  bars[b].loc.x = temp;
}

function bubbleSort(){
  for(var i = 0; i < bars.length-1; i++){
    for(var j = 0; j < bars.length-1-i; j++){
      if(bars[j].h > bars[j+1].h){
        swap(bars, j, j+1);
      }
    }
  }
}
