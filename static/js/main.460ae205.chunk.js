(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"title":"Venda Fiel","description":"Fala revendedor, voc\xea validou essa venda como Fiel, isto quer dizer que ela atua como uma venda normal e a pontua\xe7\xe3o \xe9 gerada para o cliente final."}')},24:function(e){e.exports=JSON.parse('{"title":"Venda Fraudulenta","description":"Fala revendedor, voc\xea validou essa venda como Fraudulenta, no caso ela n\xe3o gera pontos para o cliente final."}')},25:function(e){e.exports=JSON.parse('[{"type":"Vendas em d\xe9bito","value":"124.800","chart":"/img/chart-debito.png","arrow":"fa fa-arrow-up green"},{"type":"Vendas em cr\xe9dito","value":"56.400","chart":"img/chart-credito.png","arrow":"fa fa-arrow-up color-alert"},{"type":"Fraudes Confirmadas","value":"1.800","chart":"/img/chart-fraude.png","arrow":"fa fa-arrow-down pink"}]')},26:function(e){e.exports=JSON.parse('[{"id":1,"profile":{"name":"Marcos Rodrigues"},"card":"visa","cardNumber":"3210 **** **** 4008","valor":88.2,"compra":{"tipo":"Gasolina","valor":18.375},"data":"22/06","status":"A validar","resposta":{"fraude":62,"erro":32,"fiel":9}},{"id":2,"profile":{"name":"Pedro Jo\xe3o"},"card":"master","cardNumber":"4008 **** **** 9464","valor":66.4,"compra":{"tipo":"Diesel","valor":21.149},"data":"12/07","status":"A validar","resposta":{"fraude":40,"erro":60,"fiel":20}},{"id":3,"profile":{"name":"Jo\xe3o Felipe"},"card":"visa","cardNumber":"3344 **** **** 9018","valor":32.4,"compra":{"tipo":"Etanol","valor":9},"data":"18/08","status":"A validar","resposta":{"fraude":20,"erro":10,"fiel":70}}]')},27:function(e){e.exports=JSON.parse('[{"id":4,"profile":{"name":"Pedro Valesse"},"card":"master","cardNumber":"1234 **** **** 5678","valor":576,"compra":{"tipo":"Gasolina","valor":120},"data":"01/09","status":"Fraude","resposta":{"fraude":20,"erro":10,"fiel":70}}]')},28:function(e){e.exports=JSON.parse('[{"id":5,"profile":{"name":"Brenner Batista"},"card":"master","cardNumber":"1234 **** **** 5678","valor":119.04,"compra":{"tipo":"Gasolina","valor":24.8},"data":"14/07","status":"Fiel","resposta":{"fraude":20,"erro":10,"fiel":70}},{"id":6,"profile":{"name":"Thulio Ricomini"},"card":"visa","cardNumber":"1234 **** **** 5678","valor":312.4,"compra":{"tipo":"Gasolina","valor":65},"data":"22/07","status":"Fiel","resposta":{"fraude":20,"erro":10,"fiel":70}}]')},29:function(e,a,t){e.exports=t(58)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);t(30),t(31);var l=t(0),r=t.n(l),n=t(20),c=t.n(n),s=(t(37),t(38),t(39),t(5));var m=function(){return r.a.createElement(s.b,{to:"/",className:"logo"},r.a.createElement("span",{className:"logo-mini bg-lg"},r.a.createElement("span",{className:"orange"},"CP")),r.a.createElement("span",{className:"logo-lg bg-lg"},"clubpetr",r.a.createElement("span",{className:"orange"},"o")))},o=(t(44),t(45),t(8));var i=function(){return r.a.createElement(o.Switch,null,[{path:"/dashboard",text:"Dashboard"},{path:"/resgates",text:"Resgates"},{path:"/antifraude",text:"Anti-Fraude"},{path:"/vendas",text:"Vendas"},{path:"/relatorios",text:"Relat\xf3rios"},{path:"/perfil",text:"Perfil"},{path:"/campanhas",text:"Campanhas"}].map((function(e,a){return r.a.createElement(o.Route,{key:a,path:e.path,children:e.text})})))};var d=function(){return r.a.createElement("nav",{className:"navbar",role:"navigation"},r.a.createElement("button",{className:"sidebar-toggle button-href","data-toggle":"push-menu"},r.a.createElement("i",{className:"fa fa-bars bg-lg"}),r.a.createElement("span",{className:"ml-20"},r.a.createElement(i,null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"menu bg-lg"},r.a.createElement("div",{className:"each-menu"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("div",{className:"each-menu"},r.a.createElement("i",{className:"fa fa-envelope"})),r.a.createElement("div",{className:"each-menu"},r.a.createElement("i",{className:"fa fa-bell"}))),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"/img/me.jpg",width:"45",height:"45",alt:"Marcos Rodrigues"})),r.a.createElement("div",{className:"name"},"Marcos Rodrigues"))))};t(49);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"main-header"},r.a.createElement(m,null),r.a.createElement(d,null)))};t(50);var E=function(){return r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/dashboard"},r.a.createElement("i",{className:"fa fa-clock-o"}),"DASHBOARD")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/resgates"},r.a.createElement("i",{className:"fa fa-share"}),"RESGATES")),r.a.createElement("div",{className:"menu-item active"},r.a.createElement(s.b,{to:"/antifraude"},r.a.createElement("i",{className:"fa fa-briefcase"}),"ANTI FRAUDE")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/vendas"},r.a.createElement("i",{className:"fa fa-exchange"}),"VENDAS")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/relatorios"},r.a.createElement("i",{className:"fa fa-bar-chart-o"}),"RELAT\xd3RIOS")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/perfil"},r.a.createElement("i",{className:"fa fa-user-circle-o"}),"PERFIL")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(s.b,{to:"/campanhas"},r.a.createElement("i",{className:"fa fa-feed"}),"CAMPANHAS")))},p=t(17);var v=function(e){return r.a.createElement(r.a.Fragment,null,"Dashboard works!")},f=t(12),N=t(3),b=t(16),g=t.n(b);t(52);var h=function(e){var a=Object(l.useState)([]),t=Object(N.a)(a,2),n=t[0],c=t[1];return Object(l.useEffect)((function(){!function(){var a;g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,t.next=3,g.a.awrap(c(a));case 3:case"end":return t.stop()}}))}()}),[n,e]),r.a.createElement(r.a.Fragment,null,n.map((function(e,a){return r.a.createElement("div",{className:"col-sm-4 mt-25",key:a},r.a.createElement("div",{className:"card card-state"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title col-sm-6 left"},r.a.createElement("div",{className:"row card-value"},"R$ ",e.value," ",r.a.createElement("i",{className:e.arrow})),r.a.createElement("div",{className:"row description"},e.type)),r.a.createElement("div",{className:"col-sm-6 right"},r.a.createElement("img",{src:e.chart.toString(),alt:e.type})))))})))};t(53),t(54);var F=function(e){var a=Object(l.useState)({resposta:{}}),t=Object(N.a)(a,2),n=t[0],c=t[1],s=e.id;return Object(l.useEffect)((function(){var a=e.venda;a&&c(a)}),[e]),r.a.createElement("div",{className:"modal fade",id:"modalAlgoritmo_"+s,tabIndex:"-1",role:"dialog","aria-labelledby":"ModalAlgoritmo"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container custom-font"},r.a.createElement("p",{className:"strong"},"Resposta do algoritmo"),r.a.createElement("p",{className:"description justify"},"A resposta dada pelo nosso algoritmo sobre essa venda \xe9 dada pelos indicadores a baixo, al\xe9m de analisar eles, entre em contato com os frentistas e tire suas pr\xf3prias conclus\xf5es."),r.a.createElement("div",{className:"row resposta"},r.a.createElement("p",{className:"strong col-sm-4"},"Fraude"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row inline"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar bg-red",role:"progressbar","aria-valuenow":n.resposta.fraude,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n.resposta.fraude+"%"}}))),r.a.createElement("div",{className:"col-sm-1 gray"},n.resposta.fraude,"%")))),r.a.createElement("div",{className:"row resposta"},r.a.createElement("p",{className:"strong col-sm-4"},"Erro do Frentista"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row inline"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar bg-yellow",role:"progressbar","aria-valuenow":n.resposta.erro,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n.resposta.erro+"%"}}))),r.a.createElement("div",{className:"col-sm-1 gray"},n.resposta.erro,"%")))),r.a.createElement("div",{className:"row resposta"},r.a.createElement("p",{className:"strong col-sm-4"},"Fiel"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row inline"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar bg-green",role:"progressbar","aria-valuenow":n.resposta.fiel,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n.resposta.fiel+"%"}}))),r.a.createElement("div",{className:"col-sm-1 gray"},n.resposta.fiel,"%")))),r.a.createElement("div",{className:"modal-button"},r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"strong"},"DECIS\xc3O FINAL"),r.a.createElement("button",{className:"btn btn-danger btn-modal","data-dismiss":"modal"},r.a.createElement("span",{className:"strong",onClick:function(a){a.preventDefault(),e.callbackFunction(n,"FRAUDE")}},"VENDA FRAUDULENTA")),r.a.createElement("button",{className:"btn btn-success btn-modal","data-dismiss":"modal"},r.a.createElement("span",{className:"strong",onClick:function(a){a.preventDefault(),e.callbackFunction(n,"FIEL")}},"VENDA FIEL")))))))))};var O=function(e,a){return e.toFixed(a).replace(".",",")};var w=function(e){var a=Object(l.useState)([]),t=Object(N.a)(a,2),n=t[0],c=t[1],s=e.title,m={master:"/img/mastercard.png",visa:"/img/visa.png"};return Object(l.useEffect)((function(){!function(){var a=e.analise;c(a)}()}),[n,e]),r.a.createElement("div",{className:"col-sm-12 mt-25"},r.a.createElement("p",{className:"description strong mb-25"},s),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,n.length>0?n.map((function(a,t){return r.a.createElement("tr",{className:"table-analise",key:t},r.a.createElement("td",{className:"card-image-td"},r.a.createElement("img",{src:m[a.card],className:"card-image-"+a.card,alt:a.card})),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,a.cardNumber),r.a.createElement("p",{className:"description"},"N\xfamero do cart\xe3o")),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,"R$ ",O(a.valor,2)),r.a.createElement("p",{className:"description"},"Valor da compra")),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,O(a.compra.valor,4)," L"),r.a.createElement("p",{className:"description"},a.compra.tipo)),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,a.data),r.a.createElement("p",{className:"description"},"Dia")),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,a.status),r.a.createElement("p",{className:"description"},"Status")),r.a.createElement("td",null,r.a.createElement("button",{className:"button-href","data-target":"#modalAlgoritmo_"+t,"data-toggle":"modal"},r.a.createElement("i",{className:"fs-20 gray fa fa-ellipsis-h"})),r.a.createElement(F,{venda:a,id:t,callbackFunction:e.callbackFunction})))})):r.a.createElement("tr",{className:"table-analise"},r.a.createElement("td",{colSpan:"7",className:"center"},"Nenhuma venda para analisar")))))};t(55);var j=function(e){var a=Object(l.useState)({}),t=Object(N.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)({}),m=Object(N.a)(s,2),o=m[0],i=m[1],d=Object(l.useState)(""),u=Object(N.a)(d,2),E=u[0],p=u[1],v=e.id;return Object(l.useEffect)((function(){var a=e.venda,t=e.message;p("Fraude"===a.status?"red":"green"),c(a),i(t)}),[e]),r.a.createElement("div",{className:"modal fade",id:"modalConfirmDialog_"+v,tabIndex:"-1",role:"dialog","aria-labelledby":"ModalAlgoritmo"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"my-modal-header modal-header mt-"+E},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container custom-font"},r.a.createElement("p",{className:"strong"},o.title),r.a.createElement("p",{className:"description justify"},o.description),r.a.createElement("div",{className:"modal-button"},r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"strong"},"Voc\xea deseja voltar atras?"),r.a.createElement("button",{className:"btn btn-danger btn-modal","data-dismiss":"modal"},r.a.createElement("span",{className:"strong"},"N\xc3O")),r.a.createElement("button",{className:"btn btn-success btn-modal","data-dismiss":"modal",onClick:function(a){a.preventDefault(),n.status="A validar",e.callbackFunction(n)}},r.a.createElement("span",{className:"strong"},"SIM, DESEJO")))))))))},y=t(23),S=t(24);var x=function(e){var a=Object(l.useState)([]),t=Object(N.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)({}),m=Object(N.a)(s,2),o=m[0],i=m[1],d=e.title,u="/img/fraude.png",E="/img/fiel.png";return Object(l.useEffect)((function(){!function(){var a=e.vendas,t=e.tipo;c(a);var l={};"Fiel"===t?(l.icon=E,l.title="Venda Fiel",l.modal=y):(l.icon=u,l.title="Venda Fraudulenta",l.modal=S),i(l)}()}),[e]),r.a.createElement("div",{className:"col-sm-12 mt-25"},r.a.createElement("p",{className:"description strong mb-25"},d),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,n.length>0?n.map((function(a,t){return r.a.createElement("tr",{className:"table-analise",key:t},r.a.createElement("td",{className:"card-image-td"},r.a.createElement("img",{src:o.icon,alt:a.profile.name})),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,o.title),r.a.createElement("p",{className:"description"},a.profile.name)),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,"R$ ",O(a.valor,2)),r.a.createElement("p",{className:"description"},"Valor da compra")),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,O(a.compra.valor,4)," L"),r.a.createElement("p",{className:"description"},a.compra.tipo)),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,a.data),r.a.createElement("p",{className:"description"},"Dia")),r.a.createElement("td",{className:"va-middle"},r.a.createElement("p",null,a.status),r.a.createElement("p",{className:"description"},"Status")),r.a.createElement("td",null,r.a.createElement("button",{className:"button-href","data-target":"#modalConfirmDialog_"+a.id,"data-toggle":"modal"},r.a.createElement("i",{className:"fs-20 gray fa fa-ellipsis-h"})),r.a.createElement(j,{venda:a,id:a.id,message:o.modal,callbackFunction:e.callbackFunction})))})):r.a.createElement("tr",{className:"table-analise"},r.a.createElement("td",{colSpan:"7",className:"center"},"Nenhuma venda para analisar")))))},A=t(25),k=t(26),D=t(27),R=t(28);var V=function(){var e=Object(l.useState)(A),a=Object(N.a)(e,1)[0],t=Object(l.useState)(k),n=Object(N.a)(t,2),c=n[0],s=n[1],m=Object(l.useState)(D),o=Object(N.a)(m,2),i=o[0],d=o[1],u=Object(l.useState)(R),E=Object(N.a)(u,2),p=E[0],v=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement(h,{state:a})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{analise:c,callbackFunction:function(e,a){var t=c.filter((function(a){return a.id!==e.id}));s(t),"FIEL"===a?(e.status="Fiel",v([].concat(Object(f.a)(p),[e]))):"FRAUDE"===a&&(e.status="Fraude",d([].concat(Object(f.a)(i),[e])))},title:"An\xe1lise de vendas"})),r.a.createElement("div",{className:"row"},r.a.createElement(x,{vendas:i,callbackFunction:function(e){if(e){s([].concat(Object(f.a)(c),[e]));var a=i.filter((function(a){return a.id!==e.id}));d(a)}},tipo:"Fraude",title:"Vendas fraudulentas confirmadas"})),r.a.createElement("div",{className:"row"},r.a.createElement(x,{vendas:p,callbackFunction:function(e){if(e){s([].concat(Object(f.a)(c),[e]));var a=p.filter((function(a){return a.id!==e.id}));v(a)}},tipo:"Fiel",title:"Vendas validadas fieis"})))};var I=function(){var e=[{path:"/",exact:!0,main:function(){return r.a.createElement(v,null)}},{path:"/dashboard",main:function(){return r.a.createElement(v,null)}},{path:"/antifraude",main:function(){return r.a.createElement(V,null)}}];return r.a.createElement(p.Switch,null,e.map((function(e,a){return r.a.createElement(p.Route,{key:a,path:e.path,exact:e.exact,children:r.a.createElement(e.main,null)})})))};t(56);var J=function(){return r.a.createElement("div",{className:"clubpetro wrapper"},r.a.createElement(s.a,null,r.a.createElement(u,null),r.a.createElement("aside",{className:"main-sidebar"},r.a.createElement(E,null)),r.a.createElement("main",{className:"main-content"},r.a.createElement("div",{className:"row border-left"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(I,null))))))};var C=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);c.a.render([r.a.createElement(C,null)],document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.460ae205.chunk.js.map