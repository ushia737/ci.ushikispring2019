var ellipseDiameter = 40;
var ellipseRandom;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (134, 79, 135);
  ellipseRandom = random(1, ellipseDiameter);
}

function draw() {
    ellipseRandom =random(1, ellipseDiameter);
    if (mouseIsPressed) {
      fill(255, 46, 0);
      noStroke();
    } else {
      fill(178, 145, 101);
      noStroke();
    }
    ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);
}