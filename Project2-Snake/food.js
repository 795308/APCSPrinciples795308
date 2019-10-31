//  Nico McCarten
// 	10/31/19
class Food{
  constructor(){
    this.loc = createVector(x, y);
    this.clr = color(255, 0, 0)
  }
  run(){
    this.update();
    this.render();
  }
}
