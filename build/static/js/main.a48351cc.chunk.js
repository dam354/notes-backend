(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,n,e){t.exports=e(38)},38:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(13),c=e.n(o),u=e(14),i=e(3),l=function(t){var n=t.note,e=t.toggleImportance,a=n.important?"make not important":"make important";return r.a.createElement("li",null,n.content,r.a.createElement("button",{onClick:e},a))},f=e(2),m=e.n(f),p=function(){return m.a.get("/notes").then(function(t){return t.data})},d=function(t){return m.a.post("/notes",t).then(function(t){return t.data})},s=function(t,n){return m.a.put("".concat("/notes","/").concat(t),n).then(function(t){return t.data})},b=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),m=f[0],b=f[1],h=Object(a.useState)(!0),E=Object(i.a)(h,2),v=E[0],g=E[1];Object(a.useEffect)(function(){p().then(function(t){o(t)})},[]);var w=v?e:e.filter(function(t){return t.important}),O=function(t){var n=e.find(function(n){return n.id===t}),a=Object(u.a)({},n,{important:!n.important});s(t,a).then(function(n){o(e.map(function(e){return e.id!==t?e:n}))}).catch(function(a){alert("the note '".concat(n.content,"' was already deleted from server")),o(e.filter(function(n){return n.id!==t}))})};return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return g(!v)}},"show ",v?"important":"all")),r.a.createElement("ul",null,w.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return O(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={content:m,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};d(n).then(function(t){o(e.concat(t)),b("")})}},r.a.createElement("input",{value:m,onChange:function(t){b(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a48351cc.chunk.js.map