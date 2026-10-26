#!/usr/bin/env bash

set -euo pipefail

ROOT="/home/weiflycc-center/web/domains/info"

echo "==========================================="
echo "      WeiflyCC INFO V2 Builder"
echo "==========================================="

mkdir -p "$ROOT"
mkdir -p "$ROOT/works"
mkdir -p "$ROOT/contact"
mkdir -p "$ROOT/static/css"
mkdir -p "$ROOT/static/js"
mkdir -p "$ROOT/static/img"

##############################################################################
# 驗證素材
##############################################################################

REQUIRED=(
logo4.jpg
cc02.jpg
ccpeople.jpg
ccfamily.jpg
luluqq.jpg
)

for img in "${REQUIRED[@]}"; do

    if [ ! -f "$ROOT/static/img/$img" ]; then

        echo
        echo "[ERROR] 缺少素材：$img"
        echo "$ROOT/static/img/$img"
        exit 1

    fi

done

echo "[OK] 圖片素材驗證完成"

##############################################################################
# robots.txt
##############################################################################

cat > "$ROOT/robots.txt" <<'EOF'
User-agent: *
Allow: /

Sitemap: https://weiflycc.info/sitemap.xml
EOF

##############################################################################
# sitemap.xml
##############################################################################

cat > "$ROOT/sitemap.xml" <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>https://weiflycc.info/</loc>
</url>

<url>
<loc>https://weiflycc.info/works/</loc>
</url>

<url>
<loc>https://weiflycc.info/contact/</loc>
</url>

</urlset>
EOF

##############################################################################
# CSS
##############################################################################

cat > "$ROOT/static/css/style.css" <<'EOF'
:root {
  --bg:#070b12;
  --card:#111827;
  --glass:rgba(255,255,255,.05);
  --border:rgba(255,255,255,.08);
  --text:#f8fafc;
  --muted:#94a3b8;
  --accent:#f38020;
}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
background:var(--bg);
color:var(--text);
line-height:1.7;
}

.container{
width:min(1200px,92%);
margin:auto;
}

.header{
position:sticky;
top:0;
z-index:999;
backdrop-filter:blur(24px);
background:rgba(7,11,18,.85);
border-bottom:1px solid var(--border);
}

.nav{
display:flex;
align-items:center;
justify-content:space-between;
padding:16px 0;
}

.brand{
display:flex;
align-items:center;
gap:12px;
text-decoration:none;
color:white;
}

.brand img{
width:48px;
height:48px;
border-radius:50%;
}

.brand small{
font-size:.7rem;
opacity:.7;
}

nav{
display:flex;
gap:24px;
}

nav a{
color:white;
text-decoration:none;
}

.hero{
min-height:90vh;
display:flex;
align-items:center;
}

.hero-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
align-items:center;
}

.hero h1{
font-size:clamp(2.5rem,5vw,5rem);
line-height:1.1;
margin-bottom:20px;
}

.hero p{
color:var(--muted);
font-size:1.1rem;
}

.hero-image img{
width:100%;
border-radius:30px;
animation:float 6s ease-in-out infinite;
}

section{
padding:100px 0;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:24px;
margin-top:32px;
}

.card{
background:var(--glass);
border:1px solid var(--border);
backdrop-filter:blur(24px);
border-radius:24px;
padding:24px;
text-decoration:none;
color:white;

opacity:0;
transform:translateY(40px);
}

.card.show{
opacity:1;
transform:translateY(0);
transition:.6s;
}

.card:hover{
transform:translateY(-8px);
}

.btn{
display:inline-block;
padding:14px 24px;
border-radius:14px;
background:var(--accent);
color:white;
text-decoration:none;
margin-top:20px;
}

footer{
padding:60px 20px;
text-align:center;
border-top:1px solid var(--border);
}

footer img{
max-width:260px;
border-radius:24px;
margin-bottom:20px;
}

.menu-toggle{
display:none;
background:none;
border:none;
cursor:pointer;
}

.menu-toggle span{
display:block;
width:26px;
height:2px;
background:white;
margin:6px;
}

@keyframes float{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-12px);
}

100%{
transform:translateY(0);
}

}

@media (max-width:768px){

.menu-toggle{
display:block;
}

nav{
position:absolute;
top:74px;
left:0;
right:0;
background:#111827;
flex-direction:column;
overflow:hidden;
max-height:0;
transition:.3s;
}

nav.active{
max-height:500px;
}

nav a{
padding:16px 24px;
}

.hero-grid{
grid-template-columns:1fr;
}

}
EOF

