(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){},36:function(e,a,t){e.exports=t(68)},41:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r),o=(t(41),t(19)),i=t(10),s=t(11),m=t(13),u=t(12),d=t(14),g=t(17),h=t(15),p=(t(28),t(9)),f=t(32),k=t.n(f),v=t(33),E=t.n(v).a.initializeApp({apiKey:"AIzaSyCwI48BrO8QYuuepTAruhGUXY9Z9HIHGnE",authDomain:"kalkulator-wydatkow.firebaseapp.com",databaseURL:"https://kalkulator-wydatkow.firebaseio.com",projectId:"kalkulator-wydatkow",storageBucket:"kalkulator-wydatkow.appspot.com",messagingSenderId:"986035001433",appId:"1:986035001433:web:554e8a741edb9878aff948",measurementId:"G-J199Z1GTYE"}),y=k.a.createClass(E.database()),C=(t(54),function(e){var a=e.change,t=e.title,n=e.price,r=e.click,c=e.categories,o=e.select,i=e.background,s=e.allCategories.map(function(e){return l.a.createElement("option",{key:e,value:e},e)});return l.a.createElement("form",{action:"",className:"form"},l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"name"},"Nazwa"),l.a.createElement("input",{type:"text",id:"name",name:"title",onChange:a,value:t})),l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"price"},"Kwota "),l.a.createElement("input",{type:"number",id:"price",name:"price",onChange:a,value:n})),l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"categories"},"Kategoria"),l.a.createElement("select",{name:"categories",id:"categories",value:c,onChange:o},s)),l.a.createElement("button",{onClick:r,className:"form__button",title:"dodaj wydatek",style:{background:"".concat(i)}},"+"))}),w=(t(55),function(e){var a=e.title,t=e.price,n=e.category,r=e.id,c=e.currentDate,o=e.click,i=e.change,s=e.color;return l.a.createElement("li",{className:"item","data-id":r},l.a.createElement("label",{className:"item__label",htmlFor:"price"},"Nazwa:"),l.a.createElement("input",{name:"title",className:"item__title ".concat(""===a?"item--danger":""),value:a,onChange:i,id:"price"}),l.a.createElement("label",{className:"item__label",htmlFor:"price-second"},"Cena:"),l.a.createElement("input",{name:"price",className:"item__price ".concat(""===t?"item--danger":""),value:t,onChange:i,id:"price-second"}),l.a.createElement("p",{className:"item__label"},"Kategoria:"),l.a.createElement("span",{className:"item__category"},n),l.a.createElement("p",{className:"item__label"},"Data dodania:"),l.a.createElement("span",{className:"item__date"},c),l.a.createElement("button",{className:"close",title:"usu\u0144 wydatek",onClick:o,style:{borderColor:"".concat(s),color:"".concat(s)}},"x"))}),b=(t(56),function(e){var a=e.allExpenses,t=e.click,n=e.change,r=e.color,c=a.map(function(e){return l.a.createElement(w,{key:e.id,title:e.title,price:e.price,category:e.category,id:e.id,currentDate:e.currentDate,click:t,change:n,color:r})});return l.a.createElement("ul",{className:"list-items"},c)}),N=(t(57),function(e){var a=e.click,t=e.color;return l.a.createElement("button",{className:"btn-remove",onClick:a,style:{color:"".concat(t)},title:"Usu\u0144 wszystkie"},l.a.createElement("i",{className:"fas fa-trash"}))}),j=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={title:"",price:"",allExpenses:[],expense:{},category:"\u017bywno\u015b\u0107"},t.handleChangeInput=function(e){var a="price"===e.target.name?parseFloat(e.target.value):e.target.value;t.setState(Object(p.a)({},e.target.name,a))},t.handleEditChangeInput=function(e){var a=parseFloat(e.target.parentElement.dataset.id),n=t.state.allExpenses.findIndex(function(e){return e.id===a}),l=Object(o.a)(t.state.allExpenses)[n];"title"===e.target.name?l[e.target.name]=e.target.value:l[e.target.name]=parseFloat(e.target.value)||"",""===e.target.value||parseFloat(e.target.value)<1?e.target.classList.add("item--danger"):e.target.classList.remove("item--danger");var r=Object(o.a)(t.state.allExpenses);r[n]=l,t.setState({allExpenses:r})},t.handleClickButton=function(e){e.preventDefault();var a=t.state,n=a.allExpenses,l=a.title,r=a.category,c=a.price;if(c>0&&l){var o={id:t.state.allExpenses.length?t.createExpenseId(n):1,title:l,price:c,category:r,currentDate:t.getCurrentDate()};t.addExpense(o)}},t.handleChangeSelect=function(e){t.setState({category:e.target.value})},t.handleClickButtonRemove=function(e){var a=parseFloat(e.target.parentElement.dataset.id),n=n.filter(function(e){return e.id!==a});t.setState({allExpenses:n})},t.handleClickButtonRemoveAll=function(){t.setState({allExpenses:[]})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.ref=y.syncState("kalkulator-wydatkow/wydatki",{context:this,state:"allExpenses"})}},{key:"componentWillUnmount",value:function(){y.removeBinding(this.ref)}},{key:"createExpenseId",value:function(e){return e[e.length-1].id+1}},{key:"getCurrentDate",value:function(){return(new Date).toLocaleString()}},{key:"addExpense",value:function(e){var a=Array.isArray(this.state.allExpenses)?[].concat(Object(o.a)(this.state.allExpenses),[e]):[e];this.setState(function(e){return{allExpenses:a,title:"",price:""}})}},{key:"render",value:function(){var e=this.state,a=e.allExpenses,t=e.title,n=e.category,r=e.price,c=this.props,o=c.colorTheme,i=c.lightenColor,s=c.allCategories,m=a.length?a.map(function(e){return""!==e.price&&e.price}).reduce(function(e,a){return e+a},0).toFixed(2):0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sticky"},l.a.createElement("h1",null,"Kalkulator wydatk\xf3w"),l.a.createElement(C,{change:this.handleChangeInput,title:t,price:r,click:this.handleClickButton,categories:n,select:this.handleChangeSelect,background:o,allCategories:s}),l.a.createElement("div",{className:"sticky__wrapper"},l.a.createElement("p",{style:{color:"".concat(o),fontWeight:"bold"}},"Razem: ",m," z\u0142"),a.length>0&&l.a.createElement(N,{click:this.handleClickButtonRemoveAll,color:o}))),l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"panel-labels",style:{backgroundColor:i}},l.a.createElement("p",null,"Nazwa"),l.a.createElement("p",null,"Cena"),l.a.createElement("p",null,"Kategoria"),l.a.createElement("p",null,"Data dodania"),l.a.createElement("div",null)),a.length?l.a.createElement(b,{allExpenses:a,click:this.handleClickButtonRemove,change:this.handleEditChangeInput,color:o}):l.a.createElement("p",null,"brak wydatk\xf3w")))}}]),a}(n.Component),S=(t(58),t(59),function(e){var a,t,n,r=e.colorTheme,c=e.lightenColor,o=e.click;function i(){window.innerWidth<1025&&o()}return l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list",style:{backgroundColor:"".concat(r)}},l.a.createElement("li",null,l.a.createElement(g.b,{to:"/Kalkulator-wydatkow-React/o-aplikacji",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(c),color:"#000"},onClick:i},"O aplikacji")),l.a.createElement("li",null,l.a.createElement(g.b,{exact:!0,to:"/Kalkulator-wydatkow-React/",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(c),color:"#000"},onClick:i},"Kalkulator wydatk\xf3w")),l.a.createElement("li",null,l.a.createElement(g.b,(a={to:"/Kalkulator-wydatkow-React/ocena",activeClassName:"activeItemNav",activeStyle:{color:"".concat(r)}},Object(p.a)(a,"activeStyle",{backgroundColor:"".concat(c),color:"#000"}),Object(p.a)(a,"onClick",i),a),"Oce\u0144 aplikacj\u0119")),l.a.createElement("li",null,l.a.createElement(g.b,(t={to:"/Kalkulator-wydatkow-React/opinie",activeClassName:"activeItemNav",activeStyle:{color:"".concat(r)}},Object(p.a)(t,"activeStyle",{backgroundColor:"".concat(c),color:"#000"}),Object(p.a)(t,"onClick",i),t),"Opinie")),l.a.createElement("li",null,l.a.createElement(g.b,(n={to:"/Kalkulator-wydatkow-React/ustawienia",activeClassName:"activeItemNav",activeStyle:{color:"".concat(r)}},Object(p.a)(n,"activeStyle",{backgroundColor:"".concat(c),color:"#000"}),Object(p.a)(n,"onClick",i),n),"Ustawienia"))))}),O=(t(64),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"O aplikacji"),l.a.createElement("div",{className:"about-wrapper"},l.a.createElement("i",{className:"fas fa-rocket fa-5x"}),l.a.createElement("p",null,"Projekt stworzony w oparciu o bibliotek\u0119 React i \u015brodowisko create-react-app. Aplikacja umo\u017cliwia dodawanie i usuwanie wydatk\xf3w. Kalkulator podaje sum\u0119 wszystkich wydatk\xf3w oraz daty ich dodania. Program umo\u017cliwia zapisywanie wydatk\xf3w. Nawet po opuszczeniu przegl\u0105darki twoje wydatki b\u0119d\u0119 nadal dost\u0119pne!")))}),x=(t(65),function(e){var a=e.colorTheme,t=e.click,n=e.allCategories,r=e.remove,c=e.change,o=e.newCategory,i=e.add,s=e.errMsgCategories,m=n.map(function(e){return l.a.createElement("li",{key:e,onClick:function(){return r(e)}},e," ",l.a.createElement("span",{className:"categorie-remove"},"x"))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Ustawienia"),l.a.createElement("section",{className:"setup-color"},l.a.createElement("h3",null,"Wybierz kolor motywu"),l.a.createElement("div",{className:"colors-wrapper"},l.a.createElement("div",{className:"color color-violet","data-name":"#8b17ff",onClick:t,style:"#8b17ff"===a?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-brown","data-name":"#ab8f8f",onClick:t,style:"#ab8f8f"===a?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-blue","data-name":"#008080",onClick:t,style:"#008080"===a?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-pink","data-name":"#ae0057",onClick:t,style:"#ae0057"===a?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))))),l.a.createElement("section",{className:"categories"},l.a.createElement("h3",null,"Dostosuj kategorie"),l.a.createElement("div",{className:"categories-container"},l.a.createElement("input",{type:"text",placeholder:"wpisz nazw\u0119 kategorii",value:o,onChange:c,maxLength:"20"}),l.a.createElement("button",{className:"btn",style:{backgroundColor:a},onClick:i},"Dodaj")),l.a.createElement("ul",{className:"categories-setup"},m),s?l.a.createElement("p",{style:{color:"red"}},s):null))}),z=(t(66),"https://jsonplaceholder.typicode.com/users");function I(e,a){localStorage.setItem(e,a)}function T(e){return!!localStorage.getItem(e)&&localStorage.getItem(e)}var _=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={active:"",msg:""},t.handleClick=function(e){t.state.msg||t.setState({active:e.target.id})},t.handleClickButton=function(){t.state.msg||t.setState({msg:"Dzi\u0119kuj\u0119 za oddanie g\u0142osu"}),I("rating",t.state.active)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=T("rating");e&&this.setState({active:e,msg:"Dzi\u0119kuj\u0119 za oddanie g\u0142osu"})}},{key:"render",value:function(){var e=this.props.colorTheme;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Oce\u0144 aplikacj\u0119"),l.a.createElement("div",{className:"rating-wrapper"},l.a.createElement("i",{className:"far fa-frown fa-6x",id:"bad",onClick:this.handleClick,style:"bad"===this.state.active?{color:"#ff9292"}:null}),l.a.createElement("i",{className:"far fa-meh fa-6x",id:"neutral",onClick:this.handleClick,style:"neutral"===this.state.active?{color:"#f9ce54"}:null}),l.a.createElement("i",{className:"far fa-smile fa-6x",id:"super",onClick:this.handleClick,style:"super"===this.state.active?{color:"#52ef8a"}:null})),this.state.active&&!this.state.msg?l.a.createElement("button",{className:"btn",style:{backgroundColor:"".concat(e)},onClick:this.handleClickButton},"Oceniam"):null,this.state.msg?l.a.createElement("p",{className:"rating-msg"},this.state.msg):null)}}]),a}(n.Component),D=(t(67),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={},t.getData=function(){fetch(z).then(function(e){return e.ok?e.json():Promise.reject(e)}).then(function(e){var a=e.map(function(e){return l.a.createElement("li",{key:e.id},e.name," :"," ",l.a.createElement("span",{className:"user-text"},e.company.catchPhrase))});t.setState({comments:a})}).catch(function(e){404===e.status?t.setState({errMsg:"B\u0142\u0105d: \u017c\u0105dany adres nie istnieje"}):t.setState({errMsg:"Nie uda\u0142o si\u0119 pobra\u0107 danych"})})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement("section",{className:"reviews"},l.a.createElement("h2",null,"Opinie"),l.a.createElement("ul",null,this.state.comments?this.state.comments:this.state.errMsg),l.a.createElement("p",null,"*opinie s\u0105 pobierane z przyk\u0142adowego API"))}}]),a}(n.Component)),K=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={showNav:!1,colorTheme:"#8b17ff",allCategories:["\u017bywno\u015b\u0107","Op\u0142aty","Jedzenie na mie\u015bcie","Kredyt","Inna"],newCategory:"",errMsg:""},t.handleToggleNav=function(){t.setState({showNav:!t.state.showNav})},t.handleCloseMenu=function(){t.setState({showNav:!1})},t.handleChangeColorTheme=function(e){var a=e.currentTarget.dataset.name;t.setState({colorTheme:a}),I("colorTheme",a)},t.handleRemoveFromCategories=function(e){if(t.state.allCategories.length>2){var a=t.state.allCategories.filter(function(a){return a!==e});t.setState({allCategories:a}),I("categories",JSON.stringify(a))}else t.setState({errMsgCategories:"Przynajmniej dwie kategorie musz\u0105 pozosta\u0107 wprowadzone "})},t.handleAddToCategories=function(){var e=t.state,a=e.newCategory,n=e.allCategories;if(a.length>0&&n.length<=15){var l=Object(o.a)(t.state.allCategories);l.find(function(e){return e===a})?t.setState({errMsgCategories:"Taka kategoria zosta\u0142a ju\u017c dodana"}):(l.push(a),t.setState({allCategories:l,newCategory:"",errMsgCategories:""}),I("categories",JSON.stringify(l)))}else n.length>15&&t.setState({errMsgCategories:"Mo\u017cesz doda\u0107 maksymalnie 15 kategorii"})},t.handleChangeInput=function(e){var a=e.target.value;t.setState({newCategory:a})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"lightenDarkenColor",value:function(e,a){var t=!1;"#"==e[0]&&(e=e.slice(1),t=!0);var n=parseInt(e,16),l=(n>>16)+a;l>255?l=255:l<0&&(l=0);var r=(n>>8&255)+a;r>255?r=255:r<0&&(r=0);var c=(255&n)+a;return c>255?c=255:c<0&&(c=0),(t?"#":"")+(c|r<<8|l<<16).toString(16)}},{key:"componentDidMount",value:function(){var e=T("colorTheme"),a=T("categories");e&&this.setState({colorTheme:e}),a&&this.setState({allCategories:JSON.parse(a)})}},{key:"render",value:function(){var e=this,a=["app",this.state.showNav?"showNav":"hideNav"],t=this.lightenDarkenColor(this.state.colorTheme,45),n=this.state.showNav?"fas fa-arrow-left":"fas fa-bars";return l.a.createElement(g.a,null,l.a.createElement("div",{className:"container"}),l.a.createElement("div",{className:"hamburger",onClick:this.handleToggleNav},l.a.createElement("i",{className:n})),l.a.createElement("div",{className:a.join(" ")},l.a.createElement(S,{colorTheme:this.state.colorTheme,lightenColor:t,click:this.handleCloseMenu}),l.a.createElement("div",{className:"content"},l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/Kalkulator-wydatkow-React/",render:function(){return l.a.createElement(j,{colorTheme:e.state.colorTheme,lightenColor:t,allCategories:e.state.allCategories})}}),l.a.createElement(h.a,{path:"/Kalkulator-wydatkow-React/o-aplikacji",component:O}),l.a.createElement(h.a,{path:"/Kalkulator-wydatkow-React/ustawienia",render:function(){return l.a.createElement(x,{colorTheme:e.state.colorTheme,click:e.handleChangeColorTheme,allCategories:e.state.allCategories,remove:e.handleRemoveFromCategories,newCategory:e.state.newCategory,change:e.handleChangeInput,add:e.handleAddToCategories,errMsgCategories:e.state.errMsgCategories})}}),l.a.createElement(h.a,{path:"/Kalkulator-wydatkow-React/ocena",render:function(){return l.a.createElement(_,{colorTheme:e.state.colorTheme})}}),l.a.createElement(h.a,{path:"/Kalkulator-wydatkow-React/opinie",component:D})))))}}]),a}(n.Component);c.a.render(l.a.createElement(K,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.82e412df.chunk.js.map