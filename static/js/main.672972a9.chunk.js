(this.webpackJsonpcovid_19_graph_app=this.webpackJsonpcovid_19_graph_app||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2ebve",card:"Cards_card__1AdUL",infected:"Cards_infected__1AKTa",recovered:"Cards_recovered__3nIz6",deaths:"Cards_deaths__18bYa"}},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(73),d=a(74),p=a(86),f=a(85),m=(a(95),a(226)),v=a(231),h=a(227),b=a(228),E=a(33),y=a.n(E),g=a(34),_=a.n(g),x=a(13),C=a.n(x),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:C.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Active cases of COVID-19"))),r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Recovered cases of COVID-19"))),r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Death cases of COVID-19"))))):"loading..."},O=a(32),j=a(35),D=a.n(j),k="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t&&"global"!==t?"".concat(k,"/countries/").concat(t):k,e.prev=1,e.next=4,D.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:u,lastUpdate:l},e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(46),U=a(82),B=a.n(U),V=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(O.a)(c,2),u=o[0],i=o[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=t.confirmed?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lable:"People",backgroundColor:["rgba(0, 0 ,255, 0.5)","rgba(0, 255 ,0, 0.5)","rgba(255, 0 ,0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(a)}}}):null,p=u[0]?r.a.createElement(A.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:B.a.container},a&&"global"!==a?d:p)},R=a(230),J=a(229),P=a(83),T=a.n(P),Y=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(R.a,{className:T.a.formControl},r.a.createElement(J.a,{default:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},z=a(84),G=a.n(z),K=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement(w,{data:t}),r.a.createElement(Y,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))},82:function(e,t,a){e.exports={container:"Chart_container__2xsfw"}},83:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2QhNh"}},84:function(e,t,a){e.exports={container:"App_container__DTnUV",header:"App_header__3hYA1"}},89:function(e,t,a){e.exports=a(209)}},[[89,1,2]]]);
//# sourceMappingURL=main.672972a9.chunk.js.map