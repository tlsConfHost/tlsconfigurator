(this.webpackJsonptlsconf=this.webpackJsonptlsconf||[]).push([[0],{16:function(e,t,a){e.exports=a(25)},21:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),i=(a(21),a(2)),s=a(5),c=a(3),m=a(7),u=a(8),f=a(10),d=a(9),p=a(11),h=a(4),g=a(1),C=function(e){var t=e.componentClassName+"-signal-slots",a=[t,e.Configuration.Modules[e.index].display?"".concat(t,"--displayed"):"".concat(t,"--hiden"),"Power Sockets"===e.Configuration.Modules[e.index].module_type?"".concat(t,"--ps"):null].filter(Boolean).join(" ");return r.a.createElement("img",{className:a,src:e.Configuration.Modules[e.index].img,alt:"signal-slot",onDrop:function(t){t.preventDefault();var a=JSON.parse(t.dataTransfer.getData("module"));e.setModule.apply(e,Object(i.a)(a).concat([e.index,e.supportFrame_index]))},onDragOver:function(e){e.preventDefault()}})},b=function(e){return r.a.createElement("img",{className:e.componentClassName+"-power-sockets",src:"img/signalslots ipl/power sockets/"+e.Configuration.platform\u0421hoiceDesc.powerSocketArticle+".png",alt:"power-sockets"})},_=function(e){return r.a.createElement("img",{className:e.componentClassName+"-conference-control",src:"img/layout-parts/conference-control-min.png",alt:"conference-control"})},v=function(e){return r.a.createElement("img",{className:e.componentClassName+"-conference-control-double-frame",src:"img/layout-parts/conference-control-double-frame-min.png",alt:"conference-control-double-frame"})},N=function(e){var t=e.Configuration.platform\u0421hoiceDesc,a="conf-main-left-middle-container_l1-layout-table";return r.a.createElement("div",{className:a},r.a.createElement("div",{className:a+"-top"}),r.a.createElement("div",{className:a+"-middle"},function(){var n,o=Array(t["power-sockets"]).fill().map((function(t,n){return r.a.createElement(b,{Configuration:e.Configuration,componentClassName:a+"-middle",key:"power-sockets_"+n})})),l=Array(t["conference-control"]).fill().map((function(t,n){return r.a.createElement(_,{Configuration:e.Configuration,componentClassName:a+"-middle",key:"conference-control_"+n})})),s=Array(t["conference-control-double-frame"]).fill().map((function(t,n){return r.a.createElement(v,{Configuration:e.Configuration,componentClassName:a+"-middle",key:"conference-control-double-frame_"+n})})),c=r.a.createElement("div",{style:t["signal-slots"]?{display:"flex"}:{display:"none"},className:a+"-middle-container",key:"signal-slots"},Array(t["signal-slots"]).fill().map((function(t,n){return r.a.createElement(C,{Configuration:e.Configuration,componentClassName:a+"-middle-container",index:n,setModule:e.setModule,key:"signal-slot_"+n})})));return n=o.length>2?2:t["conference-control"]||t["conference-control-double-frame"]?0:1,o.splice.apply(o,[n,0].concat(Object(i.a)(s),Object(i.a)(l),[c])),o}()),r.a.createElement("div",{className:a+"-bottom"}))},E=function(e){var t=e.Configuration.platform\u0421hoiceDesc,a="conf-main-left-middle-container_l1-layout-wall-premium-line-ipl",n=function(e){return e+" "+(t.isCoverHiden?e+"--hiddenCover":"")};return r.a.createElement("div",{draggable:"true",className:n(a)},t.support_frame_arr.map((function(o,l,i){var s=i.slice(0,l).reduce((function(e,t){return e+t["frame-width"]}),0);return r.a.createElement("div",{key:l,className:n(a+"-support-frame")},t.isCoverHiden?r.a.createElement("div",{className:a+"-support-frame--hiddenCover-left-attachment-point"}):null,r.a.createElement("div",{className:n(a+"-support-frame-top")},r.a.createElement("span",{className:n("dot")})),r.a.createElement("div",{className:n(a+"-support-frame-middle")},Array(o["frame-width"]).fill().map((function(t,n){return r.a.createElement(C,{key:n+l.toString(),Configuration:e.Configuration,componentClassName:a+"-support-frame-middle",index:s+n,setModule:e.setModule,supportFrame_index:l})}))),r.a.createElement("div",{className:n(a+"-support-frame-bottom")},r.a.createElement("span",{className:n("dot")})),t.isCoverHiden?r.a.createElement("div",{className:a+"-support-frame--hiddenCover-right-attachment-point"}):null)})))},y=function(e){var t=e.Configuration.platform\u0421hoiceDesc,a="conf-main-left-middle-container_l1-layout-wall-standard-line-ipl";return r.a.createElement("div",{className:a},r.a.createElement("img",{className:a+"-frame-img",src:t.img,alt:""}))},k=function(e){var t=e.Configuration.platform\u0421hoiceDesc,a="conf-main-left-middle-container_l1-layout-wall-universal-line-wp",n={height:165+t["offset-px"]+"px"};return r.a.createElement("div",{draggable:"true",className:a,style:n},r.a.createElement("img",{className:a+"-frame-img",src:t.img,alt:""}),r.a.createElement("div",{className:a+"-support-frame"},Array(t["signal-slots"]).fill().map((function(t,n){return r.a.createElement(C,{key:n,Configuration:e.Configuration,componentClassName:a+"-support-frame",index:n,setModule:e.setModule,supportFrame_index:0})}))))},D=function(e){var t=e.Configuration.platform\u0421hoiceDesc,a="conf-main-left-middle-container_l1-layout-wall-standard-line-ipl";return r.a.createElement("div",{className:a},r.a.createElement("img",{className:a+"-frame-img",src:t.img,alt:""}))},M=function(e){return r.a.createElement("div",{className:"conf-main-left-middle-container_l1-layout-floor"})},H=function e(t){var a=function(e){var a=/[A-Z]{1,}$/;return(!t.line||e.match(a)[0]===t.line[0]||/^[\d]{1,}/.test(t.line[0])&&"IPL"===e.match(a)[0])&&("TABLE"!==t.location||"Power Sockets"!==e)},n=t.className+"_l"+t.level;return r.a.createElement(g.d,{className:n},r.a.createElement(g.b,{className:n+"-list"},Object.keys(t.dataObj).filter((function(e){return a(e)})).map((function(e){return r.a.createElement(g.a,{className:n+"-list-tab",selectedClassName:n+"-list-tab--selected",key:e,onClick:t.reseting?function(){return t.frameResetHandler()}:null},e)}))),Object.keys(t.dataObj).filter((function(e){return a(e)})).map((function(a){return r.a.createElement(g.c,{className:n+"-panel",selectedClassName:n+"-panel--selected",key:a},t.level<1?r.a.createElement(e,{pathArray:[].concat(Object(i.a)(t.pathArray),[a]),level:t.level+1,dataObj:t.dataObj[a],className:t.className,onClick:t.onClick,draggable:t.draggable,frameResetHandler:t.frameResetHandler,location:t.location,reseting:t.reseting,pricelistinfo:t.pricelistinfo}):r.a.createElement(O,{pathArray:[].concat(Object(i.a)(t.pathArray),[a]),level:t.level+1,dataObj:t.dataObj[a],className:t.className,onClick:t.onClick,draggable:t.draggable,pricelistinfo:t.pricelistinfo}))})))},O=function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),o=a[0],l=a[1],s=e.className+"_l"+e.level,c=function(e){e.preventDefault()};return r.a.createElement("div",{className:s},e.dataObj.map((function(t,a,n){return t.article||(Object.keys(t).forEach((function(e){return null==t[e]&&delete t[e]})),(t={article_list:t}).sub_desc=Object.keys(t.article_list)[0],t.article=t.article_list[t.sub_desc]),t.img="img/"+e.pathArray.join("/").toLowerCase()+"/"+t.article+".png",r.a.createElement("div",{className:s+"-card",key:s+"-card_"+a,id:s+"-card_"+a},r.a.createElement("img",{className:[s+"-card-img",o===a?s+"-card-img--selected":""].join(" "),alt:t.article,src:t.img,key:s+"-card-img_"+a,onClick:function(){e.onClick&&e.onClick.apply(e,[t].concat(Object(i.a)(e.pathArray))),l(a)},onDragStart:function(a){return e.draggable&&function(e,t){e.dataTransfer.setData("module",JSON.stringify(t))}(a,[t].concat(Object(i.a)(e.pathArray)))},onDragOver:c,draggable:e.draggable}),r.a.createElement(S,{className:s+"-card-desc",isLeftPart:a<n.length/2},e.pricelistinfo[t.article]&&e.pricelistinfo[t.article].description1))})))},S=function(e){var t=Object(s.a)({},e.isLeftPart?"left":"right","50%"),a=Object(s.a)({},e.isLeftPart?"left":"right","0.4rem"),n=Object(s.a)({},e.isLeftPart?"left":"right","0"),o=Object(s.a)({},e.isLeftPart?"borderRight":"borderLeft","0.4rem solid black");return r.a.createElement("div",{style:t,className:e.className},r.a.createElement("span",{className:e.className+"-arrow",style:Object(c.a)({},n,{},o)}),r.a.createElement("span",{className:e.className+"-text",style:a},e.children))},j=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("div",{className:e.className+"-container"},e.instNumArr.map((function(t){return r.a.createElement("p",{className:e.className+"-container-p",key:t+e.className},t>9?t-10:t,". ",e.localStrings[e.Language][t])}))))},w=function(e){var t="conf-main-left-middle-container_l0";return r.a.createElement(g.d,{className:t},r.a.createElement(g.b,{className:t+"-list"},Object(i.a)(Array(e.QuantityOfConf).keys()).map((function(a){return r.a.createElement(g.a,{className:t+"-list-tab",selectedClassName:t+"-list-tab--selected",onClick:e.ConfNumberHandler.bind(void 0,a),key:a},"Configuration: ",a+1)})),r.a.createElement("button",{style:{display:e.QuantityOfConf<e.maxConfQuantity?"inline-block":"none"},className:"addTabs",onClick:e.AddConfHandler.bind(void 0)})),Object(i.a)(Array(e.QuantityOfConf).keys()).map((function(a){return r.a.createElement(g.c,{className:t+"-panel",selectedClassName:t+"-panel--selected",key:a},e.Configuration.platform\u0421hoiceDesc?r.a.createElement(A,{CoverHidenHandler:e.CoverHidenHandler,Configuration:e.Configuration,setModule:e.setModule}):null)})))},A=function(e){return r.a.createElement("div",{className:"conf-main-left-middle-container_l1"},r.a.createElement(x,{"platform\u0421hoiceDesc":e.Configuration.platform\u0421hoiceDesc,CoverHidenHandler:e.CoverHidenHandler}),"TABLE"===e.Configuration.platform\u0421hoiceDesc.location?r.a.createElement(N,{Configuration:e.Configuration,setModule:e.setModule}):"Premium Line IPL"===e.Configuration.platform\u0421hoiceDesc.line?r.a.createElement(E,{Configuration:e.Configuration,setModule:e.setModule}):"Standard Line IPL"===e.Configuration.platform\u0421hoiceDesc.line?r.a.createElement(y,{Configuration:e.Configuration,setModule:e.setModule}):"Universal Line WP"===e.Configuration.platform\u0421hoiceDesc.line?r.a.createElement(k,{Configuration:e.Configuration,setModule:e.setModule}):"Standard Line WP"===e.Configuration.platform\u0421hoiceDesc.line?r.a.createElement(D,{Configuration:e.Configuration,setModule:e.setModule}):r.a.createElement(M,{setModule:e.setModule,Configuration:e.Configuration}))},x=function(e){var t="conf-main-left-middle-container_l1-desc";return r.a.createElement("div",{className:t},r.a.createElement("p",null,e.platform\u0421hoiceDesc.line," - Support frame"),r.a.createElement("ul",null,r.a.createElement("li",null,e.platform\u0421hoiceDesc.line_desc),r.a.createElement("li",null,"Type: Special"),e.platform\u0421hoiceDesc["support-frame_amount"]?r.a.createElement("li",null,"Support frame (x",e.platform\u0421hoiceDesc["support-frame_amount"],")"):"","Premium Line IPL"===e.platform\u0421hoiceDesc.line&&r.a.createElement("li",null,"Hide cover frame:",r.a.createElement("button",{onClick:e.CoverHidenHandler.bind(void 0),className:[t+"-check-box",e.platform\u0421hoiceDesc.isCoverHiden?t+"-check-box--hiden":null].filter(Boolean).join(" ")},"\u2713"))))},I=function(e){return r.a.createElement("div",{className:"conf-main-left"},r.a.createElement(H,{className:"conf-main-left-top-container",pathArray:[],level:0,dataObj:e.framesForTopMenu,onClick:e.platformHandler,reseting:e.resetConfOnChange,frameResetHandler:e.frameResetHandler,draggable:!1,pricelistinfo:e.pricelistinfo}),r.a.createElement(j,{Language:e.Language,localStrings:e.localStrings,instNumArr:[1,2],className:"conf-main-left-instruction"}),r.a.createElement(w,{QuantityOfConf:e.QuantityOfConf,Configuration:e.Configuration,ConfNumberHandler:e.ConfNumberHandler,AddConfHandler:e.AddConfHandler,CoverHidenHandler:e.CoverHidenHandler,setModule:e.setModule,maxConfQuantity:e.maxConfQuantity}),r.a.createElement(H,{className:"conf-main-left-bottom-container",pathArray:[],level:0,dataObj:e.modulesForBottomMenu,draggable:Boolean(e.Configuration.platform\u0421hoiceDesc&&e.Configuration.platform\u0421hoiceDesc["signal-slots"]),line:e.Configuration.platform\u0421hoiceDesc&&e.Configuration.platform\u0421hoiceDesc.line.match(/[A-Z0-9]{1,}$/),location:e.Configuration.platform\u0421hoiceDesc&&e.Configuration.platform\u0421hoiceDesc.location,pricelistinfo:e.pricelistinfo}),r.a.createElement(j,{Language:e.Language,localStrings:e.localStrings,instNumArr:[13,14],className:"conf-main-left-instruction"}))},L=function(e){return r.a.createElement("div",{className:"conf-main-right-top"},e.Configuration.platform\u0421hoiceDesc?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"conf-main-right-top-img-wrapper"},r.a.createElement("img",{className:"conf-main-right-top-img",src:e.Configuration.platform\u0421hoiceDesc.img,alt:e.Configuration.platform\u0421hoiceDesc.line})),r.a.createElement("div",{className:"conf-main-right-top-frameName"},"TABLE"===e.Configuration.platform\u0421hoiceDesc.location?e.Configuration.platform\u0421hoiceDesc.line:e.Configuration.platform\u0421hoiceDesc.line_desc),r.a.createElement("div",{className:"conf-main-right-top-subFrameMenu"},e.Configuration.platform\u0421hoiceDesc.frame_sub_type?r.a.createElement(F,{frame_sub_type:e.Configuration.platform\u0421hoiceDesc.frame_sub_type,frame_sub_type_article:e.Configuration.platform\u0421hoiceDesc.frame_sub_type_article,frame_sub_typeHandler:e.frame_sub_typeHandler}):null)):"")},F=function(e){var t=function(e){return e%2===0?"conf-main-right-top-subFrameMenu-list-line-light":"conf-main-right-top-subFrameMenu-list-line-dark"};return r.a.createElement("div",{className:"conf-main-right-top-subFrameMenu-list"},Object.keys(e.frame_sub_type).map((function(a,n){return r.a.createElement("div",{key:a,className:["conf-main-right-top-subFrameMenu-list-line",t(n)].join(" ")},r.a.createElement("p",{style:{fontWeight:e.frame_sub_type[a]===e.frame_sub_type_article?"bold":null},className:"conf-main-right-top-subFrameMenu-list-line-text"},e.frame_sub_type[a]," : ",a),r.a.createElement("button",{onClick:e.frame_sub_typeHandler.bind(void 0,{frame_sub_type_desc:a,frame_sub_type_article:e.frame_sub_type[a]}),className:"conf-main-right-top-subFrameMenu-list-line-check-box"},e.frame_sub_type[a]===e.frame_sub_type_article?"\u2713":null))})))},P=function(e){return r.a.createElement(g.d,{className:"conf-main-right-bottom_l0"},r.a.createElement(g.b,{className:"conf-main-right-bottom_l0-list"},e.Configurations.map((function(e,t){return r.a.createElement(g.a,{className:"conf-main-right-bottom_l0-list-tab",selectedClassName:"conf-main-right-bottom_l0-list-tab--selected",key:t},"Configuration ",t+1)}))),e.Configurations.map((function(t,a){return r.a.createElement(g.c,{className:"conf-main-right-bottom_l0-panel",selectedClassName:"conf-main-right-bottom_l0-panel--selected",key:a},t.platform\u0421hoiceDesc?[r.a.createElement(B,{key:a,confNumber:a,Configuration:t,ModuleMenuHandler:e.ModuleMenuHandler,ModuleResetHandler:e.ModuleResetHandler,frameResetHandler:e.frameResetHandler,powerSocketMenuHandler:e.powerSocketMenuHandler,pricelistinfo:e.pricelistinfo}),r.a.createElement("div",{key:a+"wrapper",className:"conf-main-right-bottom_l1-print-conf-list"},r.a.createElement("button",{key:a+"button",className:"conf-main-right-bottom_l1-print-conf-list-button",onClick:function(){return e.printForm_handler(!0,a)}},"Print Configuration List"))]:null)})))},R=function(e){return e.article?r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.elementClassName+"-article"},e.article&&e.article.toString().replace(/-/g,"-\n"))),r.a.createElement("div",null,r.a.createElement("div",null,e.MenuHandler&&e.MenuContent&&r.a.createElement(T,{elementClassName:e.elementClassName+"-specs-menu",MenuContent:e.MenuContent,MenuHandler:e.MenuHandler,index:e.index,confNumber:e.confNumber}))),r.a.createElement("div",{className:e.elementClassName+"-desc",id:e.elementClassName+"-desc-"+e.confNumber},e.children),r.a.createElement("div",null,e.ReseteHandler&&r.a.createElement("div",{className:e.elementClassName+"-reset",onClick:e.ReseteHandler.bind(void 0,e.confNumber,e.index)}))):""},T=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",{className:e.elementClassName,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},r.a.createElement("ul",{className:[e.elementClassName+"-list",e.elementClassName+(o?"-list--visible":"-list--hiden"),e.elementClassName+"-list-"+e.confNumber].join(" ")},Object.entries(e.MenuContent).map((function(t,a,n){var o=Object(h.a)(t,2),l=o[0],i=o[1];return r.a.createElement("li",{className:a!==n.length-1?e.elementClassName+"-list-li--bordered":null,key:i,onClick:e.MenuHandler.bind(void 0,i,e.index)},l)}))))},B=function(e){var t="conf-main-right-bottom_l1-conf-list",a=e.Configuration.platform\u0421hoiceDesc;return Object(n.useEffect)((function(){var a=document.getElementById(t+"-desc-"+e.confNumber).offsetWidth,n=document.getElementsByClassName(t+"-specs-menu-list-"+e.confNumber),r=!0,o=!1,l=void 0;try{for(var i,s=n[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){i.value.style.width=a+"px"}}catch(c){o=!0,l=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw l}}})),r.a.createElement("div",{className:t},a.frame_sub_type_article?r.a.createElement(R,{elementClassName:t,article:a.frame_sub_type_article,confNumber:e.confNumber},a.line," (",a.frame_sub_type_desc,")"):null,r.a.createElement(R,{elementClassName:t,article:a.article,ReseteHandler:e.frameResetHandler,confNumber:e.confNumber},a.line_desc),a.support_frame_arr?a.support_frame_arr.map((function(a,n){return r.a.createElement(R,{elementClassName:t,article:a.article,confNumber:e.confNumber,key:a+n},e.pricelistinfo[a.article].description1," ",e.pricelistinfo[a.article].description2&&"(".concat(e.pricelistinfo[a.article].description2,")"))})):null,a["power-sockets"]?r.a.createElement(R,{elementClassName:t,article:a.powerSocketArticle,MenuHandler:e.powerSocketMenuHandler,MenuContent:a.powerSocketList,confNumber:e.confNumber},a.powerSocketDesc," (x",a["power-sockets"],")"):null,e.Configuration.Modules.map((function(a,n){return r.a.createElement(R,{confNumber:e.confNumber,elementClassName:t,article:a.article,display:a.display,MenuContent:a.article_list&&Object.values(a.article_list).length>1&&a.article_list,MenuHandler:e.ModuleMenuHandler,index:n,ReseteHandler:e.ModuleResetHandler,key:a+n},a.desc)})))},Q=function(e){return r.a.createElement("div",{className:"conf-main-right"},r.a.createElement(L,{Configuration:e.Configurations[e.ConfNumber],frame_sub_typeHandler:e.frame_sub_typeHandler}),r.a.createElement(P,{Configurations:e.Configurations,QuantityOfConf:e.QuantityOfConf,ModuleMenuHandler:e.ModuleMenuHandler,ModuleResetHandler:e.ModuleResetHandler,frameResetHandler:e.frameResetHandler,powerSocketMenuHandler:e.powerSocketMenuHandler,printForm_handler:e.printForm_handler,pricelistinfo:e.pricelistinfo}))},W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).className="component-to-print",a.headers=["Pos.","Item Nr.","Decription","Quantity"],a.firstColumnCI=[r.a.createElement(n.Fragment,null,r.a.createElement("span",null,"ECCO")," CINE SUPPLY AND SERVICE GMBH"),"Marie-Curie-Str. 20 \u2022 D - 40721 Hilden","Telefon: +49(0)211/522875-0","Telefax: +49(0)211/522875-10","E-Mail: office@ecco-online.eu","Internet: www.ecco-online.eu"],a.secondColumnCI=["DE Steuer-Nr.:","103/5724/2402","DE USt-ID:","DE 281834860","HRG 67133:","D\xfcsseldorf","Gesch\xe4ftsf\xfchrer:",r.a.createElement(n.Fragment,null,"Thomas R\xfcttgers",r.a.createElement("br",null),"Horst Kleinpeter")],a.thirdColumnCI=["Sparkasse D\xfcsseldorf",r.a.createElement(n.Fragment,null,"SWIFT/BIC: DUSSDEDDXXX",r.a.createElement("br",null),"IBAN: DE87 3005 01101007 3139 66"),"Kreissparkasse D\xfcsseldorf",r.a.createElement(n.Fragment,null,"SWIFT/BIC: WELADED1KSD",r.a.createElement("br",null),"IBAN: DE55 3015 0200 00021361 41"),"Deutsche Ban",r.a.createElement(n.Fragment,null,"SWIFT/BIC: DEUTDEDBDUE",r.a.createElement("br",null),"IBAN: DE17 3007 0024 0533 6565 00")],a.lack_module={Type:"Some module",Description1:"An error on",Description2:"loading from price list"},a.currentDate=function(){var e=new Date;return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.className},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:this.className+"-content"},r.a.createElement("img",{className:this.className+"-content-logo",src:"https://www.tls-electronics.de/custom/tls_electro/img/top_left_logo.png",alt:"logo"}),r.a.createElement("div",{className:this.className+"-content-customerInfo"},r.a.createElement("p",{className:this.className+"-content-customerInfo-tlsContact"},r.a.createElement("span",null,"ECCO GMBH"),r.a.createElement("span",null,"\xb7"),"Marie-Curie-Stra\xdfe 20",r.a.createElement("span",null,"\xb7"),"D-40721 Hilden"),r.a.createElement("p",{className:this.className+"-content-customerInfo-header"},"INQUIRY"),r.a.createElement("p",{className:this.className+"-content-customerInfo-companyName"},this.props.customerInfo.Company),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Date"),r.a.createElement("td",null,": ",this.currentDate())),r.a.createElement("tr",null,r.a.createElement("td",null,"Contact"),r.a.createElement("td",null,": ",this.props.customerInfo.Contact)),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone"),r.a.createElement("td",null,": ",this.props.customerInfo["Phone number"])),r.a.createElement("tr",null,r.a.createElement("td",null,"E-Mail"),r.a.createElement("td",null,": ",this.props.customerInfo["E-Mail"]))))),r.a.createElement("table",{className:this.className+"-content-configuration"},r.a.createElement("thead",null,r.a.createElement("tr",null,this.headers.map((function(t,a){var n="1";return 2===a&&(n="2"),r.a.createElement("th",{colSpan:n,key:t,className:e.className+"-content-configuration-header"},t)})))),r.a.createElement("tbody",null,this.props.configuration.map((function(t,a){var n=Object.values(t),o=Object(h.a)(n,2),l=o[0],i=o[1],s=e.props.pricelistinfo[l]?e.props.pricelistinfo[l]:e.lack_module;return r.a.createElement("tr",{key:l+"_"+a},r.a.createElement("td",null,i.map((function(e){return e+1})).join(", ")),r.a.createElement("td",null,l),r.a.createElement("td",null,s.type,":"),r.a.createElement("td",{className:"desc-col"},s.description1,r.a.createElement("br",null),s.description2),r.a.createElement("td",null,i.length))})))))))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"footer-height"},"\xa0"))))),r.a.createElement("div",{className:this.className+"-footer"},r.a.createElement("div",{className:this.className+"-footer-col1"},this.firstColumnCI.map((function(e,t){return r.a.createElement("p",{key:"firstColumnCI_"+t},e)}))),r.a.createElement("div",{className:this.className+"-footer-col2-3"},this.secondColumnCI.map((function(e,t){return r.a.createElement("p",{key:"secondColumnCI_"+t},e)}))),r.a.createElement("div",{className:this.className+"-footer-col2-3"},this.thirdColumnCI.map((function(e,t){return r.a.createElement("p",{key:"thirdColumnCI_"+t},e)})))))}}]),t}(n.Component),X=a(15),U=a.n(X),G=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("label",null,e.children,":"),r.a.createElement("input",{type:"text",value:void 0!==e.value?e.value:e.defaultValue,onChange:function(t){return e.handleChange(t,e.label)},onFocus:function(e){return e.target.select()},className:"input-form",id:e.id}))},J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={articlesToPrint:null,customerInfo:null},a.handleBeforeGetContent=function(){return new Promise((function(e,t){var n=a.props.articlesToPrint_handler(a.props.confNum),r=a.props.get_cutomerInfo(),o=[];if(null===n&&o.push("Please \u0441omplete the configuration completely."),null===r&&o.push("Please fill Customer info."),0!==o.length){var l=o.join("\n");return alert(l),void t("Conf is not complited!")}a.setState({articlesToPrint:n,customerInfo:r},(function(){return e()})),a.props.printForm_handler(!1)}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(U.a,{trigger:function(){return r.a.createElement("button",{className:e.props.className},e.props.children)},content:function(){return e.componentRef},onBeforeGetContent:this.handleBeforeGetContent}),r.a.createElement("div",{style:{display:"none"}},null!==this.state.articlesToPrint&&null!==this.state.customerInfo&&r.a.createElement(W,{pricelistinfo:this.props.pricelistinfo,customerInfo:this.state.customerInfo,configuration:this.state.articlesToPrint,ref:function(t){return e.componentRef=t}})))}}]),t}(r.a.Component),V=function(e){var t="print-form",a={Company:"name",Contact:"customer name","Phone number":"XXXX","E-Mail":"XXXX"},o=Object(n.useState)(a),l=Object(h.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(new Set(Object.keys(a))),u=Object(h.a)(m,2),f=u[0],d=u[1],p=function(e,n){var r=Object(c.a)({},i);r[n]=e.target.value,function(e,n){var r=a[e],o=document.getElementById(e);if(n===r||""===n){o.classList.add(t+"-box-form--unValidated");var l=new Set(f);l.add(e),d(l)}else{o.classList.remove(t+"-box-form--unValidated");var i=new Set(f);i.delete(e),d(i)}}(n,r[n]),s(r)};return r.a.createElement("div",{className:[t,void 0===e.is_form_active?"":e.is_form_active?t+"--visible":t+"--hidden"].join(" ")},r.a.createElement("div",{className:t+"-box"},r.a.createElement("h2",{className:t+"-box-header"},"Customer Info:"),r.a.createElement("form",{className:t+"-box-form"},Object.entries(i).map((function(e){var t=Object(h.a)(e,2),n=t[0],o=t[1];return r.a.createElement(G,{label:n,value:o,defaultValue:a[n],handleChange:p,key:n,id:n},n)}))),r.a.createElement(J,{printForm_handler:e.printForm_handler,get_cutomerInfo:function(){return 0===f.size?i:null},articlesToPrint_handler:e.articlesToPrint_handler,confNum:e.confNum,className:t+"-box-submit",pricelistinfo:e.pricelistinfo},"Submit"),r.a.createElement("button",{className:t+"-box-cancel",onClick:function(){return e.printForm_handler(!1)}},"Cancel")))},$={en:{1:"Define the support frame in the selection menu above.",2:"Select the desired table installation module at the top right corner.",3:"WALL",4:"TABLE",5:"FLOOR",6:"Blind-and-Audio",7:"Video-/Audio",8:"Analogue-/Digital-/Control signal slots",9:"Computer signal slots",10:"AC outlets",11:"Active Module",12:"Select your slots.",13:"Define the version (solder, gender changer, cable) by clicking on the red triangle in the list on the right.",14:"Table Installation Module"}},Z=(a(24),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={Language:"en",QuantityOfConf:1,ConfNumber:0,Configurations:Array(1).fill({}),maxConfQuantity:3,is_form_active:void 0,resetConfOnChange:!1,data:null,pricelistinfo:null},a.deep_ConfigurationsCopy=function(){return JSON.parse(JSON.stringify(a.state.Configurations))},a.platformHandler=function(e,t,n){var r=Object(c.a)({},e,{location:t,line:n});if("TABLE"===r.location)r.img="img/"+r.location.toLowerCase()+"/"+r.line.toLowerCase()+"/"+r.line.toLowerCase()+"img.png",r.frame_sub_type=a.state.data.subModulesType[r.location][r.line],r.frame_sub_type_desc=Object.keys(r.frame_sub_type)[0],r.frame_sub_type_article=r.frame_sub_type[r.frame_sub_type_desc];else if("WALL"===r.location){var o=n.match(/[A-Z]{1,}$/)[0];r.support_frame_arr=Array(r["support-frame_amount"]||0).fill(a.state.data.supportFrames[o][0]),r.isCoverHiden=!0;var l=0;if(r.support_frame_arr.length>0){var i=!0,m=!1,u=void 0;try{for(var f,d=r.support_frame_arr[Symbol.iterator]();!(i=(f=d.next()).done);i=!0){l+=f.value["frame-width"]}}catch(h){m=!0,u=h}finally{try{i||null==d.return||d.return()}finally{if(m)throw u}}}else l=r["frame-width"]||0;r["signal-slots"]=l}r.line_desc=a.state.pricelistinfo[e.article].description1,r.frame_desc=a.state.pricelistinfo[e.article].description2,r["power-sockets"]>0&&(r.powerSocketList=a.state.data.PowerSocket.reduce((function(e,t){return a.state.pricelistinfo[t]?Object(c.a)({},e,Object(s.a)({},a.state.pricelistinfo[t].description1,t)):e}),{}),r.powerSocketDesc=Object.keys(r.powerSocketList)[0],r.powerSocketArticle=r.powerSocketList[r.powerSocketDesc]),r.empty_module={img:"img/layout-parts/empty-signal-slot-"+("Universal Line WP"===n?"wp":"ipl")+".png",display:!0};var p=a.deep_ConfigurationsCopy();p[a.state.ConfNumber]={},p[a.state.ConfNumber].platform\u0421hoiceDesc=r,p[a.state.ConfNumber].Modules=Array(r["signal-slots"]).fill(r.empty_module),a.setState({Configurations:p})},a.setModule=function(e,t,n,r,o){var l=a.deep_ConfigurationsCopy(),i=l[a.state.ConfNumber].Modules;e.module_series=t,e.module_type=n;var s=a.state.pricelistinfo[e.article];s&&(e.desc=s.description1+(void 0!==s.description2?"(".concat(s.description2,")"):""));var m=function(t){if("Power Sockets"===e.module_type)return 3;if(a.state.pricelistinfo[t]){var n=/[0-9] slots* width/,r=Object.values(a.state.pricelistinfo[t]).map((function(e){return e.match(n)&&e.match(n)[0]})).filter(Boolean)[0];return r&&parseInt(r.replace(/\D+/,""))}return alert(t+" - is not exist in price Table!"),1};if(e.article_list&&void 0===e.slots_takes)for(var u=0,f=Object.values(e.article_list);u<f.length;u++){var d=f[u];if(e.slots_takes)break;e.slots_takes=m(d)}else void 0===e.slots_takes&&(e.slots_takes=m(e.article));if(void 0!==e.slots_takes){var p=l[a.state.ConfNumber].platform\u0421hoiceDesc;if(void 0!==p.support_frame_arr&&p.support_frame_arr.length>0){if(r-p.support_frame_arr.slice(0,o).reduce((function(e,t){return e+t["frame-width"]}),0)+e.slots_takes>p.support_frame_arr[o]["frame-width"])return null;e.support_frame_index=o;var h=e.module_series.match(/[A-Z]{1,}$/)[0],g=!0,C=!1,b=void 0;try{for(var _,v=a.state.data.supportFrames[h][Symbol.iterator]();!(g=(_=v.next()).done);g=!0){var N=_.value;if(N["support-modules-type"].includes(e.module_type)){p.support_frame_arr[e.support_frame_index]=N;break}}}catch(M){C=!0,b=M}finally{try{g||null==v.return||v.return()}finally{if(C)throw b}}}else if(void 0===i[r+(e.slots_takes-1)])return null;for(var E=1;E<i[r].slots_takes;E++)i[r+E].display=!0;for(var y=1;y<e.slots_takes;y++){for(var k=i[r+y].slots_takes,D=1;D<k;D++)i[r+y+D].display=!0;i[r+y]=Object(c.a)({},p.empty_module,{display:!1})}i[r]=Object(c.a)({},p.empty_module,{},e),a.setState({Configurations:l})}else alert("Error, module-".concat(e.article," cant be found in table, write to us!"))},a.confNumberHandler=function(e){a.setState({ConfNumber:e})},a.addConfHandler=function(){if(!(a.state.QuantityOfConf>=a.state.maxConfQuantity)){var e=a.state.Configurations.slice();e.push({}),a.setState({QuantityOfConf:a.state.QuantityOfConf+1,Configurations:e})}},a.moduleMenuHandler=function(e,t){var n=a.deep_ConfigurationsCopy(),r={article:e,desc:a.state.pricelistinfo[e].description1+(a.state.pricelistinfo[e].description2&&"(".concat(a.state.pricelistinfo[e].description2,")"))};n[a.state.ConfNumber].Modules[t]=Object(c.a)({},n[a.state.ConfNumber].Modules[t],{},r),a.setState({Configurations:n})},a.frame_sub_typeHandler=function(e){var t=a.deep_ConfigurationsCopy();t[a.state.ConfNumber].platform\u0421hoiceDesc=Object(c.a)({},a.state.Configurations[a.state.ConfNumber].platform\u0421hoiceDesc,{},e),a.setState({Configurations:t})},a.moduleResetHandler=function(e,t){var n=a.deep_ConfigurationsCopy();if(void 0!==n[a.state.ConfNumber].platform\u0421hoiceDesc.support_frame_arr&&n[a.state.ConfNumber].platform\u0421hoiceDesc.support_frame_arr.length>0){var r=n[a.state.ConfNumber].Modules[t].support_frame_index,o=n[a.state.ConfNumber].platform\u0421hoiceDesc.line.match(/[A-Z]{1,}$/)[0];n[a.state.ConfNumber].platform\u0421hoiceDesc.support_frame_arr[r]=a.state.data.supportFrames[o][0]}for(var l=1;l<n[e].Modules[t].slots_takes;l++)n[e].Modules[t+l]=n[e].platform\u0421hoiceDesc.empty_module;n[a.state.ConfNumber].Modules[t]=n[e].platform\u0421hoiceDesc.empty_module,a.setState({Configurations:n})},a.frameResetHandler=function(e){var t=a.deep_ConfigurationsCopy();void 0!==e?window.confirm("This will erase the whole Configuration, are you sure?")&&(t[e]={}):t[e=a.state.ConfNumber]={};a.setState({Configurations:t})},a.coverHidenHandler=function(){var e=a.deep_ConfigurationsCopy();e[a.state.ConfNumber].platform\u0421hoiceDesc.isCoverHiden=!e[a.state.ConfNumber].platform\u0421hoiceDesc.isCoverHiden,a.setState({Configurations:e})},a.powerSocketMenuHandler=function(e){var t={powerSocketDesc:a.state.pricelistinfo[e].description1,powerSocketArticle:e},n=a.deep_ConfigurationsCopy();n[a.state.ConfNumber].platform\u0421hoiceDesc=Object(c.a)({},n[a.state.ConfNumber].platform\u0421hoiceDesc,{},t),a.setState({Configurations:n})},a.articlesToPrint_handler=function(e){var t=a.state.Configurations[e];if(void 0===t.platform\u0421hoiceDesc)return null;var n=[];t.platform\u0421hoiceDesc.article&&n.push(t.platform\u0421hoiceDesc.article.toString()),t.platform\u0421hoiceDesc.frame_sub_type_article&&n.push(t.platform\u0421hoiceDesc.frame_sub_type_article.toString());var r=[];if(t.platform\u0421hoiceDesc.support_frame_arr){var o=!0,l=!1,s=void 0;try{for(var c,m=t.platform\u0421hoiceDesc.support_frame_arr[Symbol.iterator]();!(o=(c=m.next()).done);o=!0){var u=c.value;r.push(u.article.toString())}}catch(H){l=!0,s=H}finally{try{o||null==m.return||m.return()}finally{if(l)throw s}}}var f=[];if(t.Modules){var d=!0,p=!1,h=void 0;try{for(var g,C=t.Modules[Symbol.iterator]();!(d=(g=C.next()).done);d=!0){var b=g.value;!0===b.display&&f.push(b.article?b.article.toString():null)}}catch(H){p=!0,h=H}finally{try{d||null==C.return||C.return()}finally{if(p)throw h}}}var _,v=[];if(t.platform\u0421hoiceDesc["power-sockets"])for(var N=0;N<t.platform\u0421hoiceDesc["power-sockets"];N++)v.push(t.platform\u0421hoiceDesc.powerSocketArticle.toString());_=v.length>2?2:t.platform\u0421hoiceDesc["conference-control"]||t.platform\u0421hoiceDesc["conference-control-double-frame"]||"TABLE"!==t.platform\u0421hoiceDesc.location?0:1,v.splice.apply(v,[_,0].concat(f)),n=[].concat(Object(i.a)(n),r,v);for(var E=[],y=0;y<n.length;y++){var k=n[y];if(null===k)return null;for(var D=!1,M=0;M<E.length;M++){E[M].article===k&&(D=!0,E[M].pos.push(y))}!1===D&&E.push({article:k,pos:[y]})}return E},a.printForm_handler=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.right_ConfNumber;a.setState({is_form_active:e,right_ConfNumber:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/data.json").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})),fetch("data/pricelistinfo.json").then((function(e){return e.json()})).then((function(t){return e.setState({pricelistinfo:t})}))}},{key:"render",value:function(){var e="conf-main";return this.state.data&&this.state.pricelistinfo?r.a.createElement("div",{className:[e,!0===this.state.is_form_active&&e+"_form--active",!1===this.state.is_form_active&&e+"_form--hidden"].join(" ")},r.a.createElement(I,{localStrings:$,framesForTopMenu:this.state.data.framesForTopMenu,modulesForBottomMenu:this.state.data.modulesForBottomMenu,Language:this.state.Language,QuantityOfConf:this.state.QuantityOfConf,Configuration:this.state.Configurations[this.state.ConfNumber],resetConfOnChange:this.state.resetConfOnChange,pricelistinfo:this.state.pricelistinfo,setModule:this.setModule,CoverHidenHandler:this.coverHidenHandler,platformHandler:this.platformHandler,ConfNumberHandler:this.confNumberHandler,AddConfHandler:this.addConfHandler,maxConfQuantity:this.state.maxConfQuantity,frameResetHandler:this.frameResetHandler}),r.a.createElement(Q,{ConfNumber:this.state.ConfNumber,Configurations:this.state.Configurations,QuantityOfConf:this.state.QuantityOfConf,pricelistinfo:this.state.pricelistinfo,ModuleMenuHandler:this.moduleMenuHandler,frame_sub_typeHandler:this.frame_sub_typeHandler,ModuleResetHandler:this.moduleResetHandler,frameResetHandler:this.frameResetHandler,powerSocketMenuHandler:this.powerSocketMenuHandler,printForm_handler:this.printForm_handler}),r.a.createElement(V,{pricelistinfo:this.state.pricelistinfo,confNum:this.state.right_ConfNumber,articlesToPrint_handler:this.articlesToPrint_handler,is_form_active:this.state.is_form_active,printForm_handler:this.printForm_handler})):r.a.createElement("p",null,"Loading")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.58d8dcc9.chunk.js.map