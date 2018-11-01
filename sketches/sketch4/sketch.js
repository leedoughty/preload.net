var words = [];
let fonts = [];
let fills = [];
let degrees = [];
var images = [];

function preload() {
  // fonts[0] = loadFont("../../type/UniversLTStd-Bold.otf");
  // fonts[0] = loadFont("../../type/FarnhamDisplay-Bold.otf");
  for (var i = 0; i < 13; i++) {
    images[i] = loadImage("../../assets/textures/muji" + i + ".png");
  }
  fonts[0] = loadFont("../../assets/type/Inconsolata-Regular.ttf");
  fonts[1] = loadFont("../../assets/type/Merriweather-Black.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  words[0] = "P";
  words[1] = "R";
  words[2] = "E";
  words[3] = "L";
  words[4] = "O";
  words[5] = "A";
  words[6] = "D";

  // textAlign(CENTER);
  var size = 100;
  // size = random(40, 400);
  // textSize(size);
  var randomFont = random(fonts);
  frameRate(10);

  var one = [0, 255, 255];
  var two = [255, 255, 0];
  var three = [255, 128, 0];
  // var four = [0, 0, 255];
  // var five = [0, 255, 255];
  // var six = [0, 255, 0];
  // var seven = [255, 0, 255];
  // var eight = [127, 0, 255];
  // var nine = [0, 204, 0];
  // var randomFill = fill(random([one, two, three, four, five, six, seven, eight, nine]));

  //FIX earlier part for rotation, a loop)

  for (var i = 0; i < 7; i++) {
    for (var a = 200; a < 1000; a = a + 1000 / 8) {
      var r = words[i++];
      textAlign(CENTER);
      size = 100;
      textSize(size);
      fill(255);
      var randomFont = random(fonts);
      textFont(randomFont);
      var b = 200;

      translate(a / 2, b / 2);
      push();
      angleMode(DEGREES);
      var ninetyDegrees = [90, 180, 270, 360];
      rotate(random([90, 180, 270, 360]));
      // rotate(PI/2);
      text(r, a, b);
      pop();

      var r = floor(random(0, images.length));
      var m = random(-2000, 2000);
      var m2 = random(-2000, 2000);
      image(images[r], m, m2);

      console.log(a);
    }
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// rgb(0, 0, 255);
// rgb(255, 0, 0);
// rgb(255, 128, 0);
// rgb(255, 255, 0);
// rgb(0, 255, 255);
// rgb(0, 255, 0);
// rgb(255, 0, 255);
// rgb(127, 0, 255);
// rgb(0, 204, 0);

// frameRate(4);
// blendMode(MULTIPLY);
