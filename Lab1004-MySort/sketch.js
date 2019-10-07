//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [3,6,1,2,4];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < list.length-1; i++){
    console.log(list[i]);
  }

}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < list.length-1; i++){
    if(list[0]<list[1] && list[1]<list[2] && list[2]<list[3] && list[3]<list[4]){
      break;
    }//stops program if array is sorted
    if(list[i]>list[i+1]){
      swap(list, i, i+1)
    }//swaps positions if one is greater than the other
    for(var i = 0; i < list.length-1; i++){
      console.log(list[i]);
    }
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
