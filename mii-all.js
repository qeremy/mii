/**
 * @name            : mii.js
 * @version         : v1.7
 * @description     : Multipurpose JavaScript Library <https://github.com/qeremy/mii>
 * @copyright       : Kerem Gunes (2013)
 * @license         : MIT license <http://opensource.org/licenses/MIT>
 * @date            : 2013-11-21 22:38 (Europe/Istanbul)
 *
 * Internal Modules : mii.js (base), mii.event.js, mii.animate.js, mii.dom.js, mii.ajax.js
 * External Modules : qwery.js <https://github.com/ded/qwery>
 * Compress Tool    : http://jscompress.com
 */

function log(s) { console.log(s); } // @tmp

// mii.js
;(function(e,t){function u(n){if(a.typeOf(n)==="array"){return n}var i=[],s=0;if(!n||typeof n==="string"||n.nodeType||n.length===t||n==e){i=[n]}else{try{i=r.call(n)}catch(o){while(s<n.length){i.push(n[s++])}}}return i}var n=e.document,r=[].slice,i={}.toString,s=/^\s+|\s+$/g,o=0;var a={fun:function(){},now:function(){return+(new Date)},uuid:function(){return++o},win:function(t){if(!t)return e;return t==t.window?t:t.nodeType===9?t.defaultView||t.parentWindow:null},doc:function(e){return e&&e.ownerDocument||n},typeOf:function(e){if(e===null)return"null";if(typeof e==="undefined")return"undefined";if(e.alert&&e==e.window)return"window";if(e.nodeType===9)return"document";return i.call(e).slice(8,-1).toLowerCase()},trim:function(e){return e!=null?e.replace(s,""):""},isEmpty:function(e){var t=this.typeOf(e);if(t==="undefined"||!e)return true;if(t==="array"||typeof e.length==="number")return!e.length;if(t==="object")for(var n in e)return false;return true;return false},forEach:function(e,n,r){var i=e&&e.length,s;if(i!==t){for(s=0;s<i;s++){if(n.call(r||e[s],e[s],s,e)===false)break}}else{for(s in e){if(n.call(r||e[s],s,e[s],e)===false)break}}return r||e},filter:function(e,t){e=e||[];for(var n=0,r=e.length,i=[];n<r;n++){if(t(e[n],n)){i.push(e[n])}}return i},toArray:function(e){var t=0,n=arguments.length,r=[];while(t<n){r=r.concat(u(arguments[t++]))}return r},inArray:function(e,t){for(var n=t.length-1;n>=0;n--){if(t[n]==e){return true}}return false},mix:function(){var e=arguments,t=1,n,r;if(e.length<2){throw"mii.mix(): Function accepts at least 2 arguments."}n=e[0];while(r=e[t++]){for(var i in r){r.hasOwnProperty(i)&&(n[i]=r[i])}}return n},extend:function(e,t){var n=typeof e,r=typeof t;if(n==="object"&&r==="undefined"){t=e,e=this}else if(n==="string"){e=!this[e]?this[e]={}:this[e]}return this.mix(e,t)},toString:function(){var e=arguments;if(!e.length){return"[object mii]"}this[e[0]].toString=function(){return"[object "+e[1]+"]"}}};var f=[];a.onReady=function(e){if(typeof e==="function"){f.push(e)}n.onreadystatechange=function(){if(this.readyState==="complete"){n.onreadystatechange=null;while(f.length){f.shift()(a)}}}};var l={firefox:/firefox\/([\d\.]+)/,chrome:/chrome\/([\d\.]+)/,safari:/webkit.*?version\/([\d\.]+)/,opera:/opera.*?version\/([\d\.]+)/,ie:/msie\s+([\d\.]+)/};a.browser=function(){var t=e.navigator.userAgent.toLowerCase(),n,r,i={};for(n in l){if(r=l[n].exec(t)){break}}i[n]=true;i["version"]=parseFloat(r&&r[1]);i["versionOrig"]=r[1];return i}();a.import=function(e,t){e=a.import.path+e;if(!a.inArray(e,a.import.files)){var r=n.createElement("script");r.src=e;r.async=true;if(typeof t==="function"){r.onload=r.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){r.onload=r.onreadystatechange=null;t()}}}n.getElementsByTagName("head")[0].appendChild(r);a.import.files.push(e)}};a.import.path="";a.import.files=[];a.import.setPath=function(e){a.import.path=e};a.import.getPath=function(){return a.import.path};e.mii=a})(window)

// mii.event.js
;(function(e){var t=function(){function r(e){e.preventDefault=t;e.stopPropagation=n;e.target=e.srcElement;e.relatedTarget=e.fromElement;e.keyCode=e.which;return e}function i(e){e=e||r(((this.ownerDocument||this.document||this).parentWindow||window).event);var t=true,n=this.events[e.type];for(var i in n){if(n[i]&&n[i].call(this,e)===false){t=false}}return t}function s(t,n,r){if(t.addEventListener){t.addEventListener(n,r,false)}else{var s;if(t.nodeType===3||t.nodeType===8){return}if(t.setInterval&&t!==window&&!t.frameElement){t=window}t.events=t.events||{};s=t.events[n];if(!s){s=t.events[n]={};if(t["on"+n])s[0]=t["on"+n]}r.UUID=r.UUID||e.uuid();s[r.UUID]=r;t["on"+n]=i}}function o(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}else{if(e.events&&e.events[t]&&n.UUID){e.events[t][n.UUID]=null}}}function u(e,t,n){var r;s(e,t,r=function(i){o(e,t,r);n.call(e,i)})}function f(e,t,n){var r=a(t),i,o;if(document.createEventObject){o=document.createEventObject();if(e[r]==null){s(e,t,n)}i=o}else{o=document.createEvent("Event");o.initEvent(t,true,true);if(e[r]==null){s(e,t,n)}i=o}e[r]=i}function l(e,t){var n=a(t);e[n]=null}function c(e,t){var n=a(t),r=e[n];if(r!=null){if(e.fireEvent){return e.fireEvent("on"+t,r)}else{return!e.dispatchEvent(r)}}}var t=function(){this.returnValue=false},n=function(){this.cancelBubble=true};var a=function(e){return"mii.event.fire."+e};return{once:u,on:s,off:o,addEvent:s,removeEvent:o,fire:c,addFireEvent:f,removeFireEvent:l}}();e.event=t;e.toString("event","mii.event")})(mii)

