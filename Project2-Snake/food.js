//  Nico McCarten
// 	11/4/19
class Food{
  constructor(x, y){
    this.loc = createVector(x, y);//location of food
    this.clr = color(255, 0, 0);//color of food
  }
  run(){
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);//colors food
    rect(this.loc.x*w, this.loc.y*w, w, w);//renders food
  }//render end
  update(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      this.loc.x = Math.floor(random(width/w - 1));
      this.loc.y = Math.floor(random(width/w - 1));
    }//moves food to random location if snake head touches it
  }//update end
}//Food end
