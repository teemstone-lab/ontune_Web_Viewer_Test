var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){if(t){const i=d(t,e,n,o);return t[0](i)}}function d(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function c(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function a(t,e,n,o,i,r){if(i){const s=d(e,n,o,r);t.p(s,i)}}function u(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function f(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function w(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let C;function E(t){C=t}const B=[],k=[],N=[],L=[],I=Promise.resolve();let D=!1;function R(t){N.push(t)}const T=new Set;let A=0;function H(){const t=C;do{for(;A<B.length;){const t=B[A];A++,E(t),M(t.$$)}for(E(null),B.length=0,A=0;k.length;)k.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];T.has(e)||(T.add(e),e())}N.length=0}while(B.length);for(;L.length;)L.pop()();D=!1,T.clear(),E(t)}function M(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const P=new Set;function j(t,e){t&&t.i&&(P.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),undefined.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function S(t){t&&t.c()}function W(t,e,o,s){const{fragment:l,after_update:d}=t.$$;l&&l.m(e,o),s||R((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),d.forEach(R)}function O(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(B.push(t),D||(D=!0,I.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,r,s,l,d,c,a=[-1]){const u=C;E(e);const f=e.$$={fragment:null,ctx:[],props:d,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||u.$$.root};c&&c(f.root);let g=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),g&&X(e,t)),n})):[],f.update(),g=!0,i(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&j(e.$$.fragment),W(e,n.target,n.anchor,n.customElement),H()}E(u)}class U{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class V{constructor(t,e="N",n="C",o="",i=0,r=0,s=0,l=0,d=50,c=null,a=null,u=null){this.id=t,this.div_type=e,this.node_type=n,this.node_text=o,this.inset_top=i,this.inset_right=r,this.inset_bottom=s,this.inset_left=l,this.ratio=d,this.p_id=c,this.left=a,this.right=u}}class q{constructor(){this.root=null}insert(t,e,n){console.log("===========insert 1회============");const o=t,i=new V(e,"N","C",o.node_text,o.inset_top,o.inset_right,o.inset_bottom,o.inset_left,50,o.id),r=new V(e+1,"N","C","windows "+(n+1),o.inset_top,o.inset_right,o.inset_bottom,o.inset_left,50,o.id);if(o){let t=(100-(o.inset_left+o.inset_right))/2,e=(100-(o.inset_top+o.inset_bottom))/2;return t>=e?(o.div_type="C",i.inset_right=o.inset_right+t,r.inset_left=o.inset_left+t):(o.div_type="R",i.inset_bottom=o.inset_bottom+e,r.inset_top=o.inset_top+e),o.node_type="P",o.node_text="",o.left=i,o.right=r,[i,r]}return null}change(t,e,n,o,i){console.log("===========change 1회============");const r=t,s=new V(e,"N","C","",0,0,0,0,50,r.id),l=new V(e+1,"N","C","",0,0,0,0,50,r.id);return!0===i?(s.node_text=n.node_text,l.node_text=r.node_text):(s.node_text=r.node_text,l.node_text=n.node_text),r?(r.div_type="L"===o||"R"===o?"C":"R",r.node_type="P",r.node_text="",r.left=s,r.right=l,[s,l]):null}remove(t,e,n){return console.log("===========delete 1회============"),t?e.left.id===n.id?(e.right.p_id=t.id,this.copy_inset(e,e.right),e.right.ratio=e.ratio,t.left.id===e.id?t.left=e.right:t.right=e.right):(e.left.p_id=t.id,this.copy_inset(e,e.left),e.left.ratio=e.ratio,t.left.id===e.id?t.left=e.left:t.right=e.left):e.left.id===n.id?(e.right.p_id=null,this.copy_inset(e,e.right),e.right.ratio=e.ratio):(e.left.p_id=null,this.copy_inset(e,e.left),e.left.ratio=e.ratio),n.node_type="D",e.node_type="D",e.left=null,e.right=null,!1}copy_inset(t,e){e.inset_top=t.inset_top,e.inset_right=t.inset_right,e.inset_bottom=t.inset_bottom,e.inset_left=t.inset_left}resize_div(t){t.forEach((t=>{if("P"===t.node_type){let e=t.left,n=t.right;if(this.copy_inset(t,e),this.copy_inset(t,n),"C"===t.div_type){let o=100-(t.inset_left+t.inset_right);e.inset_right=e.inset_right+o*((100-e.ratio)/100),n.inset_left=n.inset_left+o*((100-n.ratio)/100)}else{let o=100-(t.inset_top+t.inset_bottom);e.inset_bottom=e.inset_bottom+o*((100-e.ratio)/100),n.inset_top=n.inset_top+o*((100-n.ratio)/100)}}}))}}function G(t,e,n){return t*((100-(e+n))/100)}function J(t,e){return t*(e/100)}function F(t,e,n){return t-e<=n?0:t-e>n&&t-e<=2*n?1:2}function K(t,e,n){const o=t.slice();return o[18]=e[n],o}function Q(t){let e,n,o,r,s,l,d,c,a,u,h,x,w,C,E,B,k,N,L,I,D,R=console.log("Root 출력")+"",T=t[18].node_text+"";function A(){return t[13](t[18])}return{c(){e=p(R),n=m(),o=$("div"),l=m(),d=$("div"),c=$("div"),a=$("button"),u=p("추가"),x=m(),w=$("button"),w.textContent="삭제",C=m(),E=$("div"),B=p(T),k=m(),v(o,"class","div_Main_Background"),v(o,"name",r="root_"+t[18].id),v(o,"id",s=t[18].id),v(o,"style","inset: 0%"),v(a,"id",h=t[18].id),v(c,"class","div_Title"),v(c,"style","cursor: default"),v(E,"class","div_Body"),v(d,"class","div_Background"),v(d,"name",N=t[18].id),v(d,"style",L=`inset: ${t[18].inset_top}% ${t[18].inset_right}% ${t[18].inset_bottom}% ${t[18].inset_left}%`)},m(i,r){g(i,e,r),g(i,n,r),g(i,o,r),g(i,l,r),g(i,d,r),f(d,c),f(c,a),f(a,u),f(c,x),f(c,w),f(d,C),f(d,E),f(E,B),f(d,k),I||(D=[y(o,"dragover",t[6]),y(o,"dragend",t[7]),y(o,"dragenter",t[5]),y(a,"click",t[1]),y(w,"click",A),y(d,"dragover",t[6]),y(d,"dragend",t[7]),y(d,"dragenter",t[5])],I=!0)},p(e,n){t=e,1&n&&r!==(r="root_"+t[18].id)&&v(o,"name",r),1&n&&s!==(s=t[18].id)&&v(o,"id",s),1&n&&h!==(h=t[18].id)&&v(a,"id",h),1&n&&T!==(T=t[18].node_text+"")&&b(B,T),1&n&&N!==(N=t[18].id)&&v(d,"name",N),1&n&&L!==(L=`inset: ${t[18].inset_top}% ${t[18].inset_right}% ${t[18].inset_bottom}% ${t[18].inset_left}%`)&&v(d,"style",L)},d(t){t&&_(e),t&&_(n),t&&_(o),t&&_(l),t&&_(d),I=!1,i(D)}}}function Z(t){let e,n,o,i,r,s=null==t[18].p_id&&tt(t),l="C"===t[18].div_type&&et(t),d="R"===t[18].div_type&&nt(t),c="C"===t[18].left.node_type&&ot(t),a="C"===t[18].right.node_type&&it(t);return{c(){s&&s.c(),e=m(),l&&l.c(),n=m(),d&&d.c(),o=m(),c&&c.c(),i=m(),a&&a.c(),r=h()},m(t,u){s&&s.m(t,u),g(t,e,u),l&&l.m(t,u),g(t,n,u),d&&d.m(t,u),g(t,o,u),c&&c.m(t,u),g(t,i,u),a&&a.m(t,u),g(t,r,u)},p(t,u){null==t[18].p_id?s?s.p(t,u):(s=tt(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),"C"===t[18].div_type?l?l.p(t,u):(l=et(t),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),"R"===t[18].div_type?d?d.p(t,u):(d=nt(t),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),"C"===t[18].left.node_type?c?c.p(t,u):(c=ot(t),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),"C"===t[18].right.node_type?a?a.p(t,u):(a=it(t),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},d(t){s&&s.d(t),t&&_(e),l&&l.d(t),t&&_(n),d&&d.d(t),t&&_(o),c&&c.d(t),t&&_(i),a&&a.d(t),t&&_(r)}}}function tt(t){let e,n,o,r,s;return{c(){e=$("div"),v(e,"class","div_Main_Background"),v(e,"name",n="root_"+t[18].id),v(e,"id",o=t[18].id),w(e,"inset","0%")},m(n,o){g(n,e,o),r||(s=[y(e,"dragover",t[6]),y(e,"dragend",t[7]),y(e,"dragenter",t[5])],r=!0)},p(t,i){1&i&&n!==(n="root_"+t[18].id)&&v(e,"name",n),1&i&&o!==(o=t[18].id)&&v(e,"id",o)},d(t){t&&_(e),r=!1,i(s)}}}function et(t){let e,n,o,i,r;return{c(){e=$("div"),v(e,"class","div_Col"),v(e,"name",n=t[18].id),v(e,"draggable","true"),v(e,"style",o=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)},m(n,o){g(n,e,o),i||(r=y(e,"mousedown",t[3]),i=!0)},p(t,i){1&i&&n!==(n=t[18].id)&&v(e,"name",n),1&i&&o!==(o=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)&&v(e,"style",o)},d(t){t&&_(e),i=!1,r()}}}function nt(t){let e,n,o,i,r;return{c(){e=$("div"),v(e,"class","div_Row"),v(e,"name",n=t[18].id),v(e,"draggable","true"),v(e,"style",o=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)},m(n,o){g(n,e,o),i||(r=y(e,"mousedown",t[3]),i=!0)},p(t,i){1&i&&n!==(n=t[18].id)&&v(e,"name",n),1&i&&o!==(o=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)&&v(e,"style",o)},d(t){t&&_(e),i=!1,r()}}}function ot(t){let e,n,o,r,s,l,d,c,a,u,h,x,w,C,E=t[18].left.node_text+"";function B(){return t[11](t[18])}return{c(){e=$("div"),n=$("div"),o=$("button"),r=p("추가"),l=m(),d=$("button"),d.textContent="삭제",c=m(),a=$("div"),u=p(E),v(o,"id",s=t[18].left.id),v(n,"class","div_Title"),v(n,"draggable","true"),v(a,"class","div_Body"),v(e,"class","div_Background"),v(e,"name",h=t[18].left.id),v(e,"style",x=`inset: ${t[18].left.inset_top}% ${t[18].left.inset_right}% ${t[18].left.inset_bottom}% ${t[18].left.inset_left}%`)},m(i,s){g(i,e,s),f(e,n),f(n,o),f(o,r),f(n,l),f(n,d),f(e,c),f(e,a),f(a,u),w||(C=[y(o,"click",t[1]),y(d,"click",B),y(n,"dragstart",t[4]),y(e,"dragover",t[6]),y(e,"dragend",t[7]),y(e,"dragenter",t[5])],w=!0)},p(n,i){t=n,1&i&&s!==(s=t[18].left.id)&&v(o,"id",s),1&i&&E!==(E=t[18].left.node_text+"")&&b(u,E),1&i&&h!==(h=t[18].left.id)&&v(e,"name",h),1&i&&x!==(x=`inset: ${t[18].left.inset_top}% ${t[18].left.inset_right}% ${t[18].left.inset_bottom}% ${t[18].left.inset_left}%`)&&v(e,"style",x)},d(t){t&&_(e),w=!1,i(C)}}}function it(t){let e,n,o,r,s,l,d,c,a,u,h,x,w,C,E,B=t[18].right.node_text+"";function k(){return t[12](t[18])}return{c(){e=$("div"),n=$("div"),o=$("button"),r=p("추가"),l=m(),d=$("button"),d.textContent="삭제",c=m(),a=$("div"),u=p(B),h=m(),v(o,"id",s=t[18].right.id),v(n,"class","div_Title"),v(n,"draggable","true"),v(a,"class","div_Body"),v(e,"class","div_Background"),v(e,"name",x=t[18].right.id),v(e,"style",w=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)},m(i,s){g(i,e,s),f(e,n),f(n,o),f(o,r),f(n,l),f(n,d),f(e,c),f(e,a),f(a,u),f(e,h),C||(E=[y(o,"click",t[1]),y(d,"click",k),y(n,"dragstart",t[4]),y(e,"dragover",t[6]),y(e,"dragend",t[7]),y(e,"dragenter",t[5])],C=!0)},p(n,i){t=n,1&i&&s!==(s=t[18].right.id)&&v(o,"id",s),1&i&&B!==(B=t[18].right.node_text+"")&&b(u,B),1&i&&x!==(x=t[18].right.id)&&v(e,"name",x),1&i&&w!==(w=`inset: ${t[18].right.inset_top}% ${t[18].right.inset_right}% ${t[18].right.inset_bottom}% ${t[18].right.inset_left}%`)&&v(e,"style",w)},d(t){t&&_(e),C=!1,i(E)}}}function rt(t){let e,n,o,i=console.log(t[18].node_type)+"";function r(t,e){return"P"==t[18].node_type?Z:"N"===t[18].div_type&&"D"!==t[18].node_type&&null==t[18].p_id?Q:void 0}let s=r(t),l=s&&s(t);return{c(){e=p(i),n=m(),l&&l.c(),o=h()},m(t,i){g(t,e,i),g(t,n,i),l&&l.m(t,i),g(t,o,i)},p(t,n){1&n&&i!==(i=console.log(t[18].node_type)+"")&&b(e,i),s===(s=r(t))&&l?l.p(t,n):(l&&l.d(1),l=s&&s(t),l&&(l.c(),l.m(o.parentNode,o)))},d(t){t&&_(e),t&&_(n),l&&l.d(t),t&&_(o)}}}function st(e){let n,o,i,r=console.log("반복문 진행")+"",s=e[0],l=[];for(let t=0;t<s.length;t+=1)l[t]=rt(K(e,s,t));return{c(){n=p(r),o=m();for(let t=0;t<l.length;t+=1)l[t].c();i=h()},m(t,e){g(t,n,e),g(t,o,e);for(let n=0;n<l.length;n+=1)l[n].m(t,e);g(t,i,e)},p(t,[e]){if(255&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const o=K(t,s,n);l[n]?l[n].p(o,e):(l[n]=rt(o),l[n].c(),l[n].m(i.parentNode,i))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},i:t,o:t,d(t){t&&_(n),t&&_(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(l,t),t&&_(i)}}}function lt(t,e,n){let{bst:o}=e,{idx:i}=e,{node_text_idx:r}=e,{arr:s}=e,l=null,d="N",c=!1,a=-1;const u=t=>{if(null===s[t.id].p_id)return!1;console.log("===========DIV 삭제==========="),s[s[s[t.id].p_id].p_id]?o.remove(s[s[s[t.id].p_id].p_id],s[s[t.id].p_id],s[t.id]):o.remove(null,s[s[t.id].p_id],s[t.id]),o.resize_div(s),n(0,s=[...s]),console.log(s)};null==o.root&&(console.log("===========Root 생성==========="),o.root=new V(i,"N","C","windows "+(r+1),0,0,0,0,100),s=[o.root],r+=1,console.log(s),console.log("------------Mosaic.svelte"));return t.$$set=t=>{"bst"in t&&n(8,o=t.bst),"idx"in t&&n(9,i=t.idx),"node_text_idx"in t&&n(10,r=t.node_text_idx),"arr"in t&&n(0,s=t.arr)},[s,t=>{console.log("===========DIV 추가===========");const e=o.insert(s[t.target.id],s.length,r);e&&(n(9,i+=2),n(10,r+=1),n(0,s=[...s,e[0],e[1]])),console.log(s)},u,t=>{l=null,console.log("==============Bar Down=============");const e=t.target;function i(t){console.log("============Bar Drag Start===========")}function r(e){if(console.log("==============Bar Drag============="),e.preventDefault(),e.x>0||e.y>0){let i=s[parseInt(t.target.getAttribute("name"))],r=i.left,l=i.right,d=document.getElementById("div_tree").offsetWidth,c=document.getElementById("div_mosaic_menubar").offsetHeight,a=t.target.parentElement.offsetWidth,u=t.target.parentElement.offsetHeight;"C"===i.div_type?r.ratio=(e.clientX-d-i.inset_left*(a/100))/G(a,i.inset_left,i.inset_right)*100:r.ratio=(e.clientY-c-i.inset_top*(u/100))/G(u,i.inset_top,i.inset_bottom)*100,r.ratio<15?r.ratio=15:r.ratio>85&&(r.ratio=85),l.ratio=100-r.ratio,o.resize_div(s),n(0,s=[...s])}}e.addEventListener("dragstart",i),e.addEventListener("drag",r),e.addEventListener("dragend",(function t(){console.log("==============Bar Up============="),e.removeEventListener("dragstart",i),e.removeEventListener("drag",r),e.removeEventListener("dragend",t),console.log(s)}))},t=>{console.log("==============Div Drag Start============="),l=s[parseInt(t.target.parentElement.getAttribute("name"))],d="N",c=!1,a=parseInt(t.target.parentElement.getAttribute("name"));let e=null,n=null,i=null,r=null;null!==l.p_id&&(e=s[l.p_id],e.left.id===l.id?(n=e.right,i=e.left):(n=e.left,i=e.right),o.copy_inset(e,n),n.ratio=100,i.ratio=0,r=document.getElementsByName(n.id),r[0].style.inset=`${e.inset_top}% ${e.inset_right}% ${e.inset_bottom}% ${e.inset_left}%`,r=document.getElementsByName(e.id),r[0].style.display="none",r=document.getElementsByName(l.id),r[0].style.zIndex=2,r[0].style.opacity=0)},t=>{if(null===l)return!1;if(console.log("==============Div enter============="),-1!==a||a!==l.id){document.getElementsByName(l.id)[0].style.zIndex=0}s.forEach((t=>{if("P"===t.node_type){let e=t.left,n=t.right;if(o.copy_inset(t,e),o.copy_inset(t,n),"C"===t.div_type){let o=100-(t.inset_left+t.inset_right);e.inset_right=e.inset_right+o*((100-e.ratio)/100),n.inset_left=n.inset_left+o*((100-n.ratio)/100)}else{let o=100-(t.inset_top+t.inset_bottom);e.inset_bottom=e.inset_bottom+o*((100-e.ratio)/100),n.inset_top=n.inset_top+o*((100-n.ratio)/100)}}})),console.log("inset 재계산 이후"),console.log(s);let e=null;s.forEach((t=>{"C"===t.node_type?(e=document.getElementsByName(t.id),e[0].style.inset=`${t.inset_top}% ${t.inset_right}% ${t.inset_bottom}% ${t.inset_left}%`):"P"===t.node_type&&(e=document.getElementsByName(t.id),e[0].style.inset=`${t.right.inset_top}% ${t.right.inset_right}% ${t.right.inset_bottom}% ${t.right.inset_left}%`)})),a="root"===t.target.parentElement.getAttribute("name")?parseInt(t.target.id):parseInt(t.target.parentElement.getAttribute("name"))},t=>{if(null===l)return!1;console.log("==============Drag Over============="),t.preventDefault(),t.dataTransfer.dropEffect="move";let e=document.getElementById("shadow"),n=null;n="root"===t.target.parentElement.getAttribute("name")?s[parseInt(t.target.id)]:s[parseInt(t.target.parentElement.getAttribute("name"))],console.log(n);let o=document.getElementById("div_tree").offsetWidth,i=document.getElementById("div_mosaic_menubar").offsetHeight,r=document.getElementById("div_mosaic_body").offsetWidth,a=document.getElementById("div_mosaic_body").offsetHeight,u=J(r,n.inset_left),f=J(a,n.inset_top),g=.33*G(r,n.inset_left,n.inset_right),_=.33*G(a,n.inset_top,n.inset_bottom),$=function(t,e){switch(t){case 0:switch(e){case 0:return"LT";case 1:return"L";case 2:return"LB";default:return"N"}case 1:switch(e){case 0:return"T";case 1:default:return"N";case 2:return"B"}case 2:switch(e){case 0:return"RT";case 1:return"R";case 2:return"RB";default:return"N"}default:return"N"}}(F(t.clientX-o,u,g),F(t.clientY-i,f,_));switch("LT"===$?"T"!==d&&(d="L"):"RT"===$?"T"!==d&&(d="R"):"LB"===$?"B"!==d&&(d="L"):"RB"===$?"B"!==d&&(d="R"):d=$,c="L"===$||"T"===$,d){case"T":e.style.inset=`${n.inset_top}% ${n.inset_right}% ${n.inset_bottom+(100-(n.inset_top+n.inset_bottom))/2}% ${n.inset_left}%`;break;case"R":e.style.inset=`${n.inset_top}% ${n.inset_right}% ${n.inset_bottom}% ${n.inset_left+(100-(n.inset_left+n.inset_right))/2}%`;break;case"B":e.style.inset=`${n.inset_top+(100-(n.inset_top+n.inset_bottom))/2}% ${n.inset_right}% ${n.inset_bottom}% ${n.inset_left}%`;break;case"L":e.style.inset=`${n.inset_top}% ${n.inset_right+(100-(n.inset_left+n.inset_right))/2}% ${n.inset_bottom}% ${n.inset_left}%`}e.style.display="block",e.style.zIndex=100},t=>{if(null===l)return!1;let e=document.getElementById("shadow");if(console.log("DragEnd"),e.style.display="none",e.style.zIndex=-1,console.log("==============Drop============="),console.log("Node id = "+a),l.id!==a){const t=o.change(s[a],s.length,l,d,c);t&&(n(9,i+=2),s.push(t[0]),s.push(t[1])),s[s[s[l.id].p_id].p_id]?o.remove(s[s[s[l.id].p_id].p_id],s[s[l.id].p_id],s[l.id]):o.remove(null,s[s[l.id].p_id],s[l.id]),o.resize_div(s),console.log("==============Drop after Log============="),console.log(l),console.log(d),console.log(c),console.log(s),n(0,s=[...s])}l=null,d="N",c=!1,a=-1},o,i,r,t=>{u(t.left)},t=>{u(t.right)},t=>{u(t)}]}class dt extends U{constructor(t){super(),Y(this,t,lt,st,s,{bst:8,idx:9,node_text_idx:10,arr:0})}}function ct(t){let e,n,o;const i=t[1].default,r=l(i,t,t[0],null);return{c(){e=$("li"),n=$("span"),r&&r.c(),v(n,"class","tree_label svelte-jkcblv"),v(e,"class","svelte-jkcblv")},m(t,i){g(t,e,i),f(e,n),r&&r.m(n,null),o=!0},p(t,[e]){r&&r.p&&(!o||1&e)&&a(r,i,t,t[0],o?c(i,t[0],e,null):u(t[0]),null)},i(t){o||(j(r,t),o=!0)},o(t){z(r,t),o=!1},d(t){t&&_(e),r&&r.d(t)}}}function at(t,e,n){let{$$slots:o={},$$scope:i}=e;return t.$$set=t=>{"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}class ut extends U{constructor(t){super(),Y(this,t,at,ct,s,{})}}const ft=t=>({}),gt=t=>({}),_t=t=>({}),$t=t=>({});function pt(t){let e;return{c(){e=p("Leaf element missing")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function mt(t){let e;return{c(){e=p("Leaf element missing")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function ht(t){let e;const n=t[3].default,o=l(n,t,t[4],null),i=o||function(t){let e,n,o,i;return e=new ut({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),o=new ut({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=m(),S(o.$$.fragment)},m(t,r){W(e,t,r),g(t,n,r),W(o,t,r),i=!0},p(t,n){const i={};16&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){i||(j(e.$$.fragment,t),j(o.$$.fragment,t),i=!0)},o(t){z(e.$$.fragment,t),z(o.$$.fragment,t),i=!1},d(t){O(e,t),t&&_(n),O(o,t)}}}(t);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||16&i)&&a(o,n,t,t[4],e?c(n,t[4],i,null):u(t[4]),null)},i(t){e||(j(i,t),e=!0)},o(t){z(i,t),e=!1},d(t){i&&i.d(t)}}}function yt(t){let e,n,o,i,r,s,d,h;const y=t[3].root,x=l(y,t,t[4],$t),w=x||function(t){let e;return{c(){e=p(t[0])},m(t,n){g(t,e,n)},p(t,n){1&n&&b(e,t[0])},d(t){t&&_(e)}}}(t),C=t[3].children,E=l(C,t,t[4],gt),B=E||ht(t);return{c(){e=$("li"),n=$("input"),i=m(),r=$("label"),w&&w.c(),s=m(),d=$("ul"),B&&B.c(),v(n,"type","checkbox"),n.checked=o=!t[1],v(n,"id",t[2]),v(n,"class","svelte-w9a0gk"),v(r,"class","tree_label svelte-w9a0gk"),v(r,"for",t[2]),v(d,"class","svelte-w9a0gk"),v(e,"class","svelte-w9a0gk")},m(t,o){g(t,e,o),f(e,n),f(e,i),f(e,r),w&&w.m(r,null),f(e,s),f(e,d),B&&B.m(d,null),h=!0},p(t,[e]){(!h||2&e&&o!==(o=!t[1]))&&(n.checked=o),x?x.p&&(!h||16&e)&&a(x,y,t,t[4],h?c(y,t[4],e,_t):u(t[4]),$t):w&&w.p&&(!h||1&e)&&w.p(t,h?e:-1),E?E.p&&(!h||16&e)&&a(E,C,t,t[4],h?c(C,t[4],e,ft):u(t[4]),gt):B&&B.p&&(!h||16&e)&&B.p(t,h?e:-1)},i(t){h||(j(w,t),j(B,t),h=!0)},o(t){z(w,t),z(B,t),h=!1},d(t){t&&_(e),w&&w.d(t),B&&B.d(t)}}}let vt=0;function bt(t,e,n){let{$$slots:o={},$$scope:i}=e,{rootContent:r="Root element missing"}=e,{defaultClosed:s=!1}=e,l="input_"+vt++;return t.$$set=t=>{"rootContent"in t&&n(0,r=t.rootContent),"defaultClosed"in t&&n(1,s=t.defaultClosed),"$$scope"in t&&n(4,i=t.$$scope)},[r,s,l,o,i]}class xt extends U{constructor(t){super(),Y(this,t,bt,yt,s,{rootContent:0,defaultClosed:1})}}function wt(t){let e,n;const o=t[5].default,i=l(o,t,t[4],null);return{c(){e=$("ul"),i&&i.c(),v(e,"class","tree svelte-1j92d55"),w(e,"--line-color",t[0]),w(e,"--icon-background-color",t[1]),w(e,"--icon-color",t[2]),w(e,"--branch-hover-color",t[3])},m(t,o){g(t,e,o),i&&i.m(e,null),n=!0},p(t,[r]){i&&i.p&&(!n||16&r)&&a(i,o,t,t[4],n?c(o,t[4],r,null):u(t[4]),null),(!n||1&r)&&w(e,"--line-color",t[0]),(!n||2&r)&&w(e,"--icon-background-color",t[1]),(!n||4&r)&&w(e,"--icon-color",t[2]),(!n||8&r)&&w(e,"--branch-hover-color",t[3])},i(t){n||(j(i,t),n=!0)},o(t){z(i,t),n=!1},d(t){t&&_(e),i&&i.d(t)}}}function Ct(t,e,n){let{$$slots:o={},$$scope:i}=e,{lineColor:r="#e7e7e7"}=e,{iconBackgroundColor:s="#ffffff"}=e,{iconColor:l="#c2c2c2"}=e,{branchHoverColor:d="#cccccc"}=e;return t.$$set=t=>{"lineColor"in t&&n(0,r=t.lineColor),"iconBackgroundColor"in t&&n(1,s=t.iconBackgroundColor),"iconColor"in t&&n(2,l=t.iconColor),"branchHoverColor"in t&&n(3,d=t.branchHoverColor),"$$scope"in t&&n(4,i=t.$$scope)},[r,s,l,d,i,o]}class Et extends U{constructor(t){super(),Y(this,t,Ct,wt,s,{lineColor:0,iconBackgroundColor:1,iconColor:2,branchHoverColor:3})}}function Bt(t){let e;return{c(){e=p("Linux1")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function kt(t){let e;return{c(){e=p("Linux1")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Nt(t){let e;return{c(){e=p("C#")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Lt(t){let e,n,o,i,r,s;return e=new ut({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),o=new ut({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),r=new ut({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=m(),S(o.$$.fragment),i=m(),S(r.$$.fragment)},m(t,l){W(e,t,l),g(t,n,l),W(o,t,l),g(t,i,l),W(r,t,l),s=!0},p(t,n){const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const s={};8&n&&(s.$$scope={dirty:n,ctx:t}),o.$set(s);const l={};8&n&&(l.$$scope={dirty:n,ctx:t}),r.$set(l)},i(t){s||(j(e.$$.fragment,t),j(o.$$.fragment,t),j(r.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),z(o.$$.fragment,t),z(r.$$.fragment,t),s=!1},d(t){O(e,t),t&&_(n),O(o,t),t&&_(i),O(r,t)}}}function It(t){let e;return{c(){e=p("Svelte")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Dt(t){let e;return{c(){e=p("React")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Rt(t){let e,n,o,i;return e=new ut({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),o=new ut({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=m(),S(o.$$.fragment)},m(t,r){W(e,t,r),g(t,n,r),W(o,t,r),i=!0},p(t,n){const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){i||(j(e.$$.fragment,t),j(o.$$.fragment,t),i=!0)},o(t){z(e.$$.fragment,t),z(o.$$.fragment,t),i=!1},d(t){O(e,t),t&&_(n),O(o,t)}}}function Tt(t){let e,n,o,i;return e=new xt({props:{rootContent:"Linux",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),o=new xt({props:{rootContent:"Windows",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=m(),S(o.$$.fragment)},m(t,r){W(e,t,r),g(t,n,r),W(o,t,r),i=!0},p(t,n){const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){i||(j(e.$$.fragment,t),j(o.$$.fragment,t),i=!0)},o(t){z(e.$$.fragment,t),z(o.$$.fragment,t),i=!1},d(t){O(e,t),t&&_(n),O(o,t)}}}function At(t){let e,n,o,r,s,l,d,c;return s=new Et({props:{lineColor:"white",iconColor:"black",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){e=$("button"),e.textContent="asign",n=m(),o=$("input"),r=m(),S(s.$$.fragment),v(o,"type","text")},m(i,a){g(i,e,a),g(i,n,a),g(i,o,a),x(o,t[0]),g(i,r,a),W(s,i,a),l=!0,d||(c=[y(e,"click",t[1]),y(o,"input",t[2])],d=!0)},p(t,[e]){1&e&&o.value!==t[0]&&x(o,t[0]);const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){l||(j(s.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),l=!1},d(t){t&&_(e),t&&_(n),t&&_(o),t&&_(r),O(s,t),d=!1,i(c)}}}function Ht(t,e,n){let o="world";return[o,function(){n(0,o="test")},function(){o=this.value,n(0,o)}]}class Mt extends U{constructor(t){super(),Y(this,t,Ht,At,s,{})}}function Pt(t){let n,o,r,s,l,d,c,a,u,h,b,x,w,C,E,B,k,N,L;r=new Mt({});const I=[t[0]];let D={};for(let t=0;t<I.length;t+=1)D=e(D,I[t]);return C=new dt({props:D}),{c(){n=$("div"),o=p("Tree Area\r\n  "),S(r.$$.fragment),s=m(),l=$("div"),d=m(),c=$("div"),a=$("div"),a.textContent="Jennifer Area",u=m(),h=$("div"),b=$("div"),x=$("div"),w=m(),S(C.$$.fragment),E=m(),B=$("div"),B.innerHTML='<div id="div_grid_body">Grid Area</div>',v(n,"id","div_tree"),v(l,"id","main_Col"),v(l,"draggable","true"),v(a,"id","div_mosaic_menubar"),v(x,"id","shadow"),v(x,"class","div_Shadow"),v(x,"draggable","true"),v(b,"id","div_mosaic_body"),v(h,"id","div_mosaic_main"),v(B,"id","div_grid_main"),v(c,"id","div_mosaic")},m(e,i){g(e,n,i),f(n,o),W(r,n,null),g(e,s,i),g(e,l,i),g(e,d,i),g(e,c,i),f(c,a),f(c,u),f(c,h),f(h,b),f(b,x),f(b,w),W(C,b,null),f(c,E),f(c,B),k=!0,N||(L=[y(l,"mousedown",jt),y(x,"dragover",t[1])],N=!0)},p(t,[e]){const n=1&e?function(t,e){const n={},o={},i={$$scope:1};let r=t.length;for(;r--;){const s=t[r],l=e[r];if(l){for(const t in s)t in l||(o[t]=1);for(const t in l)i[t]||(n[t]=l[t],i[t]=1);t[r]=l}else for(const t in s)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(I,[(o=t[0],"object"==typeof o&&null!==o?o:{})]):{};var o;C.$set(n)},i(t){k||(j(r.$$.fragment,t),j(C.$$.fragment,t),k=!0)},o(t){z(r.$$.fragment,t),z(C.$$.fragment,t),k=!1},d(t){t&&_(n),O(r),t&&_(s),t&&_(l),t&&_(d),t&&_(c),O(C),N=!1,i(L)}}}function jt(t){console.log("============Main Bar Down===========");let e=t.target;function n(t){console.log("==========Main Bar Drag Start=========")}function o(t){if(console.log("===========Main Bar Drag==========="),t.preventDefault(),t.x>0||t.y>0){let n=0,o=document.getElementById("div_tree"),i=document.getElementById("div_mosaic"),r=document.getElementById("div_mosaic_main"),s=document.getElementById("div_grid");n="main_Col"===e.id?t.clientX/window.innerWidth*100:(t.clientY-40)/window.innerHeight*100,n<15?n=15:n>85&&(n=85),"main_Col"===e.id?(o.style.width=n+"%",i.style.width=100-n+"%",console.log(o.style.width),console.log(i.style.width)):(r.style.height=n+"%",s.style.height=100-n+"%",console.log(r.style.height),console.log(s.style.height))}}e.addEventListener("dragstart",n),e.addEventListener("drag",o),e.addEventListener("dragend",(function t(){console.log("============Main Bar Up==========="),e.removeEventListener("dragstart",n),e.removeEventListener("drag",o),e.removeEventListener("dragend",t)}))}function zt(t){const e={bst:new q,idx:0,node_text_idx:0,arr:[]};console.log("----------- App.svelte"),console.log(e.arr);return[e,t=>{t.dataTransfer.dropEffect="move",t.preventDefault()}]}return new class extends U{constructor(t){super(),Y(this,t,zt,Pt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
