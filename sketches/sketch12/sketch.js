var words = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

var current = "Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload Function Preload ";
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

}

function draw() {
  textSize(24);
  textLeading(24 + sin(frameCount*0.01)*24);
  text(current, mouseX, mouseY, 300, 300);
}

function keyTyped() {
  current += key;
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
