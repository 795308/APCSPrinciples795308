//  Nico McCarten
// 	11/4/19
class Snake{
  constructor(){
    this.head = createVector(height/w/2, width/w/2);
    this.vel = createVector(0, 0);
    this.clr = color(0,0,255);
    this.body = [];
    this.length = 0;
  }
  run(){
    this.update();
    this.tangle();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.head.x*w, this.head.y*w, w, w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x*w, this.body[i].y*w, w, w);
    }
  }
  update(){
    if(keyCode === 65){
      this.vel.x = -1;
      this.vel.y = 0;
    }else if (keyCode === 87) {
      this.vel.y = -1;
      this.vel.x = 0;
    }else if (keyCode === 83) {
      this.vel.y = 1;
      this.vel.x = 0;
    }else if (keyCode === 68) {
      this.vel.x = 1;
      this.vel.y = 0;
    }
    //update the body
    this.body[0].x = this.head.x;
    this.body[0].y = this.head.y;
    //update the head
    this.head.add(this.vel);
  }
  tangle(){
    if(this.head.x >= 80){
      gameState = 3;
    }else if (this.head.x < 0) {
      gameState = 3;
    }else if (this.head.y >= 80) {
      gameState = 3;
    }else if (this.head.y < 0) {
      gameState = 3;
    }
    for(var i = 0; i < this.body.length; i++){
      if(this.head.x === this.body[i].x && this.head.y === this.body[i].y){
        gameState = 3;
      }
    }
    if(this.head.x === food.loc.x && this.head.y === food.loc.y){
      this.createSegment();
    }
  }
  createSegment(){
    this.body.push(createVector(0,0));
  }
}
