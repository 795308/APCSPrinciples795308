//  Nico McCarten
// 	10/17/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];//Array containing the numbers
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < 2500; i++){
  list[i] = i;
}
shuffle(list, true);
SelectionSort();
console.log(list);
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function SelectionSort(){
  for(var i = 0; i < list.length-1; i++){
    var index = i;
    for(var j = i+1; j < list.length; j++){
      if(list[j] < list[index]){
        index = j;
      }
    }
    var number = list[index];
    list[index] = list[i];
    list[i] = number;
  }
}
