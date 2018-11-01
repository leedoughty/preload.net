var font;
var points;
var bounds;

function preload() {
  font = loadFont("../../assets/type/UniversLTStd-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  // fill(255, 104, 204);
  noFill();

  points = font.textToPoints("a", 0, 0, 100, {
    sampleFactor: 5,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(" a ", 0, 0, 10);
}

function draw() {
  background(0);
  beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    vertex(
      p.x * mouseX / bounds.w +
        sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
      p.y * mouseY / bounds.h
    );
  }
  endShape(CLOSE);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
