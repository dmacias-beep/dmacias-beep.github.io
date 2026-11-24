function setup() {
  createCanvas(600, 600);
}

function draw() {
  let x = 50 *noise(0.005 * frameCount);// entre el 1 i el 20
  //genera numeros aleatoris pero seguint un soroll Perlin, es a dir, a canvis suaus a diferencia del random
  let y = 100 *noise(0.005 * frameCount + 10000);
  //entre el 0 i el 100, suau
  // poso framecount per que generi numeros a tota velocitat i com van molt rapid, multiplico per 0.005 i aplico la funcio noise per generar soroll
  print(frameCount);
  //la funcio noise genera numeros entre 0 i 1, pero cada numero es proper al seguent, aixo pasa molt a la natura, que els canvis no son bruscos, per exemple les muntanyes, els rius...
  //noise (0.005 * frameCount + 10000); genera numeros del 0 al 1 i si els multiplico per 255, donara numeros entre 0 i 255
  let z = 100 *noise(0.005 * frameCount);//li sumo 1000 perque no sortin els mateixos numeros que sense sumar
  
  let coloraleatori=random(0,255);// canvis bruscos
  //print(z);
  
  

   let canvipetit=sin(frameCount*0.05)*8;
  let canvimitja=sin(frameCount*0.05)*15;
  let canvigran=sin(frameCount*0.05)*50;
  let canvimoltgran=sin(frameCount*0.05)*127;
  print(x);
 frameRate(5)
  
   background(0,canvimoltgran,coloraleatori,150);//fons de pantalla, gris si te un numero entre 0 i 255 es blanc.I qualsevol numero entre 0 i 255 sera gris.si tenim 3 numeros el primer numero es vermellor o R (red), el segon numero es la verdor
  ellipse(300+z,300,200,250) // el primer numero es el centre de la x, el segon numero es el centre de la y, y el tercer numero es l'amplada i el quart es l'alçada
   fill( coloraleatori ,0,255)
  ellipse(250+x,250,50,30)
  ellipse(350+x,250,50,30)
  arc(300+x,350,120,40+x,0,PI);
  triangle(300+x,300,330,360,310,320)
}
