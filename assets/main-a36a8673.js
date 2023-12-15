import{s as h,t as i,a as We,j as e,I as $e,u as H,r as a,F as _e,S as pe,P as et,b as De,B as z,c as oe,n as Se,q as tt,d as Qe,e as J,A as Te,V as st,H as ze,T as Ee,f as ot,C as ae,g as ge,h as it,D as xe,i as nt,k as fe,l as Ce,m as rt,o as at,p as K,v as lt,w as ct,x as dt,M as ut,y as we,z as he,E as Be,G as pt,J as ht,K as mt,L as gt,N as xt,O as ee,Q as ft,R as Ae,U as Ve,W as Le,X as Ct,Y as wt,Z as yt,_ as Re,$ as bt,a0 as q,a1 as jt,a2 as vt,a3 as kt,a4 as Nt,a5 as Dt,a6 as St}from"./vendor-915eab19.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const l of p.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerPolicy&&(p.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?p.credentials="include":r.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(r){if(r.ep)return;r.ep=!0;const p=o(r);fetch(r.href,p)}})();window.global||(window.global=window);const Qt=h.main`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
`,Tt=h.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div[role='button'] {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    color: ${i.colors.text[50]};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0 10px ${i.colors.success[600]};
    }

    & > svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    gap: 0.7rem;

    & > div[role='button'] {
      font-size: 0.9rem;
    }
  }
`,zt=h.main`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  /* background-color: #f3f3f3; */
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
    /* overflow-y: hidden; */
  }
`,Et=h.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  & > div[role='button'] {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    color: ${i.colors.text[50]};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0 10px ${i.colors.success[600]};
    }

    & > svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 1rem;

    & > div[role='button'] {
      font-size: 0.9rem;
    }
  }
`,At=h.aside`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background-color: ${i.colors.info[50]};
  box-shadow: 0 0 10px ${i.colors.primary[800]};
  border-radius: 5px;
  padding: 0.7rem 0;

  overflow-y: auto;

  #favorite-title-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
  }

  #title-favorites {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${i.colors.rose[600]};
  }

  @media (max-width: 768px) {
    height: auto;
  }
`,Lt=h.div`
  width: 100%;
  background-color: ${i.colors.info[700]};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.7rem 0.7rem;
  border-radius: 5px;
  gap: 1rem;

  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,It=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,Ut=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    /* width: 100%; */
    gap: 0.5rem;
  }
`,Pt=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    /* width: 100%; */
    gap: 0.5rem;
  }
`,Ie=[{label:"Mais recentes",value:"-created_at",color:"#000"},{label:"Mais populares",value:"-rating",color:"#000"},{label:"Mais comentários",value:"-comments_count",color:"#000"}],k=We.create({baseURL:"https://unbforum-backend-4b05406a8bbf.herokuapp.com/"}),ye=async()=>await k.get("categories/"),Mt=async t=>await k.post("categories/",t),qt=async t=>await k.delete(`categories/${t}/`),Ft=async t=>await k.patch(`categories/${t.id}/`,{...t}),Bt=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  #error-feedback {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    /* font-size: ; */

    & > svg {
      width: 0.7rem;
    }
  }
`,Vt=h.label`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;

  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${i.colors.text[500]};

  #required {
    color: ${i.colors.danger[600]};
  }

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`;function X({label:t="",inputType:s="text",placeholder:o,accessibilityLabel:n,size:r="md",fontSize:p="0.9rem",name:l,isRequired:g=!0,isEditing:c=!0,value:m=void 0,backgroundColor:d=null,height:f=null,onChange:u,...x}){return e.jsxs(Bt,{children:[t&&e.jsxs(Vt,{fontSize:p,children:[t,g&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx($e,{height:f||null,type:s,variant:c?"outline":"filled",size:r,backgroundColor:d||null,isRequired:g,value:m,placeholder:o,editable:c,accessibilityLabel:n,onChangeText:b=>u(l,b),...x})]})}function Rt({onChangeCategoriesFilter:t,onChangeOrderBy:s,onChangeSearchInput:o,handleSearch:n}){const r=H("(max-width: 768px)"),[p,l]=a.useState([]),g={control:c=>({...c,backgroundColor:i.colors.white}),option:(c,{data:m,isMulti:d,isDisabled:f,isFocused:u,isSelected:x})=>{const b=oe(m.color);return{...c,backgroundColor:f?void 0:x?d?m.color:b.alpha(.2).css():u?b.alpha(.1).css():void 0,color:f?"#ccc":x&&d?oe.contrast(b,"white")>2?"white":"black":m.color,cursor:f?"not-allowed":"default",":active":{...c[":active"],backgroundColor:f?void 0:x?m.color:b.alpha(.3).css()}}},multiValue:(c,{data:m})=>{const d=oe(m.color);return{...c,backgroundColor:d.alpha(.1).css()}},multiValueLabel:(c,{data:m})=>({...c,color:m.color}),multiValueRemove:(c,{data:m})=>({...c,color:m.color,":hover":{backgroundColor:m.color,color:"white"}}),input:c=>({...c,"input:focus":{boxShadow:"none"}})};return a.useEffect(()=>{ye().then(c=>{l(c.data)})},[]),e.jsxs(Lt,{children:[e.jsxs(It,{children:[e.jsx(_e,{size:20,color:i.colors.tertiary[300]}),e.jsx(pe,{isMulti:!0,closeMenuOnSelect:!1,options:p.map(c=>({value:c.id.toString(),label:c.name,color:c.color})),styles:g,onChange:t,placeholder:"Filtrar por categorias"})]}),e.jsxs(Pt,{children:[e.jsx(et,{size:22,color:i.colors.tertiary[300]}),e.jsx(pe,{isMulti:!1,defaultValue:Ie[0],options:Ie,placeholder:"Ordenar Tópicos",styles:g,onChange:s})]}),e.jsxs(Ut,{children:[e.jsx(De,{color:i.colors.tertiary[300],size:"22"}),e.jsx(X,{name:"topic-search",height:"2.4rem",size:r?"md":"lg",backgroundColor:i.colors.white,accessibilityLabel:"Buscar tópicos",placeholder:"Buscar tópicos...",inputType:"text",onChange:o,InputRightElement:e.jsx(z,{rounded:"none",w:"1/12",h:"full",onPress:n,children:e.jsx(De,{color:i.colors.white,size:"22"})})})]})]})}const Ot=(t,s)=>t?"0.9rem":s?"1rem":"0.9rem",Zt=(t,s)=>t?"0.7rem":s?"0.8rem":"0.7rem",Xt=h.div`
  width: 100%;
  display: flex;
  /* padding: 0.5rem; */
  gap: 0.5rem;
  margin-top: 1rem;
`,Ht=h.div`
  width: ${({isComment:t})=>t?"15%":"10%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({isComment:t})=>"space-between"};
  gap: ${({isInsideTopic:t,isComment:s})=>t&&!s?"1rem":"0.4rem"};

  #common-reactions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: ${({isInsideTopic:t,isComment:s})=>t&&!s?"1rem":"0.4rem"};

    #reactionButton {
      & > svg {
        width: ${({isComment:t})=>t?"1.2rem":"1.5rem"};
        height: ${({isComment:t})=>t?"1.2rem":"1.5rem"};
      }
    }

    & > p {
      font-weight: ${({isComment:t})=>t?"700":"900"};
      font-size: ${({isComment:t})=>t?"1.2rem":"1.4rem"};
      color: ${i.colors.primary[900]};
    }

    #markButton {
      transition: 0.5s all ease;
    }

    #markButton:hover > svg {
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
    }

    #markButton:focus,
    #deleteButton:focus {
      box-shadow: none;
    }
  }

  #deleteButton {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;
    background-color: ${i.colors.danger[500]};
    transition: 0.2s all ease;
  }

  #editButton {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;
    background-color: ${i.colors.purple[600]};
    transition: 0.2s all ease;
  }

  #pinnedButton {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;
    background-color: ${i.colors.yellow[500]};
    transition: 0.2s all ease;
  }

  #deleteButton:hover,
  #editButton:hover,
  #pinnedButton:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    width: ${({isInsideTopic:t})=>t?"10%":"15%"};

    #common-reactions {
      gap: 0.2rem;

      & > p {
        font-weight: 800;
        font-size: 1.1rem;
      }

      #reactionButton {
        & > svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`,Jt=h.div`
  width: 100%;
  display: flex;
`,Gt=h.div`
  width: ${({isComment:t})=>t?"85%":"100%"};
  min-height: ${({isComment:t})=>t?"0":"30vh"};
  display: flex;
  flex-direction: column;
  justify-content: ${({isComment:t})=>"space-evenly"};
  gap: ${({isComment:t})=>t?"0.4rem":"0.6rem"};

  & > p {
    width: ${({isInsideTopic:t})=>t?"90%":"100%"};
    text-align: left;
    font-weight: ${({isComment:t,isInsideTopic:s})=>"400"};
    font-size: ${({isComment:t,isInsideTopic:s})=>Ot(t,s)};
    color: ${i.colors.black};
    line-height: ${({isComment:t})=>t?"1.7":"2"};
  }

  & > span {
    font-size: 0.8rem;
    font-weight: ${({isComment:t,isInsideTopic:s})=>"400"};
    color: ${i.colors.black};
    line-height: 1;
  }

  /* &:focus {
    box-shadow: none;
  } */

  #post-title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.4rem;

    & > p {
      width: 100%;
      font-size: ${({isComment:t,isInsideTopic:s})=>Zt(t,s)};
      line-height: 1.7;
    }

    & > span {
      font-size: 0.65rem;
    }

    #post-title {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`,Kt=h.div`
  width: 100%;
  display: flex;
  align-items: ${({isInsideTopic:t})=>"center"};
  flex-direction: row;
  margin-bottom: 1rem;

  & > p {
    font-weight: ${({isInsideTopic:t})=>t?500:600};
    font-size: 1rem;
    text-align: left;
    color: ${i.colors.black};
  }

  @media (max-width: 768px) {
    & > p {
      font-size: 0.8rem;
    }
  }
`,Yt=h.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.7rem;

  #post-badge-text {
    color: ${i.colors.text[50]};
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    gap: 0.4rem;

    #post-badge-text {
      font-size: 0.7rem;
      line-height: 1.3;
    }
  }
`,Wt=h(z)`
  width: ${({isInsideTopic:t})=>t?"50%":"90%"};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; */
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${i.colors.primary[600]};
  }

  #comment-button {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${i.colors.primary[600]};
  }

  ${({isInsideTopic:t})=>t?Se`
          cursor: initial;
        `:Se`
          &:hover {
            /* filter: brightness(50%); */

            & > p {
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
              color: ${i.colors.primary[400]};
            }

            & > svg {
              color: ${i.colors.primary[400]};
              filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
            }
          }
        `}

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    gap: 0.3rem;

    & > p {
      font-size: 1rem;
    }
  }
`;h.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 5px;
  background-color: ${i.colors.tertiary[100]};

  & > p {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${i.colors.primary[800]};
    text-shadow: 0 0 2px rgba(255, 255, 255);
  }

  & > div[role='button']:focus {
    box-shadow: none;
  }

  & > div[role='button']:hover {
    /* box-shadow: none; */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;const de=async t=>await k.get(`topics/?${tt.stringify(t,{arrayFormat:"comma"})}`),Ue=async t=>await k.get(`topics/${t}`),$t=async t=>await k.post("topics",t),_t=async(t,s)=>await k.put(`topics/${s}`,t),es=async t=>await k.post(`topics/${t}/upvote`),ts=async t=>await k.post(`topics/${t}/downvote`),ss=async t=>await k.post(`topics/${t}/save`),os=async t=>await k.post(`topics/${t}/unsave`),is=async()=>await k.get("users/me/saved_topics/"),ns=async()=>await k.get("users/me/topics/"),rs=async t=>await k.delete(`topics/${t}/`),as=async t=>await k.post(`topics/${t}/fix/`),ie="moderator",ne="administrator",Oe=a.createContext(null),ls=({children:t})=>{const[s,o]=a.useState(""),[n,r]=a.useState([]),[p,l]=a.useState(""),[g,c]=a.useState("");a.useEffect(()=>{const u=localStorage.getItem("@UnBForum:token");if(u){const x=Qe(u.split(" ")[1]);k.defaults.headers.common.Authorization=`${u}`,o(u.split(" ")[1]),r(x.scopes),l(x.sub),c(x.name)}},[]);const m=a.useCallback(u=>{localStorage.setItem("@UnBForum:token",`Bearer ${u}`);const x=Qe(u);k.defaults.headers.common.Authorization=`Bearer ${u}`,o(u),r(x.scopes),l(x.sub),c(x.name)},[]),d=a.useCallback(u=>n.some(x=>x===u),[n]),f=a.useCallback(()=>{o(""),r([]),l(""),c(""),k.defaults.headers.common.Authorization=null,localStorage.removeItem("@UnBForum:token")},[]);return e.jsx(Oe.Provider,{value:{token:s,name:g,email:p,scopes:n,changeToken:m,checkScopePermissions:d,logoutUser:f,setName:c},children:t})};function $(){const t=a.useContext(Oe);if(!t)throw new Error("useUser must be used within an UserThemeProvider");return t}const v=({id:t,status:s,variant:o="left-accent",title:n,description:r,isClosable:p=!1,...l})=>{const g=J();return e.jsx(Te,{maxWidth:"100%",alignSelf:"center",flexDirection:"row",status:s||"error",variant:o,zIndex:999999999999,...l,children:e.jsxs(st,{space:1,flexShrink:1,w:"100%",children:[e.jsxs(ze,{flexShrink:1,alignItems:"center",justifyContent:"space-between",children:[e.jsxs(ze,{space:2,flexShrink:1,alignItems:"center",children:[e.jsx(Te.Icon,{}),e.jsx(Ee,{fontSize:"md",fontWeight:"medium",flexShrink:1,color:o==="solid"?"lightText":o!=="outline"?"darkText":null,children:n})]}),p?e.jsx(ot,{variant:"unstyled",icon:e.jsx(ae,{size:"3"}),_icon:{color:o==="solid"?"lightText":"darkText"},onPress:()=>g.close(t)}):null]}),e.jsx(Ee,{px:"6",color:o==="solid"?"lightText":o!=="outline"?"darkText":null,children:r})]})})},cs=async(t,s)=>await k.post(`topics/${s}/comments/`,{content:t}),ds=async t=>await k.get(`topics/${t}/comments/`),us=async(t,s)=>await k.post(`topics/${s}/comments/${t}/upvote`),ps=async(t,s)=>await k.post(`topics/${s}/comments/${t}/downvote`),hs=async(t,s)=>await k.delete(`topics/${s}/comments/${t}/`),ms=async(t,s)=>await k.post(`topics/${s}/comments/${t}/fix/`),gs=async(t,s,o)=>await k.put(`topics/${s}/comments/${t}/`,{content:o}),xs=t=>`https://unbforum-backend-4b05406a8bbf.herokuapp.com/files/download/${t.upload_path}`;function be(t){const s=t.split(" ");if(s.length>=2){const o=s[0],n=s[s.length-1],r=o[0],p=n[0];return r.toUpperCase()+p.toUpperCase()}else return s[0][0].toUpperCase()}const fs=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo sombreado */
  display: flex;
  align-items: center;
  justify-content: center;
`,Cs=h.div`
  width: 40%;
  display: flex;

  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  position: relative;
  background-color: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  #buttons-dialog-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  & > p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${i.colors.text[800]};
  }

  @media (max-width: 768px) {
    width: 80%;

    padding: 20px 20px;

    #buttons-dialog-container {
      gap: 0.5rem;
    }

    & > p {
      margin-top: 1.5rem;
      font-size: 0.9rem;
    }
  }
