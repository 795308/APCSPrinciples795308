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
    this.ballnumber = 0
    this.startinghealth = 0
    this.difficultyscale = 0
    this.gotostate = 2
  }
  run(){
    this.idCheck();
    this.render();
    this.mouseCheck();
  }
  render(){
    rectMode(CENTER);
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
      this.ballnumber = 1
      this.difficultyscale = 2
      this.startinghealth = 20
      this.gotostate = 2
    }else if (this.id === 1) {
      this.y = 500
      this.x = 400
      this.clr = color(244, 232, 104);
      this.text = "Medium"
      this.ballnumber = 3
      this.difficultyscale = 3
      this.startinghealth = 15
      this.gotostate = 2
    }else if (this.id === 2) {
      this.y = 500
      this.x = 600
      this.clr = color(255, 0, 0);
      this.text = "Hard"
      this.ballnumber = 5
      this.difficultyscale = 4
      this.startinghealth = 10
      this.gotostate = 2
    }else if (this.id === 3) {
      this.y = 600
      this.x = 400
      this.clr = color(255);
      this.text = "Instructions"
      this.gotostate = 4
      this.w = 200
    }else if (this.id === 4) {
      this.y = 700
      this.x = 400
      this.clr = color(255);
      this.text = "Restart?"
      this.gotostate = 1
      this.ballnumber = 0
      this.difficultyscale = 0
      this.startinghealth = 20
    }else if (this.id === 5) {
      this.y = 700
      this.x = 400
      this.clr = color(255);
      this.text = "Back"
      this.gotostate = 1
    }//defines location, text, and color of the button based on id number
  }
  mouseCheck(){
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2){
      this.textclr = this.clr
    }else {
      this.textclr = color(0);
    }//checks if mouse is hovering over a button to remove the text
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 && mouseIsPressed){
      gameState = this.gotostate
      n = this.ballnumber
      health = this.startinghealth
      difficulty = this.difficultyscale
    }//starts the game when a button is pressed
  }
}
