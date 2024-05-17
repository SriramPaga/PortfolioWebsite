import{r as n,p as i,j as t}from"./index-0Kc0mCHe.js";import"./Navbar-Dg3poe7d.js";import{o as p,_ as l,Q as m,r as v}from"./react-three-fiber.esm-D1TSquXP.js";var h=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class u extends m{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.distort=this._distort,e.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${h}
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(e){this._time.value=e}get distort(){return this._distort.value}set distort(e){this._distort.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}}const f=n.forwardRef(({speed:r=1,...e},s)=>{const[o]=n.useState(()=>new u);return p(a=>o&&(o.time=a.clock.getElapsedTime()*r)),n.createElement("primitive",l({object:o,ref:s,attach:"material"},e))});function y(r,e){const s=r+"Geometry";return n.forwardRef(({args:o,children:a,...x},d)=>{const c=n.useRef(null);return n.useImperativeHandle(d,()=>c.current),n.useLayoutEffect(()=>void(e==null?void 0:e(c.current))),n.createElement("mesh",l({ref:c},x),n.createElement(s,{attach:"geometry",args:o}),a)})}const g=y("sphere"),w=i.div`
  /* background-color: #90aead; */
  /* background-color: #244855; */
  background-color: #1a1c25;

  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 760px) {
    height: 200vh;
  }
`,b=i.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,j=i.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,z=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;
  padding: 15px;
  @media only screen and (max-width: 760px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`,_=i.h1`
  color: #c5c6c7;
  font-size: 74px;
  margin: 0;
  font-family: 'Poppins';
  @media only screen and (max-width: 760px) {
    font-size: 55px;
  }
`,k=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`,D=i.img`
  /* height: 5px; */
  height: 16px;
  margin: 0;
`,S=i.h2`
  color: #CDBFEE;
  margin: 0;
`,E=i.p`
  font-size: 24px;
  /* color: #874f41; */
  color: #c5c6c7;
  margin: 0;
  text-align: justify;
  @media only screen and (max-width: 760px) {
    font-size: 18px;
  }
`,I=i.button`
  width: 150px;
  padding: 10px;
  background-color: #D62246;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  &:hover {
    transition: ease-in-out 0.5s;
    background-color: #931909;
  }
`,C=i.a`
  text-decoration: none;
`,R=i.img`
  /* mix-blend-mode: darken; */
  width: 400px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  clip-path: circle(30%);
  @media only screen and (max-width: 760px) {
    width: 300px;
    height: 300px;
    clip-path: circle(45%);
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`,T=()=>t.jsx(w,{id:"AboutSection",children:t.jsxs(b,{children:[t.jsxs(j,{children:[t.jsxs(v,{children:[t.jsx("ambientLight",{intensity:1}),t.jsx("directionalLight",{position:[7,0,5],intensity:2}),t.jsx(g,{args:[1,100,200],scale:1.8,children:t.jsx(f,{color:"#ceffea",attach:"material",distort:.5,speed:2})})]}),t.jsx(R,{src:"./Images/DP.png"})]}),t.jsxs(z,{children:[t.jsx(_,{children:"Me in a Nutshell"}),t.jsxs(k,{children:[t.jsx(D,{src:"./Images/line2.png"}),t.jsx(S,{children:"What i do"})]}),t.jsx(E,{children:"Hi, I'm a React developer and animator with a passion for creating engaging and interactive web experiences. I have a strong understanding of React's core concepts and libraries, as well as experience with a variety of animation tools and techniques. I'm excited to use my skills to help businesses of all sizes create websites that are both visually stunning and user-friendly."}),t.jsx(C,{href:"https://drive.google.com/file/d/17JRJlfdAy-2ya_XOEO_BhYGhbkDs-vrZ/view?usp=sharing",target:"_blank",children:t.jsx(I,{children:" Check Resume"})})]})]})});export{T as default};