`;h.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;const ws=h.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;function me({question:t,handleAccept:s,handleClose:o,cancelText:n="Cancelar",acceptText:r,isOpen:p,isLoadingAcceptButton:l=!1,loadingAcceptButtonText:g=""}){const c=ge({lg:"md",base:"sm"});return e.jsx(e.Fragment,{children:p&&e.jsx(fs,{children:e.jsxs(Cs,{children:[e.jsx(ws,{onClick:o,children:e.jsx(ae,{size:"21",color:i.colors.primary[50]})}),e.jsx("p",{children:t}),e.jsxs("div",{id:"buttons-dialog-container",children:[e.jsx(z,{size:c,variant:"outline",onPress:o,children:n}),e.jsx(z,{size:c,onPress:s,bgColor:i.colors.danger[500],isLoading:l,isLoadingText:g,children:r})]})]})})})}const ys=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: ${i.colors.black+"75"}; // fundo escurecido
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({isOpen:t})=>t?"1":"0"};
  visibility: ${({isOpen:t})=>t?"visible":"hidden"};
  transition:
    opacity 0.3s ease,
    visibility 0s linear ${({isOpen:t})=>t?"0s":"0.3s"};
`,bs=h.section`
  position: relative;
  background-color: white;
  width: 60%;
  max-width: 880px;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  /* overflow: auto; */

  border-radius: 8px;
  padding: 1.7rem 3rem;
  /* box-shadow: 0 0 10px ${i.colors.black+"50"}; */
  opacity: ${({isOpen:t})=>t?"1":"0"};
  /* transform: translateY(-50px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  */
  & > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${i.colors.text[700]};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 90vh;
    max-width: none;

    padding: 0.5rem 1rem;

    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
    }
  }
`,js=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,vs=h.div`
  width: 100%;
`,ks=h.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,Ns=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  & > div,
  textarea {
    height: ${({isComment:t})=>t?"5rem":"13rem"};
  }

  & > textarea {
    font-size: 0.9rem;
    line-height: 1rem;
    color: ${i.colors.black};
  }

  @media (max-width: 768px) {
    & > div,
    textarea {
      height: ${({isComment:t})=>t?"5rem":"7rem"};
    }
  }
`,Ds=h.label`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${i.colors.text[500]};

  #required {
    color: ${i.colors.danger[600]};
  }

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`;function je({label:t="",inputType:s="text",placeholder:o,accessibilityLabel:n,size:r="md",fontSize:p="0.9rem",isRequired:l=!0,isEditing:g=!0,name:c,isComment:m=!1,value:d=void 0,onChange:f,...u}){return e.jsxs(Ns,{isComment:m,children:[t&&e.jsxs(Ds,{fontSize:p,children:[t,l&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx(it,{type:s,variant:g?"outline":"filled",size:r,placeholder:o,accessibilityLabel:n,editable:g,onChangeText:x=>f(c,x),autoCompleteType:null,value:d,totalLines:5,maxLength:700,...u})]})}const Ss=h.div`
  position: relative;
  width: 100%; /* largura desejada */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  /* Estilo personalizado para o botão de upload */
  .custom-file-upload {
  }

  /* Estilo para quando o mouse está sobre o botão */
  .custom-file-upload:hover {
    background-color: #e0e0e0;
  }
`,Qs=h.label`
  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${i.colors.text[500]};

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`,Ts=h.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  overflow-x: auto;

  /* background-color: blue; */

  & > p {
    width: 10rem;
    height: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0.8rem 1rem;

    text-align: center;
    font-weight: 400;
    line-height: 1.5;

    background-color: ${i.colors.tertiary[100]};
  }

  #file {
    position: relative;

    font-size: 0.8rem;
    color: ${i.colors.text[500]};

    overflow: hidden;
    word-wrap: break-word;
  }

  #delete-file-button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0.3rem;
    background-color: ${i.colors.danger[600]};

    transition: 0.3s all ease;
  }

  #delete-file-button:hover {
    filter: brightness(70%);
  }

  #no-files {
    width: 100%;
    align-items: flex-start;

    font-size: 0.9rem;
    color: ${i.colors.text[500]};
    background-color: transparent;

    padding: 0;
  }

  @media (max-width: 768px) {
    height: 10rem;
    gap: 0.5rem;

    & > p {
      width: 8rem;
      gap: 0.5rem;

      padding: 0.4rem 0.5rem;

      line-height: 1.4;

      background-color: ${i.colors.tertiary[100]};
    }

    #file {
      font-size: 0.7rem;
    }

    #delete-file-button {
      padding: 0.1rem;
    }

    #no-files {
      font-size: 0.7rem;
    }
  }
`,zs=async t=>{const s=new FormData;return s.append("files",t),await k.post("files/upload/",s,{headers:{"Content-Type":t.type}})};function Es({handleAddFile:t,handleDeleteFile:s,files:o,fileInputRef:n,filesUploadLimit:r=2,setIsAddFileLoading:p}){const l=J(),g=async d=>{const f=d.target.files&&d.target.files[0];f&&o.length+1<=r?(p(!0),zs(f).then(u=>{t(u.data[0])}).catch(u=>{l.show({placement:"top",render:()=>e.jsx(v,{id:"files-upload-error",status:"error",title:"Opa!",description:"Erro ao fazer upload do arquivo."})})}).finally(()=>{p(!1)})):l.show({placement:"top",render:()=>e.jsx(v,{id:"files-error",status:"error",title:"Opa!",description:"Número de arquivos atingido ou arquivo é inválido."})})},c=()=>{const d=[];return o.forEach((f,u)=>{d.push(e.jsxs("p",{id:"file",children:[e.jsx("button",{id:"delete-file-button",onClick:()=>s(f.name),children:e.jsx(xe,{size:"1.7rem",color:i.colors.primary[50]})}),e.jsx(nt,{size:"38",color:i.colors.gray[500]}),f.name]},u))}),d},m=()=>e.jsx("p",{id:"no-files",children:"Sem arquivos adicionados"});return e.jsx(e.Fragment,{children:e.jsxs(Ss,{children:[e.jsx(Qs,{fontSize:"1.2rem",children:`Arquivos (${o.length}/${r} arquivos adicionados)`}),e.jsx("input",{ref:n,id:"file-upload",type:"file",style:{display:"none"},onChange:g}),e.jsx(Ts,{children:o.length>0?c():m()})]})})}const Pe=t=>{let s=!0;const o=[],{title:n,content:r}=t;return(!n||n==="")&&(s=!1,o.push("Título")),(!r||r==="")&&(s=!1,o.push("Conteúdo")),{isValid:s,fieldErrors:o}},Me=t=>{const{title:s,content:o,files:n,categories:r}=t;return{title:s,content:o,categories:r,files:n.map(p=>p.id)}},As=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: ${i.colors.black+"75"}; // fundo escurecido
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({isOpen:t})=>t?"1":"0"};
  visibility: ${({isOpen:t})=>t?"visible":"hidden"};
  transition:
    opacity 0.3s ease,
    visibility 0s linear ${({isOpen:t})=>t?"0s":"0.3s"};
`,Ls=h.section`
  position: relative;
  background-color: white;
  width: 60%;
  max-width: 880px;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  /* overflow: auto; */

  border-radius: 8px;
  padding: 1.7rem 3rem;
  /* box-shadow: 0 0 10px ${i.colors.black+"50"}; */
  opacity: ${({isOpen:t})=>t?"1":"0"};
  /* transform: translateY(-50px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  */
  & > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${i.colors.text[700]};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 90vh;
    max-width: none;

    padding: 0.5rem 1rem;

    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
    }
  }
