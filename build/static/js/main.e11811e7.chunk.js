(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{37:function(e,t,n){},41:function(e,t,n){e.exports=n(78)},46:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(38),o=n.n(r),l=(n(46),n(6)),u=n(40),i=n(39),m=n.n(i)()("/"),s=(n(37),function(e){var t=e.nombre,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)([]),f=Object(l.a)(s,2),b=f[0],v=f[1];Object(a.useEffect)((function(){m.emit("conectado",t)}),[t]),Object(a.useEffect)((function(){m.on("mensajes",(function(e){v([].concat(Object(u.a)(b),[e]))}))}),[b]);var E=Object(a.useRef)(null);Object(a.useEffect)((function(){E.current.scrollIntoView({behavior:"smooth"})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"chat"},b.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",null,e.nombre),c.a.createElement("div",null,e.mensaje))})),c.a.createElement("div",{ref:E})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.emit("mensaje",t,o),i("")}},c.a.createElement("label",{htmlFor:""},"Escriba su mensaje"),c.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"10",value:o,onChange:function(e){return i(e.target.value)}}),c.a.createElement("button",null,"Enviar")))});var f=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),i=u[0],m=u[1];return c.a.createElement("div",{className:"App"},!i&&c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==n&&m(!0)}},c.a.createElement("label",{htmlFor:""},"Introduzca su nombre"),c.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",null,"Ir al chat")),i&&c.a.createElement(s,{nombre:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.e11811e7.chunk.js.map