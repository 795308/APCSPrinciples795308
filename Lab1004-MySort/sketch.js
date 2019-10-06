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


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < list.length; i++){
    if(list[0]>list[1] && list[1]>list[2] && list[2]>list[3] && list[3]>list[4]){
      break;
    }else {
      console.log(list[i]);
    }
  }//displays array
  for(var i = 0; i < list.length-1; i++){
    if(list[i]>list[i+1]){
      swap(list, i, i+1)
    }
    if(list[0]>list[1] && list[1]>list[2] && list[2]>list[3] && list[3]>list[4]){
      break;
    }
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
