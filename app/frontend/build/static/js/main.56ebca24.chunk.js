(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),o=n(5),s=n(2),l=n(11),j=n(14),u=n(4),d=(n(19),n(1)),b=function(e){var t=e.page,n=e.SecondNavegationLink,a=e.logged,r=e.setLogin,i=Object(s.g)();return Object(d.jsxs)("header",{className:"common-header",children:[Object(d.jsx)("div",{className:"image-content"}),Object(d.jsx)("h1",{"data-testid":"header__title",children:t}),Object(d.jsx)("div",{className:"buttons-content",children:a?Object(d.jsxs)("button",{type:"button",onClick:function(){return localStorage.removeItem("token"),localStorage.removeItem("role"),r(!1),void i("/login")},children:["Sair",Object(d.jsx)("img",{src:"",alt:"Sair do aplicativo"})]}):Object(d.jsx)(n,{})})]})};b.defaultProps={SecondNavegationLink:null,logged:void 0,setLogin:void 0};var m=b,p=n(9),O=function(){return Object(d.jsx)(o.b,{to:"/register",children:"Registre-se"})},h=(n(21),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(u.a)(i,2),o=c[0],b=c[1],h=Object(a.useState)(!1),g=Object(u.a)(h,2),x=g[0],f=g[1],v=Object(a.useState)(!1),_=Object(u.a)(v,2),w=_[0],S=_[1],N=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var a,r,i,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(p.requestLogin)("/login",{email:n,password:o});case 4:return a=e.sent,r=a.token,Object(p.setToken)(r),e.next=9,Object(p.requestData)("/login/role",{email:n,password:o});case 9:i=e.sent,c=i.role,localStorage.setItem("token",r),localStorage.setItem("role",c),f(!0),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),S(!0),f(!1);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){S(!1)}),[n,o]),x?Object(d.jsx)(s.a,{to:"/matches"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{page:"Login",SecondNavegationLink:O}),Object(d.jsx)("section",{className:"user-login-area",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{children:"Digite suas credenciais"}),Object(d.jsx)("label",{htmlFor:"email-input",children:Object(d.jsx)("input",{className:"login__login_input",type:"text",value:n,onChange:function(e){var t=e.target.value;return r(t)},"data-testid":"login__login_input",placeholder:"Login"})}),Object(d.jsx)("label",{htmlFor:"password-input",children:Object(d.jsx)("input",{type:"password",value:o,onChange:function(e){var t=e.target.value;return b(t)},"data-testid":"login__password_input",placeholder:"Senha"})}),w?Object(d.jsx)("p",{"data-testid":"login__input_invalid_login_alert",children:"O endere\xe7o de e-mail ou a senha n\xe3o est\xe3o corretos.\n                    Por favor, tente novamente."}):null,Object(d.jsx)("button",{"data-testid":"login__login_btn",type:"submit",onClick:function(e){return N(e)},children:"Entrar"})]})})]})}),g=(n(22),n(7)),x=n(12),f=function(){return Object(d.jsx)(o.b,{to:"/login",children:"Login"})},v=(n(23),function(){var e=Object(a.useState)({name:"",email:"",password:"",password_confirmation:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=function(e){var t=e.target,a=t.name,i=t.value;r(Object(x.a)(Object(x.a)({},n),{},Object(g.a)({},a,i)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{page:"Registro",SecondNavegationLink:f}),Object(d.jsx)("section",{className:"user_register_area",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)("h1",{children:"Digite seus dados"}),Object(d.jsx)("label",{htmlFor:"name",children:Object(d.jsx)("input",{className:"name_input",id:"name",type:"text",name:"name",value:n.name,onChange:i,placeholder:"Nome",required:"required"})}),Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("input",{className:"email_input",id:"email",type:"text",name:"email",value:n.email,onChange:i,placeholder:"Email",required:"required"})}),Object(d.jsx)("label",{htmlFor:"password",children:Object(d.jsx)("input",{className:"password_input",id:"password",type:"text",name:"password",value:n.password,onChange:i,placeholder:"Senha",required:"required"})}),Object(d.jsx)("label",{htmlFor:"password_confirmation",children:Object(d.jsx)("input",{className:"password_confirmation_input",id:"password_confirmation",type:"text",name:"password_confirmation",value:n.password_confirmation,onChange:i,placeholder:"Confirme sua senha",required:"password_confirmation"})}),Object(d.jsx)("button",{type:"submit",children:"Registrar"})]})})]})});var _=function(){return Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/login",element:Object(d.jsx)(h,{})}),Object(d.jsx)(s.b,{path:"/register",element:Object(d.jsx)(v,{})}),Object(d.jsx)(s.b,{exact:!0,path:"/",element:Object(d.jsx)(s.a,{to:"/login"})})]})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(_,{})})}),document.getElementById("root"))},9:function(e,t){}},[[24,1,2]]]);
//# sourceMappingURL=main.56ebca24.chunk.js.map