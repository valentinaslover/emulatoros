if (localStorage.getItem("appearance") == "neon") {
  var cssElm = document.createElement("link");
  cssElm.setAttribute("href", "/neon.css");
  cssElm.setAttribute("rel", "stylesheet");
  cssElm.setAttribute("id", "neoncss");
  document.head.appendChild(cssElm);

  console.log("neon");
}
if (localStorage.getItem("background") == null) {
  localStorage.setItem("background", "default");
}
if (localStorage.getItem("appearance") !== "neon") {
  if (document.getElementById("neoncss")) {
    const link = document.getElementById("neoncss");
    console.log(link);
    link.remove();

    console.log("remove neon");
  }
}
function setLogo(highlight) {
  document.querySelector("link[rel='icon']").href = "/assets/icon.png";
}
function getLogo(highlight = "#2493ff") {
  console.log("for later update setlogo()");
}
var appearance = localStorage.getItem("appearance");

if (localStorage.hasOwnProperty("appearance")) {
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", appearance);
  setLogo(
    getComputedStyle(document.body)
      .getPropertyValue("--highlight")
      .replaceAll(" ", "")
  );
} else {
  localStorage.setItem("appearance", "default");
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", "default");
}
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
  document.querySelector("link[rel=icon]").href = "/assets/icon.png";
}

//Add Google Analytics
const gascript = document.createElement("script");
gascript.setAttribute("async", "");
gascript.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=G-NSZB9Q5L1N"
);
const inlinegascript = document.createElement("script");
inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-NSZB9Q5L1N');`;
document.head.append(gascript, inlinegascript);

const wndw = window.location.hostname 
if (wndw == 'emulatoros.github.io') {
  const gascript2 = document.createElement("script");
gascript2.setAttribute("async", "");
gascript2.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=UA-225490180-1"
);
const inlinegascript2 = document.createElement("script");
inlinegascript2.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'UA-225490180-1');`;
document.head.append(gascript2, inlinegascript2);
} else {
const gascript2 = document.createElement("script");
gascript2.setAttribute("async", "");
gascript2.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=UA-225490180-2"
);
const inlinegascript2 = document.createElement("script");
inlinegascript2.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'UA-225490180-2');`;
document.head.append(gascript2, inlinegascript2);
}


//Semantic - Major.Minor.Patch
const sArr = [`1`, `4`, `0`];
const version = "v" + sArr.join(".");
document.body.style.backgroundColor = "var(--bg-color)";
document.body.style.fontFamily = "var(--font)";
//Fetch visit count
const visitapi =
  "https://api.countapi.xyz/update/emulatoros.github.io/78c84613-3752-436e-ae7c-29f94d1fc15f/?amount=1";
fetch(visitapi)
  .then((res) => res.json())
  .then((res) => {
    if (document.getElementById("visit-count") !== null) {
    document.getElementById("visit-count").innerText = res.value; //Add commas
    }
  });
(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    if (typeof history.onpushstate == "function") {
      history.onpushstate(arguments);
    }
    return pushState.apply(history, arguments);
  };
})(window.history);
const gc = document.createElement("script");
gc.src = "/assets/js/count.js";
gc.setAttribute("data-goatcounter", "https://emulatoros.goatcounter.com/count");
gc.setAttribute("data-goatcounter-settings", '{"allow_local": true}');
document.head.appendChild(gc);
// Manage page changes
history.onpushstate = () => {
  setTimeout(() => {
    console.log(location.pathname);
    goatcounter.count();
  }, 1);
};

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
    $(".aa-nav-items2").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-nav-items2").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});

//Prepend Navbar (using innerHTML because there's no escaped input)
const $header = document.createElement("header");
$header.setAttribute("id", "header");
$header.innerHTML = `<nav class="aa-nav">
<div class="aa-nav-items2">
<span class="aa-nav-item" >
  <div class="users-online"><i class="fas fa-users"></i> <span id="user-count">13</span></div>
</span>
</div>
<div class="aa-nav-items">
  <span class="aa-nav-item"><a href="/home" target="_top">Home</a></span>
  
  <span class="aa-nav-item"><a href="/" target="_top">Games</a></span>
     <span class="aa-nav-item"><a href="/apps" target="_top">Apps</a></span>
     
  <span class="aa-nav-item"><a href="/settings" target="_top">Settings</a></span>
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
  <li><a href="/apps" target="_top">Apps</a></li>
  <span class="aa-nav-item"><a href="/changelog" target="_top">Changelog</a></span>
  <li><a href="/settings" target="_top">Settings</a></li>
</ul>
</div>`;
document.body.prepend($header);

const $footer = document.createElement("div");
$footer.setAttribute("class", "footer");
$footer.innerHTML = `<a class="link underline" href="https://github.com/EmulatorOS/EmulatorOS.github.io">G&#173;it&#173;h&#173;ub</a>

<a class="link underline" href="/credits">Credits</a>
<a class="link underline" href="/terms">Terms</a>
<a class="link underline" href="/privacy" style="margin-right: 14px;">Privacy</a>

<p class="at">© Emulator&#173;OS 2021-</p> <p id="yearp"></p>`;
document.body.append($footer);

yearset = new Date().getFullYear();
const yearp = document.getElementById("yearp");
yearp.innerHTML = " " + yearset;

const pxsrc = "https://88894746-f44f-4984-b06a-95324219f0c0.id.repl.co";

const px = document.createElement("iframe");
px.src = pxsrc;
px.classList.add("counter-frame");
document.body.appendChild(px);

window.onmessage = function (e) {
    if (e.origin == "https://88894746-f44f-4984-b06a-95324219f0c0.id.repl.co") {
   document.getElementById("user-count").innerText = e.data;
    } 
  }

if (localStorage.getItem("plink") === null) {
  console.log("null");
  localStorage.setItem(
    "plink",
    "87d083da-175b-4b4b-9d9f-1445af44773e.id.repl.co"
  );
}

if (localStorage.getItem("plink") == "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co") {
  localStorage.setItem(
    "plink",
    "87d083da-175b-4b4b-9d9f-1445af44773e.id.repl.co"
  );}


function searchGames() {
  var e = document.getElementById("GameSearch").value.toLowerCase(),
    a = document.getElementsByClassName("GameName");
  for (i = 0; i < a.length; i++)
    a[i].innerText.toLowerCase().includes(e)
      ? a[i].setAttribute("style", "display:inline !important")
      : a[i].setAttribute("style", "display:none !important");
}

[].forEach.call(document.querySelectorAll('.adsbygoogle'), function(){
  (adsbygoogle = window.adsbygoogle || []).push({});
});
$(".fa-star").click(function () {
  $(this).toggleClass("fas far");
});
