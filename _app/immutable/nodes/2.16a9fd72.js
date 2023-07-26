import{s as ee,f as E,a as D,g as w,h as T,d as p,c as V,j as I,i as A,r as y,u as M,v as te,F as ae,o as ne,l as R,m as C,G as j,n as oe,H as z,p as ie,I as ce,x as le}from"../chunks/scheduler.76cd4644.js";import{S as se,i as re,b as F,d as H,m as q,a as L,t as S,e as B,c as ue,g as fe}from"../chunks/index.9dc58b67.js";import{e as G}from"../chunks/each.0173cb17.js";import{I as K,g as O,M as me,b as he,T as X,H as _e}from"../chunks/params.5b481046.js";import{I as U}from"../chunks/Icon.0b06e026.js";import{u as Y,M as de}from"../chunks/MainTitle.29141d90.js";import{i as ve}from"../chunks/index.97b3c5e0.js";function J(l,e,t){const r=l.slice();return r[16]=e[t],r}function Q(l){let e,t,r,c,s,a,f=l[16].name+"",_,k;return{c(){e=E("div"),t=E("img"),s=D(),a=E("span"),_=R(f),k=D(),this.h()},l(d){e=w(d,"DIV",{class:!0});var $=T(e);t=w($,"IMG",{class:!0,src:!0,alt:!0}),s=V($),a=w($,"SPAN",{class:!0});var b=T(a);_=C(b,f),b.forEach(p),k=V($),$.forEach(p),this.h()},h(){I(t,"class","carrousel-item-img svelte-1d4ils5"),j(t.src,r=O(l[16].logo))||I(t,"src",r),I(t,"alt",c=l[16].name),I(a,"class","carrousel-item-label svelte-1d4ils5"),I(e,"class","carrousel-item svelte-1d4ils5")},m(d,$){A(d,e,$),y(e,t),y(e,s),y(e,a),y(a,_),y(e,k)},p(d,$){$&1&&!j(t.src,r=O(d[16].logo))&&I(t,"src",r),$&1&&c!==(c=d[16].name)&&I(t,"alt",c),$&1&&f!==(f=d[16].name+"")&&oe(_,f)},d(d){d&&p(e)}}}function ge(l){let e,t,r,c,s,a,f,_,k,d,$;r=new U({props:{icon:K.LeftArrow,size:"20px",color:"var(--border-hover)"}});let b=G(l[0]),m=[];for(let u=0;u<b.length;u+=1)m[u]=Q(J(l,b,u));return _=new U({props:{icon:K.RightArrow,color:"var(--border-hover)",size:"20px"}}),{c(){e=E("div"),t=E("div"),F(r.$$.fragment),c=D(),s=E("div");for(let u=0;u<m.length;u+=1)m[u].c();a=D(),f=E("div"),F(_.$$.fragment),this.h()},l(u){e=w(u,"DIV",{class:!0});var o=T(e);t=w(o,"DIV",{class:!0});var h=T(t);H(r.$$.fragment,h),h.forEach(p),c=V(o),s=w(o,"DIV",{class:!0});var n=T(s);for(let i=0;i<m.length;i+=1)m[i].l(n);n.forEach(p),a=V(o),f=w(o,"DIV",{class:!0});var v=T(f);H(_.$$.fragment,v),v.forEach(p),o.forEach(p),this.h()},h(){I(t,"class","carrousel-btn svelte-1d4ils5"),I(s,"class","carrousel-content svelte-1d4ils5"),I(f,"class","carrousel-btn svelte-1d4ils5"),I(e,"class","carrousel svelte-1d4ils5")},m(u,o){A(u,e,o),y(e,t),q(r,t,null),y(e,c),y(e,s);for(let h=0;h<m.length;h+=1)m[h]&&m[h].m(s,null);l[11](s),y(e,a),y(e,f),q(_,f,null),k=!0,d||($=[M(t,"click",l[2]),M(t,"keyup",l[8]),M(t,"keydown",l[9]),M(t,"keypress",l[10]),M(f,"click",l[3]),M(f,"keyup",l[5]),M(f,"keydown",l[6]),M(f,"keypress",l[7])],d=!0)},p(u,[o]){if(o&1){b=G(u[0]);let h;for(h=0;h<b.length;h+=1){const n=J(u,b,h);m[h]?m[h].p(n,o):(m[h]=Q(n),m[h].c(),m[h].m(s,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=b.length}},i(u){k||(L(r.$$.fragment,u),L(_.$$.fragment,u),k=!0)},o(u){S(r.$$.fragment,u),S(_.$$.fragment,u),k=!1},d(u){u&&p(e),B(r),te(m,u),l[11](null),B(_),d=!1,ae($)}}}const pe=2e3;function $e(l,e,t){let{items:r=[]}=e,c,s,a=0,f=!0;const _=i=>{i?a<r.length-1?t(4,a=a+1):(t(4,a=a-1),f=!1):a>0?t(4,a=a-1):(t(4,a=a+1),f=!0)},k=i=>{clearTimeout(s),s=setTimeout(()=>{_(i),k(f)},pe)},d=()=>{clearTimeout(s),f=!1,_(!1),k(f)},$=()=>{clearTimeout(s),f=!0,_(!0),k(f)};ne(()=>{k(!0)});function b(i){z.call(this,l,i)}function m(i){z.call(this,l,i)}function u(i){z.call(this,l,i)}function o(i){z.call(this,l,i)}function h(i){z.call(this,l,i)}function n(i){z.call(this,l,i)}function v(i){ie[i?"unshift":"push"](()=>{c=i,t(1,c)})}return l.$$set=i=>{"items"in i&&t(0,r=i.items)},l.$$.update=()=>{l.$$.dirty&18&&c&&c.scroll({left:a*150,behavior:"smooth"})},[r,c,d,$,a,b,m,u,o,h,n,v]}class ke extends se{constructor(e){super(),re(this,e,$e,ge,ee,{items:0})}}function W(l,e,t){const r=l.slice();return r[7]=e[t],r}function be(l){let e,t,r,c;return{c(){e=R(l[3]),t=D(),r=R(l[1]),c=R(",")},l(s){e=C(s,l[3]),t=V(s),r=C(s,l[1]),c=C(s,",")},m(s,a){A(s,e,a),A(s,t,a),A(s,r,a),A(s,c,a)},p:le,d(s){s&&(p(e),p(t),p(r),p(c))}}}function x(l){let e,t,r,c;return t=new U({props:{icon:he(l[7].platform),color:"var(--accent-text)"}}),{c(){e=E("a"),F(t.$$.fragment),r=D(),this.h()},l(s){e=w(s,"A",{class:!0,href:!0,target:!0,rel:!0});var a=T(e);H(t.$$.fragment,a),r=V(a),a.forEach(p),this.h()},h(){I(e,"class","home-social-item svelte-v447v1"),I(e,"href",`${l[6](l[7].link)?"mailto:":""}${l[7].link}`),I(e,"target","_blank"),I(e,"rel","noreferrer")},m(s,a){A(s,e,a),q(t,e,null),y(e,r),c=!0},p:le,i(s){c||(L(t.$$.fragment,s),c=!0)},o(s){S(t.$$.fragment,s),c=!1},d(s){s&&p(e),B(t)}}}function Ie(l){let e,t,r,c,s,a,f,_,k,d,$,b,m;document.title=e=Y(l[4],X),s=new de({props:{classes:"!text-left",$$slots:{default:[be]},$$scope:{ctx:l}}});let u=G(l[2]),o=[];for(let n=0;n<u.length;n+=1)o[n]=x(W(l,u,n));const h=n=>S(o[n],1,1,()=>{o[n]=null});return b=new ke({props:{items:l[5]??me}}),{c(){t=D(),r=E("div"),c=E("div"),F(s.$$.fragment),a=D(),f=E("p"),_=R(l[0]),k=D(),d=E("div");for(let n=0;n<o.length;n+=1)o[n].c();$=D(),F(b.$$.fragment),this.h()},l(n){ce("svelte-gorrxo",document.head).forEach(p),t=V(n),r=w(n,"DIV",{class:!0});var i=T(r);c=w(i,"DIV",{class:!0});var g=T(c);H(s.$$.fragment,g),a=V(g),f=w(g,"P",{class:!0});var P=T(f);_=C(P,l[0]),P.forEach(p),k=V(g),d=w(g,"DIV",{class:!0});var Z=T(d);for(let N=0;N<o.length;N+=1)o[N].l(Z);Z.forEach(p),g.forEach(p),$=V(i),H(b.$$.fragment,i),i.forEach(p),this.h()},h(){I(f,"class","home-subtitle svelte-v447v1"),I(d,"class","home-social svelte-v447v1"),I(c,"class","home-section svelte-v447v1"),I(r,"class","home svelte-v447v1")},m(n,v){A(n,t,v),A(n,r,v),y(r,c),q(s,c,null),y(c,a),y(c,f),y(f,_),y(c,k),y(c,d);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(d,null);y(r,$),q(b,r,null),m=!0},p(n,[v]){(!m||v&16)&&e!==(e=Y(n[4],X))&&(document.title=e);const i={};if(v&1024&&(i.$$scope={dirty:v,ctx:n}),s.$set(i),v&68){u=G(n[2]);let g;for(g=0;g<u.length;g+=1){const P=W(n,u,g);o[g]?(o[g].p(P,v),L(o[g],1)):(o[g]=x(P),o[g].c(),L(o[g],1),o[g].m(d,null))}for(fe(),g=u.length;g<o.length;g+=1)h(g);ue()}},i(n){if(!m){L(s.$$.fragment,n);for(let v=0;v<u.length;v+=1)L(o[v]);L(b.$$.fragment,n),m=!0}},o(n){S(s.$$.fragment,n),o=o.filter(Boolean);for(let v=0;v<o.length;v+=1)S(o[v]);S(b.$$.fragment,n),m=!1},d(n){n&&(p(t),p(r)),B(s),te(o,n),B(b)}}}function ye(l){const{description:e,lastName:t,links:r,name:c,title:s,skills:a}=_e;return[e,t,r,c,s,a,_=>{const k=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!ve(_)&&k.test(_)}]}class Le extends se{constructor(e){super(),re(this,e,ye,Ie,ee,{})}}export{Le as component};
