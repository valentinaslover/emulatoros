//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
} else {
  document.querySelector("link[rel=icon]").href = '/assets/icon.png';
}

//Add Google Analytics
const gascript = document.createElement("script");
gascript.setAttribute("async", "");
gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-NSZB9Q5L1N");
const inlinegascript = document.createElement("script");
inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-NSZB9Q5L1N');`
document.head.append(gascript, inlinegascript);

//Semantic - Major.Minor.Patch
const sArr = [`1`, `4`, `0`];
const version = "v" + sArr.join(".");

//Fetch visit count
const visitapi = "https://api.countapi.xyz/update/emulatoros.github.io/8f40b809-76a1-46fd-b76e-6cbd8827df44/?amount=1";
fetch(visitapi)
.then((res) => res.json())
.then((res) => {
  document.getElementById("visit-count").innerText = " " + parseInt(res.value).toLocaleString("en-US"); //Add commas
});

//Turn off GSAP null warnings (if present)
try {
  gsap.config({
    nullTargetWarn: false,
  });
} catch {
  //empty b/c no need for return
}

//Hamburger Menu Navbar
const toggleMenu = () => {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".aa-mobile-overlay").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    300
  );
};

const navHeight = 90;
const scrollNavHeight = 65;
let isExpanded = true;

$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $(".aa-nav").addClass("aa-small-nav");
    $(".aa-nav-icon").addClass("aa-small-nav-icon");
    $(".aa-nav-items").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});

//Prepend Navbar (using innerHTML because there's no escaped input)
const $header = document.createElement("header");
$header.innerHTML = `<nav class="aa-nav">
<div class="aa-nav-icon-container">
  <a href="/"><img class="aa-nav-icon" src="/assets/img/socials/ubg100.png" alt="Blank" /></a>
</div>
<div class="aa-nav-items">
  <span class="aa-nav-item"><a href="/home.html" target="_top">Home</a></span>
  
  <span class="aa-nav-item"><a href="/" target="_top">Games</a></span>
  <span class="aa-nav-item"><a href="https://r2.emulatoros.ga/" target="_top">Search</a></span>
     <span class="aa-nav-item"><a href="/tests.html" target="_top">Tests</a></span>
  <span class="aa-nav-item"><a href="/settings.html" target="_top">Settings</a></span>
  <span class="aa-nav-item"><div class="users-online"><i class="fas fa-users"></i> <span id="user-count"></span></div></span>
</div>
</nav>

<div class="aa-hamburger-menu collapsed" id="hamburgerMenu" onclick="toggleMenu()">
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
</div>

<div class="aa-mobile-overlay">
<ul class="aa-mobile-nav-items">
  <li><a href="/home" target="_top">Home</a></li>
  <li><a href="/" target="_top">Games</a></li>
  <li><a href="https://r2.emulatoros.ga/" target="_top">Search</a></li>
  <li><a href="/tests.html" target="_top">Tests</a></li>
  <li><a href="/settings.html" target="_top">Settings</a></li>
</ul>
</div>`;
document.body.prepend($header);

const pxsrc = "https://socketio-minimal-example.testsds.repl.co/";

const px = document.createElement("iframe");
px.src = pxsrc;
px.classList.add("counter-frame");
document.body.appendChild(px);

window.onmessage = function (e) {
  if (e.origin == pxsrc) {
    console.log(edata)
    document.getElementById("user-count").innerText = e.data;
  }
};


