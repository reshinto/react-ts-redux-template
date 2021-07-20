(this["webpackJsonprepo-builder"]=this["webpackJsonprepo-builder"]||[]).push([[0],{159:function(e,t,r){},160:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(26),c=r.n(a),s=r(19),o=r(55),u=r(16),i=r(17),p=function(){function e(t){if(Object(u.a)(this,e),this.REQUEST=void 0,this.FAILURE=void 0,this.SUCCESS=void 0,!t)throw new Error("Type parameter is mandatory");this.REQUEST="".concat(t,"_REQUEST"),this.SUCCESS="".concat(t,"_SUCCESS"),this.FAILURE="".concat(t,"_FAILURE")}return Object(i.a)(e,[{key:"request",value:function(e){return e?{type:this.REQUEST,payload:e}:{type:this.REQUEST}}},{key:"success",value:function(e){return e?{type:this.SUCCESS,payload:e}:{type:this.SUCCESS}}},{key:"failure",value:function(e){return e?{type:this.FAILURE,payload:e}:{type:this.FAILURE}}}]),e}(),d="PostsPage",h=new p("".concat(d,"/POSTS_FETCH")),b=new p("".concat(d,"/POST_FETCH")),f=new p("".concat(d,"/POST_CREATE")),E=new p("".concat(d,"/POST_UPDATE")),v=new p("".concat(d,"/POST_REMOVE")),l=function(e){return e.PostsPage},O=Object(o.a)((function(e,t){var r=t.type,n=t.payload;switch(r){case h.REQUEST:e.isFetchPostsLoading=!0,e.fetchPostsError="";break;case h.SUCCESS:e.postsData=n,e.isFetchPostsLoading=!1;break;case h.FAILURE:e.isFetchPostsLoading=!1,e.fetchPostsError=n;break;case b.REQUEST:e.isFetchPostLoading=!0,e.fetchPostError="";break;case b.SUCCESS:e.postData=n,e.isFetchPostLoading=!1;break;case b.FAILURE:e.isFetchPostLoading=!1,e.fetchPostError=n;break;case f.REQUEST:e.isCreatePostLoading=!0,e.createPostError="";break;case f.SUCCESS:e.isCreatePostLoading=!1;break;case f.FAILURE:e.isCreatePostLoading=!1,e.createPostError=n;break;case E.REQUEST:e.isUpdatePostLoading=!0,e.updatePostError="";break;case E.SUCCESS:e.postData=n,e.isUpdatePostLoading=!1;break;case E.FAILURE:e.isUpdatePostLoading=!1,e.updatePostError=n;break;case v.REQUEST:e.isRemovePostLoading=!0,e.removePostError="";break;case v.SUCCESS:e.isRemovePostLoading=!1;break;case v.FAILURE:e.isRemovePostLoading=!1,e.removePostError=n}}),{postsData:[],postData:{},isFetchPostsLoading:!1,isFetchPostLoading:!1,isCreatePostLoading:!1,isUpdatePostLoading:!1,isRemovePostLoading:!1,fetchPostsError:"",fetchPostError:"",createPostError:"",updatePostError:"",removePostError:""}),j=r(7),P=function(){var e=Object(s.b)(),t=Object(s.c)(l),r=t.postsData,a=t.isFetchPostsLoading;return Object(n.useEffect)((function(){e(h.request()),e(b.request({values:{postId:1}}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:"Posts"}),a?"Loading":r.map((function(e){return Object(j.jsx)("h6",{children:e.title},e.id)}))]})},S=Object(n.memo)(P),w=(r(70),function(){return Object(j.jsx)("div",{children:Object(j.jsx)(S,{})})}),x=r(28),k=r(11),m=r(59),T=r(5),U=r.n(T),g=r(4),y=Object({NODE_ENV:"production",PUBLIC_URL:"/react-ts-redux-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_iexToken:"Tpk_8d57b30e4f694d7d892a7718b4832d54",REACT_APP_newsAPI:"7ad02e185c454a0ebc3ee6f11b41f27e",REACT_APP_DB:"http://127.0.0.1:8000"}).REACT_APP_AUTH_URL||"https://jsonplaceholder.typicode.com",R={posts:"".concat(y,"/posts")},C=r(56),L=r(60),_=r(12),A=r(57),F=r.n(A),I=function(e){return e&&e.indexOf("json")>=0},Q=["headers"],q=new(function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,[{key:"get",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("GET",t,r,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("POST",t,r,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("PUT",t,r,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("DELETE",t,r,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("PATCH",t,r,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=Object(_.a)(U.a.mark((function e(t,r,n,a){var c,s,o,u,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat("123")}),n&&(n instanceof FormData?c.delete("Content-Type"):F()(n)||(n=JSON.stringify(n))),s={},a)for(i in o=a.headers,u=Object(L.a)(a,Q),s=u,o)o.hasOwnProperty(i)&&c.append(i,o(i));return e.abrupt("return",fetch(r.toString(),Object(C.a)({body:n,method:t,headers:c},s)).then((function(e){return new Promise((function(t,r){var n=e.headers.get("content-type");(I(n)?e.json():e.text()).then((function(n){e.status<400?t(n):r(n)}))}))})));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}()}]),e}()),D=r(58),H=r.n(D),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;Object(u.a)(this,e),this.url=void 0,this.params=void 0,this.url=t,this.params=r}return Object(i.a)(e,[{key:"addParams",value:function(e){Object.assign(this.params,e)}},{key:"toString",value:function(){var e=this.params?"?":"";return e+=H()(this.params,(function(e,t,r){e.push("".concat(r,"=").concat(t))}),[]).join("&"),this.url+e}}]),e}(),W=function(){return q.get(new B("".concat(R.posts)))},M=function(e){return q.get(new B("".concat(R.posts,"/").concat(e)))},J=function(e){return q.post(new B("".concat(R.posts)),e)},K=function(e,t){return q.put(new B("".concat(R.posts,"/").concat(e)),t)},N=function(e){return q.get(new B("".concat(R.posts,"/").concat(e)))},V=U.a.mark(Z),z=U.a.mark(ee),G=U.a.mark(te),$=U.a.mark(re),X=U.a.mark(ne),Y=U.a.mark(ae);function Z(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.b)(W);case 3:return e=t.sent,t.next=6,Object(g.c)(h.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(g.c)(h.failure(t.t0));case 12:case"end":return t.stop()}}),V,null,[[0,8]])}function ee(e){var t,r,n,a;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.values,n=r.postId,c.prev=3,c.next=6,Object(g.b)(M,n);case 6:return a=c.sent,c.next=9,Object(g.c)(b.success(a));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(3),c.next=15,Object(g.c)(b.failure(c.t0));case 15:case"end":return c.stop()}}),z,null,[[3,11]])}function te(e){var t,r,n;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,r=t.values,n=t.setErrorMessage,a.prev=2,a.next=5,Object(g.b)(J,r);case 5:return a.next=7,Object(g.c)(f.success());case 7:return a.next=9,Object(g.c)(h.request());case 9:a.next=17;break;case 11:return a.prev=11,a.t0=a.catch(2),a.next=15,Object(g.c)(f.failure(a.t0));case 15:return a.next=17,Object(g.b)(n,"postname","postname needs to be unique");case 17:case"end":return a.stop()}}),G,null,[[2,11]])}function re(e){var t,r,n,a,c;return U.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,r=t.values,n=t.setErrorMessage,a=r.postId,s.prev=3,s.next=6,Object(g.b)(K,a,r);case 6:return c=s.sent,s.next=9,Object(g.c)(E.success(c));case 9:return s.next=11,Object(g.c)(h.request());case 11:s.next=19;break;case 13:return s.prev=13,s.t0=s.catch(3),s.next=17,Object(g.c)(E.failure(s.t0));case 17:return s.next=19,Object(g.b)(n,"postname","postname needs to be unique");case 19:case"end":return s.stop()}}),$,null,[[3,13]])}function ne(e){var t,r,n,a;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.values,n=t.callback,a=r.postId,c.prev=3,c.next=6,Object(g.b)(N,a);case 6:return c.next=8,Object(g.c)(v.success());case 8:return c.next=10,Object(g.c)(h.request());case 10:n(),c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,Object(g.c)(v.failure(c.t0));case 17:case"end":return c.stop()}}),X,null,[[3,13]])}function ae(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.d)(h.REQUEST,Z),Object(g.d)(b.REQUEST,ee),Object(g.d)(f.REQUEST,te),Object(g.d)(E.REQUEST,re),Object(g.d)(v.REQUEST,ne)]);case 2:case"end":return e.stop()}}),Y)}var ce=Object(k.b)(Object(x.a)({},d,O)),se=[ae],oe=k.c,ue=Object(m.a)(),ie=Object(k.d)(ce,oe(Object(k.a)(ue)));se.forEach((function(e){return ue.run(e)}));var pe=ie;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(159);c.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(s.a,{store:pe,children:Object(j.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,r){}},[[160,1,2]]]);
//# sourceMappingURL=main.da54eec1.chunk.js.map