`,Is=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,Us=h.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,Ze=t=>{let s=!0;const o=[];return(!t||t==="")&&(s=!1,o.push("Comentário")),{isValid:s,fieldErrors:o}};function Ps({isModalOpen:t,comment:s=null,setIsModalOpen:o,commentId:n=null,topicId:r=null}){const p=J(),l=H("(max-width: 768px)"),[g,c]=a.useState(!1),[m,d]=a.useState(s||{content:""}),[f,u]=a.useState(!1);a.useEffect(()=>{console.log(m)},[m]),a.useEffect(()=>{c(t),d(s||{content:""})},[t,s]);const x=a.useCallback((D,S)=>{d({...m,[D]:S})},[m]),b=D=>{D.preventDefault();const{isValid:S,fieldErrors:E}=Ze(m.content);if(console.log({isValid:S,commentId:n,topicId:r}),!S||n===null||r===null){p.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${E.reduce((L,A,I)=>I===0?`'${A}'`:I===E.length-1?`${L} e '${A}'`:`${L}, '${A}'`,"")}`,status:""})});return}u(!0),gs(n,r,m.content).then(L=>{p.show({placement:"top-right",render:()=>e.jsx(v,{id:"edit-comment-success",title:"Comentário Editado com Sucesso",description:"Agora todos podem ver seu comentário com as edições!",status:"success"})}),N(),d({content:""})}).catch(L=>{p.show({placement:"top-right",render:()=>{let A="";return typeof L.response.data.detail=="object"?A=L.response.data.detail[0].msg.split(", ")[1]:A=L.response.data.detail,e.jsx(v,{id:"edit-comment-error",title:"Campos Inválidos",description:`Erro: ${A}`,status:""})}})}).finally(()=>{u(!1)})},N=()=>{c(!1),setTimeout(()=>{o(!1)},300)};return e.jsx(e.Fragment,{children:g&&e.jsx(As,{isOpen:g,onClick:N,children:e.jsxs(Ls,{isOpen:g,onClick:D=>D.stopPropagation(),children:[e.jsx(Us,{onClick:N,children:e.jsx(ae,{size:"2rem",color:i.colors.white})}),e.jsx("h1",{children:"Editar Comentário"}),e.jsx(je,{name:"content",onChange:x,value:m.content||void 0,fontSize:"1.2rem",size:"lg",inputType:"text",accessibilityLabel:"Comentário",label:"Comentário",placeholder:"Digite o comentário aqui..."}),e.jsx(Is,{children:e.jsx(z,{id:"create-topic-button",onPress:D=>b(D),bgColor:i.colors.success[600],size:l?"xs":"md",borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"700"},isLoadingText:"Editando...",isLoading:f,rightIcon:e.jsx(fe,{}),children:"Editar"})})]})})})}function ve({isModalOpen:t,setIsModalOpen:s,isEditing:o=!1,topic:n=null,id:r=null,topicId:p=null,isEditingComment:l=!1}){const g=J(),c=H("(max-width: 768px)"),m=a.useRef(null),[d,f]=a.useState(!1),[u,x]=a.useState(n||{title:"",content:"",files:[],categories:[]}),[b,N]=a.useState(!1),[D,S]=a.useState(!1),[E,L]=a.useState([]),A={control:C=>({...C,backgroundColor:i.colors.white}),option:(C,{data:Q,isMulti:j,isDisabled:w,isFocused:U,isSelected:P})=>{const M=oe(Q.color);return{...C,backgroundColor:w?void 0:P?j?Q.color:M.alpha(.2).css():U?M.alpha(.1).css():void 0,color:w?"#ccc":P&&j?oe.contrast(M,"white")>2?"white":"black":Q.color,cursor:w?"not-allowed":"default",":active":{...C[":active"],backgroundColor:w?void 0:P?Q.color:M.alpha(.3).css()}}},multiValue:(C,{data:Q})=>{const j=oe(Q.color);return{...C,backgroundColor:j.alpha(.1).css()}},multiValueLabel:(C,{data:Q})=>({...C,color:Q.color}),multiValueRemove:(C,{data:Q})=>({...C,color:Q.color,":hover":{backgroundColor:Q.color,color:"white"}}),input:C=>({...C,"input:focus":{boxShadow:"none"}})};a.useEffect(()=>{t&&ye().then(C=>{L(C.data)})},[t]),a.useEffect(()=>{f(t),x(n||{title:"",content:"",files:[],categories:[]})},[t,n]);const I=a.useCallback((C,Q)=>{Array.isArray(Q)?x({...u,[C]:Q.map(j=>Number(j.value))}):x({...u,[C]:Q})},[u]),Z=a.useCallback(C=>{S(C)},[]),B=C=>{C.preventDefault();const{isValid:Q,fieldErrors:j}=Pe(u);if(!Q){g.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${j.reduce((w,U,P)=>P===0?`'${U}'`:P===j.length-1?`${w} e '${U}'`:`${w}, '${U}'`,"")}`,status:""})});return}N(!0),$t(Me(u)).then(w=>{g.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-success",title:"Tópico Criado com Sucesso",description:"Agora todos podem ver seu novo tópico!",status:"success"})}),V(),x({title:"",content:"",files:[],categories:[]})}).catch(w=>{g.show({placement:"top-right",render:()=>{let U="";return typeof w.response.data.detail=="object"?U=w.response.data.detail[0].msg.split(", ")[1]:U=w.response.data.detail,e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Erro: ${U}`,status:""})}})}).finally(()=>{N(!1)})},G=C=>{C.preventDefault();const{isValid:Q,fieldErrors:j}=Pe(u);if(!Q||r===null){g.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${j.reduce((w,U,P)=>P===0?`'${U}'`:P===j.length-1?`${w} e '${U}'`:`${w}, '${U}'`,"")}`,status:""})});return}N(!0),_t(Me(u),r).then(w=>{g.show({placement:"top-right",render:()=>e.jsx(v,{id:"edit-topic-success",title:"Tópico Editado com Sucesso",description:"Agora todos podem ver seu tópico com as edições!",status:"success"})}),V(),x({title:"",content:"",files:[],categories:[]})}).catch(w=>{g.show({placement:"top-right",render:()=>{let U="";return typeof w.response.data.detail=="object"?U=w.response.data.detail[0].msg.split(", ")[1]:U=w.response.data.detail,e.jsx(v,{id:"edit-topic-error",title:"Campos Inválidos",description:`Erro: ${U}`,status:""})}})}).finally(()=>{N(!1)})},V=()=>{f(!1),setTimeout(()=>{s(!1)},300)},y=a.useCallback(C=>{x({...u,files:[...u.files,C]})},[u]),R=a.useCallback(C=>{const Q=u.files.filter(j=>j.name!==C);x({...u,files:Q})},[u]),Y=()=>{m&&m.current&&m.current.click()},_=()=>{const C=w=>E.filter(U=>U.id===w)[0];let Q=[];const j=u.categories.map(w=>C(w));return j.filter(w=>w!==void 0).length>0&&(Q=j.map(w=>({value:w.id.toString(),label:w.name,color:w.color}))),Q};return l&&d?e.jsx(Ps,{isModalOpen:d,setIsModalOpen:s,comment:{content:u.content},isEditing:!0,commentId:r,topicId:p}):e.jsx(e.Fragment,{children:d&&e.jsx(ys,{isOpen:d,onClick:V,children:e.jsxs(bs,{isOpen:d,onClick:C=>C.stopPropagation(),children:[e.jsx(ks,{onClick:V,children:e.jsx(ae,{size:"2rem",color:i.colors.white})}),e.jsx("h1",{children:o?"Editar Tópico":"Novo Tópico"}),e.jsx(X,{name:"title",onChange:I,value:u.title||void 0,fontSize:"1.2rem",size:"lg",inputType:"text",accessibilityLabel:"Título",label:"Título",placeholder:"Digite o título do tópico..."}),e.jsx(je,{name:"content",onChange:I,value:u.content||void 0,fontSize:"1.2rem",size:"lg",inputType:"text",accessibilityLabel:"Conteúdo",label:"Conteúdo",placeholder:"Digite o conteúdo do tópico aqui..."}),e.jsx(vs,{children:e.jsx(pe,{isMulti:!0,closeMenuOnSelect:!1,value:_(),options:E.map(C=>({value:C.id.toString(),label:C.name,color:C.color})),styles:A,onChange:C=>I("categories",C),placeholder:"Adicionar categorias"})}),e.jsx(Es,{filesUploadLimit:2,fileInputRef:m,handleAddFile:y,handleDeleteFile:R,files:u.files,setIsAddFileLoading:Z}),e.jsxs(js,{children:[e.jsx(z,{onPress:()=>Y(),size:c?"xs":"md",isLoading:D,isLoadingText:"Adicionando arquivo...",borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"400"},rightIcon:e.jsx(Ce,{}),children:"Adicionar arquivos"}),e.jsx(z,{id:"create-topic-button",onPress:o?C=>G(C):C=>B(C),bgColor:i.colors.success[600],size:c?"xs":"md",isDisabled:D,borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"700"},isLoadingText:o?"Editando...":"Criando...",isLoading:b,rightIcon:e.jsx(fe,{}),children:o?"Editar":"Criar"})]})]})})})}const Ms=h.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: max-content;
  gap: 1rem;

  @media (max-width: 768px) {
    height: 30vh;
    /* overflow-y: hidden; */
  }
`;function W({accessibilityLabel:t,isInsideButton:s=!1}){return e.jsxs(Ms,{children:[e.jsx(rt,{size:s?"sm":"lg",color:i.colors.primary[700],accessibilityLabel:t}),!s&&e.jsx(at,{color:"primary.700",fontSize:"md",children:"Carregando..."})]})}function re({id:t,isInsideTopic:s=!1,isComment:o=!1,title:n="",author:r,authorEmail:p,content:l,topicId:g=null,currentRating:c=0,rating:m=0,files:d=[],categories:f=[],commentsCount:u=0,isSave:x=!1,isMyTopicScreen:b=!1,deleteTopicCallback:N=E=>new Promise(()=>null),fixedTopicCallback:D=()=>new Promise(()=>null),isFixed:S=!1}){const{token:E,checkScopePermissions:L,email:A}=$(),I=J(),Z=K(),B=H("(max-width: 768px)"),[G,V]=a.useState(m),[y,R]=a.useState(x),[Y,_]=a.useState(S),[C,Q]=a.useState(c),[j,w]=a.useState(!1),[U,P]=a.useState(!1),[M,F]=a.useState(!1),[le,Xe]=a.useState(!1);a.useEffect(()=>{Q(c),V(m),R(x),_(S)},[c,m,x,S]);function He(){Z(`/topic/${t}`)}const ce=()=>{I.show({placement:"top-right",render:()=>e.jsx(v,{id:"user-unlogged-error",title:"Opa!",description:"Para interagir com um tópico ou comentário, você precisa fazer login!",status:""})})};async function ke(T,O){if(T.preventDefault(),!E){ce();return}if(O>0){const ue=await(o?us(t,g):es(t));V(ue.data.rating),Q(C>0?0:1)}else{const ue=await(o?ps(t,g):ts(t));V(ue.data.rating),Q(C<0?0:-1)}}function Je(T){if(T.preventDefault(),!E){ce();return}y?os(t).then(O=>{R(!1)}).catch(O=>{}):ss(t).then(O=>{R(!0)}).catch(O=>{})}function Ge(){if(!E){ce();return}P(!0),o?hs(t,g).then(T=>{w(!1),N(t).then(),I.show({placement:"top-right",render:()=>e.jsx(v,{id:"delete-topic-success",title:"Comentário removido!",description:"Comentário removido com sucesso!",status:"success"})})}).catch(T=>{}).finally(()=>{P(!1)}):rs(t).then(T=>{w(!1),N(t).then(),I.show({placement:"top-right",render:()=>e.jsx(v,{id:"delete-topic-success",title:"Tópico removido!",description:"Tópico removido com sucesso!",status:"success"})})}).catch(T=>{}).finally(()=>{P(!1)})}function Ke(){const T=Y;if(!E){ce();return}F(!0),o?ms(t,g).then(O=>{D().then(),_(O.data.is_fixed),I.show({placement:"top-right",render:()=>e.jsx(v,{id:"fixed-topic-success",title:T?"Comentário Desafixado":"Comentário fixado!",description:T?"Comentário desafixado com sucesso!":"Comentário fixado com sucesso!",status:"success"})})}).catch(O=>{}).finally(()=>{F(!1)}):as(t).then(O=>{D().then(),_(O.data.is_fixed),I.show({placement:"top-right",render:()=>e.jsx(v,{id:"fixed-topic-success",title:T?"Tópico Desafixado":"Tópico fixado!",description:T?"Tópico desafixado com sucesso!":"Tópico fixado com sucesso!",status:"success"})})}).catch(O=>{}).finally(()=>{F(!1)})}const Ne=a.useCallback(T=>{Xe(T),T||N(t).then()},[N,t]);function Ye(){switch(y){case!0:return e.jsx(mt,{size:"30",color:i.colors.darkBlue[400]});case!1:return e.jsx(ht,{size:"30",color:i.colors.darkBlue[400]})}}return e.jsxs(e.Fragment,{children:[e.jsxs(Xt,{children:[e.jsxs(Ht,{isInsideTopic:s,isComment:o,children:[e.jsxs("div",{id:"common-reactions",children:[e.jsx("button",{id:"reactionButton",onClick:T=>ke(T,1),children:e.jsx(lt,{color:C>0?i.colors.tertiary[500]:i.colors.muted[500],size:"18"})}),e.jsx("p",{children:G}),e.jsx("button",{id:"reactionButton",onClick:T=>ke(T,-1),children:e.jsx(ct,{color:C<0?i.colors.tertiary[500]:i.colors.muted[500],size:"18"})}),!o&&e.jsx("button",{id:"markButton",onClick:T=>Je(T),children:Ye()})]}),(L(ne)||L(ie))&&e.jsx("button",{id:"pinnedButton",onClick:()=>Ke(),style:{border:Y?"none":`1px solid ${i.colors.yellow[500]}`,backgroundColor:Y?`${i.colors.yellow[500]}`:`${i.colors.white}`},children:M?e.jsx(W,{isInsideButton:!0,accessibilityLabel:"Fixando tópico..."}):e.jsx(dt,{color:Y?i.colors.white:i.colors.yellow[500],size:B?"22":"30"})}),e.jsxs("div",{id:"user-buttons",style:{display:"flex",flexDirection:"column",gap:".2rem"},children:[(E&&b||L(ne)||L(ie))&&e.jsx("button",{id:"deleteButton",onClick:()=>w(!0),children:e.jsx(xe,{color:i.colors.white,size:B?"22":"30"})}),(E&&b||A===p)&&e.jsx("button",{id:"editButton",onClick:()=>Ne(!0),children:e.jsx(ut,{color:i.colors.white,size:B?"22":"30"})})]})]}),e.jsx(Jt,{children:e.jsxs(Gt,{isInsideTopic:s,isComment:o,children:[s&&e.jsx("h1",{id:"post-title",children:n}),e.jsxs(Kt,{isInsideTopic:s,children:[e.jsx(we,{bg:o?"lime.600":"emerald.600",marginRight:"0.8rem",size:o?"xs":"sm",children:be(r)}),e.jsxs("p",{children:[r,!s&&!o&&` - ${n}`]})]}),e.jsx("p",{dangerouslySetInnerHTML:{__html:l.replace(/\n/g,"<br>")}}),d.length>0&&e.jsx(he,{width:"80%"}),d.map((T,O)=>e.jsxs("span",{children:["Para acessar o arquivo ",`${O+1}: `,e.jsx("a",{href:xs(T),target:"_blank",rel:"noreferrer",children:"clique aqui"})]},T.id)),!o&&e.jsx(Yt,{children:f.map(T=>e.jsx(Be,{variant:"solid",bg:T.color,alignSelf:"center",size:"md",textDecoration:"solid .8rem bold",children:e.jsx("p",{id:"post-badge-text",children:T.name})},T.id))}),!s&&!o&&e.jsx(Wt,{variant:"outline",width:"95%",size:"xs",_text:{fontSize:B?"0.8rem":"1rem"},isInsideTopic:s,onPress:s?()=>{}:()=>He(),rightIcon:e.jsx(pt,{size:B?"18":"20",color:i.colors.primary[700]}),_icon:{marginLeft:"1rem"},children:`Ver comentários (${u})`})]})})]}),e.jsx(he,{alignSelf:"flex-end",width:o?"95%":"100%",marginTop:s?"0rem":"0.5rem",height:o||!s?"0.05rem":".1rem",_light:{bg:"muted.800"},_dark:{bg:"muted.50"}}),e.jsx(me,{isOpen:j,handleAccept:Ge,handleClose:()=>w(!1),question:o?"Tem certeza que deseja remover seu comentário?":"Tem certeza que deseja remover seu tópico?",acceptText:"Remover",isLoadingAcceptButton:U,loadingAcceptButtonText:"Removendo..."}),e.jsx(ve,{isModalOpen:le,setIsModalOpen:Ne,isEditing:!0,isEditingComment:o,topic:{title:n,categories:f.map(T=>T.id),files:d,content:l},id:t,topicId:g})]})}const qs=h.button`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.8rem;

  padding: 10px;
  border-radius: 5px;
  background-color: ${i.colors.white};
  box-shadow: 0 0 10px ${i.colors.black+"25"};
`,Fs=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > p {
    font-weight: 600;
    font-size: 0.8rem;
    color: ${i.colors.black};
  }
`,Bs=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    text-align: left;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${i.colors.black};
    line-height: 1.3;

    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Vs=h.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.7rem;

  #post-badge-text {
    color: ${i.colors.text[50]};
    font-size: 0.7rem;
    line-height: 1.5;
    font-weight: 500;
  }
`;h.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${i.colors.primary[600]};
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${i.colors.primary[600]};
  }

  &:hover {
    /* filter: brightness(50%); */

    & > p {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      color: ${i.colors.primary[400]};
    }

    & > svg {
      color: ${i.colors.primary[400]};
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
    }
  }

  &:focus {
    box-shadow: none;
  }
`;function Rs({favoriteTopic:t}){const s=K();return e.jsxs(qs,{onClick:()=>s(`/topic/${t.id}`),children:[e.jsxs(Fs,{children:[e.jsx(we,{bg:"emerald.800",marginRight:"0.8rem",size:"xs",children:be(t.author.name)}),e.jsx("p",{children:`${t.author.name} - ${t.title}`})]}),e.jsxs(Bs,{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br>")}}),e.jsx(Vs,{children:t.categories.map(o=>e.jsx(Be,{variant:"solid",bg:o.color,alignSelf:"center",size:"sm",textDecoration:"solid .8rem bold",children:e.jsx("p",{id:"post-badge-text",children:o.name})},o.id))})]})]})}function Os(){const{token:t}=$(),s=H("(max-width: 768px)"),[o,n]=a.useState(!1),[r,p]=a.useState([]),[l,g]=a.useState([]),[c,m]=a.useState(!1),[d,f]=a.useState([]),[u,x]=a.useState("-created_at"),[b,N]=a.useState(""),[D,S]=a.useState(""),[E,L]=a.useState(!1);a.useEffect(()=>window.scrollTo(0,0),[]),a.useEffect(()=>{o||(L(!0),m(!0),Promise.all([de({search:D,order_by:u,category__id__in:d}).then(y=>{p(y.data)}).finally(()=>L(!1)),de({is_fixed:!0}).then(y=>{g(y.data)}).finally(()=>m(!1))]).then())},[o,D,u,d]);const A=a.useCallback(async()=>{L(!0),m(!0),Promise.all([de({search:D,order_by:u,category__id__in:d}).then(y=>{p(y.data)}).finally(()=>L(!1)),de({is_fixed:!0}).then(y=>{g(y.data)}).finally(()=>m(!1))]).then()},[D,d,u]),I=a.useCallback(y=>{n(y)},[]),Z=a.useCallback(y=>{f(y.map(R=>R.value))},[]),B=a.useCallback(y=>{x(y.value)},[]),G=a.useCallback((y,R)=>{N(R)},[]),V=a.useCallback(()=>{S(b)},[b]);return e.jsxs(e.Fragment,{children:[e.jsxs(Qt,{children:[e.jsxs(Tt,{children:[e.jsx(gt,{isDisabled:t,label:t?null:"Para criar um tópico é necessário estar logado",children:e.jsx(z,{isDisabled:!t,bgColor:i.colors.success[600],size:s?"xs":"lg",borderRadius:"4px",rightIcon:e.jsx(Ce,{}),onPress:()=>I(!0),children:e.jsx("p",{children:"Criar Tópico"})})}),e.jsx(Rt,{onChangeCategoriesFilter:Z,onChangeOrderBy:B,onChangeSearchInput:G,handleSearch:V}),E?e.jsx(W,{accessibilityLabel:"Carregando os tópicos..."}):e.jsx(e.Fragment,{children:e.jsx(zt,{children:r.map(y=>e.jsx(re,{id:y.id,title:y.title,rating:y.rating,files:y.files,currentRating:y.current_user_rating,content:y.content,author:y.author.name,authorEmail:y.author.email,commentsCount:y.comments_count,categories:y.categories,isSave:y.current_user_has_saved,isFixed:y.is_fixed,fixedTopicCallback:A,deleteTopicCallback:A},y.id))})})]}),e.jsx(Et,{children:e.jsxs(At,{children:[e.jsxs("div",{id:"favorite-title-container",children:[e.jsx("h1",{id:"title-favorites",children:"Tópicos Fixados"}),e.jsx(xt,{color:i.colors.rose[600],size:"22"})]}),c?e.jsx(W,{accessibilityLabel:"Carregando tópicos favoritos..."}):l.map((y,R)=>e.jsx(Rs,{favoriteTopic:y},R))]})})]}),e.jsx(ve,{isModalOpen:o,setIsModalOpen:I})]})}const Zs="/assets/InlineLogo-bd32ea4c.png",Xs=h.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${i.colors.primary[800]};

  .header-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > button > img {
      width: 15rem;
    }
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${i.colors.white};
  }

  @media (max-width: 768px) {
    .header-container {
      width: 90%;
      display: flex;
      align-items: center;
      /* justify-content: space-around; */

      & > button > img {
        width: 10rem;
      }
    }

    .user-container {
      /* display: none; */
    }

    .user-name {
      display: none;
    }
  }
`;h.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${i.colors.dark[200]};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${i.colors.tertiary[300]};
  }
