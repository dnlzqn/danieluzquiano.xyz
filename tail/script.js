let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);
}

function draw() {
  background(0);
  translate(width * 0.43, height * 0.5);
  scale(200);
  noStroke();
  for (let a = 0; a < 1.15; a += 0.01112) {
    let e = cos(a) + zoff;
    fill(100 * a * 2, 5 * a, 250 * a * 2);
    circle(noise(e), cos(sin(e) * 2), 1.971 / a / 5);
  }

  if (
    mouseX < width * 0.75 &&
    mouseX > width * 0.35 &&
    mouseY < height * 0.75 &&
    mouseY > height * 0.35
  ) {
    zoff += 0.08;
  } else {
    zoff += 0.03;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}