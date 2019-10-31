//  Nico McCarten
// 	10/31/19
class Snake{
  constructor(){
    this.loc = createVector(400, 400);
    this.vel = createVector(0, 0);
    this.clr = color(0,0,255);
    this.body = [];
  }
  run(){
    this.update();
    this.tangle();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 10, 10)
  }
  update(){
    if(keyCode === 65){
      this.vel.x = -10
    }else if (keyCode === 87) {
      this.vel.y = 10
    }else if (keyCode === 83) {
      this.vel.y = -10
    }else if (keyCode === 68) {
      this.vel.x = 10
    }
  }
}
