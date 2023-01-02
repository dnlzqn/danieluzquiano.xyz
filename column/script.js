t=s=mx=my=1e5,
setup=()=>{createCanvas(w=windowWidth,h=windowHeight), mx=random(w), my=random(h)}, 
draw=()=>{for(background(0), fill(w), noStroke(), translate(w/2,h/2), scale(100), n=map(mx,0,w,2.5,-2.5), m=map(my,0,h,2.5,-2.5), a=0; 3.5>a; a+=4e-4) 
  x=a*s*n, y=a%tan(x+s)+m, e=1.75*cos(x*s), circle(noise(cos(y+t)+m)*e, tan(sin(y+n+m)+m/s),.015); t+=.03,s+=.003}, 
  mousePressed=()=>{mx=mouseX,my=mouseY}, mouseMoved=()=>{mx=mouseX,my=mouseY}, touchStarted=()=>{mx=mouseX,my=mouseY}, touchMoved=()=>(mx=mouseX,my=mouseY,!1), windowResized=()=>{resizeCanvas(windowWidth, windowHeight)}