`;function Hs(){const{name:t,token:s}=$(),o=K(),n=H("(max-width: 768px)");function r(c){c.preventDefault(),o("/")}function p(c){c.preventDefault(),o("/login/logon")}function l(){return s?n?"":t:n?"":"Entrar"}function g(){return e.jsxs(e.Fragment,{children:[!s&&e.jsx(ee.Item,{onPress:()=>o("/login/logon"),children:"Entrar"}),e.jsx(ee.Item,{onPress:()=>o("/"),children:"Feed"}),s&&e.jsx(ee.Item,{onPress:()=>o("/profile"),children:"Perfil"}),s&&e.jsx(ee.Item,{onPress:()=>o("/my-topics"),children:"Meus Tópicos"}),s&&e.jsx(ee.Item,{onPress:()=>o("/saved-topics"),children:"Tópicos Salvos"}),e.jsx(ee.Item,{onPress:()=>o("/categories"),children:"Categorias"})]})}return e.jsx(Xs,{children:e.jsxs("section",{className:"header-container",children:[e.jsx("button",{onClick:c=>r(c),children:e.jsx("img",{src:Zs,alt:"Logo UnBFórum em linha"})}),e.jsx("div",{className:"user-container",children:s?e.jsx(ee,{w:"190",placement:"bottom right",trigger:c=>e.jsx(z,{rightIcon:s?e.jsx(ft,{size:"30",color:i.colors.tertiary[300]}):e.jsx(Ae,{size:30,color:i.colors.white}),...c,children:l()}),children:g()}):e.jsx(z,{variant:"solid",bgColor:i.colors.tertiary[500],_hover:{shadow:"8"},rightIcon:e.jsx(Ae,{size:30,color:i.colors.white}),onPress:c=>p(c),children:n?"":"Entrar"})})]})})}const Js=h.div`
  background: ${i.colors.dark[900]};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }
`;function se(){return e.jsxs(Js,{children:[e.jsx(Hs,{}),e.jsx("div",{className:"content",children:e.jsx(Ve,{})})]})}const Gs=h.div`
  max-width: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 30rem;
    height: 25rem;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;

    svg {
      width: 20rem;
      height: 20rem;
    }
  }
