(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{334:function(e,t,a){e.exports=a(465)},339:function(e,t,a){},341:function(e,t,a){},345:function(e,t,a){},366:function(e,t,a){},462:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=(a(339),a(56)),i=a(65),l=a.n(i),u=a(109),d=a(37),m=a(487),f=a(491),p=a(283),h=a(494),v=a(270),b=a(165),g=a(72);a(341);var E=function(e){var t=e.title,a=e.cases,n=e.isRed,c=e.isOrange,o=e.isGreen,s=e.active,i=e.total,l=Object(b.a)(e,["title","cases","isRed","isOrange","isGreen","active","total"]);return r.a.createElement(m.a,{onClick:l.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(n&&"infoBox--red"," ").concat(c&&"infoBox--orange"," ").concat(o&&"infoBox--green")},r.a.createElement(f.a,null,r.a.createElement(g.a,{className:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!n&&!c&&"infoBox__cases--green")},a),r.a.createElement(g.a,{className:"infoBox__total"},i," Total")))},y=a(323),O=a(46),j=a.n(O),_=a(495),x=a(496),w={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgb(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgb(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgb(251, 68, 67, 0.5)",multiplier:2e3}},C=function(e){return e?"+".concat(j()(e).format("0.0a")):"+0"},N=function(e){return Object(y.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},k=a(497),B=a(498);a(345);var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(k.a,{center:n,zoom:c},r.a.createElement(B.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href=" https://www.openstreetmap.org/">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:w[t].hex,fillColor:w[t].hex,radius:Math.sqrt(e[t])*w[t].multiplier},r.a.createElement(x.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",j()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",j()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",j()(e.deaths).format("0,0")))))}))}(t,a)))},R=a(318),I=a.n(R),W=(a(366),[{name:"flag",label:"Flag",options:{filter:!1,sort:!1,customBodyRender:function(e,t,a){return r.a.createElement("img",{src:e,alt:"",width:"40",height:"25"})}}},{name:"country",label:"Country",options:{filter:!0,sort:!0}},{name:"cases",label:"Cases",options:{filter:!0,sort:!0,customBodyRender:function(e,t,a){return j()(e).format("0,0")}}},{name:"recovered",label:"Recovered",options:{filter:!0,sort:!0,customBodyRender:function(e,t,a){return j()(e).format("0,0")}}},{name:"deaths",label:"Deaths",options:{filter:!0,sort:!0,customBodyRender:function(e,t,a){return j()(e).format("0,0")}}}]),D={filterType:"dropdown",rowsPerPage:5};function z(e){var t=e.countries;return r.a.createElement(I.a,{title:"Live cases by country",data:t.map((function(e){return[e.countryInfo.flag,e.country,e.cases,e.recovered,e.deaths]})),columns:W,options:D})}var L=a(168),T={hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgb(204, 16, 52, 0.5)",multiplier:800},M={hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgb(125, 215, 29, 0.5)",multiplier:1200},P={hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgb(251, 68, 67, 0.5)",multiplier:2e3},A={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callback:{label:function(e,t){return j()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return j()(e).format("0a")}}}]}},F=function(e,t){var a,n=[];for(var r in e){if(a){var c={x:r,y:e[r]-a};n.push(c)}a=e[r]}return n},G=function(e){var t=F(e.cases),a=F(e.recovered),n=F(e.deaths);return[t,a,n]};var J=function(e){var t,a=e.country,c=void 0===a?"Worldwide":a,o=Object(b.a)(e,["country"]),i=Object(n.useState)({cases:[],recovered:[],deaths:[]}),p=Object(d.a)(i,2),h=p[0],v=p[1],g=Object(n.useState)("Worldwide"),E=Object(d.a)(g,2),y=E[0],O=E[1];return Object(n.useEffect)((function(){var e="Worldwide"===c?"https://disease.sh/v3/covid-19/historical/all?lastdays=120":"https://disease.sh/v3/covid-19/historical/".concat(c,"?lastdays=120");(function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(e){return e.json()})).then((function(e){"Worldwide"!==c&&(O(e.country),e=e.timeline);var t=G(e,c),a=Object(d.a)(t,3),n=a[0],r=a[1],o=a[2];v({cases:n,recovered:r,deaths:o})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[c]),r.a.createElement("div",{className:o.className},(null===(t=h.cases)||void 0===t?void 0:t.length)>0&&r.a.createElement("div",{className:"graph__cards"},r.a.createElement(m.a,{className:"graph__card"},r.a.createElement(f.a,null,r.a.createElement(L.Line,{options:Object(s.a)(Object(s.a)({},A),{},{title:{display:!0,text:"Cases: "+y}}),data:{datasets:[{data:h.cases,backgroundColor:T.half_op,borderColor:T.hex}]}}))),r.a.createElement(m.a,{className:"graph__card"},r.a.createElement(f.a,null,r.a.createElement(L.Line,{options:Object(s.a)(Object(s.a)({},A),{},{title:{display:!0,text:"Recovered: "+y}}),data:{datasets:[{data:h.recovered,backgroundColor:M.half_op,borderColor:M.hex}]}}))),r.a.createElement(m.a,{className:"graph__card"},r.a.createElement(f.a,null,r.a.createElement(L.Line,{options:Object(s.a)(Object(s.a)({},A),{},{title:{display:!0,text:"Deaths: "+y}}),data:{datasets:[{data:h.deaths,backgroundColor:P.half_op,borderColor:P.hex}]}})))))};a(462),a(463);var Y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("Worldwide"),i=Object(d.a)(o,2),b=i[0],g=i[1],y=Object(n.useState)({}),O=Object(d.a)(y,2),j=O[0],_=O[1],x=Object(n.useState)([]),w=Object(d.a)(x,2),k=w[0],B=w[1],R=Object(n.useState)({lat:34.80746,lng:-40.4796}),I=Object(d.a)(R,2),W=I[0],D=I[1],L=Object(n.useState)(3),T=Object(d.a)(L,2),M=T[0],P=T[1],A=Object(n.useState)([]),F=Object(d.a)(A,2),G=F[0],Y=F[1],q=Object(n.useState)("cases"),H=Object(d.a)(q,2),$=H[0],K=H[1],Q=Object(v.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:20}}})();Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){_(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso3,flag:e.countryInfo.flag}}));t.push({name:"Worldwide",value:"Worldwide",flag:"https://cdn2.iconfinder.com/data/icons/pittogrammi/142/39-512.png"});var a=N(e);B(a),Y(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==a){e.next=2;break}return e.abrupt("return");case 2:return n=a.value,r="Worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=6,fetch(r).then((function(e){return e.json()})).then((function(e){g(n),_(e),"Worldwide"!==n?(D([e.countryInfo.lat,e.countryInfo.long]),P(3)):P(2)}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__mapContainer"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",{class:"main-heading"},r.a.createElement("span",{class:"main-heading-primary"},"Covid-19"),r.a.createElement("span",{class:"main-heading-secondary"},"Tracker")),r.a.createElement(h.a,{id:"country-select",className:"app__dropdown",style:{width:300},options:a,classes:{option:Q.option},autoHighlight:!0,onChange:U,getOptionLabel:function(e){return e.name},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("img",{src:e.flag,alt:"",width:"20",height:"20"})),e.name)},renderInput:function(e){return r.a.createElement(p.a,Object.assign({},e,{label:"Choose a country",variant:"outlined",inputProps:Object(s.a)(Object(s.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})),r.a.createElement("div",{className:"app__stats"},r.a.createElement(E,{isRed:!0,active:"cases"===$,onClick:function(e){return K("cases")},title:"Coronavirus Cases",total:C(j.cases),cases:C(j.todayCases)}),r.a.createElement(E,{isGreen:!0,active:"recovered"===$,onClick:function(e){return K("recovered")},title:"Recovered",total:C(j.recovered),cases:C(j.todayRecovered)}),r.a.createElement(E,{isOrange:!0,active:"deaths"===$,onClick:function(e){return K("deaths")},title:"Deaths",total:C(j.deaths),cases:C(j.todayDeaths)})),r.a.createElement(S,{countries:G,casesType:$,center:W,zoom:M})),r.a.createElement("div",{className:"app__TableChartContainer"},r.a.createElement(m.a,null,r.a.createElement(f.a,{class:"table-chart-container"},r.a.createElement(z,{className:"app__table",countries:k}),r.a.createElement(J,{className:"app__graph",country:b})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[334,1,2]]]);
//# sourceMappingURL=main.88fed070.chunk.js.map