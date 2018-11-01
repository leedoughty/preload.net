let images = [];
var words = [];
let fonts = [];
let ink = [];
let tangle;

function preload() {
  for (var i = 0; i < 7; i++) {
    images[i] = loadImage("../../assets/textures/muji" + i + ".png");
  }

  for (var o = 0; o < 3; o++) {
    ink[o] = loadImage("../../assets/textures/ink" + o + ".png");
  }
  tangle = loadModel("../../assets/objects/tangle.obj");
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
  frameRate(5);
  var r = floor(random(0, images.length));
  texture(images[r]);
  model(tangle);
  var a = floor(random(0, ink.length));
  var m = random(-2000, 2000);
  var m2 = random(-2000, 2000);
  fill(0, 0, 0, 0);
  texture(ink[a]);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.05);
  plane(1000);
}

function mousePressed() {
  save("myCanvas.jpg");
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