`;function te(){return e.jsxs("svg",{width:"404",height:"448",viewBox:"0 0 404 448",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M174.519 157.247H250.075V115.315H244.666C243.959 115.315 243.267 115.175 242.604 114.909C241.94 114.643 241.363 114.265 240.858 113.774C240.353 113.284 239.964 112.723 239.69 112.079C239.416 111.435 239.271 110.762 239.271 110.076V101.796L226.967 113.844C225.885 114.839 224.587 115.329 223.087 115.315H174.519V157.247ZM163.73 146.767V162.487C163.73 163.187 163.859 163.845 164.134 164.49C164.408 165.134 164.797 165.709 165.302 166.199C165.807 166.689 166.398 167.068 167.062 167.334C167.711 167.6 168.403 167.726 169.124 167.726H228.482V188.699H179.914C178.414 188.671 177.159 189.203 176.135 190.268L163.73 202.218V193.939C163.73 193.238 163.585 192.566 163.311 191.935C163.037 191.291 162.648 190.716 162.143 190.226C161.638 189.736 161.047 189.357 160.398 189.091C159.734 188.825 159.042 188.699 158.32 188.699H152.926V146.767H163.73ZM163.73 136.274V110.076C163.744 109.375 163.888 108.717 164.162 108.086C164.436 107.442 164.826 106.881 165.331 106.391C165.836 105.901 166.413 105.522 167.076 105.256C167.725 104.99 168.403 104.85 169.124 104.836H220.923L240.901 85.4323C241.666 84.6617 242.589 84.1714 243.671 83.9612C244.767 83.7371 245.82 83.8492 246.83 84.2835C247.811 84.7178 248.59 85.3622 249.181 86.2308C249.758 87.1135 250.061 88.0661 250.075 89.1029V104.836H255.47C256.177 104.836 256.869 104.962 257.533 105.228C258.197 105.494 258.774 105.873 259.278 106.363C259.783 106.853 260.173 107.428 260.447 108.072C260.721 108.703 260.865 109.375 260.865 110.076V162.487C260.865 163.187 260.721 163.845 260.447 164.49C260.173 165.134 259.783 165.709 259.278 166.199C258.774 166.689 258.197 167.068 257.533 167.334C256.869 167.6 256.177 167.726 255.47 167.726H239.271V193.939C239.271 194.625 239.142 195.298 238.868 195.942C238.593 196.587 238.204 197.147 237.699 197.637C237.194 198.128 236.603 198.506 235.939 198.772C235.29 199.038 234.598 199.178 233.877 199.178H182.179L162.215 218.68C161.104 219.647 159.821 220.137 158.32 220.137C157.642 220.277 156.965 220.277 156.272 220.137C155.19 219.717 154.339 219.016 153.719 218.05C153.113 217.083 152.839 216.032 152.926 214.897V199.178H147.531C146.824 199.178 146.132 199.038 145.468 198.772C144.805 198.506 144.228 198.128 143.723 197.637C143.218 197.147 142.828 196.587 142.554 195.942C142.28 195.298 142.136 194.625 142.136 193.939V141.528C142.15 140.827 142.295 140.169 142.583 139.538C142.857 138.894 143.247 138.334 143.752 137.843C144.256 137.353 144.833 136.975 145.483 136.708C146.146 136.442 146.824 136.288 147.531 136.274H163.73Z",fill:"#164E63"}),e.jsx("mask",{id:"mask0_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"45",y:"0",width:"313",height:"304",children:e.jsx("path",{d:"M45 0H358V304H45V0Z",fill:"white"})}),e.jsx("g",{mask:"url(#mask0_3637_13950)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.493 10.4794C200.065 10.4794 198.694 10.7456 197.367 11.2779C196.04 11.8103 194.886 12.5668 193.862 13.5615C192.852 14.5422 192.074 15.677 191.525 16.9519C190.977 18.2408 190.703 19.5718 190.703 20.9728C190.703 22.3597 190.977 23.6907 191.525 24.9796C192.074 26.2685 192.852 27.4033 193.862 28.384C194.886 29.3647 196.04 30.1212 197.367 30.6536C198.694 31.186 200.065 31.4521 201.493 31.4521C202.935 31.4521 204.306 31.186 205.633 30.6536C206.96 30.1212 208.114 29.3647 209.138 28.384C210.148 27.4033 210.926 26.2685 211.475 24.9796C212.023 23.6907 212.297 22.3597 212.297 20.9728C212.297 19.5718 212.023 18.2408 211.475 16.9519C210.926 15.677 210.148 14.5422 209.138 13.5615C208.114 12.5668 206.96 11.8103 205.633 11.2779C204.306 10.7456 202.935 10.4794 201.493 10.4794ZM175.052 62.9043H227.948C227.63 61.4332 227.197 59.9902 226.635 58.6033C226.087 57.2023 225.394 55.8573 224.601 54.5684C223.808 53.2935 222.899 52.0747 221.889 50.9539C220.88 49.8191 219.769 48.7683 218.572 47.8297C217.374 46.877 216.105 46.0364 214.763 45.2939C213.422 44.5514 212.023 43.9349 210.566 43.4306C209.109 42.9262 207.623 42.548 206.094 42.2958C204.58 42.0296 203.051 41.9035 201.493 41.9035C199.949 41.9035 198.42 42.0296 196.906 42.2958C195.377 42.548 193.891 42.9262 192.434 43.4306C190.977 43.9349 189.578 44.5514 188.237 45.2939C186.895 46.0364 185.626 46.877 184.428 47.8297C183.231 48.7683 182.121 49.8191 181.111 50.9539C180.101 52.0747 179.192 53.2935 178.399 54.5684C177.606 55.8573 176.913 57.2023 176.365 58.6033C175.803 59.9902 175.37 61.4332 175.052 62.9043ZM121.09 66.785C121.595 67.2754 121.984 67.8358 122.258 68.4802C122.518 69.1247 122.662 69.7831 122.662 70.4836C122.648 71.1841 122.518 71.8426 122.244 72.487C121.97 73.1315 121.58 73.6919 121.075 74.1822C120.556 74.6726 119.979 75.0508 119.316 75.317C118.667 75.5832 117.974 75.7093 117.253 75.7093C116.546 75.7093 115.854 75.5832 115.19 75.317C114.541 75.0508 113.95 74.6726 113.445 74.1822C112.94 73.6919 112.551 73.1315 112.276 72.487C112.002 71.8426 111.858 71.1841 111.858 70.4836C111.858 69.7831 111.988 69.1247 112.262 68.4802C112.536 67.8358 112.926 67.2754 113.43 66.785C113.935 66.2386 114.541 65.8043 115.234 65.5101C115.926 65.2159 116.662 65.0618 117.426 65.0618C118.176 65.0618 118.912 65.2159 119.604 65.5101C120.297 65.8043 120.902 66.2386 121.407 66.785H121.09ZM320.222 125.795C318.794 125.795 317.424 126.061 316.096 126.593C314.769 127.125 313.601 127.882 312.591 128.863C311.582 129.843 310.803 130.978 310.254 132.267C309.706 133.556 309.432 134.887 309.432 136.274C309.432 137.675 309.706 139.006 310.254 140.295C310.803 141.57 311.582 142.704 312.591 143.699C313.601 144.68 314.769 145.436 316.096 145.969C317.424 146.501 318.794 146.767 320.222 146.767C321.65 146.767 323.035 146.501 324.362 145.969C325.674 145.436 326.843 144.68 327.853 143.699C328.877 142.704 329.656 141.57 330.204 140.295C330.752 139.006 331.026 137.675 331.026 136.274C331.026 134.887 330.752 133.556 330.204 132.267C329.656 130.978 328.877 129.843 327.853 128.863C326.843 127.882 325.674 127.125 324.362 126.593C323.035 126.061 321.65 125.795 320.222 125.795ZM82.7781 125.795C81.3356 125.795 79.9653 126.061 78.6382 126.593C77.3256 127.125 76.1572 127.882 75.1475 128.863C74.1233 129.843 73.3444 130.978 72.7963 132.267C72.2481 133.556 71.9741 134.887 71.9741 136.274C71.9741 137.675 72.2481 139.006 72.7963 140.295C73.3444 141.57 74.1233 142.704 75.1475 143.699C76.1572 144.68 77.3256 145.436 78.6382 145.969C79.9653 146.501 81.3356 146.767 82.7781 146.767C84.2061 146.767 85.5765 146.501 86.9035 145.969C88.2306 145.436 89.399 144.68 90.4087 143.699C91.4185 142.704 92.1974 141.57 92.7455 140.295C93.2937 139.006 93.5677 137.675 93.5677 136.274C93.5677 134.887 93.2937 133.556 92.7455 132.267C92.1974 130.978 91.4185 129.843 90.4087 128.863C89.399 127.882 88.2306 127.125 86.9035 126.593C85.5765 126.061 84.2061 125.795 82.7781 125.795ZM293.782 178.205H346.662C346.359 176.734 345.927 175.305 345.364 173.904C344.801 172.517 344.124 171.173 343.33 169.884C342.537 168.609 341.628 167.39 340.618 166.255C339.609 165.12 338.498 164.084 337.301 163.131C336.103 162.192 334.834 161.338 333.493 160.609C332.151 159.867 330.752 159.25 329.295 158.746C327.838 158.241 326.352 157.863 324.823 157.597C323.309 157.345 321.765 157.219 320.222 157.219C318.678 157.219 317.149 157.345 315.62 157.597C314.106 157.863 312.62 158.241 311.163 158.746C309.706 159.25 308.307 159.867 306.966 160.609C305.61 161.338 304.34 162.192 303.143 163.131C301.96 164.084 300.85 165.12 299.84 166.255C298.83 167.39 297.921 168.609 297.128 169.884C296.32 171.173 295.642 172.517 295.08 173.904C294.517 175.305 294.084 176.734 293.782 178.205ZM56.3233 178.205H109.218C108.916 176.734 108.483 175.305 107.92 173.904C107.358 172.517 106.68 171.173 105.872 169.884C105.079 168.609 104.17 167.39 103.16 166.255C102.15 165.12 101.04 164.084 99.8569 163.131C98.6596 162.192 97.3902 161.338 96.0343 160.609C94.6928 159.867 93.2937 159.25 91.8368 158.746C90.3799 158.241 88.8941 157.863 87.3796 157.597C85.8505 157.345 84.3215 157.219 82.7781 157.219C81.2347 157.219 79.6912 157.345 78.1766 157.597C76.6476 157.863 75.1619 158.241 73.705 158.746C72.2481 159.25 70.8489 159.867 69.5074 160.609C68.166 161.338 66.8966 162.192 65.6993 163.131C64.5021 164.084 63.3914 165.12 62.3817 166.255C61.372 167.39 60.4632 168.609 59.6698 169.884C58.8765 171.173 58.1985 172.517 57.636 173.904C57.0734 175.305 56.6407 176.734 56.3233 178.205ZM201.493 241.11C200.065 241.11 198.694 241.376 197.367 241.908C196.04 242.441 194.886 243.197 193.862 244.178C192.852 245.159 192.074 246.293 191.525 247.582C190.977 248.871 190.703 250.202 190.703 251.589C190.703 252.976 190.977 254.321 191.525 255.61C192.074 256.885 192.852 258.02 193.862 259C194.886 259.981 196.04 260.752 197.367 261.27C198.694 261.802 200.065 262.068 201.493 262.068C202.935 262.068 204.306 261.802 205.633 261.27C206.96 260.752 208.114 259.981 209.138 259C210.148 258.02 210.926 256.885 211.475 255.61C212.023 254.321 212.297 252.976 212.297 251.589C212.297 250.202 212.023 248.871 211.475 247.582C210.926 246.293 210.148 245.159 209.138 244.178C208.114 243.197 206.96 242.441 205.633 241.908C204.306 241.376 202.935 241.11 201.493 241.11ZM175.052 293.521H227.948C227.63 292.05 227.197 290.621 226.635 289.22C226.087 287.819 225.394 286.488 224.601 285.199C223.808 283.91 222.899 282.705 221.889 281.57C220.88 280.435 219.769 279.399 218.572 278.446C217.374 277.493 216.105 276.653 214.763 275.91C213.422 275.182 212.023 274.565 210.566 274.061C209.109 273.557 207.623 273.164 206.094 272.912C204.58 272.66 203.051 272.534 201.493 272.534C199.949 272.534 198.42 272.66 196.906 272.912C195.377 273.164 193.891 273.557 192.434 274.061C190.977 274.565 189.578 275.182 188.237 275.91C186.895 276.653 185.626 277.493 184.428 278.446C183.231 279.399 182.121 280.435 181.111 281.57C180.101 282.705 179.192 283.91 178.399 285.199C177.606 286.488 176.913 287.819 176.365 289.22C175.803 290.621 175.37 292.05 175.052 293.521ZM231.611 45.9103C234.121 49.1046 236.025 52.607 237.338 56.4177C238.651 60.2144 239.3 64.1231 239.271 68.144C239.271 68.8305 239.141 69.5029 238.867 70.1474C238.593 70.7918 238.203 71.3522 237.699 71.8426C237.194 72.3329 236.602 72.7112 235.939 72.9774C235.29 73.2436 234.597 73.3837 233.876 73.3837H169.124C168.403 73.3837 167.71 73.2436 167.061 72.9774C166.398 72.7112 165.806 72.3329 165.301 71.8426C164.797 71.3522 164.407 70.7918 164.133 70.1474C163.859 69.5029 163.729 68.8305 163.729 68.144C163.715 64.0951 164.378 60.1583 165.734 56.3337C167.09 52.509 169.037 49.0065 171.605 45.8122C159.272 49.1186 147.833 54.2882 137.274 61.3212C136.38 61.9656 135.37 62.2738 134.26 62.2738C132.37 62.2598 130.899 61.4893 129.831 59.9622C129.427 59.4018 129.139 58.7714 128.995 58.0989C128.836 57.4264 128.836 56.7399 128.966 56.0535C129.096 55.381 129.355 54.7505 129.759 54.1761C130.149 53.5877 130.639 53.1114 131.23 52.7331C147.098 42.0576 164.58 35.3749 183.693 32.713C181.197 29.1685 179.942 25.2598 179.914 20.9728C179.914 19.5858 180.058 18.2268 180.332 16.8819C180.606 15.5229 181.01 14.22 181.558 12.9451C182.092 11.6702 182.77 10.4654 183.549 9.31656C184.342 8.18176 185.236 7.11701 186.232 6.13632C187.241 5.16964 188.323 4.30103 189.506 3.53049C190.689 2.77395 191.929 2.1295 193.242 1.59713C194.555 1.06475 195.896 0.672473 197.295 0.406285C198.68 0.1401 200.079 0 201.493 0C202.921 0 204.32 0.1401 205.705 0.406285C207.104 0.672473 208.445 1.06475 209.758 1.59713C211.071 2.1295 212.311 2.77395 213.494 3.53049C214.677 4.30103 215.759 5.16964 216.768 6.13632C217.764 7.11701 218.658 8.18176 219.451 9.31656C220.23 10.4654 220.894 11.6702 221.442 12.9451C221.99 14.22 222.394 15.5229 222.668 16.8819C222.942 18.2268 223.086 19.5858 223.086 20.9728C223.101 25.2458 221.875 29.1545 219.423 32.713C225.164 33.5116 230.818 34.7024 236.386 36.2715C241.954 37.8406 247.378 39.788 252.671 42.0996C257.965 44.3973 263.072 47.0591 267.976 50.0572C272.88 53.0553 277.554 56.3757 281.997 60.0042C286.425 63.6328 290.579 67.5556 294.445 71.7445C298.311 75.9334 301.874 80.3746 305.105 85.0539C308.336 89.7332 311.221 94.6086 313.745 99.6662C316.284 104.738 318.448 109.949 320.222 115.315C321.65 115.315 323.049 115.455 324.434 115.721C325.833 115.988 327.175 116.38 328.487 116.912C329.8 117.431 331.04 118.089 332.223 118.846C333.392 119.616 334.488 120.485 335.483 121.451C336.493 122.432 337.387 123.483 338.181 124.632C338.96 125.781 339.623 126.985 340.171 128.26C340.705 129.535 341.123 130.838 341.397 132.183C341.671 133.542 341.816 134.901 341.816 136.274C341.801 141.612 339.969 146.249 336.305 150.228C339.536 151.713 342.494 153.618 345.177 155.93C347.845 158.241 350.139 160.861 352.057 163.803C353.961 166.745 355.418 169.884 356.399 173.232C357.394 176.566 357.899 179.971 357.899 183.459C357.899 184.146 357.755 184.818 357.481 185.463C357.207 186.107 356.817 186.667 356.312 187.158C355.807 187.648 355.23 188.026 354.567 188.293C353.903 188.559 353.211 188.699 352.504 188.699H320.222C318.563 193.826 316.544 198.814 314.178 203.675C311.827 208.537 309.144 213.23 306.129 217.741C303.129 222.252 299.825 226.553 296.219 230.63C292.613 234.721 288.747 238.546 284.622 242.118C280.482 245.691 276.126 248.997 271.539 251.995C266.952 255.008 262.177 257.697 257.215 260.093C252.253 262.475 247.161 264.52 241.911 266.243C236.66 267.967 231.323 269.34 225.899 270.362C230.198 273.893 233.515 278.138 235.852 283.111C238.189 288.085 239.343 293.296 239.271 298.76C239.271 299.461 239.141 300.133 238.867 300.778C238.593 301.408 238.203 301.983 237.699 302.473C237.194 302.963 236.602 303.342 235.939 303.608C235.29 303.874 234.597 304 233.876 304H169.124C168.403 304 167.71 303.874 167.061 303.608C166.398 303.342 165.806 302.963 165.301 302.473C164.797 301.983 164.407 301.408 164.133 300.778C163.859 300.133 163.729 299.461 163.729 298.76C163.744 293.254 164.97 288.015 167.407 283.041C169.845 278.068 173.249 273.837 177.649 270.362C172.211 269.34 166.874 267.967 161.623 266.243C156.387 264.52 151.281 262.475 146.319 260.093C141.357 257.697 136.582 255.008 131.995 251.995C127.408 248.997 123.052 245.705 118.926 242.118C114.786 238.546 110.921 234.721 107.314 230.63C103.723 226.553 100.419 222.252 97.4047 217.741C94.4044 213.23 91.7069 208.537 89.3557 203.675C86.9901 198.814 84.9851 193.826 83.3118 188.699H50.3948C49.6736 188.699 48.9956 188.559 48.3321 188.293C47.6686 188.026 47.0771 187.648 46.5723 187.158C46.0674 186.667 45.678 186.107 45.4039 185.463C45.1298 184.818 45 184.146 45 183.459C45.0144 179.985 45.5193 176.566 46.5146 173.232C47.5099 169.898 48.9668 166.759 50.8708 163.831C52.7893 160.889 55.0684 158.255 57.7369 155.944C60.4199 153.632 63.3626 151.727 66.5792 150.228C65.1945 148.715 64.0549 147.034 63.175 145.212C62.2807 143.377 61.6893 141.458 61.372 139.454C61.0546 137.451 61.0402 135.447 61.3143 133.444C61.6027 131.441 62.1653 129.521 63.0308 127.672C63.8818 125.823 64.9925 124.127 66.3484 122.6C67.7044 121.059 69.2622 119.756 71.022 118.65C72.7674 117.557 74.6426 116.73 76.6476 116.156C78.6527 115.595 80.6865 115.301 82.7781 115.315C86.5285 104.079 91.8512 93.5999 98.7462 83.863C99.1645 83.3026 99.6838 82.8403 100.29 82.4761C100.895 82.1118 101.559 81.8596 102.266 81.7475C102.973 81.6355 103.665 81.6495 104.372 81.7896C105.064 81.9437 105.713 82.2099 106.305 82.6021C106.896 82.9944 107.372 83.4848 107.762 84.0732C108.137 84.6476 108.396 85.278 108.512 85.9645C108.641 86.637 108.627 87.3235 108.454 87.9959C108.295 88.6684 108.007 89.2849 107.603 89.8452C101.516 98.6154 96.8421 108.058 93.5677 118.145C95.2121 119.07 96.6979 120.177 98.0394 121.466C99.3664 122.768 100.52 124.211 101.458 125.809C102.41 127.406 103.131 129.087 103.622 130.866C104.112 132.631 104.357 134.439 104.357 136.274C104.343 141.612 102.511 146.249 98.8616 150.228C102.093 151.713 105.064 153.604 107.747 155.916C110.43 158.213 112.738 160.847 114.657 163.789C116.575 166.731 118.046 169.87 119.042 173.218C120.051 176.552 120.542 179.971 120.556 183.459C120.556 184.146 120.412 184.818 120.138 185.463C119.864 186.107 119.474 186.667 118.969 187.158C118.465 187.648 117.873 188.026 117.224 188.293C116.561 188.559 115.868 188.699 115.147 188.699H94.6496C96.294 193.28 98.2557 197.749 100.52 202.092C102.785 206.421 105.338 210.596 108.165 214.603C111.007 218.61 114.108 222.421 117.469 226.021C120.83 229.636 124.408 233.012 128.23 236.15C132.053 239.288 136.077 242.174 140.289 244.794C144.501 247.414 148.886 249.754 153.416 251.813C157.959 253.873 162.618 255.624 167.393 257.081C172.168 258.538 177.029 259.673 181.962 260.499C180.592 257.683 179.914 254.713 179.914 251.589C179.928 250.034 180.13 248.493 180.491 246.98C180.866 245.453 181.399 243.996 182.106 242.595C182.813 241.194 183.678 239.877 184.688 238.672C185.683 237.453 186.823 236.36 188.078 235.394C189.347 234.413 190.689 233.6 192.146 232.914C193.588 232.241 195.103 231.723 196.661 231.373C198.233 231.023 199.82 230.855 201.421 230.84C203.036 230.84 204.623 231.009 206.181 231.345C207.753 231.681 209.268 232.185 210.725 232.858C212.167 233.516 213.537 234.343 214.792 235.296C216.062 236.262 217.201 237.341 218.225 238.56C219.235 239.765 220.101 241.068 220.822 242.469C221.543 243.856 222.091 245.313 222.466 246.826C222.856 248.353 223.058 249.88 223.086 251.449C223.115 253.004 222.957 254.545 222.639 256.086C222.308 257.613 221.803 259.084 221.139 260.499C226.072 259.673 230.933 258.538 235.708 257.081C240.483 255.624 245.142 253.859 249.685 251.799C254.215 249.754 258.585 247.414 262.812 244.78C267.024 242.16 271.034 239.274 274.856 236.136C278.679 232.998 282.271 229.622 285.632 226.021C288.993 222.407 292.094 218.596 294.921 214.603C297.763 210.596 300.316 206.421 302.581 202.078C304.845 197.749 306.807 193.28 308.466 188.699H287.853C287.132 188.699 286.439 188.559 285.776 188.293C285.112 188.026 284.535 187.648 284.031 187.158C283.526 186.667 283.136 186.107 282.862 185.463C282.588 184.818 282.444 184.146 282.444 183.459C282.458 179.985 282.963 176.566 283.958 173.232C284.968 169.898 286.411 166.759 288.329 163.831C290.233 160.889 292.527 158.255 295.195 155.944C297.864 153.632 300.806 151.727 304.037 150.228C302.97 149.051 302.061 147.79 301.282 146.431C300.518 145.072 299.898 143.643 299.45 142.144C299.018 140.645 298.744 139.118 298.643 137.577C298.556 136.022 298.628 134.481 298.888 132.94C299.148 131.398 299.58 129.913 300.172 128.47C300.778 127.027 301.528 125.668 302.451 124.394C303.36 123.105 304.398 121.942 305.581 120.891C306.764 119.84 308.048 118.916 309.432 118.145C307.975 113.83 306.259 109.613 304.268 105.508C302.278 101.389 300.027 97.4246 297.532 93.5719C295.037 89.7332 292.31 86.0486 289.353 82.5321C286.396 79.0156 283.223 75.6953 279.847 72.5571C276.458 69.4189 272.895 66.4908 269.144 63.7869C265.394 61.069 261.485 58.5892 257.417 56.3477C253.349 54.1061 249.166 52.1027 244.853 50.3655C240.526 48.6142 236.112 47.1292 231.611 45.9103Z",fill:"#164E63"})}),e.jsxs("mask",{id:"mask1_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"315",width:"404",height:"133",children:[e.jsx("path",{d:"M0 315H403.886V447.631H0V315Z",fill:"white"}),e.jsx("path",{d:"M0 315H403.886V447.631H0V315Z",stroke:"white"})]}),e.jsxs("g",{mask:"url(#mask1_3637_13950)",children:[e.jsxs("mask",{id:"mask2_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"315",width:"404",height:"133",children:[e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",fill:"url(#pattern0)"}),e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",stroke:"black"})]}),e.jsxs("g",{mask:"url(#mask2_3637_13950)",children:[e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",fill:"url(#paint0_linear_3637_13950)"}),e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",stroke:"black"})]})]}),e.jsxs("defs",{children:[e.jsx("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e.jsx("use",{xlinkHref:"#image0_3637_13950",transform:"scale(0.00102041 0.00309598)"})}),e.jsxs("linearGradient",{id:"paint0_linear_3637_13950",x1:"202.317",y1:"315.404",x2:"202.317",y2:"447.779",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0.582581",stopColor:"#164E63"}),e.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),e.jsx("image",{id:"image0_3637_13950",width:"980",height:"323",xlinkHref:"data:image/png;base64,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"})]})]})}function Ks(){const t=K();function s(r){r.preventDefault(),t("/login/create-account")}function o(r){r.preventDefault(),t("/login")}function n(r){r.preventDefault(),t("/")}return e.jsxs(Gs,{children:[e.jsx(te,{}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(z,{onPress:r=>o(r),variant:"outline",size:"lg",children:"Entrar"}),e.jsx(z,{onPress:r=>s(r),variant:"solid",size:"lg",children:"Criar Conta"}),e.jsx(z,{onPress:r=>n(r),variant:"link",size:"lg",children:"Ir para o UnBFórum"})]})]})}const Ys=h.div`
  max-width: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 10rem;
    height: 12rem;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    width: 90%;
  }
