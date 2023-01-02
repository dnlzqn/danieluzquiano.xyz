let zoff = 0;
let x, y, e, xx, yy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  for (let a = 0; a < 7; a += 0.0012) {
    x = 20 * cos(a);
    y = 20 * sin(a);
    e = sin(x) / sin(y) + zoff;
    xx = noise(cos(e * 2)) * y * 15;
    yy = noise(sin(e * 2)) * x * 15;
    point(xx/cos(e), yy/cos(e));
  }
  zoff += map(mouseX,0,width,-0.03,+0.03);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}