(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(22),r=a.n(c),o=(a(30),a(10)),i=a(11),s=a(13),m=a(12),u=a(14),d=a(7),p=a(6),h=(a(20),a(15)),v=a(5),g=(a(31),function(e){var t=e.change,a=e.title,l=e.price,c=e.click,r=e.categories,o=e.select,i=e.background;return n.a.createElement("form",{action:"",className:"form"},n.a.createElement("div",{className:"form__field"},n.a.createElement("label",{htmlFor:"name"},"Nazwa"),n.a.createElement("input",{type:"text",id:"name",name:"title",onChange:t,value:a})),n.a.createElement("div",{className:"form__field"},n.a.createElement("label",{htmlFor:"price"},"Kwota "),n.a.createElement("input",{type:"number",id:"price",name:"price",onChange:t,value:l})),n.a.createElement("div",{className:"form__field"},n.a.createElement("label",{htmlFor:"categories"},"Kategoria"),n.a.createElement("select",{name:"categories",id:"categories",value:r,onChange:o},n.a.createElement("option",{value:"\u017bywno\u015b\u0107"},"\u017bywno\u015b\u0107"),n.a.createElement("option",{value:"Op\u0142aty"},"Op\u0142aty"),n.a.createElement("option",{value:"Jedzenie na mie\u015bcie"},"Jedzenie na mie\u015bcie"),n.a.createElement("option",{value:"Kredyt"},"Kredyt"),n.a.createElement("option",{value:"Inna"},"Inna"))),n.a.createElement("button",{onClick:c,className:"form__button",title:"dodaj wydatek",style:{background:"".concat(i)}},"+"))}),E=(a(32),function(e){var t=e.title,a=e.price,l=e.category,c=e.id,r=e.currentDate,o=e.click,i=e.change,s=e.color;return n.a.createElement("li",{className:"item","data-id":c},n.a.createElement("label",{className:"item__label",htmlFor:"price"},"Nazwa:"),n.a.createElement("input",{name:"title",className:"item__title ".concat(""===t?"item--danger":""),value:t,onChange:i,id:"price"}),n.a.createElement("label",{className:"item__label",htmlFor:"price-second"},"Cena:"),n.a.createElement("input",{name:"price",className:"item__price ".concat(""===a?"item--danger":""),value:a,onChange:i,id:"price-second"}),n.a.createElement("p",{className:"item__label"},"Kategoria:"),n.a.createElement("span",{className:"item__category"},l),n.a.createElement("p",{className:"item__label"},"Data dodania:"),n.a.createElement("span",{className:"item__date"},r),n.a.createElement("button",{className:"close",title:"usu\u0144 wydatek",onClick:o,style:{borderColor:"".concat(s),color:"".concat(s)}},"x"))}),k=(a(33),function(e){var t=e.allExpenses,a=e.click,l=e.change,c=e.color,r=t.map(function(e){return n.a.createElement(E,{key:e.id,title:e.title,price:e.price,category:e.category,id:e.id,currentDate:e.currentDate,click:a,change:l,color:c})});return n.a.createElement("ul",{className:"list-items"},r)}),w=(a(34),function(e){var t=e.click,a=e.color;return n.a.createElement("button",{className:"btn-remove",onClick:t,style:{color:"".concat(a)},title:"Usu\u0144 wszystkie"},n.a.createElement("i",{class:"fas fa-trash"}))}),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",price:"",isActivePanel:!1,allExpenses:[],category:"\u017bywno\u015b\u0107"},a.handleChangeInput=function(e){var t="price"===e.target.name?parseFloat(e.target.value):e.target.value;a.setState(Object(v.a)({},e.target.name,t))},a.handleEditChangeInput=function(e){var t=parseFloat(e.target.parentElement.dataset.id),l=a.state.allExpenses.findIndex(function(e){return e.id===t}),n=Object(h.a)(a.state.allExpenses)[l];"title"===e.target.name?n[e.target.name]=e.target.value:n[e.target.name]=parseFloat(e.target.value)||"",""===e.target.value||parseFloat(e.target.value)<1?e.target.classList.add("item--danger"):e.target.classList.remove("item--danger");var c=Object(h.a)(a.state.allExpenses);c[l]=n,a.setState({allExpenses:c})},a.handleClickButton=function(e){if(e.preventDefault(),a.state.price>0&&a.state.title){var t;if(a.state.allExpenses.length){var l=a.state.allExpenses.map(function(e){return e.id});t=l[l.length-1]+1}else t=a.state.allExpenses.length+1;var n=(new Date).toLocaleString(),c={id:t,title:a.state.title,price:a.state.price,category:a.state.category,currentDate:n},r=[].concat(Object(h.a)(a.state.allExpenses),[c]);a.setState(function(e){return{allExpenses:r,title:"",price:"",isActivePanel:!0}})}},a.handleChangeSelect=function(e){a.setState({category:e.target.value})},a.handleClickButtonRemove=function(e){var t=parseFloat(e.target.parentElement.dataset.id),l=a.state.allExpenses.filter(function(e){return e.id!==t});l.length||a.setState({isActivePanel:!1}),a.setState({allExpenses:l})},a.handleClickButtonRemoveAll=function(){a.setState({allExpenses:[],isActivePanel:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("expenses")){var e=JSON.parse(localStorage.getItem("expenses"));this.setState({allExpenses:e,isActivePanel:!0})}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.allExpenses);localStorage.setItem("expenses",e)}},{key:"render",value:function(){var e=this.state.allExpenses.map(function(e){return""!==e.price&&e.price}).reduce(function(e,t){return e+t},0).toFixed(2),t=this.props,a=t.colorTheme,l=t.lightenColor;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sticky"},n.a.createElement("h1",null,"Kalkulator wydatk\xf3w"),n.a.createElement(g,{change:this.handleChangeInput,title:this.state.title,price:this.state.price,click:this.handleClickButton,categories:this.state.categories,select:this.handleChangeSelect,background:a}),n.a.createElement("div",{className:"sticky__wrapper"},n.a.createElement("p",{style:{color:"".concat(a),fontWeight:"bold"}},"Razem: ",e," z\u0142"),this.state.allExpenses.length>0&&n.a.createElement(w,{click:this.handleClickButtonRemoveAll,color:a}))),n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"panel-labels",style:{backgroundColor:l}},n.a.createElement("p",null,"Nazwa"),n.a.createElement("p",null,"Cena"),n.a.createElement("p",null,"Kategoria"),n.a.createElement("p",null,"Data dodania"),n.a.createElement("div",null)),this.state.isActivePanel?n.a.createElement(k,{allExpenses:this.state.allExpenses,click:this.handleClickButtonRemove,change:this.handleEditChangeInput,color:a}):n.a.createElement("p",null,"brak wydatk\xf3w")))}}]),t}(l.Component),y=(a(35),a(36),function(e){var t,a,l,c=e.colorTheme,r=e.lightenColor,o=e.click;function i(){window.innerWidth<1025&&o()}return n.a.createElement("nav",{className:"nav"},n.a.createElement("ul",{className:"nav__list",style:{backgroundColor:"".concat(c)}},n.a.createElement("li",null,n.a.createElement(d.b,{to:"/Kalkulator-wydatkow-React/o-aplikacji",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(r)},onClick:i},"O aplikacji")),n.a.createElement("li",null,n.a.createElement(d.b,{exact:!0,to:"/Kalkulator-wydatkow-React/",activeClassName:"activeItemNav",activeStyle:{backgroundColor:"".concat(r)},onClick:i},"Kalkulator wydatk\xf3w")),n.a.createElement("li",null,n.a.createElement(d.b,(t={to:"/Kalkulator-wydatkow-React/ocena",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(v.a)(t,"activeStyle",{backgroundColor:"".concat(r)}),Object(v.a)(t,"onClick",i),t),"Oce\u0144 aplikacj\u0119")),n.a.createElement("li",null,n.a.createElement(d.b,(a={to:"/Kalkulator-wydatkow-React/ustawienia",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(v.a)(a,"activeStyle",{backgroundColor:"".concat(r)}),Object(v.a)(a,"onClick",i),a),"Ustawienia")),n.a.createElement("li",null,n.a.createElement(d.b,(l={to:"/Kalkulator-wydatkow-React/kontakt",activeClassName:"activeItemNav",activeStyle:{color:"".concat(c)}},Object(v.a)(l,"activeStyle",{backgroundColor:"".concat(r)}),Object(v.a)(l,"onClick",i),l),"Kontakt"))))}),b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"O aplikacji"),n.a.createElement("p",null,"Projekt stworzony w oparciu o bibliotek\u0119 React i \u015brodowisko create-react-app. Aplikacja umo\u017cliwia dodawanie i usuwanie wydatk\xf3w. Kalkulator podaje sum\u0119 wszystkich wydatk\xf3w oraz daty ich dodania. Program umo\u017cliwia zapisywanie wydatk\xf3w. Nawet po opuszczeniu przegl\u0105darki twoje wydatki b\u0119d\u0119 nadal dost\u0119pne!"))},C=function(e){var t=e.colorTheme,a=e.change;return console.log(t),n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Ustawienia"),n.a.createElement("form",null,n.a.createElement("label",null,"Wybierz kolor motywu",n.a.createElement("input",{type:"color",value:t,onChange:a}))))},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showNav:!1,colorTheme:"#6602b7"},a.saveThemeToStorage=function(e){localStorage.setItem("colorTheme",e)},a.handleToggleNav=function(){a.setState({showNav:!a.state.showNav})},a.handleCloseMenu=function(){a.setState({showNav:!1})},a.handleChangeColorTheme=function(e){var t=e.target.value;a.setState({colorTheme:t}),a.saveThemeToStorage(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"lightenDarkenColor",value:function(e,t){var a=!1;"#"==e[0]&&(e=e.slice(1),a=!0);var l=parseInt(e,16),n=(l>>16)+t;n>255?n=255:n<0&&(n=0);var c=(l>>8&255)+t;c>255?c=255:c<0&&(c=0);var r=(255&l)+t;return r>255?r=255:r<0&&(r=0),(a?"#":"")+(r|c<<8|n<<16).toString(16)}},{key:"componentDidMount",value:function(){if(localStorage.getItem("colorTheme")){var e=localStorage.getItem("colorTheme");this.setState({colorTheme:e})}}},{key:"render",value:function(){var e=this,t=["app",this.state.showNav?"showNav":"hideNav"],a=this.lightenDarkenColor(this.state.colorTheme,45),l=this.state.showNav?"fas fa-arrow-left":"fas fa-bars";return n.a.createElement(d.a,null,n.a.createElement("div",{className:"container"}),n.a.createElement("div",{className:"hamburger",onClick:this.handleToggleNav},n.a.createElement("i",{className:l})),n.a.createElement("div",{className:t.join(" ")},n.a.createElement(y,{colorTheme:this.state.colorTheme,lightenColor:a,click:this.handleCloseMenu}),n.a.createElement("div",{className:"content"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/Kalkulator-wydatkow-React/",render:function(){return n.a.createElement(f,{colorTheme:e.state.colorTheme,lightenColor:a})}}),n.a.createElement(p.a,{path:"/Kalkulator-wydatkow-React/o-aplikacji",component:b}),n.a.createElement(p.a,{path:"/Kalkulator-wydatkow-React/ustawienia",render:function(){return n.a.createElement(C,{colorTheme:e.state.colorTheme,change:e.handleChangeColorTheme})}})))))}}]),t}(l.Component);r.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c417ca4c.chunk.js.map