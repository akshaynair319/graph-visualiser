(this["webpackJsonpalgo-visualiser"]=this["webpackJsonpalgo-visualiser"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(8),n(2)),o=["bfs","dfs","dijktras"],l=n(4),u=n(7),j=n(0),d=r.a.createContext(),f=new Array(681).join("0").split("").map(parseFloat),b=function(e){var t=e.children,n=Object(c.useState)(f),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(null),b=Object(i.a)(o,2),O=b[0],h=b[1],x=Object(c.useState)(0),v=Object(i.a)(x,2),g=v[0],p=v[1],m=Object(c.useState)(0),y=Object(i.a)(m,2),N=y[0],S=y[1],k=Object(c.useState)({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1}),w=Object(i.a)(k,2),A=w[0],C=w[1],J=Object(c.useState)([]),M=Object(i.a)(J,2),E=M[0],P=M[1],R=Object(c.useState)([]),V=Object(i.a)(R,2),B=V[0],z=V[1],D=Object(c.useState)(""),F=Object(i.a)(D,2),I=F[0],q=F[1],L=Object(c.useState)(-1),T=Object(i.a)(L,2),G=T[0],H=T[1],K=Object(c.useState)(f.map((function(e){return 1e4}))),Q=Object(i.a)(K,2),U=Q[0],W=Q[1],X=function(){C({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1}),h(null),q(""),s(a.map((function(e){return e>=1?1:0}))),W(f.map((function(e){return 1e4})))};return Object(j.jsx)(d.Provider,{value:{vertices:a,currentVertex:O,size:32,verticesAdded:g,edgesAdded:N,edges:E,currentAlgo:I,startNode:G,nodesDist:U,clearAll:function(){s(f),P([]),C({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1}),h(null),S(0),p(0),H(-1),q(""),z([]),W(f.map((function(e){return 1e4})))},makeNode:function(e){if(""===I)return e===A.node1?(h(null),void C({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1})):void(1!==a[e]?(h(null),p(g+1),H(e),C({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1}),s(a.map((function(t,n){return e===n?1:t})))):h(e))},updatePoints:function(e,t){if(""===I)if(console.log(e,t),-1!==A.x1){var n=Math.floor(10*Math.random()+1);z([].concat(Object(u.a)(B),[[A.node1,O,n]])),P([].concat(Object(u.a)(E),[Object(l.a)(Object(l.a)({},A),{},{x2:e,y2:t,node2:O,weight:n})])),C({x1:-1,x2:-1,y1:-1,y2:-1,node1:-1,node2:-1,weight:-1}),S(N+1),h(null)}else C(Object(l.a)(Object(l.a)({},A),{},{x1:e,y1:t,node1:O}))},changeAlgo:function(e){X(),q(e===I?"":e)},refresh:X,startVisualisation:function(){""!==I&&("bfs"===I&&function(){for(var e=[G],t=JSON.parse(JSON.stringify(a)),n=2;0!==e.length;){for(var c=e.length,r=0;r<c;){var i=e[0];if(e.shift(),t[i]>1)r++;else{t[i]=n;for(var o=0;o<B.length;o++)B[o][0]===i&&1===t[B[o][1]]&&e.push(B[o][1]),B[o][1]===i&&1===t[B[o][0]]&&e.push(B[o][0]);r++}}n++}s(t)}(),"dfs"===I&&function(){for(var e=[G],t=JSON.parse(JSON.stringify(a)),n=2;0!==e.length;){var c=e[e.length-1];if(e.pop(),!(t[c]>1)){t[c]=n;for(var r=0;r<B.length;r++)B[r][0]===c&&1===t[B[r][1]]&&e.push(B[r][1]),B[r][1]===c&&1===t[B[r][0]]&&e.push(B[r][0]);n++}}s(t)}(),"dijktras"===I&&function(){var e=[[G,0]],t=JSON.parse(JSON.stringify(U));t[G]=0;for(var n=function(){for(var n=e[0][1],c=0,r=1;r<e.length;r++)e[r][1]<n&&(n=e[r][1],c=r);var a=e[c][0];if(e=e.filter((function(e){return e[0]!==a})),t[a]<n)return"continue";for(var s=0;s<B.length;s++)B[s][0]===a&&t[a]+B[s][2]<t[B[s][1]]&&(t[B[s][1]]=t[a]+B[s][2],e.push([B[s][1],t[a]+B[s][2]])),B[s][1]===a&&t[a]+B[s][2]<t[B[s][0]]&&(t[B[s][0]]=t[a]+B[s][2],e.push([B[s][0],t[a]+B[s][2]]))};0!==e.length;)n();W(t),console.log("dijktras ended")}())}},children:t})},O=function(){return Object(c.useContext)(d)};var h=function(e){var t=e.rect,n=e.show,c=O(),r=c.currentAlgo,a=c.changeAlgo;console.log(t);var s={top:"".concat(t.y+t.height,"px"),left:"".concat(t.x,"px"),width:"".concat(t.width,"px")};return Object(j.jsx)("div",{className:"dropdown ".concat(n?"dropdown-show":""),style:s,children:o.map((function(e,t){return Object(j.jsx)("li",{className:"".concat(""!==r&&e===r?"active-algo":""),onClick:function(){return a(e)},children:e},t)}))})};var x=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)("div",{children:Object(j.jsx)("i",{class:"fas fa-chevron-circle-down fa-2x ",onClick:function(){return r(!n)}})})};var v=function(){var e=O(),t=e.clearAll,n=e.refresh,r=e.startVisualisation,a=e.currentAlgo,s=Object(c.useState)("light-theme"),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),b=f[0],v=f[1],g=Object(c.useRef)(null);return Object(c.useEffect)((function(){document.documentElement.className=l}),[l]),Object(c.useEffect)((function(){v(!1)}),[a]),Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("div",{className:"themeToggle",children:Object(j.jsx)("i",{className:"fas fa-adjust fa-2x",onClick:function(){var e="light-theme";l===e&&(e="dark-theme"),u(e)}})}),Object(j.jsx)("div",{className:"title",children:"algo-visualiser "}),b&&Object(j.jsx)(h,{rect:g.current.getBoundingClientRect(),show:b}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{onClick:function(){return v(!b)},ref:g,className:"".concat(""!==a?"active-algo":""),children:[a||"Select ALgo",Object(j.jsx)("i",{class:"fas fa-caret-down fa-2x"})]}),Object(j.jsx)("li",{onClick:r,children:"begin"}),Object(j.jsx)("li",{onClick:n,children:"refresh"}),Object(j.jsx)("li",{onClick:t,children:"delete"})]}),Object(j.jsx)(x,{})]})};var g=function(e){var t=e.edge,n=t.x1,c=t.x2,r=t.y1,a=t.y2,s=t.weight,i=O(),o=i.size,l=i.currentAlgo;if(-1===n)return Object(j.jsx)(j.Fragment,{});var u=180*Math.atan((a-r)/(c-n))/Math.PI,d=Math.sqrt((c-n)*(c-n)+(a-r)*(a-r)),f=(n+c)/2,b=(r+a)/2,h={width:"".concat(d,"px"),top:"".concat(b+o/2,"px"),left:"".concat(f-d/2+o/2,"px"),transform:"rotate(".concat(u,"deg)")};return Object(j.jsx)("div",{className:"edge",style:h,children:"dijktras"===l&&s})};var p=function(){var e=O().edges;return Object(j.jsx)("div",{children:e.map((function(e,t){return Object(j.jsx)(g,{edge:e},t)}))})};var m=function(){var e=O(),t=e.vertices,n=e.makeNode,r=e.currentVertex,a=e.updatePoints,s=e.nodesDist,i=e.currentAlgo,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(null!==o.current&&null!==r){var e=o.current.getBoundingClientRect();a(e.x,e.y)}}),[r]),Object(j.jsxs)("div",{className:"grid-container",children:[t.map((function(e,t){var c="".concat(e>=1?e>1||1e4!==s[t]?"visited":"vertex":"node"," ").concat(r===t&&"active"),a={transition:" background 0s linear ".concat(e>1?"".concat(e-1,"s"):"0s",", color 0s")};return Object(j.jsxs)("div",{className:c,style:a,onClick:function(){return n(t)},ref:r===t?o:null,children:["dijktras"===i&&1e4!==s[t]?s[t]:""," ",e>1?e-1:""]},t)})),Object(j.jsx)(p,{})]})};var y=function(){return Object(j.jsxs)("div",{className:"appContainer",children:[Object(j.jsx)(v,{}),Object(j.jsx)(m,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(y,{})})}),document.getElementById("root"))},8:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.99367d8c.chunk.js.map