//  Nico McCarten
// 	9/26/19
class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);//location vector
    this.w = 150;//width of paddle
    this.h = 20;//height of paddle
    this.clr = color(127);//grey color of paddle
  }//constructor end
  run(){
    this.render();//makes paddle appear
    this.update();//moves paddle to mouseX
    this.checkEdges();//makes sure paddle can not leave the screen
  }
  render(){
    rectMode(CENTER)
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }//creates paddle object
  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);//moves paddle to mouseX
    textAlign(LEFT);
    textSize(32);
    text("Score = " + score, 10, 30);//creates score text
    textAlign(RIGHT);
    textSize(32);
    text("Health = " + health, 800, 30);//creates health text
  }
  checkEdges(){
    if(this.loc.x - this.w/2 < -1){
      this.loc.x = -1 + this.w/2
    }//checks if paddle is leaving the screen to the left and moves it back on
    if(this.loc.x + this.w/2 > 801){
      this.loc.x = 801 - this.w/2
    }//checks if paddle is leaving the screen to the right and moves it back on
  }
}
