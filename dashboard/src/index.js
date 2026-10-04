export default {

async fetch(request) {

const url = new URL(request.url);

if (url.pathname === "/app") {

return Response.redirect(
"https://app.weiflycc.com",
302
);

}

if (url.pathname === "/api") {

return Response.redirect(
"https://api.weiflycc.com",
302
);

}

return new Response(`

<!DOCTYPE html>
<html lang="zh-Hant">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,initial-scale=1">

<title>WeiflyCC OS</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

background:#050816;

color:white;

font-family:
Segoe UI,
sans-serif;

overflow:hidden;

}

#boot{

position:fixed;
inset:0;

display:flex;

justify-content:center;
align-items:center;

flex-direction:column;

background:#050816;

z-index:999;

}

.logo{

font-size:4rem;

font-weight:900;

letter-spacing:8px;

color:#00d1ff;

text-shadow:
0 0 30px #00d1ff;

}

#log{

margin-top:25px;

font-family:monospace;

color:#78dfff;

}

#app{

display:none;

height:100vh;

}

.hero{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

padding:20px;

}

.hero h1{

font-size:clamp(42px,8vw,90px);

margin-bottom:10px;

}

.hero p{

opacity:.75;

margin-bottom:30px;

}

.actions{

display:flex;

gap:20px;

flex-wrap:wrap;

justify-content:center;

}

.btn{

padding:15px 25px;

border-radius:12px;

border:1px solid #00d1ff;

text-decoration:none;

color:white;

transition:.3s;

}

.btn:hover{

background:#00d1ff;

color:black;

}

</style>

</head>

<body>

<div id="boot">

<div class="logo">
WEIFLYCC
</div>

<div id="log"></div>

</div>

<div id="app">

<div class="hero">

<h1>
WEIFLYCC OS
</h1>

<p>
One Core • Three Realms
</p>

<div class="actions">

/app
Open AI
</a>

/api
Open API
</a>

</div>

</div>

</div>

<script>

const lines=[

"Initializing WeiflyOS...",
"Loading Identity...",
"Loading Memory...",
"Loading Network...",
"Connecting Realms...",
"Starting Command Center...",
"Welcome Back."

];

const log =
document.getElementById("log");

let i = 0;

const timer =
setInterval(()=>{

log.innerHTML+=
"<div>✓ "
+ lines[i]
+ "</div>";

i++;

if(i===lines.length){

clearInterval(timer);

setTimeout(()=>{

document
.getElementById("boot")
.style.display="none";

document
.getElementById("app")
.style.display="block";

},1000);

}

},1000);

</script>

</body>

</html>

`,{

headers:{

"content-type":
"text/html;charset=utf-8"

}

});

}

}
