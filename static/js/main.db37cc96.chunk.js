(this["webpackJsonpalgo-visualiser"]=this["webpackJsonpalgo-visualiser"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),o=n.n(a),i=(n(8),n(3)),s=(n(14),n(15),n(2)),l=n(6),u="UNDO",d="DELETE",f="REFRESH",j="TOGGLE_LOCK",O="MAKENODE",b="MAKEEDGE",v="CHANGEALGO",h="VISUALISE",p=function(e,t,n){for(var c=[e],r=JSON.parse(JSON.stringify(t)),a=2;0!==c.length;){for(var o=c.length,i=0;i<o;){var s=c[0];if(c.shift(),r[s]>1)i++;else{r[s]=a;for(var l=0;l<n.length;l++)n[l][0]===s&&1===r[n[l][1]]&&c.push(n[l][1]),n[l][1]===s&&1===r[n[l][0]]&&c.push(n[l][0]);i++}}a++}return r},g=function(e,t,n){for(var c=[e],r=JSON.parse(JSON.stringify(t)),a=2;0!==c.length;){var o=c[c.length-1];if(c.pop(),!(r[o]>1)){r[o]=a;for(var i=0;i<n.length;i++)n[i][0]===o&&1===r[n[i][1]]&&c.push(n[i][1]),n[i][1]===o&&1===r[n[i][0]]&&c.push(n[i][0]);a++}}return r},x=function(e,t,n){var c=[[e,0]],r=JSON.parse(JSON.stringify(t));r[e]=0;for(var a=function(){for(var e=c[0][1],t=0,a=1;a<c.length;a++)c[a][1]<e&&(e=c[a][1],t=a);var o=c[t][0];if(c=c.filter((function(e){return e[0]!==o})),r[o]<e)return"continue";for(var i=0;i<n.length;i++)n[i][0]===o&&r[o]+n[i][2]<r[n[i][1]]&&(r[n[i][1]]=r[o]+n[i][2],c.push([n[i][1],r[o]+n[i][2]])),n[i][1]===o&&r[o]+n[i][2]<r[n[i][0]]&&(r[n[i][0]]=r[o]+n[i][2],c.push([n[i][0],r[o]+n[i][2]]))};0!==c.length;)a();return r},m=function(){var e=Math.floor(window.screen.width/32)-1,t=Math.floor(window.screen.height/32)-4,n=new Array(t*e+1).join("0").split("").map(parseFloat);return{size:32,cols:e,rows:t,vertices:n,currentVertex:null,lock:!1,edge:{node1:-1,node2:-1,weight:-1},adjList:[],last_actions:[],currentAlgo:"",startNode:-1,nodesDist:n.map((function(e){return 1e4}))}},w=function(e,t){if(t.type===u){if(e.lock)return e;if(0===e.last_actions.length)return e;var n=e.last_actions.length-1;if("edge"===e.last_actions[n])return Object(s.a)(Object(s.a)({},e),{},{adjList:e.adjList.filter((function(t,n){return n!==e.adjList.length-1})),last_actions:e.last_actions.filter((function(e,t){return t!==n}))});var c=e.last_actions[n];return Object(s.a)(Object(s.a)({},e),{},{vertices:e.vertices.map((function(e,t){return t===c?0:e})),last_actions:e.last_actions.filter((function(e,t){return t!==n}))})}if(t.type===d)return m();if(t.type===f)return Object(s.a)(Object(s.a)({},e),{},{edge:{node1:-1,node2:-1,weight:-1},CurrentVertex:null,currentAlgo:"",vertices:e.vertices.map((function(e){return e>=1?1:0})),nodesDist:e.vertices.map((function(e){return 1e4})),lock:!1});if(t.type===j)return Object(s.a)(Object(s.a)({},e),{},{lock:!e.lock});if(t.type===O){if(e.lock)return e;var r=t.payload;return""!==e.currentAlgo?e:r===e.edge.node1?Object(s.a)(Object(s.a)({},e),{},{currentVertex:null,edge:Object(s.a)(Object(s.a)({},e.edge),{},{node1:-1}),startNode:r}):1===e.vertices[r]?Object(s.a)(Object(s.a)({},e),{},{currentVertex:r}):Object(s.a)(Object(s.a)({},e),{},{currentVertex:null,startNode:r,edge:{node1:-1,node2:-1,weight:-1},vertices:e.vertices.map((function(e,t){return r===t?1:e})),last_actions:[].concat(Object(l.a)(e.last_actions),[r])})}if(t.type===b){if(""!==e.currentAlgo)return e;if(-1!==e.edge.node1){var a=Math.floor(10*Math.random()+1);return Object(s.a)(Object(s.a)({},e),{},{adjList:[].concat(Object(l.a)(e.adjList),[[e.edge.node1,e.currentVertex,a]]),edge:{node1:-1,node2:-1,weight:-1},currentVertex:null,last_actions:[].concat(Object(l.a)(e.last_actions),["edge"])})}return Object(s.a)(Object(s.a)({},e),{},{edge:Object(s.a)(Object(s.a)({},e.edge),{},{node1:e.currentVertex})})}if(t.type===v)return Object(s.a)(Object(s.a)({},e),{},{currentAlgo:t.payload,lock:!0});if(t.type===h){if("bfs"===t.payload)return Object(s.a)(Object(s.a)({},e),{},{vertices:p(e.startNode,e.vertices,e.adjList)});if("dfs"===t.payload)return Object(s.a)(Object(s.a)({},e),{},{vertices:g(e.startNode,e.vertices,e.adjList)});if("dijktras"===t.payload)return Object(s.a)(Object(s.a)({},e),{},{nodesDist:x(e.startNode,e.nodesDist,e.adjList)})}throw new Error("invalid call")},y=n(0),N=r.a.createContext(),k=m(),E=function(e){var t=e.children,n=Object(c.useReducer)(w,k),r=Object(i.a)(n,2),a=r[0],o=r[1],l=function(){o({type:f})};return Object(y.jsx)(N.Provider,{value:Object(s.a)(Object(s.a)({},a),{},{undo:function(){o({type:u})},refresh:l,clearAll:function(){o({type:d})},toggleLock:function(){o({type:j})},makeNode:function(e){o({type:O,payload:e})},updatePoints:function(e,t){o({type:b,payload:{width:e,height:t}})},changeAlgo:function(e){l(),o({type:v,payload:e})},startVisualisation:function(){""!==a.currentAlgo&&("bfs"===a.currentAlgo&&o({type:h,payload:"bfs"}),"dfs"===a.currentAlgo&&o({type:h,payload:"dfs"}),"dijktras"===a.currentAlgo&&o({type:h,payload:"dijktras"}))}}),children:t})},L=function(){return Object(c.useContext)(N)};var A=function(){var e=L().startVisualisation;return Object(y.jsx)("div",{className:"tooltip-container start","data-tooltip":"start",children:Object(y.jsx)("i",{className:"options fas fa-play fa-2x",onClick:e})})};var S=function(){var e=L().undo;return Object(y.jsx)("div",{className:"tooltip-container undo","data-tooltip":"undo",children:Object(y.jsx)("i",{className:"options fas fa-redo fa-2x",onClick:e})})};var C=function(){var e=L().refresh;return Object(y.jsx)("div",{className:"tooltip-container refresh","data-tooltip":"refresh",children:Object(y.jsx)("i",{className:"options fas fa-sync fa-2x",onClick:e})})};var _=function(){var e=L().clearAll;return Object(y.jsx)("div",{className:"tooltip-container delete","data-tooltip":"delete",children:Object(y.jsx)("i",{className:"options fas fa-trash fa-2x",onClick:e})})};var V=function(){var e=L(),t=e.lock,n=e.toggleLock;return Object(y.jsx)("div",{className:"tooltip-container lock-unlock","data-tooltip":"".concat(t?"lock":"unlock"),children:Object(y.jsx)("i",{className:"options-lock fas fa-lock".concat(t?"":"-open"," fa-2x"),onClick:n})})};n(17);var D=function(){return Object(y.jsxs)("div",{className:"tools",children:[Object(y.jsx)(A,{}),Object(y.jsx)(S,{}),Object(y.jsx)(C,{}),Object(y.jsx)(_,{}),Object(y.jsx)(V,{})]})};var M=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(y.jsxs)("div",{className:"optionDropDown",children:[Object(y.jsx)("i",{className:"fas fa-chevron-circle-down fa-2x ",onClick:function(){return r(!n)}}),n&&Object(y.jsx)(D,{})]})},R=["bfs","dfs","dijktras","mst","cut-edge","cut-edge"];n(18);var z=function(e){var t=e.x,n=e.y,c=e.height,r=e.width,a=e.show,o=L().changeAlgo,i={top:"".concat(n+c,"px"),left:"".concat(t,"px"),width:"".concat(r,"px")};return Object(y.jsx)("div",{className:"dropdown ".concat(a?"dropdown-show":""),style:i,children:R.map((function(e,t){return Object(y.jsx)("li",{onClick:function(){return o(e)},children:e},t)}))})};n(19);var B=function(){var e=L().currentAlgo,t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(-1),s=Object(i.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(-1),f=Object(i.a)(d,2),j=f[0],O=f[1],b=Object(c.useState)(-1),v=Object(i.a)(b,2),h=v[0],p=v[1],g=Object(c.useState)(-1),x=Object(i.a)(g,2),m=x[0],w=x[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){a(!1)}),[e]);var k=function(){var e=N.current;e&&(u(e.getBoundingClientRect().x),O(e.getBoundingClientRect().y),p(e.getBoundingClientRect().height),w(e.getBoundingClientRect().width))};return Object(c.useEffect)(k,[]),Object(c.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}})),Object(y.jsxs)("div",{className:"selectAlgo",ref:N,onClick:function(){return a(!r)},children:[r&&Object(y.jsx)(z,{x:l,y:j,height:h,width:m,show:r}),Object(y.jsxs)("li",{className:"algo-btn",children:[e||"Select ALgo",Object(y.jsx)("i",{className:"fas fa-caret-down fa-2x"})]})]})};var I=function(){var e=Object(c.useState)(localStorage.getItem("theme")||"light-theme"),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(window.innerWidth),o=Object(i.a)(a,2),s=o[0],l=o[1],u=function(){return l(window.innerWidth)};return Object(c.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}})),Object(c.useEffect)((function(){document.documentElement.className=n}),[n]),Object(y.jsxs)("div",{className:"navbar",children:[Object(y.jsx)("div",{className:"themeToggle",children:Object(y.jsx)("i",{className:"fas fa-adjust fa-2x",onClick:function(){var e="light-theme";n===e&&(e="dark-theme"),localStorage.setItem("theme",e),r(e)}})}),Object(y.jsx)("div",{className:"title",children:"algo-visualiser "}),Object(y.jsxs)("ul",{className:"navbar-items",children:[Object(y.jsx)(B,{}),s>=950&&Object(y.jsx)(D,{})]}),Object(y.jsx)(M,{})]})};n(20);var J=function(e){var t=e.edge,n=t[0],c=t[1],r=t[2],a=document.getElementById("#".concat(n)),o=a.offsetLeft,i=a.offsetTop,s=document.getElementById("#".concat(c)),l=s.offsetLeft,u=s.offsetTop,d=L(),f=d.size,j=d.currentAlgo;if(-1===o)return Object(y.jsx)(y.Fragment,{});var O=180*Math.atan((u-i)/(l-o))/Math.PI,b=Math.sqrt((l-o)*(l-o)+(u-i)*(u-i)),v=(o+l)/2,h=(i+u)/2,p={width:"".concat(b,"px"),top:"".concat(h+f/2,"px"),left:"".concat(v-b/2+f/2,"px"),transform:"rotate(".concat(O,"deg)")};return Object(y.jsx)("div",{className:"edge",style:p,children:"dijktras"===j&&r})};var P=function(){var e=L().adjList,t=Object(c.useState)(window.innerWidth),n=Object(i.a)(t,2),r=(n[0],n[1]),a=function(){r(window.innerWidth)};return Object(c.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}})),Object(y.jsx)("div",{children:e.map((function(e,t){return Object(y.jsx)(J,{edge:e},t)}))})};n(21);var G=function(){var e=L(),t=e.vertices,n=e.makeNode,r=e.currentVertex,a=e.updatePoints,o=e.nodesDist,i=e.currentAlgo,s=e.cols,l=e.rows,u=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(null!==u.current&&null!==r){var e=u.current.getBoundingClientRect();a(e.x,e.y)}}),[r]),Object(c.useEffect)((function(){var e=document.querySelector(":root");e.style.setProperty("--cols",s),e.style.setProperty("--rows",l)}),[s,l]),Object(y.jsxs)("div",{className:"grid-container",children:[t.map((function(e,t){var c="".concat(e>=1?e>1||1e4!==o[t]?"visited":"vertex":"node"," ").concat(r===t&&"active"),a={transition:" background 0s linear ".concat(e>1?"".concat(e-1,"s"):"0s",", color 0s")};return Object(y.jsxs)("div",{id:"#".concat(t),className:c,style:a,onClick:function(){return n(t)},ref:r===t?u:null,children:["dijktras"===i&&1e4!==o[t]?o[t]:""," ",e>1?e-1:""]},t)})),Object(y.jsx)(P,{})]})};n(22);var T=function(){return Object(y.jsxs)("div",{className:"appContainer",children:[Object(y.jsx)(I,{}),Object(y.jsx)(G,{})]})};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(E,{children:Object(y.jsx)(T,{})})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.db37cc96.chunk.js.map