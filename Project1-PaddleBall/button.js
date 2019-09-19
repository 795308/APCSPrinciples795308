class Button{
  constructor(id){
    this.x = 0
    this.y = 0
    this.w = 120
    this.h = 50
    this.clr = color(255);
    this.textclr = color(0);
    this.id = id
    this.text = "Placeholder"
  }
  run(){
    this.idCheck();
    this.render();
    this.mouseCheck();
  }
  render(){
    rectMode(CENTER)
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER);
    textSize(32);
    fill(this.textclr);
    text(this.text, this.x, this.y + this.h/4);
  }//creates button object
  idCheck(){
    if(this.id === 0){
      this.y = 500
      this.x = 200
      this.clr = color(0, 255, 0);
      this.text = "Easy"
    }else if (this.id === 1) {
      this.y = 500
      this.x = 400
      this.clr = color(244, 232, 104);
      this.text = "Medium"
    }else if (this.id === 2) {
      this.y = 500
      this.x = 600
      this.clr = color(255, 0, 0);
      this.text = "Hard"
    }//defines location, text, and color of the button based on id number
  }
  mouseCheck(){
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2){
      this.textclr = this.clr
    }else {
      this.textclr = color(0);
    }//checks if mouse is hovering over a button to remove the text
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 && mouseIsPressed){
      gameState = 2
    }//starts the game when a button is pressed
  }
}