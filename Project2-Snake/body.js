//  Nico McCarten
// 	11/4/19
class Body{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(0,0,255);
    this.id = id
  }
  run(){
    this.update();
    //this.tangle();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x*w, this.loc.y*w, w, w);
  }
  update(){
    this.loc.add(this.vel);
    if(this.id === 0){
      this.vel = snake.vel;
    }else if (this.id > 0) {
      this.vel = snake.body[this.id].vel;
    }
  }
  tangle(){
    if(this.loc.x === snake.loc.x && this.loc.y === snake.loc.y){
      gameState = 3;
    }
  }
}
