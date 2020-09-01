module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(3);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.min,n=void 0===t?0:t,i=e.max,c=void 0===i?50:i,u=e.defaultValue,l=void 0===u?25:u,s=e.step,f=void 0===s?1:s,d=e.color,p=Object(r.useRef)(),b=Object(r.useRef)(),v=a(Object(r.useState)(l),2),m=v[0],h=v[1];return Object(r.useEffect)((function(){var e=100*((p.current.value-n)/c-n),t=Math.round(20*e/100)-10;b.current.style.left="calc("+e+"% - "+t+"px)",d&&window.document.querySelector("body").style.setProperty("--base-color",d)}),[]),o.a.createElement("div",{className:"range-container"},o.a.createElement("input",{ref:p,id:"range1",type:"range",min:n,max:c,step:f,defaultValue:l,onInput:function(e){return t=e.currentTarget,n=t.attributes.min.value,r=t.attributes.max.value,o=t.value,a=(o-n)/(r-n)*100,i=Math.round(20*a/100)-10,b.current.style.left="calc("+a+"% - "+i+"px)",void h(o);var t,n,r,o,a,i}}),o.a.createElement("output",{ref:b,name:"rangeVal"},m))}},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=c(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:m(d,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var a=v++;n=b||(b=l(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,':root{--base-color: #2a41e8}.range-container{display:flex;flex-direction:column;position:relative;margin:calc(25px * 2) 0}.range-container *{margin:0}.range-container input[type="range"]{position:absolute;width:100%;-webkit-appearance:none}.range-container input[type="range"]:focus{outline:none}.range-container input[type="range"]::-webkit-slider-runnable-track{height:0.15rem;background-color:var(--base-color);border:none;border-radius:50rem}.range-container input[type="range"]::-webkit-slider-thumb{cursor:pointer;-webkit-appearance:none;appearance:none;width:25px;height:25px;background:white;border:0.15rem solid var(--base-color);border-radius:50%;transform:translateY(-0.7rem);box-shadow:0 0 0px 0.2rem rgba(102,103,107,0.12)}.range-container input[type="range"]::-webkit-slider-thumb:hover{box-shadow:0 0 0px 0.33rem rgba(42,65,232,0.12);transition:0.2s}.range-container output{position:absolute;top:calc(-25 * 2px);display:none;transform:translateX(-50%);white-space:nowrap;max-width:none;background-color:#333;padding:4px 12px;line-height:21px;color:#fff;font-size:14px;border-radius:4px}.range-container output::after{content:"";position:absolute;width:0;height:0;bottom:-6px;left:50%;transform:translateX(-50%);border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #333}.range-container input[type="range"]:active+output{display:block}\n',""]),t.default=o}]);