(this.webpackJsonptest_react_app=this.webpackJsonptest_react_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),i=a.n(r),c=a(2),o=a.n(c),l=a(7),m=a(3),u=a(4),p=a(6),v=a(5),d=a(18),h=a.n(d),y=(a(42),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:n.props.id,year:n.props.year,title:n.props.title,summary:n.props.summary,poster:n.props.poster,genres:n.props.genres},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("content",null,s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:this.state.poster,alt:this.state.title,title:this.state.title}),s.a.createElement("div",{className:"movie_data"},s.a.createElement("h3",{className:"movie_title"},this.state.title),s.a.createElement("h5",{className:"movie_year"},this.state.year),s.a.createElement("ul",{className:"genres"},this.state.genres.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres_genre"},e)}))),s.a.createElement("p",{className:"movie_summary"},this.state.summary.slice(0,180),"..."))))}}]),a}(n.Component)),f=(a(43),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n}return Object(u.a)(a,[{key:"getMovies",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,console.log(a),this.setState({movies:a,isLoading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log("Update")}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"container"},this.state.isLoading?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader_text"},"Loading ...")):s.a.createElement("div",{className:"movies"},this.state.movies.map((function(e){return s.a.createElement(y,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))))}}]),a}(n.Component));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4009d2f3.chunk.js.map