var myFont;

var object;

function preload() {
  object = loadModel("land.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  if (windowWidth > 1500) {
    scale(3);
  }
  background(0);
  stroke(255);
  strokeWeight(1);
  scale(2);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.05);
  model(object);
}

// function mousePressed() {
//   save("myCanvas.jpg");
// }

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
