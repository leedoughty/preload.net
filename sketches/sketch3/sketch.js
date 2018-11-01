let images = [];
var words = [];
let fonts = [];
let ink = [];
let tangle;
let marbling;

function preload() {
  for (var i = 0; i < 4; i++) {
    images[i] = loadImage("../../assets/textures/marbling" + i + ".png");
  }
  for (var o = 0; o < 4; o++) {
    ink[o] = loadImage("../../assets/textures/marbling" + o + ".png");
  }
  tangle = loadModel("../../assets/objects/tangle.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  var a = floor(random(0, ink.length));
  var m = random(-2000, 2000);
  var m2 = random(-2000, 2000);
  // fill(0, 0, 0, 0);
  texture(ink[a]);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  plane(1000);

  scale(0.7);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  frameRate(10);
  var r = floor(random(0, images.length));
  fill(0, 0, 0, 0);
  texture(images[r]);
  model(tangle);
}

// function mousePressed() {
//   save("myCanvas.jpg");
// }

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
