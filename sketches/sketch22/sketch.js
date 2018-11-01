let pyramid;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function preload() {
  pyramid = loadModel("../../assets/objects/platonic.obj");
  img = loadImage("../../assets/textures/process18.jpg");
}

function draw() {
  background(0);
  // background(0);
  scale(3);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  model(pyramid);
  // sphere(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // stroke(255);
  // strokeWeight(1);
  // noFill();
  model(pyramid);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
