//  Nico McCarten
// 	10/31/19
class Snake{
  constructor(){
    this.loc = createVector(height/w/2, width/w/2);
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
    rect(this.loc.x*w, this.loc.y*w, w, w)
  }
  update(){
    if(keyCode === 65){
      this.vel.x = -1
      this.vel.y = 0
    }else if (keyCode === 87) {
      this.vel.y = -1
      this.vel.x = 0
    }else if (keyCode === 83) {
      this.vel.y = 1
      this.vel.x = 0
    }else if (keyCode === 68) {
      this.vel.x = 1
      this.vel.y = 0
    }
    this.loc.add(this.vel)
  }
  tangle(){
    if(this.loc.x >= 800){
      gameState = 3
    }else if (this.loc.x < 0) {
      gameState = 3
    }else if (this.loc.y >= 800) {
      gameState = 3
    }else if (this.loc.y < 0) {
      gameState = 3
    }
  }
}
