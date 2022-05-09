function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(207, 194, 10);
  rect(200,200,200,200);
  fill(47, 140, 24);
  rect(0,200,200,200);
  fill(44, 94, 168);
  rect(200,0,200,200);
  fill(212, 120, 0);
  rect(0,0,200,200);
  
  //outside of matchbox
  fill(207, 194, 10);
  rect(45,35,110,130);
  fill(44, 94, 168);
  rect(45,235,110,130);
  fill(47, 140, 24);
  rect(245,35,110,130);
  fill(212, 120, 0);
  rect(245,235,110,130);
  
  //inside lining
  fill(207, 194, 10);
  rect(50,40,100,120);
  fill(44, 94, 168);
  rect(50,240,100,120);
  fill(47, 140, 24);
  rect(250,40,100,120);
  fill(212, 120, 0);
  rect(250,240,100,120);
  
  //match sticks for red box
  fill(128, 92, 51);
  rect(58,65,6,100);
  rect(77,65,6,100);
  rect(96,65,6,100);
  rect(116,65,6,100);
  rect(136,65,6,100);
  
  //match sticks for green box
  fill(128, 92, 51);
  rect(258,65,6,100);
  rect(277,65,6,100);
  rect(296,65,6,100);
  rect(316,65,6,100);
  rect(336,65,6,100);
  
  //match sticks for blue box
  fill(128, 92, 51);
  rect(58,265,6,100);
  rect(77,265,6,100);
  rect(96,265,6,100);
  rect(116,265,6,100);
  rect(136,265,6,100);
  
  //match sticks for yellow box
  fill(128, 92, 51);
  rect(258,265,6,100);
  rect(277,265,6,100);
  rect(296,265,6,100);
  rect(316,265,6,100);
  rect(336,265,6,100);
  
  //cover
  fill(207, 194, 10);
  rect(45,80,110,85);
  fill(47, 140, 24);
  rect(245,80,110,85);
  fill(44, 94, 168);
  rect(45,280,110,85);
  fill(212, 120, 0);
  rect(245,280,110,85);
  
  //small inside rectangle
  fill(207, 194, 10);
  rect(60,95,80,55);
  fill(47, 140, 24);
  rect(260,95,80,55);
  fill(44, 94, 168);
  rect(60,295,80,55);
  fill(212, 120, 0);
  rect(260,295,80,55);
  
  //match tips for red box
   fill('red');
  rect(56,50,10,15, 20);
  rect(75,50,10,15, 20);
  rect(94,50,10,15, 20);
  rect(114,50,10,15, 20);
  rect(134,50,10,15, 20);
  
  //match tips for green box
   fill('red');
  rect(256,50,10,15, 20);
  rect(275,50,10,15, 20);
  rect(294,50,10,15, 20);
  rect(314,50,10,15, 20);
  rect(334,50,10,15, 20);
  
  //match tips for blue box
   fill('red');
  rect(56,250,10,15, 20);
  rect(75,250,10,15, 20);
  rect(94,250,10,15, 20);
  rect(114,250,10,15, 20);
  rect(134,250,10,15, 20);
  
  //match tips for yellow box
   fill('red');
  rect(256,250,10,15, 20);
  rect(275,250,10,15, 20);
  rect(294,250,10,15, 20);
  rect(314,250,10,15, 20);
  rect(334,250,10,15, 20);
}