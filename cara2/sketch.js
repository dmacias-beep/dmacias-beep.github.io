function setup() {
  createCanvas(600,600);//area de dibuix de 600 px del 600 de cada costat
}
//MouseX:300;mouseY=300
function draw() {
  background(mouseX-1000,25,mouseY-100); //fons de la pantalla , gris si te un numero entre 0 i 255 i 255 es blanc. i qualsevol numero entre 0 i 255 sera gris. Si tenim 3 numeros al primer numero es vermello o r (red) , el segon numero es la verdor o G (green) i el tercer numero es la blavor o B (blue). Es colors RGB permeten construir setze milions de colors diferents (255x255x255)
  fill(mouseY-100, 26,mouseX)// color de cara
    ellipse(mouseX,mouseY,300,300+mouseY/3)// el primer numero entre parentesis es la posicio x del centre, el segon numero es del centre de l'el·lipse, el tercer numero es l'amplada i el quart numero es l'alçada de l'el·lipse.
    fill(mouseX-100, 17,mouseX)// color ull esquerre funciona com el background amb rgb 
  ellipse(mouseX-50,mouseY-50,50,30+mouseY/10) //ull esquerre
    fill(mouseX-100, 17,mouseX)//color ull dret
  ellipse(mouseX+50,mouseY-50,50,30+mouseY/10)// ull dret
    fill(122, 26, 138)
  arc(mouseX,mouseY+50,120,40+mouseY/2,0,PI);// funciona com l'el·lipse els primers quatre numeros i els dos ultims son 0,PI o PI,0
  triangle(mouseX,mouseY,mouseX+30,mouseY-30,mouseX-30,mouseY)
  fill(0);//color de la cella 
   arc(mouseX+60,mouseY-80,100,30,PI,0,);//celles
  arc(mouseX-50,mouseY-80,100,30,PI,0,);//celles
}
