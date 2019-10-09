// Nico McCarten
// 10/7/19
class Square{
  constructor(x, y, id, id2){
    this.x = x;
    this.y = y;
    this.w = 100
    this.clr1 = color(255);
    this.clr2 = color(0);
    this.idlength = id;
    this.idwidth = id2
  }
  run(){
    this.render();
  }
  render(){
    if(this.idwidth % 2){
      this.idlength = this.idlength + 1;
    }
    if(this.idlength % 2 === 0){
      fill(this.clr1);
      rect(this.x, this.y, this.w, this.w);
    }else {
      fill(this.clr2);
      rect(this.x, this.y, this.w, this.w);
    }
  }
}
