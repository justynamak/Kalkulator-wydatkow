(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a(46)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=(a(30),a(14)),i=a(6),s=a(7),m=a(9),u=a(8),g=a(10),h=a(12),d=a(11),p=(a(20),a(5)),f=(a(31),function(e){var t=e.change,a=e.title,n=e.price,c=e.click,r=e.categories,o=e.select,i=e.background,s=e.allCategories.map(function(e){return l.a.createElement("option",{key:e,value:e},e)});return l.a.createElement("form",{action:"",className:"form"},l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"name"},"Nazwa"),l.a.createElement("input",{type:"text",id:"name",name:"title",onChange:t,value:a})),l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"price"},"Kwota "),l.a.createElement("input",{type:"number",id:"price",name:"price",onChange:t,value:n})),l.a.createElement("div",{className:"form__field"},l.a.createElement("label",{htmlFor:"categories"},"Kategoria"),l.a.createElement("select",{name:"categories",id:"categories",value:r,onChange:o},s)),l.a.createElement("button",{onClick:c,className:"form__button",title:"dodaj wydatek",style:{background:"".concat(i)}},"+"))}),v=(a(32),function(e){var t=e.title,a=e.price,n=e.category,c=e.id,r=e.currentDate,o=e.click,i=e.change,s=e.color;return l.a.createElement("li",{className:"item","data-id":c},l.a.createElement("label",{className:"item__label",htmlFor:"price"},"Nazwa:"),l.a.createElement("input",{name:"title",className:"item__title ".concat(""===t?"item--danger":""),value:t,onChange:i,id:"price"}),l.a.createElement("label",{className:"item__label",htmlFor:"price-second"},"Cena:"),l.a.createElement("input",{name:"price",className:"item__price ".concat(""===a?"item--danger":""),value:a,onChange:i,id:"price-second"}),l.a.createElement("p",{className:"item__label"},"Kategoria:"),l.a.createElement("span",{className:"item__category"},n),l.a.createElement("p",{className:"item__label"},"Data dodania:"),l.a.createElement("span",{className:"item__date"},r),l.a.createElement("button",{className:"close",title:"usu\u0144 wydatek",onClick:o,style:{borderColor:"".concat(s),color:"".concat(s)}},"x"))}),E=(a(33),function(e){var t=e.allExpenses,a=e.click,n=e.change,c=e.color,r=t.map(function(e){return l.a.createElement(v,{key:e.id,title:e.title,price:e.price,category:e.category,id:e.id,currentDate:e.currentDate,click:a,change:n,color:c})});return l.a.createElement("ul",{className:"list-items"},r)}),k=(a(34),function(e){var t=e.click,a=e.color;return l.a.createElement("button",{className:"btn-remove",onClick:t,style:{color:"".concat(a)},title:"Usu\u0144 wszystkie"},l.a.createElement("i",{className:"fas fa-trash"}))}),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",price:"",isActivePanel:!1,allExpenses:[],category:"\u017bywno\u015b\u0107"},a.handleChangeInput=function(e){var t="price"===e.target.name?parseFloat(e.target.value):e.target.value;a.setState(Object(p.a)({},e.target.name,t))},a.handleEditChangeInput=function(e){var t=parseFloat(e.target.parentElement.dataset.id),n=a.state.allExpenses.findIndex(function(e){return e.id===t}),l=Object(o.a)(a.state.allExpenses)[n];"title"===e.target.name?l[e.target.name]=e.target.value:l[e.target.name]=parseFloat(e.target.value)||"",""===e.target.value||parseFloat(e.target.value)<1?e.target.classList.add("item--danger"):e.target.classList.remove("item--danger");var c=Object(o.a)(a.state.allExpenses);c[n]=l,a.setState({allExpenses:c})},a.handleClickButton=function(e){if(e.preventDefault(),a.state.price>0&&a.state.title){var t;if(a.state.allExpenses.length){var n=a.state.allExpenses.map(function(e){return e.id});t=n[n.length-1]+1}else t=a.state.allExpenses.length+1;var l=(new Date).toLocaleString(),c={id:t,title:a.state.title,price:a.state.price,category:a.state.category,currentDate:l},r=[].concat(Object(o.a)(a.state.allExpenses),[c]);a.setState(function(e){return{allExpenses:r,title:"",price:"",isActivePanel:!0}})}},a.handleChangeSelect=function(e){a.setState({category:e.target.value})},a.handleClickButtonRemove=function(e){var t=parseFloat(e.target.parentElement.dataset.id),n=a.state.allExpenses.filter(function(e){return e.id!==t});n.length||a.setState({isActivePanel:!1}),a.setState({allExpenses:n})},a.handleClickButtonRemoveAll=function(){a.setState({allExpenses:[],isActivePanel:!1})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("expenses")){var e=JSON.parse(localStorage.getItem("expenses"));e.length&&this.setState({allExpenses:e,isActivePanel:!0})}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.allExpenses);localStorage.setItem("expenses",e)}},{key:"render",value:function(){var e=this.state.allExpenses.map(function(e){return""!==e.price&&e.price}).reduce(function(e,t){return e+t},0).toFixed(2),t=this.props,a=t.colorTheme,n=t.lightenColor,c=t.allCategories;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sticky"},l.a.createElement("h1",null,"Kalkulator wydatk\xf3w"),l.a.createElement(f,{change:this.handleChangeInput,title:this.state.title,price:this.state.price,click:this.handleClickButton,categories:this.state.categories,select:this.handleChangeSelect,background:a,allCategories:c}),l.a.createElement("div",{className:"sticky__wrapper"},l.a.createElement("p",{style:{color:"".concat(a),fontWeight:"bold"}},"Razem: ",e," z\u0142"),this.state.allExpenses.length>0&&l.a.createElement(k,{click:this.handleClickButtonRemoveAll,color:a}))),l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"panel-labels",style:{backgroundColor:n}},l.a.createElement("p",null,"Nazwa"),l.a.createElement("p",null,"Cena"),l.a.createElement("p",null,"Kategoria"),l.a.createElement("p",null,"Data dodania"),l.a.createElement("div",null)),this.state.isActivePanel?l.a.createElement(E,{allExpenses:this.state.allExpenses,click:this.handleClickButtonRemove,change:this.handleEditChangeInput,color:a}):l.a.createElement("p",null,"brak wydatk\xf3w")))}}]),t}(n.Component),y=(a(35),a(36),function(e){var t,a,n,c=e.colorTheme,r=e.lightenColor,o=e.click;function i(){window.innerWidth<1025&&o()}return l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list",style:{backgroundColor:"".concat(c)}},l.a.createElement("li",null,l.a.createElement(h.b,{to:"/o-aplikacji",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(r),color:"#000"},onClick:i},"O aplikacji")),l.a.createElement("li",null,l.a.createElement(h.b,{exact:!0,to:"/",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(r),color:"#000"},onClick:i},"Kalkulator wydatk\xf3w")),l.a.createElement("li",null,l.a.createElement(h.b,(t={to:"/ocena",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(p.a)(t,"activeStyle",{backgroundColor:"".concat(r),color:"#000"}),Object(p.a)(t,"onClick",i),t),"Oce\u0144 aplikacj\u0119")),l.a.createElement("li",null,l.a.createElement(h.b,(a={to:"/opinie",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(p.a)(a,"activeStyle",{backgroundColor:"".concat(r),color:"#000"}),Object(p.a)(a,"onClick",i),a),"Opinie")),l.a.createElement("li",null,l.a.createElement(h.b,(n={to:"/ustawienia",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(p.a)(n,"activeStyle",{backgroundColor:"".concat(r),color:"#000"}),Object(p.a)(n,"onClick",i),n),"Ustawienia"))))}),b=(a(42),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"O aplikacji"),l.a.createElement("div",{className:"about-wrapper"},l.a.createElement("i",{className:"fas fa-rocket fa-5x"}),l.a.createElement("p",null,"Projekt stworzony w oparciu o bibliotek\u0119 React i \u015brodowisko create-react-app. Aplikacja umo\u017cliwia dodawanie i usuwanie wydatk\xf3w. Kalkulator podaje sum\u0119 wszystkich wydatk\xf3w oraz daty ich dodania. Program umo\u017cliwia zapisywanie wydatk\xf3w. Nawet po opuszczeniu przegl\u0105darki twoje wydatki b\u0119d\u0119 nadal dost\u0119pne!")))}),N=(a(43),function(e){var t=e.colorTheme,a=e.click,n=e.allCategories,c=e.remove,r=e.change,o=e.newCategory,i=e.add,s=e.errMsgCategories,m=n.map(function(e){return l.a.createElement("li",{key:e,onClick:function(){return c(e)}},e," ",l.a.createElement("span",{className:"categorie-remove"},"x"))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Ustawienia"),l.a.createElement("section",{className:"setup-color"},l.a.createElement("h3",null,"Wybierz kolor motywu"),l.a.createElement("div",{className:"colors-wrapper"},l.a.createElement("div",{className:"color color-violet","data-name":"#8b17ff",onClick:a,style:"#8b17ff"===t?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-brown","data-name":"#ab8f8f",onClick:a,style:"#ab8f8f"===t?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-blue","data-name":"#008080",onClick:a,style:"#008080"===t?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))),l.a.createElement("div",{className:"color color-pink","data-name":"#ae0057",onClick:a,style:"#ae0057"===t?{color:"#fff"}:null},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-check"}))))),l.a.createElement("section",{className:"categories"},l.a.createElement("h3",null,"Dostosuj kategorie"),l.a.createElement("div",{className:"categories-container"},l.a.createElement("input",{type:"text",placeholder:"wpisz nazw\u0119 kategorii",value:o,onChange:r,maxLength:"20"}),l.a.createElement("button",{className:"btn",style:{backgroundColor:t},onClick:i},"Dodaj")),l.a.createElement("ul",{className:"categories-setup"},m),s?l.a.createElement("p",{style:{color:"red"}},s):null))}),w=(a(44),"https://jsonplaceholder.typicode.com/users");function j(e,t){localStorage.setItem(e,t)}function S(e){return!!localStorage.getItem(e)&&localStorage.getItem(e)}var O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={active:"",msg:""},a.handleClick=function(e){a.state.msg||a.setState({active:e.target.id})},a.handleClickButton=function(){a.state.msg||a.setState({msg:"Dzi\u0119kuj\u0119 za oddanie g\u0142osu"}),j("rating",a.state.active)},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=S("rating");e&&this.setState({active:e,msg:"Dzi\u0119kuj\u0119 za oddanie g\u0142osu"})}},{key:"render",value:function(){var e=this.props.colorTheme;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Oce\u0144 aplikacj\u0119"),l.a.createElement("div",{className:"rating-wrapper"},l.a.createElement("i",{className:"far fa-frown fa-6x",id:"bad",onClick:this.handleClick,style:"bad"===this.state.active?{color:"#ff9292"}:null}),l.a.createElement("i",{className:"far fa-meh fa-6x",id:"neutral",onClick:this.handleClick,style:"neutral"===this.state.active?{color:"#f9ce54"}:null}),l.a.createElement("i",{className:"far fa-smile fa-6x",id:"super",onClick:this.handleClick,style:"super"===this.state.active?{color:"#52ef8a"}:null})),this.state.active&&!this.state.msg?l.a.createElement("button",{className:"btn",style:{backgroundColor:"".concat(e)},onClick:this.handleClickButton},"Oceniam"):null,this.state.msg?l.a.createElement("p",{className:"rating-msg"},this.state.msg):null)}}]),t}(n.Component),x=(a(45),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a.getData=function(){fetch(w).then(function(e){return e.ok?e.json():Promise.reject(e)}).then(function(e){var t=e.map(function(e){return l.a.createElement("li",{key:e.id},e.name," :"," ",l.a.createElement("span",{className:"user-text"},e.company.catchPhrase))});a.setState({comments:t})}).catch(function(e){404===e.status?a.setState({errMsg:"B\u0142\u0105d: \u017c\u0105dany adres nie istnieje"}):a.setState({errMsg:"Nie uda\u0142o si\u0119 pobra\u0107 danych"})})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement("section",{className:"reviews"},l.a.createElement("h2",null,"Opinie"),l.a.createElement("ul",null,this.state.comments?this.state.comments:this.state.errMsg),l.a.createElement("p",null,"*opinie s\u0105 pobierane z przyk\u0142adowego API"))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={showNav:!1,colorTheme:"#8b17ff",allCategories:["\u017bywno\u015b\u0107","Op\u0142aty","Jedzenie na mie\u015bcie","Kredyt","Inna"],newCategory:"",errMsg:""},a.handleToggleNav=function(){a.setState({showNav:!a.state.showNav})},a.handleCloseMenu=function(){a.setState({showNav:!1})},a.handleChangeColorTheme=function(e){var t=e.currentTarget.dataset.name;a.setState({colorTheme:t}),j("colorTheme",t)},a.handleRemoveFromCategories=function(e){if(a.state.allCategories.length>2){var t=a.state.allCategories.filter(function(t){return t!==e});a.setState({allCategories:t}),j("categories",JSON.stringify(t))}else a.setState({errMsgCategories:"Przynajmniej dwie kategorie musz\u0105 pozosta\u0107 wprowadzone "})},a.handleAddToCategories=function(){var e=a.state,t=e.newCategory,n=e.allCategories;if(t.length>0&&n.length<=15){var l=Object(o.a)(a.state.allCategories);l.find(function(e){return e===t})?a.setState({errMsgCategories:"Taka kategoria zosta\u0142a ju\u017c dodana"}):(l.push(t),a.setState({allCategories:l,newCategory:"",errMsgCategories:""}),j("categories",JSON.stringify(l)))}else n.length>15&&a.setState({errMsgCategories:"Mo\u017cesz doda\u0107 maksymalnie 15 kategorii"})},a.handleChangeInput=function(e){var t=e.target.value;a.setState({newCategory:t})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"lightenDarkenColor",value:function(e,t){var a=!1;"#"==e[0]&&(e=e.slice(1),a=!0);var n=parseInt(e,16),l=(n>>16)+t;l>255?l=255:l<0&&(l=0);var c=(n>>8&255)+t;c>255?c=255:c<0&&(c=0);var r=(255&n)+t;return r>255?r=255:r<0&&(r=0),(a?"#":"")+(r|c<<8|l<<16).toString(16)}},{key:"componentDidMount",value:function(){var e=S("colorTheme"),t=S("categories");e&&this.setState({colorTheme:e}),t&&this.setState({allCategories:JSON.parse(t)})}},{key:"render",value:function(){var e=this,t=["app",this.state.showNav?"showNav":"hideNav"],a=this.lightenDarkenColor(this.state.colorTheme,45),n=this.state.showNav?"fas fa-arrow-left":"fas fa-bars";return l.a.createElement(h.a,{basename:"/Kalkulator-wydatkow-React"},l.a.createElement("div",{className:"container"}),l.a.createElement("div",{className:"hamburger",onClick:this.handleToggleNav},l.a.createElement("i",{className:n})),l.a.createElement("div",{className:t.join(" ")},l.a.createElement(y,{colorTheme:this.state.colorTheme,lightenColor:a,click:this.handleCloseMenu}),l.a.createElement("div",{className:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(C,{colorTheme:e.state.colorTheme,lightenColor:a,allCategories:e.state.allCategories})}}),l.a.createElement(d.a,{path:"/o-aplikacji",component:b}),l.a.createElement(d.a,{path:"/ustawienia",render:function(){return l.a.createElement(N,{colorTheme:e.state.colorTheme,click:e.handleChangeColorTheme,allCategories:e.state.allCategories,remove:e.handleRemoveFromCategories,newCategory:e.state.newCategory,change:e.handleChangeInput,add:e.handleAddToCategories,errMsgCategories:e.state.errMsgCategories})}}),l.a.createElement(d.a,{path:"/ocena",render:function(){return l.a.createElement(O,{colorTheme:e.state.colorTheme})}}),l.a.createElement(d.a,{path:"/opinie",component:x})))))}}]),t}(n.Component);r.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3b7a05a0.chunk.js.map