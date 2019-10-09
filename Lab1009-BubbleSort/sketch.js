//  Nico McCarten
// 	10/9/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [6,3,1,2,4,5]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  BubbleSort();

}

function BubbleSort(){
  for(var i = 0; i < list.length-1; i++){
    if(list[i] > list[i+1]){
      swap(list, i, i+1)
    }
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
