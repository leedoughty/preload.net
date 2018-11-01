let images = [];
var words = [];
let fonts = [];
let ink = [];

function preload() {
  for (var i = 0; i < 13; i++) {
    images[i] = loadImage("../../assets/textures/muji" + i + ".png");
    // images = loadImage("../../textures/muji1.png");
  }
  for (var o = 0; o < 3; o++) {
    ink[o] = loadImage("../../assets/textures/ink" + o + ".png");
  }
}

//   images[3] = loadImage("../../textures/muji4.png");
//   fonts[0] = loadFont("../../type/UniversLTStd-Bold.otf");
//   fonts[1] = loadFont("../../type/FarnhamDisplay-Bold.otf");
// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  scale(4);
  if (windowWidth > 1500) {
    scale(8);
  }
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  frameRate(10);
  //pass image as texture
  var r = floor(random(0, images.length));
  texture(images[r]);
  box(200, 200, 200);
  // translate(20, 50);
  // push();

  // rotate(random([90, 180, 270, 360]));
  var a = floor(random(0, ink.length));
  var m = random(-2000, 2000);
  var m2 = random(-2000, 2000);
  texture(ink[a]);
  translate(-250, -250, 0);
  fill(0, 0, 0, 0);
  plane(500);

  // image(ink[a], m, m2);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// words[0] = "x";
// words[1] = "y";
// words[2] = "z";
// var r = random(words);
// var a = random(-2000, 2000);
// var b = random(-2000, 2000);
// var size = random(0, 200);
// textSize(size);
// var randomFont = random(fonts);
// textFont(randomFont);
// text(r, a, b);
// scale(0.4);
// frameRate(4);
// x = random(-50, 50);
// blendMode(MULTIPLY);
// // var a = random(rotate(50, 180));
// var r = floor(random(0, images.length));
// var m = random(-2000, 2000);
// var m2 = random(-2000, 2000);
// image(images[r], m, m2);
//   texture(images);
//   plane(100, 100);
// }

// function mousePressed() {
//   save("myCanvas.jpg");
// }
