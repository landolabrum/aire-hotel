(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4610],{62705:function(e,t,n){var i=n(55639).Symbol;e.exports=i},44239:function(e,t,n){var i=n(62705),a=n(89607),r=n(2333),o=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):r(e)}},27561:function(e,t,n){var i=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(a,""):e}},31957:function(e,t,n){var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=i},89607:function(e,t,n){var i=n(62705),a=Object.prototype,r=a.hasOwnProperty,o=a.toString,s=i?i.toStringTag:void 0;e.exports=function(e){var t=r.call(e,s),n=e[s];try{e[s]=void 0;var i=!0}catch(e){}var a=o.call(e);return i&&(t?e[s]=n:delete e[s]),a}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var i=n(31957),a="object"==typeof self&&self&&self.Object===Object&&self,r=i||a||Function("return this")();e.exports=r},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},80954:function(e,t,n){var i=n(13218),a=n(7771),r=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var c,l,d,x,u,f,h=0,m=!1,p=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=c,i=l;return c=l=void 0,h=t,x=e.apply(i,n)}function v(e){var n=e-f,i=e-h;return void 0===f||n>=t||n<0||p&&i>=d}function j(){var e,n,i,r=a();if(v(r))return y(r);u=setTimeout(j,(e=r-f,n=r-h,i=t-e,p?s(i,d-n):i))}function y(e){return(u=void 0,g&&c)?b(e):(c=l=void 0,x)}function w(){var e,n=a(),i=v(n);if(c=arguments,l=this,f=n,i){if(void 0===u)return h=e=f,u=setTimeout(j,t),m?b(e):x;if(p)return clearTimeout(u),u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),x}return t=r(t)||0,i(n)&&(m=!!n.leading,d=(p="maxWait"in n)?o(r(n.maxWait)||0,t):d,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),h=0,c=f=l=u=void 0},w.flush=function(){return void 0===u?x:y(a())},w}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var i=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==i(e)}},7771:function(e,t,n){var i=n(55639);e.exports=function(){return i.Date.now()}},14841:function(e,t,n){var i=n(27561),a=n(13218),r=n(33448),o=0/0,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):s.test(e)?o:+e}},64610:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var i=n(21378),a=n.n(i),r=[".d-flex.jsx-3196267748,.index.jsx-3196267748 .index__full--title.jsx-3196267748,.index.jsx-3196267748 .index__full-ol.jsx-3196267748>div.jsx-3196267748,.index.jsx-3196267748 .index__full-ol.jsx-3196267748,.d-flex-column.jsx-3196267748,.index.jsx-3196267748{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".d-pad.jsx-3196267748{padding:var(--s-4);width:calc(100% - var(--s-4) * 2);}",".index__clouds.jsx-3196267748{height:100vh;width:100vw;}",".d-flex-column.jsx-3196267748,.index.jsx-3196267748{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".index.jsx-3196267748{width:100%;color:var(--gray-20);-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0;gap:var(--s-9);position:relative;height:100%;}","@media (max-width:1260px){.index.jsx-3196267748{width:calc(100% - var(--s-9) * 2);margin:auto;height:100% !important;}}",".index--title.jsx-3196267748{width:100%;text-align:center;padding:var(--s-element) 0 0;text-transform:capitalize;font-size:var(--s-1);color:var(--gray-10);}",".index.jsx-3196267748 .index__full-max.jsx-3196267748{width:100%;z-index:1;aspect-ratio:1;}",".index.jsx-3196267748 .index__full.jsx-3196267748{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:var(--s-4);margin:var(--s-4) 0 0;}",".index.jsx-3196267748 .index__full--max.jsx-3196267748{height:80vw;z-index:1;width:100%;}",".index.jsx-3196267748 .index__full.no-wrap.jsx-3196267748{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}","@media (max-width:900px){.index.jsx-3196267748 .index__full.no-wrap.jsx-3196267748{-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;}}",".index.jsx-3196267748 .index__full-ol.jsx-3196267748{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-top:0;line-height:1.5;padding:var(--s-4) 0 var(--s-element);}",".index.jsx-3196267748 .index__full-ol.jsx-3196267748 h2.jsx-3196267748{color:var(--primary);}",".index.jsx-3196267748 .index__full-ol.jsx-3196267748>div.jsx-3196267748{font-family:Game;color:var(--gray-20);padding:0 var(--s-9);font-size:var(--s-5);--ui-icon-size:var(--s-5);--ui-icon-color:var(--gray-40);-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;gap:var(--s-9);position:relative;}",".index.jsx-3196267748 .index__full-li.jsx-3196267748{width:100%;}",".index.jsx-3196267748 .index__full-li--title.jsx-3196267748{font-size:var(--s-5);}",".index.jsx-3196267748 .index__full-li--body.jsx-3196267748{padding:var(--s-4);font-size:var(--s-7);}",".index.jsx-3196267748 .index__full--title.jsx-3196267748{width:100%;text-transform:capitalize;color:var(--primary);--ui-icon-color:var(--primary);gap:var(--s-9);font-size:var(--s-1);white-space:normal;font-family:Play;line-height:1;margin:var(--s-element) 0 var(--s-4);--ui-icon-size:var(--s-1);-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".index.jsx-3196267748 .index__full--title.main.jsx-3196267748{font-size:45px;--ui-icon-size:45px;}",".index.jsx-3196267748 .index__full--title-deepturn.jsx-3196267748{font-size:40px;--ui-icon-size:50px;color:var(--gray-20);--ui-icon-color:var(--gray-20);text-transform:uppercase;-webkit-filter:drop-shadow(4px 5px 3px var(--gray-60));filter:drop-shadow(4px 5px 3px var(--gray-60));}",".index.jsx-3196267748 .index__full-padding.jsx-3196267748{position:relative;border-radius:var(--border-radius);white-space:nowrap;outline:solid 1px var(--gray-90);background-color:var(--gray-90);padding:var(--s-9) var(--s-4);width:calc(var(--s-4-width) - var(--s-4) * 2);margin:0;}",".index.jsx-3196267748 .index__full-padding--title.jsx-3196267748{width:var(--s-4-width);padding:var(--s-9) var(--s-1);}",".index.jsx-3196267748 .index__sub-title.jsx-3196267748{width:100%;text-transform:capitalize;font-size:var(--s-4);color:var(--gray-50);}",".index__half.jsx-3196267748{display:block;width:50%;}",".index__sub-title.jsx-3196267748{color:var(--gray-30);font-size:var(--s-4);}"];r.__hash="3196267748";var o=n(16835),s=n(67294),c=[".mbone.jsx-1195905515{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".mbone.jsx-1195905515 .background-video.jsx-1195905515{position:fixed;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);min-width:calc(100vw + var(--s-1));width:auto;height:100%;min-height:calc(100vh + var(--s-1));height:100%;}",".mbone.jsx-1195905515 .background-video.jsx-1195905515 img.jsx-1195905515{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:100%;width:auto;min-height:100vw;z-index:-111;position:absolute;-webkit-filter:blur(4px);filter:blur(4px);background-position:center;background-repeat:no-repeat;background-size:cover;}","@media (min-width:900px){.mbone.jsx-1195905515 .background-video.jsx-1195905515 img.jsx-1195905515{width:100%;height:auto;}}"];c.__hash="1195905515";var l=n(59499),d=n(6158),x=n.n(d),u=["@-webkit-keyframes space-jsx-1108471592{0%,100%{background:linear-gradient(217deg,#ff0000,rgba(32,32,32,0.5647058824) 70.71%),linear-gradient(127deg,rgba(56,0,93,0.1882352941),rgba(0,0,255,0.3137254902) 70.71%),linear-gradient(336deg,rgba(56,0,93,0.1882352941),#462300 70.71%);}50%{background:linear-gradient(127deg,rgba(56,0,93,0.1882352941),rgba(0,0,255,0.3137254902) 70.71%),linear-gradient(336deg,rgba(56,0,93,0.1882352941),#462300 70.71%),linear-gradient(217deg,#ff0000,rgba(32,32,32,0.5647058824) 70.71%);}}","@keyframes space-jsx-1108471592{0%,100%{background:linear-gradient(217deg,#ff0000,rgba(32,32,32,0.5647058824) 70.71%),linear-gradient(127deg,rgba(56,0,93,0.1882352941),rgba(0,0,255,0.3137254902) 70.71%),linear-gradient(336deg,rgba(56,0,93,0.1882352941),#462300 70.71%);}50%{background:linear-gradient(127deg,rgba(56,0,93,0.1882352941),rgba(0,0,255,0.3137254902) 70.71%),linear-gradient(336deg,rgba(56,0,93,0.1882352941),#462300 70.71%),linear-gradient(217deg,#ff0000,rgba(32,32,32,0.5647058824) 70.71%);}}",".p-fix.jsx-1108471592{position:absolute;bottom:0;top:0;left:0;right:0;height:100%;width:100%;}",".d-flex.jsx-1108471592,.map-container.jsx-1108471592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}",".map-container.jsx-1108471592{position:relative;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;}",".map-container.jsx-1108471592 .current-location.jsx-1108471592{height:100%;z-index:1;top:auto;}",".map-container.jsx-1108471592 .map.jsx-1108471592{height:100%;width:100%;}","@media (max-width:1100px){.map-container.jsx-1108471592 .map.jsx-1108471592{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}"];u.__hash="1108471592";var f=n(42700);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(){var e=(0,s.useState)(null),t=e[0],n=e[1],i=(0,s.useRef)(null),a=(0,s.useCallback)(function(e){if(i.current&&t){var a=m(m({},t),e);n(a),console.log("Modifying element:",a)}},[t]),r=(0,s.useCallback)(function(e){e?document.querySelectorAll(".".concat(e)).forEach(function(e){e.remove()}):i.current&&(i.current.remove(),n(null))},[]);return{element:t,elementRef:i,modify:a,remove:r,add:(0,s.useCallback)(function(e){n(e)},[])}},g=function(e,t,n){t&&t.forEach(function(t){var i=document.createElement("div");i.className="globe-marker",i.onclick=function(){return t&&n&&n(t)};var a=t.location;a&&new(x()).Marker(i).setLngLat(a).addTo(e)})},b=n(80954),v=n.n(b),j=!1,y=!1,w=null,_=1,k="LandSvg",O=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.rpm,r=void 0===a?120:a,o=i.zoom,s=void 0===o?3:o,c=i.maxZoom,l=void 0===c?5:c;function d(){if(!j&&!y){var t=e.getZoom(),n=e.getCenter();if(t<l){var i=360/r*_;t>s&&(i*=(l-t)/(l-s)),n.lng-=i,e.easeTo({center:n,duration:1500,easing:function(e){return e}})}}}e.on("moveend",d),d(),t=function(){j=!0,w=Date.now()},n=v()(function(){j=!1,_=1+(Date.now()-(w||Date.now()))/5e3,d()},3e3),e.on("mousedown",t),e.on("mouseup",n),e.on("touchstart",t),e.on("touchend",n),e.on("mousemove",n),e.on("touchmove",n),e.on("userhoverstart",function(){y=!0}),e.on("userhoverend",function(){y=!1,d()}),e.getLayer(k)?(e.on("mouseenter",k,function(){e.fire("userhoverstart")}),e.on("mouseleave",k,function(){e.fire("userhoverend")})):console.warn('Layer "'.concat(k,'" does not exist'))},N=n(85893);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}x().accessToken="pk.eyJ1IjoibGFuZG9sYWJydW0iLCJhIjoiY2xnMDZ1aGVsMHJ5MzNsdGF3aHZhM3dtbyJ9.UihOXtkEeRk5tQDgDK8cLg";var P=function(e){var t,n=e.options,i=e.vessels,r=e.onVesselClick,o=(0,s.useRef)(null),c=(0,s.useRef)(),l=(0,f.Z)().width,d=p().remove,h={center:(null==n?void 0:n.center)||[0,10],zoom:(t=2,l<900?t=1.5:l<1100&&(t=2),t),style:"mapbox://styles/landolabrum/".concat("clw76pwt4003o01q120rh1mkk"),projection:{name:"globe"},antialias:!0,rpm:null==n?void 0:n.rpm},m=function(e){c.current=e,g(e,i,b),e.on("style.load",function(){e.getLayer("LandSvg")&&e.setPaintProperty("LandSvg","fill-color","#ff3300"),d("mapboxgl-ctrl-logo"),d("mapboxgl-canary"),d("mapboxgl-ctrl"),O(e,h)})},b=function(e){e.location&&c.current&&(c.current.flyTo({center:e.location,zoom:10,essential:!0}),r&&r(e))};return(0,s.useEffect)(function(){if(o.current){var e=new(x()).Map(S(S({},h),{},{container:o.current}));return m(e),function(){return e.remove()}}},[n,l,m]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:u.__hash,children:u}),(0,N.jsx)("div",{className:"jsx-".concat(u.__hash)+" map-container",children:(0,N.jsx)("div",{ref:o,className:"jsx-".concat(u.__hash)+" map"})})]})},E=n(36946),T=function(){var e=(0,E.dd)(),t=e.openModal,n=e.closeModal,i=(0,s.useState)(),a=i[0],r=i[1],o=(0,s.useState)(!1),c=o[0],l=o[1],d=(0,s.useRef)(null),x=function(e){r([Number(e.coords.longitude.toFixed(2)),Number(e.coords.latitude.toFixed(2))])},u=function(){console.error("Unable to retrieve your location"),l(!0)},f=(0,s.useCallback)(function(){var e=d.current;e&&"granted"===e.state?(n(),navigator.geolocation.getCurrentPosition(x,u)):l(!0)},[n,u,x]);return{location:a,requestLocation:(0,s.useCallback)(function(){navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(function(e){d.current=e,e.addEventListener("change",f),"granted"===e.state?navigator.geolocation.getCurrentPosition(x,u):"prompt"===e.state?t({title:"Know Your Location",confirm:{title:"Enable Location",body:"To use this feature, please enable location access.",statements:[{label:"Allow",onClick:function(){var e;null===(e=d.current)||void 0===e||e.addEventListener("change",f),navigator.geolocation.getCurrentPosition(x,u)}},{label:"Deny",onClick:function(){n(),l(!0)}}]}}):l(!0)}).catch(function(e){console.error("Error querying permissions",e),l(!0)}):(console.error("Permission API not supported"),l(!0))},[t,n,x,u,f]),permissionDenied:c}},C=n(82512),D=function(){var e=(0,C.U2)(),t=(0,o.Z)(e,2),n=t[0],i=t[1],r=(0,s.useState)({center:[10,10]}),l=r[0];r[1];var d=null==n?void 0:n.active,x=T(),u=function(){x||d?d&&i({active:!1}):i({active:!0,body:"loading map"})};return((0,s.useEffect)(function(){u()},[u]),x)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:c.__hash,children:c}),(0,N.jsx)("div",{className:"jsx-".concat(c.__hash)+" mbone",children:(0,N.jsxs)("div",{className:"jsx-".concat(c.__hash)+" background-video",children:[(0,N.jsx)("img",{src:"/assets/backgrounds/lava1.jpeg",className:"jsx-".concat(c.__hash)}),(0,N.jsx)(P,{options:l,onVesselClick:function(e){console.log("[ handleVesselClick ]",e)},vessels:[{name:"Two Story Smart Home in Philadelphia",location:[-75.1867254,39.9307048]}]})]})})]}):(0,N.jsx)(N.Fragment,{})},L=["h2.jsx-2576828194{color:var(--gray-20);-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:100%;white-space:nowrap;font-size:var(--s-1);}","h3.jsx-2576828194{background-color:var(--primary-o);border-radius:var(--border-radius);margin:var(--s-element) 0 var(--s-9);padding:var(--s-9) var(--s-4);color:var(--primary-lite);-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}","h4.jsx-2576828194{line-height:1.2;--ui-icon-height:var(--s-6);color:var(--gray-40);--ui-icon-color:var(--gray-40);width:auto;}",".d-flex.jsx-2576828194,.nirvana-index__content.jsx-2576828194 .list.jsx-2576828194,.nirvana-index__content.jsx-2576828194,.nirvana-index.jsx-2576828194,h3.jsx-2576828194{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".survey.jsx-2576828194{width:100%;position:relative;}",".nirvana-index.jsx-2576828194{width:100%;gap:var(--s-1);-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".nirvana-index__content.jsx-2576828194{gap:var(--s-1);-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}",".nirvana-index__content.jsx-2576828194 .list.jsx-2576828194{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:var(--s-4);}"];L.__hash="2576828194";var M=n(85854),Z=[".d-flex.jsx-3840878566,.home-grid-item__icon.jsx-3840878566,.home-grid-item__header.jsx-3840878566,.home-grid-item.jsx-3840878566{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".home-grid-item.jsx-3840878566{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-radius:var(--border-radius);gap:var(--s-4);-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:var(--gray-90);overflow:hidden;padding:var(--s-element) var(--s-4);}",".home-grid-item__header.jsx-3840878566{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:var(--s-4);}",".home-grid-item__title.jsx-3840878566{height:100%;color:var(--primary);font-size:var(--s-3);text-transform:capitalize;}",".home-grid-item__body.jsx-3840878566{color:var(--gray-50);}",".home-grid-item__icon.jsx-3840878566{height:90px;--ui-icon-width:90px;--ui-icon-height:90px;--ui-icon-color:var(--primary-o);}",".home-grid-item__center.jsx-3840878566{text-align:center;font-size:var(--s-5);line-height:1.5;}"];Z.__hash="3840878566";var F=n(55140),I=function(e){var t=e.icon,n=e.title,i=e.children;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:Z.__hash,children:Z}),(0,N.jsxs)("div",{className:"jsx-".concat(Z.__hash)+" home-grid-item",children:[(0,N.jsxs)("div",{className:"jsx-".concat(Z.__hash)+" home-grid-item__header",children:[t&&(0,N.jsx)("div",{className:"jsx-".concat(Z.__hash)+" home-grid-item__icon",children:(0,N.jsx)(F.a,{icon:t})}),(0,N.jsx)("div",{className:"jsx-".concat(Z.__hash)+" home-grid-item__title",children:n})]}),(0,N.jsx)("div",{className:"jsx-".concat(Z.__hash)+" home-grid-item__body home-grid-item__center",children:i})]})]})},U=n(22470),B=n(89360),W=function(){var e=".nirv{\n      display: flex;\n      color: var(--blue-10);\n      --ui-icon-color: var(--blue-10);\n      gap: var(--s-9);\n      font-size: var(--s-5);\n  }";return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:e.__hash,children:e}),(0,N.jsxs)("div",{className:"jsx-".concat(e.__hash)+" nirv",children:[(0,N.jsx)(F.a,{icon:"nirvana-energy-logo"}),"Nirvana Energy"]})]})},G=function(){var e=[{manufacturer:"Tesla",capacity:13,output:5.5},{manufacturer:"LG",capacity:15,output:6.4},{manufacturer:"Enphase",capacity:12,output:5},{manufacturer:"Generack",capacity:15.5,output:4.5},{manufacturer:"GrowWatt",capacity:10,output:6},{manufacturer:(0,N.jsx)(W,{}),capacity:15,output:12}],t=(0,E.dd)();return t.openModal,t.isModalOpen,(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:L.__hash,children:L}),(0,N.jsxs)("div",{id:"nirvana-index",className:"jsx-".concat(L.__hash)+" nirvana-index",children:[(0,N.jsx)(U.default,{id:"configure",startButton:"configure your back up system"}),(0,N.jsxs)("div",{className:"jsx-".concat(L.__hash)+" nirvana-index__content",children:[(0,N.jsxs)("div",{className:"jsx-".concat(L.__hash)+" list",children:[(0,N.jsx)("h3",{className:"jsx-".concat(L.__hash),children:"6 Key Questions to Enhance Your Solar System with Batteries"}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"Can I add batteries to my exisiting solar system?"]}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"What determines that the battery will back up what I need?"]}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"Will this battery keep me backed up if the grid stays down?"]}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"What does this battery setup have that others dont?"]}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"Is there a limit to how much the batteries can power in my home at the same time?"]}),(0,N.jsxs)("h4",{className:"jsx-".concat(L.__hash),children:[(0,N.jsx)(F.a,{icon:"fa-cube"}),"Can I change what I want backed up in the future"]})]}),(0,N.jsx)("h2",{className:"jsx-".concat(L.__hash),children:"Time to Create your Nirvana!"}),(0,N.jsx)("h4",{className:"jsx-".concat(L.__hash),children:"On and Off-grid battery back up If you're thinking about going off grid or want to learn more about backup battery systems, it's time to create your"}),(0,N.jsx)("h2",{className:"jsx-".concat(L.__hash),children:"The Importance of Backup Batteries"}),(0,N.jsxs)(M.Z,{sm:1,md:3,margin:"0 0 45px",gap:15,children:[(0,N.jsx)(I,{icon:"fal-cloud-bolt-sun",title:"power outages",children:"With backup batteries, you can be sure your home will have power even during outages. Most batteries will only back up what is stored when the grid goes down. Be sure to get our system that refills the battery if the grid stays down."}),(0,N.jsx)(I,{icon:"fa-globe",title:"environmental concerns",children:"Using solar battery backup systems helps reduce your carbon footprint. The less you rely on the grid, the more you do for our planet."}),(0,N.jsx)(I,{icon:"fal-circle-dollar",title:"cost savings",children:"Solar battery backup systems can help you save money on electricity bills in the long run. The 30% Federal Tax credit applies to battery storage that is connected to a PV"})]}),(0,N.jsx)("h3",{className:"jsx-".concat(L.__hash),children:"On-grid vs Off-grid Solar Battery Backup Systems"}),(0,N.jsxs)(M.Z,{sm:1,md:2,margin:"0 0",gapX:10,children:[(0,N.jsx)(I,{title:"on-grid",children:"On-grid systems are connected to the utility grid and can sell excess energy back to the power company or store excess energy depending on how the system is"}),(0,N.jsx)(I,{title:"environmental concerns",children:"Off-grid systems are not connected to the utility grid. These systems can be tailored to fit your needs no matter how big or small and using several different power sources."})]}),(0,N.jsx)("h3",{className:"jsx-".concat(L.__hash),children:"Don't be fooled by ( Name Brand ) Batteries"}),(0,N.jsx)(B.Z,{options:{hide:["header","footer"]},data:e})]})]})]})},X=n(23992),V=n(51633),q=[".aire-hotel.jsx-524189863{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--gray-90);background:radial-gradient(circle,var(--black) 0%,#000 100%);}",".aire-hotel__spot.jsx-524189863{z-index:1001;width:100%;height:100%;-webkit-animation:slideUp-jsx-524189863 1s ease-in forwards;animation:slideUp-jsx-524189863 1s ease-in forwards;}","@-webkit-keyframes slideUp-jsx-524189863{0%{height:0;}100%{height:50vh;}}","@keyframes slideUp-jsx-524189863{0%{height:0;}100%{height:50vh;}}"];q.__hash="524189863";var J=function(){var e=(0,C.U2)(),t=(0,o.Z)(e,2),n=(t[0],t[1]),i=(0,s.useState)(),r=i[0],c=i[1],l=T(),d=l.location,x=l.requestLocation;l.permissionDenied;var u=(0,E.dd)(),f=u.openModal;u.isModalOpen,u.closeModal;var h=function(){void 0==d?(x(),n({active:!0,body:"loading map"})):(d&&c({center:d,rpm:200}),n({active:!1}))};return((0,s.useEffect)(function(){return h},[d]),r)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:q.__hash,children:q}),(0,N.jsx)("div",{className:"jsx-".concat(q.__hash)+" aire-hotel",children:(0,N.jsx)(P,{options:r,onVesselClick:function(e){f({title:null==e?void 0:e.name,children:JSON.stringify(e)})},vessels:[{name:"Two Story Smart Home in Philadelphia",location:[-75.1867254,39.9307048]}]})})]}):(0,N.jsx)(N.Fragment,{children:"allow location..."})},R=function(){var e=(0,s.useState)(),t=e[0],n=e[1],i={nirv1:(0,N.jsx)(G,{}),mb1:(0,N.jsx)(D,{}),ah1:(0,N.jsx)(J,{})},o=X.Z.merchant.mid;return(0,s.useEffect)(function(){t||n(o)},[o]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a(),{id:r.__hash,children:r}),(0,N.jsx)(V.Z,{currentView:t,views:i})]})}}}]);