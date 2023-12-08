import{s as p,t as r,a as we,j as e,I as Qe,u as F,r as l,F as De,S as re,P as ke,b as ie,B as N,c as Y,n as ae,q as Se,d as le,e as Z,A as ce,V as ze,H as de,T as Ae,f as Ue,C as te,g as J,h as Te,i as Le,k as se,D as $,l as fe,m as qe,o as Pe,p as Ee,v as Ve,w as Xe,x as Re,y as xe,z as Ze,E as He,G as Je,J as We,K as Ie,M as O,L as Be,N as Fe,O as Me,Q as ge,R as ue,U as ne,W as Oe,X as Ge,Y as Ke,Z as X,_ as Ye,$ as $e,a0 as _e,a1 as e1,a2 as t1,a3 as s1}from"./vendor-313f1ac2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=n(o);fetch(o.href,d)}})();const n1=p.main`
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
`,o1=p.section`
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
    color: ${r.colors.text[50]};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0 10px ${r.colors.success[600]};
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
`,r1=p.main`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  /* background-color: #f3f3f3; */
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
    /* overflow-y: hidden; */
  }
`,i1=p.section`
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
    color: ${r.colors.text[50]};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0 10px ${r.colors.success[600]};
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
`,a1=p.aside`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background-color: ${r.colors.info[50]};
  box-shadow: 0 0 10px ${r.colors.primary[800]};
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
    color: ${r.colors.rose[600]};
  }

  @media (max-width: 768px) {
    height: auto;
  }
`,l1=p.div`
  width: 100%;
  background-color: ${r.colors.info[700]};
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
`,c1=p.div`
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
`,d1=p.div`
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
`,A1=p.div`
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
`,pe=[{label:"Mais recentes",value:"-created_at",color:"#000"},{label:"Mais populares",value:"-rating",color:"#000"},{label:"Mais comentários",value:"-comments_count",color:"#000"}],j=we.create({baseURL:"https://unbforum-backend-4b05406a8bbf.herokuapp.com/"}),u1=async()=>await j.get("categories/"),p1=p.div`
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
`,h1=p.label`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;

  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${r.colors.text[500]};

  #required {
    color: ${r.colors.danger[600]};
  }

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`;function R({label:t="",inputType:s="text",placeholder:n,accessibilityLabel:i,size:o="md",fontSize:d="0.9rem",name:a,isRequired:h=!0,isEditing:c=!0,value:u=void 0,backgroundColor:A=null,height:m=null,onChange:C,...f}){return e.jsxs(p1,{children:[t&&e.jsxs(h1,{fontSize:d,children:[t,h&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx(Qe,{height:m||null,type:s,variant:c?"outline":"filled",size:o,backgroundColor:A||null,isRequired:h,value:u,placeholder:n,editable:c,accessibilityLabel:i,onChangeText:g=>C(a,g),...f})]})}function m1({onChangeCategoriesFilter:t,onChangeOrderBy:s,onChangeSearchInput:n,handleSearch:i}){const o=F("(max-width: 768px)"),[d,a]=l.useState([]),h={control:c=>({...c,backgroundColor:r.colors.white}),option:(c,{data:u,isMulti:A,isDisabled:m,isFocused:C,isSelected:f})=>{const g=Y(u.color);return{...c,backgroundColor:m?void 0:f?A?u.color:g.alpha(.2).css():C?g.alpha(.1).css():void 0,color:m?"#ccc":f&&A?Y.contrast(g,"white")>2?"white":"black":u.color,cursor:m?"not-allowed":"default",":active":{...c[":active"],backgroundColor:m?void 0:f?u.color:g.alpha(.3).css()}}},multiValue:(c,{data:u})=>{const A=Y(u.color);return{...c,backgroundColor:A.alpha(.1).css()}},multiValueLabel:(c,{data:u})=>({...c,color:u.color}),multiValueRemove:(c,{data:u})=>({...c,color:u.color,":hover":{backgroundColor:u.color,color:"white"}}),input:c=>({...c,"input:focus":{boxShadow:"none"}})};return l.useEffect(()=>{u1().then(c=>{a(c.data)})},[]),e.jsxs(l1,{children:[e.jsxs(c1,{children:[e.jsx(De,{size:20,color:r.colors.tertiary[300]}),e.jsx(re,{isMulti:!0,closeMenuOnSelect:!1,options:d.map(c=>({value:c.id.toString(),label:c.name,color:c.color})),styles:h,onChange:t,placeholder:"Filtrar por categorias"})]}),e.jsxs(A1,{children:[e.jsx(ke,{size:22,color:r.colors.tertiary[300]}),e.jsx(re,{isMulti:!1,defaultValue:pe[0],options:pe,placeholder:"Ordenar Tópicos",styles:h,onChange:s})]}),e.jsxs(d1,{children:[e.jsx(ie,{color:r.colors.tertiary[300],size:"22"}),e.jsx(R,{name:"topic-search",height:"2.4rem",size:o?"md":"lg",backgroundColor:r.colors.white,accessibilityLabel:"Buscar tópicos",placeholder:"Buscar tópicos...",inputType:"text",onChange:n,InputRightElement:e.jsx(N,{rounded:"none",w:"1/12",h:"full",onPress:i,children:e.jsx(ie,{color:r.colors.white,size:"22"})})})]})]})}const C1=(t,s)=>t?"0.9rem":s?"1rem":"0.9rem",f1=(t,s)=>t?"0.7rem":s?"0.8rem":"0.7rem",x1=p.div`
  width: 100%;
  display: flex;
  /* padding: 0.5rem; */
  gap: 0.5rem;
  margin-top: 1rem;
`,g1=p.div`
  width: ${({isComment:t})=>t?"15%":"10%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({isComment:t})=>"flex-start"};
  gap: ${({isInsideTopic:t,isComment:s})=>t&&!s?"1rem":"0.4rem"};

  & > p {
    font-weight: ${({isComment:t})=>t?"700":"900"};
    font-size: ${({isComment:t})=>t?"1.2rem":"1.4rem"};
    color: ${r.colors.primary[900]};
  }

  #markButton {
    transition: 0.5s all ease;
  }

  #markButton:hover > svg {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  }

  #markButton:focus {
    box-shadow: none;
  }

  #reactionButton {
    & > svg {
      width: ${({isComment:t})=>t?"1.2rem":"1.5rem"};
      height: ${({isComment:t})=>t?"1.2rem":"1.5rem"};
    }
  }

  @media (max-width: 768px) {
    width: ${({isInsideTopic:t})=>t?"10%":"15%"};
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
`,N1=p.div`
  width: 100%;
  display: flex;
`,v1=p.div`
  width: ${({isComment:t})=>t?"85%":"100%"};
  display: flex;
  flex-direction: column;
  gap: ${({isComment:t})=>t?"0.4rem":"0.6rem"};

  & > p {
    width: ${({isInsideTopic:t})=>t?"90%":"100%"};
    text-align: left;
    font-weight: ${({isComment:t,isInsideTopic:s})=>"400"};
    font-size: ${({isComment:t,isInsideTopic:s})=>C1(t,s)};
    color: ${r.colors.black};
    line-height: ${({isComment:t})=>t?"1.7":"2"};
  }

  & > span {
    font-size: 0.8rem;
    font-weight: ${({isComment:t,isInsideTopic:s})=>"400"};
    color: ${r.colors.black};
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
      font-size: ${({isComment:t,isInsideTopic:s})=>f1(t,s)};
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
`,b1=p.div`
  width: 100%;
  display: flex;
  align-items: ${({isInsideTopic:t})=>"center"};
  flex-direction: row;
  margin-bottom: 1rem;

  & > p {
    font-weight: ${({isInsideTopic:t})=>t?500:600};
    font-size: 1rem;
    text-align: left;
    color: ${r.colors.black};
  }

  @media (max-width: 768px) {
    & > p {
      font-size: 0.8rem;
    }
  }
`,j1=p.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.7rem;

  #post-badge-text {
    color: ${r.colors.text[50]};
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
`,y1=p(N)`
  width: ${({isInsideTopic:t})=>t?"50%":"90%"};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; */
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${r.colors.primary[600]};
  }

  #comment-button {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${r.colors.primary[600]};
  }

  ${({isInsideTopic:t})=>t?ae`
          cursor: initial;
        `:ae`
          &:hover {
            /* filter: brightness(50%); */

            & > p {
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
              color: ${r.colors.primary[400]};
            }

            & > svg {
              color: ${r.colors.primary[400]};
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
`;p.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 5px;
  background-color: ${r.colors.tertiary[100]};

  & > p {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${r.colors.primary[800]};
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
`;const w1=async t=>await j.get(`topics/?${Se.stringify(t,{arrayFormat:"comma"})}`),Q1=async t=>await j.get(`topics/${t}`),D1=async t=>await j.post("topics",t),k1=async t=>await j.post(`topics/${t}/upvote`),S1=async t=>await j.post(`topics/${t}/downvote`),Ne=l.createContext(null),z1=({children:t})=>{const[s,n]=l.useState(""),[i,o]=l.useState([]),[d,a]=l.useState(""),[h,c]=l.useState("");l.useEffect(()=>{const m=localStorage.getItem("@UnBForum:token");if(console.log("Checando token...",m),m){const C=le(m.split(" ")[1]);j.defaults.headers.common.Authorization=`${m}`,n(m.split(" ")[1]),o(C.scopes),a(C.sub),c(C.name)}},[]);const u=l.useCallback(m=>{localStorage.setItem("@UnBForum:token",`Bearer ${m}`);const C=le(m);j.defaults.headers.common.Authorization=`Bearer ${m}`,n(m),o(C.scopes),a(C.sub),c(C.name)},[]),A=l.useCallback(()=>{n(""),o([]),a(""),c(""),j.defaults.headers.common.Authorization=null,localStorage.removeItem("@UnBForum:token")},[]);return e.jsx(Ne.Provider,{value:{token:s,name:h,email:d,scopes:i,changeToken:u,logoutUser:A,setName:c},children:t})};function H(){const t=l.useContext(Ne);if(!t)throw new Error("useUser must be used within an UserThemeProvider");return t}const v=({id:t,status:s,variant:n="left-accent",title:i,description:o,isClosable:d=!1,...a})=>{const h=Z();return e.jsx(ce,{maxWidth:"100%",alignSelf:"center",flexDirection:"row",status:s||"error",variant:n,...a,children:e.jsxs(ze,{space:1,flexShrink:1,w:"100%",children:[e.jsxs(de,{flexShrink:1,alignItems:"center",justifyContent:"space-between",children:[e.jsxs(de,{space:2,flexShrink:1,alignItems:"center",children:[e.jsx(ce.Icon,{}),e.jsx(Ae,{fontSize:"md",fontWeight:"medium",flexShrink:1,color:n==="solid"?"lightText":n!=="outline"?"darkText":null,children:i})]}),d?e.jsx(Ue,{variant:"unstyled",icon:e.jsx(te,{size:"3"}),_icon:{color:n==="solid"?"lightText":"darkText"},onPress:()=>h.close(t)}):null]}),e.jsx(Ae,{px:"6",color:n==="solid"?"lightText":n!=="outline"?"darkText":null,children:o})]})})},U1=async(t,s)=>await j.post(`topics/${s}/comments/`,{content:t}),T1=async t=>await j.get(`topics/${t}/comments/`),L1=async(t,s)=>await j.post(`topics/${s}/comments/${t}/upvote`),q1=async(t,s)=>await j.post(`topics/${s}/comments/${t}/downvote`),P1=t=>`https://unbforum-backend-4b05406a8bbf.herokuapp.com/files/download/${t.upload_path}`;function ve(t){const s=t.split(" ");if(s.length>=2){const n=s[0],i=s[s.length-1],o=n[0],d=i[0];return o.toUpperCase()+d.toUpperCase()}else return s[0][0].toUpperCase()}function _({id:t,isInsideTopic:s=!1,isComment:n=!1,title:i="",author:o,content:d,topicId:a=null,currentRating:h=0,rating:c=0,files:u=[],categories:A=[],commentsCount:m=0}){const{token:C}=H(),f=Z(),g=J(),b=F("(max-width: 768px)"),[T,q]=l.useState(c),[P,y]=l.useState(!1),[k,x]=l.useState(h);l.useEffect(()=>{x(h),q(c)},[h,c]);function w(){g(`/topic/${t}`)}const z=()=>{f.show({placement:"top-right",render:()=>e.jsx(v,{id:"user-unlogged-error",title:"Opa!",description:"Para interagir com um tópico ou comentário, você precisa fazer login!",status:""})})};async function E(Q,I){if(Q.preventDefault(),!C){z();return}if(I>0){const B=await(n?L1(t,a):k1(t));q(B.data.rating),x(k>0?0:1)}else{const B=await(n?q1(t,a):S1(t));q(B.data.rating),x(k<0?0:-1)}}function M(Q){Q.preventDefault(),y(!P)}function W(){switch(P){case!0:return e.jsx(Ee,{size:"30",color:r.colors.darkBlue[400]});case!1:return e.jsx(Pe,{size:"30",color:r.colors.darkBlue[400]})}}return e.jsxs(e.Fragment,{children:[e.jsxs(x1,{children:[e.jsxs(g1,{isInsideTopic:s,isComment:n,children:[e.jsx("button",{id:"reactionButton",onClick:Q=>E(Q,1),children:e.jsx(Te,{color:k>0?r.colors.tertiary[500]:r.colors.muted[500],size:"18"})}),e.jsx("p",{children:T}),e.jsx("button",{id:"reactionButton",onClick:Q=>E(Q,-1),children:e.jsx(Le,{color:k<0?r.colors.tertiary[500]:r.colors.muted[500],size:"18"})}),!n&&e.jsx("button",{id:"markButton",onClick:Q=>M(Q),children:W()})]}),e.jsx(N1,{children:e.jsxs(v1,{isInsideTopic:s,isComment:n,children:[s&&e.jsx("h1",{id:"post-title",children:i}),e.jsxs(b1,{isInsideTopic:s,children:[e.jsx(se,{bg:n?"lime.600":"emerald.600",marginRight:"0.8rem",size:n?"xs":"sm",children:ve(o)}),e.jsxs("p",{children:[o,!s&&!n&&` - ${i}`]})]}),e.jsx("p",{dangerouslySetInnerHTML:{__html:d.replace(/\n/g,"<br>")}}),u.length>0&&e.jsx($,{width:"80%"}),u.map((Q,I)=>e.jsxs("span",{children:["Para acessar o arquivo ",`${I+1}: `,e.jsx("a",{href:P1(Q),target:"_blank",rel:"noreferrer",children:"clique aqui"})]},Q.id)),!n&&e.jsx(j1,{children:A.map(Q=>e.jsx(fe,{variant:"solid",bg:Q.color,alignSelf:"center",size:"md",textDecoration:"solid .8rem bold",children:e.jsx("p",{id:"post-badge-text",children:Q.name})},Q.id))}),!s&&!n&&e.jsx(y1,{variant:"outline",width:"95%",size:"xs",_text:{fontSize:b?"0.8rem":"1rem"},isInsideTopic:s,onPress:s?()=>{}:()=>w(),rightIcon:e.jsx(qe,{size:b?"18":"20",color:r.colors.primary[700]}),_icon:{marginLeft:"1rem"},children:`Ver comentários (${m})`})]})})]}),e.jsx($,{alignSelf:"flex-end",width:n?"95%":"100%",marginTop:s?"0rem":"0.5rem",height:n||!s?"0.05rem":".1rem",_light:{bg:"muted.800"},_dark:{bg:"muted.50"}})]})}const E1=p.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 10px;
  border-radius: 5px;
  background-color: ${r.colors.white};
  box-shadow: 0 0 10px ${r.colors.black+"25"};
`,V1=p.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > p {
    font-weight: 600;
    font-size: 0.8rem;
    color: ${r.colors.black};
  }
`,X1=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    text-align: left;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${r.colors.black};
    line-height: 1.3;

    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,R1=p.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.7rem;

  #post-badge-text {
    color: ${r.colors.text[50]};
    font-size: 0.7rem;
    line-height: 1.5;
    font-weight: 500;
  }
`;p.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${r.colors.primary[600]};
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${r.colors.primary[600]};
  }

  &:hover {
    /* filter: brightness(50%); */

    & > p {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      color: ${r.colors.primary[400]};
    }

    & > svg {
      color: ${r.colors.primary[400]};
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
    }
  }

  &:focus {
    box-shadow: none;
  }
`;function Z1(){return e.jsxs(E1,{children:[e.jsxs(V1,{children:[e.jsx(se,{bg:"emerald.800",marginRight:"0.8rem",size:"xs",children:"SH"}),e.jsx("p",{children:"Sandalo Henrique - Horários de Atendimento coordenação de Eng. de Software"})]}),e.jsxs(X1,{children:[e.jsxs("p",{children:["Prezad@s discentes,",e.jsx("br",{}),e.jsx("br",{}),"Prezad@s discentes, Bom dia! Espero que estejam bem. Deixo aqui informações sobre a dinâmica de atendimento da Coordenação de Eng. de Software durante o período da matrícula: - atendimento presencial nas 2a-feiras de 0830h às 0930h; - atendimento presencial nas 4a-feiras de 0830h às 1100h. Além do atendimento presencial, vocês têm acesso ao sistema Sigaa que disponibiliza canal de contato com o Coordenador para envio de mensagens.",e.jsx("br",{}),e.jsx("br",{}),"***Não haverá atendimento via Chat Teams durante esse período.",e.jsx("br",{}),"*** Att, TA",e.jsx("br",{}),e.jsx("br",{}),"Para visualizar acesse"," ",e.jsx("a",{href:"https://teste.com.br/teste",children:"https://teste.com.br/teste"}),e.jsx("br",{})]}),e.jsx(R1,{children:["TCC","Eng. Software","Eng. Eletrônica","27/07"].map((t,s)=>e.jsx(fe,{variant:"solid",bg:r.colors.tertiary[500],alignSelf:"center",size:"sm",textDecoration:"solid .8rem bold",children:e.jsx("p",{id:"post-badge-text",children:t})},s))})]})]})}const H1=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${r.colors.black+"75"}; /* fundo escurecido */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({isOpen:t})=>t?"1":"0"};
  visibility: ${({isOpen:t})=>t?"visible":"hidden"};
  transition:
    opacity 0.3s ease,
    visibility 0s linear ${({isOpen:t})=>t?"0s":"0.3s"};
`,J1=p.div`
  background-color: white;
  width: 60%;
  max-width: 880px;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  border-radius: 8px;
  padding: 1.7rem 3rem;
  box-shadow: 0 0 10px ${r.colors.black+"50"};
  opacity: ${({isOpen:t})=>t?"1":"0"};
  transform: translateY(-50px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  & > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${r.colors.text[700]};
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: none;

    padding: 1rem 1.5rem;

    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
    }
  }
`,W1=p.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,I1=p.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${r.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,B1=p.div`
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
    color: ${r.colors.black};
  }
