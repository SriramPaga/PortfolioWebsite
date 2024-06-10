import{p as t,j as e}from"./index-Dw6vikWh.js";const o=t.div`
  /* background-color: #fff; */
  border-radius: 4px;
  box-shadow: 0 8px 10px rgba(253, 253, 253, 0.1);
  margin: 1rem;
  padding: 0.5rem;
  height: 300px;
  width: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  &:hover {
    transition: ease-in-out 200ms;
    scale: 1.1;
  }
`;t.div`
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
`;const r=t.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #087e8b;
  text-transform: capitalize;
`,a=t.div`
  margin-bottom: 1rem;
  color: #c5c6c7;
`,c=t.div`
  max-height: 50%;
`,d=t.img`
  filter: grayscale(80%);
  /* max-width: 50px; */
  /* height: 100%; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 4px;
  @media only screen and (max-width: 760px) {
    /* max-width: 40px; */
    width: 100%;
    height: 100%;
  }
`,s=t.a`
  /* text-decoration: none; */
  color: inherit;
`;function l(n){const i=n.cardData;return e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(d,{src:i.img,alt:"cardImg"})}),e.jsx(r,{children:e.jsx(s,{href:i.link,target:"_blank",children:i.title})}),e.jsx(a,{children:i.description})]})}const p=t.div`
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
    height: 100vh;
  }
`,m=t.div`
  height: 90%;
  scroll-snap-align: center;
  /* width: 1400px; */
  /* display: flex; */
  /* justify-content: space-between; */
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,h=t.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-template-rows: auto;
  /* justify-content: center; */
  /* align-items: center; */
  overflow: scroll;
  scrollbar-width: none;
  width: 100%;
  padding: 5px;
  @media only screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
  }
`,x=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,g=t.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=t.h1`
  color: #c5c6c7;
  font-size: 74px;
  margin: 0;
  font-family: 'Poppins';
  @media only screen and (max-width: 760px) {
    font-size: 55px;
  }
`,u=t.h6`
  color: #c5c6c7;
  font-size: 28px;
  margin: 1;
  font-family: 'Poppins';
  @media only screen and (max-width: 760px) {
    font-size: 55px;
  }
`,j=[{id:1,title:"itsFood",img:"./Images/Itsfoods.png",link:"https://srirampaga.github.io/itsfood/",description:"A frontend project demonstratin CRUD operation without backend, using ReactJS and TailwindCSS"},{id:2,title:"Card Modal",img:"./Images/CardModal.png",link:" http://52.15.131.99:3000/   ",description:"A small component showcasing how a modal can be created by only using HTML,CSS and JS"}];function y(){return e.jsxs(p,{id:"projects",children:[e.jsxs(m,{children:[e.jsx(g,{children:e.jsx(f,{children:"Projects"})}),e.jsx(h,{children:j.map((n,i)=>e.jsx(x,{children:e.jsx(l,{cardData:n})}))})]}),e.jsx(u,{children:"More Incoming ... ..."})]})}export{y as default};
