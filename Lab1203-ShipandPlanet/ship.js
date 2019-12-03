class Ship{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
  }
  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  render(){
    this.heading = this.vel.heading();
    fill(this.clr);
    this.angle = this.angle + 0.1
    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.heading + 1.5);
      triangle(-5,8,5,8,0,-8)
    pop();
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }
  }
  update(){
    var distToPlanet;
    distToPlanet = this.loc.dist(planet.loc);
    if(distToPlanet < 10000){
      //add attraction
      this.acc = p5.Vector.sub(planet.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToPlanet < 100){
      planet.loc.x = random(0,800);
      planet.loc.y = random(0,800);
      planet.vel.x = random(-1,1);
      planet.vel.y = random(-1,1);
    }
    this.vel.add(this.acc);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
  }
}
