class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.w = 150
    this.h = 20
    this.clr = color(127);
  }//constructor end
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    rectMode(CORNER)
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }//creates paddle object
  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
    textAlign(LEFT);
    textSize(32);
    text("Score = " + score, 10, 30);
    textAlign(RIGHT);
    textSize(32);
    text("Health = " + health, 800, 30);
  }//moves paddle to mouseX, creates score text
  checkEdges(){
    if(this.loc.x < -1){
      this.loc.x = -1
    }
    if(this.loc.x + this.w > 801)
    this.loc.x = 801 - this.w
  }//makes it so that paddle can't leave the screen
}
