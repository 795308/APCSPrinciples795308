//  Nico McCarten
// 	10/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];//Array containing Bars
var numbars, barWidth;
var t1;
var t2;
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
  insertionSort();
}

function draw() {
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

function insertionSort(){
  for(var j = 0; j < numBars; j++){
    for(var i = j; i > 0; i--){
      t1 = millis();
      if(bars[i].h < bars[i-1].h && t1 - t2 === 10){
        t2 = millis();
        swap(bars, i, i-1);
        runBars();
      }
    }
  }
}
