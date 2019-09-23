class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
    this.remove();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }//render end
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
      this.vel.y = 0
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > 820){
      this.loc.y = 1
    }
  }//checkEdges end
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }//update end
  isColliding(){
    if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2){
      return true
    }
  }//checks if the ball is colliding with the paddle
  remove(){
    for(var i = balls.length -1; i>=0; i--){
      if(balls[i].isColliding()){
        balls.splice(i, 1);
        if(this.vel.y >= 0){
          score = score + 1
        }else if (this.vel.y < 0) {
          health = health - 1
        }
      }
    }
  }//removes balls that touch the paddle from the array.
}//Class end
