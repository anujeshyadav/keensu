(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2003:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),r=t(15),c=t(0),i=t.n(c),m=t(1255),o=t(1256),d=t(1253),u=t(1254),E=t(1257),f=t(189),v=t(1260),h=t(28),p=(t(866),t(572),t(802)),b=t(43),N=t.n(b),g=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("http://35.154.86.59/api/user/view_onecust/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(p.a,{breadCrumbTitle:"Customer",breadCrumbParent:"Home",breadCrumbActive:"View Customer "}),i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/userride/userRideList",tag:"a"},"User List"),i.a.createElement(u.a,{active:!0},"View User"))))),i.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View User")),i.a.createElement(o.a,null,i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return h.a.push("/app/userride/userRideList")}},"Back"))),i.a.createElement(v.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"First Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.firstname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Last Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.lastname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.mobile))))))))))}}]),t}(i.a.Component);a.default=g},866:function(e,a,t){}}]);
//# sourceMappingURL=146.e0d9fb3e.chunk.js.map