`,F1=p.label`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${r.colors.text[500]};

  #required {
    color: ${r.colors.danger[600]};
  }

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`;function be({label:t="",inputType:s="text",placeholder:n,accessibilityLabel:i,size:o="md",fontSize:d="0.9rem",isRequired:a=!0,isEditing:h=!0,name:c,isComment:u=!1,value:A=void 0,onChange:m,...C}){return e.jsxs(B1,{isComment:u,children:[t&&e.jsxs(F1,{fontSize:d,children:[t,a&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx(Ve,{type:s,variant:h?"outline":"filled",size:o,placeholder:n,accessibilityLabel:i,editable:h,onChangeText:f=>m(c,f),autoCompleteType:null,value:A,totalLines:5,maxLength:700,...C})]})}const M1=p.div`
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
`,O1=p.label`
  font-size: ${({fontSize:t})=>t};
  line-height: 1.5rem;
  color: ${r.colors.text[500]};

  @media (max-width: 768px) {
    font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
  }
`,G1=p.div`
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

    background-color: ${r.colors.tertiary[100]};
  }

  #file {
    position: relative;

    font-size: 0.8rem;
    color: ${r.colors.text[500]};

    overflow: hidden;
    word-wrap: break-word;
  }

  #delete-file-button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0.3rem;
    background-color: ${r.colors.danger[600]};

    transition: 0.3s all ease;
  }

  #delete-file-button:hover {
    filter: brightness(70%);
  }

  #no-files {
    width: 100%;
    align-items: flex-start;

    font-size: 0.9rem;
    color: ${r.colors.text[500]};
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

      background-color: ${r.colors.tertiary[100]};
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
`,K1=async t=>{const s=new FormData;return s.append("files",t),console.log(s),await j.post("files/upload/",s,{headers:{"Content-Type":t.type}})};function Y1({handleAddFile:t,handleDeleteFile:s,files:n,fileInputRef:i,filesUploadLimit:o=2,setIsAddFileLoading:d}){const a=Z(),h=async A=>{const m=A.target.files&&A.target.files[0];m&&n.length+1<=o?(console.log("tentando subir arquivo1"),d(!0),console.log("tentando subir arquivo2"),K1(m).then(C=>{console.log(C.data[0]),t(C.data[0])}).catch(C=>{a.show({placement:"top",render:()=>e.jsx(v,{id:"files-upload-error",status:"error",title:"Opa!",description:"Erro ao fazer upload do arquivo."})})}).finally(()=>{d(!1)})):a.show({placement:"top",render:()=>e.jsx(v,{id:"files-error",status:"error",title:"Opa!",description:"Número de arquivos atingido ou arquivo é inválido."})})},c=()=>{const A=[];return n.forEach((m,C)=>{A.push(e.jsxs("p",{id:"file",children:[e.jsx("button",{id:"delete-file-button",onClick:()=>s(m.name),children:e.jsx(Xe,{size:"1.7rem",color:r.colors.primary[50]})}),e.jsx(Re,{size:"38",color:r.colors.gray[500]}),m.name]},C))}),A},u=()=>e.jsx("p",{id:"no-files",children:"Sem arquivos adicionados"});return e.jsx(e.Fragment,{children:e.jsxs(M1,{children:[e.jsx(O1,{fontSize:"1.2rem",children:`Arquivos (${n.length}/${o} arquivos adicionados)`}),e.jsx("input",{ref:i,id:"file-upload",type:"file",style:{display:"none"},onChange:h}),e.jsx(G1,{children:n.length>0?c():u()})]})})}const $1=t=>{let s=!0;const n=[],{title:i,content:o}=t;return(!i||i==="")&&(s=!1,n.push("Título")),(!o||o==="")&&(s=!1,n.push("Conteúdo")),{isValid:s,fieldErrors:n}},_1=t=>{const{title:s,content:n,files:i}=t;return{title:s,content:n,files:i.map(o=>o.id)}};function e3({isModalOpen:t,setIsModalOpen:s}){const n=Z(),i=l.useRef(null),[o,d]=l.useState(!1),[a,h]=l.useState({title:"",content:"",files:[]}),[c,u]=l.useState(!1),[A,m]=l.useState(!1);l.useEffect(()=>console.log(a),[a]),l.useEffect(()=>{d(t),h({title:"",content:"",files:[]})},[t]);const C=l.useCallback((y,k)=>{h({...a,[y]:k})},[a]),f=l.useCallback(y=>{m(y)},[]),g=y=>{y.preventDefault();const{isValid:k,fieldErrors:x}=$1(a);if(!k){n.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${x.reduce((w,z,E)=>E===0?`'${z}'`:E===x.length-1?`${w} e '${z}'`:`${w}, '${z}'`,"")}`,status:""})});return}u(!0),D1(_1(a)).then(w=>{n.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-success",title:"Tópico Criado com Sucesso",description:"Agora todos podem ver seu novo tópico!",status:"success"})}),b(),h({title:"",content:"",files:[]})}).catch(w=>{n.show({placement:"top-right",render:()=>{let z="";return typeof w.response.data.detail=="object"?z=w.response.data.detail[0].msg.split(", ")[1]:z=w.response.data.detail,e.jsx(v,{id:"create-topic-error",title:"Campos Inválidos",description:`Erro: ${z}`,status:""})}})}).finally(()=>{u(!1)})},b=()=>{d(!1),setTimeout(()=>{s(!1)},300)},T=l.useCallback(y=>{h({...a,files:[...a.files,y]})},[a]),q=l.useCallback(y=>{const k=a.files.filter(x=>x.name!==y);h({...a,files:k})},[a]),P=()=>{i&&i.current&&i.current.click()};return e.jsx(e.Fragment,{children:o&&e.jsx(H1,{isOpen:o,onClick:b,children:e.jsxs(J1,{isOpen:o,onClick:y=>y.stopPropagation(),children:[e.jsx(I1,{onClick:b,children:e.jsx(te,{size:"2rem",color:r.colors.primary[50]})}),e.jsx("h1",{children:"Novo Tópico"}),e.jsx(R,{name:"title",onChange:C,fontSize:"1.2rem",size:"lg",inputType:"text",accessibilityLabel:"Título",label:"Título",placeholder:"Digite o título do tópico..."}),e.jsx(be,{name:"content",onChange:C,fontSize:"1.2rem",size:"lg",inputType:"text",accessibilityLabel:"Conteúdo",label:"Conteúdo",placeholder:"Digite o conteúdo do tópico aqui..."}),e.jsx(Y1,{filesUploadLimit:2,fileInputRef:i,handleAddFile:T,handleDeleteFile:q,files:a.files,setIsAddFileLoading:f}),e.jsxs(W1,{children:[e.jsx(N,{onPress:()=>P(),size:"md",isLoading:A,isLoadingText:"Adicionando arquivo...",borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"400"},rightIcon:e.jsx(xe,{}),children:"Adicionar arquivos"}),e.jsx(N,{id:"create-topic-button",onPress:y=>g(y),bgColor:r.colors.success[600],size:"md",isDisabled:A,borderRadius:"4px",_text:{fontSize:"1rem",fontWeight:"700"},isLoadingText:"Criando...",isLoading:c,rightIcon:e.jsx(Ze,{}),children:"Criar"})]})]})})})}const t3=p.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 65vh;
  gap: 1rem;

  @media (max-width: 768px) {
    height: 30vh;
    /* overflow-y: hidden; */
  }
`;function ee({accessibilityLabel:t}){return e.jsxs(t3,{children:[e.jsx(He,{size:"lg",color:r.colors.primary[700],accessibilityLabel:t}),e.jsx(Je,{color:"primary.700",fontSize:"md",children:"Carregando..."})]})}function s3(){const{token:t}=H(),s=F("(max-width: 768px)"),[n,i]=l.useState(!1),[o,d]=l.useState([]),[a,h]=l.useState([]),[c,u]=l.useState("-created_at"),[A,m]=l.useState(""),[C,f]=l.useState(""),[g,b]=l.useState(!1);l.useEffect(()=>window.scrollTo(0,0),[]),l.useEffect(()=>console.log(o),[o]),l.useEffect(()=>{n||(b(!0),w1({search:C,order_by:c,category__id__in:a}).then(x=>{d(x.data)}).finally(()=>b(!1)))},[n,C,c,a]);const T=l.useCallback(x=>{i(x)},[]),q=l.useCallback(x=>{h(x.map(w=>w.value))},[]),P=l.useCallback(x=>{u(x.value)},[]),y=l.useCallback((x,w)=>{m(w)},[]),k=l.useCallback(()=>{f(A)},[A]);return e.jsxs(n1,{children:[e.jsxs(o1,{children:[e.jsx(We,{isDisabled:t,label:t?null:"Para criar um tópico é necessário estar logado",children:e.jsx(N,{isDisabled:!t,bgColor:r.colors.success[600],size:s?"xs":"lg",borderRadius:"4px",rightIcon:e.jsx(xe,{}),onPress:()=>T(!0),children:e.jsx("p",{children:"Criar Tópico"})})}),e.jsx(m1,{onChangeCategoriesFilter:q,onChangeOrderBy:P,onChangeSearchInput:y,handleSearch:k}),g?e.jsx(ee,{accessibilityLabel:"Carregando os tópicos..."}):e.jsx(e.Fragment,{children:e.jsx(r1,{children:o.map(x=>e.jsx(_,{id:x.id,title:x.title,rating:x.rating,files:x.files,currentRating:x.current_user_rating,content:x.content,author:x.author.name,commentsCount:x.comments_count,categories:x.categories},x.id))})})]}),e.jsx(i1,{children:e.jsxs(a1,{children:[e.jsxs("div",{id:"favorite-title-container",children:[e.jsx("h1",{id:"title-favorites",children:"Tópicos Fixados"}),e.jsx(Ie,{color:r.colors.rose[600],size:"22"})]}),Array.from({length:10}).map((x,w)=>e.jsx(Z1,{},w))]})}),e.jsx(e3,{isModalOpen:n,setIsModalOpen:T})]})}function n3(){return e.jsxs("svg",{width:"239",height:"64",viewBox:"0 0 259 85",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs("g",{filter:"url(#filter0_d_3625_13617)",children:[e.jsx("mask",{id:"mask0_3625_13617",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"10",y:"6",width:"64",height:"65",children:e.jsx("path",{d:"M10 6H73.1084V70.4784H10V6Z",fill:"white"})}),e.jsx("g",{mask:"url(#mask0_3625_13617)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.5527 8.22268C41.2648 8.22268 40.9885 8.27913 40.721 8.39205C40.4534 8.50497 40.2207 8.66543 40.0142 8.8764C39.8106 9.08441 39.6536 9.3251 39.5431 9.59551C39.4326 9.86888 39.3773 10.1512 39.3773 10.4483C39.3773 10.7425 39.4326 11.0248 39.5431 11.2982C39.6536 11.5715 39.8106 11.8122 40.0142 12.0202C40.2207 12.2282 40.4534 12.3887 40.721 12.5016C40.9885 12.6145 41.2648 12.671 41.5527 12.671C41.8436 12.671 42.1199 12.6145 42.3874 12.5016C42.655 12.3887 42.8877 12.2282 43.0942 12.0202C43.2978 11.8122 43.4548 11.5715 43.5653 11.2982C43.6758 11.0248 43.7311 10.7425 43.7311 10.4483C43.7311 10.1512 43.6758 9.86888 43.5653 9.59551C43.4548 9.3251 43.2978 9.08441 43.0942 8.8764C42.8877 8.66543 42.655 8.50497 42.3874 8.39205C42.1199 8.27913 41.8436 8.22268 41.5527 8.22268ZM36.2217 19.342H46.8867C46.8227 19.03 46.7354 18.7239 46.622 18.4298C46.5115 18.1326 46.3719 17.8473 46.2119 17.574C46.052 17.3036 45.8687 17.045 45.6652 16.8073C45.4616 16.5666 45.2376 16.3438 44.9962 16.1447C44.7548 15.9426 44.4989 15.7643 44.2284 15.6068C43.958 15.4493 43.6758 15.3186 43.3821 15.2116C43.0884 15.1047 42.7888 15.0244 42.4805 14.9709C42.1751 14.9145 41.8668 14.8877 41.5527 14.8877C41.2416 14.8877 40.9333 14.9145 40.6279 14.9709C40.3196 15.0244 40.02 15.1047 39.7263 15.2116C39.4326 15.3186 39.1504 15.4493 38.88 15.6068C38.6095 15.7643 38.3536 15.9426 38.1122 16.1447C37.8708 16.3438 37.6468 16.5666 37.4432 16.8073C37.2397 17.045 37.0564 17.3036 36.8965 17.574C36.7365 17.8473 36.5969 18.1326 36.4864 18.4298C36.373 18.7239 36.2857 19.03 36.2217 19.342ZM25.3416 20.1651C25.4434 20.2691 25.5219 20.388 25.5772 20.5247C25.6295 20.6613 25.6586 20.801 25.6586 20.9496C25.6557 21.0982 25.6295 21.2378 25.5742 21.3745C25.519 21.5112 25.4405 21.6301 25.3387 21.7341C25.234 21.8381 25.1176 21.9183 24.9838 21.9747C24.853 22.0312 24.7134 22.0579 24.568 22.0579C24.4254 22.0579 24.2858 22.0312 24.1521 21.9747C24.0212 21.9183 23.9019 21.8381 23.8001 21.7341C23.6984 21.6301 23.6198 21.5112 23.5646 21.3745C23.5093 21.2378 23.4802 21.0982 23.4802 20.9496C23.4802 20.801 23.5064 20.6613 23.5617 20.5247C23.6169 20.388 23.6954 20.2691 23.7972 20.1651C23.899 20.0492 24.0212 19.9571 24.1608 19.8947C24.3004 19.8323 24.4487 19.7996 24.6029 19.7996C24.7541 19.7996 24.9024 19.8323 25.042 19.8947C25.1816 19.9571 25.3038 20.0492 25.4056 20.1651H25.3416ZM65.4914 32.681C65.2035 32.681 64.9272 32.7375 64.6596 32.8504C64.3921 32.9633 64.1565 33.1238 63.9529 33.3318C63.7493 33.5398 63.5923 33.7805 63.4817 34.0539C63.3712 34.3272 63.316 34.6095 63.316 34.9037C63.316 35.2009 63.3712 35.4831 63.4817 35.7565C63.5923 36.0269 63.7493 36.2676 63.9529 36.4786C64.1565 36.6866 64.3921 36.8471 64.6596 36.96C64.9272 37.0729 65.2035 37.1294 65.4914 37.1294C65.7793 37.1294 66.0585 37.0729 66.3261 36.96C66.5908 36.8471 66.8264 36.6866 67.0299 36.4786C67.2364 36.2676 67.3935 36.0269 67.504 35.7565C67.6145 35.4831 67.6698 35.2009 67.6698 34.9037C67.6698 34.6095 67.6145 34.3272 67.504 34.0539C67.3935 33.7805 67.2364 33.5398 67.0299 33.3318C66.8264 33.1238 66.5908 32.9633 66.3261 32.8504C66.0585 32.7375 65.7793 32.681 65.4914 32.681ZM17.617 32.681C17.3261 32.681 17.0499 32.7375 16.7823 32.8504C16.5176 32.9633 16.282 33.1238 16.0785 33.3318C15.872 33.5398 15.7149 33.7805 15.6044 34.0539C15.4939 34.3272 15.4386 34.6095 15.4386 34.9037C15.4386 35.2009 15.4939 35.4831 15.6044 35.7565C15.7149 36.0269 15.872 36.2676 16.0785 36.4786C16.282 36.6866 16.5176 36.8471 16.7823 36.96C17.0499 37.0729 17.3261 37.1294 17.617 37.1294C17.9049 37.1294 18.1812 37.0729 18.4488 36.96C18.7163 36.8471 18.9519 36.6866 19.1555 36.4786C19.3591 36.2676 19.5161 36.0269 19.6267 35.7565C19.7372 35.4831 19.7924 35.2009 19.7924 34.9037C19.7924 34.6095 19.7372 34.3272 19.6267 34.0539C19.5161 33.7805 19.3591 33.5398 19.1555 33.3318C18.9519 33.1238 18.7163 32.9633 18.4488 32.8504C18.1812 32.7375 17.9049 32.681 17.617 32.681ZM60.1604 43.7974H70.8224C70.7614 43.4854 70.6741 43.1823 70.5607 42.8851C70.4473 42.591 70.3106 42.3057 70.1506 42.0323C69.9906 41.7619 69.8074 41.5034 69.6038 41.2627C69.4002 41.022 69.1763 40.8021 68.9349 40.6001C68.6935 40.401 68.4376 40.2197 68.1671 40.0652C67.8966 39.9077 67.6145 39.777 67.3208 39.67C67.027 39.563 66.7275 39.4828 66.4192 39.4263C66.1138 39.3728 65.8026 39.3461 65.4914 39.3461C65.1802 39.3461 64.8719 39.3728 64.5637 39.4263C64.2583 39.4828 63.9587 39.563 63.665 39.67C63.3712 39.777 63.0891 39.9077 62.8186 40.0652C62.5453 40.2197 62.2893 40.401 62.0479 40.6001C61.8094 40.8021 61.5855 41.022 61.3819 41.2627C61.1783 41.5034 60.9951 41.7619 60.8351 42.0323C60.6723 42.3057 60.5356 42.591 60.4222 42.8851C60.3087 43.1823 60.2215 43.4854 60.1604 43.7974ZM12.2831 43.7974H22.948C22.8869 43.4854 22.7997 43.1823 22.6862 42.8851C22.5728 42.591 22.4361 42.3057 22.2733 42.0323C22.1133 41.7619 21.9301 41.5034 21.7265 41.2627C21.5229 41.022 21.299 40.8021 21.0605 40.6001C20.8191 40.401 20.5631 40.2197 20.2898 40.0652C20.0193 39.9077 19.7372 39.777 19.4434 39.67C19.1497 39.563 18.8501 39.4828 18.5447 39.4263C18.2365 39.3728 17.9282 39.3461 17.617 39.3461C17.3058 39.3461 16.9946 39.3728 16.6892 39.4263C16.3809 39.4828 16.0814 39.563 15.7876 39.67C15.4939 39.777 15.2118 39.9077 14.9413 40.0652C14.6708 40.2197 14.4149 40.401 14.1735 40.6001C13.9321 40.8021 13.7082 41.022 13.5046 41.2627C13.301 41.5034 13.1178 41.7619 12.9578 42.0323C12.7978 42.3057 12.6611 42.591 12.5477 42.8851C12.4343 43.1823 12.347 43.4854 12.2831 43.7974ZM41.5527 57.1394C41.2648 57.1394 40.9885 57.1958 40.721 57.3088C40.4534 57.4217 40.2207 57.5821 40.0142 57.7901C39.8106 57.9981 39.6536 58.2388 39.5431 58.5122C39.4326 58.7856 39.3773 59.0679 39.3773 59.3621C39.3773 59.6562 39.4326 59.9415 39.5431 60.2149C39.6536 60.4853 39.8106 60.726 40.0142 60.934C40.2207 61.142 40.4534 61.3054 40.721 61.4154C40.9885 61.5283 41.2648 61.5847 41.5527 61.5847C41.8436 61.5847 42.1199 61.5283 42.3874 61.4154C42.655 61.3054 42.8877 61.142 43.0942 60.934C43.2978 60.726 43.4548 60.4853 43.5653 60.2149C43.6758 59.9415 43.7311 59.6562 43.7311 59.3621C43.7311 59.0679 43.6758 58.7856 43.5653 58.5122C43.4548 58.2388 43.2978 57.9981 43.0942 57.7901C42.8877 57.5821 42.655 57.4217 42.3874 57.3088C42.1199 57.1958 41.8436 57.1394 41.5527 57.1394ZM36.2217 68.2557H46.8867C46.8227 67.9437 46.7354 67.6406 46.622 67.3435C46.5115 67.0463 46.3719 66.764 46.2119 66.4907C46.052 66.2173 45.8687 65.9617 45.6652 65.7211C45.4616 65.4804 45.2376 65.2605 44.9962 65.0584C44.7548 64.8563 44.4989 64.6781 44.2284 64.5206C43.958 64.3661 43.6758 64.2353 43.3821 64.1283C43.0884 64.0214 42.7888 63.9382 42.4805 63.8847C42.1751 63.8312 41.8668 63.8044 41.5527 63.8044C41.2416 63.8044 40.9333 63.8312 40.6279 63.8847C40.3196 63.9382 40.02 64.0214 39.7263 64.1283C39.4326 64.2353 39.1504 64.3661 38.88 64.5206C38.6095 64.6781 38.3536 64.8563 38.1122 65.0584C37.8708 65.2605 37.6468 65.4804 37.4432 65.7211C37.2397 65.9617 37.0564 66.2173 36.8965 66.4907C36.7365 66.764 36.5969 67.0463 36.4864 67.3435C36.373 67.6406 36.2857 67.9437 36.2217 68.2557ZM47.6254 15.7376C48.1314 16.4151 48.5154 17.158 48.78 17.9662C49.0447 18.7715 49.1755 19.6005 49.1697 20.4533C49.1697 20.5989 49.1436 20.7416 49.0883 20.8783C49.033 21.015 48.9545 21.1338 48.8527 21.2378C48.7509 21.3418 48.6317 21.422 48.4979 21.4785C48.367 21.535 48.2274 21.5647 48.082 21.5647H35.0264C34.881 21.5647 34.7414 21.535 34.6105 21.4785C34.4767 21.422 34.3575 21.3418 34.2557 21.2378C34.1539 21.1338 34.0754 21.015 34.0201 20.8783C33.9648 20.7416 33.9387 20.5989 33.9387 20.4533C33.9358 19.5946 34.0695 18.7596 34.3429 17.9484C34.6163 17.1372 35.0089 16.3943 35.5266 15.7168C33.04 16.4181 30.7337 17.5145 28.6047 19.0062C28.4244 19.1429 28.2208 19.2083 27.9969 19.2083C27.6159 19.2053 27.3193 19.0419 27.104 18.718C27.0226 18.5991 26.9644 18.4654 26.9354 18.3228C26.9034 18.1801 26.9034 18.0345 26.9295 17.8889C26.9557 17.7463 27.0081 17.6126 27.0895 17.4908C27.168 17.366 27.2669 17.2649 27.3861 17.1847C30.5853 14.9204 34.1103 13.503 37.9638 12.9384C37.4607 12.1866 37.2077 11.3576 37.2018 10.4483C37.2018 10.1541 37.2309 9.86591 37.2862 9.58065C37.3414 9.29241 37.4229 9.01607 37.5334 8.74566C37.641 8.47525 37.7777 8.21971 37.9348 7.97604C38.0947 7.73535 38.275 7.50952 38.4757 7.30151C38.6793 7.09648 38.8974 6.91225 39.1359 6.74882C39.3744 6.58836 39.6245 6.45167 39.8892 6.33875C40.1538 6.22583 40.4243 6.14263 40.7064 6.08617C40.9856 6.02972 41.2677 6 41.5527 6C41.8407 6 42.1228 6.02972 42.402 6.08617C42.6841 6.14263 42.9546 6.22583 43.2192 6.33875C43.4839 6.45167 43.734 6.58836 43.9725 6.74882C44.211 6.91225 44.4291 7.09648 44.6327 7.30151C44.8334 7.50952 45.0137 7.73535 45.1736 7.97604C45.3307 8.21971 45.4645 8.47525 45.575 8.74566C45.6855 9.01607 45.767 9.29241 45.8222 9.58065C45.8775 9.86591 45.9066 10.1541 45.9066 10.4483C45.9095 11.3546 45.6623 12.1837 45.1678 12.9384C46.3254 13.1078 47.4654 13.3604 48.5881 13.6932C49.7107 14.026 50.8042 14.439 51.8716 14.9293C52.939 15.4167 53.9685 15.9812 54.9574 16.6171C55.9462 17.253 56.8885 17.9573 57.7843 18.7269C58.6771 19.4965 59.5147 20.3285 60.2942 21.217C61.0736 22.1055 61.792 23.0475 62.4435 24.0399C63.0949 25.0324 63.6766 26.0665 64.1856 27.1392C64.6974 28.2149 65.1337 29.3203 65.4914 30.4584C65.7793 30.4584 66.0615 30.4881 66.3407 30.5445C66.6228 30.601 66.8932 30.6842 67.1579 30.7971C67.4226 30.907 67.6727 31.0467 67.9112 31.2072C68.1467 31.3706 68.3678 31.5548 68.5685 31.7599C68.772 31.9679 68.9524 32.1907 69.1123 32.4344C69.2694 32.6781 69.4032 32.9336 69.5137 33.204C69.6213 33.4744 69.7056 33.7508 69.7609 34.036C69.8161 34.3243 69.8452 34.6125 69.8452 34.9037C69.8423 36.0358 69.473 37.0194 68.7342 37.8633C69.3857 38.1783 69.9819 38.5824 70.5229 39.0727C71.0609 39.563 71.5233 40.1187 71.9102 40.7427C72.2941 41.3667 72.5878 42.0323 72.7856 42.7425C72.9863 43.4497 73.088 44.1718 73.088 44.9117C73.088 45.0573 73.059 45.1999 73.0037 45.3366C72.9484 45.4733 72.8699 45.5922 72.7681 45.6962C72.6663 45.8002 72.55 45.8804 72.4162 45.9369C72.2824 45.9933 72.1428 46.023 72.0003 46.023H65.4914C65.157 47.1106 64.7498 48.1684 64.2728 49.1996C63.7988 50.2307 63.2578 51.2261 62.65 52.1829C62.045 53.1398 61.379 54.052 60.6519 54.9167C59.9248 55.7844 59.1454 56.5956 58.3136 57.3533C57.4789 58.1111 56.6006 58.8123 55.6757 59.4482C54.7509 60.0871 53.7882 60.6576 52.7877 61.1658C51.7873 61.6709 50.7606 62.1048 49.702 62.4702C48.6433 62.8357 47.5672 63.1269 46.4737 63.3439C47.3404 64.0927 48.0093 64.993 48.4804 66.0479C48.9516 67.1028 49.1843 68.2082 49.1697 69.3671C49.1697 69.5157 49.1436 69.6583 49.0883 69.795C49.033 69.9287 48.9545 70.0505 48.8527 70.1545C48.7509 70.2585 48.6317 70.3388 48.4979 70.3952C48.367 70.4517 48.2274 70.4784 48.082 70.4784H35.0264C34.881 70.4784 34.7414 70.4517 34.6105 70.3952C34.4767 70.3388 34.3575 70.2585 34.2557 70.1545C34.1539 70.0505 34.0754 69.9287 34.0201 69.795C33.9648 69.6583 33.9387 69.5157 33.9387 69.3671C33.9416 68.1993 34.1888 67.0879 34.6803 66.0331C35.1718 64.9782 35.8582 64.0808 36.7452 63.3439C35.6488 63.1269 34.5727 62.8357 33.5141 62.4702C32.4583 62.1048 31.4288 61.6709 30.4283 61.1658C29.4278 60.6576 28.4651 60.0871 27.5403 59.4482C26.6154 58.8123 25.7371 58.114 24.9053 57.3533C24.0706 56.5956 23.2912 55.7844 22.5641 54.9167C21.8399 54.052 21.1739 53.1398 20.5661 52.1829C19.9611 51.2261 19.4173 50.2307 18.9432 49.1996C18.4662 48.1684 18.062 47.1106 17.7246 46.023H11.0877C10.9423 46.023 10.8056 45.9933 10.6718 45.9369C10.538 45.8804 10.4188 45.8002 10.317 45.6962C10.2152 45.5922 10.1367 45.4733 10.0814 45.3366C10.0262 45.1999 10 45.0573 10 44.9117C10.0029 44.1748 10.1047 43.4497 10.3054 42.7425C10.5061 42.0353 10.7998 41.3697 11.1837 40.7486C11.5705 40.1246 12.03 39.566 12.5681 39.0757C13.109 38.5854 13.7023 38.1813 14.3509 37.8633C14.0717 37.5424 13.8419 37.1858 13.6645 36.7995C13.4842 36.4103 13.365 36.0032 13.301 35.5782C13.237 35.1533 13.2341 34.7284 13.2893 34.3035C13.3475 33.8785 13.4609 33.4714 13.6354 33.0792C13.807 32.687 14.031 32.3274 14.3044 32.0035C14.5778 31.6767 14.8919 31.4003 15.2467 31.1656C15.5986 30.9338 15.9767 30.7585 16.3809 30.6366C16.7852 30.5178 17.1953 30.4554 17.617 30.4584C18.3732 28.0752 19.4463 25.8525 20.8365 23.7874C20.9209 23.6685 21.0256 23.5704 21.1477 23.4932C21.2699 23.4159 21.4037 23.3624 21.5462 23.3387C21.6887 23.3149 21.8283 23.3179 21.9708 23.3476C22.1104 23.3803 22.2413 23.4367 22.3605 23.5199C22.4798 23.6031 22.5757 23.7071 22.6543 23.8319C22.7299 23.9538 22.7822 24.0875 22.8055 24.2331C22.8317 24.3757 22.8288 24.5213 22.7939 24.6639C22.7619 24.8066 22.7037 24.9373 22.6223 25.0562C21.3949 26.9163 20.4526 28.9191 19.7924 31.0586C20.124 31.2547 20.4235 31.4895 20.694 31.7628C20.9616 32.0392 21.1943 32.3453 21.3833 32.684C21.5753 33.0228 21.7207 33.3793 21.8196 33.7567C21.9184 34.1311 21.9679 34.5144 21.9679 34.9037C21.965 36.0358 21.5956 37.0194 20.8598 37.8633C21.5113 38.1783 22.1104 38.5794 22.6513 39.0697C23.1923 39.5571 23.6576 40.1157 24.0444 40.7397C24.4313 41.3637 24.7279 42.0293 24.9286 42.7395C25.1322 43.4467 25.2311 44.1718 25.234 44.9117C25.234 45.0573 25.2049 45.1999 25.1496 45.3366C25.0944 45.4733 25.0158 45.5922 24.914 45.6962C24.8123 45.8002 24.693 45.8804 24.5621 45.9369C24.4284 45.9933 24.2887 46.023 24.1433 46.023H20.0106C20.3421 46.9947 20.7376 47.9426 21.1943 48.8638C21.6509 49.782 22.1657 50.6675 22.7357 51.5173C23.3086 52.3672 23.9339 53.1754 24.6116 53.9391C25.2892 54.7057 26.0105 55.4219 26.7812 56.0875C27.5519 56.7531 28.3634 57.3652 29.2126 57.9209C30.0618 58.4766 30.946 58.9728 31.8592 59.4096C32.7753 59.8464 33.7147 60.2179 34.6774 60.5269C35.6401 60.8359 36.6202 61.0766 37.6148 61.2519C37.3385 60.6547 37.2018 60.0247 37.2018 59.3621C37.2048 59.0322 37.2455 58.7054 37.3182 58.3844C37.3938 58.0605 37.5014 57.7515 37.6439 57.4544C37.7864 57.1572 37.9609 56.8779 38.1645 56.6223C38.3652 56.3638 38.5949 56.132 38.848 55.927C39.1039 55.719 39.3744 55.5467 39.6681 55.4011C39.959 55.2584 40.2643 55.1485 40.5784 55.0742C40.8955 54.9999 41.2154 54.9643 41.5382 54.9613C41.8639 54.9613 42.1839 54.9969 42.498 55.0683C42.815 55.1396 43.1203 55.2465 43.4141 55.3892C43.7049 55.5288 43.9812 55.7042 44.2342 55.9062C44.4902 56.1112 44.7199 56.3401 44.9264 56.5986C45.13 56.8541 45.3045 57.1305 45.4499 57.4276C45.5954 57.7218 45.7059 58.0308 45.7815 58.3518C45.86 58.6756 45.9007 58.9995 45.9066 59.3323C45.9124 59.6622 45.8804 59.989 45.8164 60.3159C45.7495 60.6398 45.6477 60.9518 45.5139 61.2519C46.5086 61.0766 47.4887 60.8359 48.4514 60.5269C49.414 60.2179 50.3534 59.8434 51.2696 59.4066C52.1828 58.9728 53.064 58.4766 53.9162 57.9179C54.7654 57.3622 55.5739 56.7501 56.3446 56.0845C57.1154 55.4189 57.8395 54.7028 58.5172 53.9391C59.1948 53.1724 59.8201 52.3642 60.3902 51.5173C60.9631 50.6675 61.4779 49.782 61.9345 48.8608C62.3911 47.9426 62.7866 46.9947 63.1211 46.023H58.9651C58.8197 46.023 58.68 45.9933 58.5463 45.9369C58.4125 45.8804 58.2962 45.8002 58.1944 45.6962C58.0926 45.5922 58.014 45.4733 57.9588 45.3366C57.9035 45.1999 57.8744 45.0573 57.8744 44.9117C57.8773 44.1748 57.9791 43.4497 58.1798 42.7425C58.3834 42.0353 58.6742 41.3697 59.061 40.7486C59.4449 40.1246 59.9074 39.566 60.4454 39.0757C60.9835 38.5854 61.5768 38.1813 62.2282 37.8633C62.013 37.6137 61.8298 37.3463 61.6727 37.058C61.5186 36.7698 61.3935 36.4667 61.3034 36.1488C61.2161 35.8308 61.1609 35.5069 61.1405 35.1801C61.1231 34.8502 61.1376 34.5234 61.19 34.1965C61.2423 33.8696 61.3296 33.5546 61.4488 33.2486C61.571 32.9425 61.7222 32.6543 61.9083 32.3839C62.0916 32.1105 62.301 31.8639 62.5394 31.641C62.7779 31.4181 63.0368 31.222 63.316 31.0586C63.0222 30.1434 62.6761 29.249 62.2748 28.3783C61.8734 27.5047 61.4197 26.6638 60.9166 25.8466C60.4134 25.0324 59.8638 24.2509 59.2675 23.5051C58.6713 22.7592 58.0315 22.055 57.3509 21.3894C56.6675 20.7237 55.9491 20.1027 55.1929 19.5292C54.4368 18.9527 53.6486 18.4268 52.8284 17.9513C52.0083 17.4759 51.1649 17.051 50.2953 16.6825C49.4228 16.3111 48.5328 15.9961 47.6254 15.7376Z",fill:"white"})}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.1142 39.3519H51.3482V30.4583H50.2576C50.115 30.4583 49.9754 30.4285 49.8417 30.3721C49.7079 30.3156 49.5915 30.2354 49.4897 30.1314C49.388 30.0274 49.3094 29.9085 49.2542 29.7718C49.1989 29.6352 49.1698 29.4925 49.1698 29.3469V27.5908L46.689 30.1463C46.4709 30.3572 46.2091 30.4612 45.9067 30.4583H36.1142V39.3519ZM33.9388 37.1293V40.4633C33.9388 40.6119 33.9649 40.7515 34.0202 40.8882C34.0755 41.0249 34.154 41.1467 34.2558 41.2507C34.3576 41.3547 34.4768 41.435 34.6106 41.4914C34.7415 41.5479 34.8811 41.5746 35.0265 41.5746H46.9944V46.0229H37.2019C36.8995 46.017 36.6464 46.1299 36.44 46.3558L33.9388 48.8904V47.1343C33.9388 46.9857 33.9097 46.8431 33.8544 46.7094C33.7992 46.5727 33.7206 46.4508 33.6188 46.3468C33.5171 46.2428 33.3978 46.1626 33.2669 46.1061C33.1332 46.0497 32.9936 46.0229 32.8481 46.0229H31.7604V37.1293H33.9388ZM33.9388 34.9036V29.3469C33.9417 29.1984 33.9708 29.0587 34.026 28.925C34.0813 28.7883 34.1598 28.6694 34.2616 28.5654C34.3634 28.4614 34.4797 28.3812 34.6135 28.3247C34.7444 28.2683 34.8811 28.2386 35.0265 28.2356H45.4704L49.4985 24.1201C49.6526 23.9566 49.8387 23.8526 50.0569 23.8081C50.2779 23.7605 50.4902 23.7843 50.6938 23.8764C50.8916 23.9685 51.0486 24.1052 51.1679 24.2894C51.2842 24.4766 51.3453 24.6787 51.3482 24.8986V28.2356H52.4359C52.5784 28.2356 52.718 28.2623 52.8518 28.3188C52.9856 28.3752 53.1019 28.4555 53.2037 28.5595C53.3055 28.6635 53.384 28.7853 53.4393 28.922C53.4946 29.0557 53.5236 29.1984 53.5236 29.3469V40.4633C53.5236 40.6119 53.4946 40.7515 53.4393 40.8882C53.384 41.0249 53.3055 41.1467 53.2037 41.2507C53.1019 41.3547 52.9856 41.435 52.8518 41.4914C52.718 41.5479 52.5784 41.5746 52.4359 41.5746H49.1698V47.1343C49.1698 47.2799 49.1437 47.4225 49.0884 47.5592C49.0331 47.6959 48.9546 47.8148 48.8528 47.9188C48.751 48.0228 48.6318 48.103 48.498 48.1594C48.3671 48.2159 48.2275 48.2456 48.0821 48.2456H37.6586L33.6334 52.3819C33.4094 52.587 33.1506 52.691 32.8481 52.691C32.7114 52.7207 32.5748 52.7207 32.4351 52.691C32.217 52.6018 32.0454 52.4533 31.9204 52.2482C31.7982 52.0432 31.743 51.8203 31.7604 51.5796V48.2456H30.6727C30.5302 48.2456 30.3906 48.2159 30.2568 48.1594C30.123 48.103 30.0067 48.0228 29.9049 47.9188C29.8031 47.8148 29.7246 47.6959 29.6693 47.5592C29.614 47.4225 29.585 47.2799 29.585 47.1343V36.0179C29.5879 35.8694 29.617 35.7297 29.6751 35.596C29.7304 35.4593 29.8089 35.3404 29.9107 35.2364C30.0125 35.1324 30.1288 35.0522 30.2597 34.9957C30.3935 34.9393 30.5302 34.9066 30.6727 34.9036H33.9388Z",fill:"white"}),e.jsx("mask",{id:"mask1_3625_13617",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"75",y:"9",width:"174",height:"60",children:e.jsx("path",{d:"M75.0745 9.646H249V68.2201H75.0745V9.646Z",fill:"white"})}),e.jsxs("g",{mask:"url(#mask1_3625_13617)",children:[e.jsx("mask",{id:"mask2_3625_13617",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"75",y:"9",width:"175",height:"60",children:e.jsx("rect",{x:"75.3955",y:"9.82446",width:"173.606",height:"58.4613",fill:"url(#pattern0)"})}),e.jsx("g",{mask:"url(#mask2_3625_13617)",children:e.jsx("rect",{x:"75.3955",y:"9.82446",width:"173.606",height:"58.4613",fill:"url(#pattern1)"})})]})]}),e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter0_d_3625_13617",x:"0",y:"0",width:"259",height:"84.4785",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e.jsx("feOffset",{dy:"4"}),e.jsx("feGaussianBlur",{stdDeviation:"5"}),e.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),e.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),e.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_3625_13617"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_3625_13617",result:"shape"})]}),e.jsx("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e.jsx("use",{xlinkHref:"#image0_3625_13617",transform:"scale(0.00102041 0.00309598)"})}),e.jsx("pattern",{id:"pattern1",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e.jsx("use",{xlinkHref:"#image1_3625_13617",transform:"scale(0.00102041 0.00309598)"})}),e.jsx("image",{id:"image0_3625_13617",width:"980",height:"323",xlinkHref:"data:image/png;base64,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"}),e.jsx("image",{id:"image1_3625_13617",width:"980",height:"323",xlinkHref:"data:image/png;base64,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"})]})]})}const o3=p.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${r.colors.primary[800]};

  .header-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${r.colors.primary[800]};
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${r.colors.white};
  }

  @media (max-width: 768px) {
    .header-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .user-container {
      /* display: none; */
    }

    .user-name {
      display: none;
    }
  }
`;p.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${r.colors.dark[200]};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${r.colors.tertiary[300]};
  }
`;function r3(){const t=J(),{token:s}=H();return e.jsxs(O,{w:"190",placement:"bottom right",trigger:n=>e.jsx(N,{variant:"solid",_hover:{shadow:"8"},rightIcon:e.jsx(Be,{size:30,color:r.colors.white}),onPress:()=>{},...n}),children:[e.jsx(O.Item,{onPress:()=>t("/"),children:"Feed"}),s&&e.jsx(O.Item,{onPress:()=>t("/profile"),children:"Perfil"}),!s&&e.jsx(O.Item,{onPress:()=>t("/login/logon"),children:"Entrar"})]})}function i3(){const{name:t,token:s}=H(),n=J(),i=F("(max-width: 768px)");function o(a){a.preventDefault(),n("/profile")}function d(a){a.preventDefault(),n("/login/logon")}return e.jsx(o3,{children:e.jsxs("section",{className:"header-container",children:[e.jsx(n3,{}),e.jsxs("div",{className:"user-container",children:[s&&!i&&e.jsx(e.Fragment,{children:e.jsx(N,{onPress:a=>o(a),rightIcon:e.jsx(Fe,{size:"30",color:r.colors.tertiary[300]}),children:i?"":t})}),!s&&!i&&e.jsx(e.Fragment,{children:e.jsx(N,{variant:"solid",bgColor:r.colors.tertiary[500],_hover:{shadow:"8"},rightIcon:e.jsx(Me,{size:30,color:r.colors.white}),onPress:a=>d(a),children:i?"":"Entrar"})}),e.jsx(r3,{})]})]})})}const a3=p.div`
  background: ${r.colors.dark[900]};
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
`;function he(){return e.jsxs(a3,{children:[e.jsx(i3,{}),e.jsx("div",{className:"content",children:e.jsx(ge,{})})]})}const l3=p.div`
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
`;function G(){return e.jsxs("svg",{width:"404",height:"448",viewBox:"0 0 404 448",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M174.519 157.247H250.075V115.315H244.666C243.959 115.315 243.267 115.175 242.604 114.909C241.94 114.643 241.363 114.265 240.858 113.774C240.353 113.284 239.964 112.723 239.69 112.079C239.416 111.435 239.271 110.762 239.271 110.076V101.796L226.967 113.844C225.885 114.839 224.587 115.329 223.087 115.315H174.519V157.247ZM163.73 146.767V162.487C163.73 163.187 163.859 163.845 164.134 164.49C164.408 165.134 164.797 165.709 165.302 166.199C165.807 166.689 166.398 167.068 167.062 167.334C167.711 167.6 168.403 167.726 169.124 167.726H228.482V188.699H179.914C178.414 188.671 177.159 189.203 176.135 190.268L163.73 202.218V193.939C163.73 193.238 163.585 192.566 163.311 191.935C163.037 191.291 162.648 190.716 162.143 190.226C161.638 189.736 161.047 189.357 160.398 189.091C159.734 188.825 159.042 188.699 158.32 188.699H152.926V146.767H163.73ZM163.73 136.274V110.076C163.744 109.375 163.888 108.717 164.162 108.086C164.436 107.442 164.826 106.881 165.331 106.391C165.836 105.901 166.413 105.522 167.076 105.256C167.725 104.99 168.403 104.85 169.124 104.836H220.923L240.901 85.4323C241.666 84.6617 242.589 84.1714 243.671 83.9612C244.767 83.7371 245.82 83.8492 246.83 84.2835C247.811 84.7178 248.59 85.3622 249.181 86.2308C249.758 87.1135 250.061 88.0661 250.075 89.1029V104.836H255.47C256.177 104.836 256.869 104.962 257.533 105.228C258.197 105.494 258.774 105.873 259.278 106.363C259.783 106.853 260.173 107.428 260.447 108.072C260.721 108.703 260.865 109.375 260.865 110.076V162.487C260.865 163.187 260.721 163.845 260.447 164.49C260.173 165.134 259.783 165.709 259.278 166.199C258.774 166.689 258.197 167.068 257.533 167.334C256.869 167.6 256.177 167.726 255.47 167.726H239.271V193.939C239.271 194.625 239.142 195.298 238.868 195.942C238.593 196.587 238.204 197.147 237.699 197.637C237.194 198.128 236.603 198.506 235.939 198.772C235.29 199.038 234.598 199.178 233.877 199.178H182.179L162.215 218.68C161.104 219.647 159.821 220.137 158.32 220.137C157.642 220.277 156.965 220.277 156.272 220.137C155.19 219.717 154.339 219.016 153.719 218.05C153.113 217.083 152.839 216.032 152.926 214.897V199.178H147.531C146.824 199.178 146.132 199.038 145.468 198.772C144.805 198.506 144.228 198.128 143.723 197.637C143.218 197.147 142.828 196.587 142.554 195.942C142.28 195.298 142.136 194.625 142.136 193.939V141.528C142.15 140.827 142.295 140.169 142.583 139.538C142.857 138.894 143.247 138.334 143.752 137.843C144.256 137.353 144.833 136.975 145.483 136.708C146.146 136.442 146.824 136.288 147.531 136.274H163.73Z",fill:"#164E63"}),e.jsx("mask",{id:"mask0_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"45",y:"0",width:"313",height:"304",children:e.jsx("path",{d:"M45 0H358V304H45V0Z",fill:"white"})}),e.jsx("g",{mask:"url(#mask0_3637_13950)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.493 10.4794C200.065 10.4794 198.694 10.7456 197.367 11.2779C196.04 11.8103 194.886 12.5668 193.862 13.5615C192.852 14.5422 192.074 15.677 191.525 16.9519C190.977 18.2408 190.703 19.5718 190.703 20.9728C190.703 22.3597 190.977 23.6907 191.525 24.9796C192.074 26.2685 192.852 27.4033 193.862 28.384C194.886 29.3647 196.04 30.1212 197.367 30.6536C198.694 31.186 200.065 31.4521 201.493 31.4521C202.935 31.4521 204.306 31.186 205.633 30.6536C206.96 30.1212 208.114 29.3647 209.138 28.384C210.148 27.4033 210.926 26.2685 211.475 24.9796C212.023 23.6907 212.297 22.3597 212.297 20.9728C212.297 19.5718 212.023 18.2408 211.475 16.9519C210.926 15.677 210.148 14.5422 209.138 13.5615C208.114 12.5668 206.96 11.8103 205.633 11.2779C204.306 10.7456 202.935 10.4794 201.493 10.4794ZM175.052 62.9043H227.948C227.63 61.4332 227.197 59.9902 226.635 58.6033C226.087 57.2023 225.394 55.8573 224.601 54.5684C223.808 53.2935 222.899 52.0747 221.889 50.9539C220.88 49.8191 219.769 48.7683 218.572 47.8297C217.374 46.877 216.105 46.0364 214.763 45.2939C213.422 44.5514 212.023 43.9349 210.566 43.4306C209.109 42.9262 207.623 42.548 206.094 42.2958C204.58 42.0296 203.051 41.9035 201.493 41.9035C199.949 41.9035 198.42 42.0296 196.906 42.2958C195.377 42.548 193.891 42.9262 192.434 43.4306C190.977 43.9349 189.578 44.5514 188.237 45.2939C186.895 46.0364 185.626 46.877 184.428 47.8297C183.231 48.7683 182.121 49.8191 181.111 50.9539C180.101 52.0747 179.192 53.2935 178.399 54.5684C177.606 55.8573 176.913 57.2023 176.365 58.6033C175.803 59.9902 175.37 61.4332 175.052 62.9043ZM121.09 66.785C121.595 67.2754 121.984 67.8358 122.258 68.4802C122.518 69.1247 122.662 69.7831 122.662 70.4836C122.648 71.1841 122.518 71.8426 122.244 72.487C121.97 73.1315 121.58 73.6919 121.075 74.1822C120.556 74.6726 119.979 75.0508 119.316 75.317C118.667 75.5832 117.974 75.7093 117.253 75.7093C116.546 75.7093 115.854 75.5832 115.19 75.317C114.541 75.0508 113.95 74.6726 113.445 74.1822C112.94 73.6919 112.551 73.1315 112.276 72.487C112.002 71.8426 111.858 71.1841 111.858 70.4836C111.858 69.7831 111.988 69.1247 112.262 68.4802C112.536 67.8358 112.926 67.2754 113.43 66.785C113.935 66.2386 114.541 65.8043 115.234 65.5101C115.926 65.2159 116.662 65.0618 117.426 65.0618C118.176 65.0618 118.912 65.2159 119.604 65.5101C120.297 65.8043 120.902 66.2386 121.407 66.785H121.09ZM320.222 125.795C318.794 125.795 317.424 126.061 316.096 126.593C314.769 127.125 313.601 127.882 312.591 128.863C311.582 129.843 310.803 130.978 310.254 132.267C309.706 133.556 309.432 134.887 309.432 136.274C309.432 137.675 309.706 139.006 310.254 140.295C310.803 141.57 311.582 142.704 312.591 143.699C313.601 144.68 314.769 145.436 316.096 145.969C317.424 146.501 318.794 146.767 320.222 146.767C321.65 146.767 323.035 146.501 324.362 145.969C325.674 145.436 326.843 144.68 327.853 143.699C328.877 142.704 329.656 141.57 330.204 140.295C330.752 139.006 331.026 137.675 331.026 136.274C331.026 134.887 330.752 133.556 330.204 132.267C329.656 130.978 328.877 129.843 327.853 128.863C326.843 127.882 325.674 127.125 324.362 126.593C323.035 126.061 321.65 125.795 320.222 125.795ZM82.7781 125.795C81.3356 125.795 79.9653 126.061 78.6382 126.593C77.3256 127.125 76.1572 127.882 75.1475 128.863C74.1233 129.843 73.3444 130.978 72.7963 132.267C72.2481 133.556 71.9741 134.887 71.9741 136.274C71.9741 137.675 72.2481 139.006 72.7963 140.295C73.3444 141.57 74.1233 142.704 75.1475 143.699C76.1572 144.68 77.3256 145.436 78.6382 145.969C79.9653 146.501 81.3356 146.767 82.7781 146.767C84.2061 146.767 85.5765 146.501 86.9035 145.969C88.2306 145.436 89.399 144.68 90.4087 143.699C91.4185 142.704 92.1974 141.57 92.7455 140.295C93.2937 139.006 93.5677 137.675 93.5677 136.274C93.5677 134.887 93.2937 133.556 92.7455 132.267C92.1974 130.978 91.4185 129.843 90.4087 128.863C89.399 127.882 88.2306 127.125 86.9035 126.593C85.5765 126.061 84.2061 125.795 82.7781 125.795ZM293.782 178.205H346.662C346.359 176.734 345.927 175.305 345.364 173.904C344.801 172.517 344.124 171.173 343.33 169.884C342.537 168.609 341.628 167.39 340.618 166.255C339.609 165.12 338.498 164.084 337.301 163.131C336.103 162.192 334.834 161.338 333.493 160.609C332.151 159.867 330.752 159.25 329.295 158.746C327.838 158.241 326.352 157.863 324.823 157.597C323.309 157.345 321.765 157.219 320.222 157.219C318.678 157.219 317.149 157.345 315.62 157.597C314.106 157.863 312.62 158.241 311.163 158.746C309.706 159.25 308.307 159.867 306.966 160.609C305.61 161.338 304.34 162.192 303.143 163.131C301.96 164.084 300.85 165.12 299.84 166.255C298.83 167.39 297.921 168.609 297.128 169.884C296.32 171.173 295.642 172.517 295.08 173.904C294.517 175.305 294.084 176.734 293.782 178.205ZM56.3233 178.205H109.218C108.916 176.734 108.483 175.305 107.92 173.904C107.358 172.517 106.68 171.173 105.872 169.884C105.079 168.609 104.17 167.39 103.16 166.255C102.15 165.12 101.04 164.084 99.8569 163.131C98.6596 162.192 97.3902 161.338 96.0343 160.609C94.6928 159.867 93.2937 159.25 91.8368 158.746C90.3799 158.241 88.8941 157.863 87.3796 157.597C85.8505 157.345 84.3215 157.219 82.7781 157.219C81.2347 157.219 79.6912 157.345 78.1766 157.597C76.6476 157.863 75.1619 158.241 73.705 158.746C72.2481 159.25 70.8489 159.867 69.5074 160.609C68.166 161.338 66.8966 162.192 65.6993 163.131C64.5021 164.084 63.3914 165.12 62.3817 166.255C61.372 167.39 60.4632 168.609 59.6698 169.884C58.8765 171.173 58.1985 172.517 57.636 173.904C57.0734 175.305 56.6407 176.734 56.3233 178.205ZM201.493 241.11C200.065 241.11 198.694 241.376 197.367 241.908C196.04 242.441 194.886 243.197 193.862 244.178C192.852 245.159 192.074 246.293 191.525 247.582C190.977 248.871 190.703 250.202 190.703 251.589C190.703 252.976 190.977 254.321 191.525 255.61C192.074 256.885 192.852 258.02 193.862 259C194.886 259.981 196.04 260.752 197.367 261.27C198.694 261.802 200.065 262.068 201.493 262.068C202.935 262.068 204.306 261.802 205.633 261.27C206.96 260.752 208.114 259.981 209.138 259C210.148 258.02 210.926 256.885 211.475 255.61C212.023 254.321 212.297 252.976 212.297 251.589C212.297 250.202 212.023 248.871 211.475 247.582C210.926 246.293 210.148 245.159 209.138 244.178C208.114 243.197 206.96 242.441 205.633 241.908C204.306 241.376 202.935 241.11 201.493 241.11ZM175.052 293.521H227.948C227.63 292.05 227.197 290.621 226.635 289.22C226.087 287.819 225.394 286.488 224.601 285.199C223.808 283.91 222.899 282.705 221.889 281.57C220.88 280.435 219.769 279.399 218.572 278.446C217.374 277.493 216.105 276.653 214.763 275.91C213.422 275.182 212.023 274.565 210.566 274.061C209.109 273.557 207.623 273.164 206.094 272.912C204.58 272.66 203.051 272.534 201.493 272.534C199.949 272.534 198.42 272.66 196.906 272.912C195.377 273.164 193.891 273.557 192.434 274.061C190.977 274.565 189.578 275.182 188.237 275.91C186.895 276.653 185.626 277.493 184.428 278.446C183.231 279.399 182.121 280.435 181.111 281.57C180.101 282.705 179.192 283.91 178.399 285.199C177.606 286.488 176.913 287.819 176.365 289.22C175.803 290.621 175.37 292.05 175.052 293.521ZM231.611 45.9103C234.121 49.1046 236.025 52.607 237.338 56.4177C238.651 60.2144 239.3 64.1231 239.271 68.144C239.271 68.8305 239.141 69.5029 238.867 70.1474C238.593 70.7918 238.203 71.3522 237.699 71.8426C237.194 72.3329 236.602 72.7112 235.939 72.9774C235.29 73.2436 234.597 73.3837 233.876 73.3837H169.124C168.403 73.3837 167.71 73.2436 167.061 72.9774C166.398 72.7112 165.806 72.3329 165.301 71.8426C164.797 71.3522 164.407 70.7918 164.133 70.1474C163.859 69.5029 163.729 68.8305 163.729 68.144C163.715 64.0951 164.378 60.1583 165.734 56.3337C167.09 52.509 169.037 49.0065 171.605 45.8122C159.272 49.1186 147.833 54.2882 137.274 61.3212C136.38 61.9656 135.37 62.2738 134.26 62.2738C132.37 62.2598 130.899 61.4893 129.831 59.9622C129.427 59.4018 129.139 58.7714 128.995 58.0989C128.836 57.4264 128.836 56.7399 128.966 56.0535C129.096 55.381 129.355 54.7505 129.759 54.1761C130.149 53.5877 130.639 53.1114 131.23 52.7331C147.098 42.0576 164.58 35.3749 183.693 32.713C181.197 29.1685 179.942 25.2598 179.914 20.9728C179.914 19.5858 180.058 18.2268 180.332 16.8819C180.606 15.5229 181.01 14.22 181.558 12.9451C182.092 11.6702 182.77 10.4654 183.549 9.31656C184.342 8.18176 185.236 7.11701 186.232 6.13632C187.241 5.16964 188.323 4.30103 189.506 3.53049C190.689 2.77395 191.929 2.1295 193.242 1.59713C194.555 1.06475 195.896 0.672473 197.295 0.406285C198.68 0.1401 200.079 0 201.493 0C202.921 0 204.32 0.1401 205.705 0.406285C207.104 0.672473 208.445 1.06475 209.758 1.59713C211.071 2.1295 212.311 2.77395 213.494 3.53049C214.677 4.30103 215.759 5.16964 216.768 6.13632C217.764 7.11701 218.658 8.18176 219.451 9.31656C220.23 10.4654 220.894 11.6702 221.442 12.9451C221.99 14.22 222.394 15.5229 222.668 16.8819C222.942 18.2268 223.086 19.5858 223.086 20.9728C223.101 25.2458 221.875 29.1545 219.423 32.713C225.164 33.5116 230.818 34.7024 236.386 36.2715C241.954 37.8406 247.378 39.788 252.671 42.0996C257.965 44.3973 263.072 47.0591 267.976 50.0572C272.88 53.0553 277.554 56.3757 281.997 60.0042C286.425 63.6328 290.579 67.5556 294.445 71.7445C298.311 75.9334 301.874 80.3746 305.105 85.0539C308.336 89.7332 311.221 94.6086 313.745 99.6662C316.284 104.738 318.448 109.949 320.222 115.315C321.65 115.315 323.049 115.455 324.434 115.721C325.833 115.988 327.175 116.38 328.487 116.912C329.8 117.431 331.04 118.089 332.223 118.846C333.392 119.616 334.488 120.485 335.483 121.451C336.493 122.432 337.387 123.483 338.181 124.632C338.96 125.781 339.623 126.985 340.171 128.26C340.705 129.535 341.123 130.838 341.397 132.183C341.671 133.542 341.816 134.901 341.816 136.274C341.801 141.612 339.969 146.249 336.305 150.228C339.536 151.713 342.494 153.618 345.177 155.93C347.845 158.241 350.139 160.861 352.057 163.803C353.961 166.745 355.418 169.884 356.399 173.232C357.394 176.566 357.899 179.971 357.899 183.459C357.899 184.146 357.755 184.818 357.481 185.463C357.207 186.107 356.817 186.667 356.312 187.158C355.807 187.648 355.23 188.026 354.567 188.293C353.903 188.559 353.211 188.699 352.504 188.699H320.222C318.563 193.826 316.544 198.814 314.178 203.675C311.827 208.537 309.144 213.23 306.129 217.741C303.129 222.252 299.825 226.553 296.219 230.63C292.613 234.721 288.747 238.546 284.622 242.118C280.482 245.691 276.126 248.997 271.539 251.995C266.952 255.008 262.177 257.697 257.215 260.093C252.253 262.475 247.161 264.52 241.911 266.243C236.66 267.967 231.323 269.34 225.899 270.362C230.198 273.893 233.515 278.138 235.852 283.111C238.189 288.085 239.343 293.296 239.271 298.76C239.271 299.461 239.141 300.133 238.867 300.778C238.593 301.408 238.203 301.983 237.699 302.473C237.194 302.963 236.602 303.342 235.939 303.608C235.29 303.874 234.597 304 233.876 304H169.124C168.403 304 167.71 303.874 167.061 303.608C166.398 303.342 165.806 302.963 165.301 302.473C164.797 301.983 164.407 301.408 164.133 300.778C163.859 300.133 163.729 299.461 163.729 298.76C163.744 293.254 164.97 288.015 167.407 283.041C169.845 278.068 173.249 273.837 177.649 270.362C172.211 269.34 166.874 267.967 161.623 266.243C156.387 264.52 151.281 262.475 146.319 260.093C141.357 257.697 136.582 255.008 131.995 251.995C127.408 248.997 123.052 245.705 118.926 242.118C114.786 238.546 110.921 234.721 107.314 230.63C103.723 226.553 100.419 222.252 97.4047 217.741C94.4044 213.23 91.7069 208.537 89.3557 203.675C86.9901 198.814 84.9851 193.826 83.3118 188.699H50.3948C49.6736 188.699 48.9956 188.559 48.3321 188.293C47.6686 188.026 47.0771 187.648 46.5723 187.158C46.0674 186.667 45.678 186.107 45.4039 185.463C45.1298 184.818 45 184.146 45 183.459C45.0144 179.985 45.5193 176.566 46.5146 173.232C47.5099 169.898 48.9668 166.759 50.8708 163.831C52.7893 160.889 55.0684 158.255 57.7369 155.944C60.4199 153.632 63.3626 151.727 66.5792 150.228C65.1945 148.715 64.0549 147.034 63.175 145.212C62.2807 143.377 61.6893 141.458 61.372 139.454C61.0546 137.451 61.0402 135.447 61.3143 133.444C61.6027 131.441 62.1653 129.521 63.0308 127.672C63.8818 125.823 64.9925 124.127 66.3484 122.6C67.7044 121.059 69.2622 119.756 71.022 118.65C72.7674 117.557 74.6426 116.73 76.6476 116.156C78.6527 115.595 80.6865 115.301 82.7781 115.315C86.5285 104.079 91.8512 93.5999 98.7462 83.863C99.1645 83.3026 99.6838 82.8403 100.29 82.4761C100.895 82.1118 101.559 81.8596 102.266 81.7475C102.973 81.6355 103.665 81.6495 104.372 81.7896C105.064 81.9437 105.713 82.2099 106.305 82.6021C106.896 82.9944 107.372 83.4848 107.762 84.0732C108.137 84.6476 108.396 85.278 108.512 85.9645C108.641 86.637 108.627 87.3235 108.454 87.9959C108.295 88.6684 108.007 89.2849 107.603 89.8452C101.516 98.6154 96.8421 108.058 93.5677 118.145C95.2121 119.07 96.6979 120.177 98.0394 121.466C99.3664 122.768 100.52 124.211 101.458 125.809C102.41 127.406 103.131 129.087 103.622 130.866C104.112 132.631 104.357 134.439 104.357 136.274C104.343 141.612 102.511 146.249 98.8616 150.228C102.093 151.713 105.064 153.604 107.747 155.916C110.43 158.213 112.738 160.847 114.657 163.789C116.575 166.731 118.046 169.87 119.042 173.218C120.051 176.552 120.542 179.971 120.556 183.459C120.556 184.146 120.412 184.818 120.138 185.463C119.864 186.107 119.474 186.667 118.969 187.158C118.465 187.648 117.873 188.026 117.224 188.293C116.561 188.559 115.868 188.699 115.147 188.699H94.6496C96.294 193.28 98.2557 197.749 100.52 202.092C102.785 206.421 105.338 210.596 108.165 214.603C111.007 218.61 114.108 222.421 117.469 226.021C120.83 229.636 124.408 233.012 128.23 236.15C132.053 239.288 136.077 242.174 140.289 244.794C144.501 247.414 148.886 249.754 153.416 251.813C157.959 253.873 162.618 255.624 167.393 257.081C172.168 258.538 177.029 259.673 181.962 260.499C180.592 257.683 179.914 254.713 179.914 251.589C179.928 250.034 180.13 248.493 180.491 246.98C180.866 245.453 181.399 243.996 182.106 242.595C182.813 241.194 183.678 239.877 184.688 238.672C185.683 237.453 186.823 236.36 188.078 235.394C189.347 234.413 190.689 233.6 192.146 232.914C193.588 232.241 195.103 231.723 196.661 231.373C198.233 231.023 199.82 230.855 201.421 230.84C203.036 230.84 204.623 231.009 206.181 231.345C207.753 231.681 209.268 232.185 210.725 232.858C212.167 233.516 213.537 234.343 214.792 235.296C216.062 236.262 217.201 237.341 218.225 238.56C219.235 239.765 220.101 241.068 220.822 242.469C221.543 243.856 222.091 245.313 222.466 246.826C222.856 248.353 223.058 249.88 223.086 251.449C223.115 253.004 222.957 254.545 222.639 256.086C222.308 257.613 221.803 259.084 221.139 260.499C226.072 259.673 230.933 258.538 235.708 257.081C240.483 255.624 245.142 253.859 249.685 251.799C254.215 249.754 258.585 247.414 262.812 244.78C267.024 242.16 271.034 239.274 274.856 236.136C278.679 232.998 282.271 229.622 285.632 226.021C288.993 222.407 292.094 218.596 294.921 214.603C297.763 210.596 300.316 206.421 302.581 202.078C304.845 197.749 306.807 193.28 308.466 188.699H287.853C287.132 188.699 286.439 188.559 285.776 188.293C285.112 188.026 284.535 187.648 284.031 187.158C283.526 186.667 283.136 186.107 282.862 185.463C282.588 184.818 282.444 184.146 282.444 183.459C282.458 179.985 282.963 176.566 283.958 173.232C284.968 169.898 286.411 166.759 288.329 163.831C290.233 160.889 292.527 158.255 295.195 155.944C297.864 153.632 300.806 151.727 304.037 150.228C302.97 149.051 302.061 147.79 301.282 146.431C300.518 145.072 299.898 143.643 299.45 142.144C299.018 140.645 298.744 139.118 298.643 137.577C298.556 136.022 298.628 134.481 298.888 132.94C299.148 131.398 299.58 129.913 300.172 128.47C300.778 127.027 301.528 125.668 302.451 124.394C303.36 123.105 304.398 121.942 305.581 120.891C306.764 119.84 308.048 118.916 309.432 118.145C307.975 113.83 306.259 109.613 304.268 105.508C302.278 101.389 300.027 97.4246 297.532 93.5719C295.037 89.7332 292.31 86.0486 289.353 82.5321C286.396 79.0156 283.223 75.6953 279.847 72.5571C276.458 69.4189 272.895 66.4908 269.144 63.7869C265.394 61.069 261.485 58.5892 257.417 56.3477C253.349 54.1061 249.166 52.1027 244.853 50.3655C240.526 48.6142 236.112 47.1292 231.611 45.9103Z",fill:"#164E63"})}),e.jsxs("mask",{id:"mask1_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"315",width:"404",height:"133",children:[e.jsx("path",{d:"M0 315H403.886V447.631H0V315Z",fill:"white"}),e.jsx("path",{d:"M0 315H403.886V447.631H0V315Z",stroke:"white"})]}),e.jsxs("g",{mask:"url(#mask1_3637_13950)",children:[e.jsxs("mask",{id:"mask2_3637_13950",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"315",width:"404",height:"133",children:[e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",fill:"url(#pattern0)"}),e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",stroke:"black"})]}),e.jsxs("g",{mask:"url(#mask2_3637_13950)",children:[e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",fill:"url(#paint0_linear_3637_13950)"}),e.jsx("rect",{x:"0.745361",y:"315.404",width:"403.144",height:"132.375",stroke:"black"})]})]}),e.jsxs("defs",{children:[e.jsx("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e.jsx("use",{xlinkHref:"#image0_3637_13950",transform:"scale(0.00102041 0.00309598)"})}),e.jsxs("linearGradient",{id:"paint0_linear_3637_13950",x1:"202.317",y1:"315.404",x2:"202.317",y2:"447.779",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0.582581",stopColor:"#164E63"}),e.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),e.jsx("image",{id:"image0_3637_13950",width:"980",height:"323",xlinkHref:"data:image/png;base64,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"})]})]})}function c3(){const t=J();function s(o){o.preventDefault(),t("/login/create-account")}function n(o){o.preventDefault(),t("/login")}function i(o){o.preventDefault(),t("/")}return e.jsxs(l3,{children:[e.jsx(G,{}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(N,{onPress:o=>n(o),variant:"outline",size:"lg",children:"Entrar"}),e.jsx(N,{onPress:o=>s(o),variant:"solid",size:"lg",children:"Criar Conta"}),e.jsx(N,{onPress:o=>i(o),variant:"link",size:"lg",children:"Ir para o UnBFórum"})]})]})}const d3=p.div`
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
`,A3=t=>{let s=!0;const n=[],{email:i,password:o}=t;return(!i||i==="")&&(s=!1,n.push("Email Institucional")),(!o||o==="")&&(s=!1,n.push("Senha")),{isValid:s,fieldErrors:n}},u3=async t=>{const{username:s,password:n}=t,i=new FormData;return i.append("username",s),i.append("password",n),await j.post("auth/login",i)},p3=t=>{const{email:s,password:n}=t;return{username:s,password:n}};function h3(){const t=J(),s=Z(),{changeToken:n}=H(),[i,o]=l.useState({email:"",password:""}),[d,a]=l.useState(!1),h=l.useCallback((u,A)=>{o({...i,[u]:A})},[i]);function c(u){u.preventDefault();const{isValid:A,fieldErrors:m}=A3(i);if(!A){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"login-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${m.reduce((C,f,g)=>g===0?`'${f}'`:g===m.length-1?`${C} e '${f}'`:`${C}, '${f}'`,"")}`,status:""})});return}a(!0),u3(p3(i)).then(C=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Bem-vindo ao UnBFórum",description:`Usuário logado com sucesso!
Agora você pode criar tópicos e interagir com eles!`,status:"success"})}),n(C.data.access_token),t("/")}).catch(C=>{s.show({placement:"top-right",render:()=>{let f="";return typeof C.response.data.detail=="object"?f=C.response.data.detail[0].msg.split(", ")[1]:f=C.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${f}`,status:""})}})}).finally(()=>{a(!1)})}return e.jsxs(d3,{children:[e.jsx(G,{}),e.jsxs("div",{className:"buttons-container",children:[e.jsx(R,{name:"email",onChange:h,accessibilityLabel:"Digite o seu email Institucional",inputType:"text",label:"Email Institucional",placeholder:"Digite o email 240014099@unb.br..."}),e.jsx(R,{name:"password",onChange:h,accessibilityLabel:"Senha",inputType:"password",label:"Digite a sua senha",placeholder:"Digite a sua senha"}),e.jsx(N,{onPress:u=>c(u),variant:"solid",size:"lg",isLoading:d,isLoadingText:"Entrando...",children:"Entrar"}),e.jsx(N,{onPress:u=>t(-1),variant:"outline",size:"lg",children:"Voltar"})]})]})}const m3=p.div`
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
`,C3="/assets/create-account-24b27e13.png";function f3(){return e.jsxs(m3,{children:[e.jsx("img",{className:"create-account-image",src:C3,alt:""}),e.jsx("div",{className:"content",children:e.jsx(ge,{})})]})}const x3=p.div`
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
`,g3=[{label:"Aluno",value:"Aluno"},{label:"Coordenador",value:"Coordenador"},{label:"Professor",value:"Professor"},{label:"Secretaria",value:"Secretaria"},{label:"Técnico",value:"Técnico"}],N3=[{label:"Engenharia Aeroespacial",value:"Engenharia Aeroespacial"},{label:"Engenharia Automotiva",value:"Engenharia Automotiva"},{label:"Engenharia de Energia",value:"Engenharia de Energia"},{label:"Engenharia de Software",value:"Engenharia de Software"},{label:"Engenharia Eletrônica",value:"Engenharia Eletrônica"},{label:"Engenharias",value:"Engenharias"}],v3=[{input:"normal",type:"text",name:"name",label:"Nome Completo",placeholder:"Digite o nome completo...",accessibilityLabel:"Digite o nome completo",options:[]},{input:"normal",type:"text",name:"email",label:"Email Institucional",placeholder:"Digite o email 240014099@unb.br...",accessibilityLabel:"Digite o email",options:[]},{input:"select",type:"text",name:"profile",label:"Papel na Instituição",placeholder:"Selecione o seu papel...",accessibilityLabel:"Selecione o seu papel na instituição",options:g3},{input:"select",type:"text",name:"course",label:"Curso",placeholder:"Selecione o seu curso...",accessibilityLabel:"Selecione o seu curso",options:N3},{input:"normal",type:"password",name:"password",label:"Senha",placeholder:"Digite a sua senha...",accessibilityLabel:"Digite a sua senha",options:[]},{input:"normal",type:"password",name:"passwordConfirm",label:"Confirme a senha",placeholder:"Digite a sua senha novamente...",accessibilityLabel:"Digite a sua senha novamente",options:[]}],b3=p.div`
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
    color: ${r.colors.text[500]};

    #required {
      color: ${r.colors.danger[600]};
    }
  }

  svg {
    width: 1.5rem;
  }

  option {
    background-color: ${r.colors.gray[200]};
    color: ${r.colors.black};
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    .create-account-label {
      font-size: ${({fontSize:t})=>Number(t.split("rem")[0])-.2+"rem"};
    }
  }
`;function j3({label:t,placeholder:s,options:n=[],onChange:i,isRequired:o=!0,fontSize:d="0.9rem",isEditing:a=!0,name:h}){return e.jsxs(b3,{fontSize:d,children:[e.jsxs("label",{className:"create-account-label",children:[t,o&&e.jsx("p",{id:"required",children:"*"})]}),e.jsx(ue,{variant:"outline",height:9,size:"md",isDisabled:!a,onValueChange:c=>i(h,c),placeholder:s,accessibilityLabel:"Selecione a opção",children:n.map(c=>e.jsx(ue.Item,{label:c.label,value:c.value},c.label))})]})}const y3=async t=>await j.post("users",t),me=async()=>await j.get("users/me"),w3=async t=>await j.patch("users/me",t),Q3=async t=>await j.post("users/me/change_password",t),D3=async()=>await j.delete("users/me"),k3=t=>{let s=!0;const n=[],{name:i,email:o,profile:d,course:a,password:h,passwordConfirm:c}=t;return(!i||i==="")&&(s=!1,n.push("Nome Completo")),(!o||o==="")&&(s=!1,n.push("Email Institucional")),(!d||d==="")&&(s=!1,n.push("Papel na Instituição")),(!a||a==="")&&(s=!1,n.push("Curso")),(!h||h==="")&&(s=!1,n.push("Senha")),(!c||c===""||c!==h)&&(s=!1,n.push("Confirme a senha")),{isValid:s,fieldErrors:n}},S3=t=>{const{name:s,email:n,profile:i,course:o,password:d}=t;return{name:s,email:n,password:d,tags:[i,o]}};function z3(){const t=J(),s=Z(),n=ne({lg:"lg",base:"md"}),[i,o]=l.useState({name:"",email:"",profile:"",course:"",password:"",passwordConfirm:""}),[d,a]=l.useState(!1),h=l.useCallback((A,m)=>{o({...i,[A]:m})},[i]),c=async A=>{A.preventDefault();const{isValid:m,fieldErrors:C}=k3(i);if(console.log(i),!m){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${C.reduce((f,g,b)=>b===0?`'${g}'`:b===C.length-1?`${f} e '${g}'`:`${f}, '${g}'`,"")}`,status:""})});return}a(!0),y3(S3(i)).then(f=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Estamos quase lá!",description:`Conta criada com sucesso!
Clique em 'Entrar' e faça o seu login na aplicação!`,status:"success"})}),t("/login/logon")}).catch(f=>{s.show({placement:"top-right",render:()=>{let g="";return typeof f.response.data.detail=="object"?g=f.response.data.detail[0].msg.split(", ")[1]:g=f.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${g}`,status:""})}})}).finally(()=>{a(!1)})};function u(A){switch(A.input){case"select":return e.jsx(j3,{label:A.label,placeholder:A.placeholder,options:A.options,name:A.name,onChange:h,accessibilityLabel:A.accessibilityLabel},A.label);default:return e.jsx(R,{label:A.label,placeholder:A.placeholder,inputType:A.type,name:A.name,onChange:h,accessibilityLabel:A.accessibilityLabel},A.label)}}return e.jsxs(x3,{children:[e.jsx(G,{}),e.jsxs("div",{className:"inputs-container",children:[v3.map(A=>u(A)),e.jsx(N,{onPress:A=>c(A),variant:"solid",size:n,isLoading:d,isLoadingText:"Criando usuário...",children:"Criar Conta"}),e.jsx(N,{onPress:A=>t(-1),variant:"outline",size:n,children:"Voltar"})]})]})}const U3=p.section`
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
`,T3=t=>{let s=!0;const n=[];return(!t||t==="")&&(s=!1,n.push("Nome Completo")),{isValid:s,fieldErrors:n}},L3=(t,s)=>{let n=!0;const i=[];let o="";return(!t||t==="")&&(n=!1,i.push("Senha Atual")),(!s||s==="")&&(n=!1,i.push("Nova Senha")),!s&&s===t&&(n=!1,o="Nova senha não pode ser a mesma que a atual"),{isValid:n,fieldErrors:i,specialError:o}},q3=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo sombreado */
  display: flex;
  align-items: center;
  justify-content: center;
