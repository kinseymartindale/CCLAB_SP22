
let smoke = [];
function setup() {
  //frameRate(8)
  rectMode(CENTER)
  angleMode(DEGREES)
  createCanvas(400, 400); 
  
  
}

  function draw(){ 
  background(0, 0, 55);
  fill(0, 102, 0);
  noStroke();
  rect(200, 325, 400, 150);
  //green ground
  fill(50);
  ellipse(width/2, 360, 100, 45)
  //shadow
  noStroke();
  push();
  translate(175, 325)
  rotate(-75);
  fill(153, 76, 0);
  rect(0, 0, 80, 20);
  //left most log
  pop();
  push();
  translate(225, 325)
  fill(153, 76, 0);
  rotate(75);
  rect(0, 0, 80, 20);
  //right most log
  pop();
  //variables
  x1=185+(3*sin(5*frameCount))
  x2=185+(3*cos(5*frameCount))
  x3=185-(3*sin(5*frameCount))
  x4=185-(3*cos(5*frameCount))
//flames
  push();
  noStroke();  
  fill(255, 128, 0, 175);
  triangle(170, 365, 200, 365, x1, 250);
  translate(10, 0)
  triangle(170, 365, 200, 365, x2, 250);
  translate(10, 0)
  triangle(170, 365, 200, 365, x3, 250);
  translate(10, 0)
  triangle(170, 365, 200, 365, x4, 250);  
    //smoke
  for (let i=0; i<1; i++) {
    let s = new Smoke();
    smoke.push(s);
  }
  
  for (let i=smoke.length -1; i>=0; i--){
  smoke[i].update();
  smoke[i].show();
    if(smoke[i].finished()){
      smoke.splice(i, 1);
    }
  }   
  }

class Smoke {
  constructor (){
    this.x = 170;
    this.y = 275;
    this.vx = random(-0.3, -0.1);
    this.vy = random(-2, -1);
    this.ax=random(1, 3);
    this.alpha = 140
  }
  finished(){
    return this.alpha<0;
  }
  update(){
  this.x = this.x + (this.vx * this.ax)
  this.y += this.vy
    this.alpha -= 0.8
  }
  
  show(){
    noStroke();
    fill(96, 96, 96, this.alpha);
    ellipse(this.x, this.y, 25);
  }
}
