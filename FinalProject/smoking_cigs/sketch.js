let system;

let r;
let g;
let b;
let y = 265;
let y1 = 256;
let y2 = 256;
let y3 = 256;
let y4 = 256;
let y5 = 256;
let y6 = 256;
let size;
let num;
let arr = [];
function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b);
  //smoke
  noStroke();
  //num = random(0, 1);
  fill(84, 94, 99);
  size = random(5, 20);

  ellipse(random(180, 220), y, size);
  y -= 1;
  if (y < 0) {
    y = 265;
  }
  if (y < 263) {
    ellipse(random(180, 220), y1, size);
    if (y1 < 0) {
      y1 = 265;
    }
    y1 -= 1;
    if (y1 < 263) {
      ellipse(random(180, 220), y2, size);
      y2 -= 1;
    }
  }
  if (y < 260) {
    ellipse(random(180, 220), y3, size);
    if (y3 < 0) {
      y3 = 265;
    }
    y3 -= 1;
    if (y3 < 263) {
      ellipse(random(180, 220), y4, size);
      y4 -= 1;
    }
  }
  if (y < 255) {
    ellipse(random(180, 220), y5, size);
    if (y5 < 0) {
      y5 = 265;
    }
    y5 -= 1;
    if (y5 < 263) {
      ellipse(random(180, 220), y6, size);
      y6 -= 1;
    }
  }

  push();
  strokeWeight(1);
  //cigarette body
  noStroke();
  fill(71, 72, 61);
  rect(210, 245, 250, 40);
  fill(255, 0, 0);
  rect(220, 245, 250, 40);

  //ellipse(230, 265, 40, 40);
  fill("white");
  //rect(250, 170, 250, 40);
  rect(225, 245, 250, 40);

  fill(217, 164, 72);
  rect(400, 245, 150, 40);
  fill("white");
  ellipse(410, 275, 5, 5);
  ellipse(425, 265, 5, 5);
  ellipse(440, 275, 5, 5);
  ellipse(455, 265, 5, 5);
  ellipse(470, 275, 5, 5);
  ellipse(485, 265, 5, 5);
  ellipse(500, 275, 5, 5);
  ellipse(410, 255, 5, 5);
  ellipse(440, 255, 5, 5);
  ellipse(470, 255, 5, 5);
  ellipse(500, 255, 5, 5);

  //lips
  push();
  noStroke();
  fill(235, 23, 55);
  rotate(PI / 6.0);
  ellipse(560, -40, 100, 55);
  rotate(PI / 6.0);
  ellipse(500, -300, 55, 100);
  pop();
  pop();
}
