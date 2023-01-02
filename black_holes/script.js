let zoff = 0;
let noiseMax = 0;
let r, x, y, e, xx, yy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  for (let a = 0; a < 7; a += 0.00012) {
    x = 20 * cos(a);
    y = 20 * sin(a);
    e = sin(x) / sin(y) + zoff;
    xx = noise(cos(e * 2)) * y * 20;
    yy = noise(sin(e * 2)) * x * 20;
    point(xx / 1.25, yy / 1.25);
    point(xx / cos(e), yy / cos(e));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}