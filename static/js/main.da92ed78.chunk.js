(this.webpackJsonptrivia_game=this.webpackJsonptrivia_game||[]).push([[0],{146:function(t,e){},166:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n(0),c=n.n(r),a=n(13),o=n.n(a),s=(n(98),n(50)),l=n.n(s),u=n(76),j=n(15),d=n(77),b=n(29),h=n(190),x=n(193),O=n(186),m=n(187),f=n(185),v=n(192),g=n(85),y=n(191),p=n(42),S=n.n(p),w=n(194),C=n(195),k=n(78),Q=n.n(k),A=n(7),T=Object(A.a)((function(){return{root:{borderRadius:25,width:350,height:55,margin:10,fontWeight:900,color:"white",boxShadow:"none",backgroundColor:"rgba(0, 0, 0, 0.12)","&:hover":{boxShadow:"none",backgroundColor:"rgba(0, 0, 0, 0.12)"}}}}))(f.a),F=n(82),z=n.n(F),N=function(t){var e,n,r=t.classes,c=t.questions,a=t.currentQuestion,o=t.setFormat,s=t.setCurrentQuestion,l=t.setQuestions;return Object(i.jsxs)(x.a,{textAlign:"center",width:"100%",children:[Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(m.a,{variant:"h4",className:r.TittleAndSubtitle,children:c[a]?z()(c[a].question):null})}),null===(e=c[a])||void 0===e||null===(n=e.incorrect_answers)||void 0===n?void 0:n.map((function(t,e){return Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(T,{color:"primary",variant:"contained",onClick:function(){return o(2)},children:t})},e)})),a<=4&&Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(T,{color:"primary",variant:"contained",onClick:function(){return o(3)},children:c[a]?c[a].correct_answer:null})}),5===a&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsxs)(m.a,{variant:"h1",className:r.TittleAndSubtitle,children:["Your score is: ",a,"/",a," "]})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{color:"secondary",variant:"contained",className:r.buttonStyle,onClick:function(){return s(0),l(),void o(0)},children:"Try Again"})})]}),Object(i.jsx)(m.a,{variant:"caption",style:{color:"white",fontWeight:900},children:a+"/"+c.length})]})},I=n(188),_=n(83),B=n.n(_),P=function(t){var e=t.classes,n=t.currentQuestion,c=t.setCurrentQuestion,a=t.setFormat,o=t.setQuestions,s=Object(r.useState)(!0),l=Object(j.a)(s,2),u=l[0],d=l[1];Object(r.useEffect)((function(){setTimeout((function(){d(!1)}),1e3)}),[]);return Object(i.jsx)(x.a,{textAlign:"center",width:"100%",marginTop:"20%",children:u?Object(i.jsx)(I.a,{children:Object(i.jsx)(B.a,{style:{width:200,height:400,color:"white"}})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(m.a,{variant:"h1",className:e.TittleAndSubtitle,style:{fontSize:200},children:n})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{color:"secondary",variant:"contained",className:e.buttonStyle,onClick:function(){return c(0),o(),void a(0)},children:"Try Again"})})]})})},W=n(84),q=n.n(W),D=function(t){var e=t.classes,n=t.setCurrentQuestion,r=t.currentQuestion,c=t.setFormat;return Object(i.jsxs)(x.a,{textAlign:"center",width:"100%",children:[Object(i.jsx)(I.a,{children:Object(i.jsx)(q.a,{style:{width:200,height:400,color:"white"}})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{color:"secondary",variant:"contained",className:e.buttonStyle,onClick:function(){n(++r),c(1)},children:"Next"})})]})},E=n.p+"static/media/ui_tap-variant-01.204f5440.wav",J=n.p+"static/media/ui_unlock.7011b899.wav",L=Object(g.a)();function R(t){return Object(i.jsx)(C.a,Object(d.a)({elevation:6,variant:"filled"},t))}L.typography.h1=Object(b.a)({fontSize:"2.2rem","@media (min-width:600px)":{fontSize:"3.5rem"}},L.breakpoints.up("md"),{fontSize:"5rem"}),L.typography.h4=Object(b.a)({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"2.5rem"}},L.breakpoints.up("md"),{fontSize:"3rem"});var G=Object(h.a)((function(){return{buttonStyle:{borderRadius:25,width:350,height:55,margin:10,fontWeight:900,color:"white"},TittleAndSubtitle:{fontWeight:900,color:"white",margin:10}}})),H=function(){var t=G(),e=new Audio(E),n=new Audio(J),c=Object(r.useState)(0),a=Object(j.a)(c,2),o=a[0],s=a[1],d=Object(r.useState)(0),b=Object(j.a)(d,2),h=b[0],g=b[1],p=Object(r.useState)(),C=Object(j.a)(p,2),k=C[0],A=C[1],F=Object(r.useState)(!1),z=Object(j.a)(F,2),I=z[0],_=z[1],B=Object(r.useState)("easy"),W=Object(j.a)(B,2),q=W[0],H=W[1],M=Object(r.useState)(),Y=Object(j.a)(M,2),K=Y[0],U=Y[1],V=function(t){X(e),H(t)},X=function(t){t.play()},Z=function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,Q.a.get("https://opentdb.com/api.php?amount=5&category=15&difficulty=".concat(q));case 4:e=t.sent,A(e.data.results),X(n),_(!1),s(1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),U(t.t0.message),_(!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return Object(i.jsxs)(y.a,{theme:L,children:[Object(i.jsx)(w.a,{open:K,autoHideDuration:6e3,onClose:function(){return U()},anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(i.jsx)(R,{onClose:function(){return U()},severity:"error",children:K&&K})}),0===o?Object(i.jsxs)(x.a,{textAlign:"center",width:"100%",children:[Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(m.a,{variant:"h1",className:t.TittleAndSubtitle,style:{marginBottom:30},children:"TriviaTime"})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(m.a,{variant:"h4",className:t.TittleAndSubtitle,children:"Pick your level of difficulty"})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(T,{color:"primary",variant:"contained",onClick:function(){return V("easy")},startIcon:"easy"===q&&Object(i.jsx)(S.a,{color:"secondary",fontSize:"large"}),children:"Go easy on me"})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(T,{color:"primary",variant:"contained",onClick:function(){return V("medium")},startIcon:"medium"===q&&Object(i.jsx)(S.a,{color:"secondary",fontSize:"large"}),children:"Bring it on"})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(T,{color:"primary",variant:"contained",onClick:function(){return V("hard")},startIcon:"hard"===q&&Object(i.jsx)(S.a,{color:"secondary",fontSize:"large"}),children:"Insanity mode"})}),Object(i.jsx)(O.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{color:"secondary",variant:"contained",className:t.buttonStyle,onClick:function(){return Z()},endIcon:I&&Object(i.jsx)(v.a,{color:"primary"}),children:"Play Now"})})]}):1===o&&k?Object(i.jsx)(N,{classes:t,questions:k,currentQuestion:h,setFormat:s,setCurrentQuestion:g,setQuestions:A}):2===o?Object(i.jsx)(P,{classes:t,currentQuestion:h,setCurrentQuestion:g,setFormat:s,setQuestions:A}):3===o?Object(i.jsx)(D,{classes:t,setCurrentQuestion:g,currentQuestion:h,setFormat:s}):null]})};var M=function(){return Object(i.jsx)(H,{})},Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),Y()},98:function(t,e,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.da92ed78.chunk.js.map