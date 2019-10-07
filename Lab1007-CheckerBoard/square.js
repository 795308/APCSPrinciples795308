// Nico McCarten
// 10/7/19
class Square{
  constructor(x, id){
    this.x = 0;
    this.y = 0
    this.w = 100
    this.clr = color(255);
    this.id = id;
  }
  run(){
    this.idCheck();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.w);
  }
  idCheck(){
    // this.x = id*100
    // if(this.x >= 800){
    //   this.x = this.x - 800
    //   this.y = this.y + 100
    // }
    if(id%2 === 0){
      this.clr = color(255);
    }else {
      this.clr = color(0);
    }
  }
}
