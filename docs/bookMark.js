import"./modulepreload-polyfill.js";import{c as k,j as e,r as b}from"./client.js";function j(){const[r,a]=b.useState([]),c=()=>{const s=prompt("Enter folder name:");s&&a([...r,{name:s,bookmarks:[]}])},i=s=>{const t=r.filter((n,o)=>o!==s);a(t)},m=s=>{const t=prompt("Enter new folder name:",r[s].name);if(t){const n=[...r];n[s].name=t,a(n)}},d=s=>{const t=prompt("Enter URL:"),n=prompt("Enter a note for this URL:");if(t&&n){const o=[...r];o[s].bookmarks.push({url:t,note:n}),a(o)}},p=(s,t)=>{const n=[...r],o=prompt("Edit URL:",n[s].bookmarks[t].url),l=prompt("Edit Note:",n[s].bookmarks[t].note);o&&l&&(n[s].bookmarks[t]={url:o,note:l},a(n))},h=(s,t)=>{const n=[...r];n[s].bookmarks.splice(t,1),a(n)};return e.jsxs("div",{style:{backgroundColor:"#333",color:"white",minHeight:"100vh",padding:"20px"},children:[e.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontSize:"2.5rem",fontWeight:"700",textAlign:"center"},children:"Bookmark Manager"}),e.jsx("p",{style:{fontFamily:"'Open Sans', sans-serif",fontSize:"1rem",opacity:"0.8",textAlign:"center"},children:"Welcome to your personal bookmark manager! Organize your URLs into different folders and add custom notes."}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("a",{href:"../index.html",className:"btn btn-warning btn-lg",style:{fontFamily:"'Open Sans', sans-serif",fontSize:"1rem"},children:"Home"})}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:c,style:{fontFamily:"'Open Sans', sans-serif",fontSize:"1rem"},children:"Add Folder"})}),e.jsx("div",{className:"row",children:r.map((s,t)=>e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"card p-3",children:[e.jsx("h3",{children:s.name}),e.jsxs("p",{children:[s.bookmarks.length," bookmarks"]}),e.jsx("button",{className:"btn btn-warning",onClick:()=>m(t),children:"Edit Folder"}),e.jsx("button",{className:"btn btn-danger ml-2",onClick:()=>i(t),children:"Delete Folder"}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{className:"btn btn-success",onClick:()=>d(t),children:"Add Bookmark"})}),e.jsx("div",{className:"mt-3",children:s.bookmarks.map((n,o)=>e.jsxs("div",{className:"card p-2 mb-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",n.url]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," ",n.note]}),e.jsx("button",{className:"btn btn-info",onClick:()=>p(t,o),children:"Edit Bookmark"}),e.jsx("button",{className:"btn btn-danger ml-2",onClick:()=>h(t,o),children:"Delete Bookmark"})]},o))})]})},t))})]})}const u=document.getElementById("root"),x=k.createRoot(u);x.render(e.jsx(j,{}));
