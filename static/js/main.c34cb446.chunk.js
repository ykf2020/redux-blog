(this["webpackJsonpredux-blog"]=this["webpackJsonpredux-blog"]||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var c,r=n(0),o=n(14),i=n.n(o),a=n(3),s=n(4),u=n(5),j="token",b=function(t){localStorage.setItem(j,t)},d=function(){return localStorage.getItem(j)},l="https://student-json-api.lidemy.me",h=function(t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_page=").concat(t,"&_limit=").concat(5)).then((function(t){return t.json()}))},O=function(){var t=d();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()}))},f=n(2),p=n(6),x=n(13),g=Object(x.b)({name:"user",initialState:{user:""},reducers:{setUser:function(t,e){t.user=e.payload}}}),v=g.actions.setUser,m=g.reducer,y=n(1),S=s.a.div(c||(c=Object(a.a)(["\n  color: red;\n"])));function w(){var t=Object(p.b)(),e=Object(r.useState)(""),n=Object(u.a)(e,2),c=n[0],o=n[1],i=Object(r.useState)(""),a=Object(u.a)(i,2),s=a[0],j=a[1],d=Object(r.useState)(),h=Object(u.a)(d,2),x=h[0],g=h[1],m=Object(f.f)();return Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(null),function(t,e){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(t){return t.json()}))}(c,s).then((function(e){if(0===e.ok)return g(e.message);b(e.token),O().then((function(e){if(1!==e.ok)return b(null),g(e.toString());t(v(e.data)),m.push("/")}))}))},children:[Object(y.jsxs)("div",{children:["username:"," ",Object(y.jsx)("input",{value:c,onChange:function(t){return o(t.target.value)}})]}),Object(y.jsxs)("div",{children:["password:"," ",Object(y.jsx)("input",{type:"password",value:s,onChange:function(t){return j(t.target.value)}})]}),Object(y.jsx)("button",{children:"\u767b\u5165"}),x&&Object(y.jsx)(S,{children:x})]})}var k,C,P,z,E,$,A=n(10),L=s.a.div(k||(k=Object(a.a)(["\n  width: 80%;\n"]))),D=s.a.div(C||(C=Object(a.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),I=Object(s.a)(A.b)(P||(P=Object(a.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n  cursor: pointer;\n"]))),J=s.a.div(z||(z=Object(a.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]))),N=s.a.div(E||(E=Object(a.a)(["\n  margin-top: 20px;\n  width: 100%\n  display: flex;\n"]))),R=s.a.button($||($=Object(a.a)(["\n  margin: 8px;\n  background: white;\n  width: 30px;\n  height: 30px;\n  border: 2px solid rgba(0, 12, 34, 0.2);\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  line-height: 1.8rem;\n  cursor: pointer;\n  ","\n"])),(function(t){return t.$active&&"\n    background: rgba(0, 12, 34, 0.2);\n    color: black;\n    "}));function _(t){var e=t.post;return Object(y.jsxs)(D,{children:[Object(y.jsx)(I,{to:"/posts/".concat(e.id),children:e.title}),Object(y.jsx)(J,{children:new Date(e.createdAt).toLocaleString()})]})}function B(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(1),i=Object(u.a)(o,2),a=i[0],s=i[1],j=Object(r.useState)([]),b=Object(u.a)(j,2),d=b[0],O=b[1];return Object(r.useEffect)((function(){h(a).then((function(t){O(t)})),fetch("".concat(l,"/posts?_sort=createdAt&_order=desc")).then((function(t){return t.json()})).then((function(t){var e=t.length%5===0?t.length/5:Math.ceil(t.length/5);c(Array.from({length:e},(function(t,e){return e+1})))}))}),[a]),Object(y.jsxs)(L,{children:[d.map((function(t){return Object(y.jsx)(_,{post:t},t.id)})),Object(y.jsx)(N,{children:n.map((function(t){return Object(y.jsx)(R,{$active:a===t,onClick:function(){!function(t){h(t).then((function(e){O(e),s(t)}))}(t)},children:t},t)}))})]})}var T,F=Object(x.b)({name:"posts",initialState:{isLoadingPost:!1,post:{},newPostResponse:null,editPostResponse:null},reducers:{setIsLoadingPost:function(t,e){t.isLoadingPost=e.payload},setPost:function(t,e){t.post=e.payload},setNewPostResponse:function(t,e){t.newPostResponse=e.payload}}}),U=F.actions,H=U.setIsLoadingPost,M=U.setPost,q=U.setNewPostResponse,G=function(t){return function(e){e(H(!0)),function(t){return fetch("".concat(l,"/posts/").concat(t)).then((function(t){return t.json()}))}(t).then((function(t){e(M(t)),e(H(!1))}))}},K=function(t,e){return function(n){n(H(!0)),function(t,e){var n=d();return fetch("".concat(l,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(n)},body:JSON.stringify({title:t,body:e})}).then((function(t){return t.json()}))}(t,e).then((function(t){n(q(t)),n(H(!1))}))}},Q=function(t,e,n){return function(c){c(H(!0)),function(t,e,n){var c=d();return fetch("".concat(l,"/posts/").concat(t),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(c)},body:JSON.stringify({title:e,body:n})}).then((function(t){return t.json()}))}(t,e,n).then((function(t){c(M(t)),c(H(!1))}))}},V=function(t){return function(e){return function(t){var e=d();return fetch("".concat(l,"/posts/").concat(t),{method:"DELETE",header:{authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()}))}(t).then((function(t){return t}))}},W=F.reducer;function X(){var t=Object(f.h)().id,e=Object(p.b)(),n=Object(f.f)(),c=Object(p.c)((function(t){return t.posts.post})),o=Object(p.c)((function(t){return t.user.user})),i=Object(r.useState)(!1),a=Object(u.a)(i,2),s=a[0],j=a[1],b=Object(r.useState)(""),d=Object(u.a)(b,2),l=d[0],h=d[1],O=Object(r.useState)(""),x=Object(u.a)(O,2),g=x[0],v=x[1];Object(r.useEffect)((function(){e(G(t))}),[t,e]);var m=function(){j(!s)};return Object(y.jsxs)(y.Fragment,{children:[o&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{onClick:function(){return function(t){e(V(t)).then((function(t){n.push("/")}))}(t)},children:"\u522a\u9664\u6587\u7ae0"}),Object(y.jsx)("button",{onClick:m,children:"\u7de8\u8f2f\u6587\u7ae0"})]}),Object(y.jsx)("h2",{children:c?c.title:""}),Object(y.jsx)("p",{children:c?c.body:""}),Object(y.jsx)("p",{children:c?new Date(c.createdAt).toLocaleString():""}),Object(y.jsxs)("p",{children:["author: ",c?c.userId:""]}),s&&Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"\u7de8\u8f2f\u6587\u7ae0"}),Object(y.jsxs)("form",{children:[Object(y.jsx)("h3",{children:"\u6587\u7ae0\u6a19\u984c"}),Object(y.jsx)("input",{value:l,onChange:function(t){h(t.target.value)}}),Object(y.jsx)("h3",{children:"\u6587\u7ae0\u5167\u5bb9"}),Object(y.jsx)("textarea",{value:g,onChange:function(t){v(t.target.value)}}),Object(y.jsxs)("button",{type:"button",onClick:function(){e(Q(t,l,g)),j(!1)},children:[" ","\u9001\u51fa"," "]}),Object(y.jsxs)("button",{type:"button",onClick:m,children:[" ","\u53d6\u6d88"," "]})]})]})]})}function Y(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.posts.newPostResponse})),n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),j=s[0],b=s[1],d=Object(f.f)(),l=Object(p.c)((function(t){return t.user.user}));return Object(r.useEffect)((function(){return e&&e.id&&d.push("/posts/"+e.id),function(){t(q(null))}}),[e,d,t]),Object(r.useEffect)((function(){l||d.push("/")}),[l,d]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{children:"\u65b0\u589e\u6587\u7ae0"}),Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(K(o,j))},children:[Object(y.jsx)("h3",{children:"\u6587\u7ae0\u6a19\u984c"}),Object(y.jsx)("input",{value:o,onChange:function(t){i(t.target.value)}}),Object(y.jsx)("h3",{children:"\u6587\u7ae0\u5167\u5bb9"}),Object(y.jsx)("textarea",{value:j,onChange:function(t){b(t.target.value)}}),Object(y.jsx)("button",{type:"submit",children:" \u9001\u51fa "})]})]})}function Z(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("p",{children:"About me~~~~~"})})}var tt,et,nt,ct,rt,ot,it=s.a.div(T||(T=Object(a.a)(["\n  color: red;\n"])));function at(){var t=Object(r.useState)(""),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),a=i[0],s=i[1],j=Object(r.useState)(""),d=Object(u.a)(j,2),h=d[0],x=d[1],g=Object(r.useState)(),m=Object(u.a)(g,2),S=m[0],w=m[1],k=Object(f.f)(),C=Object(p.b)();return Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w(null),function(t,e,n){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,nickname:e,password:n})}).then((function(t){return t.json()}))}(n,a,h).then((function(t){if(0===t.ok)return w(t.message);b(t.token),O().then((function(t){if(1!==t.ok)return b(null),w(t.toString());C(v(t.data)),k.push("/")}))}))},children:[Object(y.jsx)("h3",{children:"\u8a3b\u518a"}),Object(y.jsxs)("div",{children:["username:"," ",Object(y.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)}})]}),Object(y.jsxs)("div",{children:["nickname:"," ",Object(y.jsx)("input",{type:"text",value:a,onChange:function(t){return s(t.target.value)}})]}),Object(y.jsxs)("div",{children:["password:"," ",Object(y.jsx)("input",{type:"password",value:h,onChange:function(t){return x(t.target.value)}})]}),Object(y.jsx)("button",{children:"\u9001\u51fa"}),S&&Object(y.jsx)(it,{children:S})]})}var st,ut=s.a.div(tt||(tt=Object(a.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 32px;\n  box-sizing: border-box;\n"]))),jt=s.a.div(et||(et=Object(a.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]))),bt=s.a.div(nt||(nt=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]))),dt=Object(s.a)(A.b)(ct||(ct=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"])),(function(t){return t.$active&&"\n    background: rgba(0,0,0,0.1)\n    "})),lt=s.a.div(rt||(rt=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"])),(function(t){return t.$active&&"\n    background: rgba(0,0,0,0.1)\n    "})),ht=s.a.div(ot||(ot=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"])),bt);function Ot(){var t=Object(f.g)(),e=Object(f.f)(),n=Object(p.b)(),c=Object(p.c)((function(t){return t.user.user}));return Object(y.jsxs)(ut,{children:[Object(y.jsxs)(ht,{children:[Object(y.jsx)(jt,{children:"\u6211\u7684\u7b2c\u4e00\u500b\u90e8\u843d\u683c"}),Object(y.jsxs)(bt,{children:[Object(y.jsx)(dt,{to:"/",$active:"/"===t.pathname,children:"\u9996\u9801"}),c&&Object(y.jsx)(dt,{to:"/new-post",$active:"/new-post"===t.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(y.jsxs)(bt,{children:[Object(y.jsx)(dt,{to:"/about",$active:"/about"===t.pathname,children:"\u95dc\u65bc"}),c&&Object(y.jsx)(lt,{onClick:function(){b(""),n(v(null)),e.push("/")},children:"\u767b\u51fa"}),!c&&Object(y.jsx)(dt,{to:"/login",$active:"/login"===t.pathname,children:"\u767b\u5165"}),!c&&Object(y.jsx)(dt,{to:"/register",$active:"/register"===t.pathname,children:"\u8a3b\u518a"})]})]})}var ft=s.a.div(st||(st=Object(a.a)(["\n  padding-top: 64px;\n"])));var pt=function(){var t=Object(p.b)();return Object(r.useEffect)((function(){O().then((function(e){e.ok&&t(v(e.data))}))}),[t]),Object(y.jsx)(ft,{children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(Ot,{}),Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{exact:!0,path:"/",children:Object(y.jsx)(B,{})}),Object(y.jsx)(f.a,{exact:!0,path:"/posts/:id",children:Object(y.jsx)(X,{})}),Object(y.jsx)(f.a,{path:"/login",children:Object(y.jsx)(w,{})}),Object(y.jsx)(f.a,{path:"/new-post",children:Object(y.jsx)(Y,{})}),Object(y.jsx)(f.a,{path:"/about",children:Object(y.jsx)(Z,{})}),Object(y.jsx)(f.a,{path:"/register",children:Object(y.jsx)(at,{})})]})]})})},xt=Object(x.a)({reducer:{posts:W,user:m}});i.a.render(Object(y.jsx)(p.a,{store:xt,children:Object(y.jsx)(pt,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c34cb446.chunk.js.map