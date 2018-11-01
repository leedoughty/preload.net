// let pyramid;
let img;
let pyramid;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function preload() {
  pyramid = loadModel("../../assets/objects/shapes.obj");
  img = loadImage("../../assets/textures/marks1.jpg");
}

function draw() {
  if (windowWidth > 1500) {
    scale(3);
  }
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  model(pyramid);
  // sphere(200);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
