class Ball{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255),random(255),random(255));
    this.w = random(10, 100);
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.w, this.w)
  }//render end
  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx
    }
    if(this.x > width){
      this.dx = -this.dx
    }
    if(this.y < 0){
      this.dy = -this.dy
    }
    if(this.y > height){
      this.dy = -this.dy
    }
  }//checkEdges end
  update(){
    this.x = this.x + this.dx
    this.y = this.y + this.dy
  }//update end
}//Class end