// mii.animate.js
;(function(e){function a(e,t){e.style.opacity=t;if(o){e.style.filter="alpha(opacity="+100*t+")";e.style.zoom=1}}function f(e){this.el=e;this.running=false;this.stopped=false}var t=350,n={fast:150,slow:750},r=60,i=function(e,t,n,r){return-n*(e/=r)*(e-2)+t},s={opacity:1,zoom:1,zIndex:1,columnCount:1,columns:1,fillOpacity:1,fontWeight:1,lineHeight:1},o=e.browser.ie&&e.browser.version<9,u=window.requestAnimationFrame;if(!u){u=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/r)}}()}f.prototype.animate=function(r,i,s){this.stop();this.running=true;this.stopped=false;this.options=r;this.duration=i!==""&&!isNaN(i)?i:n[i]||t;this.fix=this.duration/10*.01*2;this.animations=[];this.startTime=e.now();this.elapsedTime=0;this.fn=s;var o=this,a,f,l;for(a in this.options){if(this.options.hasOwnProperty(a)){f=parseFloat(e.dom(this.el).getStyle(a))||0;l=this.options[a];this.animations.push({styleProp:a,startValue:f,endValue:l,diff:Math.abs(l-f),reverse:f>l})}}(function c(){if(!o.stopped){if(o.elapsedTime<o.duration){u(c);o._start()}else{o._end()}}})();return this};e.extend(f.prototype,{_start:function(){var t,n=0,r=this.animations,o=0;this.elapsedTime=e.now()-this.startTime;while(t=r[n++]){if(t.styleProp=="opacity"){this._fade(t.startValue,t.endValue,t.reverse);continue}o=Math.round(i(this.elapsedTime,0,t.diff,this.duration));o=t.reverse?t.startValue-o:t.startValue+o;this.el.style[t.styleProp]=o+(s[t.styleProp]?"":"px")}},_end:function(){var e,t=0,n=this.animations;while(e=n[t++]){if(e.styleProp=="opacity"){this.el.style.opacity=e.endValue;this.el.style.opacityValue=null;continue}this.el.style[e.styleProp]=e.endValue+(s[e.styleProp]?"":"px")}if(typeof this.fn==="function"){this.fn.call(this,this.el,this)}this.stopped=true},_fade:function(e,t,n){var r=this.el,i=r.style;if(i.opacityValue==null){i.opacityValue=e}if(n){if(i.opacityValue<=t){i.opacityValue=t;a(r,t);return}i.opacityValue-=this.elapsedTime/this.fix/this.duration*.1}else{if(i.opacityValue>=t){i.opacityValue=t;a(r,t);return}i.opacityValue+=this.elapsedTime/this.fix/this.duration*.1}a(r,i.opacityValue)},stop:function(){if(this.running){this.stopped=true}return this}});e.animate=function(e,t,n,r){return(new f(e)).animate(t,n,r)};e.toString("animate","mii.animate")})(mii)

