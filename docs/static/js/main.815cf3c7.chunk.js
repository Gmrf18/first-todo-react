(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={a:[{title:"Task 1",responsible:"Gerard",description:"Lorem ipsum",priority:"low"},{title:"Task 2",responsible:"Gmrf",description:"Lore2m ipsum",priority:"medium"},{title:"Task 3",responsible:"Ger",description:"Lorem3 ipsum",priority:"high"},{title:"Task 4",responsible:"Gmrf18",description:"Ipsum LOrem",priority:"lower"}]}},13:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),l=(a(19),a(12)),s=a(2),c=a(3),d=a(5),m=a(4),u=a(6),p=a(1),h=(a(21),a(9)),b=a.n(h),f=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-dark bg-dark text-white container-fluid"},o.a.createElement("span",{className:"col-xs-4 col-md-2 "},this.props.titulo.toUpperCase(),o.a.createElement("span",{className:"badge badge-pill badge-light ml-2"},this.props.cantidad)),o.a.createElement("span",{className:"col-12 col-md-2"},o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}))))}}]),t}(n.Component),v=a(10),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={title:"",responsible:"",description:"",priority:"low"},e.handleInputChange=e.handleInputChange.bind(Object(p.a)(Object(p.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state),this.setState({title:"",responsible:"",description:"",priority:"low"})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;console.log(a,n),this.setState(Object(v.a)({},n,a))}},{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("h5",{className:"card-title mt-3"},"New Task"),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"card-body row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("input",{type:"text",name:"title",className:"form-control",value:this.state.title,onChange:this.handleInputChange,placeholder:"Title"})),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("input",{type:"text",name:"responsible",className:"form-control",value:this.state.responsible,onChange:this.handleInputChange,placeholder:"Responsible"})),o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("input",{type:"text",name:"description",className:"form-control",value:this.state.description,onChange:this.handleInputChange,placeholder:"Description"})),o.a.createElement("div",{className:"form-group col-md-8"},o.a.createElement("select",{name:"priority",className:"form-control",value:this.state.priority,onChange:this.handleInputChange},o.a.createElement("option",null,"lower"),o.a.createElement("option",null,"low"),o.a.createElement("option",null,"medium"),o.a.createElement("option",null,"high"))),o.a.createElement("div",{className:"ml-auto mr-3"},o.a.createElement("button",{type:"submit",className:"btn btn-success"},"Save"))))}}]),t}(n.Component),E=a(11),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={title:"Aplicaci\xf3n de tareas",nTareas:10,todos:E.a},e.handleAddTodo=e.handleAddTodo.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleAddTodo",value:function(e){this.setState({todos:[].concat(Object(l.a)(this.state.todos),[e])})}},{key:"removeTodo",value:function(e){console.log(e),this.setState({todos:this.state.todos.filter(function(t,a){return a!==e})})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t,a){return o.a.createElement("div",{className:"col-md-4 col-sm-6 mb-4",key:a},o.a.createElement("div",{className:"card "},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",null,t.title),o.a.createElement("span",{className:"badge badge-pill badge-info ml-2"},t.priority)),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("p",{className:"card-text"},t.responsible),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:"btn btn-danger",onClick:e.removeTodo.bind(e,a)},"X")))))});return o.a.createElement("div",{className:"App"},o.a.createElement(f,{titulo:"Tasks By Gmrf18",cantidad:t.length}),o.a.createElement("div",{className:"App-body"},o.a.createElement("div",{className:"container mt-4"},o.a.createElement("div",{className:"mb-5"},o.a.createElement(g,{onAddTodo:this.handleAddTodo})),o.a.createElement("div",{className:"row"},t))))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");N?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[13,2,1]]]);
//# sourceMappingURL=main.815cf3c7.chunk.js.map