class Bar{
  constructor(id, num){
    this.loc = createVector(0, 0);
    this.id = id;
    this.h = num*10+10
    this.num = num
  }
  run(){
    this.render();
    this.idCheck();
  }
  render(){
    fill(255);
    rect(this.loc.x, this.loc.y, 800/barnum, this.h);
  }
  idCheck(){
    this.loc.x = this.id*800/barnum;
    this.loc.y = 0
  }
}
