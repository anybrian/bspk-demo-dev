import{y as F,j as l,v as O,z as K,r as f,u as P,o as _,p as H,B as L,P as Y,M as W,q as G}from"./index-CP083ENv.js";import{SvgSchedule as J}from"./Schedule-AwRsc9rt.js";const V=document.createElement("style");V.appendChild(document.createTextNode(`[data-bspk=time-input] {
  --border-color: var(--stroke-neutral-base);
  display: flex;
  flex-flow: row;
  background-color: var(--surface-neutral-t1-base);
  border: solid 1px var(--border-color);
  height: var(--field-height);
  border-radius: var(--radius-sm);
  padding: 0 0 0 var(--field-padding);
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}
[data-bspk=time-input]:hover:not(:focus-within, [data-disabled], [data-readonly]) {
  background: linear-gradient(var(--interactions-hover-opacity), var(--interactions-hover-opacity)), linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
}
[data-bspk=time-input]:active:not(:focus-within, [data-disabled], [data-readonly]) {
  background: linear-gradient(var(--interactions-press-opacity), var(--interactions-press-opacity)), linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
}
[data-bspk=time-input][data-readonly] {
  --border-color: var(--stroke-neutral-disabled-light);
  pointer-events: none;
  background: linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)), linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
}
[data-bspk=time-input][data-disabled], [data-bspk=time-input]:has(input[disabled]) {
  --border-color: var(--stroke-neutral-disabled-light);
  pointer-events: none;
  background: linear-gradient(var(--interactions-disabled-opacity), var(--interactions-disabled-opacity)), linear-gradient(var(--surface-neutral-t1-base), var(--surface-neutral-t1-base));
}
[data-bspk=time-input][data-disabled] > *, [data-bspk=time-input]:has(input[disabled]) > * {
  color: var(--foreground-neutral-disabled-on-surface);
}
[data-bspk=time-input][data-invalid] {
  --border-color: var(--status-error);
}
[data-bspk=time-input][data-size=small] {
  --field-padding: var(--spacing-sizing-02);
  --field-height: var(--spacing-sizing-08);
  --field-font: var(--body-small);
}
[data-bspk=time-input][data-size=medium] {
  --field-padding: var(--spacing-sizing-03);
  --field-height: var(--spacing-sizing-10);
  --field-font: var(--body-base);
}
[data-bspk=time-input][data-size=large] {
  --field-padding: var(--spacing-sizing-03);
  --field-height: var(--spacing-sizing-12);
  --field-font: var(--body-large);
}
[data-bspk=time-input] [aria-hidden] {
  font: var(--field-font);
}
[data-bspk=time-input] [data-input] {
  background-color: transparent !important;
  border: none;
  outline: none;
  padding: 0;
  height: var(--field-height);
  font: var(--field-font);
  min-width: 0;
  text-align: right;
  line-height: var(--field-height);
  width: fit-content;
}
[data-bspk=time-input] [data-input][data-type=meridiem] {
  text-transform: uppercase;
  margin-left: 0.25em;
}
[data-bspk=time-input] [data-input] * {
  pointer-events: none;
}
[data-bspk=time-input] [data-bspk=button] {
  margin-left: auto;
}
[data-bspk=time-input] [data-bspk=button]:focus {
  outline-offset: -4px;
  border-radius: var(--radius-md);
}
[data-bspk=time-input]:focus-within, [data-bspk=time-input][data-open] {
  --border-color: var(--stroke-neutral-focus);
  outline: 1px solid var(--stroke-neutral-focus);
}

[data-bspk-owner=time-input][data-bspk-utility=menu] {
  overflow: hidden;
  height: 324px;
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: start;
  gap: var(--spacing-sizing-04);
  padding: var(--spacing-sizing-04);
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column] {
  padding: 0 var(--spacing-sizing-01);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden auto;
  font: var(--labels-base);
  gap: var(--spacing-sizing-02);
  align-items: center;
  justify-content: start;
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column] span {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: var(--spacing-sizing-13);
  flex: 0;
  border-radius: var(--radius-sm);
  font: var(--labels-base);
  line-height: var(--spacing-sizing-10);
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column] span[aria-selected=true] {
  background: var(--surface-brand-primary);
  color: var(--foreground-brand-on-primary);
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column]:focus {
  outline: 2px solid var(--stroke-neutral-focus);
  border-radius: var(--radius-sm);
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column]:focus span[data-active] {
  background: var(--interactions-neutral-hover-opacity);
  outline: 2px solid var(--interactions-neutral-hover-opacity);
  outline-offset: -2px;
}
[data-bspk-owner=time-input][data-bspk-utility=menu] [data-scroll-values] [data-scroll-column]:focus span[data-active][aria-selected=true] {
  background: var(--surface-brand-primary);
  color: var(--foreground-brand-on-primary);
}

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
`));document.head.appendChild(V);function $({options:i,selectedValue:m,type:t,onSelect:p,onTab:r}){var x;const{activeElementId:n,arrowKeyCallbacks:s}=F({ids:i.map(u=>u.id),defaultActiveId:((x=i.find(u=>u.value===m)||i[0])==null?void 0:x.id)||null}),k=()=>{var u;n&&((u=K(n))==null||u.click())};return l.jsx("div",{"aria-label":`Select ${t}`,"data-bspk":"time-input-listbox","data-scroll-column":t,"data-type":t,"data-visible":!0,id:`${t}-listbox`,onClickCapture:u=>{const b=u.target;b.dataset.value&&(p==null||p(b.dataset.value))},onKeyDown:O({...s,Enter:k,Space:k,Tab:r}),role:"listbox",tabIndex:0,children:i.map((u,b)=>l.jsx("span",{"aria-label":u.label,"aria-selected":u.value===m,"data-active":n===u.id||void 0,"data-index":b,"data-value":u.value,id:u.id,role:"option",children:`${u.label}`.padStart(2,"0")},u.id))})}function A({num:i,max:m,min:t,rollover:p=!1,defaultValue:r=t}){const n=typeof i=="number"?i:parseInt(i,10);return isNaN(n)?r??t:n>m?p?t:m:n<t?p?m:t:n}const R={min:0,max:59},z={min:1,max:12},Q="--";function D({disabled:i,name:m,readOnly:t,value:p,type:r,onChange:n}){const s=f.useRef(null),k=(a=s.current)=>{a&&setTimeout(()=>{var o;(o=window.getSelection())==null||o.selectAllChildren(a)},10)},x=f.useCallback(a=>r==="meridiem"?(a==null?void 0:a.toString())||"AM":typeof a>"u"?Q:A({num:a,rollover:!0,...r==="hours"?z:R}).toString().padStart(2,"0"),[r]);f.useEffect(()=>{s.current&&(s.current.textContent=x(p))},[p,x]);const u=()=>{var a;(a=window.getSelection())==null||a.removeAllRanges()},b=f.useCallback(a=>{var C;const o=(C=s.current)==null?void 0:C.textContent;if(r==="meridiem"){n(o==="AM"?"PM":"AM");return}const h=A({num:Number(o)+a,rollover:!0,...r==="minutes"?R:z}).toString().padStart(2,"0");n(h),s.current&&(s.current.textContent=h)},[r,n]),w=()=>X(s.current,"[data-input]"),N=()=>Z(s.current,"[data-input]"),y=f.useCallback(a=>{var I,v,S;if(O({ArrowRight:()=>{var d;(d=w())==null||d.focus(),a.preventDefault()},ArrowLeft:()=>{var d;(d=N())==null||d.focus(),a.preventDefault()},ArrowUp:()=>{b(1),a.preventDefault()},ArrowDown:()=>{b(-1),a.preventDefault()},Enter:()=>{var d;return(d=s.current)==null?void 0:d.blur()},Escape:()=>{var d;return(d=s.current)==null?void 0:d.blur()},Backspace:()=>n(null),Tab:()=>{}})(a))return;if(a.preventDefault(),r==="meridiem"){const d=a.key.toUpperCase();if(d==="A"||d==="P"){n(`${d}M`),(I=w())==null||I.focus(),k();return}return}if(!/^\d$/.test(a.key))return;let o=Number(a.key);const h=(v=s.current)==null?void 0:v.textContent;if(r==="hours"&&h==="01"&&o<3||r==="minutes"&&Number(h)<6)o=+`${h}${o}`;else if(o===0)return;o=A({num:o,...r==="minutes"?R:z});const g=o.toString().padStart(2,"0");n(g),s.current&&(s.current.textContent=g),r==="hours"&&o>2||r==="minutes"&&o>5?((S=w())==null||S.focus(),k(w())):k()},[r,b,n]),j=p?x(p):"Empty";return l.jsx("span",{"aria-disabled":!!i,"aria-label":r,"aria-readonly":t,"aria-valuemax":r==="hours"?12:r==="minutes"?59:void 0,"aria-valuemin":r==="hours"?1:r==="minutes"?0:void 0,"aria-valuetext":j,contentEditable:!t&&!i,"data-input":!0,"data-type":r,"data-value":p||void 0,id:`${m}`,inputMode:r==="meridiem"?"text":"numeric",onBlur:u,onClick:()=>{},onFocus:()=>{},onKeyDown:y,ref:a=>{a&&(s.current=a,a.textContent=x(p))},role:"spinbutton",spellCheck:"false",tabIndex:i||t?-1:0})}function X(i,m){let t=i==null?void 0:i.nextElementSibling;for(;t;){if(t.matches(m))return t;t=t.nextElementSibling}return null}function Z(i,m){let t=i==null?void 0:i.previousElementSibling;for(;t;){if(t.matches(m))return t;t=t.previousElementSibling}return null}const ee=["00","05","10","15","20","25","30","35","40","45","50","55"],te=["01","02","03","04","05","06","07","08","09","10","11","12"],ae=["AM","PM"];function ne({value:i,"aria-label":m,disabled:t,id:p,invalid:r,readOnly:n,name:s,size:k,"aria-describedby":x,"aria-errormessage":u}){const b=P(p),[w,N]=f.useState(i),[y,j]=f.useState(),[a,o]=f.useState(),[h,C]=f.useState("AM");f.useEffect(()=>{N(`${y==null?void 0:y.toString().padStart(2,"0")}:${a==null?void 0:a.toString().padStart(2,"0")} ${h||""}`.trim()),y!==void 0&&a===void 0&&o("00")},[y,a,h]);const[g,B]=f.useState(!1),{floatingStyles:I,elements:v}=_({strategy:"fixed",refWidth:!0,offsetOptions:4,hide:!g}),S=f.useCallback(e=>{var c;B(e),!(!v.reference||!M.current)&&(!e&&g&&M.current.focus(),e&&!g&&((c=v.reference.querySelector('[data-scroll-column="hours"]'))==null||c.focus()))},[v==null?void 0:v.reference,g]);H({elements:[v.floating],callback:()=>S(!1),disabled:!g});const{hourOptions:d,minuteOptions:U,meridiemOptions:q}=f.useMemo(()=>({hourOptions:te.map(e=>({id:`${b}-hours-${e}`,value:e,label:e.toString().padStart(2,"0")})),minuteOptions:ee.map(e=>({id:`${b}-minutes-${e}`,value:e,label:e.toString().padStart(2,"0")})),meridiemOptions:ae.map(e=>({id:`${b}-meridiem-${e}`,value:e,label:e}))}),[b]),E=f.useRef(null),M=f.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{"aria-describedby":u||x||void 0,"data-aria-label":m||void 0,"data-bspk":"time-input","data-disabled":t||void 0,"data-invalid":r||void 0,"data-name":s||void 0,"data-open":g||void 0,"data-readonly":n||void 0,"data-size":k||void 0,"data-value":w||void 0,id:b,onClickCapture:()=>{var e,c;t||n||(c=(e=v.reference)==null?void 0:e.querySelector("[tabIndex]"))==null||c.focus()},onKeyDownCapture:O({Escape:()=>S(!1)}),ref:e=>{v.setReference(e)},role:"group",tabIndex:t||n?-1:0,children:[l.jsx(D,{disabled:t,name:`${s}-hours`,onChange:e=>j(e||void 0),readOnly:n,type:"hours",value:y}),l.jsx("span",{"aria-hidden":"true",children:":"}),l.jsx(D,{disabled:t,name:`${s}-minutes`,onChange:e=>o(e||void 0),readOnly:n,type:"minutes",value:a}),l.jsx(D,{disabled:t,name:`${s}-meridiem`,onChange:e=>C(e||"AM"),readOnly:n,type:"meridiem",value:h}),l.jsx(L,{disabled:t||n,icon:l.jsx(J,{}),iconOnly:!0,innerRef:e=>{M.current=e},label:`${g?"Close":"Open"} Time Picker`,onClick:()=>S(!g),variant:"tertiary"})]}),!!g&&l.jsx(Y,{children:l.jsx(W,{innerRef:e=>{e&&v.setFloating(e)},label:"Select time",owner:"time-input",style:I,children:l.jsx(G.FocusTrap,{focusTrapOptions:{fallbackFocus:()=>E.current.hours,clickOutsideDeactivates:!0},children:l.jsxs("div",{"data-scroll-values":!0,ref:e=>{var c;E.current={hours:e==null?void 0:e.querySelector('[data-scroll-column="hours"]'),minutes:e==null?void 0:e.querySelector('[data-scroll-column="minutes"]'),meridiem:e==null?void 0:e.querySelector('[data-scroll-column="meridiem"]')},(c=E.current.hours)==null||c.focus()},children:[l.jsx($,{onSelect:e=>{j(e),setTimeout(()=>{var c,T;return(T=(c=E.current)==null?void 0:c.minutes)==null?void 0:T.focus()},10)},options:d,selectedValue:y,type:"hours"}),l.jsx($,{onSelect:e=>{o(e),setTimeout(()=>{var c,T;return(T=(c=E.current)==null?void 0:c.meridiem)==null?void 0:T.focus()},10)},options:U,selectedValue:a,type:"minutes"}),l.jsx($,{onSelect:e=>{C(e),S(!1),setTimeout(()=>{var c;return(c=M.current)==null?void 0:c.focus()},10)},options:q,selectedValue:h,type:"meridiem"})]})})})})]})}export{te as HOUR_OPTIONS,ae as MERIDIEM_OPTIONS,ee as MINUTE_OPTIONS,ne as TimeInput};
