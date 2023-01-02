t=1e4,
z=r=g=b=0,s=125,
setup=_=>{
  createCanvas(w=windowWidth, h=windowHeight),
  colorMode(HSB, 360),
  r=random(360),g=random(360), b=random(360)
}
draw=_=>{
  for(
    background(0),
    translate(w/2,h/2),
    scale(s),
    noStroke(),
    n=map(mouseX,0,w,0,3),
    m=map(mouseY,0,h,0,15),
    a=0;
    a<5;
    a+=4e-4
  )
  x=1e4*a,
  y=cos(a)/sin(t/x),
  e=cos(x)%a,
  f=2.5*noise(tan(e)),
  fill(
    a+r+b,
    g*a,
    360),
  circle(sin(tan(cos(y))+n)*f*e, sin(tan(sin(y))+z+m)*f,.015);
  t += .03,
  z +=.003;
}