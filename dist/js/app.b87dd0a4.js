(function(){"use strict";var a={5602:function(a,t,e){var n=e(5130),c=e(6768);const o={id:"app"};function i(a,t,e,n,i,d){const s=(0,c.g2)("Header"),r=(0,c.g2)("Hero"),v=(0,c.g2)("History"),l=(0,c.g2)("TextWithImage"),u=(0,c.g2)("Footer"),f=(0,c.g2)("WeddingInfo"),p=(0,c.g2)("ParallaxSection"),h=(0,c.g2)("RSVPForm");return(0,c.uX)(),(0,c.CE)("div",o,[(0,c.bF)(s,{onScrollTo:n.scrollToSection},null,8,["onScrollTo"]),(0,c.bF)(r),(0,c.bF)(v),(0,c.bF)(l),(0,c.bF)(u),(0,c.bF)(f),(0,c.bF)(p),(0,c.bF)(h)])}var d=e(4232);const s={class:"header-actions"};function r(a,t,e,o,i,r){return(0,c.uX)(),(0,c.CE)("header",{class:(0,d.C4)(["header",{"has-background":o.hasBackground}])},[o.isMobile?((0,c.uX)(),(0,c.CE)("div",{key:0,class:"burger-icon",onClick:t[0]||(t[0]=(...a)=>o.toggleMenu&&o.toggleMenu(...a))},[(0,c.Lk)("div",{class:(0,d.C4)(["line top-line",{active:o.menuOpen}])},null,2),(0,c.Lk)("div",{class:(0,d.C4)(["line middle-line",{active:o.menuOpen}])},null,2),(0,c.Lk)("div",{class:(0,d.C4)(["line bottom-line",{active:o.menuOpen}])},null,2)])):(0,c.Q3)("",!0),(0,c.bo)((0,c.Lk)("div",s,[(0,c.Lk)("div",{class:"header-action",onClick:t[1]||(t[1]=a=>o.scrollToSection("about"))}," Начало "),(0,c.Lk)("div",{class:"header-action",onClick:t[2]||(t[2]=a=>o.scrollToSection("timeline-section"))}," Програма "),(0,c.Lk)("div",{class:"header-action",onClick:t[3]||(t[3]=a=>o.scrollToSection("support"))}," Кауза "),(0,c.Lk)("div",{class:"header-action",onClick:t[4]||(t[4]=a=>o.scrollToSection("form-section"))}," Потвърди присъствие ")],512),[[n.aG,!o.isMobile||o.menuOpen]])],2)}var v=e(144),l={methods:{h:c.h},setup(){const a=(0,v.KR)(!1),t=(0,v.KR)(!1),e=(0,v.KR)(window.innerWidth<=961),n=()=>{const t=window.scrollY;a.value=t>=100},o=()=>{t.value=!t.value},i=()=>{e.value=window.innerWidth<=961},d=a=>{const e=document.getElementById(a);if(e){const a=-30,t=e.getBoundingClientRect().top+window.scrollY+a;window.scrollTo({top:t,behavior:"smooth"})}t.value=!1};return(0,c.sV)((()=>{window.addEventListener("scroll",n),window.addEventListener("resize",i)})),(0,c.hi)((()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",i)})),{hasBackground:a,menuOpen:t,isMobile:e,toggleMenu:o,scrollToSection:d}}},u=e(1241);const f=(0,u.A)(l,[["render",r],["__scopeId","data-v-9146734c"]]);var p=f;const h={class:"wedding-info",id:"info-section"},g={class:"overlay"};var m={__name:"WeddingInfo",setup(a){const t=new Date("2025-07-12T00:00:00"),e=(0,v.KR)(""),n=()=>{const a=new Date,n=t-a;if(n<=0)e.value="Очакваме ви днес",clearInterval(o);else{const a=Math.floor(n/864e5),t=Math.floor(n%864e5/36e5),c=Math.floor(n%36e5/6e4);e.value=`${a} дни ${t} часа ${c} минути`}};let o;return(0,c.sV)((()=>{n(),o=setInterval(n,1e3)})),(a,t)=>((0,c.uX)(),(0,c.CE)("section",h,[(0,c.Lk)("div",g,[t[0]||(t[0]=(0,c.Lk)("h2",null,[(0,c.eW)(" Светослав и Елена "),(0,c.Lk)("br"),(0,c.eW)(" 12.07.2025 ")],-1)),(0,c.Lk)("p",null,(0,d.v_)(e.value),1)])]))}};const b=(0,u.A)(m,[["__scopeId","data-v-6768c1c4"]]);var w=b;const k={class:"rsvp-form",id:"form-section"};function C(a,t){return(0,c.uX)(),(0,c.CE)("section",k,t[0]||(t[0]=[(0,c.Lk)("div",{class:"shell"},[(0,c.Lk)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeXCLgWzMxO5XOm64DbH4ZhwDIttHt-QAkCDHzfH2huIHzc5A/viewform?embedded=true",width:"100%",height:"1200",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading…")],-1)]))}const L={},_=(0,u.A)(L,[["render",C],["__scopeId","data-v-edf83a3e"]]);var I=_,x=e.p+"img/Cat-Paw-Print-3.6c4609df.svg",F=e.p+"img/Icons8-Windows-8-Animals-Dog-House.512.66a60208.svg";const E={class:"wrapper",id:"support"};function O(a,t){return(0,c.uX)(),(0,c.CE)("div",E,t[0]||(t[0]=[(0,c.Fv)('<div class="shell" data-v-0d7ca680><h3 data-v-0d7ca680>Нашата кауза</h3><h4 data-v-0d7ca680>Вместо цветя, подай лапа</h4><section class="split-section" id="text-section" data-v-0d7ca680><div class="text-section" data-v-0d7ca680><div class="text-content" data-v-0d7ca680><h5 data-v-0d7ca680>Учтиво ви молим да не носите цветя за нашата сватба, а да подкрепите благотворителната ни кауза.</h5></div></div><div class="image-section image-1" data-v-0d7ca680><img src="'+x+'" alt="" data-v-0d7ca680></div></section><section class="split-section" data-v-0d7ca680><div class="image-section image-2" data-v-0d7ca680><img src="'+F+'" alt="" data-v-0d7ca680></div><div class="text-section" data-v-0d7ca680><div class="text-content" data-v-0d7ca680><h5 data-v-0d7ca680> Ще подкрепим организации за спасяване и грижа на бездомни животни в нужда. <br data-v-0d7ca680> Точно както нашите любимки Ая и Нала бяха спасени от тежкия живот на улицата, така бихме искали да помогнем на други клети животнинки като тях! </h5></div></div></section></div>',1)]))}const T={},y=(0,u.A)(T,[["render",O],["__scopeId","data-v-0d7ca680"]]);var A=y;const S={class:"timeline-section",id:"timeline-section"};var H={__name:"Footer",setup(a){return(a,t)=>((0,c.uX)(),(0,c.CE)("section",S,t[0]||(t[0]=[(0,c.Fv)('<h3 data-v-c6e09a84>Как ще протече денят:</h3><div class="timeline" data-v-c6e09a84><div class="container left" data-v-c6e09a84><div class="content" data-v-c6e09a84><h3 data-v-c6e09a84>15:00</h3><p data-v-c6e09a84><span data-v-c6e09a84> Църковен брак <br data-v-c6e09a84> Храм &quot;Свето Успение Богородично&quot; <br data-v-c6e09a84> Каварна </span></p></div></div><div class="container right" data-v-c6e09a84><div class="content" data-v-c6e09a84><h3 data-v-c6e09a84>17:00</h3><p data-v-c6e09a84><span data-v-c6e09a84> Изнесен ритуал <br data-v-c6e09a84> Комплекс &quot;Кедъра&quot; <br data-v-c6e09a84> Варна </span></p></div></div><div class="container left" data-v-c6e09a84><div class="content" data-v-c6e09a84><h3 data-v-c6e09a84>18:00</h3><p data-v-c6e09a84><span data-v-c6e09a84> Снимки и поздравления <br data-v-c6e09a84> Комплекс &quot;Кедъра&quot; <br data-v-c6e09a84> Варна </span></p></div></div><div class="container right" data-v-c6e09a84><div class="content" data-v-c6e09a84><h3 data-v-c6e09a84>19:00</h3><p data-v-c6e09a84><span data-v-c6e09a84> Сватбена вечеря <br data-v-c6e09a84> Комплекс &quot;Кедъра&quot; <br data-v-c6e09a84> Варна </span></p></div></div></div>',2)])))}};const M=(0,u.A)(H,[["__scopeId","data-v-c6e09a84"]]);var X=M,W=e.p+"img/IMG_5044.299213af.jpg";const q={class:"wrapper"};function j(a,t){return(0,c.uX)(),(0,c.CE)("div",q,t[0]||(t[0]=[(0,c.Fv)('<div class="shell" data-v-5cb43254><div class="text-image" data-v-5cb43254><div class="image" data-v-5cb43254><img src="'+W+'" alt="" data-v-5cb43254></div><div class="text" data-v-5cb43254><span data-v-5cb43254> Светослав <br data-v-5cb43254> и <br data-v-5cb43254> Елена </span></div></div></div>',1)]))}const P={},R=(0,u.A)(P,[["render",j],["__scopeId","data-v-5cb43254"]]);var D=R;const z={class:"wrapper",id:"about"};function B(a,t){return(0,c.uX)(),(0,c.CE)("div",z,t[0]||(t[0]=[(0,c.Lk)("div",{class:"shell"},[(0,c.Lk)("h3",null,"Нашата история"),(0,c.Lk)("p",null," След неочакваното ни запознанство през лятото на 2016 г. , пьтищата ни се срещнаха отново 5 години по-кьсно, когато сьдбата реши, че сме един за друг. "),(0,c.Lk)("p",null," През следващите 4 години преминахме през много изпитания и израстнахме заедно. Сега сме готови за следващата стьпка - да заявим официално любовта си и да се превьрнем в семейство! ")],-1)]))}const V={},K=(0,u.A)(V,[["render",B],["__scopeId","data-v-c21a36d0"]]);var Q=K,$=e.p+"img/background.b512118f.jpeg";const G={class:"wrapper"};function Y(a,t){return(0,c.uX)(),(0,c.CE)("div",G,t[0]||(t[0]=[(0,c.Fv)('<div class="shell" data-v-f208f222><div class="text-image" data-v-f208f222><div class="text" data-v-f208f222><h4 data-v-f208f222>Поканени сте на нашия специален ден!</h4><span data-v-f208f222> 12 юли 2025 г. <br data-v-f208f222> 17:00 <br data-v-f208f222> Комплекс &quot;Кедъра&quot; <br data-v-f208f222> Варна, м-ст Бялата чешма </span></div><div class="image" data-v-f208f222><img src="'+$+'" alt="" data-v-f208f222></div></div></div>',1)]))}const Z={},J=(0,u.A)(Z,[["render",Y],["__scopeId","data-v-f208f222"]]);var N=J,U={name:"App",components:{Header:p,Footer:X,RSVPForm:I,WeddingInfo:w,ParallaxSection:A,Hero:D,History:Q,TextWithImage:N},setup(){const a=a=>{const t=document.getElementById(a);t&&t.scrollIntoView({behavior:"smooth"})};return{scrollToSection:a}}};const aa=(0,u.A)(U,[["render",i]]);var ta=aa;(0,n.Ef)(ta).mount("#app")}},t={};function e(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return a[n].call(o.exports,o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,c,o){if(!n){var i=1/0;for(v=0;v<a.length;v++){n=a[v][0],c=a[v][1],o=a[v][2];for(var d=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[s])}))?n.splice(s--,1):(d=!1,o<i&&(i=o));if(d){a.splice(v--,1);var r=c();void 0!==r&&(t=r)}}return t}o=o||0;for(var v=a.length;v>0&&a[v-1][2]>o;v--)a[v]=a[v-1];a[v]=[n,c,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.p="/"}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var c,o,i=n[0],d=n[1],s=n[2],r=0;if(i.some((function(t){return 0!==a[t]}))){for(c in d)e.o(d,c)&&(e.m[c]=d[c]);if(s)var v=s(e)}for(t&&t(n);r<i.length;r++)o=i[r],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(v)},n=self["webpackChunkwedding"]=self["webpackChunkwedding"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(5602)}));n=e.O(n)})();
//# sourceMappingURL=app.b87dd0a4.js.map