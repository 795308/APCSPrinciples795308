class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.id = id;
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
    var distToAttractorball;
    var distToRepellerballball;
    distToAttractorball = this.loc.dist(attractorBall.loc);
    distToRepellerballball = this.loc.dist(repellerBall.loc);
    if(this.id >= 0){
      if(distToAttractorball < 250){
        //add attraction
        this.acc = p5.Vector.sub(attractorBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToRepellerballball < 150){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, repellerBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
  }
}
