(this.webpackJsonpoff_caf_react=this.webpackJsonpoff_caf_react||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),i=n(19),j=n.n(i),l=(n(80),n(7)),s=n(14),r=n(70),d=n(161),b=n(130),o=n(131),O=n(132),h=n(133),x=n(162),u=n(163),m=n(134),g=n(164),p=n(152),f=n(154),v=n(155),y=n(28),_=n(8),w=n(128),C=n(129),z=n(135),F=n(136),L=n(137),S=n(138),k=n(139),N=n(140),E=n(141),A=n(69),I=n(143),D=n(149),R=n(150),P=n(20),T=n.n(P),U=n(142),M=n(144),Z=n(145),B=n(146),J=n(147),$=n(148),G=Object(s.b)({key:"form_state",default:{fullname:"",orgname:"",empid:"",mobnum:"",emailid:"",photo:null}}),H=Object(s.b)({key:"file_state",default:["warning","Please select a png/jpg file (<1MB)"]}),V=Object(s.c)({key:"form_valid",get:function(e){var t=(0,e.get)(G),n={fullname_valid:/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(t.fullname),orgname_valid:/[a-zA-Z0-9 -]/g.test(t.orgname),empid_valid:/[A_Z0-9]/g.test(t.empid),mobnum_valid:/^(\+\d{1,3}[- ]?)?\d{10}$/g.test(t.mobnum),emailid_valid:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(t.emailid),photo_valid:null!==t.photo};return Object.keys(n).every((function(e){return n[e]}))?n.all_valid=!1:n.all_valid=!0,n}});function W(){var e=Object(s.d)(G),t=Object(l.a)(e,2),n=t[0],i=t[1],j=Object(s.d)(H),x=Object(l.a)(j,2),u=x[0],g=x[1],p=Object(s.e)(V),f=Object(s.f)(G),v=Object(s.f)(H),P=Object(a.useRef)(null),W=Object(a.useState)(Object(c.jsxs)(w.a,{color:"info",style:{margin:"0px"},children:[Object(c.jsx)(C.a,{color:"info",style:{width:"3rem",height:"3rem"}}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:"Please Wait, Your Patience is Appreciated"})]})),Y=Object(l.a)(W,2),q=Y[0],K=Y[1],Q=Object(a.useState)(!1),X=Object(l.a)(Q,2),ee=X[0],te=X[1],ne=function(){return te(!ee)},ce=Object(a.useState)(!1),ae=Object(l.a)(ce,2),ie=ae[0],je=ae[1];function le(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(y.a)({},n,c))}))}function se(){return Object(c.jsxs)(d.a,{isOpen:ee,toggle:ne,size:"lg",centered:!0,children:[Object(c.jsx)(b.a,{children:" Preview "}),Object(c.jsx)(o.a,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(h.a,{sm:5,children:[Object(c.jsxs)(m.a,{children:["Full Name: ",n.fullname]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{children:["Organization Name: ",n.orgname]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{children:["Employment ID: ",n.empid]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{children:["Mobile Number: ",n.mobnum]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{children:["Email ID: ",n.emailid]})]}),Object(c.jsx)(h.a,{sm:7,children:Object(c.jsx)("img",{width:"70%",height:"auto",id:"profpic",src:n.photo,alt:"profie_img"})})]})})]})}return Object(c.jsxs)(z.a,{children:[Object(c.jsx)(F.a,{children:Object(c.jsx)(L.a,{tag:"h5",children:"Register"})}),Object(c.jsx)(F.a,{children:Object(c.jsx)(S.a,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(h.a,{sm:8,children:[Object(c.jsx)(k.a,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(E.a,{addonType:"prepend",children:Object(c.jsx)(A.a,{children:Object(c.jsx)(U.a,{size:24})})}),Object(c.jsx)(I.a,{type:"text",name:"fullname",placeholder:"Full Name",value:n.fullname,onChange:le,valid:p.fullname_valid,invalid:!p.fullname_valid})]})}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(E.a,{addonType:"prepend",children:Object(c.jsx)(A.a,{children:Object(c.jsx)(M.a,{size:24})})}),Object(c.jsx)(I.a,{type:"text",name:"orgname",placeholder:"Organization Name",value:n.orgname,onChange:le,valid:p.orgname_valid,invalid:!p.orgname_valid})]})}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(E.a,{addonType:"prepend",children:Object(c.jsx)(A.a,{children:Object(c.jsx)(Z.a,{size:24})})}),Object(c.jsx)(I.a,{type:"text",name:"empid",placeholder:"Employee ID No",value:n.empid,onChange:le,valid:p.empid_valid,invalid:!p.empid_valid})]})}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(E.a,{addonType:"prepend",children:Object(c.jsx)(A.a,{children:Object(c.jsx)(B.a,{size:24})})}),Object(c.jsx)(I.a,{type:"text",name:"mobnum",placeholder:"Mobile Number",value:n.mobnum,onChange:le,valid:p.mobnum_valid,invalid:!p.mobnum_valid})]})}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(E.a,{addonType:"prepend",children:Object(c.jsx)(A.a,{children:Object(c.jsx)(J.a,{size:24})})}),Object(c.jsx)(I.a,{type:"email",name:"emailid",placeholder:"Email",value:n.emailid,onChange:le,valid:p.emailid_valid,invalid:!p.emailid_valid})]})})]}),Object(c.jsx)(h.a,{sm:4,children:Object(c.jsxs)(k.a,{children:[Object(c.jsxs)(r.a,{color:u[0],onClick:function(){return P.current.click()},size:"lg",children:[Object(c.jsx)($.a,{size:56}),Object(c.jsx)("div",{children:"Upload ID Card"})]}),Object(c.jsx)(I.a,{type:"file",id:"idpic",style:{display:"none"},name:"photo",label:"Insert a JPG or PNG file",accept:"image/jpeg,image/png",onChange:function(e){var t=e.target.files;if(0===t.length)g(["warning","No file selected"]),i((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:null})}));else if(t[0].size/1024>1024)g(["danger","File size Violation"]),i((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:null})}));else if("image/png"===t[0].type||"image/jpeg"===t[0].type){var n=new FileReader;n.addEventListener("loadend",(function(){g(["success","Upload Success"]),i((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:n.result})}))})),n.addEventListener("error",(function(){g(["danger","Error parsing file"]),i((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:null})}))})),n.readAsDataURL(t[0])}else"image/png"===t[0].type&&"image/jpeg"===t[0].type||(g(["danger","Not an Image file"]),i((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:null})})))},innerRef:P}),Object(c.jsx)(D.a,{children:u[1]})]})})]})})}),Object(c.jsx)(R.a,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(h.a,{sm:6,children:[Object(c.jsx)(r.a,{outline:!0,type:"primary",id:"preview",onClick:ne,disabled:p.all_valid,children:"Preview"}),Object(c.jsx)(se,{})]}),Object(c.jsxs)(h.a,{sm:6,children:[Object(c.jsx)(r.a,{type:"primary",onClick:function(){je(!0),T.a.post("/api/register",n).then((function(e){"FAIL"===e.data.status?K(Object(c.jsx)(w.a,{color:"warning",style:{margin:"0px"},isOpen:!0,toggle:function(){return je(!1)},children:e.data.msg})):"SUCCESS"===e.data.status&&(K(Object(c.jsxs)(w.a,{color:"success",style:{margin:"0px"},isOpen:!0,toggle:function(){return je(!1)},children:["Registered with Registration ID: ",e.data.msg]})),f(),v())})).catch((function(e){K(Object(c.jsx)(w.a,{color:"danger",style:{margin:"0px"},isOpen:!0,toggle:function(){return je(!1)},children:"Registration Failed"}))}))},disabled:p.all_valid,children:"Submit"}),Object(c.jsx)(d.a,{isOpen:ie,toggle:function(){return je(!ie)},centered:!0,backdrop:"static",keyboard:!0,className:"text-center",children:Object(c.jsx)(o.a,{style:{padding:"0px"},children:q})})]})]})})]})}function Y(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),i=Object(l.a)(n,2),j=i[0],s=i[1];return Object(c.jsxs)(z.a,{body:!0,children:[Object(c.jsx)(L.a,{tag:"h5",children:"Login"}),Object(c.jsxs)(S.a,{children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(I.a,{type:"email",name:"email",placeholder:"Email",innerRef:t})}),Object(c.jsx)(r.a,{color:"primary",onClick:function(){""!==t.current.value&&T.a.post("/api/login",{user_email:t.current.value}).then((function(t){"SUCCESS"===t.data.status?e.setLogin([t.data.user,t.data.msg]):"FAIL"===t.data.status&&s(Object(c.jsx)(w.a,{color:"danger",children:t.data.msg}))})).catch((function(e){s(Object(c.jsx)(w.a,{color:"danger",children:"Connection Error! Try again Later"}))}))},children:"Login"}),Object(c.jsx)("div",{children:Object(c.jsx)(m.a,{style:{padding:"10px"},children:j})})]})]})}var q=n(151),K=n(153),Q=n(26);function X(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],j=n[1],s=function(){return j(!i)},y=function(){e.setLogin(null),window.location.href="/menu"},_=function(){return null===e.login?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.a,{color:"primary",onClick:s,children:"Login/SignUp"}),Object(c.jsxs)(d.a,{isOpen:i,toggle:s,size:"xl",className:"text-center",centered:!0,unmountOnClose:!1,children:[Object(c.jsx)(b.a,{toggle:s,children:"Registration/Login Page"}),Object(c.jsx)(o.a,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(h.a,{sm:"7",children:Object(c.jsx)(W,{})}),Object(c.jsx)(h.a,{sm:"5",children:Object(c.jsx)(Y,{setLogin:e.setLogin})})]})})]})]}):"Admin"===e.login[0]?Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)(q.a,{size:28}),Object(c.jsxs)(m.a,{style:{marginLeft:"10px"},children:["Hi ",e.login[0]]})]}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(Q.b,{to:"/admin/dashboard",children:Object(c.jsx)(m.a,{children:" Dashboard "})})}),Object(c.jsx)(p.a,{divider:!0}),Object(c.jsxs)(p.a,{onClick:y,children:[Object(c.jsx)(K.a,{size:28}),Object(c.jsx)(m.a,{style:{marginLeft:"10px"},children:"Logout"})]})]})]}):Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)(q.a,{size:28}),Object(c.jsxs)(m.a,{style:{marginLeft:"10px"},children:["Hi ",e.login[0]]})]}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(Q.b,{to:"/profile",children:Object(c.jsx)(m.a,{children:" Profile "})})}),Object(c.jsx)(p.a,{divider:!0}),Object(c.jsxs)(p.a,{onClick:y,children:[Object(c.jsx)(K.a,{size:28}),Object(c.jsx)(m.a,{style:{marginLeft:"10px"},children:"Logout"})]})]})]})};return Object(c.jsxs)(f.a,{light:!0,className:"bar",style:{backgroundColor:"#101820FF"},children:[Object(c.jsx)(v.a,{children:Object(c.jsx)(Q.b,{to:"/menu",children:Object(c.jsx)(m.a,{className:"text-white",children:Object(c.jsx)("h4",{children:"Office Cafeteria"})})})}),Object(c.jsx)(_,{})]})}var ee=n(13),te=n(156),ne=n(157),ce=n(158),ae=n(159);function ie(e){var t=function(){return e.loading?Object(c.jsx)("div",{children:"....Loading"}):Object(c.jsx)("span",{children:e.menu.map((function(e){return Object(c.jsxs)(z.a,{children:[Object(c.jsx)(te.a,{width:"100%",height:"100%",src:e.picurl,alt:e.item}),Object(c.jsxs)(F.a,{children:[Object(c.jsx)(L.a,{tag:"h5",children:e.item}),Object(c.jsx)(ne.a,{children:e.category})]})]})}))})};return Object(c.jsx)(ce.a,{className:"themed-container",fluid:!0,style:{background:"#F2AA4CFF",paddingTop:"20px"},children:Object(c.jsx)(ae.a,{children:Object(c.jsx)(t,{})})})}function je(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),i=n[0],j=n[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),d=r[0],b=r[1];return Object(a.useEffect)((function(){null===e.emailid?window.location.href="/menu":T.a.post("/api/profile",{emailid:e.emailid[1]}).then((function(e){b(e.data.msg),j(!1)})).catch((function(e){return window.location.href="/menu"}))}),[]),Object(c.jsx)(ce.a,{fluid:!0,className:"themed-container",style:{padding:"30px"},children:Object(c.jsx)(ce.a,{style:{padding:"30px",background:"#F2AA4CFF"},children:i?Object(c.jsx)(m.a,{children:" Loading... "}):Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(h.a,{sm:7,children:[Object(c.jsxs)(m.a,{style:{fontSize:"28px"},children:["Full Name: ",d.fullname]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{style:{fontSize:"28px"},children:["Organization Name: ",d.orgname]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{style:{fontSize:"28px"},children:["Employment ID: ",d.empid]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{style:{fontSize:"28px"},children:["Mobile Number: ",d.mobnum]}),Object(c.jsx)("br",{}),Object(c.jsxs)(m.a,{style:{fontSize:"28px"},children:["Email ID: ",d.emailid]})]}),Object(c.jsx)(h.a,{sm:5,children:Object(c.jsx)("img",{id:"profpic",width:"90%",height:"auto",src:d.photo,alt:"profie_img"})})]})})})}var le=n(160);function se(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],j=n[1],s=Object(a.useState)(!0),r=Object(l.a)(s,2),d=r[0],b=r[1];Object(a.useEffect)((function(){null===e.login?window.location.href="/menu":T.a.get("/api/dashboard").then((function(e){j(e.data.msg),b(!1)})).catch((function(e){return console.log(e)}))}),[]);var o=function(){return Object(c.jsx)(c.Fragment,{children:i.map((function(e){if("Admin"!==e.fullname)return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e._id}),Object(c.jsx)("td",{children:e.fullname}),Object(c.jsx)("td",{children:e.orgname}),Object(c.jsx)("td",{children:e.empid}),Object(c.jsx)("td",{children:e.mobnum}),Object(c.jsx)("td",{children:e.emailid})]})}))})};return Object(c.jsx)(ce.a,{className:"themed-container",fluid:!0,style:{background:"#F2AA4CFF",padding:"20px"},children:Object(c.jsxs)(le.a,{bordered:!0,style:{background:"white"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Registration ID"}),Object(c.jsx)("th",{children:"Full Name"}),Object(c.jsx)("th",{children:"Organisation Name"}),Object(c.jsx)("th",{children:"Employee ID"}),Object(c.jsx)("th",{children:"Mobile Number"}),Object(c.jsx)("th",{children:"Email ID"})]})}),Object(c.jsx)("tbody",{children:d?null:Object(c.jsx)(o,{})})]})})}var re=Object(s.b)({key:"login",default:null}),de=Object(s.b)({key:"menu",default:null});function be(){var e=Object(s.d)(re),t=Object(l.a)(e,2),n=t[0],i=t[1],j=Object(s.d)(de),r=Object(l.a)(j,2),d=r[0],b=r[1],o=Object(a.useState)(!0),O=Object(l.a)(o,2),h=O[0],x=O[1];return Object(a.useEffect)((function(){T.a.get("/api/menulist").then((function(e){b(e.data.list),x(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(X,{login:n,setLogin:i}),Object(c.jsxs)(ee.d,{children:[Object(c.jsx)(ee.b,{exact:!0,path:"/menu",children:Object(c.jsx)(ie,{menu:d,loading:h})}),Object(c.jsx)(ee.b,{path:"/profile",children:Object(c.jsx)(je,{emailid:n})}),Object(c.jsx)(ee.b,{path:"/admin/dashboard",children:Object(c.jsx)(se,{login:n})}),Object(c.jsx)(ee.a,{to:"/menu"})]})]})}var oe=function(){return Object(c.jsx)(s.a,{children:Object(c.jsx)(Q.a,{children:Object(c.jsx)(be,{})})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,j=t.getTTFB;n(e),c(e),a(e),i(e),j(e)}))};j.a.render(Object(c.jsx)(oe,{}),document.getElementById("root")),Oe()}},[[127,1,2]]]);
//# sourceMappingURL=main.da585353.chunk.js.map