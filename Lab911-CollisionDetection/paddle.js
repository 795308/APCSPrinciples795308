class Paddle{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.w = 200
    this.h = 20
    this.clr = color(127);
  }//constructor end
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
  update(){
    var mouseLoc = createVector(mouseX, this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.loc.x = 0
    }
    if(this.loc.x + this.w > width)
    this.loc.x = width - this.w
  }
}
