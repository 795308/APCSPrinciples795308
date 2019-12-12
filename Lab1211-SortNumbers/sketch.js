//  Nico McCarten
//  12/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNumbers(11);//loads n random numbers
  shuffle(list, true);//shuffles the list
  mySort();//sorts the list
  logNumbers();//logs list, average, and median

}

function mySort(){
  for(var j = 0; j < list.length-1; j++){
    for(var i = 0; i < list.length-1-j; i++){
      if(list[i] > list[i+1]){
        swap(list, i, i+1);//bubble sort function, sorts list
      }
    }
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;//swaps two objects in an array
}

function loadNumbers(n){
  for(var i = 0; i < n; i++){
    list[i] = Math.floor(random(1,100));
  }//loads n random numbers between 1 and 100
}

function logNumbers(){
  console.log(list);//logs list
  findAvg();//finds the average of the list
  findMedian();//finds median of list
}

function findAvg(){
  var avg = 0
  for(var i = 0; i < list.length; i++){
    avg = avg + list[i];
  }//adds all numbers in the list together
  avg = avg/list.length;//divides sum by length of list
  console.log(avg);//logs average
}

function findMedian(){
  var j = 0;
  var i = 0;
  var k = 0;
  if(list.length%2 ==! 0){
    j = list.length - 1;
    j = j/2;
    console.log(list[j]);
  }//finds middle number if list length is odd
  if(list.length%2 === 0){
    j = list.length/2;
    i = j - 1;
    k = list[i] + list[j];
    k = k/2
    console.log(k);
  }//finds median if list is even
}