`,Ws=t=>{let s=!0;const o=[],{email:n,password:r}=t;return(!n||n==="")&&(s=!1,o.push("Email Institucional")),(!r||r==="")&&(s=!1,o.push("Senha")),{isValid:s,fieldErrors:o}},$s=async t=>{const{username:s,password:o}=t,n=new FormData;return n.append("username",s),n.append("password",o),await k.post("auth/login",n)},_s=t=>{const{email:s,password:o}=t;return{username:s,password:o}};function eo(){const t=K(),s=J(),{changeToken:o}=$(),[n,r]=a.useState({email:"",password:""}),[p,l]=a.useState(!1),g=a.useCallback((m,d)=>{r({...n,[m]:d})},[n]);function c(m){m.preventDefault();const{isValid:d,fieldErrors:f}=Ws(n);if(!d){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"login-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${f.reduce((u,x,b)=>b===0?`'${x}'`:b===f.length-1?`${u} e '${x}'`:`${u}, '${x}'`,"")}`,status:""})});return}l(!0),$s(_s(n)).then(u=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Bem-vindo ao UnBFórum",description:`Usuário logado com sucesso!
Agora você pode criar tópicos e interagir com eles!`,status:"success"})}),o(u.data.access_token),t("/")}).catch(u=>{s.show({placement:"top-right",render:()=>{let x="";return typeof u.response.data.detail=="object"?x=u.response.data.detail[0].msg.split(", ")[1]:x=u.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${x}`,status:""})}})}).finally(()=>{l(!1)})}return e.jsxs(Ys,{children:[e.jsx(te,{}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(X,{name:"email",onChange:g,accessibilityLabel:"Digite o seu email Institucional",inputType:"text",label:"Email Institucional",placeholder:"Digite o email 240014099@unb.br..."}),e.jsx(X,{name:"password",onChange:g,accessibilityLabel:"Senha",inputType:"password",label:"Digite a sua senha",placeholder:"Digite a sua senha"}),e.jsx(z,{onPress:m=>c(m),variant:"solid",size:"lg",isLoading:p,isLoadingText:"Entrando...",children:"Entrar"}),e.jsx(z,{onPress:m=>t(-1),variant:"outline",size:"lg",children:"Voltar"})]})]})}const to=h.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */

  .create-account-image {
    object-fit: cover;
    object-position: center;
    width: 50%;
    height: 100vh;
  }

  .content {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .create-account-image {
      display: none;
    }

    .content {
      width: 100%;
    }
  }
`,so="/assets/create-account-24b27e13.png";function oo(){return e.jsxs(to,{children:[e.jsx("img",{className:"create-account-image",src:so,alt:""}),e.jsx("div",{className:"content",children:e.jsx(Ve,{})})]})}const io=h.div`
  max-width: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 10rem;
    height: 12rem;
  }

  .inputs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    width: 90%;
    height: 100vh;

    padding: 1rem 0 1rem 0;

    .inputs-container {
      gap: 0.7rem;
    }
  }