// mii.dom.js
;(function(e){function y(e,t,n){n=e+(t||"");if(!g[n]){g[n]=new RegExp(e,t)}setTimeout(function(){g={}},60*1e3);return g[n]}function b(e){return e&&e.nodeType&&(e.nodeType===1||e.nodeType===3||e.nodeType===11)}function w(e){return e&&e.nodeName&&e.nodeName.toLowerCase()}function E(t,n,r){var i=t.getElementsByTagName(n);return r===true?e.toArray(i):isNaN(r)?i:i[r]}function S(t,n){var r=E(t,"tbody"),i,s=r.length;while(i=r[--s]){!i.childNodes.length&&i.parentNode.removeChild(i)}e.forEach(E(t,"tbody",true),function(e){i=n.createElement("tbody");while(e.firstChild){i.appendChild(e.firstChild)}t.replaceChild(i,e)})}function L(e,t){if(e&&e.nodeType===1){var n,r,i,s,o,u=/^(1|true)$/;for(i in t){n=T[i]||i;r=T["default"+i];if(!n)continue;s=(s=t[i])!=null?s:"";if(i in k){k[i](e,s);continue}if(f.test(i)){e[i]=o=u.test(s);if(r){e[r]=o}if(o){e.setAttribute(n,i)}else{e.removeAttribute(n)}continue}s&&s.apply&&(e[i.toLowerCase()]=function(){return s.apply(e,arguments)})||e.setAttribute(n,""+s)}}return e}function A(e,t){var n;t=!(t===false);n=e.cloneNode(t);return n}function O(e,t,n){return L(_(e,n,m(t,"name")),t)}function M(e,t){var n=t.createElement("tmp"),r=t.createDocumentFragment();n.innerHTML=e;while(n.firstChild){r.appendChild(n.firstChild)}return r}function _(e,n,r){var s;n||(n=t);r||(r="");if(i){s=n.createElement("<"+e+" name='"+r+"'>")}else{s=n.createElement(e);if(r)s.setAttribute("name",""+r)}return s}function D(t,n){var r,i,s,u,a=function(e,t,n){return{tag:e,nodes:t,fixed:!!n}};if(tt(t)){return a("Dom",t.toArray())}if(b(t)){return(u=w(t))&&a(u,[t],x[u])}if(e.typeOf(t)==="object"){return(u=m(t,"tag"))&&a(u,[O(u,t,n)],x[u])}u=(o.exec(t)||[,""])[1].toLowerCase();if(u===""){return a("#text",[n.createTextNode(t)])}if(i=x[u]){t=i.content.replace("#",t);r=M(t,n).firstChild;s=i.dep;if(i.skip){r.removeChild(r.firstChild)}while(--s)r=r.firstChild}else{r=M(t,n)}return a(u,e.toArray(r.childNodes),!!i)}function P(t,n,r,i){var o=e.doc(n),a=D(r,o),f=a.nodes,l,c,h,p=0;if(a.fixed&&a.tag==="tr"&&(h=E(n,"tbody",0))!=null){n=h}t=C[t],c=n;while(l=f[p++]){if(i){c=l;l=n}t.call(c,l)}if(a.fixed&&s&&u.test(a.tag)){S(n,o)}return f}function H(e){while(e.firstChild){e.removeChild(e.firstChild)}return e}function B(e,t,n){var r,i;r=e.style.left;i=e.runtimeStyle&&e.runtimeStyle.left;i&&(e.runtimeStyle.left=e.currentStyle.left);e.style.left=t==="fontSize"?"1em":n;n=e.style.pixelLeft;e.style.left=r;i&&(e.runtimeStyle.left=i);return n+"px"}function q(e,t){var n=0,r=0,i;while(i=t[r++]){n+=parseFloat(I(e,i))||0}return n}function R(e){return(""+e).replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}function U(t){var n={},r;t=(""+t).split(y("\\s*;\\s*"));while(t.length){(r=t.shift().split(y("\\s*:\\s*")))&&(r[0]=e.trim(r[0]))&&(n[r[0]]=r[1]||"")}return n}function z(e){if(e.substr(0,1)==="#"||e.indexOf("rgb")===-1){return e}var t=d.exec(e)||[,0,0,0,0],n=parseInt(t[2],10).toString(16),r=parseInt(t[3],10).toString(16),i=parseInt(t[4],10).toString(16);return"#"+((n.length===1?"0"+n:n)+(r.length===1?"0"+r:r)+(i.length===1?"0"+i:i))}function W(t,n){var r=w(t);if(n&&(r==="body"||r==="html")){return{top:0,left:0}}var i=t.getBoundingClientRect?t.getBoundingClientRect():{},s=e.doc(t),o=e.win(s),u=s.documentElement,a=s.body,f=o.pageYOffset||u.scrollTop,l=o.pageXOffset||u.scrollLeft;return{top:i.top+f-Math.max(0,u&&u.clientTop,a.clientTop),left:i.left+l-Math.max(0,u&&u.clientLeft,a.clientLeft)}}function X(t,n){n=n||e.typeOf(t);var r,i,s,o,u;if(n==="window"||n==="document"||(r=w(t))&&r==="html"||r==="body"){s=e.doc(t);u=e.win(s);o=s.documentElement;i={top:u.pageYOffset||o.scrollTop,left:u.pageXOffset||o.scrollLeft}}else{i={top:t.scrollTop,left:t.scrollLeft}}return i}function V(e){return y("(^|\\s)"+e+"(\\s|$)")}function Y(t){return t.getAttribute($)||e.uuid()}function Z(e){return(e=e.replace(Q,"-"))&&K.test(e)?e:J+e}function et(e,t){return qwery(e,t)}function tt(e){return e instanceof nt}function nt(e){if(e){e=!e.nodeType&&typeof e.length==="number"&&(!e.document||!e.document.nodeType)?e:[e];this.length=e.length;for(var t=0,n=e.length;t<n;t++){this[t]=e[t]}}return this}function ot(e){var t,n,r=rt[e];if(!r){t=document.createElement(e);document.body.appendChild(t);r=rt[e]=I(t,"display");document.body.removeChild(t);if(!r||r==="none"){if(!it){it=document.createElement("iframe");it.width=it.height=it.frameBorder=0;document.body.appendChild(it)}if(!n||!n.createElement){n=(it.contentWindow||it.contentDocument).document;n.write("<html><body></body></html>");n.close()}t=n.createElement(e);n.body.appendChild(t);r=rt[e]=I(t,"display");document.body.removeChild(it)}}return r}var t=e.doc(),n=e.win(t),r=e.browser.ie,i=r&&e.browser.version<8,s=r&&e.browser.version<9,o=/<([a-z]+)/i,u=/^(?:thead|tbody|tfoot|col|colgroup|caption)$/i,a=/^(button|input|select|textarea)$/i,f=/^(checked|disabled|selected|readonly)$/i,l=/^-?[\d\.]+(?:in|cm|mm|em|ex|pt|pc|%)/i,c=/^-?[\d\.]+$/,h=/^(true|false)$/,p=/opacity=(.*)?\)/i,d=/(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/,v=/^<[^>]*>|<[^>]*>.*?<\/[^>]>$/i,m=function(e,t,n){e||(e={});var r=e[t];if(n!==false)delete e[t];return r},g={};var x={option:{content:"<select><option selected></option>#</select>",dep:1,skip:true},tbody:{content:"<table>#</table>",dep:1},tr:{content:"<table><tbody>#</tbody></table>",dep:2},th:{content:"<table><tbody><tr>#</tr></tbody></table>",dep:3},fieldset:{content:"<form>#</form>",dep:1},legend:{content:"<form><fieldset>#</fieldset></form>",dep:2},area:{content:"<map>#</map>",dep:1},_p:{content:"<p>-#</p>",dep:1,skip:true}};e.mix(x,{optgroup:x.option,thead:x.tbody,tfoot:x.tbody,col:x.tbody,colgroup:x.tbody,caption:x.tbody,td:x.th,style:x._p,script:x._p,param:x._p,link:x._p,base:x._p});var T=i?{"for":"htmlFor","class":"className",enctype:"encoding"}:{htmlFor:"for",className:"class",encoding:"enctype"};e.mix(T,{acceptcharset:"acceptCharset",accesskey:"accessKey",allowtransparency:"allowTransparency",bgcolor:"bgColor",cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",defaultchecked:"defaultChecked",defaultselected:"defaultSelected",defaultvalue:"defaultValue",frameborder:"frameBorder",hspace:"hSpace",longdesc:"longDesc",maxlength:"maxLength",marginwidth:"marginWidth",marginheight:"marginHeight",noresize:"noResize",noshade:"noShade",readonly:"readOnly",rowspan:"rowSpan",valign:"vAlign",vspace:"vSpace",tabindex:"tabIndex",usemap:"useMap",contenteditable:"contentEditable"});var N=t.documentElement.textContent!==undefined?"textContent":"innerText";var C={append:function(e){this.appendChild(e)},prepend:function(e){this.insertBefore(e,this.firstChild)},before:function(e){this.parentNode.insertBefore(e,this)},after:function(e){this.parentNode.insertBefore(e,this.nextSibling)},replace:function(e){this.parentNode.replaceChild(e,this)},appendTo:function(e){e.appendChild(this)},prependTo:function(e){e.insertBefore(this,e.firstChild)},insertBefore:function(e){e.parentNode.insertBefore(this,e)},insertAfter:function(e){e.parentNode.insertBefore(this,e.nextSibling)}};var k={name:function(e,t){e.name=t},html:function(t,n){e.dom(t).setHtml(n)},text:function(t,n){e.dom(t).setText(n)},data:function(t,n){e.dom(t).data(n)},style:function(t,n){e.dom(t).setStyle(n)}};var j={"float":t.documentElement.style.styleFloat!==undefined?"styleFloat":"cssFloat"},F={opacity:1,zoom:1,zIndex:1,columnCount:1,columns:1,fillOpacity:1,fontWeight:1,lineHeight:1},I=function(e,t){return e.style[t]||""};if(t.defaultView&&t.defaultView.getComputedStyle){I=function(t,n){var r;return(r=e.doc(t).defaultView.getComputedStyle(t,""))?r[n]||r.getPropertyValue(n)||"":""}}else if(r&&t.documentElement.currentStyle){I=function(e,t){var n,r=e.style.filter||"";if(t=="opacity"){n=p.exec(r)||[,100];n=parseFloat(n[1])/100}else{n=e.currentStyle[t]||"";if(l.test(n)){n=B(e,t,n)}}return n}}var $="x-mii-uuid",J="x-mii-data-",K=y("^("+J+"[^=]*)$"),Q=/-+/g,G={};nt.prototype={constructor:nt,length:0,__init:function(n,r,i){if(tt(n)){return n}if(n&&typeof n==="object"&&!n.nodeType&&n.length===undefined){n=D(n,t).nodes}else if(typeof n==="string"){n=e.trim(n);if(v.test(n)){n=D(n,t).nodes}else{n=et(n,r);if(!isNaN(i)&&n&&n.length){n=n[i]}}}return new nt(n)},find:function(e,t){return this[0]?this.__init(e,this[0],t):this},not:function(t){if(!t)return this;var n=this.toArray(),r,i=[],s=typeof t;if(t&&(s==="string"||s==="object")){r=this.__init(t).toArray(),i=e.filter(n,function(e){var t,n=0;while(t=r[n++]){if(t!=e)return true}})}else if(s==="number"){n.splice(t-1,1)&&(i=n)}return this.__init(i)},toArray:function(){return e.toArray(this)},forEach:function(t){return e.forEach(this,t,this)},filter:function(t){return this.__init(e.filter(this,t))},reverse:function(){return this.__init(this.toArray().reverse())},item:function(e){return this.__init(this[e-1])},first:function(){return this.item(1)},last:function(){return this.item(this.length)},nth:function(e){return this.item(e)}};e.forEach(["append","prepend","before","after","replace"],function(e){nt.prototype[e]=function(t){return this.forEach(function(n){P(e,n,t)})}});e.forEach(["appendTo","prependTo","insertBefore","insertAfter"],function(e){nt.prototype[e]=function(t){return this.forEach(function(n){if(!tt(t))t=this.__init(t);t.forEach(function(t){P(e,t,n,true)})})}});e.forEach({setHtml:"innerHTML",setText:N},function(e,t){nt.prototype[e]=function(e){return this.forEach(function(n){n[t]=e!=null?e:""})}});e.forEach({getHtml:"innerHTML",getText:N},function(e,t){nt.prototype[e]=function(){return this[0]&&this[0][t]||""}});e.extend(nt.prototype,{create:function(e,t){return this.__init(O(e,t))},clone:function(e){var t=[];this.forEach(function(n,r){t[r]=A(n,e)});return this.__init(t)},remove:function(){return this.forEach(function(e){e=H(e);e.parentNode&&e.parentNode.removeChild(e)})},empty:function(){return this.forEach(function(e){return H(e)})}});e.forEach({parent:"parentNode",prev:"previousSibling",next:"nextSibling"},function(e,t){nt.prototype[e]=function(){var e=this[0]&&this[0][t];if(e){while(e&&e.nodeType!==1){e=e[t]}}return this.__init(e)}});e.extend(nt.prototype,{prevAll:function(t){var n=this[0],r=[],i=0,s,o,u,a=typeof t;if(n&&n.parentNode){o=n.parentNode.childNodes;while(s=o[i++]){if(s===n)break;s.nodeType===1&&r.push(s)}if(t&&a==="string"){u=this.__init(t,n.parentNode).toArray();r=e.filter(u,function(e){for(var t=0,n=r.length;t<n;t++){if(r[t]==e)return true}})}else if(a==="number"){r=r[t-1]}}return this.__init(r)},nextAll:function(t){var n=this[0],r=[],i=0,s,o,u,a=typeof t,f;if(n&&n.parentNode){o=n.parentNode.childNodes;while(s=o[i++]){if(s===n)f=true;f&&s!==n&&s.nodeType===1&&r.push(s)}if(t&&a==="string"){u=this.__init(t,n.parentNode).toArray();r=e.filter(u,function(e){for(var t=0,n=r.length;t<n;t++){if(r[t]==e)return true}})}else if(a==="number"){r=r[t-1]}}return this.__init(r)},children:function(e){var t=this[0],n=[],r=0,i,s,o=typeof e;if(t){if(e&&o==="string"){n=this.__init(e,t)}else{s=t.childNodes;while(i=s[r++]){i.nodeType===1&&n.push(i)}n=o==="number"?n[e]:n}}return this.__init(n)},siblings:function(e){var t=this[0],n=[],r=0,i,s,o=typeof e;if(t&&t.parentNode){if(e&&o==="string"){this.__init(e,t.parentNode).forEach(function(e){if(e!==t&&e.parentNode===t.parentNode){n.push(e)}})}else{s=t.parentNode.childNodes;while(i=s[r++]){i!==t&&i.nodeType===1&&n.push(i)}n=o==="number"?n[e]:n}}return this.__init(n)},contains:function(e,t){var n=this[0];e=this.__init(e);e=isNaN(t)?e[0]:e[t];if(n&&e){return n.contains?n!=e&&n.contains(e):!!(n.compareDocumentPosition(e)&16)}}});e.extend(nt.prototype,{setStyle:function(e,t){return this.forEach(function(n){var r=e,i,o;if(typeof r==="string"){if(t!=null){r={},r[e]=t}else{r=U(e)}}if(s&&"opacity"in r){r.filter="alpha(opacity="+r.opacity*100+")";r.zoom=r.zoom||1;delete r.opacity}for(i in r){if(r.hasOwnProperty(i)){o=r[i],i=R(i);if(c.test(o)&&!(i in F))o=o+"px";n.style[i]=o}}return n})},getStyle:function(e,t){var n=this[0],r;if(n){e=R(e),r=I(n,e)||"";if(r!=null&&t===false&&/color/i.test(e)){r=z(r)}}return r},innerWidth:function(e){return(e=e||this[0])&&e.offsetWidth-q(e,["borderLeftWidth","borderRightWidth"])},innerHeight:function(e){return(e=e||this[0])&&e.offsetHeight-q(e,["borderTopWidth","borderBottomWidth"])},outerWidth:function(e,t){if(t=this[0]){return!e?t.offsetWidth:t.offsetWidth+q(t,["marginLeft","marginRight"])}},outerHeight:function(e,t){if(t=this[0]){return!e?t.offsetHeight:t.offsetHeight+q(t,["marginTop","marginBottom"])}},width:function(){var e=this[0];if(e&&e.alert)return this.dimensions("window").width;if(e&&e.nodeType===9)return this.dimensions("document").width;return this.innerWidth(e)-q(e,["paddingLeft","paddingRight"])},height:function(){var e=this[0];if(e&&e.alert)return this.dimensions("window").height;if(e&&e.nodeType===9)return this.dimensions("document").height;return this.innerHeight(e)-q(e,["paddingTop","paddingBottom"])},dimensions:function(t){var n=this[0];t=t||e.typeOf(n);if(t=="window"){var i=n.document,s=i.body,o=i.documentElement,u=i.compatMode==="CSS1Compat";return{width:u&&o.clientWidth||s&&s.clientWidth||o.clientWidth,height:u&&o.clientHeight||s&&s.clientHeight||o.clientHeight}}if(t=="document"){var s=n.body,o=n.documentElement,a=Math.max(s.scrollWidth,s.offsetWidth,o.scrollWidth,o.offsetWidth),f=Math.max(s.scrollHeight,s.offsetHeight,o.scrollHeight,o.offsetHeight);if(r&&o.clientWidth>=o.scrollWidth)a=o.clientWidth;if(r&&o.clientHeight>=o.scrollHeight)f=o.clientHeight;return{width:a,height:f}}return{width:this.width(),height:this.height()}},viewport:function(){if(e.typeOf(this[0])!=="window"){throw"mii.dom.viewport(): This function only for `window`, use `mii.dom.dimensions()` instead."}return this.dimensions()},offset:function(t){var n,r;if(n=this[0]){r=e.typeOf(n);if(r==="window"||r==="document"){return{top:0,left:0}}if(t){var i=W(n),s=n.parentNode,o=W(s,t);if(s&&s.nodeType===1){o.top+=parseFloat(I(s,"borderTopWidth"))||0;o.left+=parseFloat(I(s,"borderLeftWidth"))||0}n.style.marginTop&&(i.top-=parseFloat(I(n,"marginTop"))||0);n.style.marginLeft&&(i.left-=parseFloat(I(n,"marginLeft"))||0);return{top:i.top-o.top,left:i.left-o.left}}else{return W(n)}}},scroll:function(t,n){var r,i;if(r=this[0]){i=e.typeOf(r);if(typeof t==="string"){return X(r,i)[t]}if(t==null&&n==null){return X(r,i)}var s,o,u;if(i==="window"||i==="document"||(u=w(r))&&u==="html"||u==="body"){s=e.doc(r);o=e.win(s);o.scrollTo(n,t)}else{if(!isNaN(t))r.scrollTop=t;if(!isNaN(n))r.scrollLeft=n}return{top:t,left:n}}}});e.extend(nt.prototype,{hasAttr:function(e,t){if((t=this[0])==null){return}return t.hasAttribute?t.hasAttribute(e):t.attributes[e]&&t.attributes[e].specified||t[e]},setAttr:function(e,t){return this.forEach(function(n){var r=e;if(typeof r==="string"){r={},r[e]=t||""}if("type"in r&&i){throw"mii.dom.setAttr(): `type` attribute can not be modified!"}L(n,r)})},getAttr:function(e,t){if((t=this[0])==null){return}var n=t.attributes,s;switch(e){case"class":case"className":s=n["class"]&&n["class"].specified?t.className:null;break;case"src":case"href":s=t.getAttribute(e,2);break;case"style":s=i?n.style&&n.style.specified?t.style.cssText:null:t.getAttribute("style");s=s&&s.toLowerCase();break;case"tabindex":case"tabIndex":s=(s=t.getAttributeNode("tabindex"))&&s.specified?s.value:t.getAttribute("tabindex");break;case"for":case"htmlFor":s=t.htmlFor||t.getAttribute("for");break;case"enctype":case"encoding":s=t.getAttribute("enctype")||t.enctype;break;default:if(f.test(e)){s=t[e]===true||typeof t[e]!=="boolean"&&(s=t.getAttributeNode(e))&&s.nodeValue!==false?e:null}else{s=t.getAttribute(T[e]||e)}}if(r&&typeof s==="function"){s=/function.*?\(.*?\)\s*\{\s*(.*?)\s*\}/mi.exec(""+s);s=s&&s[1]}return s!==null?s:undefined},removeAttr:function(t){if(t==="*"){return this.forEach(function(e){var t=e.attributes,n,r=e.attributes.length-1;for(;r>=0,n=e.attributes[r];--r){if(n.specified){e.removeAttribute(n.name)}}})}var n=e.trim(t).split(y("\\s+")),r,i,s;return this.forEach(function(e){for(r=0;r<n.length;r++){i=T[n[r]]||n[r];s=T["default"+n[r]];if(a.test(e.tagName)&&f.test(i)){e[i]=false;if(s)e[s]=false}e.removeAttribute(i)}})},setValue:function(t){t+="";return this.forEach(function(n){var r=w(n),s=0,o,u;if(a.test(r)){if(r==="select"){while(o=n.options[s++]){if(o.value===t)o.selected=true}}else if(r==="button"&&i){u=e.doc(n).createAttribute("value");u.value=t;n.setAttributeNode(u)}else{n.value=t}}})},getValue:function(e){if(e=this[0]){var t,n=w(e);if(n==="select"){t=e.options[e.selectedIndex];t=t.disabled||t.parentNode.disabled?null:t.value}else if(n==="button"&&i){t=e.getAttributeNode("value");t=t&&t.specified?t.value:null}else{t=e.value}return t!=null?t:""}}});e.extend(nt.prototype,{hasClass:function(e,t){return(t=t||this[0])&&(" "+t.className+" ").indexOf(" "+e+" ")>-1},addClass:function(t){t=e.trim(t).split(y("\\s+"));return this.forEach(function(n){var r=0,i=[],s;while(s=t[r++]){if(!this.hasClass(s,n)){i.push(s)}}n.className=e.trim(n.className+" "+i.join(" "))})},setClass:function(t){return this.forEach(function(n){n.className=e.trim(t)})},removeClass:function(t){return this.forEach(function(n){n.className=t==="*"?"":e.trim((""+n.className).replace(V(t)," "))})},replaceClass:function(t,n){return this.forEach(function(r){r.className=e.trim((""+r.className).replace(V(t)," "+n+" "))})},toggleClass:function(e){if(!this.hasClass(e,this[0])){return this.addClass(e)}else{return this.removeClass(e)}}});e.extend(nt.prototype,{data:function(e,t){if(!this.length)return this;if(typeof e==="object"||typeof t!=="undefined"){var n=e,r;if(typeof n==="string"){n={},n[e]=t}return this.forEach(function(i){r=Y(i);i.setAttribute($,r);for(e in n){t=n[e],e=Z(e);if(typeof t==="function"||typeof t==="object"){G[r]||(G[r]={});G[r][e]=t}else{i.setAttribute(e,""+t)}}})}e=Z(e);var i=this[0],r=Y(i),s=i.attributes[e],n=s&&s.specified?s.value:G[r]&&G[r][e],o;if(typeof n==="string"){switch(n){case"null":n=null;break;case"true":case"false":n=n==="true"?true:false;break;default:if(typeof (o=parseFloat(n))==="number"&&!isNaN(o)){n=o}}}return n},removeData:function(e){return this.forEach(function(t){if(e==="*"){return this.removeDataAll()}var n=t.getAttribute($);if(n!==null){e=Z(e);if(G[n]&&G[n][e]){try{delete G[n][e]}catch(r){G[n][e]=null}}else{t.removeAttribute(e)}}})},removeDataAll:function(){return this.forEach(function(e){var t=e.getAttribute($),n,r=[],i;if(t!==null){if(G[t]){try{delete G[t]}catch(s){G[t]=null}}for(i=e.attributes.length-1;i>=0;--i){K.test(e.attributes[i].name)&&r.push(RegExp.$1)}for(i=r.length-1;i>=0;--i){e.removeAttribute(r[i])}}})}});e.extend(nt.prototype,{builtQuery:function(){var t=this[0],n=[],r=0,i,s,o,u,a;if(t&&w(t)==="form"){while(i=t.elements[r++]){s=e.trim(i.type).toLowerCase();o=e.trim(i.name);a=i.attributes;u=w(i);if(!s||!o||i.disabled||a.disabled!=null&&a.disabled.specified&&a.disabled===true){continue}if(/^(textarea|select|button)$/i.test(u)){n.push(encodeURIComponent(o)+"="+encodeURIComponent(i.value))}else{switch(s){case"checkbox":case"radio":if(i.checked||a.checked!=null&&a.checked.specified&&a.checked===true){n.push(encodeURIComponent(o)+"="+(s==="checkbox"?"on":encodeURIComponent(i.value)))}break;default:n.push(encodeURIComponent(o)+"="+encodeURIComponent(i.value))}}}}return n.join("&").replace(/%20/g,"+")},builtQueryArray:function(){var t=this.builtQuery(),n={};e.forEach(t.split("&"),function(e){e=e.split("=");n[e[0]]=e[1]});return n}});if(e.event){e.forEach(e.event,function(t){if(t!=="toString"){nt.prototype[t]=function(n,r){var i=this;if(n.indexOf(",")>-1){e.forEach(n.split(/\s*,\s*/),function(n){return i.forEach(function(i){e.event[t](i,n,r)})})}else{return i.forEach(function(i){e.event[t](i,n,r)})}}}})}var rt={},it,st;if(e.animate){e.extend(nt.prototype,{animate:function(t,n,r){return this.forEach(function(i){e.animate(i,t,n,r)})},fadeTo:function(e,t,n){return this.animate({opacity:e},t,n)},fadeIn:function(e,t){return this.fadeTo(1,e,t)},fadeOut:function(t,n){if(n===true||n==="remove"){n=function(t){e.dom(t).remove()}}return this.fadeTo(0,t,n)},show:function(t,n){return this.forEach(function(r){if(!(r.offsetWidth||r.offsetHeight)){r.style.display=ot(r.tagName);e.animate(r,{opacity:1},t,n)}})},hide:function(t,n){return this.forEach(function(r){if(r.offsetWidth||r.offsetHeight){e.animate(r,{opacity:0},t,function(){r.style.display="none";this.fn=n})}})},toggle:function(t,n){return this.forEach(function(r){if(!(r.offsetWidth||r.offsetHeight)){r.style.display=ot(r.tagName);e.animate(r,{opacity:1},t,n)}else{e.animate(r,{opacity:0},t,function(){r.style.display="none";this.fn=n})}})}})}e.dom=function(e,t,n){return(new nt).__init(e,t,n)};e.toString("dom","mii.dom")})(mii)

// mii.ajax.js
;(function(e){function u(){for(var e=i.length;e--;){try{return i[e]()}catch(t){continue}}}function a(n){if(!n||typeof n!=="string")return null;n=e.trim(n);if(!t.test(n)){throw"No valid JSON data provided!"}if(window.JSON&&window.JSON.parse){return window.JSON.parse(n)}return eval("("+n+")")}function f(e){if(e&&e.nodeType===9){return e}if(!e||typeof e!=="string")return null;var t;if(window.DOMParser){t=(new DOMParser).parseFromString(e,"text/xml")}else{t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(e)}return t}function l(t){if(!t)return;var n,r=t.split("\r\n"),i={},s;while(n=r.shift()){s=n.split(":",2);i[s[0].toLowerCase()]=e.trim(s[1])}return i}function c(t){var n,i=[];this._xhr=u();if(t.headers){o.requestHeaders=e.mix({},o.requestHeaders,t.headers);delete t.headers}t=e.mix({},o,t);t.method&&(t.method=t.method.toUpperCase());if(location.host==="localhost"&&t.url&&t.url.charAt(0)=="/"){t.url=t.url.substring(1)}if(t.data){if(e.typeOf(t.data)==="object"){for(n in t.data){t.data.hasOwnProperty(n)&&i.push(encodeURIComponent(n)+"="+encodeURIComponent(t.data[n]))}i=i.join("&").replace(/%20/g,"+")}else{i=t.data}if(t.method=="GET"){if(t.url!=""){t.url=t.url.indexOf("?")===-1?t.url+="?"+i:t.url+="&"+i}else{t.url+="?"+i}}else{t.data=i}}if(t.method=="GET"&&t.noCache!==false){t.url+=t.url.indexOf("?")===-1?"?_="+e.now():"&_="+e.now()}t.url=t.url.replace(r,"?$1");this.options=t;this.isAborted=this.isSent=false;if(t.autoSend!==false){return this.send()}}function h(t,r,i,s,u){t=n.exec(e.trim(t))||[,"",""];if(typeof r==="function"){var a=e.toArray(arguments);r=i=s=u=undefined;i=a[1],s=a[2],u=a[3]}return new c({method:e.trim(t[1])||o.method,url:e.trim(t[2]),data:r,onSuccess:i||o.onSuccess,onError:s||o.onError,onComplete:u||o.onComplete})}var t=/^\{.*?\}|\[.*?\]$/,n=/^([a-z]+?\s+|)(.*?)$/i,r=/\?&(.*)/,i=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new XMLHttpRequest}],s={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},o={autoSend:true,url:"",method:"GET",async:true,data:null,dataType:"html",noCache:true,requestHeaders:{"X-Requested-With":"XMLHttpRequest"},responseHeaders:{},onStart:e.fun,onStop:e.fun,onComplete:e.fun,onProgress:e.fun,onSuccess:e.fun,onError:e.fun,onAbort:e.fun,beforeSend:null,afterSend:null};c.prototype={send:function(){var e=this,t=this.options,n;if(this.isSent||this.isAborted){return this}this._xhr.open(t.method,t.url,t.async);if(t.method!="GET"&&t.data&&t.data.length){this._xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");this._xhr.setRequestHeader("Content-Length",t.data.length);}for(n in t.requestHeaders){t.requestHeaders.hasOwnProperty(n)&&this._xhr.setRequestHeader(n,t.requestHeaders[n])}if(t.async){this._xhr.onreadystatechange=function(){e._handleResponse(e,t)}}if(typeof t.beforeSend==="function"){t.beforeSend.call(this,this._xhr)}this._xhr.send(t.data);if(typeof t.afterSend==="function"){t.afterSend.call(this,this._xhr)}if(!t.async){this._handleResponse(this,t)}this.isSent=true;if(t.timeout){setTimeout(function(){e.abort()},t.timeout)}return this},abort:function(){this.isAborted=true;this._xhr.abort();this.options.onAbort.call(this,this._xhr)},_handleResponse:function(e,t){if(e.isAborted){e._xhr.onreadystatechange=null;return}switch(e._xhr.readyState){case s.OPENED:t.onStart.call(e,e._xhr);break;case s.HEADERS_RECEIVED:if(typeof e._xhr.getAllResponseHeaders==="function"){t.responseHeaders=l(e._xhr.getAllResponseHeaders())}break;case s.LOADING:break;case s.DONE:e.readyState=e._xhr.readyState;e.statusCode=e._xhr.status;e.statusText=e._xhr.statusText;var n=t.dataType=="xml"?e._xhr.responseXML||e._xhr.responseText:e._xhr.responseText;if(t.dataType=="json"){n=a(n)}else if(t.dataType=="xml"){n=f(n)}var r=e._xhr.status;if(typeof t[r]==="function"){t[r].call(e,n,e._xhr)}if(r>=100&&r<400){t.onSuccess.call(e,n,e._xhr)}else{t.onError.call(e,n,e._xhr)}t.onComplete.call(e,n,e._xhr);e._xhr.onreadystatechange=null;break}},setRequestHeader:function(e,t){if(typeof e==="object"){for(var n in e){e.hasOwnProperty(n)&&(this.options.requestHeaders[n]=e[n])}}else{this.options.requestHeaders[e]=t}return this},getResponseHeader:function(e){return this.options.responseHeaders[e.toLowerCase()]},getAllResponseHeaders:function(){return this.options.responseHeaders}};e.ajax=function(t,n,r,i,s){if(typeof t==="string"){return h(t,n,r,i,s)}if(typeof n==="function"){var u=e.toArray(arguments);n=r=i=s=undefined;r=u[1],i=u[2],s=u[3]}t=e.mix(t,{onSuccess:r||t.onSuccess||o.onSuccess,onError:i||t.onError||o.onError,onComplete:s||t.onComplete||o.onComplete});return new c(t)};e.forEach({get:"GET",post:"POST",load:"GET"},function(t,n){e.ajax[t]=function(e,t,r,i,s){return h(n+" "+e,t,r,i,s)}});e.toString("ajax","mii.ajax")})(mii)

/**
 * @preserve Qwery - A Blazing Fast query selector engine
 * https://github.com/ded/qwery
 * copyright Dustin Diaz 2012
 * MIT License
 */
;(function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof t["define"]=="function"&&t.define.amd?define(n):t[e]=n()})("qwery",this,function(){function L(){this.c={}}function D(e){return A.g(e)||A.s(e,"(^|\\s+)"+e+"(\\s+|$)",1)}function P(e,t){var n=0,r=e.length;for(;n<r;n++)t(e[n])}function H(e){for(var t=[],n=0,r=e.length;n<r;++n)$(e[n])?t=t.concat(e[n]):t[t.length]=e[n];return t}function B(e){var t=0,n=e.length,r=[];for(;t<n;t++)r[t]=e[t];return r}function j(e){while(e=e.previousSibling)if(e[u]==1)break;return e}function F(e){return e.match(C)}function I(e,t,n,r,i,s,a,c,h,p,d){var v,m,g,y,b;if(this[u]!==1)return!1;if(t&&t!=="*"&&this[o]&&this[o].toLowerCase()!==t)return!1;if(n&&(m=n.match(f))&&m[1]!==this.id)return!1;if(n&&(b=n.match(l)))for(v=b.length;v--;)if(!D(b[v].slice(1)).test(this.className))return!1;if(h&&Q.pseudos[h]&&!Q.pseudos[h](this,d))return!1;if(r&&!a){y=this.attributes;for(g in y)if(Object.prototype.hasOwnProperty.call(y,g)&&(y[g].name||g)==i)return this}return r&&!R(s,Z(this,i)||"",a)?!1:this}function q(e){return O.g(e)||O.s(e,e.replace(b,"\\$1"))}function R(e,t,n){switch(e){case"=":return t==n;case"^=":return t.match(M.g("^="+n)||M.s("^="+n,"^"+q(n),1));case"$=":return t.match(M.g("$="+n)||M.s("$="+n,q(n)+"$",1));case"*=":return t.match(M.g(n)||M.s(n,q(n),1));case"~=":return t.match(M.g("~="+n)||M.s("~="+n,"(?:^|\\s+)"+q(n)+"(?:\\s+|$)",1));case"|=":return t.match(M.g("|="+n)||M.s("|="+n,"^"+q(n)+"(-|$)",1))}return 0}function U(e,t){var n=[],i=[],s,a,f,l,h,p,d,v,m=t,g=_.g(e)||_.s(e,e.split(N)),y=e.match(T);if(!g.length)return n;l=(g=g.slice(0)).pop(),g.length&&(f=g[g.length-1].match(c))&&(m=K(t,f[1]));if(!m)return n;d=F(l),p=m!==t&&m[u]!==9&&y&&/^[+~]$/.test(y[y.length-1])?function(e){while(m=m.nextSibling)m[u]==1&&(d[1]?d[1]==m[o].toLowerCase():1)&&(e[e.length]=m);return e}([]):m[r](d[1]||"*");for(s=0,a=p.length;s<a;s++)if(v=I.apply(p[s],d))n[n.length]=v;return g.length?(P(n,function(e){W(e,g,y)&&(i[i.length]=e)}),i):n}function z(e,t,n){if(X(t))return e==t;if($(t))return!!~H(t).indexOf(e);var r=t.split(","),i,s;while(t=r.pop()){i=_.g(t)||_.s(t,t.split(N)),s=t.match(T),i=i.slice(0);if(I.apply(e,F(i.pop()))&&(!i.length||W(e,i,s,n)))return!0}return!1}function W(e,t,n,r){function s(e,r,o){while(o=k[n[r]](o,e))if(X(o)&&I.apply(o,F(t[r]))){if(!r)return o;if(i=s(o,r-1,o))return i}}var i;return(i=s(e,t.length-1,e))&&(!r||Y(i,r))}function X(e,t){return e&&typeof e=="object"&&(t=e[u])&&(t==1||t==9)}function V(e){var t=[],n,r;e:for(n=0;n<e.length;++n){for(r=0;r<t.length;++r)if(t[r]==e[n])continue e;t[t.length]=e[n]}return t}function $(e){return typeof e=="object"&&isFinite(e.length)}function J(t){return t?typeof t=="string"?Q(t)[0]:!t[u]&&$(t)?t[0]:t:e}function K(e,t,n){return e[u]===9?e.getElementById(t):e.ownerDocument&&((n=e.ownerDocument.getElementById(t))&&Y(n,e)&&n||!Y(e,e.ownerDocument)&&a('[id="'+t+'"]',e)[0])}function Q(e,t){var i,s,o=J(t);if(!o||!e)return[];if(e===window||X(e))return!t||e!==window&&X(o)&&Y(e,o)?[e]:[];if(e&&$(e))return H(e);if(i=e.match(x)){if(i[1])return(s=K(o,i[1]))?[s]:[];if(i[2])return B(o[r](i[2]));if(et&&i[3])return B(o[n](i[3]))}return a(e,o)}function G(e,t){return function(n){var r,i;if(v.test(n)){e[u]!==9&&((i=r=e.getAttribute("id"))||e.setAttribute("id",i="__qwerymeupscotty"),n='[id="'+i+'"]'+n,t(e.parentNode||e,n,!0),r||e.removeAttribute("id"));return}n.length&&t(e,n,!1)}}var e=document,t=e.documentElement,n="getElementsByClassName",r="getElementsByTagName",i="querySelectorAll",s="useNativeQSA",o="tagName",u="nodeType",a,f=/#([\w\-]+)/,l=/\.[\w\-]+/g,c=/^#([\w\-]+)$/,h=/^\.([\w\-]+)$/,p=/^([\w\-]+)$/,d=/^([\w]+)?\.([\w\-]+)$/,v=/(^|,)\s*[>~+]/,m=/^\s+|\s*([,\s\+\~>]|$)\s*/g,g=/[\s\>\+\~]/,y=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,b=/([.*+?\^=!:${}()|\[\]\/\\])/g,w=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,E=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,S=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,x=new RegExp(c.source+"|"+p.source+"|"+h.source),T=new RegExp("("+g.source+")"+y.source,"g"),N=new RegExp(g.source+y.source),C=new RegExp(w.source+"("+E.source+")?"+"("+S.source+")?"),k={" ":function(e){return e&&e!==t&&e.parentNode},">":function(e,t){return e&&e.parentNode==t.parentNode&&e.parentNode},"~":function(e){return e&&e.previousSibling},"+":function(e,t,n,r){return e?(n=j(e))&&(r=j(t))&&n==r&&n:!1}};L.prototype={g:function(e){return this.c[e]||undefined},s:function(e,t,n){return t=n?new RegExp(t):t,this.c[e]=t}};var A=new L,O=new L,M=new L,_=new L,Y="compareDocumentPosition"in t?function(e,t){return(t.compareDocumentPosition(e)&16)==16}:"contains"in t?function(e,n){return n=n[u]===9||n==window?t:n,n!==e&&n.contains(e)}:function(e,t){while(e=e.parentNode)if(e===t)return 1;return 0},Z=function(){var t=e.createElement("p");return(t.innerHTML='<a href="#x">x</a>')&&t.firstChild.getAttribute("href")!="#x"?function(e,t){return t==="class"?e.className:t==="href"||t==="src"?e.getAttribute(t,2):e.getAttribute(t)}:function(e,t){return e.getAttribute(t)}}(),et=!!e[n],tt=e.querySelector&&e[i],nt=function(e,t){var n=[],r,s;try{return t[u]===9||!v.test(e)?B(t[i](e)):(P(r=e.split(","),G(t,function(e,t){s=e[i](t),s.length==1?n[n.length]=s.item(0):s.length&&(n=n.concat(B(s)))})),r.length>1&&n.length>1?V(n):n)}catch(o){}return rt(e,t)},rt=function(e,t){var n=[],i,s,o,a,f,l;e=e.replace(m,"$1");if(s=e.match(d)){f=D(s[2]),i=t[r](s[1]||"*");for(o=0,a=i.length;o<a;o++)f.test(i[o].className)&&(n[n.length]=i[o]);return n}return P(l=e.split(","),G(t,function(e,r,i){f=U(r,e);for(o=0,a=f.length;o<a;o++)if(e[u]===9||i||Y(f[o],t))n[n.length]=f[o]})),l.length>1&&n.length>1?V(n):n},it=function(e){typeof e[s]!="undefined"&&(a=e[s]?tt?nt:rt:rt)};return it({useNativeQSA:!0}),Q.configure=it,Q.uniq=V,Q.is=z,Q.pseudos={},Q})
