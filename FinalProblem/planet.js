//  Nico McCarten
//  12/16/19
class Planet{
  constructor(x,y){
    this.loc = createVector(x, y);//location of planet
    this.vel = createVector(0);//velocity of planet: 0
    this.acc = createVector(0);//acceleration of planet: 0
    this.clr = color(random(255),random(255),random(255));//random color generator
    this.w = 25;//width of planets
  }//constructor end
  run(){
    this.render();//renders planet
  }//run end
  render(){
    fill(this.clr);//colors planet this.clr
    ellipse(this.loc.x, this.loc.y, this.w, this.w);//renders planet
  }//render end
}//Class end
