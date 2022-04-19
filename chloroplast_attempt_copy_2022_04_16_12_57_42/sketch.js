
let cells = [];
let z = 0



function setup() {
  rectMode(CENTER);
  let canvas = createCanvas(400, 400);
  canvas.parent("my-canvas");
  for(let i = 0; i<10; i++){
    if(0<=i && i<2){
      cells[i] = new Cells(100 + 205*i, 50, 200, 100);
    }
    if(2<=i && i<5){
      cells[i] = new Cells(0 + 205*(i-2), 155, 200, 100);
    }
    if(5<=i && i<7){
      cells[i] = new Cells(100 + 205*(i-5), 260, 200, 100);
    }
    if(7<=i && i<10){
      cells[i] = new Cells(0 + 205*(i-7), 365, 200, 100);
    }  
  }
}

function draw() {
  background(0, 204, 0);
  for(let i = 0; i<cells.length; i++){
  cells[i].show();
  cells[i].update();  
}
  push();
  noStroke();
  fill(0, 204, 0, 100);
  rect(width/2, height/2, 390, 390, 10);
  pop();
}
function mouseClicked() {
    if(mouseX>=0 && mouseX<=400 && mouseY>=0 && mouseY<=400 ){
     z+=1;
   }}
class Cells{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.r = 10
    this.sx = random(0,100)
    this.ty = random(0,100)
    this.ab = random(0,100)
    this.cd = random(0,100)
    this.ef = random(0,100)
    this.gh = random(0,100)
    this.ij = random(0,100)
    this.kl = random(0,100)
    
  } 
  show(){
    fill(153, 255, 153);
    rect (this.x, this.y, this.w, this.h, this.r);
    if (z>=1){
    fill(153, 255, 51);
      ellipse(this.s, this.t, 10);
    }
    if (z>=2){
      fill(153, 255, 51);
      ellipse(this.u, this.v, 10);
    }
    if (z>=3){
      fill(153, 255, 51);
      ellipse(this.l, this.m, 10);
    }
    if (z>=4){
      fill(153, 255, 51);
      ellipse(this.o, this.p, 10);
    }
    if (z>=5){
      z=0
    }
    this.s = map(noise(this.sx), 0, 1, this.x - this.w/2, this.x + this.w/2);
    this.t = map(noise(this.ty), 0, 1, this.y - this.h/2, this.y + this.h/2);
    this.u = map(noise(this.ab), 0, 1, this.x + this.w/2, this.x - this.w/2);
    this.v = map(noise(this.cd), 0, 1, this.y - this.h/2, this.y + this.h/2);
    this.l = map(noise(this.ef), 0, 1, this.x - this.w/2, this.x + this.w/2);
    this.m = map(noise(this.gh), 0, 1, this.y - this.h/2, this.y + this.h/2);
    this.o = map(noise(this.ij), 0, 1, this.x - this.w/2, this.x + this.w/2);
    this.p = map(noise(this.kl), 0, 1, this.y - this.h/2, this.y + this.h/2);
  }
  update(){
    this.ty += 0.01
    this.sx += 0.01
    this.ab+=0.01
    this.cd+=0.01
    this.ef+=0.01
    this.gh+=0.01
    this.ij+=0.01
    this.kl+=0.01
  }
 }

