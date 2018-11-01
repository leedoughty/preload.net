let img;
let object;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function preload() {
  object = loadModel("../../assets/objects/shapes.obj");
  img = loadImage("../../assets/textures/marksInverted.jpg");
}

function draw() {
  if (windowWidth < 1500) {
    scale(1);
  } else {
    scale(4);
  }
  // scale(1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  model(object);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
