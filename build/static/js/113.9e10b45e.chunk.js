(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{1739:function(e,a,t){},2078:function(e,a,t){"use strict";t.r(a);var l=t(44),s=t(13),n=t(14),i=t(16),m=t(15),c=t(0),r=t.n(c),d=t(1255),o=t(1256),u=t(1257),h=t(811),p=t(1259),g=t(809),E=t(803),b=t(189),_=t(129),N=t.n(_),f=t(277),x=t(1205),y=t.n(x),v=(t(1206),t(42)),k=(t(1739),t(802)),C=t(820),S=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.getData=function(){var e=localStorage.getItem("astroId");v.a.get("/admin/getoneAstro/".concat(e)).then((function(e){console.log(e.data.data),n.setState({data:e.data.data,fullname:e.data.data.fullname,email:e.data.data.email,mobile:e.data.data.mobile,img:e.data.data.img,callCharge:e.data.data.callCharge,all_skills:e.data.data.all_skills,callingStatus:e.data.data.callingStatus,dob:e.data.data.dob,exp_in_years:e.data.data.exp_in_years,gender:e.data.data.gender,highest_qualification:e.data.data.highest_qualification,language:e.data.data.language,max_earning_expe:e.data.data.max_earning_expe,min_earning_expe:e.data.data.min_earning_expe,max_tym:e.data.data.max_tym,min_tym:e.data.data.min_tym,availableAmt:e.data.data.availableAmt})})).catch((function(e){console.log(e)}))},n.changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("fullname",n.state.fullname),a.append("email",n.state.email),a.append("mobile",n.state.mobile),a.append("callCharge",n.state.callCharge),a.append("all_skills",n.state.all_skills),a.append("exp_in_years",n.state.exp_in_years),a.append("highest_qualification",n.state.highest_qualification),a.append("language",n.state.language),a.append("max_tym",n.state.max_tym),a.append("min_tym",n.state.min_tym),null!==n.state.selectedFile&&a.append("img",n.state.selectedFile);var t=localStorage.getItem("astroId");v.a.post("/user/editAstroDetails/".concat(t),a).then((function(e){n.setState({data:e.data.data,fullname:e.data.data.fullname,email:e.data.data.email,mobile:e.data.data.mobile,callCharge:e.data.data.callCharge,all_skills:e.data.data.all_skills,exp_in_years:e.data.data.exp_in_years,highest_qualification:e.data.data.highest_qualification,language:e.data.data.language,max_tym:e.data.data.max_tym,min_tym:e.data.data.min_tym}),n.getData(),N()("Success!","Edited SuccessFull!","success")})).catch((function(e){N()("Error!","You clicked the button!","error")}))},n.state={fullname:"",email:"",mobile:"",img:"",selectedName:"",selectedFile:null,approvedstatus:"",data:{},callCharge:"",all_skills:"",callingStatus:"",dob:"",exp_in_years:"",gender:"",highest_qualification:"",language:"",max_earning_expe:"",min_earning_expe:"",max_tym:"",min_tym:""},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),r.a.createElement("div",{id:"user-profile"},r.a.createElement(d.a,{className:"m-0 justify-content-center"},r.a.createElement(o.a,{lg:"4",md:"4",xl:"4",sm:"12"},r.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},r.a.createElement("div",{className:"profile-img text-center st-1"},r.a.createElement("img",{src:this.state.data.img,alt:"porfileImg",className:"img-fluid img-border rounded-circle box-shadow-1 rt-1"}),r.a.createElement("ul",{className:"lst-1"},r.a.createElement("li",{className:"lst-2"},"Name:",r.a.createElement("span",{className:"lst-3"},this.state.data.fullname)),r.a.createElement("li",{className:"lst-2"},"Mobile:",r.a.createElement("span",{className:"lst-3"},this.state.data.mobile)),r.a.createElement("li",{className:"lst-2"},"Email:",r.a.createElement("span",{className:"lst-3"},this.state.data.email)),r.a.createElement("li",{className:"lst-2"},"CallRate:",r.a.createElement("span",{className:"lst-3"},"Rs ",this.state.data.callCharge)),r.a.createElement("li",{className:"lst-2"},"All Skills:",r.a.createElement("span",{className:"lst-3"},this.state.data.all_skills)),r.a.createElement("li",{className:"lst-2"},"Calling Status:",r.a.createElement("span",{className:"lst-3"},this.state.data.callingStatus)),r.a.createElement("li",{className:"lst-2"},"DOB:",r.a.createElement("span",{className:"lst-3"},this.state.data.dob)),r.a.createElement("li",{className:"lst-2"},"Experience:",r.a.createElement("span",{className:"lst-3"},this.state.data.exp_in_years,"Year")),r.a.createElement("li",{className:"lst-2"},"Gender:",r.a.createElement("span",{className:"lst-3"},this.state.data.gender)),r.a.createElement("li",{className:"lst-2"},"Higher Qualification:",r.a.createElement("span",{className:"lst-3"},this.state.data.highest_qualification)),r.a.createElement("li",{className:"lst-2"},"School/College:",r.a.createElement("span",{className:"lst-3"},this.state.data.clg_scl_name)),r.a.createElement("li",{className:"lst-2"},"Degree Diploma:",r.a.createElement("span",{className:"lst-3"},this.state.data.degree_deploma)),r.a.createElement("li",{className:"lst-2"},"City:",r.a.createElement("span",{className:"lst-3"},this.state.data.crnt_city)),r.a.createElement("li",{className:"lst-2"},"Language:",r.a.createElement("span",{className:"lst-3"},this.state.data.language)),r.a.createElement("li",{className:"lst-2"},"Maximum Earning:",r.a.createElement("span",{className:"lst-3"},"Rs",this.state.data.max_earning_expe)),r.a.createElement("li",{className:"lst-2"},"Minimum Earning:",r.a.createElement("span",{className:"lst-3"},"Rs",this.state.data.min_earning_expe)),r.a.createElement("li",{className:"lst-2"},"Maximum Time:",r.a.createElement("span",{className:"lst-3"},this.state.data.max_tym)),r.a.createElement("li",{className:"lst-2"},"Minimum Time:",r.a.createElement("span",{className:"lst-3"},this.state.data.min_tym)),r.a.createElement("li",{className:"lst-2"},"Available Amount:",r.a.createElement("span",{className:"lst-3"},this.state.data.availableAmt)),r.a.createElement("li",{className:"lst-2"},"Approved Status:",r.a.createElement("span",{className:"lst-3"},this.state.data.approvedstatus)),r.a.createElement("li",{className:"lst-2"},"Avarage Rating:",r.a.createElement("span",{className:"lst-3"},this.state.data.avg_rating)),r.a.createElement("li",{className:"lst-2"},"Facebook Link:",r.a.createElement("span",{className:"lst-3"},this.state.data.fb_link)),r.a.createElement("li",{className:"lst-2"},"Instagram Link:",r.a.createElement("span",{className:"lst-3"},this.state.data.insta_link)),r.a.createElement("li",{className:"lst-2"},"LinkedIn Link:",r.a.createElement("span",{className:"lst-3"},this.state.data.linkedln_link)),r.a.createElement("li",{className:"lst-2"},"Youtube Link:",r.a.createElement("span",{className:"lst-3"},this.state.data.youtube_link)),r.a.createElement("li",{className:"lst-2"},"Other Online PlateForm:",r.a.createElement("span",{className:"lst-3"},this.state.data.other_online_platform)))))),r.a.createElement(o.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},r.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},r.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},r.a.createElement("div",{className:"st-2"},r.a.createElement(p.a,null,r.a.createElement("h4",{className:"mb-3"},"Edit Profile"),r.a.createElement(o.a,null)),r.a.createElement(d.a,{className:"m-0"},r.a.createElement(o.a,{sm:"12",className:"p-0"},r.a.createElement(g.a,null,"Name"),r.a.createElement(E.a,{type:"text",name:"fullname",placeholder:"Name",value:this.state.fullname,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Email"),r.a.createElement(E.a,{type:"email",name:"email",placeholder:"email",disabled:!0,value:this.state.email,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Mobile No."),r.a.createElement("div",{className:"form-group mtb-10"},r.a.createElement(y.a,{countryCodeEditable:!1,className:"mob-int",disabled:!0,country:"in",value:(null===(e=this.state)||void 0===e?void 0:e.mobile).toString(),onChange:function(e){a.setState({mobile:e})}}),""!==this.state.mobileError?r.a.createElement("span",{style:{color:"red"}},this.state.mobileError):null),r.a.createElement(g.a,null,"Call Rate"),r.a.createElement(E.a,{type:"number",name:"callCharge",placeholder:"Call Charge",value:this.state.callCharge,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"All Skills"),r.a.createElement(E.a,{type:"text",name:"all_skills",placeholder:"All Skills",value:this.state.all_skills,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Experience In Year"),r.a.createElement(E.a,{type:"number",name:"exp_in_years",placeholder:"Experience",value:this.state.exp_in_years,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Highest Qualification"),r.a.createElement(E.a,{type:"text",name:"highest_qualification",placeholder:"Highest Qualification",value:this.state.highest_qualification,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Maximum Time"),r.a.createElement(E.a,{type:"number",name:"max_tym",placeholder:"Maximum Time",value:this.state.max_tym,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Language"),r.a.createElement(E.a,{type:"text",name:"language",placeholder:"Language",value:this.state.language,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"Minimum Time"),r.a.createElement(E.a,{type:"number",name:"min_tym",placeholder:"Minimum  Time",value:this.state.min_tym,onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement(g.a,null,"User Image"),r.a.createElement(E.a,{className:"form-control",type:"file",name:"img",onChange:this.onChangeHandler}),r.a.createElement("br",null),r.a.createElement(C.a,{color:"primary",icon:r.a.createElement(f.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(b.a.Ripple,{color:"primary",type:"submit"},"Submit")))))))))))}}]),t}(r.a.Component);a.default=S},820:function(e,a,t){"use strict";var l=t(13),s=t(14),n=t(16),i=t(15),m=t(0),c=t.n(m),r=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=r}}]);
//# sourceMappingURL=113.9e10b45e.chunk.js.map