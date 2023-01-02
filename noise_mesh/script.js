"use strict";

var i = 0;
var j = 0;
var distance = 0;
var spacing = 70;
var t = 1;
var w = 0.0005;
var mX, mY, numX, numY, n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, width, height, 100, 100);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  scale(0.5);
  translate(width / 2, height / 2);
  background(0);
  numX = width / spacing;
  numY = height / spacing;
  var ranX = [];
  var ranY = [];
  var x = [];
  var y = [];
  for (i = 1; i < numX; i++) {
    noFill();
    beginShape();
    x[i] = spacing * i;
    for (j = 1; j < numY; j++) {
      y[j] = spacing * j;
      distance = dist(mX * n, mY * n, x[i], y[j]) * 0.0008;
      ranX[numY * i + j] = noise(-1 / distance, 1 / distance) * 80;
      ranY[numY * i + j] = noise(-1 / distance, 1 / distance) * 80;
      strokeWeight(3);
      stroke(mX * n + j, mY * n * j, 200, 100);
      vertex(
        x[i] + ranX[numY * i + j] / sin(t * 2),
        y[j] + ranY[numY * i + j] / cos(t * 2)
      )
    }
    endShape();
  }

  for (i = 1; i < numY; i++) {
    beginShape();
    for (j = 1; j < numX; j++) {
      n = noise(i * w, j * w, t) * 2;
      stroke(j * 10 * n, i * 100 * n, 200, 100);
      vertex(
        x[j] + ranX[numY * j + i] / sin(t * 2),
        y[i] + ranY[numY * j + i] / cos(t * 2)
      )
    }
    endShape();
  }
  t += 0.0013;
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
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}