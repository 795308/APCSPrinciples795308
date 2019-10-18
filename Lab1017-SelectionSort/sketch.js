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
  for(var i = 0; i < 10; i++){
  list[i] = i;
}
shuffle(list, true);
console.log(list);
InsertionSort();

}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function InsertionSort(){
  for(var j = 0; j < list.length-1; j++){
    for(var i = j; i >= 0; i--){
      if(list[i] < list[i-1]){
        swap(list, list[i], list[i-1]);
      }
    }
    console.log(" ");
    console.log(list);
  }
}
