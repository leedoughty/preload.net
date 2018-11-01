// let pyramid;
let img;
let pyramid;
let nums = [100, 25, 75, 100];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function preload() {
  pyramid = loadModel("../../assets/objects/deformedcircle.obj");
  img = loadImage("../../assets/textures/marks1.jpg");
}

function draw() {
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.01);
  // scale(2);
  texture(img);
  for (var i = 0; i < 4; i++) {
    model(pyramid);
    sphere(nums[i]);
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
