class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.angle = 0;
    this.id = id;
  }
  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  render(){
    fill(this.clr);
    this.angle = this.angle + 0.1
    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      triangle(-5,8,5,8,0,-8)
    pop();
  }
  checkEdges(){
      if(this.loc.x < 0){
        this.loc.x = width
      }
      if(this.loc.x > width){
        this.loc.x = 0
      }
      if(this.loc.y < 0){
        this.loc.y = height
      }
      if(this.loc.y > height){
        this.loc.y = 0
      }
  }
  update(){
    this.loc.add(this.vel)
  }
}
