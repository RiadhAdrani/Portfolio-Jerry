import{s as pe,f as V,g as q,h as B,d as g,j as w,i as S,a as D,l as fe,c as M,m as ue,r as R,n as me,v as ae,o as De}from"../chunks/scheduler.76cd4644.js";import{S as $e,i as ge,b as E,d as P,m as y,a as $,t as v,e as L,g as x,c as ee}from"../chunks/index.9dc58b67.js";import{e as U}from"../chunks/each.0173cb17.js";import{C as he}from"../chunks/Chip.363794a2.js";import{c as Me,g as de}from"../chunks/MainTitle.29141d90.js";import{C as Ve}from"../chunks/Card.9374c405.js";import{C as qe,a as Be}from"../chunks/ChipIcon.68cd9ace.js";import{I as ze}from"../chunks/Icon.0b06e026.js";import{I as Fe,g as ie,M as Re,P as Ye}from"../chunks/params.5b481046.js";import{C as ve}from"../chunks/CardDivider.a8f8f343.js";import{C as Ae}from"../chunks/CardLogo.d3dcdce6.js";import{S as Te}from"../chunks/SearchPage.6b437ab2.js";function Ue(s){let t,n,e;return n=new ze({props:{icon:Fe.Link,size:"17px"}}),{c(){t=V("a"),E(n.$$.fragment),this.h()},l(r){t=q(r,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var o=B(t);P(n.$$.fragment,o),o.forEach(g),this.h()},h(){w(t,"class","card-link svelte-e00lk8"),w(t,"href",s[1]),w(t,"title",s[0]),w(t,"target","_blank"),w(t,"rel","noreferrer"),w(t,"data-help",s[0])},m(r,o){S(r,t,o),y(n,t,null),e=!0},p(r,[o]){(!e||o&2)&&w(t,"href",r[1]),(!e||o&1)&&w(t,"title",r[0]),(!e||o&1)&&w(t,"data-help",r[0])},i(r){e||($(n.$$.fragment,r),e=!0)},o(r){v(n.$$.fragment,r),e=!1},d(r){r&&g(t),L(n)}}}function Je(s,t,n){let{label:e}=t,{to:r}=t;return s.$$set=o=>{"label"in o&&n(0,e=o.label),"to"in o&&n(1,r=o.to)},[e,r]}class Ke extends $e{constructor(t){super(),ge(this,t,Je,Ue,pe,{label:0,to:1})}}function ke(s,t,n){const e=s.slice();return e[5]=t[n],e}function je(s,t,n){const e=s.slice();return e[8]=t[n],e}function be(s){let t,n;return t=new Ke({props:{label:s[8].label??"",to:s[8].to}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.label=e[8].label??""),r&1&&(o.to=e[8].to),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function we(s){let t,n;return t=new he({props:{label:s[1]}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&2&&(o.label=e[1]),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Ce(s){let t,n;return t=new Be({props:{logo:ie(s[5].logo),name:s[5].name}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.logo=ie(e[5].logo)),r&1&&(o.name=e[5].name),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Ne(s){let t,n,e,r,o,u,b,k,p,I,i,f=s[0].type+"",a,h,z,J,te,K,X=s[0].description+"",le,re,F,Y,ce,ne,N,se,A,O;t=new Ae({props:{alt:s[0].name,src:ie(s[0].logo),size:40,radius:"0"}}),r=new qe({props:{title:s[0].name}});let G=U(s[0].links),_=[];for(let l=0;l<G.length;l+=1)_[l]=be(je(s,G,l));const ye=l=>v(_[l],1,1,()=>{_[l]=null});k=new ve({}),Y=new he({props:{label:s[2]}});let j=s[2]!==s[1]&&we(s);N=new ve({});let H=U(s[0].skills),d=[];for(let l=0;l<H.length;l+=1)d[l]=Ce(ke(s,H,l));const Le=l=>v(d[l],1,1,()=>{d[l]=null});return{c(){E(t.$$.fragment),n=D(),e=V("div"),E(r.$$.fragment),o=D(),u=V("div");for(let l=0;l<_.length;l+=1)_[l].c();b=D(),E(k.$$.fragment),p=D(),I=V("div"),i=V("p"),a=fe(f),h=D(),z=V("p"),J=fe(s[3]),te=D(),K=V("p"),le=fe(X),re=D(),F=V("div"),E(Y.$$.fragment),ce=D(),j&&j.c(),ne=D(),E(N.$$.fragment),se=D(),A=V("div");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){P(t.$$.fragment,l),n=M(l),e=q(l,"DIV",{class:!0});var c=B(e);P(r.$$.fragment,c),o=M(c),u=q(c,"DIV",{class:!0});var C=B(u);for(let W=0;W<_.length;W+=1)_[W].l(C);C.forEach(g),c.forEach(g),b=M(l),P(k.$$.fragment,l),p=M(l),I=q(l,"DIV",{class:!0});var Q=B(I);i=q(Q,"P",{class:!0});var Z=B(i);a=ue(Z,f),Z.forEach(g),h=M(Q),z=q(Q,"P",{class:!0});var m=B(z);J=ue(m,s[3]),m.forEach(g),Q.forEach(g),te=M(l),K=q(l,"P",{class:!0});var T=B(K);le=ue(T,X),T.forEach(g),re=M(l),F=q(l,"DIV",{class:!0});var oe=B(F);P(Y.$$.fragment,oe),ce=M(oe),j&&j.l(oe),oe.forEach(g),ne=M(l),P(N.$$.fragment,l),se=M(l),A=q(l,"DIV",{class:!0});var _e=B(A);for(let W=0;W<d.length;W+=1)d[W].l(_e);_e.forEach(g),this.h()},h(){w(u,"class","project-card-links svelte-y9rnwj"),w(e,"class","project-card-top svelte-y9rnwj"),w(i,"class","project-card-type svelte-y9rnwj"),w(z,"class","project-card-period svelte-y9rnwj"),w(I,"class","project-card-mid svelte-y9rnwj"),w(K,"class","project-card-description svelte-y9rnwj"),w(F,"class","project-card-bottom svelte-y9rnwj"),w(A,"class","project-card-technologies svelte-y9rnwj")},m(l,c){y(t,l,c),S(l,n,c),S(l,e,c),y(r,e,null),R(e,o),R(e,u);for(let C=0;C<_.length;C+=1)_[C]&&_[C].m(u,null);S(l,b,c),y(k,l,c),S(l,p,c),S(l,I,c),R(I,i),R(i,a),R(I,h),R(I,z),R(z,J),S(l,te,c),S(l,K,c),R(K,le),S(l,re,c),S(l,F,c),y(Y,F,null),R(F,ce),j&&j.m(F,null),S(l,ne,c),y(N,l,c),S(l,se,c),S(l,A,c);for(let C=0;C<d.length;C+=1)d[C]&&d[C].m(A,null);O=!0},p(l,c){const C={};c&1&&(C.alt=l[0].name),c&1&&(C.src=ie(l[0].logo)),t.$set(C);const Q={};if(c&1&&(Q.title=l[0].name),r.$set(Q),c&1){G=U(l[0].links);let m;for(m=0;m<G.length;m+=1){const T=je(l,G,m);_[m]?(_[m].p(T,c),$(_[m],1)):(_[m]=be(T),_[m].c(),$(_[m],1),_[m].m(u,null))}for(x(),m=G.length;m<_.length;m+=1)ye(m);ee()}(!O||c&1)&&f!==(f=l[0].type+"")&&me(a,f),(!O||c&8)&&me(J,l[3]),(!O||c&1)&&X!==(X=l[0].description+"")&&me(le,X);const Z={};if(c&4&&(Z.label=l[2]),Y.$set(Z),l[2]!==l[1]?j?(j.p(l,c),c&6&&$(j,1)):(j=we(l),j.c(),$(j,1),j.m(F,null)):j&&(x(),v(j,1,1,()=>{j=null}),ee()),c&1){H=U(l[0].skills);let m;for(m=0;m<H.length;m+=1){const T=ke(l,H,m);d[m]?(d[m].p(T,c),$(d[m],1)):(d[m]=Ce(T),d[m].c(),$(d[m],1),d[m].m(A,null))}for(x(),m=H.length;m<d.length;m+=1)Le(m);ee()}},i(l){if(!O){$(t.$$.fragment,l),$(r.$$.fragment,l);for(let c=0;c<G.length;c+=1)$(_[c]);$(k.$$.fragment,l),$(Y.$$.fragment,l),$(j),$(N.$$.fragment,l);for(let c=0;c<H.length;c+=1)$(d[c]);O=!0}},o(l){v(t.$$.fragment,l),v(r.$$.fragment,l),_=_.filter(Boolean);for(let c=0;c<_.length;c+=1)v(_[c]);v(k.$$.fragment,l),v(Y.$$.fragment,l),v(j),v(N.$$.fragment,l),d=d.filter(Boolean);for(let c=0;c<d.length;c+=1)v(d[c]);O=!1},d(l){l&&(g(n),g(e),g(b),g(p),g(I),g(te),g(K),g(re),g(F),g(ne),g(se),g(A)),L(t,l),L(r),ae(_,l),L(k,l),L(Y),j&&j.d(),L(N,l),ae(d,l)}}}function Oe(s){let t,n;return t=new Ve({props:{color:s[0].color,$$slots:{default:[Ne]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&1&&(o.color=e[0].color),r&2063&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Ge(s,t,n){let e,r,o,u,{project:b}=t;return s.$$set=k=>{"project"in k&&n(0,b=k.project)},s.$$.update=()=>{s.$$.dirty&1&&n(4,e=Me(b.period.from,b.period.to)),s.$$.dirty&16&&n(3,r=`${e} month${e>1?"s":""}`),s.$$.dirty&1&&n(2,o=`${de(b.period.from.getMonth())} ${b.period.from.getFullYear()}`),s.$$.dirty&1&&n(1,u=b.period.to?`${de(b.period.to.getMonth())} ${b.period.to.getFullYear()}`:"now")},[b,u,o,r,e]}class He extends $e{constructor(t){super(),ge(this,t,Ge,Oe,pe,{project:0})}}function Se(s,t,n){const e=s.slice();return e[9]=t[n],e}function Ie(s,t,n){const e=s.slice();return e[12]=t[n],e}function Ee(s){let t,n;function e(){return s[6](s[12])}return t=new he({props:{label:s[12].name,active:s[12].isSelected}}),t.$on("click",e),{c(){E(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,o){y(t,r,o),n=!0},p(r,o){s=r;const u={};o&1&&(u.label=s[12].name),o&1&&(u.active=s[12].isSelected),t.$set(u)},i(r){n||($(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){L(t,r)}}}function Pe(s){let t,n;return t=new He({props:{project:s[9]}}),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&2&&(o.project=e[9]),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Qe(s){let t,n,e,r,o=U(s[0]),u=[];for(let i=0;i<o.length;i+=1)u[i]=Ee(Ie(s,o,i));const b=i=>v(u[i],1,1,()=>{u[i]=null});let k=U(s[1]),p=[];for(let i=0;i<k.length;i+=1)p[i]=Pe(Se(s,k,i));const I=i=>v(p[i],1,1,()=>{p[i]=null});return{c(){t=V("div");for(let i=0;i<u.length;i+=1)u[i].c();n=D(),e=V("div");for(let i=0;i<p.length;i+=1)p[i].c();this.h()},l(i){t=q(i,"DIV",{class:!0});var f=B(t);for(let h=0;h<u.length;h+=1)u[h].l(f);f.forEach(g),n=M(i),e=q(i,"DIV",{class:!0});var a=B(e);for(let h=0;h<p.length;h+=1)p[h].l(a);a.forEach(g),this.h()},h(){w(t,"class","projects-filters"),w(e,"class","projects-list mt-5 svelte-f4z73x")},m(i,f){S(i,t,f);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(t,null);S(i,n,f),S(i,e,f);for(let a=0;a<p.length;a+=1)p[a]&&p[a].m(e,null);r=!0},p(i,f){if(f&9){o=U(i[0]);let a;for(a=0;a<o.length;a+=1){const h=Ie(i,o,a);u[a]?(u[a].p(h,f),$(u[a],1)):(u[a]=Ee(h),u[a].c(),$(u[a],1),u[a].m(t,null))}for(x(),a=o.length;a<u.length;a+=1)b(a);ee()}if(f&2){k=U(i[1]);let a;for(a=0;a<k.length;a+=1){const h=Se(i,k,a);p[a]?(p[a].p(h,f),$(p[a],1)):(p[a]=Pe(h),p[a].c(),$(p[a],1),p[a].m(e,null))}for(x(),a=k.length;a<p.length;a+=1)I(a);ee()}},i(i){if(!r){for(let f=0;f<o.length;f+=1)$(u[f]);for(let f=0;f<k.length;f+=1)$(p[f]);r=!0}},o(i){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)v(u[f]);p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)v(p[f]);r=!1},d(i){i&&(g(t),g(n),g(e)),ae(u,i),ae(p,i)}}}function We(s){let t,n;return t=new Te({props:{title:s[2],$$slots:{default:[Qe]},$$scope:{ctx:s}}}),t.$on("search",s[4]),{c(){E(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&32771&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Xe(s,t,n){const{items:e,title:r}=Ye;let o=Re.filter(f=>e.some(a=>a.skills.some(h=>h.slug===f.slug))),u="",b=[];const k=f=>o.some(a=>a.slug===f&&a.isSelected),p=f=>{n(0,o=o.map(a=>(a.slug===f&&(a.isSelected=!k(f)),a)))},I=f=>{n(5,u=f.detail.search)};De(()=>{if(location.search){const h=new URLSearchParams(location.search).get("item");h&&n(5,u=h)}});const i=f=>p(f.slug);return s.$$.update=()=>{s.$$.dirty&33&&n(1,b=e.filter(f=>{const a=o.every(z=>!z.isSelected)||f.skills.some(z=>o.some(J=>J.isSelected&&J.slug===z.slug)),h=u.trim().length===0||f.name.trim().toLowerCase().includes(u.trim().toLowerCase());return a&&h}))},[o,b,r,p,I,u,i]}class ft extends $e{constructor(t){super(),ge(this,t,Xe,We,pe,{})}}export{ft as component};