##############################################################################
# JS
##############################################################################

cat > "$ROOT/static/js/main.js" <<'EOF'
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mobileNav");

  if(toggle && nav){

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

  }

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });

  });

  document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
  });

});
EOF

##############################################################################
# INDEX
##############################################################################

cat > "$ROOT/index.html" <<'EOF'
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>威飛數研社</title>
<link rel="stylesheet" href="/static/css/style.css">
</head>
<body>

<header class="header">

<div class="container nav">

<a href="/" class="brand">
<img src="/static/img/logo4.jpg">
<span>威飛數研社</span>
<small>INFO</small>
</a>

<button id="menuToggle" class="menu-toggle">
<span></span>
<span></span>
<span></span>
</button>

<nav id="mobileNav">
<a href="#about">關於我們</a>
<a href="#services">核心服務</a>
<a href="#works">作品案例</a>
<a href="#gateway">四大入口</a>
<a href="#contact">聯絡我們</a>
</nav>

</div>

</header>

<section class="hero">

<div class="container hero-grid">

<div>

<h1>威飛數研社</h1>

<p>
企業網站建置、Cloudflare 雲端整合、
AI 智慧應用與數位服務。
</p>

<a href="#contact" class="btn">
立即洽詢
</a>

</div>

<div class="hero-image">
<img src="/static/img/cc02.jpg">
</div>

</div>

</section>

<section id="about">
<div class="container">
<h2>關於威飛數研社</h2>
<p>打造屬於企業與個人的 AI × Cloud × Website 平台。</p>
</div>
</section>

<section id="services">
<div class="container">
<h2>核心服務</h2>

<div class="cards">

<div class="card">
<h3>企業網站建置</h3>
</div>

<div class="card">
<h3>Cloudflare 雲端整合</h3>
</div>

<div class="card">
<h3>AI 智慧應用</h3>
</div>

</div>

</div>
</section>

<section id="works">

<div class="container">

<h2>作品案例</h2>

<div class="cards">

<a class="card" href="/works/website.html">
<h3>企業網站建置</h3>
</a>

<a class="card" href="/works/cloud.html">
<h3>Cloudflare 雲端整合</h3>
</a>

<a class="card" href="/works/ai.html">
<h3>AI 智慧應用</h3>
</a>

</div>

</div>

</section>

<section id="gateway">

<div class="container">

<h2>四大入口</h2>

<div class="cards">

<a class="card" href="https://weiflycc.info">
<h3>文建館</h3>
</a>

<a class="card" href="https://weiflycc.net">
<h3>控制中心</h3>
</a>

<a class="card" href="https://weiflycc.org">
<h3>認證中心</h3>
</a>

<a class="card" href="https://weiflycc.com">
<h3>展示館</h3>
</a>

</div>

</div>

</section>

<section id="contact">
<div class="container">
<h2>聯絡我們</h2>
<p>ice@weiflycc.com</p>
<p><a href="tel:+19547537545">954-753-7545</a></p>
</div>
</section>

<footer>

<img src="/static/img/cc02.jpg">

<p>© WeiflyCC</p>

</footer>

<script src="/static/js/main.js"></script>

</body>
</html>
EOF

##############################################################################
# 404
##############################################################################

cat > "$ROOT/404.html" <<'EOF'
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>404</title>
<link rel="stylesheet" href="/static/css/style.css">
</head>
<body>
<div style="padding:120px;text-align:center">
<h1>404</h1>
<p>找不到頁面</p>
<a href="/">返回首頁</a>
</div>
</body>
</html>
EOF

##############################################################################
# WORKS
##############################################################################

cat > "$ROOT/works/index.html" <<'EOF'
<h1>作品案例</h1>
EOF

cat > "$ROOT/works/website.html" <<'EOF'
<h1>企業網站建置</h1>
EOF

cat > "$ROOT/works/cloud.html" <<'EOF'
<h1>Cloudflare 雲端整合</h1>
EOF

cat > "$ROOT/works/ai.html" <<'EOF'
<h1>AI 智慧應用</h1>
EOF

##############################################################################
# CONTACT
##############################################################################

cat > "$ROOT/contact/index.html" <<'EOF'
<h1>聯絡我們</h1>
<p>ice@weiflycc.com</p>
EOF

echo
echo "==========================================="
echo "INFO V2 BUILD SUCCESS"
echo "==========================================="
echo