`,P3=p.div`
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
    color: ${r.colors.text[800]};
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
`;p.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;const E3=p.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${r.colors.danger[600]};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;function Ce({question:t,handleAccept:s,handleClose:n,cancelText:i="Cancelar",acceptText:o,isOpen:d,isLoadingAcceptButton:a=!1,loadingAcceptButtonText:h=""}){const c=ne({lg:"md",base:"sm"});return e.jsx(e.Fragment,{children:d&&e.jsx(q3,{children:e.jsxs(P3,{children:[e.jsx(E3,{onClick:n,children:e.jsx(te,{size:"21",color:r.colors.primary[50]})}),e.jsx("p",{children:t}),e.jsxs("div",{id:"buttons-dialog-container",children:[e.jsx(N,{size:c,variant:"outline",onPress:n,children:i}),e.jsx(N,{size:c,onPress:s,bgColor:r.colors.danger[500],isLoading:a,isLoadingText:h,children:o})]})]})})})}function V3(){const t=J(),s=Z(),{name:n,email:i,setName:o,logoutUser:d}=H(),a=ne({lg:"lg",base:"md"}),[h,c]=l.useState(!1),[u,A]=l.useState(!1),[m,C]=l.useState(!1),[f,g]=l.useState(!1),[b,T]=l.useState({email:i,id:0,name:n,role:"",tags:[]}),[q,P]=l.useState(!1),[y,k]=l.useState(!1),[x,w]=l.useState(!1),[z,E]=l.useState(""),[M,W]=l.useState("");l.useEffect(()=>{me().then(D=>{T(D.data),o(D.data.name)})},[o]);const Q=l.useCallback((D,U)=>{T({...b,[D]:U})},[b]),I=l.useCallback(()=>{k(!0),D3().then(()=>{}).finally(()=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"delete-user-success",title:"Usuário deletado!",description:"A qualquer momento você poderá criar uma nova conta",status:"success"})}),d(),k(!1),A(!1),t("/")})},[t,d,s]),B=D=>{D.preventDefault();const{fieldErrors:U,isValid:K}=T3(b.name);if(!K){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Os sequintes campos estão incorretos: ${U.reduce((V,S,L)=>L===0?`'${S}'`:L===U.length-1?`${V} e '${S}'`:`${V}, '${S}'`,"")}`,status:""})});return}P(!0),w3({name:b.name}).then(V=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"update-user-success",title:"Usuário atualizado!",description:"",status:"success"})}),o(b.name)}).catch(V=>{s.show({placement:"top-right",render:()=>{let S="";return typeof V.response.data.detail=="object"?S=V.response.data.detail[0].msg.split(", ")[1]:S=V.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${S}`,status:""})}})}).finally(()=>{P(!1),C(!1)})},je=D=>{D.preventDefault();const{fieldErrors:U,isValid:K,specialError:V}=L3(z,M);if(!K){s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:U.length>0?`Os sequintes campos estão incorretos: ${U.reduce((S,L,oe)=>oe===0?`'${L}'`:oe===U.length-1?`${S} e '${L}'`:`${S}, '${L}'`,"")}`:V,status:""})});return}w(!0),Q3({current_password:z,new_password:M}).then(S=>{s.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-user-success",title:"Senha atualizada com sucesso!",description:"",status:"success"})})}).catch(S=>{s.show({placement:"top-right",render:()=>{let L="";return typeof S.response.data.detail=="object"?L=S.response.data.detail[0].msg.split(", ")[1]:L=S.response.data.detail,e.jsx(v,{id:"create-user-error",title:"Campos Inválidos",description:`Erro: ${L}`,status:""})}})}).finally(()=>{w(!1),g(!1),E(""),W("")})},ye=()=>m?e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:"solid",size:a,onPress:()=>{C(!1),me().then(D=>{T(D.data)})},children:"Cancelar"}),e.jsx(N,{variant:"outline",size:a,isLoading:q,isLoadingText:"Atualizando Usuário...",onPress:D=>B(D),children:"Atualizar Usuário"})]}):f?e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:"solid",size:a,onPress:()=>{g(!1),E(""),W("")},children:"Cancelar"}),e.jsx(N,{variant:"outline",size:a,isLoading:x,isLoadingText:"Atualizando Senha...",onPress:D=>je(D),children:"Alterar Senha"})]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:"solid",size:a,onPress:()=>C(!0),children:"Editar Perfil"}),e.jsx(N,{variant:"outline",size:a,onPress:()=>g(!0),children:"Alterar Senha"})]});return e.jsxs(U3,{children:[e.jsx("div",{className:"logo-profile-container",children:e.jsx(G,{})}),e.jsxs("section",{className:"inputs-profile-container",children:[e.jsx("h1",{className:"profile-page-title",children:"Perfil de Usuário"}),e.jsx(R,{name:"name",onChange:Q,isEditing:m,value:b.name,label:"Nome Completo",placeholder:"Digite seu nome completo...",inputType:"text",accessibilityLabel:"Digite o seu nome completo..."}),e.jsx(R,{name:"email",onChange:()=>{},isEditing:!1,value:b.email,label:"Email Institucional",placeholder:"Digite seu nome email...",inputType:"text",accessibilityLabel:"Digite o seu email..."}),e.jsx(R,{name:"password",onChange:(D,U)=>E(U),isEditing:f,value:f?z:"valordeteste",label:f?"Senha Atual":"Senha",placeholder:"Digite sua senha atual...",inputType:"password",accessibilityLabel:"Digite a sua senha..."}),f&&e.jsx(R,{name:"passwordConfirm",onChange:(D,U)=>W(U),label:"Nova Senha",placeholder:"Digite a sua nova senha...",inputType:"password",accessibilityLabel:"Digite a sua nova senha..."}),ye(),!m&&!f&&e.jsxs("div",{className:"sub-buttons-container",children:[e.jsx(N,{variant:"subtle",size:"md",onPress:()=>c(!0),children:"Sair"}),e.jsx(N,{variant:"subtle",size:"md",onPress:()=>A(!0),children:"Deletar a Conta"})]})]}),e.jsx(Ce,{isOpen:h,handleAccept:()=>{c(!1),d(),t("/")},handleClose:()=>c(!1),question:"Tem certeza que deseja sair da aplicação?",acceptText:"Sair do UnBFórum"}),e.jsx(Ce,{isOpen:u,handleAccept:()=>{I()},handleClose:()=>A(!1),question:"Tem certeza que deseja deletar sua conta?",acceptText:"Deletar",isLoadingAcceptButton:y,loadingAcceptButtonText:"Deletando..."})]})}const X3=p.main`
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
`,R3=p.section`
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
`,Z3=p.div`
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
`,H3=p.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`,J3=t=>{let s=!0;const n=[];return(!t||t==="")&&(s=!1,n.push("Comentário")),{isValid:s,fieldErrors:n}},W3=({topicId:t,onCommentCreated:s})=>{const{name:n}=H(),i=Z(),o=F("(max-width: 768px)"),[d,a]=l.useState(""),[h,c]=l.useState(!1);l.useEffect(()=>console.log({comment:d}),[d]);const u=(m,C)=>{a(C)},A=m=>{m.preventDefault();const{isValid:C}=J3(d);if(!C){i.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-comment-error",title:"Campos Inválidos",description:"O comentário não pode ser feito sem conteúdo!",status:""})});return}c(!0),U1(d.trim(),t).then(f=>{a(""),s()}).catch(f=>{i.show({placement:"top-right",render:()=>e.jsx(v,{id:"create-topic-error",title:"Opa",description:"Erro ao criar comentário",status:""})})}).finally(()=>{c(!1)})};return e.jsxs(Z3,{children:[e.jsxs(H3,{children:[e.jsx(se,{bg:"lime.600",marginRight:"0.8rem",size:o?"xs":"sm",children:ve(n)}),e.jsx(be,{name:"content",onChange:u,fontSize:"1.2rem",size:"lg",value:d,isComment:!0,inputType:"text",accessibilityLabel:"Comentário",label:"",placeholder:"Digite o comentário aqui..."})]}),e.jsx(N,{alignSelf:"flex-end",size:o?"sm":"md",rightIcon:e.jsx(Oe,{size:20,color:r.colors.white}),onPress:m=>A(m),isLoading:h,isLoadingText:"Comentando...",children:"Comentar"}),e.jsx($,{})]})};function I3(){const{id:t}=Ge(),{token:s}=H(),[n,i]=l.useState(null),[o,d]=l.useState(!1),[a,h]=l.useState(!1);l.useEffect(()=>window.scrollTo(0,0),[]),l.useEffect(()=>{t&&(d(!0),Q1(Number(t)).then(u=>{i(u.data)}).finally(()=>d(!1)))},[t]);const c=l.useCallback(()=>{n&&(h(!0),T1(n.id).then(u=>{i({...n,comments:u.data})}).finally(()=>{h(!1)}))},[n]);return e.jsx(X3,{children:n?e.jsxs(e.Fragment,{children:[e.jsx(_,{id:Number(n.id),author:n.author.name,title:n.title,categories:n.categories,content:n.content,rating:n.rating,files:n.files,currentRating:n.current_user_rating,isInsideTopic:!0}),e.jsxs(R3,{children:[s&&e.jsx(W3,{topicId:n.id,onCommentCreated:c}),a?e.jsx(ee,{accessibilityLabel:"Carregando os comentários do tópico..."}):e.jsx(e.Fragment,{children:n.comments.map(u=>e.jsx(_,{id:u.id,isComment:!0,topicId:n.id,author:u.author.name,rating:u.rating,currentRating:u.current_user_rating,content:u.content},u.id))})]})]}):e.jsx(ee,{accessibilityLabel:"Carregando dados do tópico..."})})}function B3(){return e.jsxs(Ke,{children:[e.jsxs(X,{path:"/",element:e.jsx(he,{}),children:[e.jsx(X,{path:"/",element:e.jsx(s3,{})}),e.jsx(X,{path:"/topic/:id",element:e.jsx(I3,{})})]}),e.jsx(X,{path:"/profile",element:e.jsx(he,{}),children:e.jsx(X,{path:"/profile",element:e.jsx(V3,{})})}),e.jsxs(X,{path:"/login",element:e.jsx(f3,{}),children:[e.jsx(X,{path:"/login",element:e.jsx(h3,{})}),e.jsx(X,{path:"/login/logon",element:e.jsx(c3,{})}),e.jsx(X,{path:"/login/create-account",element:e.jsx(z3,{})})]})]})}const F3={white:"#FFF","gray-100":"#E1E1E6","gray-300":"#C4C4CC","gray-400":"#8D8D99","gray-500":"#7C7C8A","gray-600":"#323238","gray-700":"#29292E","gray-800":"#202024","gray-900":"#121214","green-300":"#00B37E","green-500":"#00875F","green-700":"#015F43","red-500":"#AB222E","red-700":"#7A1921","yellow-500":"#FBA94C"},M3=Ye`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0  10px ${t=>t.theme["green-500"]};
  }

  body {
    background: ${r.colors.dark[900]};
    color: ${r.colors.black};
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
        color: ${r.colors.tertiary[500]}
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
`;function O3(){const t={get:async()=>{try{return localStorage.getItem("@UnBForum:theme")==="dark"?"dark":"light"}catch(s){return console.log(s),"light"}},set:async s=>{try{localStorage.setItem("@UnBForum:theme",s)}catch(n){console.log(n)}}};return e.jsx($e,{colorModeManager:t,children:e.jsx(_e,{theme:F3,children:e.jsxs(z1,{children:[e.jsx(e1,{children:e.jsx(B3,{})}),e.jsx(M3,{})]})})})}t1.createRoot(document.getElementById("root")).render(e.jsx(s1.StrictMode,{children:e.jsx(O3,{})}));
