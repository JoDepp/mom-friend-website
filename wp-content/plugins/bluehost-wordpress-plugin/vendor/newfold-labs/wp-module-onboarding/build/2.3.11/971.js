"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[971],{6999:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(1609),a=n(6942),l=n.n(a),r=n(148),d=n(7143),i=n(6427),s=n(7677),c=n(6655),g=n(7675);const u=({text:e,className:t,callback:n=null,disabled:a=!1,showChevronRight:u=!0})=>{const b=(0,r.Zp)(),{nextStep:m}=(0,d.useSelect)((e=>({nextStep:e(g.M).getNextStep()})));return(0,o.createElement)(i.Button,{className:l()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":a},t),onClick:()=>{a||(n&&"function"==typeof n&&n(),m&&b(m.path))}},(0,o.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),u&&(0,o.createElement)(s.A,{className:"nfd-onboarding-button--site-gen-next--icon",icon:c.A}))}},1971:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(1609),a=n(7723),l=n(7143),r=n(6427),d=n(9491),i=n(8468),s=n(9269),c=n(6942),g=n.n(c),u=n(8969),b=n(431);const m=()=>{const{theme:e,toggleTheme:t}=(0,i.useContext)(s.D),n=e===u.fS,a=()=>{t()};return(0,o.createElement)(b.A,{type:"fade-in",duration:"200ms",key:n,timingFunction:"ease-in-out"},(0,o.createElement)("div",{className:"nfd-onboarding-toggle__theme"},(0,o.createElement)("div",{className:g()("nfd-onboarding-toggle__theme__button",{"nfd-onboarding-toggle__theme__button__light":!n,"nfd-onboarding-toggle__theme__button__dark":n}),onClick:()=>a(),role:"button",onKeyDown:e=>{"Enter"===e.key&&a()},tabIndex:"0"})))};var _=n(7675),h=n(6999),p=n(4487);const f=()=>{const e=(0,d.useViewportMatch)("small"),{hideFooterNav:t,isFooterNavAllowed:n,currentStep:i}=(0,l.useSelect)((e=>({hideFooterNav:e(_.M).getHideFooterNav(),isFooterNavAllowed:e(_.M).getIsFooterNavAllowed(),currentStep:e(_.M).getCurrentStep()}))),s=i===p.b;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.Fill,{name:`${u.Sr}/${u.vd}`},!s&&(0,o.createElement)(m,null)),!e&&!0!==t&&(0,o.createElement)(r.Fill,{name:`${u.Sr}/${u.gb}`},(0,o.createElement)(h.A,{text:(0,a.__)("Next","wp-module-onboarding"),disabled:!n})))}}}]);