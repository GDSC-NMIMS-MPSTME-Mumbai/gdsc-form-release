(this["webpackJsonpgdsc-form-release"]=this["webpackJsonpgdsc-form-release"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(80),a=n.n(c),i=(n(214),n.p,n(215),n(209)),s=n(206),o=n.n(s),d=n(81),u=n(129),l=n.n(u),f=n(10);function h(){Object(r.useEffect)((function(){}));var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){setTimeout((function(){!function(){try{var e=document.getElementById("zeIframe"),t=e.contentWindow||e,n=e.contentDocument||t.document,r=n.createElement("script");r.append("\n                window.onload = function() {\n                    document.querySelector(\"html\").addEventListener('contextmenu', (e) => {\n                        e.preventDefault();\n                    });\n                    document.onkeydown = function (e) {\n                        if (e.keyCode == 123) {\n                            return false;\n                        }\n                        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {\n                            return false;\n                        }\n                        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {\n                            return false;\n                        }\n                        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {\n                            return false;\n                        }\n                    }\n                }\n            "),n.documentElement.appendChild(r)}catch(c){console.log("eeror",c)}}()}),1e3)}),[n]);var a={signInFlow:"popup",signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(e){e.user&&e.user.email&&e.user.email.includes("nmims.edu.in")?c(e):(l.a.toast({html:"You must login with an nmims email domain. Logging out..."}),d.a.auth().signOut().then((function(){l.a.toast({html:"Logged out. Refresh to continue"})})).catch((function(e){console.log("Error caught while logging out:",e)})))}}};return Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)("div",{style:{height:"95vh"},children:Object(f.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeZtLUO3sTUi-aGuuRxvyk37BAVbDjEN0fYM5CIwCQ_iCy48Q/viewform?embedded=true",width:"80%",height:"100%",style:{margin:"0 auto"},frameborder:"0",marginheight:"0",marginwidth:"0",id:"zeIframe",children:"Loading\u2026"})}):Object(f.jsx)("div",{className:"valign-wrapper",style:{height:"95vh",width:"100vw",justifySelf:"center",alignSelf:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsx)("h4",{children:"Please login using NMIMS ID"}),Object(f.jsx)(o.a,{uiConfig:a,firebaseAuth:d.a.auth()})]})})})}var m=function(){return Object(r.useEffect)((function(){document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.onkeydown=function(e){return 123!=e.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0)))}}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(h,{})})},g=n(42),b=n(130),j=n(41),p=n(56),y=Object(g.b)({firestore:j.firestoreReducer,firebase:p.firebaseReducer}),I=n(208),O=n(4),v=(n(410),n(131),n(411),{apiKey:"AIzaSyAQC4XQouIZ5wQGaa7Fe1sAHp0YdXU4keo",authDomain:"gdsc-form-release.firebaseapp.com",projectId:"gdsc-form-release",storageBucket:"gdsc-form-release.appspot.com",messagingSenderId:"321669275434",appId:"1:321669275434:web:72bd6ac5f4a1cbbc998853",measurementId:"G-1TCKGL8GFP"}),x={apiKey:v.apiKey,authDomain:v.authDomain,databaseURL:v.databaseURL,projectId:v.projectId,storageBucket:v.storageBucket,messagingSenderId:v.messagingSenderId,appId:v.appId,measurementId:v.measurementId};O.a.initializeApp(x);O.a.firestore(),O.a.storage();var C=O.a,w={userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},k=Object(g.d)(y,Object(g.c)(Object(g.a)(I.a),Object(j.reduxFirestore)(C)));O.a,k.dispatch,j.createFirestoreInstance;function A(e){var t=e.children,n=Object(b.b)((function(e){return e.firebase.auth}));return Object(p.isLoaded)(n)?t:Object(f.jsx)("div",{className:"progress",children:Object(f.jsx)("div",{className:"indeterminate"})})}a.a.render(Object(f.jsx)(b.a,{store:k,children:Object(f.jsx)(p.ReactReduxFirebaseProvider,{firebase:O.a,config:w,dispatch:k.dispatch,createFirestoreInstance:j.createFirestoreInstance,children:Object(f.jsx)(A,{children:Object(f.jsx)(m,{})})})}),document.getElementById("root"))}},[[412,1,2]]]);
//# sourceMappingURL=main.cfe62409.chunk.js.map