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
console.log(list);
SelectionSort();

}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function SelectionSort(){
  for(var j = 0; j < list.length-1; j++){
    var loc = j;
    for(var i = j+1; i < list.length; i++){
      if(list[i] < list[loc]){
        loc = j;
      }
    }
    var number = list[loc];
    list[loc] = list[i];
    list[i] = number
    console.log(" ");
    console.log(list);
  }
}
