(this["webpackJsonpalgo-visualiser"]=this["webpackJsonpalgo-visualiser"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),o=n.n(a),s=(n(8),n(3)),i=(n(14),n(15),n(0));var l=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useRef)(null);return Object(i.jsx)("div",{className:"optionDropDown",ref:a,children:Object(i.jsx)("i",{className:"fas fa-chevron-circle-down fa-2x ",onClick:function(){return r(!n)}})})},u=n(2),d=n(5),j="UNDO",f="DELETE",O="REFRESH",b="TOGGLE_LOCK",g="MAKENODE",h="MAKEEDGE",v="CHANGEALGO",p="VISUALISE",x=function(e,t,n){for(var c=[e],r=JSON.parse(JSON.stringify(t)),a=2;0!==c.length;){for(var o=c.length,s=0;s<o;){var i=c[0];if(c.shift(),r[i]>1)s++;else{r[i]=a;for(var l=0;l<n.length;l++)n[l][0]===i&&1===r[n[l][1]]&&c.push(n[l][1]),n[l][1]===i&&1===r[n[l][0]]&&c.push(n[l][0]);s++}}a++}return r},y=function(e,t,n){for(var c=[e],r=JSON.parse(JSON.stringify(t)),a=2;0!==c.length;){var o=c[c.length-1];if(c.pop(),!(r[o]>1)){r[o]=a;for(var s=0;s<n.length;s++)n[s][0]===o&&1===r[n[s][1]]&&c.push(n[s][1]),n[s][1]===o&&1===r[n[s][0]]&&c.push(n[s][0]);a++}}return r},m=function(e,t,n){var c=[[e,0]],r=JSON.parse(JSON.stringify(t));r[e]=0;for(var a=function(){for(var e=c[0][1],t=0,a=1;a<c.length;a++)c[a][1]<e&&(e=c[a][1],t=a);var o=c[t][0];if(c=c.filter((function(e){return e[0]!==o})),r[o]<e)return"continue";for(var s=0;s<n.length;s++)n[s][0]===o&&r[o]+n[s][2]<r[n[s][1]]&&(r[n[s][1]]=r[o]+n[s][2],c.push([n[s][1],r[o]+n[s][2]])),n[s][1]===o&&r[o]+n[s][2]<r[n[s][0]]&&(r[n[s][0]]=r[o]+n[s][2],c.push([n[s][0],r[o]+n[s][2]]))};0!==c.length;)a();return r},N=function(){var e=Math.floor(window.innerWidth/32),t=Math.floor(window.innerHeight/32)-4,n=new Array(t*e+1).join("0").split("").map(parseFloat);return{cols:e,rows:t,vertices:n,currentVertex:null,lock:!1,edge:{x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1},edges:[],adjList:[],last_actions:[],currentAlgo:"",startNode:-1,nodesDist:n.map((function(e){return 1e4})),size:32}},k=function(e,t){if(t.type===j){if(e.lock)return e;if(0===e.last_actions.length)return e;var n=e.last_actions.length-1;if("edge"===e.last_actions[n])return Object(u.a)(Object(u.a)({},e),{},{edges:e.edges.filter((function(t,n){return n!==e.edges.length-1})),adjList:e.adjList.filter((function(t,n){return n!==e.adjList.length-1})),last_actions:e.last_actions.filter((function(e,t){return t!==n}))});var c=e.last_actions[n];return Object(u.a)(Object(u.a)({},e),{},{vertices:e.vertices.map((function(e,t){return t===c?0:e})),last_actions:e.last_actions.filter((function(e,t){return t!==n}))})}if(t.type===f)return N();if(t.type===O)return Object(u.a)(Object(u.a)({},e),{},{edge:{x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1},CurrentVertex:null,currentAlgo:"",vertices:e.vertices.map((function(e){return e>=1?1:0})),nodesDist:e.vertices.map((function(e){return 1e4})),lock:!1});if(t.type===b)return Object(u.a)(Object(u.a)({},e),{},{lock:!e.lock});if(t.type===g){if(e.lock)return e;var r=t.payload;return""!==e.currentAlgo?e:r===e.edge.node1?Object(u.a)(Object(u.a)({},e),{},{currentVertex:null,edge:{x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1},startNode:r}):1===e.vertices[r]?Object(u.a)(Object(u.a)({},e),{},{currentVertex:r}):Object(u.a)(Object(u.a)({},e),{},{currentVertex:null,startNode:r,edge:{x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1},vertices:e.vertices.map((function(e,t){return r===t?1:e})),last_actions:[].concat(Object(d.a)(e.last_actions),[r])})}if(t.type===h){if(""!==e.currentAlgo)return e;if(-1!==e.edge.x1){var a=Math.floor(10*Math.random()+1);return Object(u.a)(Object(u.a)({},e),{},{adjList:[].concat(Object(d.a)(e.adjList),[[e.edge.node1,e.currentVertex,a]]),edges:[].concat(Object(d.a)(e.edges),[Object(u.a)(Object(u.a)({},e.edge),{},{x2:t.payload.width,y2:t.payload.height,node2:e.currentVertex,weight:a})]),edge:{x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1},currentVertex:null,last_actions:[].concat(Object(d.a)(e.last_actions),["edge"])})}return Object(u.a)(Object(u.a)({},e),{},{edge:Object(u.a)(Object(u.a)({},e.edge),{},{x1:t.payload.width,y1:t.payload.height,node1:e.currentVertex})})}if(t.type===v)return Object(u.a)(Object(u.a)({},e),{},{currentAlgo:t.payload,lock:!0});if(t.type===p){if("bfs"===t.payload)return Object(u.a)(Object(u.a)({},e),{},{vertices:x(e.startNode,e.vertices,e.adjList)});if("dfs"===t.payload)return Object(u.a)(Object(u.a)({},e),{},{vertices:y(e.startNode,e.vertices,e.adjList)});if("dijktras"===t.payload)return Object(u.a)(Object(u.a)({},e),{},{nodesDist:m(e.startNode,e.nodesDist,e.adjList)})}throw new Error("invalid call")},w=r.a.createContext(),A=N(),E=function(e){var t=e.children,n=Object(c.useReducer)(k,A),r=Object(s.a)(n,2),a=r[0],o=r[1],l=function(){o({type:O})};return Object(i.jsx)(w.Provider,{value:Object(u.a)(Object(u.a)({},a),{},{undo:function(){o({type:j})},refresh:l,clearAll:function(){o({type:f})},toggleLock:function(){o({type:b})},makeNode:function(e){o({type:g,payload:e})},updatePoints:function(e,t){o({type:h,payload:{width:e,height:t}})},changeAlgo:function(e){l(),o({type:v,payload:e})},startVisualisation:function(){""!==a.currentAlgo&&("bfs"===a.currentAlgo&&o({type:p,payload:"bfs"}),"dfs"===a.currentAlgo&&o({type:p,payload:"dfs"}),"dijktras"===a.currentAlgo&&o({type:p,payload:"dijktras"}))}}),children:t})},C=function(){return Object(c.useContext)(w)};var S=function(){var e=C().startVisualisation;return Object(i.jsx)("div",{className:"tooltip-container start","data-tooltip":"start",children:Object(i.jsx)("i",{className:"options fas fa-play fa-2x",onClick:e})})};var L=function(){var e=C().undo;return Object(i.jsx)("div",{className:"tooltip-container undo","data-tooltip":"undo",children:Object(i.jsx)("i",{className:"options fas fa-redo fa-2x",onClick:e})})};var _=function(){var e=C().refresh;return Object(i.jsx)("div",{className:"tooltip-container refresh","data-tooltip":"refresh",children:Object(i.jsx)("i",{className:"options fas fa-sync fa-2x",onClick:e})})};var V=function(){var e=C().clearAll;return Object(i.jsx)("div",{className:"tooltip-container delete","data-tooltip":"delete",children:Object(i.jsx)("i",{className:"options fas fa-trash fa-2x",onClick:e})})};var D=function(){var e=C(),t=e.lock,n=e.toggleLock;return Object(i.jsx)("div",{className:"tooltip-container lock-unlock","data-tooltip":"".concat(t?"lock":"unlock"),children:Object(i.jsx)("i",{className:"options-lock fas fa-lock".concat(t?"":"-open"," fa-2x"),onClick:n})})};n(17);var R=function(){return Object(i.jsxs)("div",{className:"tools",children:[Object(i.jsx)(S,{}),Object(i.jsx)(L,{}),Object(i.jsx)(_,{}),Object(i.jsx)(V,{}),Object(i.jsx)(D,{})]})},M=["bfs","dfs","dijktras","mst","cut-edge","cut-edge"];n(18);var J=function(e){var t=e.x,n=e.y,c=e.height,r=e.width,a=e.show,o=C().changeAlgo,s={top:"".concat(n+c,"px"),left:"".concat(t,"px"),width:"".concat(r,"px")};return Object(i.jsx)("div",{className:"dropdown ".concat(a?"dropdown-show":""),style:s,children:M.map((function(e,t){return Object(i.jsx)("li",{onClick:function(){return o(e)},children:e},t)}))})};n(19);var B=function(){var e=C().currentAlgo,t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(-1),l=Object(s.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)(-1),f=Object(s.a)(j,2),O=f[0],b=f[1],g=Object(c.useState)(-1),h=Object(s.a)(g,2),v=h[0],p=h[1],x=Object(c.useState)(-1),y=Object(s.a)(x,2),m=y[0],N=y[1],k=Object(c.useRef)(null);Object(c.useEffect)((function(){a(!1)}),[e]);var w=function(){var e=k.current;e&&(d(e.getBoundingClientRect().x),b(e.getBoundingClientRect().y),p(e.getBoundingClientRect().height),N(e.getBoundingClientRect().width))};return Object(c.useEffect)(w,[]),Object(c.useEffect)((function(){return window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}})),Object(i.jsxs)("div",{className:"selectAlgo",ref:k,onClick:function(){return a(!r)},children:[r&&Object(i.jsx)(J,{x:u,y:O,height:v,width:m,show:r}),Object(i.jsxs)("li",{className:"algo-btn",children:[e||"Select ALgo",Object(i.jsx)("i",{className:"fas fa-caret-down fa-2x"})]})]})};var I=function(){var e=Object(c.useState)(localStorage.getItem("theme")||"light-theme"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){document.documentElement.className=n}),[n]),Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("div",{className:"themeToggle",children:Object(i.jsx)("i",{className:"fas fa-adjust fa-2x",onClick:function(){var e="light-theme";n===e&&(e="dark-theme"),localStorage.setItem("theme",e),r(e)}})}),Object(i.jsx)("div",{className:"title",children:"algo-visualiser "}),Object(i.jsxs)("ul",{className:"navbar-items",children:[Object(i.jsx)(B,{}),Object(i.jsx)(R,{})]}),Object(i.jsx)(l,{})]})};n(20);var P=function(e){var t=e.edge,n=t.x1,c=t.x2,r=t.y1,a=t.y2,o=t.weight,s=C(),l=s.size,u=s.currentAlgo;if(-1===n)return Object(i.jsx)(i.Fragment,{});var d=180*Math.atan((a-r)/(c-n))/Math.PI,j=Math.sqrt((c-n)*(c-n)+(a-r)*(a-r)),f=(n+c)/2,O=(r+a)/2,b={width:"".concat(j,"px"),top:"".concat(O+l/2,"px"),left:"".concat(f-j/2+l/2,"px"),transform:"rotate(".concat(d,"deg)")};return Object(i.jsx)("div",{className:"edge",style:b,children:"dijktras"===u&&o})};var G=function(){var e=C().edges;return Object(i.jsx)("div",{children:e.map((function(e,t){return Object(i.jsx)(P,{edge:e},t)}))})};n(21);var z=function(){var e=C(),t=e.vertices,n=e.makeNode,r=e.currentVertex,a=e.updatePoints,o=e.nodesDist,s=e.currentAlgo,l=e.cols,u=e.rows,d=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(null!==d.current&&null!==r){var e=d.current.getBoundingClientRect();a(e.x,e.y)}}),[r]),Object(c.useEffect)((function(){var e=document.querySelector(":root");console.log(e.style),e.style.setProperty("--cols",l),e.style.setProperty("--rows",u),console.log(e.style)}),[l,u]),Object(i.jsxs)("div",{className:"grid-container",children:[t.map((function(e,t){var c="".concat(e>=1?e>1||1e4!==o[t]?"visited":"vertex":"node"," ").concat(r===t&&"active"),a={transition:" background 0s linear ".concat(e>1?"".concat(e-1,"s"):"0s",", color 0s")};return Object(i.jsxs)("div",{className:c,style:a,onClick:function(){return n(t)},ref:r===t?d:null,children:["dijktras"===s&&1e4!==o[t]?o[t]:""," ",e>1?e-1:""]},t)})),Object(i.jsx)(G,{})]})};n(22);var F=function(){return Object(i.jsxs)("div",{className:"appContainer",children:[Object(i.jsx)(I,{}),Object(i.jsx)(z,{})]})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{children:Object(i.jsx)(F,{})})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.b295be46.chunk.js.map