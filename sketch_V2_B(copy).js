var mic;
let vol = [];
let Y = [];

function setup() {
  createCanvas(1400, 700);
  frameRate(8);
  mic = new p5.AudioIn();
  mic.start();
  for(i=0;i<20;i++){
    vol[0]=1;
  };
  
}

function draw() {
  

  background(0);
  
  //每禎進來皆為刷新為第一個
  i=0;
  Y[0] = random(150,550); 
  vol[0] = mic.getLevel();
  //為避免偵測到噪音
  if(vol[0] < 0.005) {
    vol[0] = (-4) /400;
  };

  for(i=0;i<12;i++){
    var X= i * 140;
    ellipse(X, Y[i], 620, 5+vol[0] * 405);
    noStroke();
    fill(random(120,255),random(130,255),random(135,255));
    
  }

  for(i=11;i>-1;i--){
    vol[i+1] = vol[i];
    Y[i+1] = Y[i];
  }

  

  
}