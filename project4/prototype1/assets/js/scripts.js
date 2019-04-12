function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(71, 112, 178);  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(252, 141, 37, -dirX, -dirY, 0);
  ambientMaterial(250);
  noStroke();
  sphere(50);

}