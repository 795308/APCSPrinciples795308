//  Nico McCarten
//  12/16/19
class Ship{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);//location vector of ship
    this.vel = createVector(dx, dy);//velocity vector of ship
    this.acc = createVector(0);//acceleration vector of ship
    this.clr = color(random(255),random(255),random(255));//random color
    this.distToPlanet = [];//distance of planets from ship
  }//constructor end
  run(){
    this.render();//renders ships
    this.checkEdges();//makes ship bounce off edges of canvas
    this.update();
  }//run end
  render(){
    this.heading = this.vel.heading();
    fill(this.clr);//makes ship color made in clr
    this.angle = this.angle + 0.1
    push();//makes ship point where it is going
      translate(this.loc.x, this.loc.y);
      rotate(this.heading + 1.5);
      triangle(-5,8,5,8,0,-8)
    pop();
  }//render end
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }//bounces ship off left edge
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }//bounces ship off right edge
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }//bounces ship off top edge
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }//bounces ship off bottom edge
  }//checkEdges end
  update(){
    for(var i = 0; i < planets.length; i++){
      this.distToPlanet[i] = this.loc.dist(planets[i].loc);
    }//loads distance of planets to ship into an array
    for(var i = 0; i < planets.length; i++){
      bubbleSort();
    }//sorts so that the closest planet is slot 0 of the planets and distToPlanet arrays
    if(this.distToPlanet[0] < 10000){
      //add attraction to nearest planet
      this.acc = p5.Vector.sub(planets[0].loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    //moves planets away from ship when it gets too close
    for(var i = 0; i < planets.length; i++){
      if(this.distToPlanet[0] < 100){
        planets[0].loc.x = random(0,800);
        planets[0].loc.y = random(0,800);
      }
    }
    this.vel.add(this.acc);//accelerates ship towards nearest planet
    this.loc.add(this.vel);//makes ship move in direction of velocity
    this.vel.limit(5);//limits maximum velocity to 5
  }//update end
}//ship end
