// Nico McCarten
// 10/7/19
class Square{
  constructor(x, y, id){
    this.x = x;
    this.y = y;
    this.w = 100
    this.clr1 = color(255);
    this.clr2 = color(0);
    this.id = id;
  }
  run(){
    this.idCheck();
    this.render();
  }
  render(){
    if(id % 2 === 0){
      fill(this.clr1);
      rect(this.x, this.y, this.w, this.w);
    }else {
      fill(this.clr2);
      rect(this.x, this.y, this.w, this.w);
    }
  }
}
