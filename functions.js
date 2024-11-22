/*! For license information please see functions.js.LICENSE.txt */
!function(){"use strict";var t={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function e(){e=function(){return n};var t,n={},o=Object.prototype,a=o.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",p=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),i=new R(n||[]);return c(a,"_invoke",{value:O(t,e,i)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",v="suspendedYield",m="executing",d="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var _=Object.getPrototypeOf,T=_&&_(_(U([])));T&&T!==o&&a.call(T,u)&&(E=T);var k=x.prototype=w.prototype=Object.create(E);function C(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,e){function n(o,c,i,u){var s=l(t[o],t,c);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"==r(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function O(r,e,n){var o=y;return function(a,c){if(o===m)throw Error("Generator is already running");if(o===d){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=N(i,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?d:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function N(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,N(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=l(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var c=a.arg;return c?c.done?(e[r.resultName]=c.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function I(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function U(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=x,c(k,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,p,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,p,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},C(L.prototype),f(L.prototype,s,(function(){return this})),n.AsyncIterator=L,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var c=new L(h(t,r,e,o),a);return n.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},C(k),f(k,p,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=U,R.prototype={constructor:R,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!r)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return i.type="throw",i.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=a.call(c,"catchLoc"),s=a.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:U(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},n}function n(t,r,e,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void e(t)}i.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var c=t.apply(r,e);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}function a(){return(a=o(e().mark((function t(r){var n,o,a,c,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_indicator/".concat(encodeURIComponent(r),"\n    "));case 3:return n=t.sent,t.next=6,n.json();case 6:if(o=t.sent,n.ok){t.next=9;break}throw new Error(n.statusText);case 9:return a=o.length>0?o[0].unit:null,c=a?["Country (Unit: ".concat(a,")"),"Timestamp","Value"]:["Country","Timestamp","Value"],i=[c],o.forEach((function(t){i.push([t.country,t.timestamp,t.value])})),t.abrupt("return",i);case 16:return t.prev=16,t.t0=t.catch(0),t.abrupt("return",[["Error: ".concat(t.t0.message)]]);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function c(){return(c=o(e().mark((function t(r){var n,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_country/".concat(encodeURIComponent(r),"\n    "));case 3:return n=t.sent,t.next=6,n.json();case 6:if(o=t.sent,n.ok){t.next=9;break}throw new Error(n.statusText);case 9:return a=[["Indicator","Timestamp","Value","Unit"]],o.forEach((function(t){a.push([t.indicator,t.timestamp,t.value,t.unit||"N/A"])})),t.abrupt("return",a);case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",[["Error: ".concat(t.t0.message)]]);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function i(){return(i=o(e().mark((function t(r,n){var o,a,c,i,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_indicator_for_country/".concat(encodeURIComponent(r),"/").concat(encodeURIComponent(n),"\n    "));case 3:return o=t.sent,t.next=6,o.json();case 6:if(a=t.sent,o.ok){t.next=9;break}throw new Error(o.statusText);case 9:return c=[],i=["Timestamp","Value"],u=a.length>0?a[0].unit:null,c=u?[["Unit: ".concat(u),""],i]:[i],a.forEach((function(t){c.push([t.timestamp,t.value])})),t.abrupt("return",c);case 17:return t.prev=17,t.t0=t.catch(0),t.abrupt("return",[["Error: ".concat(t.t0.message)]]);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function u(){return(u=o(e().mark((function t(r){var n,o,a,c,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_recent_indicator/".concat(encodeURIComponent(r),"\n    "));case 3:return n=t.sent,t.next=6,n.json();case 6:if(o=t.sent,n.ok){t.next=9;break}throw new Error(n.statusText);case 9:return a=o.length>0?o[0].unit:null,c=a?["Country (Unit: ".concat(a,")"),"Timestamp","Value"]:["Country","Timestamp","Value"],i=[c],o.forEach((function(t){i.push([t.country,t.timestamp,t.value])})),t.abrupt("return",i);case 16:return t.prev=16,t.t0=t.catch(0),t.abrupt("return",[["Error: ".concat(t.t0.message)]]);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function s(){return(s=o(e().mark((function t(r){var n,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_recent_country/".concat(encodeURIComponent(r),"\n    "));case 3:return n=t.sent,t.next=6,n.json();case 6:if(o=t.sent,n.ok){t.next=9;break}throw new Error(n.statusText);case 9:return a=[["Indicator","Timestamp","Value","Unit"]],o.forEach((function(t){a.push([t.indicator,t.timestamp,t.value,t.unit||"N/A"])})),t.abrupt("return",a);case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",[["Error: ".concat(t.t0.message)]]);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function p(){return(p=o(e().mark((function t(r,n){var o,a,c,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n      https://indicatorapi.ey.r.appspot.com/get_recent_indicator_for_country/".concat(encodeURIComponent(r),"/").concat(encodeURIComponent(n),"\n    "));case 3:return o=t.sent,t.next=6,o.json();case 6:if(a=t.sent,!o.ok){t.next=17;break}if(c=a.value,"N/A"!==(i=a.unit||"N/A")){t.next=14;break}return t.abrupt("return",[[c]]);case 14:return t.abrupt("return",[[c,i]]);case 15:t.next=18;break;case 17:return t.abrupt("return",[["Error"],["Error: ".concat(a.error)]]);case 18:t.next=23;break;case 20:return t.prev=20,t.t0=t.catch(0),t.abrupt("return",[["Error"],["Error: ".concat(t.t0.message)]]);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))).apply(this,arguments)}t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},CustomFunctions.associate("GET_INDICATOR",(function(t){return a.apply(this,arguments)})),CustomFunctions.associate("GET_COUNTRY",(function(t){return c.apply(this,arguments)})),CustomFunctions.associate("GET_INDICATOR_FOR_COUNTRY",(function(t,r){return i.apply(this,arguments)})),CustomFunctions.associate("GET_RECENT_INDICATOR",(function(t){return u.apply(this,arguments)})),CustomFunctions.associate("GET_RECENT_COUNTRY",(function(t){return s.apply(this,arguments)})),CustomFunctions.associate("GET_RECENT_INDICATOR_FOR_COUNTRY",(function(t,r){return p.apply(this,arguments)}))}();
//# sourceMappingURL=functions.js.map