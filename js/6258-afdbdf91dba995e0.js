"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6258],{4638:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(10624).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},20927:function(e,t,r){r.d(t,{VY:function(){return en},h4:function(){return et},ck:function(){return ee},fC:function(){return $},xz:function(){return er}});var n=r(55544),o=r(11339),l=r(71976),a=r(89525),i=r(50714),c=r(60824),d=r(51987),u=r(83464),s=r(75578),p=r(73484),f=r(20310);let m="Collapsible",[b,v]=(0,l.b)(m),[g,h]=b(m),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:l,defaultOpen:a,disabled:i,onOpenChange:c,...s}=e,[p=!1,m]=(0,d.T)({prop:l,defaultProp:a,onChange:c});return(0,o.createElement)(g,{scope:r,disabled:i,contentId:(0,f.M)(),open:p,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m])},(0,o.createElement)(u.WV.div,(0,n.Z)({"data-state":_(p),"data-disabled":i?"":void 0},s,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...l}=e,a=h("CollapsibleTrigger",r);return(0,o.createElement)(u.WV.button,(0,n.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":_(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},l,{ref:t,onClick:(0,c.M)(e.onClick,a.onOpenToggle)}))}),C="CollapsibleContent",y=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=h(C,e.__scopeCollapsible);return(0,o.createElement)(p.z,{present:r||a.open},e=>{let{present:r}=e;return(0,o.createElement)(A,(0,n.Z)({},l,{ref:t,present:r}))})}),A=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:l,children:a,...c}=e,d=h(C,r),[p,f]=(0,o.useState)(l),m=(0,o.useRef)(null),b=(0,i.e)(t,m),v=(0,o.useRef)(0),g=v.current,E=(0,o.useRef)(0),w=E.current,y=d.open||p,A=(0,o.useRef)(y),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>A.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.b)(()=>{let e=m.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,E.current=t.width,A.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(l)}},[d.open,l]),(0,o.createElement)(u.WV.div,(0,n.Z)({"data-state":_(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!y},c,{ref:b,style:{"--radix-collapsible-content-height":g?"".concat(g,"px"):void 0,"--radix-collapsible-content-width":w?"".concat(w,"px"):void 0,...e.style}}),y&&a)});function _(e){return e?"open":"closed"}var R=r(86197);let k="Accordion",I=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[x,Z,M]=(0,a.B)(k),[V,D]=(0,l.b)(k,[M,v]),O=v(),S=o.forwardRef((e,t)=>{let{type:r,...l}=e;return o.createElement(x.Provider,{scope:e.__scopeAccordion},"multiple"===r?o.createElement(q,(0,n.Z)({},l,{ref:t})):o.createElement(z,(0,n.Z)({},l,{ref:t})))});S.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[T,N]=V(k),[P,W]=V(k,{collapsible:!1}),z=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},collapsible:i=!1,...c}=e,[u,s]=(0,d.T)({prop:r,defaultProp:l,onChange:a});return o.createElement(T,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:s,onItemClose:o.useCallback(()=>i&&s(""),[i,s])},o.createElement(P,{scope:e.__scopeAccordion,collapsible:i},o.createElement(F,(0,n.Z)({},c,{ref:t}))))}),q=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},...i}=e,[c=[],u]=(0,d.T)({prop:r,defaultProp:l,onChange:a}),s=o.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[u]),p=o.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[u]);return o.createElement(T,{scope:e.__scopeAccordion,value:c,onItemOpen:s,onItemClose:p},o.createElement(P,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(F,(0,n.Z)({},i,{ref:t}))))}),[B,H]=V(k),F=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:l,dir:a,orientation:d="vertical",...s}=e,p=o.useRef(null),f=(0,i.e)(p,t),m=Z(r),b="ltr"===(0,R.gm)(a),v=(0,c.M)(e.onKeyDown,e=>{var t;if(!I.includes(e.key))return;let r=e.target,n=m().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=n.findIndex(e=>e.ref.current===r),l=n.length;if(-1===o)return;e.preventDefault();let a=o,i=l-1,c=()=>{(a=o+1)>i&&(a=0)},u=()=>{(a=o-1)<0&&(a=i)};switch(e.key){case"Home":a=0;break;case"End":a=i;break;case"ArrowRight":"horizontal"===d&&(b?c():u());break;case"ArrowDown":"vertical"===d&&c();break;case"ArrowLeft":"horizontal"===d&&(b?u():c());break;case"ArrowUp":"vertical"===d&&u()}null===(t=n[a%l].ref.current)||void 0===t||t.focus()});return o.createElement(B,{scope:r,disabled:l,direction:a,orientation:d},o.createElement(x.Slot,{scope:r},o.createElement(u.WV.div,(0,n.Z)({},s,{"data-orientation":d,ref:f,onKeyDown:l?void 0:v}))))}),K="AccordionItem",[L,U]=V(K),Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:l,...a}=e,i=H(K,r),c=N(K,r),d=O(r),u=(0,f.M)(),s=l&&c.value.includes(l)||!1,p=i.disabled||e.disabled;return o.createElement(L,{scope:r,open:s,disabled:p,triggerId:u},o.createElement(E,(0,n.Z)({"data-orientation":i.orientation,"data-state":X(s)},d,a,{ref:t,disabled:p,open:s,onOpenChange:e=>{e?c.onItemOpen(l):c.onItemClose(l)}})))}),j=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=H(k,r),i=U("AccordionHeader",r);return o.createElement(u.WV.h3,(0,n.Z)({"data-orientation":a.orientation,"data-state":X(i.open),"data-disabled":i.disabled?"":void 0},l,{ref:t}))}),G="AccordionTrigger",J=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=H(k,r),i=U(G,r),c=W(G,r),d=O(r);return o.createElement(x.ItemSlot,{scope:r},o.createElement(w,(0,n.Z)({"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId},d,l,{ref:t})))}),Q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=H(k,r),i=U("AccordionContent",r),c=O(r);return o.createElement(y,(0,n.Z)({role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation},c,l,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function X(e){return e?"open":"closed"}let $=S,ee=Y,et=j,er=J,en=Q},89525:function(e,t,r){r.d(t,{B:function(){return i}});var n=r(11339),o=r(71976),l=r(50714),a=r(82733);function i(e){let t=e+"CollectionProvider",[r,i]=(0,o.b)(t),[c,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",s=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,i=d(u,r),c=(0,l.e)(t,i.collectionRef);return n.createElement(a.g7,{ref:c},o)}),p=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),l=n.useRef(new Map).current;return n.createElement(c,{scope:t,itemMap:l,collectionRef:o},r)},Slot:s,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...i}=e,c=n.useRef(null),u=(0,l.e)(t,c),s=d(p,r);return n.useEffect(()=>(s.itemMap.set(c,{ref:c,...i}),()=>void s.itemMap.delete(c))),n.createElement(a.g7,{[f]:"",ref:u},o)})},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(f,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}},86197:function(e,t,r){r.d(t,{gm:function(){return l}});var n=r(11339);let o=(0,n.createContext)(void 0);function l(e){let t=(0,n.useContext)(o);return e||t||"ltr"}}}]);