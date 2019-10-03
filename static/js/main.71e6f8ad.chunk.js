(window["webpackJsonpmovie-checker"]=window["webpackJsonpmovie-checker"]||[]).push([[0],{50:function(e,t,a){e.exports=a(94)},55:function(e,t,a){},72:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(36),o=a.n(i),r=(a(55),a(11)),s=a(8),l=a(37),m=a(38),u=a(46),v=a(39),h=a(47),d=a(9),p=a.n(d),g=(a(72),function(e){var t=e.placeholder,a=e.onChange,n=e.value;return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"Search",placeholder:t,onChange:a,value:n,className:"search"}))}),f=a(14),E=a(40),w=a.n(E),y=function(e){return console.log(e),c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500/".concat(e.item.poster_path),alt:"Movie Poster"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.item.original_title," (",e.item.release_date.substring(0,4),")"),c.a.createElement("p",{className:"card-text"},"".concat(e.item.overview).length>90?"".concat(e.item.overview).substring(0,87)+"...":"".concat(e.item.overview))))},b=function(e){var t=e.items,a=c.a.useState(0),n=Object(f.a)(a,2),i=n[0],o=n[1];return void 0!==t?c.a.createElement(w.a,{gutter:12,activePosition:"center",chevronWidth:50,disableSwipe:!1,alwaysShowChevrons:!0,numberOfCards:4,slidesToScroll:2,outsideChevron:!0,showSlither:!1,firstAndLastGutter:!1,activeItemIndex:i,requestToChangeActive:function(e){return o(e)},rightChevron:">",leftChevron:"<"},t.map((function(e){return c.a.createElement(y,{item:e,key:e.id})}))):null},k=(a(90),a(91),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={popularMovies:{},upcomingMovies:{},nowPlaying:{},searchValue:"",searchedMovies:{},activeItemIndex:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getPopularMovies(),this.getUpcomingMovies(),this.getNowPlaying()}},{key:"getPopularMovies",value:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({popularMovies:t.data})}))}},{key:"getUpcomingMovies",value:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({upcomingMovies:t.data})}))}},{key:"getNowPlaying",value:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({nowPlaying:t.data})}))}},{key:"onSearchChange",value:function(e){var t=this;this.setState({searchValue:e.target.value}),this.state.searchValue.length>4&&p.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&query=").concat(this.state.searchValue,"&page=1")).then((function(e){t.setState({searchedMovies:e.data})}))}},{key:"render",value:function(){var e=this,t=null;return this.state.searchValue.length<5?t=c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"popular-movies"},c.a.createElement("h3",null,"Popular Movies"),c.a.createElement(b,{items:this.state.popularMovies.results}))),c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"upcoming-movies"},c.a.createElement("h3",null,"Upcoming Movies"),c.a.createElement(b,{items:this.state.upcomingMovies.results}))),c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"upcoming-movies"},c.a.createElement("h3",null,"Now Playing"),c.a.createElement(b,{items:this.state.nowPlaying.results})))):void 0!==this.state.searchedMovies&&(t=c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{className:"searched-movies"},c.a.createElement("h3",null,"Results for: ",this.state.searchValue),c.a.createElement(b,{items:this.state.searchedMovies.results}))))),c.a.createElement("div",{id:"movie-checkr"},c.a.createElement(g,{placeholder:"Search for a movie/actor/producer",value:this.state.searchValue,onChange:function(t){return e.onSearchChange(t)}}),t)}}]),t}(c.a.Component)),M=Object(s.e)(k);a(93);var N=function(){return c.a.createElement(r.b,null,c.a.createElement(r.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.71e6f8ad.chunk.js.map