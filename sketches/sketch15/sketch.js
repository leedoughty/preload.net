let images = [];
let toruses = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    images[i] = loadImage("../../assets/textures/kishi" + i + ".png");
  }
  for (var o = 0; o < 3; o++) {
    toruses[o] = loadModel("../../assets/objects/torus" + o + ".obj");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  scale(2);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // frameRate(10);
  // var r = floor(random(0, images.length));
  // texture(images[r]);
  // var i = floor(random(0, toruses.length));
  model(toruses[0]);
  model(toruses[1]);
  model(toruses[2]);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
