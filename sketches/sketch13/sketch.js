let images = [];

function preload() {
  for (var i = 0; i < 10; i++) {
    images[i] = loadImage("../../assets/textures/Letter" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, 3000);
  background(255);
}

function draw() {
  if (windowWidth > 1500) {
    scale(2);
  }
  // var a = random(-2000, 2000);
  // var b = random(-2000, 2000);
  var size = random(0, 200);
  scale(0.6);
  frameRate(40);
  x = random(-50, 50);
  blendMode(MULTIPLY);
  angleMode(DEGREES);
  rotate(random([90, 180, 270]));
  var r = floor(random(0, images.length));
  // var m = random(-2000, 2000);
  // var m2 = random(-2000, 2000);

  var m = random(-2000, 2500);
  var m2 = random(-2000, 2500);
  image(images[r], m, m2);
}

function mousePressed() {
  save("myCanvas.jpg");
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