`,no=[{label:"Aluno",value:"Aluno"},{label:"Coordenador",value:"Coordenador"},{label:"Professor",value:"Professor"},{label:"Secretaria",value:"Secretaria"},{label:"Técnico",value:"Técnico"}],ro=[{label:"Engenharia Aeroespacial",value:"Engenharia Aeroespacial"},{label:"Engenharia Automotiva",value:"Engenharia Automotiva"},{label:"Engenharia de Energia",value:"Engenharia de Energia"},{label:"Engenharia de Software",value:"Engenharia de Software"},{label:"Engenharia Eletrônica",value:"Engenharia Eletrônica"},{label:"Engenharias",value:"Engenharias"}],ao=[{input:"normal",type:"text",name:"name",label:"Nome Completo",placeholder:"Digite o nome completo...",accessibilityLabel:"Digite o nome completo",options:[]},{input:"normal",type:"text",name:"email",label:"Email Institucional",placeholder:"Digite o email 240014099@unb.br...",accessibilityLabel:"Digite o email",options:[]},{input:"select",type:"text",name:"profile",label:"Papel na Instituição",placeholder:"Selecione o seu papel...",accessibilityLabel:"Selecione o seu papel na instituição",options:no},{input:"select",type:"text",name:"course",label:"Curso",placeholder:"Selecione o seu curso...",accessibilityLabel:"Selecione o seu curso",options:ro},{input:"normal",type:"password",name:"password",label:"Senha",placeholder:"Digite a sua senha...",accessibilityLabel:"Digite a sua senha",options:[]},{input:"normal",type:"password",name:"passwordConfirm",label:"Confirme a senha",placeholder:"Digite a sua senha novamente...",accessibilityLabel:"Digite a sua senha novamente",options:[]}],lo=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  .create-account-label {
    display: flex;
    flex-direction: row;
    gap: 0.3rem;

    font-size: ${({fontSize:t})=>t};
    line-height: 1.5rem;
    color: ${i.colors.text[500]};

    #required {
      color: ${i.colors.danger[600]};
    }
  }

  svg {
    width: 1.5rem;
  }

  option {
    background-color: ${i.colors.gray[200]};
    color: ${i.colors.black};
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    .create-account-label {
      font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
    }
  }
`;function co({label:t,placeholder:s,options:o=[],onChange:n,isRequired:r=!0,fontSize:p="0.9rem",isEditing:l=!0,name:g}){return e.jsxs(lo,{fontSize:p,children:[e.jsxs("label",{className:"create-account-label",children:[t,r&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx(Le,{variant:"outline",height:9,size:"md",isDisabled:!l,onValueChange:c=>n(g,c),placeholder:s,accessibilityLabel:"Selecione a opção",children:o.map(c=>e.jsx(Le.Item,{label:c.label,value:c.value},c.label))})]})}const uo=async t=>await k.post("users",t),qe=async()=>await k.get("users/me"),po=async t=>await k.patch("users/me",t),ho=async t=>await k.post("users/me/change_password",t),mo=async()=>await k.delete("users/me"),go=t=>{let s=!0;const o=[],{name:n,email:r,profile:p,course:l,password:g,passwordConfirm:c}=t;return(!n||n==="")&&(s=!1,o.push("Nome Completo")),(!r||r==="")&&(s=!1,o.push("Email Institucional")),(!p||p==="")&&(s=!1,o.push("Papel na Instituição")),(!l||l==="")&&(s=!1,o.push("Curso")),(!g||g==="")&&(s=!1,o.push("Senha")),(!c||c===""||c!==g)&&(s=!1,o.push("Confirme a senha")),{isValid:s,fieldErrors:o}},xo=t=>{const{name:s,email:o,profile:n,course:r,password:p}=t;return{name:s,email:o,password:p,tags:[n,r]}};function fo(){const t=K(),s=J(),o=ge({lg:"lg",base:"md"}),[n,r]=a.useState({name:"",email:"",profile:"",course:"",password:"",passwordConfirm:""}),[p,l]=a.useState(!1),g=a.useCallback((d,f)=>{r({...n,[d]:f})},[n]),c=async d=>{d.preventDefault();const{isValid:f,fieldErrors:u}=go(n);if(!f){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${u.reduce((x,b,N)=>N===0?`'${b}'`:N===u.length-1?`${x} e '${b}'`:`${x}, '${b}'`,"")}`,status:""})});return}l(!0),uo(xo(n)).then(x=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Estamos quase lá!",description:`Conta criada com sucesso!
Clique em 'Entrar' e faça o seu login na aplicação!`,status:"success"})}),t("/login/logon")}).catch(x=>{s.show({placement:"top-right",render:()=>{let b="";return typeof x.response.data.detail=="object"?b=x.response.data.detail[0].msg.split(", ")[1]:b=x.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${b}`,status:""})}})}).finally(()=>{l(!1)})};function m(d){switch(d.input){case"select":return e.jsx(co,{label:d.label,placeholder:d.placeholder,options:d.options,name:d.name,onChange:g,accessibilityLabel:d.accessibilityLabel},d.label);default:return e.jsx(X,{label:d.label,placeholder:d.placeholder,inputType:d.type,name:d.name,onChange:g,accessibilityLabel:d.accessibilityLabel},d.label)}}return e.jsxs(io,{children:[e.jsx(te,{}),e.jsxs("div",{className:"inputs-container",children:[ao.map(d=>m(d)),e.jsx(z,{onPress:d=>c(d),variant:"solid",size:o,isLoading:p,isLoadingText:"Criando usuário...",children:"Criar Conta"}),e.jsx(z,{onPress:d=>t(-1),variant:"outline",size:o,children:"Voltar"})]})]})}const Co=h.section`
  width: 80%;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-profile-container {
    width: 30%;

    svg {
      width: 17rem;
      height: 19rem;
    }
  }

  .inputs-profile-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & > div[role='button'] {
      width: 100%;
    }

    .profile-page-title {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  .sub-buttons-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div[role='button'] {
      width: 45%;
    }
  }

  @media (max-width: 930px) {
    .logo-profile-container {
      svg {
        width: 15rem;
        height: 13rem;
      }
    }
  }

  @media (max-width: 768px) {
    .logo-profile-container {
      display: none;
    }

    .inputs-profile-container {
      width: 100%;
    }
  }
`,wo=t=>{let s=!0;const o=[];return(!t||t==="")&&(s=!1,o.push("Nome Completo")),{isValid:s,fieldErrors:o}},yo=(t,s)=>{let o=!0;const n=[];let r="";return(!t||t==="")&&(o=!1,n.push("Senha Atual")),(!s||s==="")&&(o=!1,n.push("Nova Senha")),!s&&s===t&&(o=!1,r="Nova senha não pode ser a mesma que a atual"),{isValid:o,fieldErrors:n,specialError:r}};function bo(){const t=K(),s=J(),{name:o,email:n,setName:r,logoutUser:p}=$(),l=ge({lg:"lg",base:"md"}),[g,c]=a.useState(!1),[m,d]=a.useState(!1),[f,u]=a.useState(!1),[x,b]=a.useState(!1),[N,D]=a.useState({email:n,id:0,name:o,role:"",tags:[]}),[S,E]=a.useState(!1),[L,A]=a.useState(!1),[I,Z]=a.useState(!1),[B,G]=a.useState(""),[V,y]=a.useState("");a.useEffect(()=>{qe().then(j=>{D(j.data),r(j.data.name)})},[r]);const R=a.useCallback((j,w)=>{D({...N,[j]:w})},[N]),Y=a.useCallback(()=>{A(!0),mo().then(()=>{}).finally(()=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"delete-user-success",title:"Usuário excluído!",description:"A qualquer momento você poderá criar uma nova conta",status:"success"})}),p(),A(!1),d(!1),t("/")})},[t,p,s]),_=j=>{j.preventDefault();const{fieldErrors:w,isValid:U}=wo(N.name);if(!U){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${w.reduce((P,M,F)=>F===0?`'${M}'`:F===w.length-1?`${P} e '${M}'`:`${P}, '${M}'`,"")}`,status:""})});return}E(!0),po({name:N.name}).then(P=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"update-user-success",title:"Usuário atualizado!",description:"",status:"success"})}),r(N.name)}).catch(P=>{s.show({placement:"top-right",render:()=>{let M="";return typeof P.response.data.detail=="object"?M=P.response.data.detail[0].msg.split(", ")[1]:M=P.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${M}`,status:""})}})}).finally(()=>{E(!1),u(!1)})},C=j=>{j.preventDefault();const{fieldErrors:w,isValid:U,specialError:P}=yo(B,V);if(!U){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:w.length>0?`Os sequintes campos estão incorretos: ${w.reduce((M,F,le)=>le===0?`'${F}'`:le===w.length-1?`${M} e '${F}'`:`${M}, '${F}'`,"")}`:P,status:""})});return}Z(!0),ho({current_password:B,new_password:V}).then(M=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Senha atualizada com sucesso!",description:"",status:"success"})})}).catch(M=>{s.show({placement:"top-right",render:()=>{let F="";return typeof M.response.data.detail=="object"?F=M.response.data.detail[0].msg.split(", ")[1]:F=M.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${F}`,status:""})}})}).finally(()=>{Z(!1),b(!1),G(""),y("")})},Q=()=>f?e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"solid",size:l,onPress:()=>{u(!1),qe().then(j=>{D(j.data)})},children:"Cancelar"}),e.jsx(z,{variant:"outline",size:l,isLoading:S,isLoadingText:"Atualizando Usuário...",onPress:j=>_(j),children:"Atualizar Usuário"})]}):x?e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"solid",size:l,onPress:()=>{b(!1),G(""),y("")},children:"Cancelar"}),e.jsx(z,{variant:"outline",size:l,isLoading:I,isLoadingText:"Atualizando Senha...",onPress:j=>C(j),children:"Alterar Senha"})]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"solid",size:l,onPress:()=>u(!0),children:"Editar Perfil"}),e.jsx(z,{variant:"outline",size:l,onPress:()=>b(!0),children:"Alterar Senha"})]});return e.jsxs(Co,{children:[e.jsx("div",{className:"logo-profile-container",children:e.jsx(te,{})}),e.jsxs("section",{className:"inputs-profile-container",children:[e.jsx("h1",{className:"profile-page-title",children:"Perfil de Usuário"}),e.jsx(X,{name:"name",onChange:R,isEditing:f,value:N.name,label:"Nome Completo",placeholder:"Digite seu nome completo...",inputType:"text",accessibilityLabel:"Digite o seu nome completo..."}),e.jsx(X,{name:"email",onChange:()=>{},isEditing:!1,value:N.email,label:"Email Institucional",placeholder:"Digite seu nome email...",inputType:"text",accessibilityLabel:"Digite o seu email..."}),e.jsx(X,{name:"password",onChange:(j,w)=>G(w),isEditing:x,value:x?B:"valordeteste",label:x?"Senha Atual":"Senha",placeholder:"Digite sua senha atual...",inputType:"password",accessibilityLabel:"Digite a sua senha..."}),x&&e.jsx(X,{name:"passwordConfirm",onChange:(j,w)=>y(w),label:"Nova Senha",placeholder:"Digite a sua nova senha...",inputType:"password",accessibilityLabel:"Digite a sua nova senha..."}),Q(),!f&&!x&&e.jsxs("div",{className:"sub-buttons-container",children:[e.jsx(z,{variant:"subtle",size:"md",onPress:()=>c(!0),children:"Sair"}),e.jsx(z,{variant:"subtle",size:"md",onPress:()=>d(!0),children:"Remover a Conta"})]})]}),e.jsx(me,{isOpen:g,handleAccept:()=>{c(!1),p(),t("/")},handleClose:()=>c(!1),question:"Tem certeza que deseja sair da aplicação?",acceptText:"Sair do UnBFórum"}),e.jsx(me,{isOpen:m,handleAccept:()=>{Y()},handleClose:()=>d(!1),question:"Tem certeza que deseja remover sua conta?",acceptText:"Remover",isLoadingAcceptButton:L,loadingAcceptButtonText:"Deletando..."})]})}const jo=h.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
`,vo=h.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  /* margin-top: 0rem; */

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    /* align-items: flex-end;
    justify-content: flex-end; */
    /* margin-top: 1rem; */
  }
`,ko=h.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1rem;
  margin-left: 10%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 5%;
    gap: 0.5rem;
  }
