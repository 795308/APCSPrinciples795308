//  Nico McCarten
// 	10/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];//Array containing the numbers
var comps = 0;
var swaps = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < 10; i++){
    list[i] = i;
  }
  shuffle(list, true);
  selectionSort();
  console.log(list);
  shuffle(list, true);
  bubbleSort();
  console.log(list);
  shuffle(list, true);
  insertionSort();
  console.log(list);
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  swaps = swaps + 1;
}

function selectionSort(){
  console.log("Selection Sort");
  comps = 0
  swaps = 0
  for(var i = 0; i < list.length-1; i++){
    var index = i;
    for(var j = i+1; j < list.length; j++){
      comps = comps + 1
      if(list[j] < list[index]){
        index = j;
      }
    }
    var number = list[index];
    list[index] = list[i];
    list[i] = number;
    swaps = swaps + 1;
  }
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
}

function insertionSort(){
  console.log("Insertion Sort");
  comps = 0
  swaps = 0
  for(var j = 0; j < list.length; j++){
    for(var i = j; i > 0; i--){
      comps = comps + 1;
      if(list[i] < list[i-1]){
        swap(list, i, i-1);
      }
    }
  }
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
}

function bubbleSort(){
  console.log("Bubble Sort");
  comps = 0
  swaps = 0
  for(var j = 0; j < list.length-1; j++){
    for(var i = 0; i < list.length-1-j; i++){
      comps = comps + 1;
      if(list[i] > list[i+1]){
        swap(list, i, i+1);
      }
    }
  }
  console.log("Swaps = " + swaps);
  console.log("Comps = " + comps);
}
