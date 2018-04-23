var planet;
var canvas;
var cam;
let texture;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  septum = loadModel("../../assets/objects/icosa.obj");
  normalize = true;
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide();
}

function draw() {
  background(0);
  rotateY(frameCount * 0.01);
  noStroke();
  texture(cam);
  sphere(150);
  translate(-100, -100, 240);
  push();
  rotateX(frameCount * 0.01);
  box(50);
  pop();
}
