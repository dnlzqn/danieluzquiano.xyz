t=0, setup=_=>{createCanvas(w=windowWidth,h=windowHeight)}, 
draw=_=>{for(noStroke(), background(0), fill(w), translate(w/2,h/2), rotate(-t*40), scale(s=5), a=0; 7>a; a+=4e-4) 
x=noise(1e3*a), y=.1+15*(a/w*2/noise(x))+sin(t), e=noise(x*y)*w/10, circle(cos(20+e*a)*e, sin(20+e*a)*e,.35); t+=s/30000;}
windowResized=_=>{resizeCanvas(windowWidth, windowHeight)}//#つぶやきProcessing