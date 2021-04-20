var mic;
let vol = [];
let Y = [];
let mX = [];
let mY = [];
let targetX = [];
let targetY = [];


function setup() {
  createCanvas(1400, 700);
  frameRate(8);
  mic = new p5.AudioIn();
  mic.start();
  for(i=0;i<20;i++){
    vol[0]=0;
  }
}

function draw() {
  background(255);

    // //關於滑鼠
  mX[0] = mouseX;
  mY[0] = mouseY;
  for(i=0;i<16;i++){
    if(mX[0] > mX[1])
    {
      targetX[i]=mX[0]-i*(random(2,10))*5;

      if(mY[0] > mY[1])
      {
        targetY[i]=mY[0]-i*(random(2,10))*2;
      }
      else
      {
        targetY[i]=mY[0]+i*(random(2,10))*2;
      }
    }
    else
    {
      targetX[i]=mX[0]+i*(random(2,10))*5;

      if(mY[0] > mY[1])
      {
        targetY[i]=mY[0]-i*(random(2,10))*2;
      }
      else
      {
        targetY[i]=mY[0]+i*(random(2,10))*2;
      }
    }
    print(targetX[i],targetY[i]);
    ellipse(targetX[i],targetY[i],10,10);
    fill(random(170,255),random(170,255),random(185,255),170);
  };

  mX[1] = mX[0];
  mY[1] = mY[0];


  //每禎進來皆為刷新為第一個
  i=0;
  Y[0] = random(150,550); 
  vol[0] = mic.getLevel();
  //為避免偵測到噪音
  if(vol[0] < 0.005) {
    vol[0] = (-5)/400;
  };
  
  // color= (random(255), random(255), random(255));

  //設定位置及顏色
  for(i=0;i<12;i++){
    var X= i * 140;
    ellipse(X, Y[i], 620, 5+vol[i] * 400);
    noStroke();
    fill(random(200,255),random(200,255),random(215,255));
  }

  //進入下一輪後編號+1
  for(i=11;i>-1;i--){
    vol[i+1] = vol[i];
    Y[i+1] = Y[i];
  }
}