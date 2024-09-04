"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[994],{1852:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(1609),o=n(148),i=n(7143),s=n(7675),r=n(264),l=n(6079),c=n(8969),d=n(1056),m=n(2202),u=n(8559),b=n(6942),p=n.n(b),g=n(7677);const f=({text:e,disabled:t,className:n,icon:b})=>{const f=(0,o.Zp)(),{nextStep:h,currentData:v}=(0,i.useSelect)((e=>({nextStep:e(s.M).getNextStep(),currentData:e(s.M).getCurrentOnboardingData()})),[]),w=null===h||!1===h;return(0,a.createElement)(r.A,{className:p()("nfd-nav-card-button",n),handleClick:()=>w?async function(){v&&(v.isComplete=(new Date).getTime(),v.data.siteOverrideConsent=!1,(0,l.V1)(v)),(0,u.YR)(),(0,d.SV)(new d.iC(m.Vg)),window.location.replace(c.R0)}():f(h.path),disabled:t},(0,a.createElement)(a.Fragment,null,(0,a.createElement)("span",{className:`${n}__text`},e),b&&(0,a.createElement)(g.A,{className:`${n}__icon`,icon:b})))}},5479:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(1609),o=n(431);const i=({title:e,text:t,imgType:n,className:i,animationName:s})=>(0,a.createElement)("div",{className:i},(0,a.createElement)("div",{className:"tab-text"},(0,a.createElement)("h4",null,e),t),(0,a.createElement)("div",{className:"tab-image"},(0,a.createElement)("div",{className:"tab-img"},(0,a.createElement)(o.A,{type:s},(0,a.createElement)("div",{className:n})))))},7839:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(1609),o=n(6087),i=n(8468),s=n(9491),r=n(8558),l=n(8107);const c=()=>{},d=["menuitem","menuitemradio","menuitemcheckbox"];class m extends i.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(e){const{forwardedRef:t}=this.props;this.container=e,"function"==typeof t?t(e):t&&"current"in t&&(t.current=e)}getFocusableContext(e){const{onlyBrowserTabstops:t}=this.props,n=(t?l.focus.tabbable:l.focus.focusable).find(this.container),a=this.getFocusableIndex(n,e);return a>-1&&e?{index:a,target:e,focusables:n}:null}getFocusableIndex(e,t){const n=e.indexOf(t);if(-1!==n)return n}onKeyDown(e){this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:t}=this,{cycle:n=!0,eventToOffset:a,onNavigate:o=c,stopNavigationEvents:i}=this.props,s=a(e);if(void 0!==s&&i){e.stopImmediatePropagation();const t=e.target.getAttribute("role");d.includes(t)&&e.preventDefault()}if(!s)return;const r=t(e.target.ownerDocument.activeElement);if(!r)return;const{index:l,focusables:m}=r,u=n?function(e,t,n){const a=e+n;return a<0?t+a:a>=t?a-t:a}(l,m.length,s):l+s;u>=0&&u<m.length&&(m[u].focus(),o(u,m[u]))}render(){const{children:e,...t}=this.props;return(0,a.createElement)("div",{ref:this.bindContainer,...(0,o.omit)(t,["stopNavigationEvents","eventToOffset","onNavigate","onKeyDown","cycle","onlyBrowserTabstops","forwardedRef"])},e)}}const u=(e,t)=>(0,a.createElement)(m,{...e,forwardedRef:t});u.displayName="NavigableContainer";const b=(0,i.forwardRef)(u),p=(0,i.forwardRef)((function({role:e="menu",orientation:t="vertical",...n},i){return(0,a.createElement)(b,{ref:i,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:e,"aria-orientation":"presentation"===e?null:t,eventToOffset:e=>{const{keyCode:n}=e;let a=[r.DOWN],i=[r.UP];return"horizontal"===t&&(a=[r.RIGHT],i=[r.LEFT]),"both"===t&&(a=[r.RIGHT,r.DOWN],i=[r.LEFT,r.UP]),(0,o.includes)(a,n)?1:(0,o.includes)(i,n)?-1:(0,o.includes)([r.DOWN,r.UP,r.LEFT,r.RIGHT],n)?0:void 0},...n})}));(0,i.forwardRef)((function({eventToOffset:e,...t},n){return(0,a.createElement)(b,{ref:n,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:t=>{const{keyCode:n,shiftKey:a}=t;return r.TAB===n?a?-1:1:e?e(t):void 0},...t})}));var g=n(6427);const f=()=>{},h=({tabId:e,onClick:t,children:n,selected:o,triggerEvent:i,handleEvent:s,tabName:r,...l})=>{const c=v(i,s,r);return(0,a.createElement)(g.Button,{role:"tab",tabIndex:o?null:-1,"aria-selected":o,id:e,...c,...l},n)},v=(e,t,n)=>{const a=(0,i.useCallback)((()=>t(n)),[t,n]);return"click"===e?{onClick:a}:{onMouseOver:a}};function w({className:e,children:t,tabs:n,initialTabName:r,orientation:l="horizontal",activeClass:c="is-active",notActiveClass:d="is-not-active",callback:m,onSelect:u=f,triggerEvent:b}){var g;const v=(0,s.useInstanceId)(w,"tab-panel"),[E,y]=(0,i.useState)(null),N=e=>{y(e),u(e);const t=(0,o.find)(n,{name:e});"function"==typeof m&&m(t)},_=(0,o.find)(n,{name:E}),T=`${v}-${null!==(g=_?.name)&&void 0!==g?g:"none"}`;return(0,i.useEffect)((()=>{(0,o.find)(n,{name:E})||y(r||(n.length>0?n[0].name:null))}),[n]),(0,a.createElement)("div",{className:e},(0,a.createElement)(p,{role:"tablist",orientation:l,onNavigate:(e,t)=>{t.click()},className:"components-tab-panel__tabs"},n.map((e=>(0,a.createElement)(h,{className:`components-tab-panel__tabs-item ${e.name===E&&c} ${e.name!==E&&d}`,tabId:`${v}-${e.name}`,"aria-controls":`${v}-${e.name}-view`,selected:e.name===E,key:e.name,triggerEvent:b,handleEvent:N,tabName:e.name},e.title)))),_&&(0,a.createElement)("div",{key:T,"aria-labelledby":T,role:"tabpanel",id:`${T}-view`,className:"components-tab-panel__tab-content"},t&&t(_)))}},994:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(1609),o=n(7143),i=n(8468),s=n(3988),r=n(5842),l=n(9927),c=n(1852),d=n(5479),m=n(7839),u=n(7675),b=n(8969),p=n(3474),g=n(7723);const f=()=>{const{setIsDrawerOpened:e,setSidebarActiveView:t,setIsHeaderNavigationEnabled:n}=(0,o.useDispatch)(u.M);(0,i.useEffect)((()=>{e(!1),t(b.Qe),n(!0)}),[]);const{brandName:f,brandSlug:h}=(0,o.useSelect)((e=>({brandName:e(u.M).getNewfoldBrandName(),brandSlug:e(u.M).getNewfoldBrand()}))),v=((e,t)=>{const n={heading:(0,g.__)("Nice work: Your site is ready 🎉","wp-module-onboarding"),subheading:(0,g.__)("Move-in day begins! Let us know if you'd like a hand.","wp-module-onboarding"),buttonText:(0,g.__)("Complete Setup","wp-module-onboarding"),tabs:[{name:"tab1",title:(0,g.__)("WHATS NEXT","wp-module-onboarding"),subtitle:(0,g.__)("Add content, organize your menu and launch.","wp-module-onboarding"),text:(0,g.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,g.__)("✅ Theme created, features added and Coming Soon mode activated. Thank you for building your site with %s, we're always here to help!","wp-module-onboarding"),e),imgType:"img-1",animationName:"fade-in-right"},{name:"tab2",title:(0,g.__)("HELP & RESOURCES","wp-module-onboarding"),subtitle:(0,g.__)("Next step or next level, we're your partner.","wp-module-onboarding"),text:(0,g.sprintf)(/* translators: %s: Site */ /* translators: %s: Site */
(0,g.__)("WordPress make it easy to grow your %s. Send a newsletter, broadcast a podcast, create courses and trainings. Dream it, build it.","wp-module-onboarding"),(0,p.P)("site")),imgType:"img-2",animationName:"fade-in-up"},{name:"tab3",title:(0,g.__)("HIRE OUR EXPERTS","wp-module-onboarding"),subtitle:(0,g.__)("Make our great people your people.","wp-module-onboarding"),text:(0,g.__)("Looking for personalized WordPress assistance, or someone to take-over from here? Go beyond support with our professional services.","wp-module-onboarding"),imgType:"img-3",animationName:"fade-in-left"}]};return"hostgator-br"===t&&(n.tabs[2].title=(0,g.__)("ALWAYS COUNT ON OUR TEAM","wp-module-onboarding"),n.tabs[2].subtitle=(0,g.__)("24 hours a day / 7 days a week","wp-module-onboarding"),n.tabs[2].text=(0,g.__)("From beginner to advanced, you have a partner to trust. Our support works when you work. Also count on various help materials on YouTube, blog and Knowledge Base.","wp-module-onboarding"),n.tabs[2].imgType=""),n})(f,h);return(0,a.createElement)(s.A,{isCentered:!0,isBgPrimary:!0},(0,a.createElement)(r.A,null,(0,a.createElement)("div",{className:"whatnext-card"},(0,a.createElement)(l.A,{heading:v.heading,subHeading:v.subheading}),(0,a.createElement)(m.A,{className:"nfd-onboarding-overview__tab-panel",tabs:v.tabs.map((e=>({name:e.name,title:e.title,content:(0,a.createElement)(d.A,{title:e.subtitle,text:e.text,imgType:e.imgType,animationName:e.animationName,className:"tab-data"})})))},(e=>(0,a.createElement)("div",null,e.content))),(0,a.createElement)(c.A,{text:v.buttonText}))))}}}]);