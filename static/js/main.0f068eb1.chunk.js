(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{32:function(t,e,o){},33:function(t,e,o){"use strict";o.r(e);var n=o(11),a=o(21),i=o.n(a),r=o(13),s=o(1),c=o(4),h=o(2),d=o(3),l=o(0),p=o(22),u=15264502,w=16775393,y=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n,a){var i,r=a.distance,c=a.rotationSpeed,h=a.size;Object(s.a)(this,o);var d=new l.l(u,.33),y=new l.l(w,.67),m=new l.u(11725810,0,.33),b=new l.u(16764092,0,.33),M=new l.N(h,8,6),f=new l.z({color:u,fog:!1}),g=new l.z({color:w,fog:!1}),v=new l.y(M,f),x=new l.y(M,g),L=Math.PI/3,j=Math.cos(L)*r,k=Math.sin(L)*r,P=new l.R,R=new l.R;return v.position.set(-r,0,0),d.position.set(-r,0,0),x.position.set(r,0,0),y.position.set(r,0,0),m.position.set(j,0,-k),b.position.set(j,0,k),(i=e.call(this)).add(v),i.add(d),i.add(x),i.add(y),i.add(m),i.add(b),i.animate=function(e){i.rotateY(e*c),x.getWorldPosition(R),n.getWorldPosition(P);var o=R.angleTo(P)/Math.PI,a=p.mix(9489145,0,o).hex();t.color.set(a),t.far=P.length()},i}return o}(l.F),m=o(15),b=Math.sin(3*Math.PI/8),M=Math.sin(2*Math.PI/8),f=Math.sin(1*Math.PI/8),g=[new l.C({color:3622735,flatShading:l.p}),new l.C({color:7697781,shininess:0,flatShading:l.p}),new l.C({color:10724259,shininess:0,flatShading:l.p}),new l.C({color:13750737,shininess:0,flatShading:l.p}),new l.C({color:16777215,flatShading:l.p}),new l.C({color:10722698,flatShading:l.p}),new l.C({color:11514266,flatShading:l.p}),new l.C({color:12240042,flatShading:l.p}),new l.C({color:13031610,shininess:0,flatShading:l.p}),new l.C({color:13747358,shininess:0,flatShading:l.p}),new l.C({color:12304016,shininess:0,flatShading:l.p}),new l.C({color:10795138,flatShading:l.p}),new l.C({color:9351796,flatShading:l.p}),new l.C({color:16772275,flatShading:l.p}),new l.C({color:13028487,flatShading:l.p}),new l.C({color:9349979,shininess:0,flatShading:l.p}),new l.C({color:5606191,shininess:0,flatShading:l.p})],v=function(t){x.offset.x+=t/12},x=new l.C({color:10730964,transparent:!0,opacity:.8});x.side=l.m;var L={blackMat:new l.C({color:1050375,flatShading:l.p}),brownMat:new l.C({color:11815737,shininess:0,flatShading:l.p}),greenMat:new l.C({color:8044430,shininess:0,flatShading:l.p}),pinkMat:new l.C({color:14442309,shininess:0,flatShading:l.p}),lightBrownMat:new l.C({color:14711383,flatShading:l.p}),whiteMat:new l.C({color:10786697,flatShading:l.p}),skinMat:new l.C({color:16752293,flatShading:l.p}),blueMat:new l.C({color:6002326,shading:l.p})},j=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this)).add(t),n}return o}(l.y),k=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n,a,i,r){var c;Object(s.a)(this,o);var h=L.whiteMat,d=new l.i(t,n,a,i,r);d.applyMatrix4((new l.x).makeTranslation(0,a/2,0)),(c=e.call(this,d,h)).castShadow=!0,c.growFruit=function(t){var e=3*Math.random(),o=new l.c(e,e,e,1),n=function(t){var e=Object.keys(t);return t[e[e.length*Math.random()<<0]]}(L),a=new l.y(o,n);a.position.x=t.x,a.position.y=t.y+3,a.position.z=t.z,a.rotation.x=Math.random()*Math.PI,a.rotation.y=Math.random()*Math.PI,c.add(a)},c.growBranch=function(t){var e=3+5*Math.random(),o=.2+Math.random(),n=new l.i(o/2,o,e,3,1);n.applyMatrix4((new l.x).makeTranslation(0,e/2,0));var a=new l.y(n,h);a.position.x=t.x,a.position.y=t.y,a.position.z=t.z;var i=new l.R(t.x,2,t.z),r=new l.R(0,1,0);a.quaternion.setFromUnitVectors(r,i.clone().normalize()),c.add(a)};for(var p=0;p<d.attributes.position.count;p++){var u=Math.random(),w=new l.R;(w=w.fromBufferAttribute(d.getAttribute("position"),[p])).x+=-u+Math.random()*u*2,w.y+=-u+Math.random()*u*2,w.z+=-u+Math.random()*u*2,Math.random()>.7&&c.growFruit(w),Math.random()>.5&&w.y>10&&w.y<c.height-10&&c.growBranch(w)}return c}return o}(l.y),P=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n,a=t.radius,i=t.widthSegments,r=t.heightSegments,c=Object(m.a)(t,["radius","widthSegments","heightSegments"]);Object(s.a)(this,o);var h=new R(a,i,r,c).toNonIndexed(),d=function(t){for(var e=new l.R,o=t.attributes.position,n=new l.R,a=function(a){var i=n.fromBufferAttribute(o,a),r=n.fromBufferAttribute(o,a+1),s=n.fromBufferAttribute(o,a+2),c=Math.max(i.length(),r.length(),s.length()),h=e.fromBufferAttribute(t.attributes.normal,a),d=function(t){var e=t+parseInt(4*c,10);return Math.min(e,t+3)},l=Math.abs(h.y);l>b?t.addGroup(a,3,d(1)):l>M?t.addGroup(a,3,d(5)):l>f?t.addGroup(a,3,d(9)):t.addGroup(a,3,d(13))},i=0;i<o.count;i+=3)a(i)}(h),p=new l.N(a,i,r),u=new l.y(p,x);(n=e.call(this,h,g)).add(d,u),n.animate=v;for(var w=0;w<5;w++)for(var y=w*(2*Math.PI)/5,L=0;L<5;L++){var P=L*Math.PI*2/5;P+=.25+.3*Math.random();var I=new k(1+1*Math.random(),3+1*Math.random(),25+25*Math.random(),3,3),O=new j(I);O.position.x=Math.sin(P)*Math.cos(y)*a,O.position.y=Math.sin(P)*Math.sin(y)*(a-10),O.position.z=Math.cos(P)*a;var z=O.position.clone(),F=new l.R(0,1,0);O.quaternion.setFromUnitVectors(F,z.clone().normalize()),n.add(O)}return n}return o}(l.y),R=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n,a,i){var r,c=i.seed,h=i.noiseWidth,d=i.noiseHeight;Object(s.a)(this,o);for(var p,u,w,y=(r=e.call(this,t,n,a)).attributes.position,m=new l.R,b=[],M=function(t){return function(t,e,o){for(var n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=0;a<256;a++)n[256+a]=n[a];function i(t){return t*t*t*(t*(6*t-15)+10)}function r(t,e,o){return e+t*(o-e)}function s(t,e,o,n){var a=15&t,i=a<8?e:o,r=a<4?o:12===a||14===a?e:n;return(0===(1&a)?i:-i)+(0===(2&a)?r:-r)}return function(t,e,o){var a=Math.floor(t),c=Math.floor(e),h=Math.floor(o),d=255&a,l=255&c,p=255&h,u=(t-=a)-1,w=(e-=c)-1,y=(o-=h)-1,m=i(t),b=i(e),M=i(o),f=n[d]+l,g=n[f]+p,v=n[f+1]+p,x=n[d+1]+l,L=n[x]+p,j=n[x+1]+p;return r(M,r(b,r(m,s(n[g],t,e,o),s(n[L],u,e,o)),r(m,s(n[v],t,w,o),s(n[j],u,w,o))),r(b,r(m,s(n[g+1],t,e,y),s(n[L+1],u,e,o-1)),r(m,s(n[v+1],t,w,y),s(n[j+1],u,w,y))))}(t,e,o)}(c+t.x/h,c+t.y/h,c+t.z/h)},f=[],g=0,v=y.count;g<v;g++){var x=m.fromBufferAttribute(y,g);f.push(M(x))}p=Math.max.apply(Math,f),u=-Math.min.apply(Math,f);for(var L=0,j=y.count;L<j;L++){var k=m.fromBufferAttribute(y,L),P=M(k);P>0?w=P/p:P<0?w=P/u:0===P&&(w=0),k=k.setLength(w+t);var R=1+w*d/t;b.push(k.x*R),b.push(k.y*R),b.push(k.z*R)}return r.setAttribute("position",new l.d(new Float32Array(b),3)),r}return o}(l.N),I=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(s.a)(this,o),(t=e.call(this)).status="running",t.runningCycle=0,t.body=new l.t,t.add(t.body);var n=new l.c(7,7,10,1);t.torso=new l.y(n,L.brownMat),t.torso.position.z=0,t.torso.position.y=7,t.torso.castShadow=!0,t.body.add(t.torso);var a=new l.c(9,9,5,1);t.pants=new l.y(a,L.whiteMat),t.pants.position.z=-3,t.pants.position.y=0,t.pants.castShadow=!0,t.torso.add(t.pants);var i=new l.c(3,3,3,1);i.applyMatrix4((new l.x).makeTranslation(0,0,-2)),t.tail=new l.y(i,L.lightBrownMat),t.tail.position.z=-4,t.tail.position.y=5,t.tail.castShadow=!0,t.torso.add(t.tail),t.torso.rotation.x=-Math.PI/8;var r=new l.c(10,10,13,1);r.applyMatrix4((new l.x).makeTranslation(0,0,7.5)),t.head=new l.y(r,L.brownMat),t.head.position.z=2,t.head.position.y=11,t.head.castShadow=!0,t.body.add(t.head);var c=new l.c(1,4,4,1);t.cheekR=new l.y(c,L.pinkMat),t.cheekR.position.x=-5,t.cheekR.position.z=7,t.cheekR.position.y=-2.5,t.cheekR.castShadow=!0,t.head.add(t.cheekR),t.cheekL=t.cheekR.clone(),t.cheekL.position.x=-t.cheekR.position.x,t.head.add(t.cheekL);var h=new l.c(6,6,3,1);t.nose=new l.y(h,L.LightBrownMat),t.nose.position.z=13.5,t.nose.position.y=2.6,t.nose.castShadow=!0,t.head.add(t.nose);var d=new l.c(4,2,4,1);d.applyMatrix4((new l.x).makeTranslation(0,0,3)),d.applyMatrix4((new l.x).makeRotationX(Math.PI/12)),t.mouth=new l.y(d,L.brownMat),t.mouth.position.z=8,t.mouth.position.y=-4,t.mouth.castShadow=!0,t.head.add(t.mouth);var p=new l.c(3,3,3,1);t.pawFR=new l.y(p,L.lightBrownMat),t.pawFR.position.x=-2,t.pawFR.position.z=6,t.pawFR.position.y=1.5,t.pawFR.castShadow=!0,t.body.add(t.pawFR),t.pawFL=t.pawFR.clone(),t.pawFL.position.x=-t.pawFR.position.x,t.pawFL.castShadow=!0,t.body.add(t.pawFL);var u=new l.c(3,3,6,1);t.pawBL=new l.y(u,L.lightBrownMat),t.pawBL.position.y=1.5,t.pawBL.position.z=0,t.pawBL.position.x=5,t.pawBL.castShadow=!0,t.body.add(t.pawBL),t.pawBR=t.pawBL.clone(),t.pawBR.position.x=-t.pawBL.position.x,t.pawBR.castShadow=!0,t.body.add(t.pawBR);var w=new l.c(7,18,2,1);w.applyMatrix4((new l.x).makeTranslation(0,9,0)),t.earL=new l.y(w,L.brownMat),t.earL.position.x=2,t.earL.position.z=2.5,t.earL.position.y=5,t.earL.rotation.z=-Math.PI/12,t.earL.castShadow=!0,t.head.add(t.earL),t.earR=t.earL.clone(),t.earR.position.x=-t.earL.position.x,t.earR.rotation.z=-t.earL.rotation.z,t.earR.castShadow=!0,t.head.add(t.earR);var y=new l.c(2,4,4);t.eyeL=new l.y(y,L.whiteMat),t.eyeL.position.x=5,t.eyeL.position.z=5.5,t.eyeL.position.y=2.9,t.eyeL.castShadow=!0,t.head.add(t.eyeL);var m=new l.c(.6,2,2);return t.iris=new l.y(m,L.blackMat),t.iris.position.x=1.2,t.iris.position.y=1,t.iris.position.z=1,t.eyeL.add(t.iris),t.eyeR=t.eyeL.clone(),t.eyeR.children[0].position.x=-t.iris.position.x,t.eyeR.position.x=-t.eyeL.position.x,t.head.add(t.eyeR),t.body.traverse((function(t){t instanceof l.y&&(t.castShadow=!0,t.receiveShadow=!0)})),t.run=function(e){t.status="running",t.runningCycle+=6*e*.7,t.runningCycle=t.runningCycle%(2*Math.PI);var o=t.runningCycle;t.body.position.y=6+4*Math.sin(o-Math.PI/2),t.body.rotation.x=.2+4*Math.sin(o-Math.PI/2)*.1,t.torso.rotation.x=4*Math.sin(o-Math.PI/2)*.1,t.torso.position.y=7+4*Math.sin(o-Math.PI/2)*.5,t.mouth.rotation.x=Math.PI/16+4*Math.cos(o)*.05,t.head.position.z=2+4*Math.sin(o-Math.PI/2)*.5,t.head.position.y=8+4*Math.cos(o-Math.PI/2)*.7,t.head.rotation.x=4*Math.sin(o+Math.PI)*.1-.2,t.earL.rotation.x=.8*Math.cos(-Math.PI/2+o),t.earR.rotation.x=1.2*Math.cos(-Math.PI/2+.2+o),t.eyeR.scale.y=t.eyeL.scale.y=.7+.6*Math.abs(Math.cos(-Math.PI/4+.5*o)),t.tail.rotation.x=4*Math.cos(Math.PI/2+o)*.3,t.pawFR.position.y=1.5+4*Math.sin(o),t.pawFR.rotation.x=Math.cos(o)*Math.PI/4,t.pawFR.position.z=6-4*Math.cos(o)*2,t.pawFL.position.y=1.5+4*Math.sin(.2+o),t.pawFL.rotation.x=Math.cos(o)*Math.PI/4,t.pawFL.position.z=6-4*Math.cos(.2+o)*2,t.pawBR.position.y=1.5+4*Math.sin(Math.PI+o),t.pawBR.rotation.x=Math.cos(o+1.5*Math.PI)*Math.PI/3,t.pawBR.position.z=4*-Math.cos(Math.PI+o),t.pawBL.position.y=1.5+4*Math.sin(Math.PI+o),t.pawBL.rotation.x=Math.cos(o+1.5*Math.PI)*Math.PI/3,t.pawBL.position.z=4*-Math.cos(Math.PI+o)},t.jump=function(){t.status="jumping";t.earL.rotation.x=Math.cos(-Math.PI),t.earR.rotation.x=Math.cos(-Math.PI),t.body.position.setY(t.body.position.y+30)},t}return o}(l.t),O=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(s.a)(this,o),(t=e.call(this)).runningCycle=0,t.body=new l.t,t.add(t.body);var n=255,a=0,i=224,r=0,c=207,h=255,d=new l.c(120,120,120),p=new l.A({color:8451582,shading:l.p});t.bodyFish=new l.y(d,p),t.body.add(t.bodyFish);var u=new l.i(0,60,60,4,!1),w=new l.A({color:16711900,shading:l.p});t.tailFish=new l.y(u,w),t.tailFish.scale.set(.8,1,.1),t.tailFish.position.x=-60,t.tailFish.rotation.z=-Math.PI/2,t.body.add(t.tailFish);var y=new l.c(25,10,120),m=new l.A({color:8451582,shading:l.p});t.lipsFish=new l.y(y,m),t.lipsFish.position.x=65,t.lipsFish.position.y=-47,t.lipsFish.rotation.z=Math.PI/2,t.body.add(t.lipsFish),t.topFish=new l.y(u,w),t.topFish.scale.set(.8,1,.1),t.topFish.position.x=-20,t.topFish.position.y=60,t.topFish.rotation.z=-Math.PI/2,t.sideRightFish=new l.y(u,w),t.sideRightFish.scale.set(.8,1,.1),t.sideRightFish.rotation.x=Math.PI/2,t.sideRightFish.rotation.z=-Math.PI/2,t.sideRightFish.position.x=0,t.sideRightFish.position.y=-50,t.sideRightFish.position.z=-60,t.sideLeftFish=new l.y(u,w),t.sideLeftFish.scale.set(.8,1,.1),t.sideLeftFish.rotation.x=Math.PI/2,t.sideLeftFish.rotation.z=-Math.PI/2,t.sideLeftFish.position.x=0,t.sideLeftFish.position.y=-50,t.sideLeftFish.position.z=60,t.body.add(t.topFish,t.sideLeftFish,t.sideRightFish);var b=new l.c(40,40,5),M=new l.A({color:16777215,shading:l.p});t.rightEye=new l.y(b,M),t.rightEye.position.z=-60,t.rightEye.position.x=25,t.rightEye.position.y=-10;var f=new l.c(10,10,3),g=new l.A({color:3342336,shading:l.p});t.rightIris=new l.y(f,g),t.rightIris.position.z=-65,t.rightIris.position.x=35,t.rightIris.position.y=-10,t.leftEye=new l.y(b,M),t.leftEye.position.z=60,t.leftEye.position.x=25,t.leftEye.position.y=-10,t.leftIris=new l.y(f,g),t.leftIris.position.z=65,t.leftIris.position.x=35,t.leftIris.position.y=-10,t.body.add(t.rightEye,t.leftEye,t.leftIris,t.rightIris);var v=new l.c(20,4,20),x=new l.A({color:16777215,shading:l.p});return t.tooth1=new l.y(v,x),t.tooth1.position.x=65,t.tooth1.position.y=-35,t.tooth1.position.z=-50,t.tooth1.rotation.z=Math.PI/2,t.tooth1.rotation.x=-Math.PI/2,t.tooth2=new l.y(v,x),t.tooth2.position.x=65,t.tooth2.position.y=-30,t.tooth2.position.z=-25,t.tooth2.rotation.z=Math.PI/2,t.tooth2.rotation.x=-Math.PI/12,t.tooth3=new l.y(v,x),t.tooth3.position.x=65,t.tooth3.position.y=-25,t.tooth3.position.z=0,t.tooth3.rotation.z=Math.PI/2,t.tooth4=new l.y(v,x),t.tooth4.position.x=65,t.tooth4.position.y=-30,t.tooth4.position.z=25,t.tooth4.rotation.z=Math.PI/2,t.tooth4.rotation.x=Math.PI/12,t.tooth5=new l.y(v,x),t.tooth5.position.x=65,t.tooth5.position.y=-35,t.tooth5.position.z=50,t.tooth5.rotation.z=Math.PI/2,t.tooth5.rotation.x=Math.PI/8,t.body.add(t.tooth1,t.tooth2,t.tooth3,t.tooth4,t.tooth5),t.body.rotation.y=-Math.PI/4,t.body.rotation.y=-Math.PI/4,t.body.position.setY=1e6,t.body.traverse((function(t){t instanceof l.y&&(t.castShadow=!0,t.receiveShadow=!0)})),t.run=function(e){t.status="running",t.runningCycle+=5*e*.7,t.runningCycle=t.runningCycle%(2*Math.PI);var o=t.runningCycle;t.body.position.y=6+Math.sin(o-Math.PI/2),t.tailFish.rotation.y=.5*Math.cos(o),t.topFish.rotation.x=.5*Math.sin(o/5),t.sideRightFish.rotation.x=Math.PI/2+.2*Math.sin(o/5),t.sideLeftFish.rotation.x=Math.PI/2+.2*Math.sin(o/5);var s=(r+(n-r)*o/5)/255,d=(c+(a-c)*o/5)/255,l=(h+(i-h)*o/5)/255;t.bodyFish.material.color.setRGB(s,d,l),t.lipsFish.material.color.setRGB(s,d,l);var p=5*e/5;t.body.scale.set(1+p,1-p,1-p)},t.jump=function(){t.status="jumping";t.body.position.setY(t.body.position.y+30)},t}return o}(l.t),z=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(s.a)(this,o),(t=e.call(this)).status="running",t.runningCycle=0,t.body=new l.t,t.add(t.body);var n=new l.c(8,8,8,1);t.torso=new l.y(n,L.blueMat),t.torso.position.y=8,t.torso.castShadow=!0,t.body.add(t.torso);var a=new l.c(3,3,3,1);t.handR=new l.y(a,L.brownMat),t.handR.position.z=7,t.handR.position.y=8,t.body.add(t.handR),t.handL=t.handR.clone(),t.handL.position.z=-t.handR.position.z,t.body.add(t.handL);var i=new l.c(16,16,16,1);t.head=new l.y(i,L.blueMat),t.head.position.y=21,t.head.castShadow=!0,t.body.add(t.head);var r=new l.c(8,3,5,1);return t.legR=new l.y(r,L.brownMat),t.legR.position.x=0,t.legR.position.z=7,t.legR.position.y=0,t.legR.castShadow=!0,t.body.add(t.legR),t.legL=t.legR.clone(),t.legL.position.z=-t.legR.position.z,t.legL.castShadow=!0,t.body.add(t.legL),t.run=function(e){t.status="running",t.runningCycle+=4*e*.7,t.runningCycle=t.runningCycle%(2*Math.PI);var o=t.runningCycle;t.legR.position.x=4*Math.cos(o),t.legR.position.y=Math.max(0,4*-Math.sin(o)),t.legL.position.x=4*Math.cos(o+Math.PI),t.legL.position.y=Math.max(0,4*-Math.sin(o+Math.PI)),t.body.position.y=6+4*Math.sin(o-Math.PI/2),t.torso.position.y=8-4*Math.cos(2*o)*.2,t.torso.rotation.y=4*-Math.cos(o+Math.PI)*.05,t.head.position.y=21-4*Math.cos(2*o)*.3,t.head.rotation.x=4*Math.cos(o)*.02,t.head.rotation.y=4*Math.cos(o)*.01,t.handR.position.x=4*-Math.cos(o),t.handR.rotation.z=-Math.cos(o)*Math.PI/8,t.handL.position.x=4*-Math.cos(o+Math.PI),t.handL.rotation.z=-Math.cos(o+Math.PI)*Math.PI/8},t.jump=function(){t.status="jumping";t.legL.rotation.x=Math.cos(-Math.PI),t.legR.rotation.x=Math.cos(-Math.PI),t.body.position.setY(t.body.position.y+30)},t}return o}(l.t),F=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n){var a,i=t.distance,r=t.far,c=t.fov;Object(s.a)(this,o);var h=new l.H(c,window.innerWidth/window.innerHeight,1,r);return a=e.call(this),h.translateZ(i),a.add(h),a.translateY(n),a.rotateX(-Math.PI/4),a.getPerspectiveCamera=function(){return h},a.rotateVertically=function(t){var e=Math.min(Math.PI/2,a.rotation.x+t);a.rotation.x=Math.max(-Math.PI/2,e)},a}return o}(l.F),C=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n,a=t.modelName,i=t.height,r=t.initialY,c=(t.playerName,Object(m.a)(t,["modelName","height","initialY","playerName"]));switch(Object(s.a)(this,o),n=e.call(this),a){case"Rabbit":n.model=new I;break;case"Hero":n.model=new z;break;case"Fish":n.model=new O;break;default:n.model=new I}n.model.scale.set(.2,.2,.2),n.model.rotateY(.8*Math.PI),n.add(n.model);var h=new F(c,i);return n.add(h),n.position.setY(r),n.getPerspectiveCamera=h.getPerspectiveCamera,n.rotateCamera=h.rotateVertically,n}return o}(l.y),S=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n,a=t.directionVelocity,i=t.gravity,r=t.jumpVelocity,c=t.maxGravity,h=t.mouseSpeed,d=Object(m.a)(t,["directionVelocity","gravity","jumpVelocity","maxGravity","mouseSpeed"]);Object(s.a)(this,o);var p=!1,u=new C(d),w=new l.R,y=new l.R,b=new l.J,M={left:!1,front:!1,right:!1,back:!1,jump:!1};(n=e.call(this)).add(u),n.getPerspectiveCamera=u.getPerspectiveCamera,n.getMesh=function(){return u},n.animate=function(t,e){n.getMesh().model.run(t),!0===M.jump&&n.getMesh().model.jump(),w.set(Number(M.left)-Number(M.right),0,Number(M.back)-Number(M.front)),w.normalize(),y.x=w.x*a*t,y.z=w.z*a*t,y.y=p?Number(M.jump)*r-i*t:Math.max(-c*t,y.y-i*t),n.rotateX(y.z*Math.PI/128),n.rotateZ(y.x*Math.PI/128),u.getWorldPosition(b.ray.origin),b.ray.origin.setLength(2*u.position.y),b.ray.direction.copy(b.ray.origin).negate().normalize();var o=b.intersectObject(e,!1);if(o.length>0){var s=o[0].point.length();u.translateY(y.y),u.position.y<=s?(u.position.setY(s),p=!0):p=!1}};var f=function(t){var e=t.movementX||t.mozMovementX||t.webkitMovementX||0,o=t.movementY||t.mozMovementY||t.webkitMovementY||0;u.rotateCamera(-o*h),n.rotateY(-e*h)},g=function(t){switch(t.keyCode){case 32:M.jump=!0;break;case 37:case 65:M.left=!0;break;case 38:case 87:M.front=!0;break;case 39:case 68:M.right=!0;break;case 40:case 83:M.back=!0}},v=function(t){switch(t.keyCode){case 32:M.jump=!1;break;case 37:case 65:M.left=!1;break;case 38:case 87:M.front=!1;break;case 39:case 68:M.right=!1;break;case 40:case 83:M.back=!1}};return document.addEventListener("keydown",g,!1),document.addEventListener("keyup",v,!1),document.addEventListener("mousemove",f,!1),n.dispose=function(){document.removeEventListener("keydown",g,!1),document.removeEventListener("keyup",v,!1),document.removeEventListener("mousemove",f,!1)},n}return o}(l.F),E=o(16),B=o(19),N=o(14),A=o(20),Y=o(24),W=o(25),q=o(23),G=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n,a){var i;Object(s.a)(this,o),(i=e.call(this,t)).addPass(new B.a(n,a));var r=new N.a(q.a);return r.uniforms.resolution.value=new l.Q(window.innerWidth,window.innerHeight),r.uniforms.resolution.value.multiplyScalar(window.devicePixelRatio),r.uniforms.pixelSize.value=12,i.addPass(r),i}return o}(E.a),V=(E.a,function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t,n,a){var i;Object(s.a)(this,o),i=e.call(this,t);var r=new Y.a(new l.Q(window.innerWidth,window.innerHeight),.3,.1,0),c=new W.a;return c.value=.5,i.addPass(new B.a(n,a)),i.addPass(r),i.addPass(c),i}return o}(E.a)),H=o(7),T=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).scene=new l.L,n.renderer=new l.T({antialias:!0}),n.renderer.setPixelRatio(window.devicePixelRatio),n.renderer.setSize(window.innerWidth,window.innerHeight),n.domElement=n.renderer.domElement,n.planet=new P(n.props.planet),n.scene.add(n.planet),n.scene.fog=new l.s,n.scene.background=n.scene.fog.color,n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){this.sceneRef.appendChild(this.domElement),window.addEventListener("resize",this.onResize,!1),this.animationFrame||(this.animationFrame=requestAnimationFrame(this.animate)),document.addEventListener("keydown",this.onKeyDown,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize,!1),this.sceneRef.removeChild(this.domElement)}},{key:"render",value:function(){for(var t=this,e=this.scene.children.length-1;e>0;e--){var o=this.scene.children[e];this.scene.remove(o)}this.player=new S(this.props.player),this.scene.add(this.player);var n=new y(this.scene.fog,this.player.getMesh(),this.props.lights);this.scene.add(n);var a,i=this.player.getPerspectiveCamera();"Rabbit"===this.props.player.modelName&&(a=new G(this.renderer,this.scene,i)),"Fish"===this.props.player.modelName&&(a=new V(this.renderer,this.scene,i));var r=0;return this.animate=function(e){var o=(e-r)/1e3;r=e;var s=t.player.animate(o,t.planet);n.animate(o,t.scene.fog,s),t.renderer.render(t.scene,i),t.animationFrame=requestAnimationFrame(t.animate),a&&a.render()},Object(H.jsx)("div",{ref:function(e){return t.sceneRef=e},className:"Scene"})}}]),o}(n.Component);T.defaultProps={lights:{distance:512,rotationSpeed:Math.PI/30,size:16},planet:{radius:128,widthSegments:48,heightSegments:32,seed:Date.now(),noiseWidth:32,noiseHeight:8}};var D=o(9),X=(o(32),function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).roll=n.roll.bind(Object(D.a)(n)),n}return Object(c.a)(o,[{key:"roll",value:function(){console.log("hi")}},{key:"render",value:function(){return Object(H.jsx)("div",{className:"Front",children:Object(H.jsxs)("div",{className:"Word",children:[Object(H.jsx)("span",{children:"X"}),Object(H.jsx)("span",{children:" - "}),Object(H.jsx)("span",{children:"p"}),Object(H.jsx)("span",{children:"l"}),Object(H.jsx)("span",{children:"a"}),Object(H.jsx)("span",{children:"n"}),Object(H.jsx)("span",{id:"a",onMouseOver:this.roll,children:"e"}),Object(H.jsx)("span",{children:"t"}),Object(H.jsxs)("div",{className:"vertical-text",children:[Object(H.jsxs)("div",{className:"hero",children:[Object(H.jsx)("p",{children:"h"}),Object(H.jsx)("p",{className:"down",children:"ro"})]}),Object(H.jsxs)("div",{className:"fish",children:[Object(H.jsx)("p",{children:"f"}),Object(H.jsx)("p",{className:"down",children:"ying fish"})]})]})]})})}}]),o}(n.Component)),K=function(t){Object(h.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).state={pointerLock:!("pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document)&&null,webgl:!1,player:{modelName:"Rabbit",directionVelocity:10,distance:30,far:1024,fov:60,gravity:9.81,height:1.618,initialY:256,jumpVelocity:1,maxGravity:27,mouseSpeed:.002}},n.pointerLockChange=function(){n.setState({pointerLock:document.pointerLockElement===n.appRef.current||document.mozPointerLockElement===n.appRef.current||document.webkitPointerLockElement===n.appRef.current})},n.requestPointerLock=function(){!1===n.state.pointerLock&&(n.appRef.requestPointerLock=n.appRef.requestPointerLock||n.appRef.mozRequestPointerLock||n.appRef.webkitRequestPointerLock),n.appRef.requestPointerLock()},n.exitPointerLock=function(){!0===n.state.pointerLock&&(document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock())},n.onKeyDown=function(t){switch(t.keyCode){case 27:n.exitPointerLock();break;case 49:n.setState((function(t,e){return{player:Object(r.a)(Object(r.a)({},t.player),{},{modelName:"Rabbit"})}}));break;case 50:n.setState((function(t,e){return{player:Object(r.a)(Object(r.a)({},t.player),{},{modelName:"Hero"})}}));break;case 51:n.setState((function(t,e){return{player:Object(r.a)(Object(r.a)({},t.player),{},{modelName:"Fish"})}}))}},n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){if(null!==this.state.pointerLock&&(document.addEventListener("keydown",this.onKeyDown,!1),document.addEventListener("pointerlockchange",this.pointerLockChange,!1),document.addEventListener("mozpointerlockchange",this.pointerLockChange,!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChange,!1),document.addEventListener("pointerlockerror",console.log,!1),document.addEventListener("mozpointerlockerror",console.log,!1),document.addEventListener("webkitpointerlockerror",console.log,!1)),window.WebGLRenderingContext){var t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");this.setState({webgl:Boolean(e)})}}},{key:"componentWillUnmount",value:function(){null!==this.state.pointerLock&&(document.removeEventListener("keydown",this.onKeyDown,!1),document.removeEventListener("pointerlockchange",this.pointerLockChange,!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChange,!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChange,!1),document.removeEventListener("pointerlockerror",console.log,!1),document.removeEventListener("mozpointerlockerror",console.log,!1),document.removeEventListener("webkitpointerlockerror",console.log,!1)),this.exitPointerLock()}},{key:"render",value:function(){var t=this,e=[],o=this.state.webgl?Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(X,{}),Object(H.jsx)("button",{onClick:this.requestPointerLock,children:"Play"})]}):null,n=this.state.webgl&&this.state.pointerLock?Object(H.jsx)(T,{player:this.state.player}):Object(H.jsx)("div",{className:"App-interface",children:o});return null===this.state.pointerLock&&e.push("Your browser may not support Pointer Lock API."),!1===this.state.webgl&&e.push("Your browser or device may not support WebGL."),Object(H.jsx)("div",{ref:function(e){return t.appRef=e},className:"App",children:n})}}]),o}(n.Component);i.a.render(Object(H.jsx)(K,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0f068eb1.chunk.js.map