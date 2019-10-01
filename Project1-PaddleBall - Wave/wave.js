//  Nico McCarten
// 	9/26/19
class Wave{
  constructor(x, y, barwid, maxhei, amount){
    //Initial Variables
  //Coords
  this.x = x;
  this.y = y;
  //Bar Properties
  this.maxhei = maxhei;
  this.amount = amount;
  this.barwid = barwid;
  rectMode(CENTER);
  }
  run(){
    this.display();
  }
  display(){
    for(this.i=0; this.i<this.amount; this.i++)
    {
      //Time in milliseconds/600 for smoothe transitions
      this.time = millis()/600;
      //Cycling colors depending on time
      this.r = map(sin(this.time+this.i/90), -1, 1, 0, 255);
      this.g = map(sin(this.time+22.5+this.i/90), -1, 1, 0, 255);
      this.b = map(sin(this.time+45+this.i/90), -1, 1, 0, 255);
      fill(this.r, this.g, this.b);
      //Hight depending on time and i
  	  this.hei = map(sin(this.i/90 + this.time), -1, 1, 0, this.maxhei);
      //Actual Draw
      strokeWeight(1);
      stroke(this.g, this.b, this.r);
   	  rect(this.x + this.i*this.barwid-this.amount*this.barwid/2, this.y, this.barwid+2, this.hei);

    }
  }
}
