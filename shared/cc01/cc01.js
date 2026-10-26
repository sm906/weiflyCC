if (window.CC01_LOADED) return
window.CC01_LOADED = true

const avatarImg = "/img/cc01.png"

const idleTexts = [
"今天 CC 了嗎？😏",
"迷路了嗎？哥帶你飛。",
"同步的不是裝置，是生活。",
"歡迎回家。",
"先喝水，再部署。",
"我在，你不用怕迷路。",
"今天想完成什麼？"
]

const clickTexts = [
"我是來這裡給你碰的嗎？😏",
"欸欸欸，不要亂摸。",
"導航員也是有尊嚴的。",
"你又手癢了。",
"我不是按鈕。",
"再戳我要報工時了。"
]

const cc = document.createElement("div")
cc.id = "cc01"

cc.innerHTML = `
<div id="cc01-bubble">今天 CC 了嗎？😏</div>
<img id="cc01-avatar" src="${avatarImg}">
`

document.body.appendChild(cc)

const avatar = document.getElementById("cc01-avatar")
const bubble = document.getElementById("cc01-bubble")

let x = window.innerWidth * 0.75
let y = window.innerHeight * 0.4

let dx = 1.2
let dy = 0.9

let nearCooldown = 0

function speak(text){

if(!window.speechSynthesis) return

speechSynthesis.cancel()

const msg = new SpeechSynthesisUtterance(text)

msg.lang = "zh-TW"
msg.rate = 1
msg.pitch = 1.1

speechSynthesis.speak(msg)

}

function setText(text){
bubble.textContent = text
}

function pulse(){

avatar.style.transform = "scale(1.15)"

setTimeout(()=>{
avatar.style.transform = "scale(1)"
},250)

}

avatar.onclick = ()=>{

const text =
clickTexts[
Math.floor(
Math.random()*clickTexts.length
)
]

setText(text)
pulse()
speak(text)

dx *= -1
dy *= -1

x += dx * 120
y += dy * 120

}

setInterval(()=>{

const text =
idleTexts[
Math.floor(
Math.random()*idleTexts.length
)
]

setText(text)

},10000)

document.addEventListener("mousemove",(e)=>{

const cx = x + 40
const cy = y + 40

const dist = Math.hypot(
e.clientX - cx,
e.clientY - cy
)

if(
dist < 160 &&
Date.now() > nearCooldown
){

nearCooldown =
Date.now() + 5000

setText("太近了啦 😳")

pulse()

const angle =
Math.atan2(
cy - e.clientY,
cx - e.clientX
)

dx = Math.cos(angle) * 2
dy = Math.sin(angle) * 2

}

})

function avoidButtons(){

document
.querySelectorAll("a,button,.portal")
.forEach(el=>{

const r =
el.getBoundingClientRect()

const cx = x + 40
const cy = y + 40

if(
cx > r.left &&
cx < r.right &&
cy > r.top &&
cy < r.bottom
){

const bx =
r.left + r.width/2

const by =
r.top + r.height/2

const vx = cx - bx
const vy = cy - by

const len =
Math.sqrt(vx*vx+vy*vy) || 1

dx = (vx/len)*2.2
dy = (vy/len)*2.2

x += dx * 50
y += dy * 50

}

})

}

function edge(){

if(x<0){
x=0
dx=Math.abs(dx)
}

if(y<0){
y=0
dy=Math.abs(dy)
}

if(x>window.innerWidth-80){
x=window.innerWidth-80
dx=-Math.abs(dx)
}

if(y>window.innerHeight-110){
y=window.innerHeight-110
dy=-Math.abs(dy)
}

}

function animate(){

x += dx
y += dy

avoidButtons()
edge()

cc.style.transform =
`translate(${x}px,${y}px)`

requestAnimationFrame(animate)

}

animate()
