class Button{
  constructor(id){
    this.x = 0
    this.y = 0
    this.w = 100
    this.h = 50
    this.clr = color(255);
    this.id = id
  }
  run(){
    this.idcheck();
    this.render();
  }
  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
  }//creates button object
  idcheck(){
    if(this.id === 0){
      this.y = 475
      this.x = 100
      this.clr = color(0, 255, 0);
    }else if (this.id === 1) {
      this.y = 475
      this.x = 350
      this.clr = color(244, 232, 104);
    }else if (this.id === 2) {
      this.y = 475
      this.x = 600
      this.clr = color(255, 0, 0);
    }
  }
}