`,No=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`,Do=({topicId:t,onCommentCreated:s})=>{const{name:o}=$(),n=J(),r=H("(max-width: 768px)"),[p,l]=a.useState(""),[g,c]=a.useState(!1),m=(f,u)=>{l(u)},d=f=>{f.preventDefault();const{isValid:u}=Ze(p);if(!u){n.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-comment-error",title:"Campos Inválidos",description:"O comentário não pode ser feito sem conteúdo!",status:""})});return}c(!0),cs(p.trim(),t).then(x=>{l(""),s()}).catch(x=>{n.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Opa",description:"Erro ao criar comentário",status:""})})}).finally(()=>{c(!1)})};return e.jsxs(ko,{children:[e.jsxs(No,{children:[e.jsx(we,{bg:"lime.600",marginRight:"0.8rem",size:r?"xs":"sm",children:be(o)}),e.jsx(je,{name:"content",onChange:m,fontSize:"1.2rem",size:"lg",value:p,isComment:!0,inputType:"text",accessibilityLabel:"Comentário",label:"",placeholder:"Digite o comentário aqui..."})]}),e.jsx(z,{alignSelf:"flex-end",size:r?"sm":"md",rightIcon:e.jsx(Ct,{size:20,color:i.colors.white}),onPress:f=>d(f),isLoading:g,isLoadingText:"Comentando...",children:"Comentar"}),e.jsx(he,{})]})};function So(){const{id:t}=wt(),{token:s}=$(),o=K(),[n,r]=a.useState(null),[p,l]=a.useState(!1),[g,c]=a.useState(!1);a.useEffect(()=>window.scrollTo(0,0),[]),a.useEffect(()=>{t&&(l(!0),Ue(Number(t)).then(f=>{r(f.data)}).finally(()=>l(!1)))},[t]);const m=a.useCallback(()=>{n&&(c(!0),ds(n.id).then(f=>{r({...n,comments:f.data})}).finally(()=>{c(!1)}))},[n]),d=async()=>{l(!0),Ue(Number(t)).then(f=>{r(f.data)}).catch(()=>o("/")).finally(()=>l(!1))};return e.jsx(jo,{children:n?e.jsxs(e.Fragment,{children:[e.jsx(re,{id:Number(n.id),author:n.author.name,authorEmail:n.author.email,title:n.title,categories:n.categories,content:n.content,rating:n.rating,files:n.files,currentRating:n.current_user_rating,isSave:n.current_user_has_saved,isFixed:n.is_fixed,deleteTopicCallback:d,fixedTopicCallback:d,isInsideTopic:!0}),e.jsxs(vo,{children:[s&&e.jsx(Do,{topicId:n.id,onCommentCreated:m}),g?e.jsx(W,{accessibilityLabel:"Carregando os comentários do tópico..."}):e.jsx(e.Fragment,{children:n.comments.map(f=>e.jsx(re,{id:f.id,isComment:!0,topicId:n.id,isFixed:f.is_fixed,author:f.author.name,authorEmail:f.author.email,rating:f.rating,currentRating:f.current_user_rating,deleteTopicCallback:d,fixedTopicCallback:d,content:f.content},f.id))})]})]}):e.jsx(W,{accessibilityLabel:"Carregando dados do tópico..."})})}const Qo=h.section`
  position: relative;
  width: 80%;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-categories-container {
    width: 30%;

    svg {
      width: 17rem;
      height: 19rem;
    }
  }

  .categories-list {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .categories-page-title {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  #create-category {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div[role='button'] {
      width: 30%;
    }
  }

  @media (max-width: 930px) {
    width: 90%;

    .logo-categories-container {
      svg {
        width: 15rem;
        height: 13rem;
      }
    }

    #create-category {
      flex-direction: column;
      gap: 0.7rem;

      & > div[role='button'] {
        width: 100%;
      }
    }
  }

  @media (max-width: 950px) {
    .logo-categories-container {
      display: none;
    }

    .categories-list {
      width: 100%;

      .categories-page-title {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }
`,To=h.div`
  width: 100%;
  max-height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  align-content: space-between;
  gap: 1rem;

  overflow-y: auto;
  padding: 0 0 1rem 0;

  #category-card {
    height: 10rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    /* grid-column: 1 / span 2;
    grid-row: 1 / 3; */

    padding: 1rem;
    background-color: ${i.colors.muted[100]};
    border: 1px solid ${i.colors.black+"70"};
    border-radius: 8px;
    box-shadow: 0 0 5px ${i.colors.black+"50"};

    #category-name {
      margin: 1.3rem 0 0 0;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: ${i.colors.primary[700]};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

    #category-card {
      height: 8rem;
    }
  }
`,zo=h.span`
  width: 50px;
  height: 20px;
  border-radius: 4px;
  /* Use a placeholder color property; you may replace it with your logic */
  background-color: ${t=>t.colorIndicator}; /* Example color */
  /* You can adjust the size and other properties as needed */
`,Eo=h.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`,Ao=h.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0 0 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.purple[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,Lo=h.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,Io=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: ${i.colors.black+"75"};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({isOpen:t})=>t?"1":"0"};
  visibility: ${({isOpen:t})=>t?"visible":"hidden"};
  transition:
    opacity 0.3s ease,
    visibility 0s linear ${({isOpen:t})=>t?"0s":"0.3s"};
`,Uo=h.section`
  position: relative;
  background-color: white;
  width: 60%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  overflow: auto;

  border-radius: 8px;
  padding: 1.7rem 3rem;
  box-shadow: 0 0 10px ${i.colors.black+"50"};
  opacity: ${({isOpen:t})=>t?"1":"0"};

  & > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${i.colors.text[700]};
  }

  @media (max-width: 768px) {
    width: 90%;
    /* height: 90vh; */
    max-width: none;

    padding: 0.5rem 1rem;

    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
    }
  }
`,Po=h.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;h.div`
  width: 100%;
`;const Mo=h.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${i.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,qo=h.div`
  width: 4rem;
  height: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  background-color: ${({color:t})=>t};
`,Fo=t=>{let s=!0;const o=[],{name:n,color:r}=t;return(!n||n==="")&&(s=!1,o.push("Nome da Categoria")),(!r||r==="")&&(s=!1,o.push("Cor da Categoria")),{isValid:s,fieldErrors:o}};function Bo({isModalOpen:t,setIsModalOpen:s,title:o=null,selectedCategory:n=null,isEditing:r=!1}){const p=J(),l=H("(max-width: 768px)"),[g,c]=a.useState(!1),[m,d]=a.useState(n||{id:0,color:"#10B981",name:""}),[f,u]=a.useState(!1);a.useEffect(()=>{c(t),d(n||{id:0,color:"#10B981",name:""})},[t,n]);const x=a.useCallback((D,S)=>{d({...m,[D]:S})},[m]),b=D=>{D.preventDefault();const{isValid:S,fieldErrors:E}=Fo(m);S||p.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${E.reduce((A,I,Z)=>Z===0?`'${I}'`:Z===E.length-1?`${A} e '${I}'`:`${A}, '${I}'`,"")}`,status:""})}),u(!0),(r?Ft:Mt)(m).then(A=>{p.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-category-success",title:"Categoria Criada com Sucesso",description:"Agora todos podem utilizar a nova categoria!",status:"success"})}),N(),d({id:0,color:"#10B981",name:""})}).catch(A=>{p.show({placement:"top-right",render:()=>{let I="";return typeof A.response.data.detail=="object"?I=A.response.data.detail[0].msg.split(", ")[1]:I=A.response.data.detail,e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Erro: ${I}`,status:""})}})}).finally(()=>{u(!1)})},N=()=>{c(!1),setTimeout(()=>{s(!1)},300)};return e.jsx(e.Fragment,{children:g&&e.jsx(Io,{isOpen:g,onClick:N,children:e.jsxs(Uo,{isOpen:g,onClick:D=>D.stopPropagation(),children:[e.jsx(Mo,{onClick:N,children:e.jsx(ae,{size:"2rem",color:i.colors.primary[50]})}),e.jsx("h1",{children:o||"Nova categoria"}),e.jsx(X,{name:"name",onChange:x,fontSize:"1.2rem",value:m.name||void 0,size:"lg",inputType:"text",accessibilityLabel:"Nome da Categoria",label:"Nome da Categoria",placeholder:"Digite o nome da categoria..."}),e.jsx(X,{name:"color",onChange:x,fontSize:"1.2rem",value:m.color,size:"lg",inputType:"text",accessibilityLabel:"Cor da Categoria (com #)",label:"Cor da Categoria (com #)",placeholder:"Escolha a cor da categoria #000000..."}),e.jsx(qo,{color:m.color}),e.jsx(Po,{children:e.jsx(z,{id:"create-topic-button",onPress:D=>b(D),bgColor:i.colors.success[600],size:l?"xs":"md",borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"700"},isLoadingText:"Criando...",isLoading:f,rightIcon:e.jsx(fe,{}),children:"Criar"})})]})})})}const Fe="Nova Categoria";function Vo(){const t=J(),{checkScopePermissions:s}=$(),o=H("(max-width: 768px)"),[n,r]=a.useState([]),[p,l]=a.useState(null),[g,c]=a.useState(!1),[m,d]=a.useState(Fe),[f,u]=a.useState(!1);a.useEffect(()=>{g||x().then()},[g]);const x=async()=>{u(!0),ye().then(S=>{r(S.data)}).finally(()=>{u(!1)})},b=a.useCallback(S=>{c(S),l(null),d(Fe)},[]),N=(S,E)=>{S.preventDefault(),u(!0),qt(E).then(L=>{t.show({placement:"top-right",render:()=>e.jsx(v,{id:"delete-category-success",title:"Categoria Apagada com Sucesso",description:"",status:"success"})}),x().then()}).catch(L=>{t.show({placement:"top-right",render:()=>{let A="";return typeof L.response.data.detail=="object"?A=L.response.data.detail[0].msg.split(", ")[1]:A=L.response.data.detail,e.jsx(v,{id:"create-category-error",title:"Erro ao apagar categoria",description:`Erro: ${A}`,status:""})}})}).finally(()=>{u(!1)})},D=(S,E)=>{S.preventDefault(),l(E),d("Editar Categoria"),c(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(Qo,{children:[e.jsx("div",{className:"logo-categories-container",children:e.jsx(te,{})}),e.jsxs("section",{className:"categories-list",children:[e.jsxs("div",{id:"create-category",children:[e.jsx("h1",{className:"categories-page-title",children:"Lista de Categorias"}),(s(ne)||s(ie))&&e.jsx(z,{size:o?"sm":"lg",rightIcon:e.jsx(Ce,{}),onPress:()=>b(!0),children:"Criar categoria"})]}),e.jsx(To,{children:f?e.jsx(W,{accessibilityLabel:"Carregando os tópicos..."}):e.jsx(e.Fragment,{children:n.map(S=>e.jsxs("div",{id:"category-card",children:[(s(ne)||s(ie))&&e.jsxs(Eo,{children:[e.jsx(Ao,{onClick:E=>D(E,S),children:e.jsx(yt,{color:i.colors.primary[50]})}),e.jsx(Lo,{onClick:E=>N(E,S.id),children:e.jsx(xe,{color:i.colors.primary[50]})})]}),e.jsx("p",{id:"category-name",children:S.name}),e.jsx(zo,{colorIndicator:S.color})]},S.id))})})]})]}),(s(ne)||s(ie))&&e.jsx(Bo,{isModalOpen:g,setIsModalOpen:b,selectedCategory:p,isEditing:p!==null,title:m})]})}function Ro(){const t=K();return e.jsx(e.Fragment,{children:e.jsx(ve,{isModalOpen:!0,setIsModalOpen:()=>t("/")})})}const Oo=h.section`
  position: relative;
  width: 80%;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  .logo-saved-topics-container {
    width: 30%;

    svg {
      width: 17rem;
      height: 19rem;
    }
  }

  .saved-topics-list {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .saved-topics-title {
    font-weight: bold;
    font-size: 2rem;
  }

  & > div[role='button'] {
    width: 30%;
  }

  .reload-saved-topics {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 930px) {
    width: 90%;

    .logo-saved-topics-container {
      svg {
        width: 15rem;
        height: 13rem;
      }
    }

    .reload-saved-topics {
      flex-direction: column;
      gap: 0.7rem;

      & > div[role='button'] {
        width: 100%;
      }
    }
  }

  @media (max-width: 950px) {
    .logo-saved-topics-container {
      display: none;
    }

    .saved-topics-list {
      width: 100%;
    }

    .saved-topics-title {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`,Zo=h.div`
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  align-content: space-between;
  gap: 1rem;

  overflow-y: auto;
  padding: 0 0 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;function Xo(){const t=H("(max-width: 768px)"),[s,o]=a.useState(!1),[n,r]=a.useState([]);a.useEffect(()=>{p().then()},[]);const p=async()=>{o(!0),is().then(l=>{r(l.data)}).finally(()=>{o(!1)})};return e.jsx(e.Fragment,{children:e.jsxs(Oo,{children:[e.jsx("div",{className:"logo-saved-topics-container",children:e.jsx(te,{})}),e.jsxs("section",{className:"saved-topics-list",children:[e.jsxs("div",{className:"reload-saved-topics",children:[e.jsx("h1",{className:"saved-topics-title",children:"Tópicos Salvos"}),e.jsx(z,{size:t?"sm":"lg",rightIcon:e.jsx(Re,{size:22,color:i.colors.white}),onPress:p,children:"Recarregar"})]}),e.jsx(Zo,{children:s?e.jsx(W,{accessibilityLabel:"Carregando os tópicos salvos..."}):e.jsx(e.Fragment,{children:n.map(l=>e.jsx(re,{id:l.id,title:l.title,rating:l.rating,files:l.files,currentRating:l.current_user_rating,content:l.content,author:l.author.name,authorEmail:l.author.email,commentsCount:l.comments_count,categories:l.categories,isSave:l.current_user_has_saved||!0},l.id))})})]})]})})}const Ho=h.section`
  position: relative;
  width: 80%;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  .logo-my-topics-container {
    width: 30%;

    svg {
      width: 17rem;
      height: 19rem;
    }
  }

  .my-topics-list {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .my-topics-title {
    font-weight: bold;
    font-size: 2rem;
  }

  & > div[role='button'] {
    width: 30%;
  }

  .reload-my-topics {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 930px) {
    width: 90%;

    .logo-my-topics-container {
      svg {
        width: 15rem;
        height: 13rem;
      }
    }

    .reload-my-topics {
      flex-direction: column;
      gap: 0.7rem;

      & > div[role='button'] {
        width: 100%;
      }
    }
  }

  @media (max-width: 950px) {
    .logo-my-topics-container {
      display: none;
    }

    .my-topics-list {
      width: 100%;
    }

    .my-topics-title {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`,Jo=h.div`
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  align-content: space-between;
  gap: 1rem;

  overflow-y: auto;
  padding: 0 0 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;function Go(){const t=H("(max-width: 768px)"),[s,o]=a.useState(!1),[n,r]=a.useState([]);a.useEffect(()=>{p().then()},[]);const p=async()=>{o(!0),ns().then(l=>{r(l.data)}).finally(()=>{o(!1)})};return e.jsx(e.Fragment,{children:e.jsxs(Ho,{children:[e.jsx("div",{className:"logo-my-topics-container",children:e.jsx(te,{})}),e.jsxs("section",{className:"my-topics-list",children:[e.jsxs("div",{className:"reload-my-topics",children:[e.jsx("h1",{className:"my-topics-title",children:"Meus Tópicos"}),e.jsx(z,{size:t?"sm":"lg",rightIcon:e.jsx(Re,{size:22,color:i.colors.white}),onPress:p,children:"Recarregar"})]}),e.jsx(Jo,{children:s?e.jsx(W,{accessibilityLabel:"Carregando os meus tópicos..."}):e.jsx(e.Fragment,{children:n.map(l=>e.jsx(re,{id:l.id,title:l.title,rating:l.rating,files:l.files,currentRating:l.current_user_rating,content:l.content,authorEmail:l.author.email,author:l.author.name,commentsCount:l.comments_count,categories:l.categories,isSave:l.current_user_has_saved||!1,deleteTopicCallback:p,isMyTopicScreen:!0,isComment:!1},l.id))})})]})]})})}function Ko(){return e.jsxs(bt,{children:[e.jsxs(q,{path:"/",element:e.jsx(se,{}),children:[e.jsx(q,{path:"/",element:e.jsx(Os,{})}),e.jsx(q,{path:"/topic/:id",element:e.jsx(So,{})})]}),e.jsx(q,{path:"/profile",element:e.jsx(se,{}),children:e.jsx(q,{path:"/profile",element:e.jsx(bo,{})})}),e.jsx(q,{path:"/categories",element:e.jsx(se,{}),children:e.jsx(q,{path:"/categories",element:e.jsx(Vo,{})})}),e.jsx(q,{path:"/create-topic",element:e.jsx(se,{}),children:e.jsx(q,{path:"/create-topic",element:e.jsx(Ro,{})})}),e.jsx(q,{path:"/saved-topics",element:e.jsx(se,{}),children:e.jsx(q,{path:"/saved-topics",element:e.jsx(Xo,{})})}),e.jsx(q,{path:"/my-topics",element:e.jsx(se,{}),children:e.jsx(q,{path:"/my-topics",element:e.jsx(Go,{})})}),e.jsxs(q,{path:"/login",element:e.jsx(oo,{}),children:[e.jsx(q,{path:"/login",element:e.jsx(eo,{})}),e.jsx(q,{path:"/login/logon",element:e.jsx(Ks,{})}),e.jsx(q,{path:"/login/create-account",element:e.jsx(fo,{})})]})]})}const Yo={white:"#FFF","gray-100":"#E1E1E6","gray-300":"#C4C4CC","gray-400":"#8D8D99","gray-500":"#7C7C8A","gray-600":"#323238","gray-700":"#29292E","gray-800":"#202024","gray-900":"#121214","green-300":"#00B37E","green-500":"#00875F","green-700":"#015F43","red-500":"#AB222E","red-700":"#7A1921","yellow-500":"#FBA94C"},Wo=jt`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0  10px ${t=>t.theme["green-500"]}; */
  }

  body {
    background: ${i.colors.dark[900]};
    color: ${i.colors.black};
    overflow-y: auto;
  }

  body, input, textarea, button, div[role='button'] {
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    transition: background-color .3s;
  }

  button {
    cursor: pointer;
    /* font-size: 1.6rem; */
    background: none;
    border: 0;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.5;
    font-weight: 600;
    /* color: #000; */
  }

  #reactionButton {
    box-shadow: none;

    &:hover {
      & > svg {
        color: ${i.colors.tertiary[500]}
      }
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;function $o(){const t={get:async()=>{try{return localStorage.getItem("@UnBForum:theme")==="dark"?"dark":"light"}catch(s){return console.log(s),"light"}},set:async s=>{try{localStorage.setItem("@UnBForum:theme",s)}catch(o){console.log(o)}}};return e.jsx(vt,{colorModeManager:t,children:e.jsx(kt,{theme:Yo,children:e.jsxs(ls,{children:[e.jsx(Nt,{children:e.jsx(Ko,{})}),e.jsx(Wo,{})]})})})}Dt.createRoot(document.getElementById("root")).render(e.jsx(St.StrictMode,{children:e.jsx($o,{})}));
