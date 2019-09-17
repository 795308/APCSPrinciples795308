class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.w = 150
    this.h = 20
    this.clr = color(127);
    this.score = 0
  }//constructor end
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }//creates paddle object
  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }//moves paddle to mouseX
  checkEdges(){
    if(this.loc.x < -1){
      this.loc.x = -1
    }
    if(this.loc.x + this.w > 801)
    this.loc.x = 801 - this.w
  }//makes it so that paddle can't leave the screen
}
