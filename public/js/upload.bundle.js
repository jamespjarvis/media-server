!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=335)}({335:function(e,t,n){"use strict";function o(e){e.preventDefault(),l.disabled=!0;var t=new FormData(e.target),n=new XMLHttpRequest;n.open("POST","/api",!0),n.upload.addEventListener("progress",function(e){if(e.lengthComputable){var t=Math.round(100*e.loaded/e.total);a.style.width=t+"%",a.textContent=t+"%"}}),n.upload.addEventListener("load",function(){window.location.pathname="/"}),n.send(t)}function r(){fetch("/api").then(function(e){return e.json()}).then(function(e){e.map(function(e){var t=document.createElement("option");return t.value=e.id,t.label=e.name,t}).forEach(function(e){return f.appendChild(e)})})}function u(){for(;f.firstChild;)f.remove(f.firstChild)}function i(){u(),r()}function c(){var e=f.options[f.selectedIndex].value;fetch("/api/video/"+e,{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){console.log(e),i()})}n(336);var a=document.querySelector(".progress-bar"),d=document.querySelector("form#uploadForm"),l=document.querySelector("input#submit");d.addEventListener("submit",o);var f=document.querySelector("select.videoSelect");document.querySelector("button#deleteSubmitButton").addEventListener("click",c),r()},336:function(e,t){}});