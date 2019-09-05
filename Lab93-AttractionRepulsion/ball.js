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
  }//checkEdges end
  update(){
    var distToMainball;
    if(this.id >= 0){
      distToMainball = this.loc.dist(mainBall.loc);
      if(distToMainball < 100000){
        //add attraction
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToMainball < 150){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    this.loc.add(this.vel);
    this.vel.limit(5);
  }//update end
}//Class end
