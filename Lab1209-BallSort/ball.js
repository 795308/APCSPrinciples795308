//  Nico McCarten
// 	12/09/19
class Ball{//creates the ball class, which creates the bouncing balls
  constructor(location, red){
    this.loc = location;//location vector
    this.shade = red;//holds the number of the ball's color
    this.clr = color(red, 0, 0);
    this.w = 15;//defines size of balls
  }//constructor end
  run(){
    this.render();//makes the ball appear
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);//renders ball
  }//render end
  set(i){
    this.loc.x = i*40+20;//moves balls to the correct position;
  }//set end
}
