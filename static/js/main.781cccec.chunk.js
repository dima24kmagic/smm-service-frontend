(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),o=n(20),i=n(2),u=n.n(i),l=n(11),p=n(3),d=n(4),h=n(6),m=n(5),f=n(7),v=n(127),b=n(128),g=n(124),_=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.children,a=e.onClick,c=e.style;return r.a.createElement("div",{className:"header-control",onClick:function(){return a()},style:c},r.a.createElement("div",{className:"header-control__icon"},n),r.a.createElement("span",null,t))}}]),t}(a.Component),k=n(24),E=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panel-control"},r.a.createElement(_,{text:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",style:{visibility:"hidden"}},r.a.createElement(k.b,null)),r.a.createElement(_,{text:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435",onClick:function(){return e.props.onCleanClick()}},r.a.createElement(k.a,null)),r.a.createElement(_,{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",style:{visibility:"hidden"}},r.a.createElement(k.c,null)))}}]),t}(a.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"public__info__container public__info--all"},r.a.createElement(k.d,null),this.props.peopleCount),r.a.createElement("div",{className:"public__info__container"},r.a.createElement(_,{text:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",onClick:function(){return e.props.onStartClean()}},r.a.createElement(k.a,null))),r.a.createElement("div",{className:"public__info__container public__info--deleted"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-user-x"},r.a.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),r.a.createElement("line",{x1:"18",y1:"8",x2:"23",y2:"13"}),r.a.createElement("line",{x1:"23",y1:"8",x2:"18",y2:"13"})),this.props.deletedPeople))}}]),t}(a.Component),O=(n(62),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"progress-position"},r.a.createElement("span",{className:"progress-status"},this.props.status),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar main-progress-bar",style:{width:"".concat(this.props.progress,"%")}},r.a.createElement("span",{className:"percent"},this.props.progress,"%"))))}}]),t}(r.a.Component)),w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"public__heading__img",src:this.props.url,alt:"pub img"})}}]),t}(a.Component),j=(n(64),n(14)),C=n(8),x=n(13),N=n.n(x),T=window.VK,A="https://hot-dog.site/api",G={getUserGroups:function(){return I},getGroupsForClean:function(){return N.a.get(A+"/getPublics",{params:{user_vk_id:window.user_id,auth_key:window.auth_key}})},getGroupDogsCount:function(e){return N.a.get(A+"/getDogsCount",{params:{id:e,user_vk_id:window.user_id,auth_key:window.auth_key}})},deleteGroupFromCleanQue:function(e){return console.log("DELETE REQUEST, id is:",e),N.a.delete(A+"/deletePublic",{id:e,user_vk_id:window.user_id,auth_key:window.auth_key})},addGroupToCleanAndGetItData:function(e){return N.a.post(A+"/addPublic",{user_vk_id:window.user_id,auth_key:window.auth_key,vk_id:e})},startCleanTask:function(e){return N.a.post("https://hot-dog.site/api/startCleanTasks",{user_vk_id:window.user_id,auth_key:window.auth_key,public_ids:e})},getCleaningTasks:function(){return N.a.get("https://hot-dog.site/api/getCleanTasks",{params:{user_vk_id:window.user_id,auth_key:window.auth_key}})},getFreshPublic:function(e){return N.a.get("https://hot-dog.site/api/refreshPublic",{params:{user_vk_id:window.user_id,auth_key:window.auth_key,id:e}})},setAccessToken:function(e){return N.a.patch("https://hot-dog.site/api/setAccessToken",{access_token:e,user_vk_id:window.user_id,auth_key:window.auth_key})},getPollById:function(e,t){return D(e,t)},getAccessToUserWall:function(){T.callMethod("showSettingsBox",8192,function(e){console.log("SETTINGS BOX",e)})}},D=function(e,t){return new Promise(function(n,a){T.api("polls.getById",{v:"5.85",owner_id:e,poll_id:t},function(e){console.log("POLL:",e),e.error?a(G.getAccessToUserWall()):n(e)})})},I=new Promise(function(e,t){T.init(function(){T.api("groups.get",{filter:"moder",extended:"1",fields:"photo_100",v:"5.85"},function(t){var n=L(t.response.items);e(n)})},function(){console.log("VK API initialization failed"),t("Groups fetch failed")},"5.85")}),L=function(e){return e.map(S)},S=function(e){return{avatar_url:e.photo_100,id:e.id,name:e.name}},P=n(18),U=n.n(P),R=(n(85),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={text:""},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"changeText",value:function(e){this.setState({text:e}),U.a.setActionValue(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"modal__text"},r.a.createElement("p",null,"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0438\u043c\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430\u043c\u0438"),r.a.createElement("p",null,"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435, \u043f\u043e"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://oauth.vk.com/authorize?client_id=6726221&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&v=5.85&scope=groups,wall,offline"},"\u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435"),"."),r.a.createElement("p",null,"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043d\u0430\u0448\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"),r.a.createElement("p",null,"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0441\u043e\u043e\u0431\u0449\u0430\u044e\u0449\u0443\u044e, \u0447\u0442\u043e \u043d\u0435 \u0441\u0442\u043e\u0438\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),r.a.createElement("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e, \u044d\u0442\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u043d\u0430\u0448\u0438\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c"),r.a.createElement("p",null,"\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0446\u0435\u043b\u0438\u043a\u043e\u043c URL \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435:"),r.a.createElement("input",{type:"text",placeholder:"https://oauth.vk.com/blank.html#access_token=1383bc6d5df7bf74655b531297c71617b2345687ca&expires_in=0&user_id=159204098",value:this.state.text,onChange:function(t){e.changeText(t.target.value)}}),r.a.createElement("p",null,"\u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")))}}]),t}(r.a.Component)),B={Load:"groups/USER_GROUPS_LOAD",Loaded:"groups/USER_GROUPS_LOADED",Errors:"groups/USER_GROUPS_ERRORS"},F="ADD_GROUP_IN_CLEAN_QUE_CLICK",M="ADD_GROUP_IN_CLEAN_QUE_ADD_TO_SERVER",Q={Load:"groups/GET_GROUPS_FOR_CLEAN_LOAD",Loaded:"groups/GET_GROUPS_FOR_CLEAN_LOADED",Errors:"groups/GET_GROUPS_FOR_CLEAN_ERRORS"},W={groups:{data:[],loadingUserGroups:!0,loadingCleanTasks:!0,errors:[]}},V=function(e,t){return function(n){var a=t.map(function(e){return e.backEndID});G.startCleanTask(a).then(function(t){var a;switch(t.data.error&&(a=t.data.error.id),a){case 1:X();break;case 2:$(t.error.value);break;default:n({type:"CLEAN_ALL_GROUPS"});var r=setInterval(function(){G.getCleaningTasks().then(function(t){var a=t.data;n({type:"UPDATE_CLEANING_STATE",payload:a}),0===a.length&&(J(e),clearInterval(r))})},500)}})}},K=function(e){return function(t){t({type:F,payload:e}),G.addGroupToCleanAndGetItData(e).then(function(n){var a=n.data;t({type:M,payload:{groupData:a,groupID:e}}),G.getGroupDogsCount(a.id).then(function(n){var a=n.data.dogs_count;t({type:"GET_DOGS_COUNT ",payload:{dogsCount:a,groupID:e}})})})}},q=function(e,t){return function(n){G.startCleanTask([e]).then(function(a){if(a.data.error)switch(a.data.error.id){case 1:X();break;case 2:$(a.error.value)}else{n({type:"CLEAN_GROUP_BY_ID",payload:e});var r=setInterval(function(){G.getCleaningTasks().then(function(e){var a=e.data;n({type:"UPDATE_CLEANING_STATE",payload:a}),0===a.length&&(J(t),clearInterval(r))})},500)}})}},H=function(e,t){return function(n){n({type:"DELETE_GROUP_FROM_CLEAN_QUE",payload:e}),G.deleteGroupFromCleanQue(t).then(function(e){})}},Y=function(){return function(e){z(Q,e),G.getGroupsForClean().then(function(t){var n=t.data;e({type:Q.Loaded,payload:n});var a=setInterval(function(){G.getCleaningTasks().then(function(t){var n=t.data;e({type:"UPDATE_CLEANING_STATE",payload:n}),0===n.length&&clearInterval(a)})},500);z(B,e),G.getUserGroups().then(function(t){e({type:B.Loaded,payload:t})})})}},z=function(e,t){t({type:e.Load})};function J(e){console.log("Comment alert"),U()({title:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!",icon:"success",text:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u0437\u044b\u0432 \u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0435 :)",button:"\u0425\u043e\u0440\u043e\u0448\u043e"}).then(function(t){console.log("R IS:",t),!0===t&&e&&e()})}function X(){var e=window.document.createElement("div");s.a.render(r.a.createElement(R,null),e);var t=e.firstChild;U()({title:"\u0423\u043f\u0441. \u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",content:t,buttons:{confirm:{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c!",value:""}}}).then(function(e){var t,n=(t=e).slice(t.indexOf("#access_token=")+"#access_token=".length,t.indexOf("&expires_in="));G.setAccessToken(n)})}function $(e,t){U()({title:"\u0423\u043f\u0441.. \u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0435\u043d\u0435\u0433",icon:"error",text:"\u0414\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432 \u043d\u0443\u0436\u043d\u043e \u0435\u0449\u0435 ".concat(e,"\u0440.\n\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0431\u0430\u043b\u0430\u043d\u0441"),button:{text:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}}).then(function(e){!0===e&&console.log("GO TO ADD MONEY")})}n(87);var Z=n(51),ee=n(21),te=Object(j.c)({clean:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.Load:return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{loadingCleanTasks:!0})});case Q.Loaded:var n=t.payload;return n.forEach(function(e){e.inCleanQue=!0,e.isLoadingInfo=!1,e.cleanData={isCleaning:!1}}),Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:n,loadingCleanTasks:!1})});case"UPDATE_CLEANING_STATE":var a=t.payload;if(0===a.length)return e;var r=e.groups.data.map(function(e){return e});return r.forEach(function(e){a.forEach(function(t){e.backEndID===t.public_id&&("\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438"===t.status?e.cleanData={isCleaning:!1}:e.cleanData={isCleaning:!0,progress:t.progress,status:t.status})})}),Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:r})});case B.Load:return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{loadingUserGroups:!0})});case B.Loaded:var c=t.payload,s=e.groups.data;return c.forEach(function(e){e.inCleanQue=!1,e.isLoadingInfo=!0}),c.forEach(function(e){s.forEach(function(t){e.id===t.vk_id&&(e.inCleanQue=t.inCleanQue,e.backEndID=t.id,e.dogs=t.dogs,e.followers=t.followers,e.cleanData=t.cleanData)})}),Object(C.a)({},e,{groups:{data:c,loadingUserGroups:!1}});case F:var o=t.payload,i=e.groups.data.map(function(e){return e.id===o?Object(C.a)({},e,{inCleanQue:!0,cleanData:{isCleaning:!1}}):e});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:i})});case M:var u=t.payload,l=u.groupData,p=u.groupID,d=e.groups.data.map(function(e){return e.id===p?Object(C.a)({},e,l,{dogs:"\u0410\u043d\u0430\u043b\u0438\u0437...",backEndID:l.id}):e});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:d})});case"GET_DOGS_COUNT ":var h=t.payload,m=h.dogsCount,f=h.groupID,v=e.groups.data.map(function(e){return e.vk_id===f?Object(C.a)({},e,{dogs:m}):e});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:v})});case"DELETE_GROUP_FROM_CLEAN_QUE":var b=t.payload,g=e.groups.data.map(function(e){return e.id===b?Object(C.a)({},e,{inCleanQue:!1}):e});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:g})});case"CLEAN_GROUP_BY_ID":var _=t.payload,k=e.groups.data.map(function(e){return e.backEndID===_?Object(C.a)({},e,{cleanData:{isCleaning:!0,progress:0,status:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441"}}):e});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:k})});case"CLEAN_ALL_GROUPS":var E=e.groups.data.map(function(e){return G.startCleanTask([e.backEndID]),Object(C.a)({},e,{cleanData:{isCleaning:!0,progress:0,status:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441"}})});return Object(C.a)({},e,{groups:Object(C.a)({},e.groups,{data:E})});default:return e}}}),ne=Object(ee.a)(),ae=[Z.a],re=window.devToolsExtension,ce=[];"function"===typeof re&&ce.push(re());var se=j.d.apply(void 0,[j.a.apply(void 0,ae)].concat(ce)),oe=Object(j.e)(te,{},se),ie=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.backEndID,n=e.cleanGroupByID;return r.a.createElement("div",{className:"public-wrapper"},r.a.createElement("div",{className:"public"},r.a.createElement("div",{className:"public__heading"},r.a.createElement(w,{url:this.props.avatar_url}),r.a.createElement("div",{className:"public__heading__name"},this.props.name)),r.a.createElement("div",{className:"public__info"},this.props.cleanData.isCleaning?r.a.createElement(O,{progress:this.props.cleanData.progress,status:this.props.cleanData.status}):r.a.createElement(y,{peopleCount:this.props.followers,deletedPeople:this.props.dogs,onStartClean:function(){n(t,function(){ne.push("/feedback")})}}))))}}]),t}(a.Component),ue=Object(o.b)(null,function(e){return Object(j.b)({cleanGroupByID:q},e)})(ie),le=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn btn__add",onClick:this.props.onClick},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e")}}]),t}(a.Component);function pe(){return r.a.createElement("iframe",{title:"video guide",src:"//vk.com/video_ext.php?oid=-171466987&id=456239020&hash=2a4b21d6648495d0&hd=1",width:"426",height:"210",frameBorder:"0",allowFullScreen:!0})}var de=n(125),he=(n(88),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.group,n=e.AddGroupInCleanQue,a=e.DeleteGroupFromCleanQue;return r.a.createElement("div",{className:"group"},r.a.createElement("div",{className:"group__details"},r.a.createElement("img",{src:t.avatar_url,alt:"avatar"}),r.a.createElement("span",{className:"ellipsis"},t.name)),r.a.createElement("span",{className:"plus-sign ".concat(t.inCleanQue?"plus-sign--cris":""),onClick:function(){t.inCleanQue?(console.log("Group for deleting",t),a(t.id,t.backEndID)):n(t.id)}}))}}]),t}(a.Component)),me=Object(o.b)(function(e){return{}},function(e){return Object(j.b)({AddGroupInCleanQue:K,DeleteGroupFromCleanQue:H},e)})(he),fe=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("html").scrollHeight;document.querySelector(".modal__bg").style.height="".concat(e,"px")}},{key:"render",value:function(){var e=this.props,t=e.groups,n=e.close;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__bg",onClick:n}),r.a.createElement("div",{className:"modal__body"},r.a.createElement("div",{className:"modal__body__text"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("div",{className:"modal__body__content"},t.map(function(e){return r.a.createElement(me,{group:e})}))))}}]),t}(a.Component),ve=["\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438"],be=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={publics:[],redirect:!1,isAddGroupOpen:!1},n.renderGroups=function(e){return e.length?e.map(function(e){return e.inCleanQue&&r.a.createElement(ue,Object.assign({},e,{key:e.id}))}):null},n.toggleModal=function(){n.setState({isAddGroupOpen:!n.state.isAddGroupOpen})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.GetGroupsForCleanAndUserGroups)()}},{key:"startCleanPublicById",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,c=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.setCleaningStateOnGroupByID,e.next=3,this.startCleanTasks([t]);case 3:if(!("error"in(a=e.sent))){e.next=21;break}if(1!==a.error.id){e.next=16;break}return e.next=8,this.getAccessTokenFromUser();case 8:return r=e.sent,e.next=11,this.setAccessToken(r);case 11:return e.next=13,this.onStartClean();case 13:return e.abrupt("return",e.sent);case 16:if(2!==a.error.id){e.next=19;break}return e.next=19,this.showNotEnoughMoneyModal(a.error.value);case 19:e.next=23;break;case 21:n(t),this.timerId=setInterval(Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.updateCleanTasks();case 2:return console.log(c),e.next=5,c.props.updateBalance();case 5:case"end":return e.stop()}},e,this)})),1500);case 23:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onStartClean",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,n,a,r,c=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getPublicIds(),e.next=3,this.startCleanTasks(t);case 3:if(!("error"in(n=e.sent))){e.next=21;break}if(1!==n.error.id){e.next=16;break}return e.next=8,this.getAccessTokenFromUser();case 8:return a=e.sent,e.next=11,this.setAccessToken(a);case 11:return e.next=13,this.onStartClean();case 13:return e.abrupt("return",e.sent);case 16:if(2!==n.error.id){e.next=19;break}return e.next=19,this.showNotEnoughMoneyModal(n.error.value);case 19:e.next=24;break;case 21:r=this.setCleaningStateOnPublics(),this.setGroups(r),this.timerId=setInterval(Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.updateCleanTasks();case 2:return e.next=4,c.props.updateBalance();case 4:case"end":return e.stop()}},e,this)})),1500);case 24:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startCleanTasks",value:function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("https://hot-dog.site/api/startCleanTasks",{user_vk_id:window.user_id,auth_key:window.auth_key,public_ids:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"cleanTaskIsFinished",value:function(e){return ve.includes(e.status)}},{key:"getPublicIds",value:function(){return this.state.publics.map(function(e){return e.id})}},{key:"getAccessTokenFromUser",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.document.createElement("div"),s.a.render(r.a.createElement(R,null),t),n=t.firstChild,e.next=5,U()({title:"\u0423\u043f\u0441. \u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",content:n,buttons:{confirm:{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c!",value:""}}});case 5:return a=e.sent,e.abrupt("return",this.getAccessTokenFromLink(a));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setAccessToken",value:function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.patch("https://hot-dog.site/api/setAccessToken",{access_token:t,user_vk_id:window.user_id,auth_key:window.auth_key});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCleanTasks",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://hot-dog.site/api/getCleanTasks",{params:{user_vk_id:window.user_id,auth_key:window.auth_key}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateCleanTasks",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,n,a,r,c,s,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCleanTasks();case 2:if((t=e.sent)&&t.length){e.next=34;break}clearInterval(this.timerId),n=!0,a=!1,r=void 0,e.prev=8,c=this.state.publics[Symbol.iterator]();case 10:if(n=(s=c.next()).done){e.next=17;break}return o=s.value,e.next=14,this.refreshPublicById(o.id);case 14:n=!0,e.next=10;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),a=!0,r=e.t0;case 23:e.prev=23,e.prev=24,n||null==c.return||c.return();case 26:if(e.prev=26,!a){e.next=29;break}throw r;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.next=33,this.showCommentAlert();case 33:return e.abrupt("return");case 34:i=this.addCleanTaskToGroups(this.state.publics,t),this.setGroups(i);case 36:case"end":return e.stop()}},e,this,[[8,19,23,31],[24,,26,30]])}));return function(){return e.apply(this,arguments)}}()},{key:"refreshPublicById",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,c=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getFreshPublic(t);case 2:(n=e.sent).cleanData={isCleaning:!1},n.onClean=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.startCleanPublicById(n.id);case 2:case"end":return e.stop()}},e,this)})),a=this.state.publics,r=a.findIndex(function(e){return e.id===t}),a[r]=n,this.setGroups(a);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getFreshPublic",value:function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://hot-dog.site/api/refreshPublic",{params:{user_vk_id:window.user_id,auth_key:window.auth_key,id:t}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAccessTokenFromLink",value:function(e){return e.slice(e.indexOf("#access_token=")+"#access_token=".length,e.indexOf("&expires_in="))}},{key:"getPublicById",value:function(e,t){return e.find(function(e){return e.id===t})}},{key:"showNotEnoughMoneyModal",value:function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()({title:"\u0423\u043f\u0441.. \u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0435\u043d\u0435\u0433",icon:"error",text:"\u0414\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432 \u043d\u0443\u0436\u043d\u043e \u0435\u0449\u0435 ".concat(t,"\u0440.\n\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0431\u0430\u043b\u0430\u043d\u0441"),button:{text:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}});case 2:e.sent&&this.setState({redirect:"/add_money"});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"showCommentAlert",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()({title:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!",icon:"success",text:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u0437\u044b\u0432 \u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0435 :)",button:"\u0425\u043e\u0440\u043e\u0448\u043e"});case 2:e.sent&&this.setState({redirect:"/feedback"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isAddGroupOpen,t=this.props,n=t.groups,a=t.cleanAllGroups;return r.a.createElement("div",{className:"clean"},r.a.createElement(E,{onCleanClick:function(){return a(function(){ne.push("/feedback")},n)}}),r.a.createElement("div",{className:"publics"},n&&this.renderGroups(n)),r.a.createElement(le,{onClick:this.toggleModal}),e&&r.a.createElement(fe,{close:this.toggleModal,groups:n}),r.a.createElement(pe,null),this.state.redirect&&r.a.createElement(de.a,{to:this.state.redirect,push:!0}))}}]),t}(a.Component),ge=Object(o.b)(function(e){var t=e.clean;return{groups:t.groups.data,cleanTasks:t.cleanTasks}},function(e){return Object(j.b)({GetGroupsForCleanAndUserGroups:Y,setCleaningStateOnGroupByID:q,cleanAllGroups:V},e)})(be),_e=n(31),ke=n(126),Ee=(n(113),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"nav"},r.a.createElement("div",{className:"nav__info"},r.a.createElement("nav",null,r.a.createElement(ke.a,{className:"nav__item",to:"/feedback"},"\u041e\u0442\u0437\u044b\u0432\u044b"),r.a.createElement(ke.a,{className:"nav__item",to:"/add_money"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441")),r.a.createElement("div",null,r.a.createElement("span",{className:"balance"},r.a.createElement("i",{className:"icon-rouble"}),this.props.balance,"\u0440"))),r.a.createElement("div",{className:"nav__actions"},r.a.createElement("nav",null,r.a.createElement(ke.a,{className:"nav__item",to:"/clean"},"\u041e\u0447\u0438\u0441\u0442\u043a\u0430"),r.a.createElement(ke.a,{className:"nav__item",to:"/survey"},"\u041e\u043f\u0440\u043e\u0441\u044b"))))}}]),t}(a.Component)),ye=(n(117),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.timerId=window.setInterval(function(){e.props.updateBalance()},1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"add-money-page"},r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0431\u0430\u043b\u0430\u043d\u0441 \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430:"),r.a.createElement("div",{className:"underline"})),r.a.createElement("form",{action:"https://money.yandex.ru/quickpay/confirm.xml",method:"post",target:"_blank"},r.a.createElement("input",{type:"hidden",name:"receiver",value:"410011043655449"}),r.a.createElement("input",{type:"hidden",name:"quickpay-form",value:"shop"}),r.a.createElement("input",{type:"hidden",name:"targets",value:"Hot Dog"}),r.a.createElement("div",{className:"money-input-wrapper"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"money-input"},"\u0421\u0443\u043c\u043c\u0430:")),r.a.createElement("input",{type:"text",name:"sum",placeholder:"100 \u0440\u0443\u0431",id:"money-input",className:"money-input",autoComplete:"false"}),r.a.createElement("p",null,"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u2014 0%")),r.a.createElement("div",{className:"payment-type-wrapper"},r.a.createElement("p",null,"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b:"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"paymentType",value:"PC"}),"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0435\u043d\u044c\u0433\u0430\u043c\u0438"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"paymentType",value:"AC"}),"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439")),r.a.createElement("input",{type:"hidden",name:"formcomment",value:"hot dog: \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0431\u0430\u043b\u0430\u043d\u0441\u0430"}),r.a.createElement("input",{type:"hidden",name:"short-dest",value:"hot dog: \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0431\u0430\u043b\u0430\u043d\u0441\u0430"}),r.a.createElement("input",{type:"hidden",name:"label",value:"hot-dog: ".concat(window.user_id)}),r.a.createElement("input",{type:"hidden",name:"successURL",value:"https://vk.com/app6731681_-171466987"}),r.a.createElement("button",{type:"submit",className:"submit-button"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")))}}]),t}(r.a.Component)),Oe=(n(119),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){VK.Widgets.Comments("vk_comments",{limit:10,attach:"*",height:800})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"vk_comments",className:"vk-comments"}))}}]),t}(r.a.Component)),we=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){G.getPollById(173986239,313436729).then(function(e){console.log("POLL DATA:",e)}).catch(function(e){e()})}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component);console.log("HOLA");var je=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showAddForm:!1},n.toggleAddForm=function(){n.setState({showAddForm:!n.state.showAddForm})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.showAddForm;return r.a.createElement("div",{className:"survey-wrapper"},r.a.createElement("div",{className:"survey-intro"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u0443!"),r.a.createElement("span",{className:"plus-sign ".concat(e?"plus-sign--cris":""),onClick:this.toggleAddForm}),e&&r.a.createElement(we,null))}}]),t}(a.Component);function Ce(e){var t=window.location.search.substring(1);window.urlParams=t;for(var n=t.split("&"),a=0;a<n.length;a++){var r=n[a].split("=");if(r[0]===e)return r[1]}throw new Error("Query Variable ".concat(e," not found"))}_e.init({dsn:Object({NODE_ENV:"production",PUBLIC_URL:"/smm-service-frontend"}).REACT_APP_SENTRY_DSN});var xe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"setBalance",value:function(e){this.setState({balance:e})}},{key:"componentWillMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.user_id=Ce("viewer_id"),window.auth_key=Ce("auth_key"),ne.push("/"),e.next=5,this.updateBalance();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getUserBalance",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://hot-dog.site/api/getBalance",{params:{user_vk_id:window.user_id,auth_key:window.auth_key}});case 2:return e.abrupt("return",e.sent.data.balance);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidCatch",value:function(e,t){this.setState({error:e}),_e.withScope(function(n){Object.keys(t).forEach(function(e){n.setExtra(e,t[e])}),_e.captureException(e)})}},{key:"updateBalance",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getUserBalance();case 3:e.t1=e.sent,e.t0.setBalance.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{basename:"/smm-service-frontend",history:ne},r.a.createElement(a.Fragment,null,r.a.createElement(Ee,{balance:this.state.balance}),r.a.createElement(b.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ge,{balance:e.state.balance,updateBalance:e.updateBalance.bind(e)})}}),r.a.createElement(g.a,{path:"/clean",component:ge}),r.a.createElement(g.a,{path:"/survey",component:je}),r.a.createElement(g.a,{path:"/add_money",render:function(){return r.a.createElement(ye,{updateBalance:e.updateBalance.bind(e)})}}),r.a.createElement(g.a,{path:"/feedback",component:Oe}),r.a.createElement(g.a,{path:"/getToken",component:function(){return r.a.createElement("div",null,"ACCESS TOKEN MAN")}}))))}}]),t}(a.Component);n(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,{store:oe},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,n){e.exports=n(123)},62:function(e,t,n){},64:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){}},[[52,2,1]]]);
//# sourceMappingURL=main.781cccec.chunk.js.map