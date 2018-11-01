let images = [];
var words = [];
let fonts = [];

function preload() {
  for (var i = 0; i < 2; i++) {
    images[i] = loadImage("../../assets/textures/marks" + i + ".png");
  }
  fonts[0] = loadFont("../../assets/type/UniversLTStd-Bold.otf");
  fonts[1] = loadFont("../../assets/type/FarnhamDisplay-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, 3000);
  background(255);
}

function draw() {
  imageMode(CENTER);
  // words[0] = "x";
  // words[1] = "y";
  // words[2] = "z";
  // var r = random(words);
  var a = random(-2000, 2000);
  var b = random(-2000, 2000);
  var size = random(0, 200);
  // textSize(size);
  // var randomFont = random(fonts);
  // textFont(randomFont);
  // text(r, a, b);
  scale(0.4);
  frameRate(4);
  x = random(-50, 50);
  if (images[1]) {
    blendMode(BLEND);
  } else {
    blendMode(ADD);
  }
  // var a = rotate([90, 180, 270]);
  // var a = rotate([90, 180]);
  angleMode(DEGREES);
  rotate(random([90, 180, 270, 360]));
  var r = floor(random(0, images.length));
  var m = random(-2000, 2000);
  var m2 = random(-2000, 2000);
  image(images[r], m, m2);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

// function mousePressed() {
//   save("myCanvas.jpg");
// }
