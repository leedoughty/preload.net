let pyramid;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // IKB:
  // background(0, 47, 167);
  // background(0, 115, 245);
  background(0);
  // background(0, 125, 255);
}

function preload() {
  pyramid = loadModel("../../assets/objects/planet1.obj");
  img = loadImage("../../assets/textures/marks1.jpg");
}

function draw() {
  scale(0.7);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  model(pyramid);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
