//  Nico McCarten
// 	10/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];//Array containing Bars
var comps = 0;
var swaps = 0;
var t = 0;
var barnum = 2
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < barnum; i++){
    bars[i] = new Bar(i, i);
  }
  //selectionSort();
  //bubbleSort();
  //insertionSort();
}

function draw() {
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  swaps = swaps + 1;
}

function selectionSort(){
  shuffle(bars, true);
  console.log("Selection Sort");
  console.log(list);
  t = millis();
  comps = 0;
  swaps = 0;
  for(var i = 0; i < bars.length-1; i++){
    var index = i;
    for(var j = i+1; j < bars.length; j++){
      comps = comps + 1
      if(bars[j].num < bars[index].num){
        index = j;
      }
    }
    var number = bars[index].num;
    bars[index].num = bars[i].num;
    bars[i].num = number;
    swaps = swaps + 1;
  }
  t = millis() - t;
  console.log(list);
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
  console.log("Time = " + t);
}

function insertionSort(){
  shuffle(bars, true);
  console.log("Insertion Sort");
  console.log(list);
  t = millis();
  comps = 0;
  swaps = 0;
  for(var j = 0; j < bars.length; j++){
    for(var i = j; i > 0; i--){
      comps = comps + 1;
      if(bars[i].num < bars[i-1].num){
        swap(list, i, i-1);
      }
    }
  }
  t = millis() - t;
  console.log(list);
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
  console.log("Time = " + t);
}

function bubbleSort(){
  shuffle(bars, true);
  console.log("Bubble Sort");
  console.log(list);
  t = millis();
  comps = 0;
  swaps = 0;
  for(var j = 0; j < bars.length-1; j++){
    for(var i = 0; i < bars.length-1-j; i++){
      comps = comps + 1;
      if(list[i] > list[i+1]){
        swap(list, i, i+1);
      }
    }
  }
  t = millis() - t;
  console.log(list);
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
  console.log("Time = " + t);
}
