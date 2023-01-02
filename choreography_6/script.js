let zoff = 0;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth / 2.5;
  mY = windowHeight / 1.5;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(15);
  noStroke();
  fill(255);
  rotate(PI/2)
  for (let a = 0; a < 7; a += 0.0012) {
    let mm = map(mX, 0, width, -7, 7);
    let my = map(mY, 0, height, -20, 20);
    let x = constrain(cos(zoff) * my * tan(a),-20,20);
    let y = (cos(zoff) * 0.75) * sin(a);
    let e = sin(x) / noise(y) / sin(zoff);
    let e2 = (x/mm) - (a+y/mm);
    circle(sin(e+mm) - e2, cos(e+mm) * a, 0.0971);    
  }
  zoff +=0.02
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}