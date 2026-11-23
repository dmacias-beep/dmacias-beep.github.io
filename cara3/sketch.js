
function setup() {
  createCanvas(600, 600);
}

function draw() {
  let coloraleatori=random(0,255);
  print(coloraleatori);
  
  let canvipetit=sin(frameCount*0.05)*8;
  let canvimitja=sin(frameCount*0.05)*15;
  let canvigran=sin(frameCount*0.05)*50;
  let canvimoltgran=sin(frameCount*0.05)*127;
  //print(canvimoltgran);
 
  background(0,canvimoltgran,coloraleatori,150);//fons de pantalla, gris si te un numero entre 0 i 255 es blanc.I qualsevol numero entre 0 i 255 sera gris.si tenim 3 numeros el primer numero es vermellor o R (red), el segon numero es la verdor
 // background(42,133,3);
  ellipse(300,300,200,250+canvigran)
  fill( coloraleatori ,0,255)
  ellipse(250,250,50,30+canvigran)
  ellipse(350,250,50,30+canvigran)
  arc(300,350,120,40+canvigran,0,PI);
  triangle(300,300,330,340+canvigran,300,320)
}
  
