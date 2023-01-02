t = s = mx = my = 1e6,
  setup = () => {
    createCanvas((w = windowWidth), (h = windowHeight)),
      (mx = random(w)),
      (my = random(h));
  },
  draw = () => {
    for (
      background(0),
        noStroke(),
        fill(w),
        translate(w / 2, h / 2),
        rotate(PI/2),
        scale(100),
        n = map(mx, 0, w, 2.5, -2.5),
        m = map(my, 0, h, 2.5, -2.5),
        a = 0;
        6 > a;
        a += 4e-4
    )
      (x = a * s + m),
        (y = (a - tan(x + s))),
        (e = 1.75 * cos(x / s) + m),
        circle(noise(sin(y + t) + m) * e, 1.5*tan(cos(y + m)+m / s), 0.018);

    (t += 0.03), (s += 0.00013);
  },
  mousePressed = () => {
    (mx = mouseX), (my = mouseY);
  },
  mouseMoved = () => {
    (mx = mouseX), (my = mouseY);
  },
  touchStarted = () => {
    (mx = mouseX), (my = mouseY);
  },
  touchMoved = () => ((mx = mouseX), (my = mouseY), !1);

  windowResized=()=> {resizeCanvas(windowWidth, windowHeight)}