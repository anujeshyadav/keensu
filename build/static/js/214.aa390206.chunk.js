/*! For license information please see 214.aa390206.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[214],{2012:function(e,t,r){"use strict";r.r(t);var a=r(61),n=r(13),i=r(14),o=r(16),l=r(15),c=r(0),u=r.n(c),s=r(1255),d=r(1256),f=r(1257),h=r(189),g=r(1260),m=r(796),p=r(800),v=r(797),y=r(795),w=(r(28),r(42)),E=(r(43),r(182)),b=r(808),x=r(448),S=r(278),N=(r(807),r(572),r(59)),P=r(802);function z(){z=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(G){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new P(n||[]);return a(o,"_invoke",{value:b(e,r,l)}),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(G){return{type:"throw",arg:G}}}e.wrap=u;var d={};function f(){}function h(){}function g(){}var m={};c(m,i,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==t&&r.call(v,i)&&(m=v);var y=g.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(n,o){!function a(n,i,o,l){var c=s(e[n],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function b(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return k()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var l=x(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=g,a(y,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:h,configurable:!0}),h.displayName=c(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new E(u(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var L=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",gallary:[],defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Image/Video",field:"file",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",null,u.a.createElement("span",null,(null===(t=e.data.file)||void 0===t?void 0:t.includes("mp4"))?u.a.createElement(u.a.Fragment,null,"Video"):u.a.createElement(u.a.Fragment,null,"Image")))}},{headerName:"View",field:"image",filter:!0,width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{class:""},(null===e||void 0===e||null===(t=e.data.file)||void 0===t?void 0:t.includes("mp4"))?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{width:"100%"},className:"videogallry"},u.a.createElement("video",{style:{width:"100%",background:"none",borderRadius:"8px"},className:"videosource",width:"50px",height:"60px",controls:!0},u.a.createElement("source",{src:null===e||void 0===e?void 0:e.data.file,type:"video/mp4"})))):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{width:"100px"},className:"imagesize"},u.a.createElement("img",{style:{borderRadius:"8px",width:"90px",height:"38px",background:"none"},className:"imagegallry",src:null===e||void 0===e?void 0:e.data.file,alt:"gallryimg"})))))}},{headerName:"Action",field:"sortorder",width:100,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(x.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var r=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:r})}}))}}]},e.runthisfunction=function(e){console.log(e),w.a.get("/user/delGalleryvideo/".concat(e)).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(z().mark((function e(){var t,r=this;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("astroId"),w.a.get("/admin/get_astroGallery/".concat(t)).then((function(e){console.log("images",e.data.data),r.setState({rowData:e.data.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,a=t.columnDefs,n=t.defaultColDef;return u.a.createElement("div",null,u.a.createElement(P.a,{breadCrumbTitle:"Upload Gallary",breadCrumbParent:"Home",breadCrumbActive:"Gallary"}),u.a.createElement(s.a,{className:"app-user-list"},u.a.createElement(d.a,{sm:"12"}),u.a.createElement(d.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(s.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Your Uploads")),u.a.createElement(d.a,null,u.a.createElement(N.b,{render:function(e){var t=e.history;return u.a.createElement(h.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/uploadgallary")}},"Add Your gallary")}}))),u.a.createElement(g.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(m.a,{className:"p-1 ag-dropdown"},u.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(S.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134"))))),u.a.createElement(E.a.Consumer,null,(function(t){return u.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:a,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))))}}]),r}(u.a.Component);t.default=L}}]);
//# sourceMappingURL=214.aa390206.chunk.js.map