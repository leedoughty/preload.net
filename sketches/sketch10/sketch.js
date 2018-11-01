let images = [];
let toruses = [];
var image1;
var image2;
var image3;
var pictures = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    images[i] = loadImage("../../assets/textures/kishi" + i + ".png");
  }
  for (var o = 0; o < 3; o++) {
    toruses[o] = loadModel("../../assets/objects/torus" + o + ".obj");
  }
  for (var p = 0; p < 3; p++) {
    pictures[p] = loadImage("../../assets/textures/marks" + p + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function rotateThoseOrbs() {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}

function draw() {
  background(0);
  scale(0.6);
  fill(0, 0, 0, 0);
  texture(pictures[0]);
  rotateThoseOrbs();
  model(toruses[0]);
  texture(pictures[1]);
  rotateThoseOrbs();
  model(toruses[1]);
  texture(pictures[2]);
  rotateThoseOrbs();
  model(toruses[2]);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
