(this["webpackJsonpdashboard-ui"]=this["webpackJsonpdashboard-ui"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),o=c(14),s=c.n(o),i=c(18),l=c(7),j=c(19),d="TOGGLE_DARK_MODE",b="UPDATE_SELECTED_NAV_TAB_INDEX",u={loading:!1,colorMode:!1,error:""};var h={loading:!1,selectedNavTabIndex:0,error:""};var O=Object(i.b)({toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,colorMode:t.payload,error:""});default:return e}},navigate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,selectedNavTabIndex:t.payload,error:""});default:return e}}}),p=c(50),x=c(51),g=c(56),v=c(55),A=c(6),m=c(9),f=c(21),y=c(105),C=c(107),w=c(103),E=c(104);c(68);function D(){return Object(n.jsxs)("div",{className:"filtersContainer",children:[Object(n.jsx)("div",{className:"memberOverview",children:Object(n.jsx)("p",{})}),Object(n.jsxs)("div",{className:"filterItems",children:[Object(n.jsx)(C.a.Group,{className:"group1",style:{outline:0},children:Object(n.jsxs)(C.a.Control,{as:"select",name:"select",id:"select1",children:[Object(n.jsx)("option",{children:"ABC LLC"}),Object(n.jsx)("option",{children:"ABC INC"}),Object(n.jsx)("option",{children:"ABC PVT LTD"})]})}),Object(n.jsx)(C.a.Group,{className:"group2",children:Object(n.jsxs)(C.a.Control,{as:"select",name:"select",id:"select2",children:[Object(n.jsx)("option",{children:"All"}),Object(n.jsx)("option",{children:"Compliant"}),Object(n.jsx)("option",{children:"Non-Compliant"}),Object(n.jsx)("option",{children:"Eligible for FBI"})]})}),Object(n.jsxs)(w.a,{className:"yearGroup",children:[Object(n.jsx)(E.a,{className:"btn btn-info",onClick:function(e){e.preventDefault()},style:{fontSize:12},children:"MTH"}),Object(n.jsx)(E.a,{className:"btn btn-info",onClick:function(e){e.preventDefault()},style:{fontSize:12},children:"YTD"}),Object(n.jsx)(E.a,{className:"btn btn-info",onClick:function(e){e.preventDefault()},style:{fontSize:12},children:"QTR"})]}),Object(n.jsx)(C.a.Group,{className:"group3",children:Object(n.jsxs)(C.a.Control,{as:"select",name:"select",id:"select3",children:[Object(n.jsx)("option",{children:"2020"}),Object(n.jsx)("option",{children:"2019"}),Object(n.jsx)("option",{children:"2018"}),Object(n.jsx)("option",{children:"2017"})]})}),Object(n.jsx)(C.a.Group,{className:"group4",children:Object(n.jsxs)(C.a.Control,{as:"select",name:"select",id:"select4",children:[Object(n.jsx)("option",{children:"Jan"}),Object(n.jsx)("option",{children:"Feb"}),Object(n.jsx)("option",{children:"Mar"}),Object(n.jsx)("option",{children:"Apr"}),Object(n.jsx)("option",{children:"May"}),Object(n.jsx)("option",{children:"Jun"}),Object(n.jsx)("option",{children:"Jul"}),Object(n.jsx)("option",{children:"Aug"}),Object(n.jsx)("option",{children:"Sep"}),Object(n.jsx)("option",{children:"Oct"}),Object(n.jsx)("option",{children:"Nov"}),Object(n.jsx)("option",{children:"Dec"})]})}),Object(n.jsx)(E.a,{className:"export",color:"primary",onClick:function(e){e.preventDefault()},style:{fontSize:12},children:"Export"})]})]})}var I=c(109),U=c.p+"static/media/arrowUpGreen.5ae4a16e.svg",B=c.p+"static/media/arrowDownRed.564e0669.svg",N=function(e){switch(e){case"Total Transactions":return U;case"Base Rebate":return B;case"Estimated Growth Rebate":return U;case"Estimated Gain Share":return B;case"FBI Rebate":return U;case"Admin Fees":return B;case"Total Rebate":return U;case"Excess Revenue Points":return B;default:return}},T=(c(70),function(e){var t=e.cardItems;return Object(n.jsx)("div",{className:"cardsContainer",children:t.map((function(e,t){return Object(n.jsx)(I.a,{className:"rebateCard",children:Object(n.jsxs)(I.a.Body,{children:[Object(n.jsx)(I.a.Text,{className:"cardTitle",children:e.title}),Object(n.jsx)(I.a.Text,{className:"cardSubtitle",children:e.value}),Object(n.jsxs)("div",{className:"cardBottom",children:[Object(n.jsx)(I.a.Text,{children:e.status}),Object(n.jsxs)("div",{className:"cardRatings",children:[Object(n.jsx)(I.a.Text,{children:e.ratings}),e.ratings?Object(n.jsx)("img",{src:N(e.title),alt:"noImage"}):Object(n.jsx)("p",{style:{fontSize:12,margin:0},children:"NA"})]})]})]})},t)}))})}),G=c(25),Q=c.n(G),k=(c(39),{columns:[["Data1",30,200,100,400,150,250],["Data2",50,20,10,40,15,25,50]]});function F(){return Object(n.jsx)("div",{children:Object(n.jsx)(Q.a,{data:k})})}var R={columns:[["Data1",30,200,100,400,150,250],["Data2",50,20,10,40,15,25,50]]};function H(){return Object(n.jsx)("div",{children:Object(n.jsx)(Q.a,{data:R})})}c(73);function S(){return Object(n.jsxs)("div",{className:"chartsContainer",children:[Object(n.jsx)(F,{}),Object(n.jsx)(H,{})]})}var K=c(26),z=c.n(K);var q=function(){var e=Object(l.c)((function(e){return e.toggle.colorMode})),t=Object(a.useState)([]),c=Object(f.a)(t,2),r=c[0],o=c[1],s=Object(a.useState)(!1),i=Object(f.a)(s,2),j=i[0],d=i[1];return Object(a.useEffect)((function(){z.a.get("/data/cards.json").then((function(e){var t=setTimeout((function(){o(e.data),d(!0)}),2e3);return function(){return clearTimeout(t)}})).catch((function(e){console.log(e)}))}),[]),Object(n.jsxs)("div",{style:{paddingTop:70,backgroundColor:e?"#242424":"#FFFFFF"},children:[Object(n.jsx)(D,{}),Object(n.jsxs)("div",{style:{minHeight:346},children:[Object(n.jsxs)("div",{style:{display:"".concat(j?"none":"block"),margin:"0 auto",position:"absolute",top:280,left:"50%",marginLeft:"-15px"},children:[Object(n.jsx)(y.a,{animation:"grow",variant:"warning"}),Object(n.jsx)("p",{style:{display:"".concat(j?"none":"block"),color:"orange",marginLeft:"-15px"},children:"Loading..."})]}),Object(n.jsx)(T,{cardItems:r})]}),Object(n.jsx)(S,{})]})},M=c(106),L=c(108),X=c(34),J=c(52),P=c.n(J),V=c.p+"static/media/contactUs.183e788f.svg",Z=c.p+"static/media/logout.ab1a4518.svg",Y=(c(94),c(95),function(e){var t=Object(l.b)(),c=Object(l.c)((function(e){return e.toggle.colorMode})),r=Object(l.c)((function(e){return e.navigate.selectedNavTabIndex})),o=Object(a.useState)([]),s=Object(f.a)(o,2),i=s[0],j=s[1];return Object(a.useEffect)((function(){z.a.get("/data/navigations.json").then((function(e){j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsx)("div",{className:"navigationContainer",children:Object(n.jsxs)(M.a,{collapseOnSelect:!0,expand:"lg",style:{backgroundColor:c?"#242424":"#FFFFFF"},children:[Object(n.jsx)(M.a.Brand,{children:Object(n.jsx)(X.a,{to:"/",style:{marginRight:10},onClick:function(){return t({type:"UPDATE_SELECTED_NAV_TAB_INDEX",payload:0})},children:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"noImage",height:"40"})})}),Object(n.jsx)(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(M.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsx)(L.a,{className:"mr-auto",children:i&&i.map((function(e,a){return Object(n.jsx)("div",{children:Object(n.jsx)(L.a.Link,{to:e.link,className:r===e.id?"selectedNavTab":"",onClick:function(){ce.push("".concat(e.link)),t({type:"UPDATE_SELECTED_NAV_TAB_INDEX",payload:e.id})},style:{color:c?"#FFFFFF":"#242424"},children:e.title})},a)}))}),Object(n.jsxs)(L.a,{className:"nav-right",children:[Object(n.jsx)(E.a,{className:"demo-dashboard-btn",children:"Demo Dashboard"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"contact-us",src:V,alt:"noImage"}),Object(n.jsx)("img",{className:"logout",src:Z,alt:"noImage"}),Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:10},children:Object(n.jsx)(P.a,{defaultChecked:c,icons:!1,onChange:function(){t(c?{type:"TOGGLE_DARK_MODE",payload:!1}:{type:"TOGGLE_DARK_MODE",payload:!0})}})})]})]})]})]})})});function W(){var e=Object(l.c)((function(e){return e.toggle.colorMode}));return Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e?"black":"white",height:"100vh",color:e?"yellow":"purple"},children:"MemberOverview Component"})}function _(){var e=Object(l.c)((function(e){return e.toggle.colorMode}));return Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e?"black":"white",height:"100vh",color:e?"yellow":"purple"},children:"Verified Component"})}function $(){var e=Object(l.c)((function(e){return e.toggle.colorMode}));return Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e?"black":"white",height:"100vh",color:e?"yellow":"purple"},children:"Invoices Component"})}function ee(){var e=Object(l.c)((function(e){return e.toggle.colorMode}));return Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e?"black":"white",height:"100vh",color:e?"yellow":"purple"},children:"PurchaseOrders Component"})}function te(){var e=Object(l.c)((function(e){return e.toggle.colorMode}));return Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e?"black":"white",height:"100vh",color:e?"yellow":"purple"},children:"ConversionOpportunity Component"})}var ce=Object(m.a)(),ne=function(e){Object(g.a)(c,e);var t=Object(v.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(n.jsx)(A.b,{history:ce,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(Y,{}),Object(n.jsxs)(A.c,{children:[Object(n.jsx)(A.a,{exact:!0,path:"/",children:Object(n.jsx)(q,{})}),Object(n.jsx)(A.a,{path:"/member-overview",children:Object(n.jsx)(W,{})}),Object(n.jsx)(A.a,{path:"/verified",children:Object(n.jsx)(_,{})}),Object(n.jsx)(A.a,{path:"/invoices",children:Object(n.jsx)($,{})}),Object(n.jsx)(A.a,{path:"/purchase-orders",children:Object(n.jsx)(ee,{})}),Object(n.jsx)(A.a,{path:"/conversion-opportunity",children:Object(n.jsx)(te,{})})]})]})})}}]),c}(a.Component);c(99),c(100);var ae=function(e){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(c){console.log(c)}}(),re=Object(i.c)(O,ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());re.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(c){console.log(c)}}(re.getState())})),s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{store:re,children:Object(n.jsx)(ne,{})})}),document.getElementById("root"))},68:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){},95:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.04ac9562.chunk.js.map