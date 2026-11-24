function setup() {
  createCanvas(600, 600);
   // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
   let h = map(vol, 0.002, 0.02, 0, 20);
  
   let canvipetit=sin(frameCount*0.05)*8;
  let canvimitja=sin(frameCount*0.05)*15;
  let canvigran=sin(frameCount*0.05)*50;
  let canvimoltgran=sin(frameCount*0.05)*127;
  print(vol);
  
  fill (255)
  background(42,133,3);
  ellipse(300,300,200,250)
  ellipse(250,250,50,30)
  ellipse(350,250,50,30);
  fill(255,0,0)
  arc(300,350,120,40+h,0,PI);
  triangle(300,300,330,360,310,320)
}
