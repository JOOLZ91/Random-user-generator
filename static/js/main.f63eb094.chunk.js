(this.webpackJsonpgenerator=this.webpackJsonpgenerator||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(3),i=n.n(a),l=(n(13),n(4)),o=n(5),u=n(7),j=n(6),h=(n(14),function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{className:"header",children:"Welcome to random user generator!"}),Object(r.jsx)("div",{className:"line",children:Object(r.jsx)("p",{className:"head",children:"Generate 5 users for filling databases and testing web API's in seconds without leaving the page"})}),Object(r.jsx)("div",{className:"footer",children:"Copyright Filip Ruszala"})]}),Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)("button",{className:"btn",onClick:e.click,children:"Click here!"})})]})}),d=function(e){console.log(e.users);var t=e.users.map((function(e){return Object(r.jsxs)("div",{className:"user",children:[Object(r.jsx)("img",{src:e.picture.large,alt:"user"}),Object(r.jsx)("h4",{children:"".concat(e.name.title," ").concat(e.name.last)}),Object(r.jsx)("p",{children:e.email})]},e.login.uuid)}));return Object(r.jsx)("ul",{children:t})},b="https://randomuser.me/api/?results=5",O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={users:null},e.handleDataFetch=function(){fetch(b).then((function(e){if(e.ok)return e;throw Error("B\u0142\u0105d!!!")})).then((function(e){return e.json()})).then((function(t){return e.setState({users:t.results})}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.users;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{click:this.handleDataFetch}),e?Object(r.jsx)(d,{users:e}):e]})}}]),n}(c.a.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f63eb094.chunk.js.map