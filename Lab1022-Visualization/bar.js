class Bar{
  constructor(id, num){
    this.loc = createVector(0, 0);
    id = id;
    this.h = num*10
    this.num = num
  }
  run(){
    this.render();
    this.idCheck();
  }
  render(){
    fill(this.num*2);
    rect(this.loc.x, this.loc.y, 10, this.h);
  }
  idCheck(){
    this.loc.x = id*10;
    this.loc.y = 100
  }
}
