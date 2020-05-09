(this.webpackJsonpcovid_19_graph_app=this.webpackJsonpcovid_19_graph_app||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2ebve",card:"Cards_card__1AdUL",infected:"Cards_infected__1AKTa",recovered:"Cards_recovered__3nIz6",deaths:"Cards_deaths__18bYa"}},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(73),s=a.n(u),l=a(6),i=a.n(l),d=a(10),p=a(74),f=a(75),m=a(88),v=a(87),h=a(76),b=a(227),E=a(232),g=a(228),y=a(229),_=a(33),x=a.n(_),C=a(34),w=a.n(C),O=a(13),j=a.n(O),D=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:j.a.container},r.a.createElement(b.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(b.a,{item:!0,component:E.a,xs:12,md:3,className:w()(j.a.card,j.a.infected)},r.a.createElement(g.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Active cases of COVID-19"))),r.a.createElement(b.a,{item:!0,component:E.a,xs:12,md:3,className:w()(j.a.card,j.a.recovered)},r.a.createElement(g.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Recovered cases of COVID-19"))),r.a.createElement(b.a,{item:!0,component:E.a,xs:12,md:3,className:w()(j.a.card,j.a.deaths)},r.a.createElement(g.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Death cases of COVID-19"))))):"loading..."},k=a(32),S=a(35),N=a.n(S),I="https://covid19.mathdro.id/api",A=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n,r,c,o,u,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t&&"global"!==t?"".concat(I,"/countries/").concat(t):I,e.prev=1,e.next=4,N.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,s=r.lastUpdate,l={confirmed:c,recovered:o,deaths:u,lastUpdate:s},e.abrupt("return",l);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(46),R=a(84),J=a.n(R),P=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(k.a)(c,2),u=o[0],s=o[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=t.confirmed?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lable:"People",backgroundColor:["rgba(0, 0 ,255, 0.5)","rgba(0, 255 ,0, 0.5)","rgba(255, 0 ,0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(a)}}}):null,p=u[0]?r.a.createElement(B.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:J.a.container},a&&"global"!==a?l:p)},T=a(231),Y=a(230),z=a(85),G=a.n(z),K=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(T.a,{className:G.a.formControl},r.a.createElement(Y.a,{default:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},L=a(86),M=a.n(L),Q=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:M.a.container},r.a.createElement(h.a,null,r.a.createElement("title",null,"COVID-19 Cases")," */}"),r.a.createElement(D,{data:t}),r.a.createElement(K,{handleCountryChange:this.handleCountryChange}),r.a.createElement(P,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement("div",null,r.a.createElement(s.a,{url:"http://oflisback.github.io/react-favicon/public/img/github.ico"}),r.a.createElement(Q,null)),document.getElementById("root"))},84:function(e,t,a){e.exports={container:"Chart_container__2xsfw"}},85:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2QhNh"}},86:function(e,t,a){e.exports={container:"App_container__DTnUV",header:"App_header__3hYA1"}},91:function(e,t,a){e.exports=a(210)}},[[91,1,2]]]);
//# sourceMappingURL=main.2c7ab8f0.chunk.js.map