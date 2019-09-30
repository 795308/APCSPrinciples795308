//  Nico McCarten
// 	9/26/19
class Ball{//creates the ball class, which creates the bouncing balls
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);//location vector
    this.vel = createVector(dx, dy);//velocity vector
    this.acc = createVector(0, 0.1);//accleration vector, which is always down
    this.clr = color(random(255),random(255),random(255));//randomizes color
    this.w = 15;//defines size of balls
  }//constructor end
  run(){
    this.checkEdges();//makes the ball bounce off the sides
    this.update();//makes the ball move
    this.render();//makes the ball appear
    this.isColliding();//checks if the ball is touching the paddle
    this.remove();//deletes the balls touching the paddle
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }//render end
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }//inverts x velocity on touching the left side of the screen
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }//inverts x velocity on touching the right side of the screen
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
      this.vel.y = 0
    }//inverts y velocity on touching the top of the screen, and then removes velocity to prevent constant bouncing
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }//inverts y velocity on touching the bottom of the screen
    if(this.loc.y > 820){
      this.loc.y = 1
    }//moves any balls that have fallen off the bottom of the screen to the top.
  }//checkEdges end
  update(){
    this.vel.add(this.acc);//increases velocity in a downwards direction
    this.loc.add(this.vel);//makes the ball move
  }//update end
  isColliding(){
    if(this.loc.x > paddle.loc.x - paddle.w/2 &&
      this.loc.x < paddle.loc.x + paddle.w/2 &&
      this.loc.y > paddle.loc.y - paddle.h/2 &&
      this.loc.y < paddle.loc.y + paddle.h/2)
      {
        console.log("hit detected");
        return true
       }
  }//checks if the ball is colliding with the paddle
  remove(){
    for(var i = balls.length -1; i>=0; i--){
      if(balls[i].isColliding()){
        balls.splice(i, 1);
        if(this.vel.y >= 0){
          score = score + 1;//increses score if the ball hit the top of the paddle
        }else if (this.vel.y < 0) {
          health = health - 1;//decreases health if the ball hit the bottom of the paddle
        }
      }
    }
  }//removes balls that touch the paddle from the array.
}//Class end
