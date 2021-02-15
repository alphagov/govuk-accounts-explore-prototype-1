function nodeListForEach(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)
}
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)
}
:t(e)
}
("undefined"!=typeof window?window:this,function(x,e){function a(e){var t=!!e&&"length"in e&&e.length,n=fe.type(e);return"function"!==n&&!fe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)
}
function t(e,n,o){if(fe.isFunction(n))return fe.grep(e,function(e,t){return!!n.call(e,t,e)!==o
}
);if(n.nodeType)return fe.grep(e,function(e){return e===n!==o
}
);if("string"==typeof n){if(xe.test(n))return fe.filter(n,e,o);n=fe.filter(n,e)
}
return fe.grep(e,function(e){return-1<fe.inArray(e,n)!==o
}
)
}
function n(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e
}
function u(e){var n={
}
;return fe.each(e.match(Oe)||[],function(e,t){n[t]=!0
}
),n
}
function i(){oe.addEventListener?(oe.removeEventListener("DOMContentLoaded",r),x.removeEventListener("load",r)):(oe.detachEvent("onreadystatechange",r),x.detachEvent("onload",r))
}
function r(){(oe.addEventListener||"load"===x.event.type||"complete"===oe.readyState)&&(i(),fe.ready())
}
function c(e,t,n){if(n===undefined&&1===e.nodeType){var o="data-"+t.replace(Ne,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(o))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Me.test(n)?fe.parseJSON(n):n)
}
catch(i){
}
fe.data(e,t,n)
}
else n=undefined
}
return n
}
function l(e){var t;for(t in e)if(("data"!==t||!fe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0
}
function o(e,t,n,o){if($e(e)){var i,r,s=fe.expando,a=e.nodeType,c=a?fe.cache:e,l=a?e[s]:e[s]&&s;if(l&&c[l]&&(o||c[l].data)||n!==undefined||"string"!=typeof t)return l||(l=a?e[s]=ne.pop()||fe.guid++:s),c[l]||(c[l]=a?{
}
:{toJSON:fe.noop
}
),"object"!=typeof t&&"function"!=typeof t||(o?c[l]=fe.extend(c[l],t):c[l].data=fe.extend(c[l].data,t)),r=c[l],o||(r.data||(r.data={
}
),r=r.data),n!==undefined&&(r[fe.camelCase(t)]=n),"string"==typeof t?null==(i=r[t])&&(i=r[fe.camelCase(t)]):i=r,i
}

}
function s(e,t,n){if($e(e)){var o,i,r=e.nodeType,s=r?fe.cache:e,a=r?e[fe.expando]:fe.expando;if(s[a]){if(t&&(o=n?s[a]:s[a].data)){i=(t=fe.isArray(t)?t.concat(fe.map(t,fe.camelCase)):t in o?[t]:(t=fe.camelCase(t))in o?[t]:t.split(" ")).length;for(;i--;)delete o[t[i]];if(n?!l(o):!fe.isEmptyObject(o))return
}
(n||(delete s[a].data,l(s[a])))&&(r?fe.cleanData([e],!0):de.deleteExpando||s!=s.window?delete s[a]:s[a]=undefined)
}

}

}
function d(e,t,n,o){var i,r=1,s=20,a=o?function(){return o.cur()
}
:function(){return fe.css(e,t,"")
}
,c=a(),l=n&&n[3]||(fe.cssNumber[t]?"":"px"),u=(fe.cssNumber[t]||"px"!==l&&+c)&&Fe.exec(fe.css(e,t));if(u&&u[3]!==l)for(l=l||u[3],n=n||[],u=+c||1;u/=r=r||".5",fe.style(e,t,u+l),r!==(r=a()/c)&&1!==r&&--s;);return n&&(u=+u||+c||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],o&&(o.unit=l,o.start=u,o.end=i)),i
}
function y(e){var t=Re.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n
}
function g(e,t){var n,o,i=0,r="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):undefined;if(!r)for(r=[],n=e.childNodes||e;null!=(o=n[i]);i++)!t||fe.nodeName(o,t)?r.push(o):fe.merge(r,g(o,t));return t===undefined||t&&fe.nodeName(e,t)?fe.merge([e],r):r
}
function v(e,t){for(var n,o=0;null!=(n=e[o]);o++)fe._data(n,"globalEval",!t||fe._data(t[o],"globalEval"))
}
function b(e){qe.test(e.type)&&(e.defaultChecked=e.checked)
}
function m(e,t,n,o,i){for(var r,s,a,c,l,u,d,p=e.length,f=y(t),h=[],m=0;m<p;m++)if((s=e[m])||0===s)if("object"===fe.type(s))fe.merge(h,s.nodeType?[s]:s);else if(Xe.test(s)){for(c=c||f.appendChild(t.createElement("div")),l=(Ke.exec(s)||["",""])[1].toLowerCase(),d=ze[l]||ze._default,c.innerHTML=d[1]+fe.htmlPrefilter(s)+d[2],r=d[0];r--;)c=c.lastChild;if(!de.leadingWhitespace&&We.test(s)&&h.push(t.createTextNode(We.exec(s)[0])),!de.tbody)for(r=(s="table"!==l||Ye.test(s)?"<table>"!==d[1]||Ye.test(s)?0:c:c.firstChild)&&s.childNodes.length;r--;)fe.nodeName(u=s.childNodes[r],"tbody")&&!u.childNodes.length&&s.removeChild(u);for(fe.merge(h,c.childNodes),c.textContent="";c.firstChild;)c.removeChild(c.firstChild);c=f.lastChild
}
else h.push(t.createTextNode(s));for(c&&f.removeChild(c),de.appendChecked||fe.grep(g(h,"input"),b),m=0;s=h[m++];)if(o&&-1<fe.inArray(s,o))i&&i.push(s);else if(a=fe.contains(s.ownerDocument,s),c=g(f.appendChild(s),"script"),a&&v(c),n)for(r=0;s=c[r++];)Be.test(s.type||"")&&n.push(s);return c=null,f
}
function p(){return!0
}
function f(){return!1
}
function h(){try{return oe.activeElement
}
catch(e){
}

}
function w(e,t,n,o,i,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(o=o||n,n=undefined),t)w(e,a,n,o,t[a],r);return e
}
if(null==o&&null==i?(i=n,o=n=undefined):null==i&&("string"==typeof n?(i=o,o=undefined):(i=o,o=n,n=undefined)),!1===i)i=f;else if(!i)return e;return 1===r&&(s=i,(i=function(e){return fe().off(e),s.apply(this,arguments)
}
).guid=s.guid||(s.guid=fe.guid++)),e.each(function(){fe.event.add(this,t,i,o,n)
}
)
}
function E(e,t){return fe.nodeName(e,"table")&&fe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}
function k(e){return e.type=(null!==fe.find.attr(e,"type"))+"/"+e.type,e
}
function L(e){var t=at.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e
}
function T(e,t){if(1===t.nodeType&&fe.hasData(e)){var n,o,i,r=fe._data(e),s=fe._data(t,r),a=r.events;if(a)for(n in delete s.handle,s.events={
}
,a)for(o=0,i=a[n].length;o<i;o++)fe.event.add(t,n,a[n][o]);s.data&&(s.data=fe.extend({
}
,s.data))
}

}
function S(e,t){var n,o,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!de.noCloneEvent&&t[fe.expando]){for(o in(i=fe._data(t)).events)fe.removeEvent(t,o,i.handle);t.removeAttribute(fe.expando)
}
"script"===n&&t.text!==e.text?(k(t).text=e.text,L(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),de.html5Clone&&e.innerHTML&&!fe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&qe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)
}

}
function C(n,o,i,r){o=re.apply([],o);var e,t,s,a,c,l,u=0,d=n.length,p=d-1,f=o[0],h=fe.isFunction(f);if(h||1<d&&"string"==typeof f&&!de.checkClone&&st.test(f))return n.each(function(e){var t=n.eq(e);h&&(o[0]=f.call(this,e,t.html())),C(t,o,i,r)
}
);if(d&&(e=(l=m(o,n[0].ownerDocument,!1,n,r)).firstChild,1===l.childNodes.length&&(l=e),e||r)){for(s=(a=fe.map(g(l,"script"),k)).length;u<d;u++)t=l,u!==p&&(t=fe.clone(t,!0,!0),s&&fe.merge(a,g(t,"script"))),i.call(n[u],t,u);if(s)for(c=a[a.length-1].ownerDocument,fe.map(a,L),u=0;u<s;u++)t=a[u],Be.test(t.type||"")&&!fe._data(t,"globalEval")&&fe.contains(c,t)&&(t.src?fe._evalUrl&&fe._evalUrl(t.src):fe.globalEval((t.text||t.textContent||t.innerHTML||"").replace(ct,"")));l=e=null
}
return n
}
function j(e,t,n){for(var o,i=t?fe.filter(t,e):e,r=0;null!=(o=i[r]);r++)n||1!==o.nodeType||fe.cleanData(g(o)),o.parentNode&&(n&&fe.contains(o.ownerDocument,o)&&v(g(o,"script")),o.parentNode.removeChild(o));return e
}
function _(e,t){var n=fe(t.createElement(e)).appendTo(t.body),o=fe.css(n[0],"display");return n.detach(),o
}
function O(e){var t=oe,n=dt[e];return n||("none"!==(n=_(e,t))&&n||((t=((ut=(ut||fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||ut[0].contentDocument).document).write(),t.close(),n=_(e,t),ut.detach()),dt[e]=n),n
}
function A(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get
}

}

}
function $(e){if(e in St)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Tt.length;n--;)if((e=Tt[n]+t)in St)return e
}
function M(e,t){for(var n,o,i,r=[],s=0,a=e.length;s<a;s++)(o=e[s]).style&&(r[s]=fe._data(o,"olddisplay"),n=o.style.display,t?(r[s]||"none"!==n||(o.style.display=""),""===o.style.display&&Ie(o)&&(r[s]=fe._data(o,"olddisplay",O(o.nodeName)))):(i=Ie(o),(n&&"none"!==n||!i)&&fe._data(o,"olddisplay",i?n:fe.css(o,"display"))));for(s=0;s<a;s++)(o=e[s]).style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?r[s]||"":"none"));return e
}
function N(e,t,n){var o=kt.exec(t);return o?Math.max(0,o[1]-(n||0))+(o[2]||"px"):t
}
function D(e,t,n,o,i){for(var r=n===(o?"border":"content")?4:"width"===t?1:0,s=0;r<4;r+=2)"margin"===n&&(s+=fe.css(e,n+Pe[r],!0,i)),o?("content"===n&&(s-=fe.css(e,"padding"+Pe[r],!0,i)),"margin"!==n&&(s-=fe.css(e,"border"+Pe[r]+"Width",!0,i))):(s+=fe.css(e,"padding"+Pe[r],!0,i),"padding"!==n&&(s+=fe.css(e,"border"+Pe[r]+"Width",!0,i)));return s
}
function G(e,t,n){var o=!0,i="width"===t?e.offsetWidth:e.offsetHeight,r=yt(e),s=de.boxSizing&&"border-box"===fe.css(e,"boxSizing",!1,r);if(i<=0||null==i){if(((i=gt(e,t,r))<0||null==i)&&(i=e.style[t]),ft.test(i))return i;o=s&&(de.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0
}
return i+D(e,t,n||(s?"border":"content"),o,r)+"px"
}
function H(e,t,n,o,i){return new H.prototype.init(e,t,n,o,i)
}
function V(){return x.setTimeout(function(){Ct=undefined
}
),Ct=fe.now()
}
function F(e,t){var n,o={height:e
}
,i=0;for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=Pe[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o
}
function P(e,t,n){for(var o,i=(q.tweeners[t]||[]).concat(q.tweeners["*"]),r=0,s=i.length;r<s;r++)if(o=i[r].call(n,t,e))return o
}
function I(t,e,n){var o,i,r,s,a,c,l,u=this,d={
}
,p=t.style,f=t.nodeType&&Ie(t),h=fe._data(t,"fxshow");for(o in n.queue||(null==(a=fe._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,c=a.empty.fire,a.empty.fire=function(){a.unqueued||c()
}
),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,fe.queue(t,"fx").length||a.empty.fire()
}
)
}
)),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===("none"===(l=fe.css(t,"display"))?fe._data(t,"olddisplay")||O(t.nodeName):l)&&"none"===fe.css(t,"float")&&(de.inlineBlockNeedsLayout&&"inline"!==O(t.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",de.shrinkWrapBlocks()||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}
)),e)if(i=e[o],Nt.exec(i)){if(delete e[o],r=r||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[o]===undefined)continue;f=!0
}
d[o]=h&&h[o]||fe.style(t,o)
}
else l=undefined;if(fe.isEmptyObject(d))"inline"===("none"===l?O(t.nodeName):l)&&(p.display=l);else for(o in h?"hidden"in h&&(f=h.hidden):h=fe._data(t,"fxshow",{
}
),r&&(h.hidden=!f),f?fe(t).show():u.done(function(){fe(t).hide()
}
),u.done(function(){var e;for(e in fe._removeData(t,"fxshow"),d)fe.style(t,e,d[e])
}
),d)s=P(f?h[o]:0,o,u),o in h||(h[o]=s.start,f&&(s.end=s.start,s.start="width"===o||"height"===o?1:0))
}
function U(e,t){var n,o,i,r,s;for(n in e)if(i=t[o=fe.camelCase(n)],r=e[n],fe.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),(s=fe.cssHooks[o])&&"expand"in s)for(n in r=s.expand(r),delete e[o],r)n in e||(e[n]=r[n],t[n]=i);else t[o]=i
}
function q(r,e,t){var n,s,o=0,i=q.prefilters.length,a=fe.Deferred().always(function(){delete c.elem
}
),c=function(){if(s)return!1;for(var e=Ct||V(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),o=0,i=l.tweens.length;o<i;o++)l.tweens[o].run(n);return a.notifyWith(r,[l,n,t]),n<1&&i?t:(a.resolveWith(r,[l]),!1)
}
,l=a.promise({elem:r,props:fe.extend({
}
,e),opts:fe.extend(!0,{specialEasing:{
}
,easing:fe.easing._default
}
,t),originalProperties:e,originalOptions:t,startTime:Ct||V(),duration:t.duration,tweens:[],createTween:function(e,t){var n=fe.Tween(r,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n
}
,stop:function(e){var t=0,n=e?l.tweens.length:0;if(s)return this;for(s=!0;t<n;t++)l.tweens[t].run(1);return e?(a.notifyWith(r,[l,1,0]),a.resolveWith(r,[l,e])):a.rejectWith(r,[l,e]),this
}

}
),u=l.props;for(U(u,l.opts.specialEasing);o<i;o++)if(n=q.prefilters[o].call(l,r,u,l.opts))return fe.isFunction(n.stop)&&(fe._queueHooks(l.elem,l.opts.queue).stop=fe.proxy(n.stop,n)),n;return fe.map(u,P,l),fe.isFunction(l.opts.start)&&l.opts.start.call(r,l),fe.fx.timer(fe.extend(c,{elem:r,anim:l,queue:l.opts.queue
}
)),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
}
function K(e){return fe.attr(e,"class")||""
}
function B(r){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,o=0,i=e.toLowerCase().match(Oe)||[];if(fe.isFunction(t))for(;n=i[o++];)"+"===n.charAt(0)?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)
}

}
function W(t,i,r,s){function a(e){var o;return c[e]=!0,fe.each(t[e]||[],function(e,t){var n=t(i,r,s);return"string"!=typeof n||l||c[n]?l?!(o=n):void 0:(i.dataTypes.unshift(n),a(n),!1)
}
),o
}
var c={
}
,l=t===sn;return a(i.dataTypes[0])||!c["*"]&&a("*")
}
function R(e,t){var n,o,i=fe.ajaxSettings.flatOptions||{
}
;for(o in t)t[o]!==undefined&&((i[o]?e:n||(n={
}
))[o]=t[o]);return n&&fe.extend(!0,e,n),e
}
function z(e,t,n){for(var o,i,r,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),i===undefined&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){c.unshift(s);break
}
if(c[0]in n)r=c[0];else{for(s in n){if(!c[0]||e.converters[s+" "+c[0]]){r=s;break
}
o||(o=s)
}
r=r||o
}
if(r)return r!==c[0]&&c.unshift(r),n[r]
}
function X(e,t,n,o){var i,r,s,a,c,l={
}
,u=e.dataTypes.slice();if(u[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!c&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=r,r=u.shift())if("*"===r)r=c;else if("*"!==c&&c!==r){if(!(s=l[c+" "+r]||l["* "+r]))for(i in l)if((a=i.split(" "))[1]===r&&(s=l[c+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(r=a[0],u.unshift(a[1]));break
}
if(!0!==s)if(s&&e["throws"])t=s(t);else try{t=s(t)
}
catch(d){return{state:"parsererror",error:s?d:"No conversion from "+c+" to "+r
}

}

}
return{state:"success",data:t
}

}
function Y(e){return e.style&&e.style.display||fe.css(e,"display")
}
function J(e){if(!fe.contains(e.ownerDocument||oe,e))return!0;for(;e&&1===e.nodeType;){if("none"===Y(e)||"hidden"===e.type)return!0;e=e.parentNode
}
return!1
}
function Q(n,e,o,i){var t;if(fe.isArray(e))fe.each(e,function(e,t){o||dn.test(n)?i(n,t):Q(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,o,i)
}
);else if(o||"object"!==fe.type(e))i(n,e);else for(t in e)Q(n+"["+t+"]",e[t],o,i)
}
function Z(){try{return new x.XMLHttpRequest
}
catch(e){
}

}
function ee(){try{return new x.ActiveXObject("Microsoft.XMLHTTP")
}
catch(e){
}

}
function te(e){return fe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)
}
var ne=[],oe=x.document,ie=ne.slice,re=ne.concat,se=ne.push,ae=ne.indexOf,ce={
}
,le=ce.toString,ue=ce.hasOwnProperty,de={
}
,pe="1.12.4",fe=function(e,t){return new fe.fn.init(e,t)
}
,he=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ye=/-([\da-z])/gi,ge=function(e,t){return t.toUpperCase()
}
;fe.fn=fe.prototype={jquery:pe,constructor:fe,selector:"",length:0,toArray:function(){return ie.call(this)
}
,get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:ie.call(this)
}
,pushStack:function(e){var t=fe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t
}
,each:function(e){return fe.each(this,e)
}
,map:function(n){return this.pushStack(fe.map(this,function(e,t){return n.call(e,t,e)
}
))
}
,slice:function(){return this.pushStack(ie.apply(this,arguments))
}
,first:function(){return this.eq(0)
}
,last:function(){return this.eq(-1)
}
,eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])
}
,end:function(){return this.prevObject||this.constructor()
}
,push:se,sort:ne.sort,splice:ne.splice
}
,fe.extend=fe.fn.extend=function(e){var t,n,o,i,r,s,a=e||{
}
,c=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[c]||{
}
,c++),"object"==typeof a||fe.isFunction(a)||(a={
}
),c===l&&(a=this,c--);c<l;c++)if(null!=(r=arguments[c]))for(i in r)t=a[i],a!==(o=r[i])&&(u&&o&&(fe.isPlainObject(o)||(n=fe.isArray(o)))?(n?(n=!1,s=t&&fe.isArray(t)?t:[]):s=t&&fe.isPlainObject(t)?t:{
}
,a[i]=fe.extend(u,s,o)):o!==undefined&&(a[i]=o));return a
}
,fe.extend({expando:"jQuery"+(pe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)
}
,noop:function(){
}
,isFunction:function(e){return"function"===fe.type(e)
}
,isArray:Array.isArray||function(e){return"array"===fe.type(e)
}
,isWindow:function(e){return null!=e&&e==e.window
}
,isNumeric:function(e){var t=e&&e.toString();return!fe.isArray(e)&&0<=t-parseFloat(t)+1
}
,isEmptyObject:function(e){var t;for(t in e)return!1;return!0
}
,isPlainObject:function(e){var t;if(!e||"object"!==fe.type(e)||e.nodeType||fe.isWindow(e))return!1;try{if(e.constructor&&!ue.call(e,"constructor")&&!ue.call(e.constructor.prototype,"isPrototypeOf"))return!1
}
catch(n){return!1
}
if(!de.ownFirst)for(t in e)return ue.call(e,t);for(t in e);return t===undefined||ue.call(e,t)
}
,type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ce[le.call(e)]||"object":typeof e
}
,globalEval:function(e){e&&fe.trim(e)&&(x.execScript||function(e){x.eval.call(x,e)
}
)(e)
}
,camelCase:function(e){return e.replace(me,"ms-").replace(ye,ge)
}
,nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
}
,each:function(e,t){var n,o=0;if(a(e))for(n=e.length;o<n&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e
}
,trim:function(e){return null==e?"":(e+"").replace(he,"")
}
,makeArray:function(e,t){var n=t||[];return null!=e&&(a(Object(e))?fe.merge(n,"string"==typeof e?[e]:e):se.call(n,e)),n
}
,inArray:function(e,t,n){var o;if(t){if(ae)return ae.call(t,e,n);for(o=t.length,n=n?n<0?Math.max(0,o+n):n:0;n<o;n++)if(n in t&&t[n]===e)return n
}
return-1
}
,merge:function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;)e[i++]=t[o++];if(n!=n)for(;t[o]!==undefined;)e[i++]=t[o++];return e.length=i,e
}
,grep:function(e,t,n){for(var o=[],i=0,r=e.length,s=!n;i<r;i++)!t(e[i],i)!==s&&o.push(e[i]);return o
}
,map:function(e,t,n){var o,i,r=0,s=[];if(a(e))for(o=e.length;r<o;r++)null!=(i=t(e[r],r,n))&&s.push(i);else for(r in e)null!=(i=t(e[r],r,n))&&s.push(i);return re.apply([],s)
}
,guid:1,proxy:function(e,t){var n,o,i;return"string"==typeof t&&(i=e[t],t=e,e=i),fe.isFunction(e)?(n=ie.call(arguments,2),(o=function(){return e.apply(t||this,n.concat(ie.call(arguments)))
}
).guid=e.guid=e.guid||fe.guid++,o):undefined
}
,now:function(){return+new Date
}
,support:de
}
),"function"==typeof Symbol&&(fe.fn[Symbol.iterator]=ne[Symbol.iterator]),fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ce["[object "+t+"]"]=t.toLowerCase()
}
);var ve=function(n){function w(e,t,n,o){var i,r,s,a,c,l,u,d,p=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;if(!o&&((t?t.ownerDocument||t:P)!==$&&A(t),t=t||$,N)){if(11!==f&&(l=ge.exec(e)))if(i=l[1]){if(9===f){if(!(s=t.getElementById(i)))return n;if(s.id===i)return n.push(s),n
}
else if(p&&(s=p.getElementById(i))&&V(t,s)&&s.id===i)return n.push(s),n
}
else{if(l[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&g.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(i)),n
}
if(g.qsa&&!B[e+" "]&&(!D||!D.test(e))){if(1!==f)p=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(be,"\\$&"):t.setAttribute("id",a=F),r=(u=T(e)).length,c=pe.test(a)?"#"+a:"[id='"+a+"']";r--;)u[r]=c+" "+y(u[r]);d=u.join(","),p=ve.test(e)&&m(t.parentNode)||t
}
if(d)try{return Q.apply(n,p.querySelectorAll(d)),n
}
catch(h){
}
finally{a===F&&t.removeAttribute("id")
}

}

}
return C(e.replace(ae,"$1"),t,n,o)
}
function e(){function n(e,t){return o.push(e+" ")>k.cacheLength&&delete n[o.shift()],n[e+" "]=t
}
var o=[];return n
}
function c(e){return e[F]=!0,e
}
function i(e){var t=$.createElement("div");try{return!!e(t)
}
catch(n){return!1
}
finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}

}
function t(e,t){for(var n=e.split("|"),o=n.length;o--;)k.attrHandle[n[o]]=t
}
function l(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||R)-(~e.sourceIndex||R);if(o)return o;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1
}
function o(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t
}

}
function r(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n
}

}
function s(s){return c(function(r){return r=+r,c(function(e,t){for(var n,o=s([],e.length,r),i=o.length;i--;)e[n=o[i]]&&(e[n]=!(t[n]=e[n]))
}
)
}
)
}
function m(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e
}
function a(){
}
function y(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o
}
function d(a,e,t){var c=e.dir,l=t&&"parentNode"===c,u=U++;return e.first?function(e,t,n){for(;e=e[c];)if(1===e.nodeType||l)return a(e,t,n)
}
:function(e,t,n){var o,i,r,s=[I,u];if(n){for(;e=e[c];)if((1===e.nodeType||l)&&a(e,t,n))return!0
}
else for(;e=e[c];)if(1===e.nodeType||l){if((o=(i=(r=e[F]||(e[F]={
}
))[e.uniqueID]||(r[e.uniqueID]={
}
))[c])&&o[0]===I&&o[1]===u)return s[2]=o[2];if((i[c]=s)[2]=a(e,t,n))return!0
}

}

}
function p(i){return 1<i.length?function(e,t,n){for(var o=i.length;o--;)if(!i[o](e,t,n))return!1;return!0
}
:i[0]
}
function v(e,t,n){for(var o=0,i=t.length;o<i;o++)w(e,t[o],n);return n
}
function E(e,t,n,o,i){for(var r,s=[],a=0,c=e.length,l=null!=t;a<c;a++)(r=e[a])&&(n&&!n(r,o,i)||(s.push(r),l&&t.push(a)));return s
}
function b(f,h,m,y,g,e){return y&&!y[F]&&(y=b(y)),g&&!g[F]&&(g=b(g,e)),c(function(e,t,n,o){var i,r,s,a=[],c=[],l=t.length,u=e||v(h||"*",n.nodeType?[n]:n,[]),d=!f||!e&&h?u:E(u,a,f,n,o),p=m?g||(e?f:l||y)?[]:t:d;if(m&&m(d,p,n,o),y)for(i=E(p,c),y(i,[],n,o),r=i.length;r--;)(s=i[r])&&(p[c[r]]=!(d[c[r]]=s));if(e){if(g||f){if(g){for(i=[],r=p.length;r--;)(s=p[r])&&i.push(d[r]=s);g(null,p=[],i,o)
}
for(r=p.length;r--;)(s=p[r])&&-1<(i=g?ee(e,s):a[r])&&(e[i]=!(t[i]=s))
}

}
else p=E(p===t?p.splice(l,p.length):p),g?g(null,t,p,o):Q.apply(t,p)
}
)
}
function f(e){for(var i,t,n,o=e.length,r=k.relative[e[0].type],s=r||k.relative[" "],a=r?1:0,c=d(function(e){return e===i
}
,s,!0),l=d(function(e){return-1<ee(i,e)
}
,s,!0),u=[function(e,t,n){var o=!r&&(n||t!==j)||((i=t).nodeType?c(e,t,n):l(e,t,n));return i=null,o
}
];a<o;a++)if(t=k.relative[e[a].type])u=[d(p(u),t)];else{if((t=k.filter[e[a].type].apply(null,e[a].matches))[F]){for(n=++a;n<o&&!k.relative[e[n].type];n++);return b(1<a&&p(u),1<a&&y(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""
}
)).replace(ae,"$1"),t,a<n&&f(e.slice(a,n)),n<o&&f(e=e.slice(n)),n<o&&y(e))
}
u.push(t)
}
return p(u)
}
function u(y,g){var v=0<g.length,b=0<y.length,e=function(e,t,n,o,i){var r,s,a,c=0,l="0",u=e&&[],d=[],p=j,f=e||b&&k.find.TAG("*",i),h=I+=null==p?1:Math.random()||.1,m=f.length;for(i&&(j=t===$||t||i);l!==m&&null!=(r=f[l]);l++){if(b&&r){for(s=0,t||r.ownerDocument===$||(A(r),n=!N);a=y[s++];)if(a(r,t||$,n)){o.push(r);break
}
i&&(I=h)
}
v&&((r=!a&&r)&&c--,e&&u.push(r))
}
if(c+=l,v&&l!==c){for(s=0;a=g[s++];)a(u,d,t,n);if(e){if(0<c)for(;l--;)u[l]||d[l]||(d[l]=Y.call(o));d=E(d)
}
Q.apply(o,d),i&&!e&&0<d.length&&1<c+g.length&&w.uniqueSort(o)
}
return i&&(I=h,j=p),u
}
;return v?c(e):e
}
var h,g,k,x,L,T,S,C,j,_,O,A,$,M,N,D,G,H,V,F="sizzle"+1*new Date,P=n.document,I=0,U=0,q=e(),K=e(),B=e(),W=function(e,t){return e===t&&(O=!0),0
}
,R=1<<31,z={
}
.hasOwnProperty,X=[],Y=X.pop,J=X.push,Q=X.push,Z=X.slice,ee=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1
}
,te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",oe="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+oe+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",re=":("+oe+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ue=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(re),pe=new RegExp("^"+oe+"$"),fe={ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),TAG:new RegExp("^("+oe+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")
}
,he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ye=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6
}
"+ne+"?|("+ne+")|.)","ig"),Ee=function(e,t,n){var o="0x"+t-65536;return o!=o||n?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)
}
,ke=function(){A()
}
;try{Q.apply(X=Z.call(P.childNodes),P.childNodes),X[P.childNodes.length].nodeType
}
catch(xe){Q={apply:X.length?function(e,t){J.apply(e,Z.call(t))
}
:function(e,t){for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1
}

}

}
for(h in g=w.support={
}
,L=w.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName
}
,A=w.setDocument=function(e){var t,n,o=e?e.ownerDocument||e:P;return o!==$&&9===o.nodeType&&o.documentElement&&(M=($=o).documentElement,N=!L($),(n=$.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ke,!1):n.attachEvent&&n.attachEvent("onunload",ke)),g.attributes=i(function(e){return e.className="i",!e.getAttribute("className")
}
),g.getElementsByTagName=i(function(e){return e.appendChild($.createComment("")),!e.getElementsByTagName("*").length
}
),g.getElementsByClassName=ye.test($.getElementsByClassName),g.getById=i(function(e){return M.appendChild(e).id=F,!$.getElementsByName||!$.getElementsByName(F).length
}
),g.getById?(k.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&N){var n=t.getElementById(e);return n?[n]:[]
}

}
,k.filter.ID=function(e){var t=e.replace(we,Ee);return function(e){return e.getAttribute("id")===t
}

}
):(delete k.find.ID,k.filter.ID=function(e){var n=e.replace(we,Ee);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n
}

}
),k.find.TAG=g.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):g.qsa?t.querySelectorAll(e):void 0
}
:function(e,t){var n,o=[],i=0,r=t.getElementsByTagName(e);if("*"!==e)return r;for(;n=r[i++];)1===n.nodeType&&o.push(n);return o
}
,k.find.CLASS=g.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&N)return t.getElementsByClassName(e)
}
,G=[],D=[],(g.qsa=ye.test($.querySelectorAll))&&(i(function(e){M.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&D.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||D.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||D.push("~="),e.querySelectorAll(":checked").length||D.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||D.push(".#.+[+~]")
}
),i(function(e){var t=$.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&D.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||D.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),D.push(",.*:")
}
)),(g.matchesSelector=ye.test(H=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){g.disconnectedMatch=H.call(e,"div"),H.call(e,"[s!='']:x"),G.push("!=",re)
}
),D=D.length&&new RegExp(D.join("|")),G=G.length&&new RegExp(G.join("|")),t=ye.test(M.compareDocumentPosition),V=t||ye.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))
}
:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1
}
,W=t?function(e,t){if(e===t)return O=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!g.sortDetached&&t.compareDocumentPosition(e)===n?e===$||e.ownerDocument===P&&V(P,e)?-1:t===$||t.ownerDocument===P&&V(P,t)?1:_?ee(_,e)-ee(_,t):0:4&n?-1:1)
}
:function(e,t){if(e===t)return O=!0,0;var n,o=0,i=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!i||!r)return e===$?-1:t===$?1:i?-1:r?1:_?ee(_,e)-ee(_,t):0;if(i===r)return l(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[o]===a[o];)o++;return o?l(s[o],a[o]):s[o]===P?-1:a[o]===P?1:0
}
),$
}
,w.matches=function(e,t){return w(e,null,null,t)
}
,w.matchesSelector=function(e,t){if((e.ownerDocument||e)!==$&&A(e),t=t.replace(ue,"='$1']"),g.matchesSelector&&N&&!B[t+" "]&&(!G||!G.test(t))&&(!D||!D.test(t)))try{var n=H.call(e,t);if(n||g.disconnectedMatch||e.document&&11!==e.document.nodeType)return n
}
catch(xe){
}
return 0<w(t,$,null,[e]).length
}
,w.contains=function(e,t){return(e.ownerDocument||e)!==$&&A(e),V(e,t)
}
,w.attr=function(e,t){(e.ownerDocument||e)!==$&&A(e);var n=k.attrHandle[t.toLowerCase()],o=n&&z.call(k.attrHandle,t.toLowerCase())?n(e,t,!N):undefined;return o!==undefined?o:g.attributes||!N?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null
}
,w.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
}
,w.uniqueSort=function(e){var t,n=[],o=0,i=0;if(O=!g.detectDuplicates,_=!g.sortStable&&e.slice(0),e.sort(W),O){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)
}
return _=null,e
}
,x=w.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)
}
else if(3===i||4===i)return e.nodeValue
}
else for(;t=e[o++];)n+=x(t);return n
}
,(k=w.selectors={cacheLength:50,createPseudo:c,match:fe,attrHandle:{
}
,find:{
}
,relative:{">":{dir:"parentNode",first:!0
}
," ":{dir:"parentNode"
}
,"+":{dir:"previousSibling",first:!0
}
,"~":{dir:"previousSibling"
}

}
,preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Ee),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
}
,CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||w.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&w.error(e[0]),e
}
,PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))
}

}
,filter:{TAG:function(e){var t=e.replace(we,Ee).toLowerCase();return"*"===e?function(){return!0
}
:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}

}
,CLASS:function(e){var t=q[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&q(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")
}
)
}
,ATTR:function(n,o,i){return function(e){var t=w.attr(e,n);return null==t?"!="===o:!o||(t+="","="===o?t===i:"!="===o?t!==i:"^="===o?i&&0===t.indexOf(i):"*="===o?i&&-1<t.indexOf(i):"$="===o?i&&t.slice(-i.length)===i:"~="===o?-1<(" "+t.replace(se," ")+" ").indexOf(i):"|="===o&&(t===i||t.slice(0,i.length+1)===i+"-"))
}

}
,CHILD:function(h,e,t,m,y){var g="nth"!==h.slice(0,3),v="last"!==h.slice(-4),b="of-type"===e;return 1===m&&0===y?function(e){return!!e.parentNode
}
:function(e,t,n){var o,i,r,s,a,c,l=g!==v?"nextSibling":"previousSibling",u=e.parentNode,d=b&&e.nodeName.toLowerCase(),p=!n&&!b,f=!1;if(u){if(g){for(;l;){for(s=e;s=s[l];)if(b?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;c=l="only"===h&&!c&&"nextSibling"
}
return!0
}
if(c=[v?u.firstChild:u.lastChild],v&&p){for(f=(a=(o=(i=(r=(s=u)[F]||(s[F]={
}
))[s.uniqueID]||(r[s.uniqueID]={
}
))[h]||[])[0]===I&&o[1])&&o[2],s=a&&u.childNodes[a];s=++a&&s&&s[l]||(f=a=0)||c.pop();)if(1===s.nodeType&&++f&&s===e){i[h]=[I,a,f];break
}

}
else if(p&&(f=a=(o=(i=(r=(s=e)[F]||(s[F]={
}
))[s.uniqueID]||(r[s.uniqueID]={
}
))[h]||[])[0]===I&&o[1]),!1===f)for(;(s=++a&&s&&s[l]||(f=a=0)||c.pop())&&((b?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++f||(p&&((i=(r=s[F]||(s[F]={
}
))[s.uniqueID]||(r[s.uniqueID]={
}
))[h]=[I,f]),s!==e)););return(f-=y)===m||f%m==0&&0<=f/m
}

}

}
,PSEUDO:function(e,r){var t,s=k.pseudos[e]||k.setFilters[e.toLowerCase()]||w.error("unsupported pseudo: "+e);return s[F]?s(r):1<s.length?(t=[e,e,"",r],k.setFilters.hasOwnProperty(
e.toLowerCase())?c(function(e,t){for(var n,o=s(e,r),i=o.length;i--;)e[n=ee(e,o[i])]=!(t[n]=o[i])
}
):function(e){return s(e,0,t)
}
):s
}

}
,pseudos:{not:c(function(e){var o=[],i=[],a=S(e.replace(ae,"$1"));return a[F]?c(function(e,t,n,o){for(var i,r=a(e,null,o,[]),s=e.length;s--;)(i=r[s])&&(e[s]=!(t[s]=i))
}
):function(e,t,n){return o[0]=e,a(o,null,n,i),o[0]=null,!i.pop()
}

}
),has:c(function(t){return function(e){return 0<w(t,e).length
}

}
),contains:c(function(t){return t=t.replace(we,Ee),function(e){return-1<(e.textContent||e.innerText||x(e)).indexOf(t)
}

}
),lang:c(function(n){return pe.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(we,Ee).toLowerCase(),function(e){var t;do{if(t=N?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")
}
while((e=e.parentNode)&&1===e.nodeType);return!1
}

}
),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id
}
,root:function(e){return e===M
}
,focus:function(e){return e===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
}
,enabled:function(e){return!1===e.disabled
}
,disabled:function(e){return!0===e.disabled
}
,checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected
}
,selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected
}
,empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0
}
,parent:function(e){return!k.pseudos.empty(e)
}
,header:function(e){return me.test(e.nodeName)
}
,input:function(e){return he.test(e.nodeName)
}
,button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t
}
,text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())
}
,first:s(function(){return[0]
}
),last:s(function(e,t){return[t-1]
}
),eq:s(function(e,t,n){return[n<0?n+t:n]
}
),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e
}
),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e
}
),lt:s(function(e,t,n){for(var o=n<0?n+t:n;0<=--o;)e.push(o);return e
}
),gt:s(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e
}
)
}

}
).pseudos.nth=k.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0
}
)k.pseudos[h]=o(h);for(h in{submit:!0,reset:!0
}
)k.pseudos[h]=r(h);return a.prototype=k.filters=k.pseudos,k.setFilters=new a,T=w.tokenize=function(e,t){var n,o,i,r,s,a,c,l=K[e+" "];if(l)return t?0:l.slice(0);for(s=e,a=[],c=k.preFilter;s;){for(r in n&&!(o=ce.exec(s))||(o&&(s=s.slice(o[0].length)||s),a.push(i=[])),n=!1,(o=le.exec(s))&&(n=o.shift(),i.push({value:n,type:o[0].replace(ae," ")
}
),s=s.slice(n.length)),k.filter)!(o=fe[r].exec(s))||c[r]&&!(o=c[r](o))||(n=o.shift(),i.push({value:n,type:r,matches:o
}
),s=s.slice(n.length));if(!n)break
}
return t?s.length:s?w.error(e):K(e,a).slice(0)
}
,S=w.compile=function(e,t){var n,o=[],i=[],r=B[e+" "];if(!r){for(t||(t=T(e)),n=t.length;n--;)(r=f(t[n]))[F]?o.push(r):i.push(r);(r=B(e,u(i,o))).selector=e
}
return r
}
,C=w.select=function(e,t,n,o){var i,r,s,a,c,l="function"==typeof e&&e,u=!o&&T(e=l.selector||e);if(n=n||[],1===u.length){if(2<(r=u[0]=u[0].slice(0)).length&&"ID"===(s=r[0]).type&&g.getById&&9===t.nodeType&&N&&k.relative[r[1].type]){if(!(t=(k.find.ID(s.matches[0].replace(we,Ee),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(r.shift().value.length)
}
for(i=fe.needsContext.test(e)?0:r.length;i--&&(s=r[i],!k.relative[a=s.type]);)if((c=k.find[a])&&(o=c(s.matches[0].replace(we,Ee),ve.test(r[0].type)&&m(t.parentNode)||t))){if(r.splice(i,1),!(e=o.length&&y(r)))return Q.apply(n,o),n;break
}

}
return(l||S(e,u))(o,t,!N,n,!t||ve.test(e)&&m(t.parentNode)||t),n
}
,g.sortStable=F.split("").sort(W).join("")===F,g.detectDuplicates=!!O,A(),g.sortDetached=i(function(e){return 1&e.compareDocumentPosition($.createElement("div"))
}
),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
}
)||t("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)
}
),g.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
}
)||t("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue
}
),i(function(e){return null==e.getAttribute("disabled")
}
)||t(te,function(e,t,n){var o;if(!n)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null
}
),w
}
(x);fe.find=ve,fe.expr=ve.selectors,fe.expr[":"]=fe.expr.pseudos,fe.uniqueSort=fe.unique=ve.uniqueSort,fe.text=ve.getText,fe.isXMLDoc=ve.isXML,fe.contains=ve.contains;var be=function(e,t,n){for(var o=[],i=n!==undefined;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&fe(e).is(n))break;o.push(e)
}
return o
}
,we=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n
}
,Ee=fe.expr.match.needsContext,ke=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xe=/^.[^:#\[\.,]*$/;fe.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?fe.find.matchesSelector(o,e)?[o]:[]:fe.find.matches(e,fe.grep(t,function(e){return 1===e.nodeType
}
))
}
,fe.fn.extend({find:function(e){var t,n=[],o=this,i=o.length;if("string"!=typeof e)return this.pushStack(fe(e).filter(function(){for(t=0;t<i;t++)if(fe.contains(o[t],this))return!0
}
));for(t=0;t<i;t++)fe.find(e,o[t],n);return(n=this.pushStack(1<i?fe.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n
}
,filter:function(e){return this.pushStack(t(this,e||[],!1))
}
,not:function(e){return this.pushStack(t(this,e||[],!0))
}
,is:function(e){return!!t(this,"string"==typeof e&&Ee.test(e)?fe(e):e||[],!1).length
}

}
);var Le,Te=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(fe.fn.init=function(e,t,n){var o,i;if(!e)return this;if(n=n||Le,"string"!=typeof e)return e.nodeType?(this.context=this[0]=e,this.length=1,this):fe.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(fe):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),fe.makeArray(e,this));if(!(o="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Te.exec(e))||!o[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(o[1]){if(t=t instanceof fe?t[0]:t,fe.merge(this,fe.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:oe,!0)),ke.test(o[1])&&fe.isPlainObject(t))for(o in t)fe.isFunction(this[o])?this[o](t[o]):this.attr(o,t[o]);return this
}
if((i=oe.getElementById(o[2]))&&i.parentNode){if(i.id!==o[2])return Le.find(e);this.length=1,this[0]=i
}
return this.context=oe,this.selector=e,this
}
).prototype=fe.fn,Le=fe(oe);var Se=/^(?:parents|prev(?:Until|All))/,Ce={children:!0,contents:!0,next:!0,prev:!0
}
;fe.fn.extend({has:function(e){var t,n=fe(e,this),o=n.length;return this.filter(function(){for(t=0;t<o;t++)if(fe.contains(this,n[t]))return!0
}
)
}
,closest:function(e,t){for(var n,o=0,i=this.length,r=[],s=Ee.test(e)||"string"!=typeof e?fe(e,t||this.context):0;o<i;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&fe.find.matchesSelector(n,e))){r.push(n);break
}
return this.pushStack(1<r.length?fe.uniqueSort(r):r)
}
,index:function(e){return e?"string"==typeof e?fe.inArray(this[0],fe(e)):fe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
}
,add:function(e,t){return this.pushStack(fe.uniqueSort(fe.merge(this.get(),fe(e,t))))
}
,addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}

}
),fe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null
}
,parents:function(e){return be(e,"parentNode")
}
,parentsUntil:function(e,t,n){return be(e,"parentNode",n)
}
,next:function(e){return n(e,"nextSibling")
}
,prev:function(e){return n(e,"previousSibling")
}
,nextAll:function(e){return be(e,"nextSibling")
}
,prevAll:function(e){return be(e,"previousSibling")
}
,nextUntil:function(e,t,n){return be(e,"nextSibling",n)
}
,prevUntil:function(e,t,n){return be(e,"previousSibling",n)
}
,siblings:function(e){return we((e.parentNode||{
}
).firstChild,e)
}
,children:function(e){return we(e.firstChild)
}
,contents:function(e){return fe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:fe.merge([],e.childNodes)
}

}
,function(o,i){fe.fn[o]=function(e,t){var n=fe.map(this,i,e);return"Until"!==o.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=fe.filter(t,n)),1<this.length&&(Ce[o]||(n=fe.uniqueSort(n)),Se.test(o)&&(n=n.reverse())),this.pushStack(n)
}

}
);var je,_e,Oe=/\S+/g;for(_e in fe.Callbacks=function(o){o="string"==typeof o?u(o):fe.extend({
}
,o);var i,e,t,n,r=[],s=[],a=-1,c=function(){for(n=o.once,t=i=!0;s.length;a=-1)for(e=s.shift();++a<r.length;)!1===r[a].apply(e[0],e[1])&&o.stopOnFalse&&(a=r.length,e=!1);o.memory||(e=!1),i=!1,n&&(r=e?[]:"")
}
,l={add:function(){return r&&(e&&!i&&(a=r.length-1,s.push(e)),function n(e){fe.each(e,function(e,t){fe.isFunction(t)?o.unique&&l.has(t)||r.push(t):t&&t.length&&"string"!==fe.type(t)&&n(t)
}
)
}
(arguments),e&&!i&&c()),this
}
,remove:function(){return fe.each(arguments,function(e,t){for(var n;-1<(n=fe.inArray(t,r,n));)r.splice(n,1),n<=a&&a--
}
),this
}
,has:function(e){return e?-1<fe.inArray(e,r):0<r.length
}
,empty:function(){return r&&(r=[]),this
}
,disable:function(){return n=s=[],r=e="",this
}
,disabled:function(){return!r
}
,lock:function(){return n=!0,e||l.disable(),this
}
,locked:function(){return!!n
}
,fireWith:function(e,t){return n||(t=[e,(t=t||[]).slice?t.slice():t],s.push(t),i||c()),this
}
,fire:function(){return l.fireWith(this,arguments),this
}
,fired:function(){return!!t
}

}
;return l
}
,fe.extend({Deferred:function(e){var r=[["resolve","done",fe.Callbacks("once memory"),"resolved"],["reject","fail",fe.Callbacks("once memory"),"rejected"],["notify","progress",fe.Callbacks("memory")]],i="pending",s={state:function(){return i
}
,always:function(){return a.done(arguments).fail(arguments),this
}
,then:function(){var i=arguments;return fe.Deferred(function(o){fe.each(r,function(e,t){var n=fe.isFunction(i[e])&&i[e];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&fe.isFunction(e.promise)?e.promise().progress(o.notify).done(o.resolve).fail(o.reject):o[t[0]+"With"](this===s?o.promise():this,n?[e]:arguments)
}
)
}
),i=null
}
).promise()
}
,promise:function(e){return null!=e?fe.extend(e,s):s
}

}
,a={
}
;return s.pipe=s.then,fe.each(r,function(e,t){var n=t[2],o=t[3];s[t[1]]=n.add,o&&n.add(function(){i=o
}
,r[1^e][2].disable,r[2][2].lock),a[t[0]]=function(){return a[t[0]+"With"](this===a?s:this,arguments),this
}
,a[t[0]+"With"]=n.fireWith
}
),s.promise(a),e&&e.call(a,a),a
}
,when:function(e){var i,t,n,o=0,r=ie.call(arguments),s=r.length,a=1!==s||e&&fe.isFunction(e.promise)?s:0,c=1===a?e:fe.Deferred(),l=function(t,n,o){return function(e){n[t]=this,o[t]=1<arguments.length?ie.call(arguments):e,o===i?c.notifyWith(n,o):--a||c.resolveWith(n,o)
}

}
;if(1<s)for(i=new Array(s),t=new Array(s),n=new Array(s);o<s;o++)r[o]&&fe.isFunction(r[o].promise)?r[o].promise().progress(l(o,t,i)).done(l(o,n,r)).fail(c.reject):--a;return a||c.resolveWith(n,r),c.promise()
}

}
),fe.fn.ready=function(e){return fe.ready.promise().done(e),this
}
,fe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?fe.readyWait++:fe.ready(!0)
}
,ready:function(e){(!0===e?--fe.readyWait:fe.isReady)||(fe.isReady=!0)!==e&&0<--fe.readyWait||(je.resolveWith(oe,[fe]),fe.fn.triggerHandler&&(fe(oe).triggerHandler("ready"),fe(oe).off("ready")))
}

}
),fe.ready.promise=function(e){if(!je)if(je=fe.Deferred(),"complete"===oe.readyState||"loading"!==oe.readyState&&!oe.documentElement.doScroll)x.setTimeout(fe.ready);else if(oe.addEventListener)oe.addEventListener("DOMContentLoaded",r),x.addEventListener("load",r);else{oe.attachEvent("onreadystatechange",r),x.attachEvent("onload",r);var t=!1;try{t=null==x.frameElement&&oe.documentElement
}
catch(n){
}
t&&t.doScroll&&function o(){if(!fe.isReady){try{t.doScroll("left")
}
catch(n){return x.setTimeout(o,50)
}
i(),fe.ready()
}

}
()
}
return je.promise(e)
}
,fe.ready.promise(),fe(de))break;de.ownFirst="0"===_e,de.inlineBlockNeedsLayout=!1,fe(function(){var e,t,n,o;(n=oe.getElementsByTagName("body")[0])&&n.style&&(t=oe.createElement("div"),(o=oe.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",de.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(o))
}
),function(){var e=oe.createElement("div");de.deleteExpando=!0;try{delete e.test
}
catch(t){de.deleteExpando=!1
}
e=null
}
();var Ae,$e=function(e){var t=fe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)
}
,Me=/^(?:\{[\w\W]*\
}
|\[[\w\W]*\])$/,Ne=/([A-Z])/g;fe.extend({cache:{
}
,noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
}
,hasData:function(e){return!!(e=e.nodeType?fe.cache[e[fe.expando]]:e[fe.expando])&&!l(e)
}
,data:function(e,t,n){return o(e,t,n)
}
,removeData:function(e,t){return s(e,t)
}
,_data:function(e,t,n){return o(e,t,n,!0)
}
,_removeData:function(e,t){return s(e,t,!0)
}

}
),fe.fn.extend({data:function(e,t){var n,o,i,r=this[0],s=r&&r.attributes;if(e!==undefined)return"object"==typeof e?this.each(function(){fe.data(this,e)
}
):1<arguments.length?this.each(function(){fe.data(this,e,t)
}
):r?c(r,e,fe.data(r,e)):undefined;if(this.length&&(i=fe.data(r),1===r.nodeType&&!fe._data(r,"parsedAttrs"))){for(n=s.length;n--;)s[n]&&0===(o=s[n].name).indexOf("data-")&&c(r,o=fe.camelCase(o.slice(5)),i[o]);fe._data(r,"parsedAttrs",!0)
}
return i
}
,removeData:function(e){return this.each(function(){fe.removeData(this,e)
}
)
}

}
),fe.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=fe._data(e,t),n&&(!o||fe.isArray(n)?o=fe._data(e,t,fe.makeArray(n)):o.push(n)),o||[]
}
,dequeue:function(e,t){t=t||"fx";var n=fe.queue(e,t),o=n.length,i=n.shift(),r=fe._queueHooks(e,t),s=function(){fe.dequeue(e,t)
}
;"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===t&&n.unshift("inprogress"),delete r.stop,i.call(e,s,r)),!o&&r&&r.empty.fire()
}
,_queueHooks:function(e,t){var n=t+"queueHooks";return fe._data(e,n)||fe._data(e,n,{empty:fe.Callbacks("once memory").add(function(){fe._removeData(e,t+"queue"),fe._removeData(e,n)
}
)
}
)
}

}
),fe.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?fe.queue(this[0],t):n===undefined?this:this.each(function(){var e=fe.queue(this,t,n);fe._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&fe.dequeue(this,t)
}
)
}
,dequeue:function(e){return this.each(function(){fe.dequeue(this,e)
}
)
}
,clearQueue:function(e){return this.queue(e||"fx",[])
}
,promise:function(e,t){var n,o=1,i=fe.Deferred(),r=this,s=this.length,a=function(){--o||i.resolveWith(r,[r])
}
;for("string"!=typeof e&&(t=e,e=undefined),e=e||"fx";s--;)(n=fe._data(r[s],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(a));return a(),i.promise(t)
}

}
),de.shrinkWrapBlocks=function(){return null!=Ae?Ae:(Ae=!1,(t=oe.getElementsByTagName("body")[0])&&t.style?(e=oe.createElement("div"),(n=oe.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),"undefined"!=typeof e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(oe.createElement("div")).style.width="5px",Ae=3!==e.offsetWidth),t.removeChild(n),Ae):void 0);var e,t,n
}
;var De,Ge,He,Ve=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Fe=new RegExp("^(?:([+-])=|)("+Ve+")([a-z%]*)$","i"),Pe=["Top","Right","Bottom","Left"],Ie=function(e,t){return e=t||e,"none"===fe.css(e,"display")||!fe.contains(e.ownerDocument,e)
}
,Ue=function(e,t,n,o,i,r,s){var a=0,c=e.length,l=null==n;if("object"===fe.type(n))for(a in i=!0,n)Ue(e,t,a,n[a],!0,r,s);else if(o!==undefined&&(i=!0,fe.isFunction(o)||(s=!0),l&&(s?(t.call(e,o),t=null):(l=t,t=function(e,t,n){return l.call(fe(e),n)
}
)),t))for(;a<c;a++)t(e[a],n,s?o:o.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):c?t(e[0],n):r
}
,qe=/^(?:checkbox|radio)$/i,Ke=/<([\w:-]+)/,Be=/^$|\/(?:java|ecma)script/i,We=/^\s+/,Re="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";De=oe.createElement("div"),Ge=oe.createDocumentFragment(),He=oe.createElement("input"),De.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",de.leadingWhitespace=3===De.firstChild.nodeType,de.tbody=!De.getElementsByTagName("tbody").length,de.htmlSerialize=!!De.getElementsByTagName("link").length,de.html5Clone="<:nav></:nav>"!==oe.createElement("nav").cloneNode(!0).outerHTML,He.type="checkbox",He.checked=!0,Ge.appendChild(He),de.appendChecked=He.checked,De.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!De.cloneNode(!0).lastChild.defaultValue,Ge.appendChild(De),(He=oe.createElement("input")).setAttribute("type","radio"),He.setAttribute("checked","checked"),He.setAttribute("name","t"),De.appendChild(He),de.checkClone=De.cloneNode(!0).cloneNode(!0).lastChild.checked,de.noCloneEvent=!!De.addEventListener,De[fe.expando]=1,de.attributes=!De.getAttribute(fe.expando);var ze={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:de.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
}
;ze.optgroup=ze.option,ze.tbody=ze.tfoot=ze.colgroup=ze.caption=ze.thead,ze.th=ze.td;var Xe=/<|&#?\w+;/,Ye=/<tbody/i;!function(){var e,t,n=oe.createElement("div");for(e in{submit:!0,change:!0,focusin:!0
}
)t="on"+e,(de[e]=t in x)||(n.setAttribute(t,"t"),de[e]=!1===n.attributes[t].expando);n=null
}
();var Je=/^(?:input|select|textarea)$/i,Qe=/^key/,Ze=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^(?:focusinfocus|focusoutblur)$/,tt=/^([^.]*)(?:\.(.+)|)/;fe.event={global:{
}
,add:function(e,t,n,o,i){var r,s,a,c,l,u,d,p,f,h,m,y=fe._data(e);if(y){for(n.handler&&(n=(c=n).handler,i=c.selector),n.guid||(n.guid=fe.guid++),(s=y.events)||(s=y.events={
}
),(u=y.handle)||((u=y.handle=function(e){return void 0===fe||e&&fe.event.triggered===e.type?undefined:fe.event.dispatch.apply(u.elem,arguments)
}
).elem=e),a=(t=(t||"").match(Oe)||[""]).length;a--;)f=m=(r=tt.exec(t[a])||[])[1],h=(r[2]||"").split(".").sort(),f&&(l=fe.event.special[f]||{
}
,f=(i?l.delegateType:l.bindType)||f,l=fe.event.special[f]||{
}
,d=fe.extend({type:f,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&fe.expr.match.needsContext.test(i),namespace:h.join(".")
}
,c),(p=s[f])||((p=s[f]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(e,o,h,u)||(e.addEventListener?e.addEventListener(f,u,!1):e.attachEvent&&e.attachEvent("on"+f,u))),l.add&&(l.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,d):p.push(d),fe.event.global[f]=!0);e=null
}

}
,remove:function(e,t,n,o,i){var r,s,a,c,l,u,d,p,f,h,m,y=fe.hasData(e)&&fe._data(e);if(y&&(u=y.events)){for(l=(t=(t||"").match(Oe)||[""]).length;l--;)if(f=m=(a=tt.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),f){for(d=fe.event.special[f]||{
}
,p=u[f=(o?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),c=r=p.length;r--;)s=p[r],!i&&m!==s.origType||n&&n.guid!==s.guid||a&&!a.test(s.namespace)||o&&o!==s.selector&&("**"!==o||!s.selector)||(p.splice(r,1),s.selector&&p.delegateCount--,d.remove&&d.remove.call(e,s));c&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,y.handle)||fe.removeEvent(e,f,y.handle),delete u[f])
}
else for(f in u)fe.event.remove(e,f+t[l],n,o,!0);fe.isEmptyObject(u)&&(delete y.handle,fe._removeData(e,"events"))
}

}
,trigger:function(e,t,n,o){var i,r,s,a,c,l,u,d=[n||oe],p=ue.call(e,"type")?e.type:e,f=ue.call(e,"namespace")?e.namespace.split("."):[];if(s=l=n=n||oe,3!==n.nodeType&&8!==n.nodeType&&!et.test(p+fe.event.triggered)&&(-1<p.indexOf(".")&&(p=(f=p.split(".")).shift(),f.sort()),r=p.indexOf(":")<0&&"on"+p,(e=e[fe.expando]?e:new fe.Event(p,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=undefined,e.target||(e.target=n),t=null==t?[e]:fe.makeArray(t,[e]),c=fe.event.special[p]||{
}
,o||!c.trigger||!1!==c.trigger.apply(n,t))){if(!o&&!c.noBubble&&!fe.isWindow(n)){for(a=c.delegateType||p,et.test(a+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),l=s;l===(n.ownerDocument||oe)&&d.push(l.defaultView||l.parentWindow||x)
}
for(u=0;(s=d[u++])&&!e.isPropagationStopped();)e.type=1<u?a:c.bindType||p,(i=(fe._data(s,"events")||{
}
)[e.type]&&fe._data(s,"handle"))&&i.apply(s,t),(i=r&&s[r])&&i.apply&&$e(s)&&(e.result=i.apply(s,t),!1===e.result&&e.preventDefault());if(e.type=p,!o&&!e.isDefaultPrevented()&&(!c._default||!1===c._default.apply(d.pop(),t))&&$e(n)&&r&&n[p]&&!fe.isWindow(n)){(l=n[r])&&(n[r]=null),fe.event.triggered=p;try{n[p]()
}
catch(h){
}
fe.event.triggered=undefined,l&&(n[r]=l)
}
return e.result
}

}
,dispatch:function(e){e=fe.event.fix(e);var t,n,o,i,r,s=[],a=ie.call(arguments),c=(fe._data(this,"events")||{
}
)[e.type]||[],l=fe.event.special[e.type]||{
}
;if((a[0]=e).delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(s=fe.event.handlers.call(this,e,c),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(r=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(r.namespace)||(e.handleObj=r,e.data=r.data,(o=((fe.event.special[r.origType]||{
}
).handle||r.handler).apply(i.elem,a))!==undefined&&!1===(e.result=o)&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result
}

}
,handlers:function(e,t){var n,o,i,r,s=[],a=t.delegateCount,c=e.target;if(a&&c.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;c!=this;c=c.parentNode||this)if(1===c.nodeType&&(!0!==c.disabled||"click"!==e.type)){for(o=[],n=0;n<a;n++)o[i=(r=t[n]).selector+" "]===undefined&&(o[i]=r.needsContext?-1<fe(i,this).index(c):fe.find(i,this,null,[c]).length),o[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o
}
)
}
return a<t.length&&s.push({elem:this,handlers:t.slice(a)
}
),s
}
,fix:function(e){if(e[fe.expando])return e;var t,n,o,i=e.type,r=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Ze.test(i)?this.mouseHooks:Qe.test(i)?this.keyHooks:{
}
),o=s.props?this.props.concat(s.props):this.props,e=new fe.Event(r),t=o.length;t--;)e[n=o[t]]=r[n];return e.target||(e.target=r.srcElement||oe),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e
}
,props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{
}
,keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}

}
,mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,o,i,r=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=(o=e.target.ownerDocument||oe).documentElement,n=o.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||r===undefined||(e.which=1&r?1:2&r?3:4&r?2:0),e
}

}
,special:{load:{noBubble:!0
}
,focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1
}
catch(e){
}

}
,delegateType:"focusin"
}
,blur:{trigger:function(){if(this===h()&&this.blur)return this.blur(),!1
}
,delegateType:"focusout"
}
,click:{trigger:function(){if(fe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1
}
,_default:function(e){return fe.nodeName(e.target,"a")
}

}
,beforeunload:{postDispatch:function(e){e.result!==undefined&&e.originalEvent&&(e.originalEvent.returnValue=e.result)
}

}

}
,simulate:function(e,t,n){var o=fe.extend(new fe.Event,n,{type:e,isSimulated:!0
}
);fe.event.trigger(o,null,t),o.isDefaultPrevented()&&n.preventDefault()
}

}
,fe.removeEvent=oe.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)
}
:function(e,t,n){var o="on"+t;e.detachEvent&&("undefined"==typeof e[o]&&(e[o]=null),e.detachEvent(o,n))
}
,fe.Event=function(e,t){if(!(this instanceof fe.Event))return new fe.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&!1===e.returnValue?p:f):this.type=e,t&&fe.extend(this,t),this.timeStamp=e&&e.timeStamp||fe.now(),this[fe.expando]=!0
}
,fe.Event.prototype={constructor:fe.Event,isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=p,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
}
,stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=p,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
}
,stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=p,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()
}

}
,fe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"
}
,function(e,r){fe.event.special[e]={delegateType:r,bindType:r,handle:function(e){var t,n=this,o=e.relatedTarget,i=e.handleObj;return o&&(o===n||fe.contains(n,o))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=r),t
}

}

}
),de.submit||(fe.event.special.submit={setup:function(){if(fe.nodeName(this,"form"))return!1;fe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=fe.nodeName(t,"input")||fe.nodeName(t,"button")?fe.prop(t,"form"):undefined;n&&!fe._data(n,"submit")&&(fe.event.add(n,"submit._submit",function(e){e._submitBubble=!0
}
),fe._data(n,"submit",!0))
}
)
}
,postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&fe.event.simulate("submit",this.parentNode,e))
}
,teardown:function(){if(fe.nodeName(this,"form"))return!1;fe.event.remove(this,"._submit")
}

}
),de.change||(fe.event.special.change={setup:function(){if(Je.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(fe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)
}
),fe.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),fe.event.simulate("change",this,e)
}
)),!1;fe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Je.test(t.nodeName)&&!fe._data(t,"change")&&(fe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||fe.event.simulate("change",this.parentNode,e)
}
),fe._data(t,"change",!0))
}
)
}
,handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)
}
,teardown:function(){return fe.event.remove(this,"._change"),!Je.test(this.nodeName)
}

}
),de.focusin||fe.each({focus:"focusin",blur:"focusout"
}
,function(n,o){var i=function(e){fe.event.simulate(o,e.target,fe.event.fix(e))
}
;fe.event.special[o]={setup:function(){var e=this.ownerDocument||this,t=fe._data(e,o);t||e.addEventListener(n,i,!0),fe._data(e,o,(t||0)+1)
}
,teardown:function(){var e=this.ownerDocument||this,t=fe._data(e,o)-1;t?fe._data(e,o,t):(e.removeEventListener(n,i,!0),fe._removeData(e,o))
}

}

}
),fe.fn.extend({on:function(e,t,n,o){return w(this,e,t,n,o)
}
,one:function(e,t,n,o){return w(this,e,t,n,o,1)
}
,off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,fe(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=undefined),!1===n&&(n=f),this.each(function(){fe.event.remove(this,e,n,t)
}
);for(i in e)this.off(i,t,e[i]);return this
}
,trigger:function(e,t){return this.each(function(){fe.event.trigger(e,t,this)
}
)
}
,triggerHandler:function(e,t){var n=this[0];if(n)return fe.event.trigger(e,t,n,!0)
}

}
);var nt=/ jQuery\d+="(?:null|\d+)"/g,ot=new RegExp("<(?:"+Re+")[\\s/>]","i"),it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,rt=/<script|<style|<link/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^true\/(.*)/,ct=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,lt=y(oe).appendChild(oe.createElement("div"));fe.extend({htmlPrefilter:function(e){return e.replace(it,"<$1></$2>")
}
,clone:function(e,t,n){var o,i,r,s,a,c=fe.contains(e.ownerDocument,e);if(de.html5Clone||fe.isXMLDoc(e)||!ot.test("<"+e.nodeName+">")?r=e.cloneNode(!0):(lt.innerHTML=e.outerHTML,lt.removeChild(r=lt.firstChild)),!(de.noCloneEvent&&de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||fe.isXMLDoc(e)))for(o=g(r),a=g(e),s=0;null!=(i=a[s]);++s)o[s]&&S(i,o[s]);if(t)if(n)for(a=a||g(e),o=o||g(r),s=0;null!=(i=a[s]);s++)T(i,o[s]);else T(e,r);return 0<(o=g(r,"script")).length&&v(o,!c&&g(e,"script")),o=a=i=null,r
}
,cleanData:function(e,t){for(var n,o,i,r,s=0,a=fe.expando,c=fe.cache,l=de.attributes,u=fe.event.special;null!=(n=e[s]);s++)if((t||$e(n))&&(r=(i=n[a])&&c[i])){if(r.events)for(o in r.events)u[o]?fe.event.remove(n,o):fe.removeEvent(n,o,r.handle);c[i]&&(delete c[i],l||"undefined"==typeof n.removeAttribute?n[a]=undefined:n.removeAttribute(a),ne.push(i))
}

}

}
),fe.fn.extend({domManip:C,detach:function(e){return j(this,e,!0)
}
,remove:function(e){return j(this,e)
}
,text:function(e){return Ue(this,function(e){return e===undefined?fe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||oe).createTextNode(e))
}
,null,e,arguments.length)
}
,append:function(){return C(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||E(this,e).appendChild(e)
}
)
}
,prepend:function(){return C(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e);t.insertBefore(e,t.firstChild)
}

}
)
}
,before:function(){return C(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
}
)
}
,after:function(){return C(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
}
)
}
,empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&fe.cleanData(g(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&fe.nodeName(e,"select")&&(e.options.length=0)
}
return this
}
,clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return fe.clone(this,e,t)
}
)
}
,html:function(e){return Ue(this,function(e){var t=this[0]||{
}
,n=0,o=this.length;if(e===undefined)return 1===t.nodeType?t.innerHTML.replace(nt,""):undefined;if("string"==typeof e&&!rt.test(e)&&(de.htmlSerialize||!ot.test(e))&&(de.leadingWhitespace||!We.test(e))&&!ze[(Ke.exec(e)||["",""])[1].toLowerCase()]){e=fe.htmlPrefilter(e);try{for(;n<o;n++)1===(t=this[n]||{
}
).nodeType&&(fe.cleanData(g(t,!1)),t.innerHTML=e);t=0
}
catch(i){
}

}
t&&this.empty().append(e)
}
,null,e,arguments.length)
}
,replaceWith:function(){var n=[];return C(this,arguments,function(e){var t=this.parentNode;fe.inArray(this,n)<0&&(fe.cleanData(g(this)),t&&t.replaceChild(e,this))
}
,n)
}

}
),fe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
}
,function(e,s){fe.fn[e]=function(e){for(var t,n=0,o=[],i=fe(e),r=i.length-1;n<=r;n++)t=n===r?this:this.clone(!0),fe(i[n])[s](t),se.apply(o,t.get());return this.pushStack(o)
}

}
);var ut,dt={HTML:"block",BODY:"block"
}
,pt=/^margin/,ft=new RegExp("^("+Ve+")(?!px)[a-z%]+$","i"),ht=function(e,t,n,o){var i,r,s={
}
;for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in i=n.apply(e,o||[]),t)e.style[r]=s[r];return i
}
,mt=oe.documentElement;!function(){function e(){var e,t,n=oe.documentElement;n.appendChild(l),u.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",o=r=c=!1,i=a=!0,x.getComputedStyle&&(t=x.getComputedStyle(u),o="1%"!==(t||{
}
).top,c="2px"===(t||{
}
).marginLeft,r="4px"===(t||{width:"4px"
}
).width,u.style.marginRight="50%",i="4px"===(t||{marginRight:"4px"
}
).marginRight,(e=u.appendChild(oe.createElement("div"))).style.cssText=u.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",u.style.width="1px",a=!parseFloat((x.getComputedStyle(e)||{
}
).marginRight),u.removeChild(e)),u.style.display="none",(s=0===u.getClientRects().length)&&(
u.style.display="",u.innerHTML="<table><tr><td></td><td>t</td></tr></table>",u.childNodes[0].style.borderCollapse="separate",(e=u.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(s=0===e[0].offsetHeight)&&(e[0].style.display="",e[1].style.display="none",s=0===e[0].offsetHeight)),n.removeChild(l)
}
var o,i,r,s,a,c,l=oe.createElement("div"),u=oe.createElement("div");u.style&&(u.style.cssText="float:left;opacity:.5",de.opacity="0.5"===u.style.opacity,de.cssFloat=!!u.style.cssFloat,u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===u.style.backgroundClip,(l=oe.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",u.innerHTML="",l.appendChild(u),de.boxSizing=""===u.style.boxSizing||""===u.style.MozBoxSizing||""===u.style.WebkitBoxSizing,fe.extend(de,{reliableHiddenOffsets:function(){return null==o&&e(),s
}
,boxSizingReliable:function(){return null==o&&e(),r
}
,pixelMarginRight:function(){return null==o&&e(),i
}
,pixelPosition:function(){return null==o&&e(),o
}
,reliableMarginRight:function(){return null==o&&e(),a
}
,reliableMarginLeft:function(){return null==o&&e(),c
}

}
))
}
();var yt,gt,vt=/^(top|right|bottom|left)$/;x.getComputedStyle?(yt=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=x),t.getComputedStyle(e)
}
,gt=function(e,t,n){var o,i,r,s,a=e.style;return""!==(s=(n=n||yt(e))?n.getPropertyValue(t)||n[t]:undefined)&&s!==undefined||fe.contains(e.ownerDocument,e)||(s=fe.style(e,t)),n&&!de.pixelMarginRight()&&ft.test(s)&&pt.test(t)&&(o=a.width,i=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=o,a.minWidth=i,a.maxWidth=r),s===undefined?s:s+""
}
):mt.currentStyle&&(yt=function(e){return e.currentStyle
}
,gt=function(e,t,n){var o,i,r,s,a=e.style;return null==(s=(n=n||yt(e))?n[t]:undefined)&&a&&a[t]&&(s=a[t]),ft.test(s)&&!vt.test(t)&&(o=a.left,(r=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),a.left="fontSize"===t?"1em":s,s=a.pixelLeft+"px",a.left=o,r&&(i.left=r)),s===undefined?s:s+""||"auto"
}
);var bt=/alpha\([^)]*\)/i,wt=/opacity\s*=\s*([^)]*)/i,Et=/^(none|table(?!-c[ea]).+)/,kt=new RegExp("^("+Ve+")(.*)$","i"),xt={position:"absolute",visibility:"hidden",display:"block"
}
,Lt={letterSpacing:"0",fontWeight:"400"
}
,Tt=["Webkit","O","Moz","ms"],St=oe.createElement("div").style;fe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=gt(e,"opacity");return""===n?"1":n
}

}

}

}
,cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0
}
,cssProps:{"float":de.cssFloat?"cssFloat":"styleFloat"
}
,style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,r,s,a=fe.camelCase(t),c=e.style;if(t=fe.cssProps[a]||(fe.cssProps[a]=$(a)||a),s=fe.cssHooks[t]||fe.cssHooks[a],n===undefined)return s&&"get"in s&&(i=s.get(e,!1,o))!==undefined?i:c[t];if("string"===(r=typeof n)&&(i=Fe.exec(n))&&i[1]&&(n=d(e,t,i),r="number"),null!=n&&n==n&&("number"===r&&(n+=i&&i[3]||(fe.cssNumber[a]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),!(s&&"set"in s&&(n=s.set(e,n,o))===undefined)))try{c[t]=n
}
catch(l){
}

}

}
,css:function(e,t,n,o){var i,r,s,a=fe.camelCase(t);return t=fe.cssProps[a]||(fe.cssProps[a]=$(a)||a),(s=fe.cssHooks[t]||fe.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),r===undefined&&(r=gt(e,t,o)),"normal"===r&&t in Lt&&(r=Lt[t]),""===n||n?(i=parseFloat(r),!0===n||isFinite(i)?i||0:r):r
}

}
),fe.each(["height","width"],function(e,i){fe.cssHooks[i]={get:function(e,t,n){if(t)return Et.test(fe.css(e,"display"))&&0===e.offsetWidth?ht(e,xt,function(){return G(e,i,n)
}
):G(e,i,n)
}
,set:function(e,t,n){var o=n&&yt(e);return N(e,t,n?D(e,i,n,de.boxSizing&&"border-box"===fe.css(e,"boxSizing",!1,o),o):0)
}

}

}
),de.opacity||(fe.cssHooks.opacity={get:function(e,t){return wt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
}
,set:function(e,t){var n=e.style,o=e.currentStyle,i=fe.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=o&&o.filter||n.filter||"";((n.zoom=1)<=t||""===t)&&""===fe.trim(r.replace(bt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||o&&!o.filter)||(n.filter=bt.test(r)?r.replace(bt,i):r+" "+i)
}

}
),fe.cssHooks.marginRight=A(de.reliableMarginRight,function(e,t){if(t)return ht(e,{display:"inline-block"
}
,gt,[e,"marginRight"])
}
),fe.cssHooks.marginLeft=A(de.reliableMarginLeft,function(e,t){if(t)return(parseFloat(gt(e,"marginLeft"))||(fe.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-ht(e,{marginLeft:0
}
,function(){return e.getBoundingClientRect().left
}
):0))+"px"
}
),fe.each({margin:"",padding:"",border:"Width"
}
,function(i,r){fe.cssHooks[i+r]={expand:function(e){for(var t=0,n={
}
,o="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Pe[t]+r]=o[t]||o[t-2]||o[0];return n
}

}
,pt.test(i)||(fe.cssHooks[i+r].set=N)
}
),fe.fn.extend({css:function(e,t){return Ue(this,function(e,t,n){var o,i,r={
}
,s=0;if(fe.isArray(t)){for(o=yt(e),i=t.length;s<i;s++)r[t[s]]=fe.css(e,t[s],!1,o);return r
}
return n!==undefined?fe.style(e,t,n):fe.css(e,t)
}
,e,t,1<arguments.length)
}
,show:function(){return M(this,!0)
}
,hide:function(){return M(this)
}
,toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ie(this)?fe(this).show():fe(this).hide()
}
)
}

}
),(fe.Tween=H).prototype={constructor:H,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||fe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(fe.cssNumber[n]?"":"px")
}
,cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)
}
,run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=fe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this
}

}
,H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=fe.css(e.elem,e.prop,""))&&"auto"!==t?t:0
}
,set:function(e){fe.fx.step[e.prop]?fe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[fe.cssProps[e.prop]]&&!fe.cssHooks[e.prop]?e.elem[e.prop]=e.now:fe.style(e.elem,e.prop,e.now+e.unit)
}

}

}
,H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}

}
,fe.easing={linear:function(e){return e
}
,swing:function(e){return.5-Math.cos(e*Math.PI)/2
}
,_default:"swing"
}
,fe.fx=H.prototype.init,fe.fx.step={
}
;var Ct,jt,_t,Ot,At,$t,Mt,Nt=/^(?:toggle|show|hide)$/,Dt=/queueHooks$/;fe.Animation=fe.extend(q,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,Fe.exec(t),n),n
}
]
}
,tweener:function(e,t){fe.isFunction(e)?(t=e,e=["*"]):e=e.match(Oe);for(var n,o=0,i=e.length;o<i;o++)n=e[o],q.tweeners[n]=q.tweeners[n]||[],q.tweeners[n].unshift(t)
}
,prefilters:[I],prefilter:function(e,t){t?q.prefilters.unshift(e):q.prefilters.push(e)
}

}
),fe.speed=function(e,t,n){var o=e&&"object"==typeof e?fe.extend({
}
,e):{complete:n||!n&&t||fe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!fe.isFunction(t)&&t
}
;return o.duration=fe.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in fe.fx.speeds?fe.fx.speeds[o.duration]:fe.fx.speeds._default,null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){fe.isFunction(o.old)&&o.old.call(this),o.queue&&fe.dequeue(this,o.queue)
}
,o
}
,fe.fn.extend({fadeTo:function(e,t,n,o){return this.filter(Ie).css("opacity",0).show().end().animate({opacity:t
}
,e,n,o)
}
,animate:function(t,e,n,o){var i=fe.isEmptyObject(t),r=fe.speed(e,n,o),s=function(){var e=q(this,fe.extend({
}
,t),r);(i||fe._data(this,"finish"))&&e.stop(!0)
}
;return s.finish=s,i||!1===r.queue?this.each(s):this.queue(r.queue,s)
}
,stop:function(i,e,r){var s=function(e){var t=e.stop;delete e.stop,t(r)
}
;return"string"!=typeof i&&(r=e,e=i,i=undefined),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=fe.timers,o=fe._data(this);if(t)o[t]&&o[t].stop&&s(o[t]);else for(t in o)o[t]&&o[t].stop&&Dt.test(t)&&s(o[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(r),e=!1,n.splice(t,1));!e&&r||fe.dequeue(this,i)
}
)
}
,finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=fe._data(this),n=t[s+"queue"],o=t[s+"queueHooks"],i=fe.timers,r=n?n.length:0;for(t.finish=!0,fe.queue(this,s,[]),o&&o.stop&&o.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===s&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish
}
)
}

}
),fe.each(["toggle","show","hide"],function(e,o){var i=fe.fn[o];fe.fn[o]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(F(o,!0),e,t,n)
}

}
),fe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"
}
,fadeOut:{opacity:"hide"
}
,fadeToggle:{opacity:"toggle"
}

}
,function(e,o){fe.fn[e]=function(e,t,n){return this.animate(o,e,t,n)
}

}
),fe.timers=[],fe.fx.tick=function(){var e,t=fe.timers,n=0;for(Ct=fe.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||fe.fx.stop(),Ct=undefined
}
,fe.fx.timer=function(e){fe.timers.push(e),e()?fe.fx.start():fe.timers.pop()
}
,fe.fx.interval=13,fe.fx.start=function(){jt||(jt=x.setInterval(fe.fx.tick,fe.fx.interval))
}
,fe.fx.stop=function(){x.clearInterval(jt),jt=null
}
,fe.fx.speeds={slow:600,fast:200,_default:400
}
,fe.fn.delay=function(o,e){return o=fe.fx&&fe.fx.speeds[o]||o,e=e||"fx",this.queue(e,function(e,t){var n=x.setTimeout(e,o);t.stop=function(){x.clearTimeout(n)
}

}
)
}
,Ot=oe.createElement("input"),At=oe.createElement("div"),$t=oe.createElement("select"),Mt=$t.appendChild(oe.createElement("option")),(At=oe.createElement("div")).setAttribute("className","t"),At.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",_t=At.getElementsByTagName("a")[0],Ot.setAttribute("type","checkbox"),At.appendChild(Ot),(_t=At.getElementsByTagName("a")[0]).style.cssText="top:1px",de.getSetAttribute="t"!==At.className,de.style=/top/.test(_t.getAttribute("style")),de.hrefNormalized="/a"===_t.getAttribute("href"),de.checkOn=!!Ot.value,de.optSelected=Mt.selected,de.enctype=!!oe.createElement("form").enctype,$t.disabled=!0,de.optDisabled=!Mt.disabled,(Ot=oe.createElement("input")).setAttribute("value",""),de.input=""===Ot.getAttribute("value"),Ot.value="t",Ot.setAttribute("type","radio"),de.radioValue="t"===Ot.value;var Gt=/\r/g,Ht=/[\x20\t\r\n\f]+/g;fe.fn.extend({val:function(n){var o,e,i,t=this[0];return arguments.length?(i=fe.isFunction(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,fe(this).val()):n)?t="":"number"==typeof t?t+="":fe.isArray(t)&&(t=fe.map(t,function(e){return null==e?"":e+""
}
)),(o=fe.valHooks[this.type]||fe.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&o.set(this,t,"value")!==undefined||(this.value=t))
}
)):t?(o=fe.valHooks[t.type]||fe.valHooks[t.nodeName.toLowerCase()])&&"get"in o&&(e=o.get(t,"value"))!==undefined?e:"string"==typeof(e=t.value)?e.replace(Gt,""):null==e?"":e:void 0
}

}
),fe.extend({valHooks:{option:{get:function(e){var t=fe.find.attr(e,"value");return null!=t?t:fe.trim(fe.text(e)).replace(Ht," ")
}

}
,select:{get:function(e){for(var t,n,o=e.options,i=e.selectedIndex,r="select-one"===e.type||i<0,s=r?null:[],a=r?i+1:o.length,c=i<0?a:r?i:0;c<a;c++)if(((n=o[c]).selected||c===i)&&(de.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!fe.nodeName(n.parentNode,"optgroup"))){if(t=fe(n).val(),r)return t;s.push(t)
}
return s
}
,set:function(e,t){for(var n,o,i=e.options,r=fe.makeArray(t),s=i.length;s--;)if(o=i[s],-1<fe.inArray(fe.valHooks.option.get(o),r))try{o.selected=n=!0
}
catch(a){o.scrollHeight
}
else o.selected=!1;return n||(e.selectedIndex=-1),i
}

}

}

}
),fe.each(["radio","checkbox"],function(){fe.valHooks[this]={set:function(e,t){if(fe.isArray(t))return e.checked=-1<fe.inArray(fe(e).val(),t)
}

}
,de.checkOn||(fe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
}
)
}
);var Vt,Ft,Pt=fe.expr.attrHandle,It=/^(?:checked|selected)$/i,Ut=de.getSetAttribute,qt=de.input;fe.fn.extend({attr:function(e,t){return Ue(this,fe.attr,e,t,1<arguments.length)
}
,removeAttr:function(e){return this.each(function(){fe.removeAttr(this,e)
}
)
}

}
),fe.extend({attr:function(e,t,n){var o,i,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof e.getAttribute?fe.prop(e,t,n):(1===r&&fe.isXMLDoc(e)||(t=t.toLowerCase(),i=fe.attrHooks[t]||(fe.expr.match.bool.test(t)?Ft:Vt)),n!==undefined?null===n?void fe.removeAttr(e,t):i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(o=i.get(e,t))?o:null==(o=fe.find.attr(e,t))?undefined:o)
}
,attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&fe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t
}

}

}

}
,removeAttr:function(e,t){var n,o,i=0,r=t&&t.match(Oe);if(r&&1===e.nodeType)for(;n=r[i++];)o=fe.propFix[n]||n,fe.expr.match.bool.test(n)?qt&&Ut||!It.test(n)?e[o]=!1:e[fe.camelCase("default-"+n)]=e[o]=!1:fe.attr(e,n,""),e.removeAttribute(Ut?n:o)
}

}
),Ft={set:function(e,t,n){return!1===t?fe.removeAttr(e,n):qt&&Ut||!It.test(n)?e.setAttribute(!Ut&&fe.propFix[n]||n,n):e[fe.camelCase("default-"+n)]=e[n]=!0,n
}

}
,fe.each(fe.expr.match.bool.source.match(/\w+/g),function(e,t){var r=Pt[t]||fe.find.attr;qt&&Ut||!It.test(t)?Pt[t]=function(e,t,n){var o,i;return n||(i=Pt[t],Pt[t]=o,o=null!=r(e,t,n)?t.toLowerCase():null,Pt[t]=i),o
}
:Pt[t]=function(e,t,n){if(!n)return e[fe.camelCase("default-"+t)]?t.toLowerCase():null
}

}
),qt&&Ut||(fe.attrHooks.value={set:function(e,t,n){if(!fe.nodeName(e,"input"))return Vt&&Vt.set(e,t,n);e.defaultValue=t
}

}
),Ut||(Vt={set:function(e,t,n){var o=e.getAttributeNode(n);if(o||e.setAttributeNode(o=e.ownerDocument.createAttribute(n)),o.value=t+="","value"===n||t===e.getAttribute(n))return t
}

}
,Pt.id=Pt.name=Pt.coords=function(e,t,n){var o;if(!n)return(o=e.getAttributeNode(t))&&""!==o.value?o.value:null
}
,fe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value
}
,set:Vt.set
}
,fe.attrHooks.contenteditable={set:function(e,t,n){Vt.set(e,""!==t&&t,n)
}

}
,fe.each(["width","height"],function(e,n){fe.attrHooks[n]={set:function(e,t){if(""===t)return e.setAttribute(n,"auto"),t
}

}

}
)),de.style||(fe.attrHooks.style={get:function(e){return e.style.cssText||undefined
}
,set:function(e,t){return e.style.cssText=t+""
}

}
);var Kt=/^(?:input|select|textarea|button|object)$/i,Bt=/^(?:a|area)$/i;fe.fn.extend({prop:function(e,t){return Ue(this,fe.prop,e,t,1<arguments.length)
}
,removeProp:function(t){return t=fe.propFix[t]||t,this.each(function(){try{this[t]=undefined,delete this[t]
}
catch(e){
}

}
)
}

}
),fe.extend({prop:function(e,t,n){var o,i,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&fe.isXMLDoc(e)||(t=fe.propFix[t]||t,i=fe.propHooks[t]),n!==undefined?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]
}
,propHooks:{tabIndex:{get:function(e){var t=fe.find.attr(e,"tabindex");return t?parseInt(t,10):Kt.test(e.nodeName)||Bt.test(e.nodeName)&&e.href?0:-1
}

}

}
,propFix:{"for":"htmlFor","class":"className"
}

}
),de.hrefNormalized||fe.each(["href","src"],function(e,t){fe.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}

}

}
),de.optSelected||(fe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}
,set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)
}

}
),fe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){fe.propFix[this.toLowerCase()]=this
}
),de.enctype||(fe.propFix.enctype="encoding");var Wt=/[\t\r\n\f]/g;fe.fn.extend({addClass:function(t){var e,n,o,i,r,s,a,c=0;if(fe.isFunction(t))return this.each(function(e){fe(this).addClass(t.call(this,e,K(this)))
}
);if("string"==typeof t&&t)for(e=t.match(Oe)||[];n=this[c++];)if(i=K(n),o=1===n.nodeType&&(" "+i+" ").replace(Wt," ")){for(s=0;r=e[s++];)o.indexOf(" "+r+" ")<0&&(o+=r+" ");i!==(a=fe.trim(o))&&fe.attr(n,"class",a)
}
return this
}
,removeClass:function(t){var e,n,o,i,r,s,a,c=0;if(fe.isFunction(t))return this.each(function(e){fe(this).removeClass(t.call(this,e,K(this)))
}
);if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(Oe)||[];n=this[c++];)if(i=K(n),o=1===n.nodeType&&(" "+i+" ").replace(Wt," ")){for(s=0;r=e[s++];)for(;-1<o.indexOf(" "+r+" ");)o=o.replace(" "+r+" "," ");i!==(a=fe.trim(o))&&fe.attr(n,"class",a)
}
return this
}
,toggleClass:function(i,t){var r=typeof i;return"boolean"==typeof t&&"string"===r?t?this.addClass(i):this.removeClass(i):fe.isFunction(i)?this.each(function(e){fe(this).toggleClass(i.call(this,e,K(this),t),t)
}
):this.each(function(){var e,t,n,o;if("string"===r)for(t=0,n=fe(this),o=i.match(Oe)||[];e=o[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else i!==undefined&&"boolean"!==r||((e=K(this))&&fe._data(this,"__className__",e),fe.attr(this,"class",e||!1===i?"":fe._data(this,"__className__")||""))
}
)
}
,hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(1===n.nodeType&&-1<(" "+K(n)+" ").replace(Wt," ").indexOf(t))return!0;return!1
}

}
),fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,n){fe.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)
}

}
),fe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
}

}
);var Rt=x.location,zt=fe.now(),Xt=/\?/,Yt=/(,)|(\[|{)|(
}
|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4
}
)*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;fe.parseJSON=function(e){if(x.JSON&&x.JSON.parse)return x.JSON.parse(e+"");var i,r=null,t=fe.trim(e+"");return t&&!fe.trim(t.replace(Yt,function(e,t,n,o){return i&&t&&(r=0),0===r?e:(i=n||t,r+=!o-!n,"")
}
))?Function("return "+t)():fe.error("Invalid JSON: "+e)
}
,fe.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{x.DOMParser?t=(new x.DOMParser).parseFromString(e,"text/xml"):((t=new x.ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e))
}
catch(n){t=undefined
}
return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||fe.error("Invalid XML: "+e),t
}
;var Jt=/#.*$/,Qt=/([?&])_=[^&]*/,Zt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,en=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,tn=/^(?:GET|HEAD)$/,nn=/^\/\//,on=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,rn={
}
,sn={
}
,an="*/".concat("*"),cn=Rt.href,ln=on.exec(cn.toLowerCase())||[];fe.extend({active:0,lastModified:{
}
,etag:{
}
,ajaxSettings:{url:cn,type:"GET",isLocal:en.test(ln[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":an,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"
}
,contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/
}
,responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"
}
,converters:{"* text":String,"text html":!0,"text json":fe.parseJSON,"text xml":fe.parseXML
}
,flatOptions:{url:!0,context:!0
}

}
,ajaxSetup:function(e,t){return t?R(R(e,fe.ajaxSettings),t):R(fe.ajaxSettings,e)
}
,ajaxPrefilter:B(rn),ajaxTransport:B(sn),ajax:function(e,t){function n(e,t,n,o){var i,r,s,a,c,l=t;2!==E&&(E=2,p&&x.clearTimeout(p),h=undefined,d=o||"",k.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(a=z(m,k,n)),a=X(m,a,k,i),i?(m.ifModified&&((c=k.getResponseHeader("Last-Modified"))&&(fe.lastModified[u]=c),(c=k.getResponseHeader("etag"))&&(fe.etag[u]=c)),204===e||"HEAD"===m.type?l="nocontent":304===e?l="notmodified":(l=a.state,r=a.data,i=!(s=a.error))):(s=l,!e&&l||(l="error",e<0&&(e=0))),k.status=e,k.statusText=(t||l)+"",i?v.resolveWith(y,[r,l,k]):v.rejectWith(y,[k,l,s]),k.statusCode(w),w=undefined,f&&g.trigger(i?"ajaxSuccess":"ajaxError",[k,m,i?r:s]),b.fireWith(y,[k,l]),f&&(g.trigger("ajaxComplete",[k,m]),--fe.active||fe.event.trigger("ajaxStop")))
}
"object"==typeof e&&(t=e,e=undefined),t=t||{
}
;var o,i,u,d,p,f,h,r,m=fe.ajaxSetup({
}
,t),y=m.context||m,g=m.context&&(y.nodeType||y.jquery)?fe(y):fe.event,v=fe.Deferred(),b=fe.Callbacks("once memory"),w=m.statusCode||{
}
,s={
}
,a={
}
,E=0,c="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===E){if(!r)for(r={
}
;t=Zt.exec(d);)r[t[1].toLowerCase()]=t[2];t=r[e.toLowerCase()]
}
return null==t?null:t
}
,getAllResponseHeaders:function(){return 2===E?d:null
}
,setRequestHeader:function(e,t){var n=e.toLowerCase();return E||(e=a[n]=a[n]||e,s[e]=t),this
}
,overrideMimeType:function(e){return E||(m.mimeType=e),this
}
,statusCode:function(e){var t;if(e)if(E<2)for(t in e)w[t]=[w[t],e[t]];else k.always(e[k.status]);return this
}
,abort:function(e){var t=e||c;return h&&h.abort(t),n(0,t),this
}

}
;if(v.promise(k).complete=b.add,k.success=k.done,k.error=k.fail,m.url=((e||m.url||cn)+"").replace(Jt,"").replace(nn,ln[1]+"//"),m.type=t.method||t.type||m.method||m.type,m.dataTypes=fe.trim(m.dataType||"*").toLowerCase().match(Oe)||[""],null==m.crossDomain&&(o=on.exec(m.url.toLowerCase()),m.crossDomain=!(!o||o[1]===ln[1]&&o[2]===ln[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(ln[3]||("http:"===ln[1]?"80":"443")))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=fe.param(m.data,m.traditional)),W(rn,m,t,k),2===E)return k;for(i in(f=fe.event&&m.global)&&0==fe.active++&&fe.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!tn.test(m.type),u=m.url,m.hasContent||(m.data&&(u=m.url+=(Xt.test(u)?"&":"?")+m.data,delete m.data),!1===m.cache&&(m.url=Qt.test(u)?u.replace(Qt,"$1_="+zt++):u+(Xt.test(u)?"&":"?")+"_="+zt++)),m.ifModified&&(fe.lastModified[u]&&k.setRequestHeader("If-Modified-Since",fe.lastModified[u]),fe.etag[u]&&k.setRequestHeader("If-None-Match",fe.etag[u])),(m.data&&m.hasContent&&!1!==m.contentType||t.contentType)&&k.setRequestHeader("Content-Type",m.contentType),k.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+an+"; q=0.01":""):m.accepts["*"]),m.headers)k.setRequestHeader(i,m.headers[i]);if(m.beforeSend&&(!1===m.beforeSend.call(y,k,m)||2===E))return k.abort();for(i in c="abort",{success:1,error:1,complete:1
}
)k[i](m[i]);if(h=W(sn,m,t,k)){if(k.readyState=1,f&&g.trigger("ajaxSend",[k,m]),2===E)return k;m.async&&0<m.timeout&&(p=x.setTimeout(function(){k.abort("timeout")
}
,m.timeout));try{E=1,h.send(s,n)
}
catch(l){if(!(E<2))throw l;n(-1,l)
}

}
else n(-1,"No Transport");return k
}
,getJSON:function(e,t,n){return fe.get(e,t,n,"json")
}
,getScript:function(e,t){return fe.get(e,undefined,t,"script")
}

}
),fe.each(["get","post"],function(e,i){fe[i]=function(e,t,n,o){return fe.isFunction(t)&&(o=o||n,n=t,t=undefined),fe.ajax(fe.extend({url:e,type:i,dataType:o,data:t,success:n
}
,fe.isPlainObject(e)&&e))
}

}
),fe._evalUrl=function(e){return fe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0
}
)
}
,fe.fn.extend({wrapAll:function(t){if(fe.isFunction(t))return this.each(function(e){fe(this).wrapAll(t.call(this,e))
}
);if(this[0]){var e=fe(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e
}
).append(this)
}
return this
}
,wrapInner:function(n){return fe.isFunction(n)?this.each(function(e){fe(this).wrapInner(n.call(this,e))
}
):this.each(function(){var e=fe(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)
}
)
}
,wrap:function(t){var n=fe.isFunction(t);return this.each(function(e){fe(this).wrapAll(n?t.call(this,e):t)
}
)
}
,unwrap:function(){return this.parent().each(function(){fe.nodeName(this,"body")||fe(this).replaceWith(this.childNodes)
}
).end()
}

}
),fe.expr.filters.hidden=function(e){return de.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:J(e)
}
,fe.expr.filters.visible=function(e){return!fe.expr.filters.hidden(e)
}
;var un=/%20/g,dn=/\[\]$/,pn=/\r?\n/g,fn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;fe.param=function(e,t){var n,o=[],i=function(e,t){t=fe.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
}
;if(t===undefined&&(t=fe.ajaxSettings&&fe.ajaxSettings.traditional),fe.isArray(e)||e.jquery&&!fe.isPlainObject(e))fe.each(e,function(){i(this.name,this.value)
}
);else for(n in e)Q(n,e[n],t,i);return o.join("&").replace(un,"+")
}
,fe.fn.extend({serialize:function(){return fe.param(this.serializeArray())
}
,serializeArray:function(){return this.map(function(){var e=fe.prop(this,"elements");return e?fe.makeArray(e):this
}
).filter(function(){var e=this.type;return this.name&&!fe(this).is(":disabled")&&hn.test(this.nodeName)&&!fn.test(e)&&(this.checked||!qe.test(e))
}
).map(function(e,t){var n=fe(this).val();return null==n?null:fe.isArray(n)?fe.map(n,function(e){return{name:t.name,value:e.replace(pn,"\r\n")
}

}
):{name:t.name,value:n.replace(pn,"\r\n")
}

}
).get()
}

}
),fe.ajaxSettings.xhr=x.ActiveXObject!==undefined?function(){return this.isLocal?ee():8<oe.documentMode?Z():/^(get|post|head|put|delete|options)$/i.test(this.type)&&Z()||ee()
}
:Z;var mn=0,yn={
}
,gn=fe.ajaxSettings.xhr();x.attachEvent&&x.attachEvent("onunload",function(){for(var e in yn)yn[e](undefined,!0)
}
),de.cors=!!gn&&"withCredentials"in gn,(gn=de.ajax=!!gn)&&fe.ajaxTransport(function(l){var u;if(!l.crossDomain||de.cors)return{send:function(e,s){var t,a=l.xhr(),c=++mn;if(a.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(t in l.xhrFields)a[t]=l.xhrFields[t];for(t in l.mimeType&&a.overrideMimeType&&a.overrideMimeType(l.mimeType),l.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)e[t]!==undefined&&a.setRequestHeader(t,e[t]+"");a.send(l.hasContent&&l.data||null),u=function(e,t){var n,o,i;if(u&&(t||4===a.readyState))if(delete yn[c],u=undefined,a.onreadystatechange=fe.noop,t)4!==a.readyState&&a.abort();else{i={
}
,n=a.status,"string"==typeof a.responseText&&(i.text=a.responseText);try{o=a.statusText
}
catch(r){o=""
}
n||!l.isLocal||l.crossDomain?1223===n&&(n=204):n=i.text?200:404
}
i&&s(n,o,i,a.getAllResponseHeaders())
}
,l.async?4===a.readyState?x.setTimeout(u):a.onreadystatechange=yn[c]=u:u()
}
,abort:function(){u&&u(undefined,!0)
}

}

}
),fe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
}
,contents:{script:/\b(?:java|ecma)script\b/
}
,converters:{"text script":function(e){return fe.globalEval(e),e
}

}

}
),fe.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}
),fe.ajaxTransport("script",function(t){if(t.crossDomain){var o,i=oe.head||fe("head")[0]||oe.documentElement;return{send:function(e,n){(o=oe.createElement("script")).async=!0,t.scriptCharset&&(o.charset=t.scriptCharset),o.src=t.url,o.onload=o.onreadystatechange=function(e,t){(t||!o.readyState||/loaded|complete/.test(o.readyState))&&(o.onload=o.onreadystatechange=null,o.parentNode&&o.parentNode.removeChild(o),o=null,t||n(200,"success"))
}
,i.insertBefore(o,i.firstChild)
}
,abort:function(){o&&o.onload(undefined,!0)
}

}

}

}
);var vn=[],bn=/(=)\?(?=&|$)|\?\?/;fe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=vn.pop()||fe.expando+"_"+zt++;return this[e]=!0,e
}

}
),fe.ajaxPrefilter("json jsonp",function(e,t,n){var o,i,r,s=!1!==e.jsonp&&(bn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&bn.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=fe.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(bn,"$1"+o):!1!==e.jsonp&&(e.url+=(Xt.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return r||fe.error(o+" was not called"),r[0]
}
,e.dataTypes[0]="json",i=x[o],x[o]=function(){r=arguments
}
,n.always(function(){i===undefined?fe(x).removeProp(o):x[o]=i,e[o]&&(e.jsonpCallback=t.jsonpCallback,vn.push(o)),r&&fe.isFunction(i)&&i(r[0]),r=i=undefined
}
),"script"
}
),fe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||oe;var o=ke.exec(e),i=!n&&[];return o?[t.createElement(o[1])]:(o=m([e],t,i),i&&i.length&&fe(i).remove(),fe.merge([],o.childNodes))
}
;var wn=fe.fn.load;fe.fn.load=function(e,t,n){if("string"!=typeof e&&wn)return wn.apply(this,arguments);var o,i,r,s=this,a=e.indexOf(" ");return-1<a&&(o=fe.trim(e.slice(a,e.length)),e=e.slice(0,a)),fe.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),0<s.length&&fe.ajax({url:e,type:i||"GET",dataType:"html",data:t
}
).done(function(e){r=arguments,s.html(o?fe("<div>").append(fe.parseHTML(e)).find(o):e)
}
).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])
}
)
}
),this
}
,fe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){fe.fn[t]=function(e){return this.on(t,e)
}

}
),fe.expr.filters.animated=function(t){return fe.grep(fe.timers,function(e){return t===e.elem
}
).length
}
,fe.offset={setOffset:function(e,t,n){var o,i,r,s,a,c,l=fe.css(e,"position"),u=fe(e),d={
}
;"static"===l&&(e.style.position="relative"),a=u.offset(),r=fe.css(e,"top"),c=fe.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<fe.inArray("auto",[r,c])?(s=(o=u.position()).top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(c)||0),fe.isFunction(t)&&(t=t.call(e,n,fe.extend({
}
,a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):u.css(d)
}

}
,fe.fn.extend({offset:function(t){if(arguments.length)return t===undefined?this:this.each(function(e){fe.offset.setOffset(this,t,e)
}
);var e,n,o={top:0,left:0
}
,i=this[0],r=i&&i.ownerDocument;return r?(e=r.documentElement,fe.contains(e,i)?("undefined"!=typeof i.getBoundingClientRect&&(o=i.getBoundingClientRect()),n=te(r),{top:o.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:o.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)
}
):o):void 0
}
,position:function(){if(this[0]){var e,t,n={top:0,left:0
}
,o=this[0];return"fixed"===fe.css(o,"position")?t=o.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),fe.nodeName(e[0],"html")||(n=e.offset()),n.top+=fe.css(e[0],"borderTopWidth",!0),n.left+=fe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-fe.css(o,"marginTop",!0),left:t.left-n.left-fe.css(o,"marginLeft",!0)
}

}

}
,offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!fe.nodeName(e,"html")&&"static"===fe.css(e,"position");)e=e.offsetParent;return e||mt
}
)
}

}
),fe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"
}
,function(t,i){var r=/Y/.test(i);fe.fn[t]=function(e){return Ue(this,function(e,t,n){var o=te(e);if(n===undefined)return o?i in o?o[i]:o.document.documentElement[t]:e[t];o?o.scrollTo(r?fe(o).scrollLeft():n,r?n:fe(o).scrollTop()):e[t]=n
}
,t,e,arguments.length,null)
}

}
),fe.each(["top","left"],function(e,n){fe.cssHooks[n]=A(de.pixelPosition,function(e,t){if(t)return t=gt(e,n),ft.test(t)?fe(e).position()[n]+"px":t
}
)
}
),fe.each({Height:"height",Width:"width"
}
,function(r,s){fe.each({padding:"inner"+r,content:s,"":"outer"+r
}
,function(o,e){fe.fn[e]=function(e,t){var n=arguments.length&&(o||"boolean"!=typeof e),i=o||(!0===e||!0===t?"margin":"border");return Ue(this,function(e,t,n){var o;return fe.isWindow(e)?e.document.documentElement["client"+r]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+r],o["scroll"+r],e.body["offset"+r],o["offset"+r],o["client"+r])):n===undefined?fe.css(e,t,i):fe.style(e,t,n,i)
}
,s,n?e:undefined,n,null)
}

}
)
}
),fe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)
}
,unbind:function(e,t){return this.off(e,null,t)
}
,delegate:function(e,t,n,o){return this.on(t,e,n,o)
}
,undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}

}
),fe.fn.size=function(){return this.length
}
,fe.fn.andSelf=fe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return fe
}
);var En=x.jQuery,kn=x.$;return fe.noConflict=function(e){return x.$===fe&&(x.$=kn),e&&x.jQuery===fe&&(x.jQuery=En),fe
}
,e||(x.jQuery=x.$=fe),fe
}
),function(e){"use strict";var d=e.jQuery,p=e.GOVUK||{
}
;p.Modules=p.Modules||{
}
,p.modules={find:function(e){var t,n="[data-module]";return t=(e=e||d(document)).find(n),e.is(n)&&(t=t.add(e)),t
}
,start:function(e){function t(e){return o(n(e))
}
function n(e){return e.replace(/-([a-z])/g,function(e){return e.charAt(1
).toUpperCase()
}
)
}
function o(e){return e.charAt(0).toUpperCase()+e.slice(1)
}
for(var i=this.find(e),r=0,s=i.length;r<s;r++){var a=d(i[r]),c=t(a.data("module")),l=a.data("module-started"),u=c.replace("Govuk","");"function"!=typeof p.Modules[c]||p.Modules[c].prototype.init||l?"function"==typeof p.Modules[u]&&p.Modules[u].prototype.init&&!l&&(new p.Modules[u](a[0]).init(),a.data("module-started",!0)):((new p.Modules[c]).start(a),a.data("module-started",!0))
}

}

}
,e.GOVUK=p
}
(window),$(document).ready(function(){"use strict";window.GOVUK.modules.start()
}
),function(){"use strict";window.GOVUK=window.GOVUK||{
}
;var i={essential:!0,settings:!1,usage:!1,campaigns:!1
}
,r={cookies_policy:"essential",seen_cookie_message:"essential",cookie_preferences_set:"essential",cookies_preferences_set:"essential","_email-alert-frontend_session":"essential",licensing_session:"essential",govuk_contact_referrer:"essential",multivariatetest_cohort_coronavirus_extremely_vulnerable_rate_limit:"essential",dgu_beta_banner_dismissed:"settings",global_bar_seen:"settings",govuk_browser_upgrade_dismisssed:"settings",govuk_not_first_visit:"settings",analytics_next_page_call:"usage",_ga:"usage",_gid:"usage",_gat:"usage","JS-Detection":"usage",TLSversion:"usage"
}
;window.GOVUK.cookie=function(e,t,n){return void 0!==t?!1===t||null===t?window.GOVUK.setCookie(e,"",{days:-1
}
):(void 0===n&&(n={days:30
}
),window.GOVUK.setCookie(e,t,n)):window.GOVUK.getCookie(e)
}
,window.GOVUK.setDefaultConsentCookie=function(){window.GOVUK.setConsentCookie(i)
}
,window.GOVUK.approveAllCookieTypes=function(){var e={essential:!0,settings:!0,usage:!0,campaigns:!0
}
;window.GOVUK.setCookie("cookies_policy",JSON.stringify(e),{days:365
}
)
}
,window.GOVUK.getConsentCookie=function(){var e,t=window.GOVUK.cookie("cookies_policy");if(!t)return null;try{e=JSON.parse(t)
}
catch(n){return null
}
return"object"!=typeof e&&null!==e&&(e=JSON.parse(e)),e
}
,window.GOVUK.setConsentCookie=function(e){var t=window.GOVUK.getConsentCookie();for(var n in t||(t=JSON.parse(JSON.stringify(i))),e)if(t[n]=e[n],!e[n])for(var o in r)r[o]===n&&window.GOVUK.deleteCookie(o);window.GOVUK.setCookie("cookies_policy",JSON.stringify(t),{days:365
}
)
}
,window.GOVUK.checkConsentCookieCategory=function(e,t){var n=window.GOVUK.getConsentCookie();if(!n&&r[e])return!0;n=window.GOVUK.getConsentCookie();try{return n[t]
}
catch(o){return console.error(o),!1
}

}
,window.GOVUK.checkConsentCookie=function(e,t){if("cookies_policy"===e||null===t||!1===t)return!0;if(e.match("^govuk_surveySeen")||e.match("^govuk_taken"))return window.GOVUK.checkConsentCookieCategory(e,"settings");if(r[e]){var n=r[e];return window.GOVUK.checkConsentCookieCategory(e,n)
}
return!1
}
,window.GOVUK.setCookie=function(e,t,n){if(window.GOVUK.checkConsentCookie(e,t)){void 0===n&&(n={
}
);var o=e+"="+t+"; path=/";if(n.days){var i=new Date;i.setTime(i.getTime()+24*n.days*60*60*1e3),o=o+"; expires="+i.toGMTString()
}
"https:"===document.location.protocol&&(o+="; Secure"),document.cookie=o
}

}
,window.GOVUK.getCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0,i=n.length;o<i;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length))
}
return null
}
,window.GOVUK.getCookieCategory=function(e){return r[e]
}
,window.GOVUK.deleteCookie=function(e){window.GOVUK.cookie(e,null),window.GOVUK.cookie(e)&&(document.cookie=e+"=;expires="+new Date+";",document.cookie=e+"=;expires="+new Date+";domain="+window.location.hostname+";path=/")
}
,window.GOVUK.deleteUnconsentedCookies=function(){var e=window.GOVUK.getConsentCookie();for(var t in e)if(!e[t])for(var n in r)r[n]===t&&window.GOVUK.deleteCookie(n)
}

}
(window),function(e){"use strict";window.GOVUK=window.GOVUK||{
}
,window.GOVUK.getCurrentLocation=function(){return e.location
}

}
(window),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):t()
}
(0,function(){"use strict";(function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
)
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e,t){for(var n in this.$module=e[0],this.options={outOf:65,applyOnInit:!0,autoOutdent:!1,outdentAll:!1,chartVisibleText:"Change to table and accessible view",tableVisibleText:"Change to chart view",chartAlertText:"Chart visible",tableAlertText:"Table visible",toggleAfter:!1,returnReference:!1
}
,t)this.options[n]=t[n];this.detectIEVersion(),this.ENABLED=!(this.ie&&this.ie<8),this.$table=e,this.$graphContainer=document.createElement("div"),this.$graphContainer.className="mc-chart-container",this.$graph=document.createElement("div"),this.$graph.setAttribute("aria-hidden","true"),this.$graph.setAttribute("class",this.$table.className),this.$graph.classList.add("mc-chart"),this.chartId=this.getChartId(e),this.options.stacked=this.$table.classList.contains("mc-stacked"),this.options.negative=this.$table.classList.contains("mc-negative");var o=2<this.$table.querySelectorAll("tbody tr")[0].querySelectorAll("th, td").length;if(this.options.multiple=!this.options.stacked&&(this.$table.classList.contains("mc-multiple")||o),this.options.autoOutdent=this.options.autoOutdent||this.$table.classList.contains("mc-auto-outdent"),this.options.outdentAll=this.options.outdentAll||this.$table.classList.contains("mc-outdented"),this.options.multiple&&this.$graph.classList.add("mc-multiple"),this.options.hasCaption=!!this.$table.querySelectorAll("caption").length,this.ENABLED&&(this.apply(),this.options.applyOnInit||this.toggleLink.click()),this.options.returnReference)return this
}
,t.prototype.detectIEVersion=function(){this.ie=function(){for(var e,t=3,n=document.createElement("div"),o=n.getElementsByTagName("i");n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",t<10&&o[0];);return 4<t?t:e
}
()
}
,t.prototype.apply=function(){this.ENABLED&&(this.constructChart(),this.addClassesToHeader(),this.applyWidths(),this.insert(),this.$table.classList.add("mc-hidden"),this.applyOutdent())
}
,t.prototype.construct={
}
,t.prototype.construct.thead=function(){var e=document.createElement("div");e.classList.add("mc-thead");var t=document.createElement("div");t.classList.add("mc-tr");for(var n="",o=this.$table.querySelectorAll("thead th"),i=0;i<o.length;i++)n+='<div class="mc-th">',n+=o[i].innerHTML,n+="</div>";return t.innerHTML=n,e.appendChild(t),e
}
,t.prototype.construct.tbody=function(){var e=document.createElement("div");e.classList.add("mc-tbody");for(var t=this.$table.querySelectorAll("tbody tr"),n=0;n<t.length;n++){var o=document.createElement("div");o.classList.add("mc-tr");for(var i="",r=t[n].querySelectorAll("th, td"),s=0;s<r.length;s++)i+='<div class="mc-td">',i+=r[s].innerHTML,i+="</div>";o.innerHTML=i,e.appendChild(o)
}
return e
}
,t.prototype.construct.caption=function(){return this.$table.querySelector("caption").cloneNode(!0)
}
,t.prototype.construct.toggleLink=function(e){var t=document.createElement("button"),n=document.createElement("span"),o=document.createElement("span");return n.classList.add("mc-toggle-text"),n.innerHTML=e,o.classList.add("govuk-visually-hidden","mc-toggle-status"),o.setAttribute("role","alert"),t.classList.add("mc-toggle-button"),t.appendChild(n),t.appendChild(o),t
}
,t.prototype.addToggleClick=function(o,i,r,s){var a=this;this.toggleLink.addEventListener("click",function(e){e.preventDefault();var t=a.toggleLink.querySelector(".mc-toggle-text"),n=a.toggleLink.querySelector(".mc-toggle-status");a.$graphContainer.classList.toggle("mc-hidden"),a.$table.classList.toggle("mc-hidden"),t.innerHTML=t.innerHTML===i?o:i,n.innerHTML=n.innerHTML===s?r:s
}
)
}
,t.prototype.constructChart=function(){var e=this.construct.thead.call(this),t=this.construct.tbody.call(this);if(this.toggleLink=this.construct.toggleLink(this.options.chartVisibleText),this.addToggleClick(this.options.chartVisibleText,this.options.tableVisibleText,this.options.chartAlertText,this.options.tableAlertText),this.options.hasCaption){var n=this.construct.caption.call(this);this.$graph.appendChild(n)
}
this.options.toggleAfter?this.$table.insertAdjacentElement("afterend",this.toggleLink):this.$table.insertAdjacentElement("beforebegin",this.toggleLink),this.$graph.appendChild(e),this.$graph.appendChild(t)
}
,t.prototype.utils={isFloat:function(e){return!isNaN(parseFloat(e))
}
,stripValue:function(e){return e.replace(/,|\xa3|%|[a-z]/gi,"")
}
,returnMax:function(e){for(var t=0,n=0;n<e.length;n++)e[n]>t&&(t=e[n]);return t
}
,isNegative:function(e){return e<0
}

}
,t.prototype.addClassesToHeader=function(){var e=this.$graph.querySelectorAll(".mc-th"),t=e.length;this.options.stacked&&(e[t-1].classList.add("mc-stacked-header","mc-header-total"),t-=1);for(var n=1;n<t;n++)e[n].classList.add("mc-key-header"),e[n].classList.contains("mc-stacked-header")||e[n].classList.add("mc-key-"+n)
}
,t.prototype.calculateMaxWidth=function(){for(var e=[],t=0,n=this.$graph.querySelectorAll(".mc-tr"),o=0;o<n.length;o++){for(var i=n[o],r=i.querySelectorAll(".mc-td"),s=[],a=1;a<r.length;a++)s.push(r[a]);var c=s.length;if(c){this.options.stacked&&(s[c-1].classList.add("mc-stacked-total"),c-=1);var l=i.querySelector(".mc-td");l&&l.classList.add("mc-key-cell");for(var u=0,d=0;d<c;d++){var p=s[d];p.classList.add("mc-bar-cell"),p.classList.add("mc-bar-"+(d+1));var f=this.utils.stripValue(p.innerText);if(this.utils.isFloat(f)){var h=parseFloat(f,10),m=Math.abs(h);0===h&&p.classList.add("mc-bar-zero"),this.options.negative&&(this.utils.isNegative(h)?(p.classList.add("mc-bar-negative"),t<m&&(t=m)):p.classList.add("mc-bar-positive")),h=m,this.options.stacked?u+=h:(u=h,e.push(h))
}

}

}
this.options.stacked&&e.push(u)
}
var y={
}
;return y.max=parseFloat(this.utils.returnMax(e),10),y.single=parseFloat(this.options.outOf/y.max,10),this.options.negative&&(y.marginLeft=parseFloat(t,10)*y.single,y.maxNegative=parseFloat(t,10)),y
}
,t.prototype.applyWidths=function(){this.dimensions=this.calculateMaxWidth();for(var e=this.$graph.querySelectorAll(".mc-tr"),t=0;t<e.length;t++)for(var n=e[t].querySelectorAll(".mc-bar-cell"),o=0;o<n.length;o++){var i=n[o],r=parseFloat(this.utils.stripValue(i.innerText),10),s=r*this.dimensions.single,a=Math.abs(r),c=Math.abs(s);if(this.options.negative)if(i.classList.contains("mc-bar-positive"))i.style.marginLeft=this.dimensions.marginLeft+"%";else if(a<this.dimensions.maxNegative){var l=(this.dimensions.maxNegative-a)*this.dimensions.single;i.style.marginLeft=l+"%"
}
i.innerHTML="<span>"+i.innerHTML+"</span>",i.style.width=c+"%"
}

}
,t.prototype.insert=function(){var e=document.createElement("span"),t="mc-chart-not-accessible-"+this.chartId;e.innerHTML="This content is not accessible - switch to table",e.className="mc-hidden",e.id=t,this.$graphContainer.setAttribute("aria-labelledby",t),this.$graphContainer.appendChild(this.$graph),this.$graphContainer.appendChild(e),this.$table.insertAdjacentElement("afterend",this.$graphContainer)
}
,t.prototype.applyOutdent=function(){for(var e=this.$graph.querySelectorAll(".mc-bar-cell"),t=0;t<e.length;t++){var n=e[t],o=parseFloat(this.utils.stripValue(n.innerText),10),i=n.querySelector("span"),r=n.querySelector("span").offsetWidth+5,s=n.offsetWidth;this.options.stacked?(s<r&&0<o||o<1)&&n.classList.add("mc-value-overflow"):(0===o&&n.classList.add("mc-bar-outdented"),this.options.autoOutdent&&s<=r||this.options.outdentAll?(n.classList.add("mc-bar-outdented"),i.style.marginLeft="100%",i.style.display="inline-block"):n.classList.add("mc-bar-indented"))
}

}
,t.prototype.getChartId=function(n){var e=document.querySelectorAll("table.js-barchart-table"),o=null;return e.forEach(function(e,t){e===n&&(o=t)
}
),o
}
,e.MagnaCharta=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,function(s){"use strict";var e=function(e){this.$element=e
}
;e.prototype.init=function(){for(var e=this.$element.querySelectorAll(".js-barchart-table"),t=[],n=0;n<e.length;n++){var o=e[n].className;-1===o.indexOf("mc-chart")&&-1===o.indexOf("js-barchart-table-init")&&t.push(e[n])
}
for(var i=0;i<t.length;i++){var r=t[i];(new s.Modules.MagnaCharta).start(r,{toggleText:"Change between chart and table"
}
),r.className=r.className+" js-barchart-table-init"
}

}
,s.GovspeakBarchartEnhancement=e
}
(window.GOVUK,window.jQuery),function(){"use strict";window.GOVUK=window.GOVUK||{
}
;var e=window.GOVUK||{
}
,c=function(e){this.$element=e
}
;c.prototype.init=function(){if(this.campaignCookiesAllowed()){var e=this.$element.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]');0<e.length&&c.insertApiScript();for(var t=0;t<e.length;++t){var n=e[t],o=n.getAttribute("href"),i=n.hasAttribute("data-youtube-player-analytics"),r={link:n
}
;if(i&&(r.tracking={hasTracking:i,category:n.getAttribute("data-youtube-player-analytics-category")
}
),0<=o.indexOf("/live_stream")){var s=c.parseLivestream(o);!this.hasDisabledEmbed(n)&&s&&(r.channel=s,this.setupVideo(r))
}
else{var a=c.parseVideoId(o);!this.hasDisabledEmbed(n)&&a&&(r.videoId=a,this.setupVideo(r))
}

}

}

}
,c.prototype.hasDisabledEmbed=function(e){return"off"===e.getAttribute("data-youtube-player")
}
,c.prototype.setupVideo=function(e){var t=c.nextId(),n=e.link,o=e.videoId?e.videoId:e.channel,i=n.parentNode,r=i.parentNode,s=document.createElement("div");s.className+="gem-c-govspeak__youtube-video",s.innerHTML='<span id="'+t+'" data-video-id="'+o+'"></span>',e.title=n.textContent,r.replaceChild(s,i),this.insertVideo(t,e)
}
,c.prototype.insertVideo=function(e,r){var t="",n="";r.channel?(t=r.channel,n="live_stream"):n=r.videoId;var o=function(){new window.YT.Player(e,{videoId:n,host:"https://www.youtube-nocookie.com",playerVars:{enablejsapi:1,origin:window.location.origin,rel:0,disablekb:1,modestbranding:1,channel:t
}
,events:{onReady:function(e){var t=r.title;e.target.getIframe().title=t+" (video)"
}
,onStateChange:function(e){var t=e.data,n=e.target,o={"-1":"VideoUnstarted",0:"VideoEnded",1:"VideoPlaying",2:"VideoPaused",3:"VideoBuffering",5:"VideoCued"
}
;if(o[t]&&r.tracking&&r.tracking.hasTracking&&window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent){var i={category:r.tracking.category,action:o[t],label:{transport:"beacon",label:n.getVideoData&&n.getVideoData().title
}

}
;window.GOVUK.analytics.trackEvent(i.category,i.action,i.label)
}

}

}

}
)
}
;o=o.bind(this),c.playerApiReady?o.call():c.queuedInserts.push(o)
}
,c.prototype.campaignCookiesAllowed=function(){var e=window.GOVUK.getConsentCookie();return null===e||e.campaigns
}
,c.nextId=function(){return this.embedCount=this.embedCount||0,this.embedCount+=1,"youtube-"+this.embedCount
}
,c.insertApiScript=function(){if(!this.apiScriptInserted){var e=document.createElement("script");e.src="https://www.youtube.com/player_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.apiScriptInserted=!0
}

}
,c.parseLivestream=function(e){var t=e.match(/channel=([^&]*)/);if(t)return t[1]
}
,c.parseVideoId=function(e){var t;if(-1<e.indexOf("youtube.com")){var n={
}
;if(1===(t=e.split("?")).length)return;t=t[1].split("&");for(var o=0;o<t.length;o++){var i=t[o].split("=");n[i[0]]=i[1]
}
return n.v
}
if(-1<e.indexOf("youtu.be"))return(t=e.split("/")).pop()
}
,c.apiScriptInserted=!1,c.playerApiReady=!1,c.queuedInserts=[],window.onYouTubePlayerAPIReady=function(){c.playerApiReady=!0;for(var e=0;e<c.queuedInserts.length;e++)c.queuedInserts[e].call()
}
,e.GovspeakYoutubeLinkEnhancement=c
}
(),function(){"use strict";if(document.querySelectorAll&&document.addEventListener){var e,t,n=document.querySelectorAll(".js-header-toggle");for(e=0,t=n.length;e<t;e++)n[e].addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href")?document.getElementById(this.getAttribute("href").substr(1)):document.getElementById(this.getAttribute("data-search-toggle-for")),n=t.getAttribute("class")||"",o=this.getAttribute("class")||"",i=o.match("search-toggle");-1!==n.indexOf("js-visible")?t.setAttribute("class",n.replace(/(^|\s)js-visible(\s|$)/,"")):t.setAttribute("class",n+" js-visible"),-1!==o.indexOf("js-visible")?(this.setAttribute("class",o.replace(/(^|\s)js-visible(\s|$)/,"")),i&&(this.innerText="Show search")):(this.setAttribute("class",o+" js-visible"),i&&(this.innerText="Hide search")),this.setAttribute("aria-expanded","true"!==this.getAttribute("aria-expanded")),t.setAttribute("aria-hidden","false"===t.getAttribute("aria-hidden"))
}
)
}

}
.call(this),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.focus()
}
,e.InitialFocus=t
}
(window.GOVUK.Modules),function(e){"use strict";var o=e.jQuery,i=e.GOVUK||{
}
,t=function(e,t){this.$el=o(e),this.$extraLinks=this.$el.find("li:not("+t+")"),1<this.$extraLinks.length&&(this.addToggleLink(),this.hideExtraLinks())
}
;t.prototype={toggleText:function(){return 1<this.$extraLinks.length?"+"+this.$extraLinks.length+" others":"+"+this.$extraLinks.length+" other"
}
,addToggleLink:function(){this.$toggleLink=o('<a href="#">'+this.toggleText()+"</a>"),this.$toggleLink.click(o.proxy(this.toggleLinks,this)),this.$toggleLink.insertAfter(this.$el)
}
,toggleLinks:function(e){e.preventDefault(),this.$toggleLink.remove(),this.showExtraLinks()
}
,hideExtraLinks:function(){this.$extraLinks.addClass("visuallyhidden"),o(window).trigger("govuk.pageSizeChanged")
}
,showExtraLinks:function(){this.$extraLinks.removeClass("visuallyhidden"),o(window).trigger("govuk.pageSizeChanged")
}

}
,i.PrimaryList=t,i.primaryLinks={init:function(n){o(n).parent().each(function(e,t){new i.PrimaryList(t,n)
}
)
}

}
,e.GOVUK=i
}
(window),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.trackChange=this.trackChange.bind(this),this.$module.fireTrackingChange=this.fireTrackingChange.bind(this),this.$module.addEventListener("change",this.trackChange)
}
,t.prototype.trackChange=function(){var e=this.options[this.selectedIndex];e.hasAttribute("data-track-category")&&e.hasAttribute("data-track-action")&&this.fireTrackingChange(e)
}
,t.prototype.fireTrackingChange=function(e){var t={transport:"beacon"
}
,n=e.getAttribute("data-track-category"),o=e.getAttribute("data-track-action"),i=e.getAttribute("data-track-label"),r=e.getAttribute("data-track-value"),s=e.getAttribute("data-track-dimension"),a=e.getAttribute("data-track-dimension-index"),c=e.getAttribute("data-track-options");if(i&&(t.label=i),r&&(t.value=r),s&&a&&(t["dimension"+a]=s),c)for(var l in c=JSON.parse(c))t[l]=c[l];window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&window.GOVUK.analytics.trackEvent(n,o,t)
}
,e.TrackSelectChange=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.toggleTarget=this.$module.querySelector(".js-class-toggle"),this.$module.addFocusClass=this.addFocusClass.bind(this),this.$module.removeFocusClassFromEmptyInput=this.removeFocusClassFromEmptyInput.bind(this),this.inputIsEmpty()||this.addFocusClass(),this.toggleTarget.addEventListener("focus",this.$module.addFocusClass),this.toggleTarget.addEventListener("blur",this.$module.removeFocusClassFromEmptyInput)
}
,t.prototype.inputIsEmpty=function(){return""===this.toggleTarget.value
}
,t.prototype.addFocusClass=function(){this.toggleTarget.classList.add("focus")
}
,t.prototype.removeFocusClassFromEmptyInput=function(){this.inputIsEmpty()&&this.toggleTarget.classList.remove("focus")
}
,e.GemToggleInputClassOnFocus=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.toggleTrigger=this.$module.querySelector("[data-controls][data-expanded]"),this.$module.toggleTrigger&&(this.$module.toggleClass=this.$module.getAttribute("data-toggle-class")||"js-hidden",this.$module.isTrackable=this.$module.toggleTrigger.hasAttribute("data-track-category")&&this.$module.toggleTrigger.hasAttribute("data-track-action"),this.$module.isTrackable&&(this.$module.trackCategory=this.$module.toggleTrigger.getAttribute("data-track-category"),this.$module.trackAction=this.$module.toggleTrigger.getAttribute("data-track-action")),this.addAriaAttrs(),this.toggleOnClick())
}
,t.prototype.addAriaAttrs=function(){this.$module.toggleTrigger.setAttribute("role","button"),this.$module.toggleTrigger.setAttribute("aria-controls",this.$module.toggleTrigger.getAttribute("data-controls")),this.$module.toggleTrigger.setAttribute("aria-expanded",this.$module.toggleTrigger.getAttribute("data-expanded")),this.$module.targets=this.getTargetElements();for(var e=0;e<this.$module.targets.length;e++)this.$module.targets[e].setAttribute("aria-live","polite"),this.$module.targets[e].setAttribute("role","region")
}
,t.prototype.getTargetElements=function(){var e="#"+this.$module.toggleTrigger.getAttribute("aria-controls").split(" ").join(", #");return this.$module.querySelectorAll(e)
}
,t.prototype.toggleOnClick=function(){var i=this;this.$module.toggleTrigger.addEventListener("click",function(e){if(e.preventDefault(),"true"===this.getAttribute("aria-expanded")){this.setAttribute("aria-expanded",!1);for(var t=0;t<i.$module.targets.length;t++)i.$module.targets[t].classList.add(i.$module.toggleClass)
}
else{this.setAttribute("aria-expanded",!0);for(var n=0;n<i.$module.targets.length;n++)i.$module.targets[n].classList.remove(i.$module.toggleClass)
}
var o=this.getAttribute("data-toggled-text");"string"==typeof o&&(this.setAttribute("data-toggled-text",this.innerText),this.innerText=o),window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&i.$module.isTrackable&&i.track()
}
)
}
,t.prototype.track=function(){var e={label:this.$module.toggleTrigger.getAttribute("data-toggled-text")||this.$module.toggleTrigger.innerText
}
;window.GOVUK.analytics.trackEvent(this.$module.trackCategory,this.$module.trackAction,e)
}
,e.GemToggle=t
}
(window.GOVUK.Modules),this.Element&&function(e){e.matches=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.msMatchesSelector||function(e){for(var t=this,n=(t.parentNode||t.document).querySelectorAll(e),o=-1;n[++o]&&n[o]!=t;);return!!n[o]
}

}
(Element.prototype),this.Element&&function(e){e.closest=e.closest||function(e){for(var t=this;t.matches&&!t.matches(e);)t=t.parentNode;return t.matches?t:null
}

}
(Element.prototype),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.handleClick=this.handleClick.bind(this);var t=this;this.$module.addEventListener("click",function(e){t.$module.handleClick(e.target)
}
)
}
,t.prototype.handleClick=function(e){var t={transport:"beacon"
}
;if(e.hasAttribute("data-track-category")||e.hasAttribute("data-track-action")||(e=e.closest("[data-track-category][data-track-action]")),e){var n=e.getAttribute("data-track-category"),o=e.getAttribute("data-track-action"),i=e.getAttribute("data-track-label"),r=e.getAttribute("data-track-value"),s=e.getAttribute("data-track-dimension"),a=e.getAttribute("data-track-dimension-index"),c=e.getAttribute("data-track-options");if(i&&(t.label=i),r&&(t.value=r),s&&a&&(t["dimension"+a]=s),c)for(var l in c=JSON.parse(c))t[l]=c[l];window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&window.GOVUK.analytics.trackEvent(n,o,t)
}

}
,e.GemTrackClick=t
}
(window.GOVUK.Modules),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,o=this.length;n<o;n++)if(this[n]===e)return n;return-1
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.moduleId=this.$module.getAttribute("id"),this.sections=this.$module.querySelectorAll(".gem-c-accordion__section"),this.openAllButton="",this.browserSupportsSessionStorage=n.checkForSessionStorage(),this.controlsClass="gem-c-accordion__controls",this.openAllClass="gem-c-accordion__open-all",this.openAllTextClass="gem-c-accordion__open-all-text",this.sectionHeaderClass="gem-c-accordion__section-header",this.sectionHeadingClass="gem-c-accordion__section-heading",this.sectionSummaryClass="gem-c-accordion__section-summary",this.sectionButtonClass="gem-c-accordion__section-button",this.sectionExpandedClass="gem-c-accordion__section--expanded",this.sectionInnerContent="gem-c-accordion__section-content",this.toggleLinkClass="js-toggle-link",this.sectionShowHideIconClass="gem-c-accordion__toggle-link",this.sectionShowHideTextClass="gem-c-accordion__toggle-text",this.upChevonIconClass="gem-c-accordion-nav__chevron",this.downChevonIconClass="gem-c-accordion-nav__chevron--down",this.$module.classList.add("gem-c-accordion--active"),this.initControls(),this.initSectionHeaders();var t=this.checkIfAllSectionsOpen();this.updateOpenAllButton(t)
}
,t.prototype.initControls=function(){this.openAllButton=document.createElement("button"),this.openAllButton.setAttribute("class",this.openAllClass),this.openAllButton.setAttribute("aria-expanded","false");var e=document.createElement("span");e.classList.add(this.upChevonIconClass),this.openAllButton.appendChild(e);var t=document.createElement("div");t.setAttribute("class",this.controlsClass),t.appendChild(this.openAllButton),this.$module.insertBefore(t,this.$module.firstChild);var n=document.createElement("span");n.classList.add(this.openAllTextClass),this.openAllButton.insertBefore(n,this.openAllButton.childNodes[0]||null),this.openAllButton.addEventListener("click",this.onOpenOrCloseAllToggle.bind(this))
}
,t.prototype.initSectionHeaders=function(){nodeListForEach(this.sections,function(e,t){var n=e.querySelector("."+this.sectionHeaderClass);this.initHeaderAttributes(n,t),this.setExpanded(this.isExpanded(e
),e),n.addEventListener("click",this.onSectionToggle.bind(this,e)),this.setInitialState(e)
}
.bind(this))
}
,t.prototype.initHeaderAttributes=function(e,t){var n=e.querySelector("."+this.sectionButtonClass),o=e.querySelector("."+this.sectionHeadingClass),i=e.querySelector("."+this.sectionSummaryClass),r=document.createElement("button");r.setAttribute("id",this.moduleId+"-heading-"+(t+1)),r.setAttribute("aria-controls",this.moduleId+"-content-"+(t+1));var s=document.createElement("span");s.classList.add(this.sectionShowHideIconClass,this.toggleLinkClass);var a=document.createElement("span");a.classList.add("govuk-visually-hidden"),a.innerHTML=", ";var c=document.createElement("span");c.classList.add("govuk-visually-hidden"),c.innerHTML=" this section";var l=document.createElement("span"),u=document.createElement("span");u.classList.add(this.upChevonIconClass),s.appendChild(u),l.classList.add(this.sectionShowHideTextClass),s.insertBefore(l,s.childNodes[0]||null);for(var d=0;d<n.attributes.length;d++){var p=n.attributes.item(d);r.setAttribute(p.nodeName,p.nodeValue)
}
r.innerHTML=n.innerHTML,o.removeChild(n),o.appendChild(r),r.appendChild(a),null!=i&&(r.setAttribute("aria-describedby",this.moduleId+"-summary-"+(t+1)),r.appendChild(i)),r.appendChild(s),r.appendChild(c)
}
,t.prototype.onSectionToggle=function(e){var t=this.isExpanded(e);this.setExpanded(!t,e),this.storeState(e)
}
,t.prototype.onOpenOrCloseAllToggle=function(){var t=this,e=this.sections,n=!this.checkIfAllSectionsOpen();nodeListForEach(e,function(e){t.setExpanded(n,e),t.storeState(e)
}
),t.updateOpenAllButton(n)
}
,t.prototype.setExpanded=function(e,t){var n=t.querySelector("."+this.upChevonIconClass),o=t.querySelector("."+this.sectionShowHideTextClass),i=t.querySelector("."+this.sectionButtonClass),r=e?"Hide":"Show";o.innerHTML=r,i.setAttribute("aria-expanded",e),i.classList.add(this.toggleLinkClass),e?(t.classList.add(this.sectionExpandedClass),n.classList.remove(this.downChevonIconClass)):(t.classList.remove(this.sectionExpandedClass),n.classList.add(this.downChevonIconClass));var s=this.checkIfAllSectionsOpen();this.updateOpenAllButton(s)
}
,t.prototype.isExpanded=function(e){return e.classList.contains(this.sectionExpandedClass)
}
,t.prototype.checkIfAllSectionsOpen=function(){return this.sections.length===this.$module.querySelectorAll("."+this.sectionExpandedClass).length
}
,t.prototype.updateOpenAllButton=function(e){var t=this.openAllButton.querySelector("."+this.upChevonIconClass),n=this.openAllButton.querySelector("."+this.openAllTextClass),o=e?"Hide all sections":"Show all sections";this.openAllButton.setAttribute("aria-expanded",e),n.innerHTML=o,e?t.classList.remove(this.downChevonIconClass):t.classList.add(this.downChevonIconClass)
}
;var n={checkForSessionStorage:function(){var e,t="this is the test string";try{return window.sessionStorage.setItem(t,t),e=window.sessionStorage.getItem(t)===t.toString(),window.sessionStorage.removeItem(t),e
}
catch(n){"undefined"!=typeof console&&"undefined"!=typeof console.log||console.log("Notice: sessionStorage not available.")
}

}

}
;t.prototype.storeState=function(e){if(this.browserSupportsSessionStorage){var t=e.querySelector("."+this.sectionButtonClass);if(t){var n=t.getAttribute("aria-controls"),o=t.getAttribute("aria-expanded");void 0!==n||"undefined"!=typeof console&&"undefined"!=typeof console.log||console.error(new Error("No aria controls present in accordion section heading.")),void 0!==o||"undefined"!=typeof console&&"undefined"!=typeof console.log||console.error(new Error("No aria expanded present in accordion section heading.")),n&&o&&window.sessionStorage.setItem(n,o)
}

}

}
,t.prototype.setInitialState=function(e){if(this.browserSupportsSessionStorage){var t=e.querySelector("."+this.sectionButtonClass);if(t){var n=t.getAttribute("aria-controls"),o=n?window.sessionStorage.getItem(n):null;null!==o&&this.setExpanded("true"===o,e)
}

}

}
,e.GemAccordion=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function e(e){this.$module=e,this.debounceFormSubmitTimer=null
}
(function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
);var n=32,t=1;return e.prototype.handleKeyDown=function(e){var t=e.target;"button"===t.getAttribute("role")&&e.keyCode===n&&(e.preventDefault(),t.click())
}
,e.prototype.debounce=function(e){if("true"===e.target.getAttribute("data-prevent-double-click"))return this.debounceFormSubmitTimer?(e.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout(function(){this.debounceFormSubmitTimer=null
}
.bind(this),1e3*t))
}
,e.prototype.init=function(){this.$module.addEventListener("keydown",this.handleKeyDown),this.$module.addEventListener("click",this.debounce)
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.Button=window.GOVUKFrontend,function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function e(e){this.$module=e,this.$textarea=e.querySelector(".govuk-js-character-count"),this.$textarea&&(this.$countMessage=e.querySelector('[id="'+this.$textarea.id+'-info"]'))
}
return function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),e.prototype.defaults={characterCountAttribute:"data-maxlength",wordCountAttribute:"data-maxwords"
}
,e.prototype.init=function(){var e=this.$module,t=this.$textarea,n=this.$countMessage;if(t&&n){t.insertAdjacentElement("afterend",n),this.options=this.getDataset(e);var o=this.defaults.characterCountAttribute;this.options.maxwords&&(o=this.defaults.wordCountAttribute),this.maxLength=e.getAttribute(o),this.maxLength&&(e.removeAttribute("maxlength"),"onpageshow"in window?window.addEventListener("pageshow",this.sync.bind(this)):window.addEventListener("DOMContentLoaded",this.sync.bind(this)),this.sync())
}

}
,e.prototype.sync=function(){this.bindChangeEvents(),this.updateCountMessage()
}
,e.prototype.getDataset=function(e){var t={
}
,n=e.attributes;if(n)for(var o=0;o<n.length;o++){var i=n[o],r=i.name.match(/^data-(.+)/);r&&(t[r[1]]=i.value)
}
return t
}
,e.prototype.count=function(e){var t;this.options.maxwords?t=(e.match(/\S+/g)||[]).length:t=e.length;return t
}
,e.prototype.bindChangeEvents=function(){var e=this.$textarea;e.addEventListener("keyup",this.checkIfValueChanged.bind(this)),e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this))
}
,e.prototype.checkIfValueChanged=function(){this.$textarea.oldValue||(this.$textarea.oldValue=""),this.$textarea.value!==this.$textarea.oldValue&&(this.$textarea.oldValue=this.$textarea.value,this.updateCountMessage())
}
,e.prototype.updateCountMessage=function(){var e=this.$textarea,t=this.options,n=this.$countMessage,o=this.count(e.value),i=this.maxLength,r=i-o;o<i*(t.threshold?t.threshold:0)/100?(n.classList.add("govuk-character-count__message--disabled"),n.setAttribute("aria-hidden",!0)):(n.classList.remove("govuk-character-count__message--disabled"),n.removeAttribute("aria-hidden")),r<0?(e.classList.add("govuk-textarea--error"),n.classList.remove("govuk-hint"),n.classList.add("govuk-error-message")):(e.classList.remove("govuk-textarea--error"),n.classList.remove("govuk-error-message"),n.classList.add("govuk-hint"));var s="remaining",a="character",c=r;t.maxwords&&(a="word"),a+=-1===r||1===r?"":"s",s=r<0?"too many":"remaining",c=Math.abs(r),n.innerHTML="You have "+c+" "+a+" "+s
}
,e.prototype.handleFocus=function(){this.valueChecker=setInterval(this.checkIfValueChanged.bind(this),1e3)
}
,e.prototype.handleBlur=function(){clearInterval(this.valueChecker)
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.CharacterCount=window.GOVUKFrontend,function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):t()
}
(0,function(){"use strict";(function(){"document"in this&&"matches"in document.documentElement||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function i(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return!!n[o]
}
)
}
).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"document"in this&&"closest"in document.documentElement||(Element.prototype.closest=function n(e){for(var t=this;t;){if(t.matches(e))return t;t="SVGElement"in window&&t instanceof SVGElement?t.parentNode:t.parentElement
}
return null
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
)
}
),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function e(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)
}
function t(e){this.$module=e,this.$inputs=e.querySelectorAll('input[type="checkbox"]')
}
return function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call(
"object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),t.prototype.init=function(){var n=this.$module;e(this.$inputs,function(e){var t=e.getAttribute("data-aria-controls");t&&n.querySelector("#"+t)&&(e.setAttribute("aria-controls",t),e.removeAttribute("data-aria-controls"))
}
),"onpageshow"in window?window.addEventListener("pageshow",this.syncAllConditionalReveals.bind(this)):window.addEventListener("DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),n.addEventListener("click",this.handleClick.bind(this))
}
,t.prototype.syncAllConditionalReveals=function(){e(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))
}
,t.prototype.syncConditionalRevealWithInputState=function(e){var t=this.$module.querySelector("#"+e.getAttribute("aria-controls"));if(t&&t.classList.contains("govuk-checkboxes__conditional")){var n=e.checked;e.setAttribute("aria-expanded",n),t.classList.toggle("govuk-checkboxes__conditional--hidden",!n)
}

}
,t.prototype.handleClick=function(e){var t=e.target,n="checkbox"===t.getAttribute("type"),o=t.getAttribute("aria-controls");n&&o&&this.syncConditionalRevealWithInputState(t)
}
,t
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.Checkboxes=window.GOVUKFrontend,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$checkboxes=this.$module.querySelectorAll("input[type=checkbox]"),this.$nestedCheckboxes=this.$module.querySelectorAll("[data-nested=true] input[type=checkbox]"),this.$exclusiveCheckboxes=this.$module.querySelectorAll("[data-exclusive=true] input[type=checkbox]"),this.applyAriaControlsAttributes(this.$module);for(var t=0;t<this.$checkboxes.length;t++)this.$checkboxes[t].addEventListener("change",this.handleCheckboxChange);for(t=0;t<this.$nestedCheckboxes.length;t++)this.$nestedCheckboxes[t].addEventListener("change",this.handleNestedCheckboxChange.bind(this));for(t=0;t<this.$exclusiveCheckboxes.length;t++)this.$exclusiveCheckboxes[t].addEventListener("change",this.handleExclusiveCheckboxChange)
}
,t.prototype.handleCheckboxChange=function(e){if(window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&(!e.detail||e.detail&&!0!==e.detail.suppressAnalytics)){var t=e.target,n=t.getAttribute("data-track-category");if(n){var o=t.getAttribute("data-uncheck-track-category");!t.checked&&o&&(n=o);var i=t.getAttribute("data-track-action"),r=t.getAttribute("data-track-options");(r=r?JSON.parse(r):{
}
).value=t.getAttribute("data-track-value"),r.label=t.getAttribute("data-track-label"),window.GOVUK.analytics.trackEvent(n,i,r)
}

}

}
,t.prototype.handleNestedCheckboxChange=function(e){var t=e.target,n=t.closest(".govuk-checkboxes--nested"),o=this.$module.querySelector(".govuk-checkboxes--nested[data-parent="+t.id+"]");o?this.toggleNestedCheckboxes(o,t):n&&this.toggleParentCheckbox(n,t)
}
,t.prototype.toggleNestedCheckboxes=function(e,t){var n=e.querySelectorAll("input[type=checkbox]");if(t.checked)for(var o=0;o<n.length;o++)n[o].checked=!0;else for(o=0;o<n.length;o++)n[o].checked=!1
}
,t.prototype.toggleParentCheckbox=function(e,t){var n=e.querySelectorAll("input"),o=e.querySelectorAll("input:checked"),i=e.getAttribute("data-parent"),r=document.getElementById(i);t.checked&&n.length===o.length?r.checked=!0:r.checked=!1
}
,t.prototype.handleExclusiveCheckboxChange=function(e){var t=e.target,n=t.closest(".govuk-checkboxes"),o=n.querySelector("input[type=checkbox][data-exclusive]"),i=n.querySelectorAll("input[type=checkbox]:not([data-exclusive])");if("true"===t.dataset.exclusive&&!0===t.checked)for(var r=0;r<i.length;r++)i[r].checked=!1;else"true"!==t.dataset.exclusive&&!0===t.checked&&o&&(o.checked=!1)
}
,t.prototype.applyAriaControlsAttributes=function(e){for(var t=e.querySelectorAll("[data-controls]"),n=0;n<t.length;n++)t[n].setAttribute("aria-controls",t[n].getAttribute("data-controls"))
}
,e.GovukCheckboxes=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$guidance=this.$module.querySelector(".gem-c-contextual-guidance__wrapper"),this.$inputId=this.$guidance.getAttribute("for"),this.$input=this.$module.querySelector("#"+this.$inputId),this.$input&&this.$input.addEventListener("focus",this.handleFocus.bind(this))
}
,t.prototype.handleFocus=function(e){this.hideAllGuidance(),e.target.dataset.contextualGuidanceHideOnly||(this.$guidance.style.display="block")
}
,t.prototype.hideAllGuidance=function(){for(var e=document.querySelectorAll(".gem-c-contextual-guidance__wrapper"),t=0;t<e.length;t++)e[t].style.display="none"
}
,e.ContextualGuidance=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.hideCookieMessage=this.hideCookieMessage.bind(this),this.$module.showConfirmationMessage=this.showConfirmationMessage.bind(this),this.$module.setCookieConsent=this.setCookieConsent.bind(this),this.$module.cookieBanner=document.querySelector(".gem-c-cookie-banner"),this.$module.cookieBannerConfirmationMessage=this.$module.querySelector(".gem-c-cookie-banner__confirmation"),this.setupCookieMessage()
}
,t.prototype.setupCookieMessage=function(){if(this.$hideLinks=this.$module.querySelectorAll("button[data-hide-cookie-banner]"),this.$hideLinks&&this.$hideLinks.length)for(var e=0;e<this.$hideLinks.length;e++)this.$hideLinks[e].addEventListener("click",this.$module.hideCookieMessage);this.$acceptCookiesLink=this.$module.querySelector("button[data-accept-cookies]"),this.$acceptCookiesLink&&this.$acceptCookiesLink.addEventListener("click",this.$module.setCookieConsent),this.showCookieMessage()
}
,t.prototype.showCookieMessage=function(){this.isInCookiesPage()||this.isInIframe()?this.$module.style.display="none":this.$module&&"true"!==window.GOVUK.cookie("cookies_preferences_set")?(this.$module.style.display="block",window.GOVUK.cookie("cookies_policy")||window.GOVUK.setDefaultConsentCookie(),window.GOVUK.deleteUnconsentedCookies()):this.$module.style.display="none"
}
,t.prototype.hideCookieMessage=function(e){this.$module&&(this.$module.style.display="none",window.GOVUK.cookie("cookies_preferences_set","true",{days:365
}
)),e.target&&e.preventDefault()
}
,t.prototype.setCookieConsent=function(){window.GOVUK.approveAllCookieTypes(),this.$module.showConfirmationMessage(),this.$module.cookieBannerConfirmationMessage.focus(),window.GOVUK.cookie("cookies_preferences_set","true",{days:365
}
),window.GOVUK.analyticsInit&&window.GOVUK.analyticsInit(),window.GOVUK.globalBarInit&&window.GOVUK.globalBarInit.init()
}
,t.prototype.showConfirmationMessage=function(){this.$cookieBannerMainContent=document.querySelector(".gem-c-cookie-banner__wrapper"),this.$cookieBannerMainContent.style.display="none",this.$module.cookieBannerConfirmationMessage.style.display="block"
}
,t.prototype.isInCookiesPage=function(){return"/help/cookies"===window.location.pathname
}
,t.prototype.isInIframe=function(){return window.parent&&window.location!==window.parent.location
}
,e.CookieBanner=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0];var t=this.$module.querySelector(".gem-c-input"),n=this.$module.querySelector(".gem-c-button");t.addEventListener("click",function(){t.select()
}
),n.addEventListener("click",function(e){e.preventDefault(),t.select(),document.execCommand("copy")
}
)
}
,e.CopyToClipboard=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function o(){var n=(new Date).getTime();return"undefined"!=typeof window.performance&&"function"==typeof window.performance.now&&(n+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)
}
)
}
function e(e){this.$module=e
}
(function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
);var i=13,r=32;return e.prototype.init=function(){this.$module&&("boolean"==typeof this.$module.open||this.polyfillDetails())
}
,e.prototype.polyfillDetails=function(){var e=this.$module,t=this.$summary=e.getElementsByTagName("summary").item(0),n=this.$content=e.getElementsByTagName("div").item(0);t&&n&&(n.id||(n.id="details-content-"+o()),e.setAttribute("role","group"),t.setAttribute("role","button"),t.setAttribute("aria-controls",n.id),!(t.tabIndex=0)===(null!==e.getAttribute("open"))?(t.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false")):(t.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"),n.style.display="none"),this.polyfillHandleInputs(t,this.polyfillSetAttributes.bind(this)))
}
,e.prototype.polyfillSetAttributes=function(){var e=this.$module,t=this.$summary,n=this.$content,o="true"===t.getAttribute("aria-expanded"),i="true"===n.getAttribute("aria-hidden");return t.setAttribute("aria-expanded",o?"false":"true"),n.setAttribute("aria-hidden",i?"false":"true"),n.style.display=o?"none":"",null!==e.getAttribute("open")?e.removeAttribute("open"):e.setAttribute("open","open"),!0
}
,e.prototype.polyfillHandleInputs=function(e,n){e.addEventListener("keypress",function(e){var t=e.target;e.keyCode!==i&&e.keyCode!==r||"summary"===t.nodeName.toLowerCase()&&(e.preventDefault(),t.click?t.click():n(e))
}
),e.addEventListener("keyup",function(e){var t=e.target;e.keyCode===r&&"summary"===t.nodeName.toLowerCase()&&e.preventDefault()
}
),e.addEventListener("click",n)
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){if(this.$module=e[0],this.$module.getAttribute("data-track-label")){(new window.GOVUK.Modules.TrackClick).start(e)
}
else{var t=this.$module.querySelector("[data-details-track-click]");t&&t.addEventListener("click",function(){this.trackDefault(this.$module)
}
.bind(this))
}

}
,t.prototype.trackDefault=function(e){if(window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent){var t=null==e.getAttribute("open")?"open":"closed",n=e.getAttribute("data-track-category"),o=e.getAttribute("data-track-action"),i=e.getAttribute("data-track-options");i&&(i=JSON.parse(i)),"object"==typeof i&&null!==i||(i={
}
),i.label=t,o&&n&&window.GOVUK.analytics.trackEvent(n,o,i)
}

}
,e.GovukDetails=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function e(e){this.$module=e
}
return function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(
e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"document"in this&&"matches"in document.documentElement||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function i(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return!!n[o]
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"document"in this&&"closest"in document.documentElement||(Element.prototype.closest=function n(e){for(var t=this;t;){if(t.matches(e))return t;t="SVGElement"in window&&t instanceof SVGElement?t.parentNode:t.parentElement
}
return null
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),e.prototype.init=function(){var e=this.$module;e&&(e.focus(),e.addEventListener("click",this.handleClick.bind(this)))
}
,e.prototype.handleClick=function(e){var t=e.target;this.focusTarget(t)&&e.preventDefault()
}
,e.prototype.focusTarget=function(e){if("A"!==e.tagName||!1===e.href)return!1;var t=this.getFragmentFromUrl(e.href),n=document.getElementById(t);if(!n)return!1;var o=this.getAssociatedLegendOrLabel(n);return!!o&&(o.scrollIntoView(),n.focus({preventScroll:!0
}
),!0)
}
,e.prototype.getFragmentFromUrl=function(e){return-1!==e.indexOf("#")&&e.split("#").pop()
}
,e.prototype.getAssociatedLegendOrLabel=function(e){var t=e.closest("fieldset");if(t){var n=t.getElementsByTagName("legend");if(n.length){var o=n[0];if("checkbox"===e.type||"radio"===e.type)return o;var i=o.getBoundingClientRect().top,r=e.getBoundingClientRect();if(r.height&&window.innerHeight)if(r.top+r.height-i<window.innerHeight/2)return o
}

}
return document.querySelector("label[for='"+e.getAttribute("id")+"']")||e.closest("label")
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.ErrorSummary=window.GOVUKFrontend,window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(){"use strict";window.GOVUK.Modules.Feedback=function(){this.start=function(n){function o(e){e.find('input[type="submit"]').prop("disabled",!0)
}
function i(e){e.find('input[type="submit"]').removeAttr("disabled")
}
function r(){f.$forms.attr("aria-hidden",!0),f.$pageIsNotUsefulButton.attr("aria-expanded",!1),f.$somethingIsWrongButton.attr("aria-expanded",!1)
}
function e(){f.$somethingIsWrongForm.append('<input type="hidden" name="javascript_enabled" value="true"/>'),f.$somethingIsWrongForm.append($('<input type="hidden" name="referrer">').val(document.referrer||"unknown")),f.somethingIsWrongForm.invalidInfoError=["<h2>","  Sorry, we\u2019re unable to send your message as you haven\u2019t given us any information.","</h2>","<p>Please tell us what you were doing or what went wrong</p>"].join("")
}
function t(e){var t=window.location.pathname.replace(/[^\s=?&]+(?:@|%40)[^\s=?&]+/,"[email]"),n=encodeURI(t);f.surveyForm.invalidInfoError=["<h2>","  Sorry, we\u2019re unable to send your message as you haven\u2019t given us a valid email address. ","</h2>","<p>Enter an email address in the correct format, like name@example.com</p>"].join(""),0===document.querySelectorAll('[name="email_survey_signup[ga_client_id]"]').length&&f.$surveyForm.append($('<input name="email_survey_signup[ga_client_id]" type="hidden">').val(e||"0")),0===document.querySelectorAll(".gem-c-feedback__email-link#take-survey").length&&f.$surveyWrapper.append('<a href="https://www.smartsurvey.co.uk/s/gov-uk-banner/?c='+n+"&amp;gcl="+e+'" class="gem-c-feedback__email-link govuk-link" id="take-survey" target="_blank" rel="noopener noreferrer">Don\u2019t have an email address?</a>')
}
function s(e){e.attr("aria-expanded",!0),$("#"+e.attr("aria-controls")).attr("aria-hidden",!1)
}
function a(e){f.activeForm=f.element.querySelector("#"+e),f.$activeForm=$(f.activeForm),f.$activeForm.toggleClass(h),f.$prompt.toggleClass(h),!f.$activeForm.hasClass(h)?f.$activeForm.find(".gem-c-input").first().focus():f.$activeForm=!1
}
function c(e){return{category:e.data("track-category"),action:e.data("track-action")
}

}
function l(e){window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&window.GOVUK.analytics.trackEvent(e.category,e.action)
}
function u(e){var t=["<h2>","  Sorry, we\u2019re unable to receive your message right now. ","</h2>","<p>If the problem persists, we have other ways for you to provide",' feedback on the <a href="/contact/govuk">contact page</a>.</p>'].join("");"undefined"!=typeof e.responseJSON?"email survey sign up failure"===(e="undefined"==typeof e.responseJSON.message?t:e.responseJSON.message)&&(e=t):e=422===e.status&&f.activeForm.invalidInfoError||t,f.$activeForm.find(".js-errors").html(e).removeClass(h).focus()
}
function d(){f.$promptQuestions.addClass(h),f.$promptSuccessMessage.removeClass(h).focus()
}
function p(){f.$prompt.removeClass(h),f.$prompt.focus()
}
this.element=n[0],this.somethingIsWrongForm=this.element.querySelector("#something-is-wrong"),this.surveyForm=this.element.querySelector("#page-is-not-useful"),this.$prompt=n.find(".js-prompt"),this.$fields=n.find(".gem-c-feedback__form-field"),this.$forms=n.find(".js-feedback-form"),this.$toggleForms=n.find(".js-toggle-form"),this.$closeForms=n.find(".js-close-form"),this.activeForm=!1,this.$activeForm=!1,this.$pageIsUsefulButton=n.find(".js-page-is-useful"),this.$pageIsNotUsefulButton=n.find(".js-page-is-not-useful"),this.$somethingIsWrongButton=n.find(".js-something-is-wrong"),this.$promptQuestions=n.find(".js-prompt-questions"),this.$promptSuccessMessage=n.find(".js-prompt-success"),this.$somethingIsWrongForm=$(this.somethingIsWrongForm),this.$surveyForm=$(this.surveyForm),this.$surveyWrapper=n.find("#survey-wrapper");var f=this,h="js-hidden";r(),e(),this.$toggleForms.on("click",function(e){e.preventDefault(),a($(e.target).attr("aria-controls")),l(c($(this))),s($(this))
}
),this.$closeForms.on("click",function(e){e.preventDefault(),a($(e.target).attr("aria-controls")),l(c($(this))),r(),p();var t=".js-"+$(e.target).attr("aria-controls");n.find(t).focus()
}
),this.$pageIsUsefulButton.on("click",function(e){e.preventDefault(),l(c(f.$pageIsUsefulButton)),d(),p()
}
),this.$pageIsNotUsefulButton.on("click",function(){var e="111111111.1111111111";t(null===window.GOVUK.cookie("_ga")||""===window.GOVUK.cookie("_ga")?e:window.GOVUK.cookie("_ga").split(".").slice(-2).join("."))
}
),n.find("form").on("submit",function(e){e.preventDefault();var t=$(this);$.ajax({type:"POST",url:t.attr("action"),dataType:"json",data:t.serialize(),beforeSend:o(t),timeout:6e3
}
).done(function(e){l(c(t)),d(e.message),p(),r(),f.$activeForm.toggleClass(h)
}
).fail(function(e){u(e),i(t)
}
)
}
)
}

}

}
(),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],-1===this.$module.className.indexOf("disable-youtube")&&this.embedYoutube(),this.createBarcharts()
}
,t.prototype.embedYoutube=function(){new window.GOVUK.GovspeakYoutubeLinkEnhancement(this.$module).init()
}
,t.prototype.createBarcharts=function(){new window.GOVUK.GovspeakBarchartEnhancement(this.$module).init()
}
,e.Govspeak=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function e(e){this.$module=e,this.$menuButton=e&&e.querySelector(".govuk-js-header-toggle"),this.$menu=this.$menuButton&&e.querySelector("#"+this.$menuButton.getAttribute("aria-controls"))
}
return function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),e.prototype.init=function(){this.$module&&this.$menuButton&&this.$menu&&(this.syncState(this.$menu.classList.contains("govuk-header__navigation--open")),this.$menuButton.addEventListener("click",this.handleMenuButtonClick.bind(this)))
}
,e.prototype.syncState=function(e){this.$menuButton.classList.toggle("govuk-header__menu-button--open",e),this.$menuButton.setAttribute("aria-expanded",e)
}
,e.prototype.handleMenuButtonClick=function(){var e=this.$menu.classList.toggle("govuk-header__navigation--open");this.syncState(e)
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.Header=window.GOVUKFrontend,window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$dialogBox=this.$module.querySelector(".gem-c-modal-dialogue__box"),this.$closeButton=this.$module.querySelector(".gem-c-modal-dialogue__close-button"),this.$html=document.querySelector("html"),this.$body=document.querySelector("body"),this.$module.resize=this.handleResize.bind(this),this.$module.open=this.handleOpen.bind(this),this.$module.close=this.handleClose.bind(this),this.$module.focusDialog=this.handleFocusDialog.bind(this),this.$module.boundKeyDown=this.handleKeyDown.bind(this);var t=document.querySelector('[data-toggle="modal"][data-target="'+this.$module.id+'"]');t&&t.addEventListener("click",this.$module.open),this.$closeButton&&this.$closeButton.addEventListener("click",this.$module.close)
}
,t.prototype.handleResize=function(e){"narrow"===e&&this.$dialogBox.classList.remove("gem-c-modal-dialogue__box--wide"),"wide"===e&&this.$dialogBox.classList.add("gem-c-modal-dialogue__box--wide")
}
,t.prototype.handleOpen=function(e){e&&e.preventDefault(),this.$html.classList.add("gem-o-template--modal"),this.$body.classList.add("gem-o-template__body--modal"),this.$body.classList.add("gem-o-template__body--blur"),this.$focusedElementBeforeOpen=document.activeElement,this.$module.style.display="block",this.$dialogBox.focus(),document.addEventListener("keydown",this.$module.boundKeyDown,!0)
}
,t.prototype.handleClose=function(e){e&&e.preventDefault(),this.$html.classList.remove("gem-o-template--modal"),this.$body.classList.remove("gem-o-template__body--modal"),this.$body.classList.remove("gem-o-template__body--blur"),this.$module.style.display="none",this.$focusedElementBeforeOpen.focus(),document.removeEventListener("keydown",this.$module.boundKeyDown,!0)
}
,t.prototype.handleFocusDialog=function(){this.$dialogBox.focus()
}
,t.prototype.handleKeyDown=function(e){var t=9,n=27;switch(e.keyCode){case t:e.shiftKey?document.activeElement===this.$dialogBox&&(e.preventDefault(),this.$closeButton.focus()):document.activeElement===this.$closeButton&&(e.preventDefault(),this.$dialogBox.focus());break;case n:this.$module.close()
}

}
,e.ModalDialogue=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.addEventListener("click",function(){window.print()
}
)
}
,e.PrintLink=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function t(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)
}
function e(e){this.$module=e,this.$inputs=e.querySelectorAll('input[type="radio"]')
}
return function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error(
"In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),e.prototype.init=function(){var n=this.$module;t(this.$inputs,function(e){var t=e.getAttribute("data-aria-controls");t&&n.querySelector("#"+t)&&(e.setAttribute("aria-controls",t),e.removeAttribute("data-aria-controls"))
}
),"onpageshow"in window?window.addEventListener("pageshow",this.syncAllConditionalReveals.bind(this)):window.addEventListener("DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),n.addEventListener("click",this.handleClick.bind(this))
}
,e.prototype.syncAllConditionalReveals=function(){t(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))
}
,e.prototype.syncConditionalRevealWithInputState=function(e){var t=document.querySelector("#"+e.getAttribute("aria-controls"));if(t&&t.classList.contains("govuk-radios__conditional")){var n=e.checked;e.setAttribute("aria-expanded",n),t.classList.toggle("govuk-radios__conditional--hidden",!n)
}

}
,e.prototype.handleClick=function(e){var n=e.target;"radio"===n.type&&t(document.querySelectorAll('input[type="radio"][aria-controls]'),function(e){var t=e.form===n.form;e.name===n.name&&t&&this.syncConditionalRevealWithInputState(e)
}
.bind(this))
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.Radios=window.GOVUKFrontend,window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.input=this.$module.querySelector(".gem-c-input"),this.$module.togglePassword=this.togglePassword.bind(this),this.$module.revertToPasswordOnFormSubmit=this.revertToPasswordOnFormSubmit.bind(this),this.input.classList.add("gem-c-input--with-password"),this.showPasswordText=this.$module.getAttribute("data-show"),this.hidePasswordText=this.$module.getAttribute("data-hide"),this.shownPassword=this.$module.getAttribute("data-announce-show"),this.hiddenPassword=this.$module.getAttribute("data-announce-hide"),this.wrapper=document.createElement("div"),this.wrapper.classList.add("gem-c-show-password__input-wrapper"),this.input.parentNode.insertBefore(this.wrapper,this.input),this.wrapper.appendChild(this.input),this.showHide=document.createElement("button"),this.showHide.className="gem-c-show-password__toggle",this.showHide.setAttribute("aria-controls",this.input.getAttribute("id")),this.showHide.setAttribute("type","button"),this.showHide.innerHTML=this.showPasswordText,this.wrapper.insertBefore(this.showHide,this.input.nextSibling),this.statusText=document.createElement("span"),this.statusText.classList.add("govuk-visually-hidden"),this.statusText.innerHTML=this.hiddenPassword,this.statusText.setAttribute("aria-live","polite"),this.wrapper.insertBefore(this.statusText,this.showHide.nextSibling),this.showHide.addEventListener("click",this.$module.togglePassword),this.parentForm=this.input.form;var t=this.$module.getAttribute("data-disable-form-submit-check");this.parentForm&&!t&&this.parentForm.addEventListener("submit",this.$module.revertToPasswordOnFormSubmit)
}
,t.prototype.togglePassword=function(e){e.preventDefault(),this.showHide.innerHTML=this.showHide.innerHTML===this.showPasswordText?this.hidePasswordText:this.showPasswordText,this.statusText.innerHTML=this.statusText.innerHTML===this.shownPassword?this.hiddenPassword:this.shownPassword,this.input.setAttribute("type","text"===this.input.getAttribute("type")?"password":"text")
}
,t.prototype.revertToPasswordOnFormSubmit=function(){this.showHide.innerHTML=this.showPasswordText,this.statusText.innerHTML=this.hiddenPassword,this.input.setAttribute("type","password")
}
,e.ShowPassword=t
}
(window.GOVUK.Modules),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,function(e){function t(){
}
t.prototype.start=function(e){this.$module=e[0],this.$module.actions={
}
,this.$module.rememberShownStep=!1,this.$module.stepNavSize=!1,this.$module.sessionStoreLink="govuk-step-nav-active-link",this.$module.activeLinkClass="gem-c-step-nav__list-item--active",this.$module.activeStepClass="gem-c-step-nav__step--active",this.$module.activeLinkHref="#content",this.$module.uniqueId=!1,this.$module.classList.add("gem-c-step-nav--active"),this.$module.classList.remove("js-hidden"),this.$module.stepNavSize=this.$module.classList.contains("gem-c-step-nav--large")?"Big":"Small",this.$module.rememberShownStep=!!this.$module.hasAttribute("data-remember")&&"Big"===this.$module.stepNavSize,this.$module.steps=this.$module.querySelectorAll(".js-step"),this.$module.stepHeaders=this.$module.querySelectorAll(".js-toggle-panel"),this.$module.totalSteps=this.$module.querySelectorAll(".js-panel").length,this.$module.totalLinks=this.$module.querySelectorAll(".gem-c-step-nav__link").length,this.$module.showOrHideAllButton=!1,this.$module.uniqueId=this.$module.getAttribute("data-id")||!1,this.$module.uniqueId&&(this.$module.sessionStoreLink=this.$module.sessionStoreLink+"_"+this.$module.uniqueId),this.$module.upChevronSvg='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="gem-c-step-nav__chevron-stroke" d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.499997 15.2467 0.499998 10C0.499999 4.7533 4.7533 0.500001 10 0.500002C15.2467 0.500003 19.5 4.7533 19.5 10Z" stroke="#1D70B8"/><path class="gem-c-step-nav__chevron-stroke" d="M6.32617 12.3262L10 8.65234L13.6738 12.3262" stroke="#1D70B8" stroke-width="2"/></svg>',this.$module.downChevronSvg='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="gem-c-step-nav__chevron-stroke" d="M0.499997 10C0.499998 4.75329 4.75329 0.499999 10 0.499999C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.499997 15.2467 0.499997 10Z" stroke="#1D70B8"/><path class="gem-c-step-nav__chevron-stroke" d="M13.6738 8.67383L10 12.3477L6.32617 8.67383" stroke="#1D70B8" stroke-width="2"/></svg>';var t=new this.StepNavTracker(this.$module.uniqueId,this.$module.totalSteps,this.$module.totalLinks);this.getTextForInsertedElements(),this.addButtonstoSteps(),this.addShowHideAllButton(),this.addShowHideToggle(),this.addAriaControlsAttrForShowHideAllButton(),this.ensureOnlyOneActiveLink(),this.showPreviouslyOpenedSteps(),this.bindToggleForSteps(t),this.bindToggleShowHideAllButton(t),this.bindComponentLinkClicks(t)
}
,t.prototype.getTextForInsertedElements=function(){this.$module.actions.showText=this.$module.getAttribute("data-show-text"),this.$module.actions.hideText=this.$module.getAttribute("data-hide-text"),this.$module.actions.showAllText=this.$module.getAttribute("data-show-all-text"),this.$module.actions.hideAllText=this.$module.getAttribute("data-hide-all-text")
}
,t.prototype.addShowHideAllButton=function(){var e=document.createElement("div");e.className="gem-c-step-nav__controls",e.innerHTML='<button aria-expanded="false" class="gem-c-step-nav__button gem-c-step-nav__button--controls js-step-controls-button"><span class="gem-c-step-nav__button-text gem-c-step-nav__button-text--all js-step-controls-button-text">'+this.$module.actions.showAllText+'</span><span class="gem-c-step-nav__chevron js-step-controls-button-icon">'+this.$module.downChevronSvg+"</span></button>";var t=this.$module.querySelectorAll(".gem-c-step-nav__steps")[0];this.$module.insertBefore(e,t),this.$module.showOrHideAllButton=this.$module.querySelectorAll(".js-step-controls-button")[0]
}
,t.prototype.addShowHideToggle=function(){for(var e=0;e<this.$module.stepHeaders.length;e++){var t=this.$module.stepHeaders[e];if(!t.querySelectorAll(".js-toggle-link").length){var n=document.createElement("span"),o=document.createElement("span"),i=document.createElement("span"),r=document.createElement("span"),s=document.createElement("span"),a=document.createElement("span");o.className="gem-c-step-nav__toggle-link js-toggle-link",i.className="gem-c-step-nav__button-text js-toggle-link-text",r.className="gem-c-step-nav__chevron js-toggle-link-icon",s.className="govuk-visually-hidden",a.className="govuk-visually-hidden",o.appendChild(i),o.appendChild(r),s.innerHTML=", ",a.innerHTML=" this section",n.appendChild(s),n.appendChild(o),n.appendChild(a),t.querySelectorAll(".js-step-title-button")[0].appendChild(n)
}

}

}
,t.prototype.headerIsOpen=function(e){return void 0!==e.parentNode.getAttribute("show")
}
,t.prototype.addAriaControlsAttrForShowHideAllButton=function(){var e=this.$module.querySelectorAll(".js-panel")[0].getAttribute("id");this.$module.showOrHideAllButton.setAttribute("aria-controls",e)
}
,t.prototype.setAllStepsShownState=function(e){for(var t=[],n=0;n<this.$module.steps.length;n++){new this.StepView(this.$module.steps[n],this.$module).setIsShown(e),e&&t.push(this.$module.steps[n].getAttribute("id"))
}
e?this.saveToSessionStorage(this.$module.uniqueId,JSON.stringify(t)):this.removeFromSessionStorage(this.$module.uniqueId)
}
,t.prototype.showPreviouslyOpenedSteps=function(){for(var e=this.loadFromSessionStorage(this.$module.uniqueId)||[],t=0;t<this.$module.steps.length;t++){var n=this.$module.steps[t],o=n.getAttribute("id"),i=new this.StepView(n,this.$module),r=n.hasAttribute("data-show");this.$module.rememberShownStep&&-1<e.indexOf(o)||r&&"undefined"!==r?i.setIsShown(!0):i.setIsShown(!1)
}
0<e.length&&(this.$module.showOrHideAllButton.setAttribute("aria-expanded",!0),this.setShowHideAllText())
}
,t.prototype.addButtonstoSteps=function(){for(var e=0;e<this.$module.steps.length;e++){var t=this.$module.steps[e],n=t.querySelectorAll(".js-step-title")[0],o=t.querySelectorAll(".js-panel")[0].getAttribute("id"),i=n.textContent||n.innerText;n.outerHTML='<span class="js-step-title"><button class="gem-c-step-nav__button gem-c-step-nav__button--title js-step-title-button" aria-expanded="false" aria-controls="'+o+'"><span class="gem-c-step-nav__title-text js-step-title-text">'+i+"</span></button></span>"
}

}
,t.prototype.bindToggleForSteps=function(o){for(var i=this,e=this.$module.querySelectorAll(".js-toggle-panel"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=new i.StepView(this.parentNode,i.$module);t.toggle();var n=this.parentNode.hasAttribute("data-optional");new i.StepToggleClick(e,t,o,n,i.$module.stepNavSize).trackClick(),i.setShowHideAllText(),i.rememberStepState(this.parentNode)
}
)
}
,t.prototype.rememberStepState=function(e){if(this.$module.rememberShownStep){var t=JSON.parse(this.loadFromSessionStorage(this.$module.uniqueId))||[],n=e.getAttribute("id");if(e.classList.contains("step-is-shown"))t.push(n);else{var o=t.indexOf(n);-1<o&&t.splice(o,1)
}
this.saveToSessionStorage(this.$module.uniqueId,JSON.stringify(t))
}

}
,t.prototype.bindComponentLinkClicks=function(n){for(var e=this.$module.querySelectorAll(".js-link"),o=this,t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=this.getAttribute("data-position");new o.ComponentLinkClick(e,n,t,o.$module.stepNavSize).trackClick(),"external"!==this.getAttribute("rel")&&o.saveToSessionStorage(o.$module.sessionStoreLink,t),this.getAttribute("href")===o.$module.activeLinkHref&&(o.setOnlyThisLinkActive(this),o.setActiveStepClass())
}
)
}
,t.prototype.saveToSessionStorage=function(e,t){window.sessionStorage.setItem(e,t)
}
,t.prototype.loadFromSessionStorage=function(e){return window.sessionStorage.getItem(e)
}
,t.prototype.removeFromSessionStorage=function(e){window.sessionStorage.removeItem(e)
}
,t.prototype.setOnlyThisLinkActive=function(e){for(var t=this.$module.querySelectorAll("."+this.$module.activeLinkClass),n=0;n<t.length;n++)t[n].classList.remove(this.$module.activeLinkClass);e.parentNode.classList.add(this.$module.activeLinkClass)
}
,t.prototype.ensureOnlyOneActiveLink=function(){var e=this.$module.querySelectorAll(".js-list-item."+this.$module.activeLinkClass);if(!(e.length<=1)){var t=this.loadFromSessionStorage(this.$module.sessionStoreLink),n=this.$module.querySelectorAll("."+this.$module.activeLinkClass)[0].firstChild.getAttribute("data-position"),o=t||n,i=this.$module.querySelectorAll('[data-position="'+o+'"]')[0];i?i.parentNode.classList.contains(this.$module.activeLinkClass)||(o=i):o=n,this.removeActiveStateFromAllButCurrent(e,o),this.setActiveStepClass()
}

}
,t.prototype.removeActiveStateFromAllButCurrent=function(e,t){for(var n=0;n<e.length;n++){var o=e[n];if(o.querySelectorAll(".js-link")[0].getAttribute("data-position").toString()!==t.toString()){o.classList.remove(this.$module.activeLinkClass);var i=o.querySelectorAll(".visuallyhidden");i.length&&i[0].parentNode.removeChild(i[0])
}

}

}
,t.prototype.setActiveStepClass=function(){for(var e=this.$module.querySelectorAll("."+this.$module.activeStepClass),t=0;t<e.length;t++)e[t].classList.remove(this.$module.activeStepClass),e[t].removeAttribute("data-show");var n=this.$module.querySelectorAll("."+this.$module.activeLinkClass)[0];if(n){var o=n.closest(".gem-c-step-nav__step");o.classList.add(this.$module.activeStepClass),o.setAttribute("data-show","")
}

}
,t.prototype.bindToggleShowHideAllButton=function(t){var n=this;this.$module.showOrHideAllButton.addEventListener("click",function(){var e=(this.textContent||this.innerText)===n.$module.actions.showAllText;return t.trackClick("pageElementInteraction",e?"stepNavAllShown":"stepNavAllHidden",{label:(e?n.$module.actions.showAllText:n.$module.actions.hideAllText)+": "+n.$module.stepNavSize
}
),n.setAllStepsShownState(e),n.$module.showOrHideAllButton.setAttribute("aria-expanded",e),n.setShowHideAllText(),!1
}
)
}
,t.prototype.setShowHideAllText=function(){var e=this.$module.querySelectorAll(".step-is-shown").length===this.$module.totalSteps;this.$module.showOrHideAllButton.querySelector(".js-step-controls-button-text").innerHTML=e?this.$module.actions.hideAllText:this.$module.actions.showAllText,this.$module.showOrHideAllButton.querySelector(".js-step-controls-button-icon").innerHTML=e?this.$module.upChevronSvg:this.$module.downChevronSvg
}
,t.prototype.StepView=function(e,t){this.stepElement=e,this.stepContent=this.stepElement.querySelectorAll(".js-panel")[0],this.titleButton=this.stepElement.querySelectorAll(".js-step-title-button")[0];var n=this.stepElement.querySelectorAll(".js-step-title-text")[0];this.title=n.textContent||n.innerText,this.title=this.title.replace(/^\s+|\s+$/g,""),this.showText=t.actions.showText,this.hideText=t.actions.hideText,this.upChevronSvg=t.upChevronSvg,this.downChevronSvg=t.downChevronSvg,this.show=function(){this.setIsShown(!0)
}
,this.hide=function(){this.setIsShown(!1)
}
,this.toggle=function(){this.setIsShown(this.isHidden())
}
,this.setIsShown=function(e){e?(this.stepElement.classList.add("step-is-shown"),this.stepContent.classList.remove("js-hidden")):(this.stepElement.classList.remove("step-is-shown"),this.stepContent.classList.add("js-hidden")),this.titleButton.setAttribute("aria-expanded",e);var t=this.stepElement.querySelectorAll(".js-toggle-link")[0];t.querySelector(".js-toggle-link-text").innerHTML=e?this.hideText:this.showText,t.querySelector(".js-toggle-link-icon").innerHTML=e?this.upChevronSvg:this.downChevronSvg
}
,this.isShown=function(){return this.stepElement.classList.contains("step-is-shown")
}
,this.isHidden=function(){return!this.isShown()
}
,this.numberOfContentItems=function(){return this.stepContent.querySelectorAll(".js-link").length
}

}
,t.prototype.StepToggleClick=function(e,t,n,o,i){this.target=e.target,this.stepIsOptional=o,this.stepNavSize=i,this.trackClick=function(){var e={label:this.trackingLabel(),dimension28:t.numberOfContentItems().toString()
}
;n.trackClick("pageElementInteraction",this.trackingAction(),e)
}
,this.trackingLabel=function(){return this.target.closest(".js-step").querySelectorAll(".js-toggle-panel")[0].getAttribute("data-position")+" - "+t.title+" - "+this.locateClickElement()+": "+this.stepNavSize+this.isOptional()
}
,this.stepIndex=function(){return this.$module.steps.index(t.element)+1
}
,this.trackingAction=function(){return t.isHidden()?"stepNavHidden":"stepNavShown"
}
,this.locateClickElement=function(){return this.clickedOnIcon()?this.iconType()+" click":this.clickedOnHeading()?"Heading click":"Elsewhere click"
}
,this.clickedOnIcon=function(){return this.target.classList.contains("js-toggle-link")
}
,this.clickedOnHeading=function(){return this.target.classList.contains("js-step-title-text")
}
,this.iconType=function(){return t.isHidden()?"Minus":"Plus"
}
,this.isOptional=function(){return this.stepIsOptional?" ; optional":""
}

}
,t.prototype.ComponentLinkClick=function(e,n,o,t){this.size=t,this.target=e.target,this.trackClick=function(){var e={label:this.target.getAttribute("href")+" : "+this.size
}
,t=this.target.closest(".gem-c-step-nav__list").getAttribute("data-length");t&&(e.dimension28=t),n.trackClick("stepNavLinkClicked",o,e)
}

}
,t.prototype.StepNavTracker=function(e,t,n){this.totalSteps=t,this.totalLinks=n,this.uniqueId=e,this.trackClick=function(e,t,n){window.GOVUK.analytics&&window.GOVUK.analytics.trackEvent&&((n=n||{
}
).dimension26=n.dimension26||this.totalSteps.toString(),n.dimension27=n.dimension27||this.totalLinks.toString(),n.dimension96=n.dimension96||this.uniqueId,window.GOVUK.analytics.trackEvent(e,t,n))
}

}
,e.Gemstepnav=t
}
(window.GOVUK.Modules),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend",t):e.GOVUKFrontend=t()
}
(this,function(){"use strict";function r(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)
}
function e(e){this.$module=e,this.$tabs=e.querySelectorAll(".govuk-tabs__tab"),this.keys={left:37,right:39,up:38,down:40
}
,this.jsHiddenClass="govuk-tabs__panel--hidden"
}
return function(){var a,c,l,u;"defineProperty"in Object&&function(){try{var e={
}
;return Object.defineProperty(e,"test",{value:42
}
),!0
}
catch(t){return!1
}

}
()||(a=Object.defineProperty,c=Object.prototype.hasOwnProperty("__defineGetter__"),l="Getters & setters cannot be defined on this javascript engine",u="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function d(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),i="value"in n||"writable"in n,r="get"in n&&typeof n.get,s="set"in n&&typeof n.set;if(r){if("function"!==r)throw new TypeError("Getter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineGetter__.call(e,o,n.get)
}
else e[o]=n.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!c)throw new TypeError(l);if(i)throw new TypeError(u);Object.__defineSetter__.call(e,o,n.set)
}
return"value"in n&&(e[o]=n.value),e
}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function L(t){var n,e=Array,o=Object,i=o.prototype,r=e.prototype,s=function s(){
}
,a=i.toString,c="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,u=function u(e){try{return l.call(e),!0
}
catch(t){return!1
}

}
,d="[object Function]",p="[object GeneratorFunction]";n=function n(e){if("function"!=typeof e)return!1;if(c)return u(e);var t=a.call(e);return t===d||t===p
}
;var f=r.slice,h=r.concat,m=r.push,y=Math.max,g=this;if(!n(g))throw new TypeError("Function.prototype.bind called on incompatible "+g);for(var v,b=f.call(arguments,1),w=function(){if(this instanceof v){var e=g.apply(this,h.call(b,f.call(arguments)));return o(e)===e?e:this
}
return g.apply(t,h.call(b,f.call(arguments)))
}
,E=y(0,g.length-b.length),k=[],x=0;x<E;x++)m.call(k,"$"+x);return v=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this, arguments);
}
")(w),g.prototype&&(s.prototype=g.prototype,v.prototype=new s,s.prototype=null),v
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(p){var e,t,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in(t=this)&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var i=!0,n=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{n({
}
,"support")
}
catch(e){i=!1
}
return function(i,r){var s=this,a=[],c={
}
,l=0,e=0,t=function(e){n(s,e,function(){return d(),a[e]
}
,!1)
}
,u=function(){if(e<=l)for(;e<l;++e)t(e)
}
,d=function(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(a="object"==typeof i[r]?(""+i[r].baseVal).replace(/^\s+|\s+$/g,"").split(o):(""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(a=[]),c={
}
,t=0;t<a.length;++t)c[a[t]]=!0;l=a.length,u()
}
;return d(),n(s,"length",function(){return d(),l
}
),s.toLocaleString=s.toString=function(){return d(),a.join(" ")
}
,s.item=function(e){return d(),a[e]
}
,s.contains=function(e){return d(),!!c[e]
}
,s.add=function(){d.apply(s,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)t=e[n],c[t]||(a.push(t),c[t]=!0);l!==a.length&&(l=a.length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u())
}
,s.remove=function(){d.apply(s,e=arguments);for(var e,t={
}
,n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete c[e[n]];for(n=0;n<a.length;++n)t[a[n]]||o.push(a[n]);l=(a=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=a.join(" "):i[r]=a.join(" "),u()
}
,s.toggle=function(e,t){return d.apply(s,[e]),p!==t?t?(s.add(e),!0):(s.remove(e),!1):c[e]?(s.remove(e),!1):(s.add(e),!0)
}
,s
}

}
()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function i(e,t){var n=t;if(n!==p)return this[(n=!!n)?"add":"remove"](e),n;var o=!this.contains(e);return this[o?"add":"remove"](e),o
}
)),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var o=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var o=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)o.call(this,e[n])
}

}

}
())
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {
}
")(),this.Document.prototype=document))
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Element"in this&&"HTMLElement"in this||function(){function e(){return r--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(l(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)
}
if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {
}
")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=o.appendChild(o.createElement("*")),c={
}
,l=function(e,t){var n,o,i,r=e.childNodes||[],s=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++s];)l(i,t);return e
}
,u=document.getElementsByTagName("*"),i=document.createElement,r=100;a.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=a[n],r=c[n],s=-1;t=u[++s];)1===t.nodeType&&(o||t[n]===r)&&(t[n]=i);c[n]=i
}
),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function s(e){return null!==this.getAttribute(e)
}
),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function d(e){var t=i(String(e).toLowerCase());return l(t)
}
,document.removeChild(n)
}
else window.HTMLElement=window.Element
}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(e){var u=!0,d=function(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===u||!!o,get:n
}
):e.__defineGetter__(t,n)
}
;try{d({
}
,"support")
}
catch(t){u=!1
}
var p=function(e,c,l){d(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===u){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,s=r.length,a=0;a<s;++a)if(r[a]._R===t){o=r[a];break
}
o||(o=i.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,t,l)
}
else e=new DOMTokenList(t,l);return d(t,c,function(){return e
}
),delete t[n],e
}
,!0)
}
;p(e.Element,"classList","className"),p(e.HTMLElement,"classList","className"),p(e.HTMLLinkElement,"relList","rel"),p(e.HTMLAnchorElement,"relList","rel"),p(e.HTMLAreaElement,"relList","rel")
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"document"in this&&"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var e=this.nextSibling;e&&1!==e.nodeType;)e=e.nextSibling;return e
}

}
)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"document"in this&&"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var e=this.previousSibling;e&&1!==e.nodeType;)e=e.previousSibling;return e
}

}
)
}
.call(
"object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {
}
")()).prototype=this
}
(this)
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),function(l){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0
}
catch(t){return!1
}

}
)(this)||function(){function u(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1
}
var i={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1
}
;if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function r(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===l)&&t.bubbles,i=!(!t||t.cancelable===l)&&t.cancelable;return n.initEvent(e,o,i),n
}
return(n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===l)&&t.bubbles,n.cancelable=!(!t||t.cancelable===l)&&t.cancelable,n
}
,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e
}
),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function s(e,t){var l=this,n=e,o=t;if(l===window&&n in i)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");l._events||(l._events={
}
),l._events[n]||(l._events[n]=function(e){var t,n=l._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function s(){!1!==e.cancelable&&(e.returnValue=!1)
}
,e.stopPropagation=function a(){e.cancelBubble=!0
}
,e.stopImmediatePropagation=function c(){e.cancelBubble=!0,e.cancelImmediate=!0
}
,e.currentTarget=l,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||l,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==u(n,t=o[i])&&"function"==typeof t&&t.call(l,e)
}
,l._events[n].list=[],l.attachEvent&&l.attachEvent("on"+n,l._events[n])),l._events[n].list.push(o)
}
,window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function a(e,t){var n,o=this,i=e,r=t;o._events&&o._events[i]&&o._events[i].list&&-1!==(n=u(o._events[i].list,r))&&(o._events[i].list.splice(n,1),o._events[i].list.length||(o.detachEvent&&o.detachEvent("on"+i,o._events[i]),delete o._events[i]))
}
,window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function c(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)
}
;this.attachEvent("on"+n,o)
}
this.fireEvent("on"+n,e)
}
catch(i){for(e.target=t;"_events"in(e.currentTarget=t)&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),(t=9===t.nodeType?t.parentWindow:t.parentNode)&&!e.cancelBubble;);
}
return!0
}
,document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0
}
))
}
))
}

}
()
}
.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{
}
),e.prototype.init=function(){"function"==typeof window.matchMedia?this.setupResponsiveChecks():this.setup()
}
,e.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()
}
,e.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()
}
,e.prototype.setup=function(){var e=this.$module,t=this.$tabs,n=e.querySelector(".govuk-tabs__list"),o=e.querySelectorAll(".govuk-tabs__list-item");if(t&&n&&o){n.setAttribute("role","tablist"),r(o,function(e){e.setAttribute("role","presentation")
}
),r(t,function(e){this.setAttributes(e),e.boundTabClick=this.onTabClick.bind(this),e.boundTabKeydown=this.onTabKeydown.bind(this),e.addEventListener("click",e.boundTabClick,!0),e.addEventListener("keydown",e.boundTabKeydown,!0),this.hideTab(e)
}
.bind(this));var i=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(i),e.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",e.boundOnHashChange,!0)
}

}
,e.prototype.teardown=function(){var e=this.$module,t=this.$tabs,n=e.querySelector(".govuk-tabs__list"),o=e.querySelectorAll(".govuk-tabs__list-item");t&&n&&o&&(n.removeAttribute("role"),r(o,function(e){e.removeAttribute("role","presentation")
}
),r(t,function(e){e.removeEventListener("click",e.boundTabClick,!0),e.removeEventListener("keydown",e.boundTabKeydown,!0),this.unsetAttributes(e)
}
.bind(this)),window.removeEventListener("hashchange",e.boundOnHashChange,!0))
}
,e.prototype.onHashChange=function(){var e=window.location.hash,t=this.getTab(e);if(t)if(this.changingHash)this.changingHash=!1;else{var n=this.getCurrentTab();this.hideTab(n),this.showTab(t),t.focus()
}

}
,e.prototype.hideTab=function(e){this.unhighlightTab(e),this.hidePanel(e)
}
,e.prototype.showTab=function(e){this.highlightTab(e),this.showPanel(e)
}
,e.prototype.getTab=function(e){return this.$module.querySelector('.govuk-tabs__tab[href="'+e+'"]')
}
,e.prototype.setAttributes=function(e){var t=this.getHref(e).slice(1);e.setAttribute("id","tab_"+t),e.setAttribute("role","tab"),e.setAttribute("aria-controls",t),e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1");var n=this.getPanel(e);n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",e.id),n.classList.add(this.jsHiddenClass)
}
,e.prototype.unsetAttributes=function(e){e.removeAttribute("id"),e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeAttribute("aria-selected"),e.removeAttribute("tabindex");var t=this.getPanel(e);t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.classList.remove(this.jsHiddenClass)
}
,e.prototype.onTabClick=function(e){if(!e.target.classList.contains("govuk-tabs__tab"))return!1;e.preventDefault();var t=e.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(t),this.createHistoryEntry(t)
}
,e.prototype.createHistoryEntry=function(e){var t=this.getPanel(e),n=t.id;t.id="",this.changingHash=!0,window.location.hash=this.getHref(e).slice(1),t.id=n
}
,e.prototype.onTabKeydown=function(e){switch(e.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),e.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),e.preventDefault()
}

}
,e.prototype.activateNextTab=function(){var e=this.getCurrentTab(),t=e.parentNode.nextElementSibling;if(t)var n=t.querySelector(".govuk-tabs__tab");n&&(this.hideTab(e),this.showTab(n),n.focus(),this.createHistoryEntry(n))
}
,e.prototype.activatePreviousTab=function(){var e=this.getCurrentTab(),t=e.parentNode.previousElementSibling;if(t)var n=t.querySelector(".govuk-tabs__tab");n&&(this.hideTab(e),this.showTab(n),n.focus(),this.createHistoryEntry(n))
}
,e.prototype.getPanel=function(e){return this.$module.querySelector(this.getHref(e))
}
,e.prototype.showPanel=function(e){this.getPanel(e).classList.remove(this.jsHiddenClass)
}
,e.prototype.hidePanel=function(e){this.getPanel(e).classList.add(this.jsHiddenClass)
}
,e.prototype.unhighlightTab=function(e){e.setAttribute("aria-selected","false"),e.parentNode.classList.remove("govuk-tabs__list-item--selected"),e.setAttribute("tabindex","-1")
}
,e.prototype.highlightTab=function(e){e.setAttribute("aria-selected","true"),e.parentNode.classList.add("govuk-tabs__list-item--selected"),e.setAttribute("tabindex","0")
}
,e.prototype.getCurrentTab=function(){return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab")
}
,e.prototype.getHref=function(e){var t=e.getAttribute("href");return t.slice(t.indexOf("#"),t.length)
}
,e
}
),window.GOVUK=window.GOVUK||{
}
,window.GOVUK.Modules=window.GOVUK.Modules||{
}
,window.GOVUK.Modules.Tabs=window.GOVUKFrontend,window.GOVUKFrontend.initAll=function(){
}
,$(document).ready(function(){
}
);
