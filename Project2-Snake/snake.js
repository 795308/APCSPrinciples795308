//  Nico McCarten
// 	11/4/19
class Snake{
  constructor(){
    this.loc = createVector(height/w/2, width/w/2);
    this.vel = createVector(0, 0);
    this.clr = color(0,0,255);
    this.body = [];
    this.length = 0;
    this.prevloc = createVector(0, 0);
    this.prevvel = createVector(0, 0);
  }
  run(){
    this.update();
    this.tangle();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x*w, this.loc.y*w, w, w);
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
    if(this.length === 0){
      this.prevloc.x = this.loc.x;
      this.prevloc.y = this.loc.y;
      this.prevvel.x = this.vel.x;
      this.prevvel.y = this.vel.y;
    }else if (this.length > 0) {
      this.prevloc.x = this.body[this.length-1].loc.x;
      this.prevloc.y = this.body[this.length-1].loc.y;
      this.prevvel.x = this.body[this.length-1].vel.x;
      this.prevvel.y = this.body[this.length-1].vel.y;
    }
    this.loc.add(this.vel);
    if(food.loc.x === this.loc.x && food.loc.y === this.loc.y){
      this.body[this.length] = new Body(this.prevloc.x, this.prevloc.y, this.prevvel.x, this.prevvel.y, this.length);
      this.length++;
    }
  }
  tangle(){
    if(this.loc.x >= 80){
      gameState = 3
    }else if (this.loc.x < 0) {
      gameState = 3
    }else if (this.loc.y >= 80) {
      gameState = 3
    }else if (this.loc.y < 0) {
      gameState = 3
    }
  }
}
