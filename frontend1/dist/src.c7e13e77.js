parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sr70":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof e&&e.amd?e(["exports"],n):n(t["leaflet-simple-map-screenshoter"]=t["leaflet-simple-map-screenshoter"]||{})}(this,function(e){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}var o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},r=n(function(e,t){!function(t){function n(e,t){return function(e){void 0===e.imagePlaceholder?h.impl.options.imagePlaceholder=f.imagePlaceholder:h.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?h.impl.options.cacheBust=f.cacheBust:h.impl.options.cacheBust=e.cacheBust,void 0===e.useCredentials?h.impl.options.useCredentials=f.useCredentials:h.impl.options.useCredentials=e.useCredentials}(t=t||{}),Promise.resolve(e).then(function(e){return function(e,t,n){return n||!t||t(e)?Promise.resolve(e).then(function(e){return e instanceof HTMLCanvasElement?s.makeImage(e.toDataURL()):e.cloneNode(!1)}).then(function(n){return function(e,t,n){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var o=Promise.resolve();return t.forEach(function(t){o=o.then(function(){return r(t,n)}).then(function(t){t&&e.appendChild(t)})}),o}(t,s.asArray(o),n).then(function(){return t})}(e,n,t)}).then(function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(function(){!function(e,t){e.cssText?(t.cssText=e.cssText,t.font=e.font):function(e,t){s.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}).then(function(){function n(n){var o=window.getComputedStyle(e,n),r=o.getPropertyValue("content");if(""!==r&&"none"!==r){var i=s.uid(),a=t.getAttribute("class");a&&t.setAttribute("class",a+" "+i);var c=document.createElement("style");c.appendChild(function(e,t,n){var o="."+e+":"+t,r=n.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(n):function(e){return s.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(n);return document.createTextNode(o+"{"+r+"}")}(i,n,o)),t.appendChild(c)}}[":before",":after"].forEach(function(e){n(e)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}).then(function(){return t}):t}(e,t)}):Promise.resolve()}(e,t.filter,!0)}).then(i).then(a).then(function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]}),e}).then(function(n){return function(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(s.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(n,t.width||s.width(e),t.height||s.height(e))})}function o(e,t){return n(e,t).then(s.makeImage).then(s.delay(100)).then(function(n){var o="number"!=typeof t.scale?1:t.scale,r=function(e,n){var o=document.createElement("canvas");if(o.width=(t.width||s.width(e))*n,o.height=(t.height||s.height(e))*n,t.bgcolor){var r=o.getContext("2d");r.fillStyle=t.bgcolor,r.fillRect(0,0,o.width,o.height)}return o}(e,o),i=r.getContext("2d");return n&&(i.scale(o,o),i.drawImage(n,0,0)),r})}function r(e,t,n){function o(e){return e instanceof HTMLCanvasElement?s.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,n){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var o=Promise.resolve();return t.forEach(function(t){o=o.then(function(){return r(t,n)}).then(function(t){t&&e.appendChild(t)})}),o}(t,s.asArray(o),n).then(function(){return t})}function a(e,t){function n(){!function(e,t){e.cssText?(t.cssText=e.cssText,t.font=e.font):function(e,t){s.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}function o(){function n(n){var o=window.getComputedStyle(e,n),r=o.getPropertyValue("content");if(""!==r&&"none"!==r){var i=s.uid(),a=t.getAttribute("class");a&&t.setAttribute("class",a+" "+i);var c=document.createElement("style");c.appendChild(function(e,t,n){var o="."+e+":"+t,r=n.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(n):function(e){function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}return s.asArray(e).map(t).join("; ")+";"}(n);return document.createTextNode(o+"{"+r+"}")}(i,n,o)),t.appendChild(c)}}[":before",":after"].forEach(function(e){n(e)})}function r(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function i(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}return t instanceof Element?Promise.resolve().then(n).then(o).then(r).then(i).then(function(){return t}):t}return n||!t||t(e)?Promise.resolve(e).then(o).then(function(n){return i(e,n,t)}).then(function(t){return a(e,t)}):Promise.resolve()}function i(e){return l.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function a(e){return u.inlineAll(e).then(function(){return e})}var s=function(){function e(e){var t=/\.([^\.\/]*?)(\?|$)/g.exec(e);return t?t[1]:""}function t(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return function(){var e="application/font-woff";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):function(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),o=n.length,r=new Uint8Array(o),i=0;i<o;i++)r[i]=n.charCodeAt(i);t(new Blob([r],{type:"image/png"}))})}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),o=n.createElement("base");n.head.appendChild(o);var r=n.createElement("a");return n.body.appendChild(r),o.href=t,r.href=e,r.href},getAndEncode:function(e){var t=3e4;return h.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise(function(n){function o(e){console.error(e),n("")}var r,i=new XMLHttpRequest;if(i.onreadystatechange=function(){if(4===i.readyState){if(200!==i.status)return void(r?n(r):o("cannot fetch resource: "+e+", status: "+i.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(i.response)}},i.ontimeout=function(){r?n(r):o("timeout of "+t+"ms occured while fetching resource: "+e)},i.responseType="blob",i.timeout=t,h.impl.options.useCredentials&&(i.withCredentials=!0),i.open("GET",e,!0),i.send(),h.impl.options.imagePlaceholder){var a=h.impl.options.imagePlaceholder.split(/,/);a&&a[1]&&(r=a[1])}})},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}},asArray:function(e){for(var t=[],n=e.length,o=0;o<n;o++)t.push(e[o]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return"data:,"===e?Promise.resolve():new Promise(function(t,n){var o=new Image;h.impl.options.useCredentials&&(o.crossOrigin="use-credentials"),o.onload=function(){t(o)},o.onerror=n,o.src=e})},width:function(e){var n=t(e,"border-left-width"),o=t(e,"border-right-width");return e.scrollWidth+n+o},height:function(e){var n=t(e,"border-top-width"),o=t(e,"border-bottom-width");return e.scrollHeight+n+o}}}(),c=function(){function e(e){return-1!==e.search(o)}function t(e){for(var t,n=[];null!==(t=o.exec(e));)n.push(t[1]);return n.filter(function(e){return!s.isDataUrl(e)})}function n(e,t,n,o){return Promise.resolve(t).then(function(e){return n?s.resolveUrl(e,n):e}).then(o||s.getAndEncode).then(function(e){return s.dataAsUrl(e,s.mimeType(t))}).then(function(n){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+s.escape(e)+")(['\"]?\\))","g")}(t),"$1"+n+"$3")})}var o=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(o,r,i){return e(o)?Promise.resolve(o).then(t).then(function(e){var t=Promise.resolve(o);return e.forEach(function(e){t=t.then(function(t){return n(t,e,r,i)})}),t}):Promise.resolve(o)},shouldProcess:e,impl:{readUrls:t,inline:n}}}(),l=function(){function e(){function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return c.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}return Promise.resolve(s.asArray(document.styleSheets)).then(function(e){var t=[];return e.forEach(function(e){if(e.hasOwnProperty("cssRules"))try{s.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}}),t}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return c.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(t){return t.map(e)})}return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}}}(),u=function(){function e(e){return{inline:function(t){return s.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||s.getAndEncode).then(function(t){return s.dataAsUrl(t,s.mimeType(e.src))}).then(function(t){return new Promise(function(n,o){e.onload=n,e.onerror=n,e.src=t})})}}}return{inlineAll:function t(n){return n instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?c.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}(n).then(function(){return n instanceof HTMLImageElement?e(n).inline():Promise.all(s.asArray(n.childNodes).map(function(e){return t(e)}))}):Promise.resolve(n)},impl:{newImage:e}}}(),f={imagePlaceholder:void 0,cacheBust:!1,useCredentials:!1},h={toSvg:n,toPng:function(e,t){return o(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return o(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return o(e,t||{}).then(s.canvasToBlob)},toPixelData:function(e,t){return o(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,s.width(e),s.height(e)).data})},toCanvas:function(e,t){return o(e,t||{})},impl:{fontFaces:l,images:u,util:s,inliner:c,options:{}}};e.exports=h}()}),i=n(function(e,t){!function(e,t){t()}(0,function(){function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){a(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,a){var s=i.URL||i.webkitURL,c=document.createElement("a");o=o||e.name||"download",c.download=o,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):n(c.href)?t(e,o,a):r(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){r(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),o);else if(n(e))t(e,o,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){r(a)})}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},l.readAsDataURL(e)}else{var u=i.URL||i.webkitURL,f=u.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});i.saveAs=a.saveAs=a,e.exports=a})}),a=L.Control.extend({options:{cropImageByInnerWH:!0,hidden:!1,domtoimageOptions:{},position:"topleft",screenName:"screen",iconUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIGlkPSJjYW1lcmEiPjxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMTYsOS41MDFjLTQuNDE5LDAtOCwzLjU4MS04LDhjMCw0LjQxOCwzLjU4MSw4LDgsOGM0LjQxOCwwLDgtMy41ODIsOC04UzIwLjQxOCw5LjUwMSwxNiw5LjUwMXogTTIwLjU1NSwyMS40MDZjLTIuMTU2LDIuNTE2LTUuOTQzLDIuODA3LTguNDU5LDAuNjVjLTIuNTE3LTIuMTU2LTIuODA3LTUuOTQ0LTAuNjUtOC40NTljMi4xNTUtMi41MTcsNS45NDMtMi44MDcsOC40NTktMC42NUMyMi40MiwxNS4xMDIsMjIuNzExLDE4Ljg5MSwyMC41NTUsMjEuNDA2eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMTYsMTMuNTAxYy0yLjIwOSwwLTMuOTk5LDEuNzkxLTQsMy45OTl2MC4wMDJjMCwwLjI3NSwwLjIyNCwwLjUsMC41LDAuNXMwLjUtMC4yMjUsMC41LTAuNVYxNy41YzAuMDAxLTEuNjU2LDEuMzQzLTIuOTk5LDMtMi45OTljMC4yNzYsMCwwLjUtMC4yMjQsMC41LTAuNVMxNi4yNzYsMTMuNTAxLDE2LDEzLjUwMXoiLz48cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTI5LjQ5Miw4LjU0MmwtNC4zMzQtMC43MjNsLTEuMzczLTMuNDM0QzIzLjMyNiwzLjI0LDIyLjIzMiwyLjUsMjEsMi41SDExYy0xLjIzMiwwLTIuMzI2LDAuNzQtMi43ODYsMS44ODZMNi44NDIsNy44MTlMMi41MDksOC41NDJDMS4wNTUsOC43ODMsMCwxMC4wMjcsMCwxMS41djE1YzAsMS42NTQsMS4zNDYsMywzLDNoMjZjMS42NTQsMCwzLTEuMzQ2LDMtM3YtMTVDMzIsMTAuMDI3LDMwLjk0NSw4Ljc4MywyOS40OTIsOC41NDJ6IE0zMCwyNi41YzAsMC41NTMtMC40NDcsMS0xLDFIM2MtMC41NTMsMC0xLTAuNDQ3LTEtMXYtMTVjMC0wLjQ4OSwwLjM1NC0wLjkwNiwwLjgzNi0wLjk4Nkw4LjI4LDkuNjA3bDEuNzkxLTQuNDc4QzEwLjIyNCw0Ljc1LDEwLjU5MSw0LjUsMTEsNC41aDEwYzAuNDA4LDAsMC43NzUsMC4yNDksMC45MjgsMC42MjlsMS43OTEsNC40NzhsNS40NDUsMC45MDdDMjkuNjQ2LDEwLjU5NCwzMCwxMS4wMTEsMzAsMTEuNVYyNi41eiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+",hideElementsWithSelectors:[".leaflet-control-container"],onCropBorderSize:2,caption:null,captionFontSize:15,captionFont:"Arial",captionColor:"black",captionBgColor:"white",captionOffset:5,mimeType:"image/png",debugMode:!1,preventDownload:!1,onPixelDataFail:function(e){var t=e.node,n=e.error;return console.warn("Map node is very big "+t.scrollWidth+"x"+t.scrollHeight),console.warn("Add function: SimpleMapScreenshoter({\n              onPixelDataFail: function({ node, plugin, error, mapPane, domtoimageOptions }) {\n                 // Solutions:\n                 // decrease size of map\n                 // or decrease zoom level\n                 // or remove elements with big distanses\n                 // and after that return image in Promise - plugin._getPixelDataOfNormalMap\n                 return plugin._getPixelDataOfNormalMap(domtoimageOptions)\n              }\n            })"),Promise.reject(n)}},onAdd:function(){return this._container=L.DomUtil.create("div","leaflet-control-simpleMapScreenshoter"),this._link=null,this._screenState={status:1,promise:null},!1===this.options.hidden&&this._addScreenBtn(),this._container},takeScreen:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blob",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={};for(var r in this.options)n.hasOwnProperty(r)?o[r]=n[r]:o[r]=this.options[r];return 2===this._screenState.status?this._screenState.promise:(this._map.fire("simpleMapScreenshoter.takeScreen"),this._screenState.status=2,this._setElementsVisible(!1),this._screenState.promise=this._getPixelData(o).then(function(t){return e._setElementsVisible(!0),e._toCanvas(t,o)}).then(function(n){return"image"===t?e._canvasToImage(n,o):"canvas"===t?n:e._canvasToBlob(n)}).then(function(t){return e._screenState.status=1,e._map.fire("simpleMapScreenshoter.done"),t}).catch(function(t){return e._setElementsVisible(!0),e._screenState.status=1,e._map.fire("simpleMapScreenshoter.error",{e:t}),Promise.reject(t)}),this._screenState.promise)},_setElementsVisible:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.hideElementsWithSelectors.forEach(function(n){var o=e._map._container.querySelectorAll(n),r=!0,i=!1,a=void 0;try{for(var s,c=o[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)s.value.style.opacity=!1===t?0:1}catch(e){i=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(i)throw a}}})},_canvasToImage:function(e,t){var n=t.mimeType,o=e.toDataURL(n);return-1===o.indexOf("base64")?Promise.reject(new Error("Base64 image generation error")):Promise.resolve(o)},_canvasToBlob:function(e){return new Promise(function(t,n){e.toBlob(function(e){t(e)},"image/png")})},_toCanvas:function(e,t){var n=t.captionOffset,o=t.caption,r=t.captionFontSize,i=t.captionFont,a=t.captionColor,s=t.captionBgColor,c=this._node,l=c.screenHeight,u=c.screenWidth,f=document.createElement("canvas");f.width=u,f.height=l;for(var h=f.getContext("2d"),d=h.createImageData(u,l),p=0;p<e.length;++p)d.data[p]=e[p];h.putImageData(d,0,0),d=null;var m=document.createElement("canvas"),g=m.getContext("2d"),w=0,v=0,M=l,y=u;if(!0===this.options.cropImageByInnerWH){for(var L=[],P=0,x=0;x<l;++x){P=0;for(var T=0;T<u;++T)0===e[4*x*u+4*T+4]&&P++;P===u&&L.push(x)}var b=this._getMinAndMaxOnValuesBreak(L);w=b.min;for(var C=u,j=b.max,S=[],D=0,N=v;N<C;++N){D=0;for(var E=0;E<l;++E)0===e[4*E*u+4*N+4]&&D++;D===l&&S.push(N)}var A=this._getMinAndMaxOnValuesBreak(S);v=A.min,C=A.max,(0===v&&0===C||null===C)&&(C=u),(0===w&&0===j||null===j)&&(j=l),!0===this.options.debugMode&&(console.log("emptyYLine",L),console.log("minMaxY",b),console.log("emptyXLine",S),console.log("minMaxX",A),console.log("debugX",{}),console.log("debugY",{})),0===w&&j===l&&0===v&&C===u||(w+=this.options.onCropBorderSize,j-=this.options.onCropBorderSize,v+=this.options.onCropBorderSize,C-=this.options.onCropBorderSize),M=j-w,y=C-v,m.width=y,m.height=M}else m.width=y,m.height=M;var z=null;return o&&(z="function"==typeof o?o.call(this):o),null!==z&&(m.height=m.height+(n+r+n),g.beginPath(),g.rect(0,0,m.width,m.height),g.fillStyle=s,g.fill(),g.save()),g.drawImage(f,v,w,y,M,0,0,y,M),null!==z&&(g.font=r+"px "+i,g.fillStyle=a,g.fillText(z,n,M+n+r)),Promise.resolve(m)},_getMinAndMaxOnValuesBreak:function(e){for(var t=0,n=0,o=!1,r=1;r<e.length;r++){if(e[r]-1!==e[r-1]){n=e[r],o=!0;break}t=e[r]}return!1===o&&e[0]>1?(t=0,n=e[0]):!1===o&&(t=e[e.length-1]||0,n=null),{min:t,max:n}},_getPixelData:function(e){var t=this,n=e.domtoimageOptions,o=void 0===n?{}:n;return this._getPixelDataOfNormalMap(o).catch(function(e){return console.warn("May be map size very big on that zoom level, we have error:",e.toString()),console.warn("You can manually hide map elements with large distances between them for fix that warn"),t._getPixelDataOfBigMap(o)})},_getPixelDataOfNormalMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._map.getContainer();return this._node={node:t,screenHeight:t.scrollHeight,screenWidth:t.scrollWidth},r.toPixelData(t,e)},_getPixelDataOfBigMap:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this._map.getContainer(),o=this._map.getPane("mapPane");o.style.width=2*n.clientWidth+"px",o.style.height=2*n.clientHeight+"px",o.style.overflow="hidden";var i=function(){o.style.width="initial",o.style.height="initial",o.style.overflow="initial"};return this._node={node:n,screenHeight:n.scrollHeight,screenWidth:n.scrollWidth},r.toPixelData(n,t).then(function(e){return i(),e}).catch(function(r){return i(),e.options.onPixelDataFail({plugin:e,node:n,mapPane:o,error:r,domtoimageOptions:t})})},_addScreenBtn:function(){this._link=L.DomUtil.create("a","leaflet-control-simpleMapScreenshoter-btn",this._container),this._addCss(),L.DomEvent.addListener(this._link,"click",this._onScreenBtn,this),L.DomEvent.disableClickPropagation(this._link)},_addCss:function(){var e="\n    .leaflet-control-simpleMapScreenshoter{\n       border: 2px solid rgba(0,0,0,0.2);\n       background-clip: padding-box;\n    }\n    .leaflet-control-simpleMapScreenshoter a{\n       background-color: #fff;\n       border-bottom: 1px solid #ccc;\n       width: 30px;\n       height: 30px;\n       line-height: 30px;\n       display: block;\n       text-align: center;\n       text-decoration: none;\n       color: black;\n       overflow: hidden;\n       border-radius: 2px;\n       background-image: url('"+this.options.iconUrl+"');\n       background-position: 46% 41%;\n       background-repeat: no-repeat;\n       background-size: 63%;\n    }\n    .leaflet-control-simpleMapScreenshoter a:hover{\n       cursor: pointer;\n    }\n    ",t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.appendChild(document.createTextNode(e)),t.appendChild(n)},_onScreenBtn:function(){var e=this;this._map.fire("simpleMapScreenshoter.click"),this.options.preventDownload||this.takeScreen().then(function(t){var n="function"==typeof e.options.screenName?e.options.screenName.call(e):e.options.screenName;i.saveAs(t,n+".png")}).catch(function(t){e._map.fire("simpleMapScreenshoter.error",{e:t})})}}),s=(L.Control.SimpleMapScreenshoter=a,L.simpleMapScreenshoter=function(e){return new L.Control.SimpleMapScreenshoter(e)},a);e.default=s,e.SimpleMapScreenshoter=a,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=require("leaflet-simple-map-screenshoter"),n={center:{lat:40.7,lng:22.8},zoom:6},t=L.map("leafletMapid",n);t.createPane("snapshot-pane"),t.createPane("dont-include");var a=L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],pane:"snapshot-pane"}).addTo(t),o={hideElementsWithSelectors:[".leaflet-control-container",".leaflet-dont-include-pane","#snapshot-button"],hidden:!0},r=new e.SimpleMapScreenshoter(o);r.addTo(t);var i=function(){var e=1e3,n=500,t=0,a=0;r.takeScreen("image").then(function(o){var r=new Image;r.onload=function(){var o=document.createElement("canvas"),i=o.getContext("2d");o.width=e,o.height=n,i.drawImage(r,t,a,e,n,0,0,e,n);var c=o.toDataURL("image/png");console.log(c);var l=new Image;l.style="border: 1px solid black",l.src=c;var d=document.querySelector(".generative");d.appendChild(o),o.toBlob(function(e){console.log(e);var n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){var e=n.result,t=document.getElementById("snapshot-button");t.disabled=!0,t.innerHTML="Generating...",fetch("/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:e})}).then(function(e){return e.json()}).then(function(e){var n=document.createElement("p");n.innerHTML=e.caption_V3,d.appendChild(n),t.disabled=!1,t.innerHTML="Caption this"}).catch(function(e){console.error("Error:",e)})}})},r.src=o}).catch(function(e){alert(e.toString())})},c=document.getElementById("snapshot-button");c.addEventListener("click",i);
},{"leaflet-simple-map-screenshoter":"sr70"}]},{},["H99C"], null)
//# sourceMappingURL=/src.c7e13e77.js.map