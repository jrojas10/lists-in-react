(this["webpackJsonprender-lists"]=this["webpackJsonprender-lists"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),c=s(4),i=s.n(c),r=(s(14),s(5)),l=s(6),o=s(7),u=s(9),d=s(8),b=(s(15),s(0)),j=function(t){var e=t.tasks;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{children:t.text},t.id)}))})},h=s(3),k=s.n(h),m=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).handleChange=function(e){t.setState({task:{text:e.target.value,id:t.state.task.id}})},t.onSubmitTask=function(e){e.preventDefault(),t.setState({tasks:t.state.tasks.concat(t.state.task),task:{text:"",id:k()()}})},t.state={task:{text:"",id:k()()},tasks:[]},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.task,s=t.tasks;return Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("form",{onSubmit:this.onSubmitTask,children:[Object(b.jsxs)("div",{className:"col col-md-2 mb-3",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"taskInput",children:"Enter an Item to create a list"}),Object(b.jsx)("input",Object(r.a)({className:"form-control",type:"text",id:"taskinput",onChange:this.handleChange,value:e.text},"id","taskInput"))]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Task"})]}),Object(b.jsx)(j,{tasks:s})]})}}]),s}(a.Component);s(18);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4fd94524.chunk.js.map