let images = [];
var words = [];
let fonts = [];
let ink = [];
let tangle;

function preload() {
  for (var i = 0; i < 7; i++) {
    images[i] = loadImage("../../textures/muji" + i + ".png");
  }

  for (var o = 0; o < 3; o++) {
    ink[o] = loadImage("../../textures/ink" + o + ".png");
  }
  tangle = loadModel("../../objects/tangle.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  scale(0.8);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  frameRate(7);
  var r = floor(random(0, images.length));
  texture(images[r]);
  model(tangle);
  var a = floor(random(0, ink.length));
  fill(0, 0, 0, 0);
  texture(ink[a]);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  plane(1000);
}

// function mousePressed() {
//   save("myCanvas.jpg");
// }
