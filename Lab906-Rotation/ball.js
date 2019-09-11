class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0){this.w = 50;}
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
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
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y

    }
  }//checkEdges end
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
    if(this.id < 0){
      if(distToAttractorball < 400){
        //add attraction
        this.acc = p5.Vector.sub(attractorBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToAttractorball < 100){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, attractorBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    if(this.id < 0){
      if(distToRepellerballball < 300){
        //add attraction
        this.acc = p5.Vector.sub(repellerBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToRepellerballball < 100){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, repellerBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    this.loc.add(this.vel);
  }//update end
}//Class end
