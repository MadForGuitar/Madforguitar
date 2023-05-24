$((function(){"use strict";var t=document.getElementById("wave"),i=t.getContext("2d"),n=t.width=window.innerWidth,e=t.height=window.innerHeight,a=[],o=15,r={x:20,y:80},h={min:20,max:40},s=10,u="#fff",l=.15,f=function(t,i){return Math.floor(Math.random()*(i-t+1)+t)},c=function(t,i,n,e){return(t/=e/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i};i.lineJoin="round",i.lineWidth=s,i.strokeStyle=u;var d=function(t){this.anchorX=t.x,this.anchorY=t.y,this.x=t.x,this.y=t.y,this.setTarget()};d.prototype.setTarget=function(){this.initialX=this.x,this.initialY=this.y,this.targetX=this.anchorX+f(0,2*r.x)-r.x,this.targetY=this.anchorY+f(0,2*r.y)-r.y,this.tick=0,this.duration=f(h.min,h.max)},d.prototype.update=function(){var t=this.targetX-this.x,i=this.targetY-this.y,n=Math.sqrt(t*t+i*i);if(Math.abs(n)<=0)this.setTarget();else{var e=this.tick,a=this.initialY,o=this.targetY-this.initialY,r=this.duration;this.y=c(e,a,o,r),a=this.initialX,o=this.targetX-this.initialX,r=this.duration,this.x=c(e,a,o,r),this.tick++}},d.prototype.render=function(){i.beginPath(),i.arc(this.x,this.y,3,0,2*Math.PI,!1),i.fillStyle="#000",i.fill()};for(var m=function(){window.requestAnimFrame(m,t),i.clearRect(0,0,n,e),function(){for(var t=a.length;t--;)a[t].update()}(),function(){i.beginPath();var t,o=a.length;for(i.moveTo(a[0].x,a[0].y),t=0;t<o-1;t++){var h=(a[t].x+a[t+1].x)/2,u=(a[t].y+a[t+1].y)/2;i.quadraticCurveTo(a[t].x,a[t].y,h,u)}i.lineTo(-r.x-s,e+s),i.lineTo(n+r.x+s,e+s),i.closePath(),i.fillStyle="#fff",i.fill(),i.stroke()}()},w=o+2,x=(n+2*r.x)/(o-1);w--;)a.push(new d({x:x*(w-1)-r.x,y:e-e*l}));window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},m()}));