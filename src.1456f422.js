parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"Zs8j":[function(require,module,exports) {
"use strict";function t(t){var e=t,n=[];return[function(){return e},function(t){n.forEach(function(n){return n(t,e)}),e=t},function(t){return n.push(t)}]}function e(t){return"".concat(t[0].toUpperCase()).concat(t.slice(1))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.stateUnit=t,exports.upperCaseFirst=e;
},{}],"zDik":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.htmlToJustCs=d;var t=require("./lib");function e(t){return a(t)||o(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=/^\n( |\t)*$/,u=["Async","Autofocus","Autoplay","Checked","Contenteditable","Controls","Default","Defer","Disabled","Download","Hidden","Ismap","Loop","Multiple","Muted","Novalidate","Open","Readonly","Required","Reversed","Sandbox","Selected"];function l(e){var n=e.nodeName,r=e.nodeValue,o=n.indexOf("-"),a=(0,t.upperCaseFirst)(n.slice(o+1).replaceAll("-","")),c=u.includes(a)?"true":'"'.concat(r,'"');return"".concat(a," = ").concat(c)}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="\n".concat(" ".repeat(2*n));if(3===t.nodeType){var o=t.wholeText;return i.test(o)?"":"".concat(r,'@"').concat(o,'"')}var a=t.tagName,c=t.attributes,u=t.childNodes,d=e(c),f=d.filter(function(t){return!t.nodeName.includes("-")}).map(l),p=d.filter(function(t){return t.nodeName.startsWith("aria-")}).map(l).join(", "),m=d.filter(function(t){return t.nodeName.startsWith("data-")}).map(l).join(", "),y=[].concat(e(f),e(p.length>0?["Aria = new AriaAttrs { ".concat(p," }")]:[]),e(m.length>0?["DataSet = new { ".concat(m," }")]:[])).join(", "),h=e(u).map(function(t){return s(t,n+1)}).filter(function(t){return t.length>0}).join(","),b=0===h.length;return"".concat(r,"_<").concat(a[0]).concat(a.slice(1).toLowerCase(),">(new Attrs{ ").concat(y," }").concat(b?"":",").concat(h).concat(b?"":r,")")}function d(t){return e((new DOMParser).parseFromString(t,"text/html").body.childNodes).map(s).join("\n")}
},{"./lib":"Zs8j"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var t=require("./lib"),e=require("./htmlToJustCs");function r(t,e){return a(t)||u(t,e)||o(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(l){a=!0,o=l}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}function a(t){if(Array.isArray(t))return t}var l=(0,t.stateUnit)(""),c=r(l,3),d=c[0],s=c[1],f=c[2],m=(0,t.stateUnit)(""),y=r(m,3),b=y[0],v=y[1],g=y[2],h=document.getElementById("sourceHtml"),p=document.getElementById("convertButton"),E=document.getElementById("targetJustCs").querySelector("code"),A=document.getElementById("copyToClipboardButton"),B=document.getElementById("clearButton");h.addEventListener("change",function(t){return s(t.target.value)}),h.addEventListener("paste",function(t){return s(t.clipboardData)}),p.addEventListener("click",function(){return v((0,e.htmlToJustCs)(d()))}),A.addEventListener("click",function(){return navigator.clipboard.writeText(b())}),B.addEventListener("click",function(){h.value="",s(""),v("")}),f(function(t){return 0===t.length?p.setAttribute("disabled",!0):p.removeAttribute("disabled")}),g(function(t){E.innerText=t,0===t.length?A.setAttribute("disabled",!0):A.removeAttribute("disabled")});
},{"./styles.css":"D9Nj","./lib":"Zs8j","./htmlToJustCs":"zDik"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-zlthyt/src.1456f422.js.map