document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);

var black;
var alphaC;
var layer;
var rad = 100;
// var soundtrack;

var w = window.innerWidth;
var h = window.innerHeight;

var mouseIsDragged = false;
var button;
let font;
let soundtrack;


function preload() {
  img = loadImage('assets/img/TO05.png');
  soundtrack = loadSound('assets/audio/TO01.mp3');
}

function setup() {
  pixelDensity(1);
  createCanvas(w, h);
  
  layer = createGraphics(w, h);
  background(255);
  layer.fill("black");
  layer.rect(0,0,width,height);

  textFont('helvetica');
  textStyle(BOLD)
}

function draw() {
  noStroke();
  image(img, 0, 0, width, height);
  image(layer, 0, 0);
  if (mouseIsPressed) {
    noFill();
    stroke("gray");
  }
  drawWords(width * 0.25);

}


function mousePressed() {
  soundtrack.play();
}

function drawWords(x) {
  fill(255);
  textSize(150); 
  text('The', 100, 525);
  textSize(200);
  text('Office', 100, 725);

}


function mouseDragged() {
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
  layer.set(x,y,alphaC);
      }
    }
  }
  layer.updatePixels();
}
