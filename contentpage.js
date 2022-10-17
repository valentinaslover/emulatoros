let url = window.location.pathname; //get path
let host = window.location.host
/*let urlsub = "";
if (urlstring.indexOf("html") > -1) {
  //Check of html String in URL.
  urlsub = urlstring.substring(1, urlstring.lastIndexOf("."));
}*/
let pageurl = "";

if (url.indexOf("html") > -1) {
  pageurl = url.match(/([^\/]+)(?=\.\w+$)/)[0];
} else {
  pageurl = url.substring(url.lastIndexOf("/") + 1, url.length);
}
const ads = document.querySelector(".content");
const main = document.querySelector(".main-content");
if (host == "emulatoros.github.io") {
if (ads !== null) {
  if (document.body.dataset.ess) {
    const autogads = document.createElement("script");
    autogads.setAttribute("async", "");
    autogads.setAttribute(
      "src",
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2209834467602790"
    );
    autogads.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(autogads);
    console.log('ess')
  } else {
    const adDiv = document.createElement("div");
          adDiv.classList.add("othergames-container");
          ads.append(adDiv);
    

    const adScript = document.createElement("script");
    adScript.async = true;
    adScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2209834467602790";
    adScript.crossOrigin = "anonymous";

    const adIns = document.createElement("ins");
    adIns.setAttribute("class", "adsbygoogle");
    adIns.setAttribute(
      "style",
      "display:block; margin-left:150px"
    );
     adIns.setAttribute("data-full-width-responsive", "true");
     adIns.setAttribute("data-ad-format", "auto");
    adIns.setAttribute("data-ad-client", "ca-pub-2209834467602790");
    adIns.setAttribute("data-ad-slot", "1042232702");
    
    const adIns2 = document.createElement("ins");
    adIns2.setAttribute("class", "adsbygoogle");
    adIns2.setAttribute(
      "style",
      "display:block;margin:5%0"
    );
     adIns2.setAttribute("data-full-width-responsive", "true");
     adIns2.setAttribute("data-ad-format", "auto");
    adIns2.setAttribute("data-ad-client", "ca-pub-2209834467602790");
    adIns2.setAttribute("data-ad-slot", "9792797175");

    adDiv.append(adScript, adIns);
    main.append(adIns2);
    
    console.log("Ads displayed");
  }

  console.log("game page");
} else {
  console.log("no game page");
}
} else {
  console.log(url + 'no ads allowed')
}

//if we find a match for the element, create the info
try {
  const found = gamesArr.find((element) => element.link == pageurl);

  const content_title = document.querySelector("#content-title");
  content_title.innerText = found.name;
  const content_creator = document.querySelector("#content-creator");
  content_creator.innerText = "by " + found.developer; //set the info
  const contentdesc = document.querySelector("#content-desc");
  contentdesc.innerText = found.desc;

  const contentcontrols = document.querySelector("#content-controls");
  for (let i = 0; i < found.controls.length; i++) {
    let controlitem = document.createElement("li");
    controlitem.innerText = found.controls[i];
    contentcontrols.appendChild(controlitem);
  }
} catch (err) {
  console.log(err);
}

const buildogDiv = (games) => {
  const $divwrap = document.createElement("div");
  $divwrap.classList.add("og-item");
  const $imgcontainer = buildimgcontainer(games);
  const $gridcardtext = buildgridcardtext(games);

  $divwrap.appendChild($imgcontainer);
  $divwrap.appendChild($gridcardtext);
  return $divwrap;
};

const buildimgcontainer = (games) => {
  const $imgcontainer = document.createElement("div"); //create div imagecontainer
  $imgcontainer.classList.add("img-container");

  const $anchor = document.createElement("a"); //create anchor tag inside that
  $anchor.href = "/" + games.link + ".html";

  const $imgtag = document.createElement("img"); //create the img tag
  $imgtag.classList.add("hover-center");
  $imgtag.src = "/assets/img/games/" + games.imgsrc;
  $imgtag.alt = games.name; //alt is the same as the game's name

  $anchor.appendChild($imgtag);
  $imgcontainer.appendChild($anchor);

  return $imgcontainer;
};

const buildgridcardtext = (games) => {
  const $gridcardtext = document.createElement("div"); //create div gridcardtext
  $gridcardtext.classList.add("grid-card-text");

  const $p = document.createElement("p"); //create the p tag
  $p.classList.add("game-name");
  $p.innerText = games.name; //set the title

  const $h1 = document.createElement("h1"); //create h1 tag inside that
  $h1.classList.add("game-developer");
  $h1.innerText = "by " + games.developer;

  $gridcardtext.appendChild($p);
  $gridcardtext.appendChild($h1);

  return $gridcardtext;
};

//# of elements for other games

const randomGame = () => {
  setTimeout(() => {
    let elemCount = 2;

    if (document.getElementsByClassName("adsbygoogle")[0]){
      if (document.getElementsByClassName("adsbygoogle")[0].dataset.adStatus == 'filled'){
        elemCount = 1;
      }
    }
    const set = new Set();
    while (set.size < elemCount) {
      set.add(Math.floor(Math.random() * gamesArr.length)); //add 5 random numbers to the set
    }

    const ogwrap = document.querySelector(".og-wrap");

    let ind = set.values(); //set of 5 random numbers w/o dupes
    for (let i = 0; i < elemCount; i++) {
      let randInd = ind.next().value; //get each value from the set
      let $item = buildogDiv(gamesArr[randInd]);
      ogwrap.appendChild($item);
    }
  }, 2000)
};

randomGame();

//Fullscreen function
const reqFs = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
};

//iframe fullscreen
const iFullscreen = () => {
  const elem = document.getElementsByTagName("iframe")[0];
  reqFs(elem);
};

//Canvas fullscreen
const cFullscreen = () => {
  const elem = document.getElementById("canvas");
  reqFs(elem);
};

//Ruffle fullscreen
const rFullscreen = () => {
  const elem = document.getElementById("player");
  reqFs(elem);
};

//Emulator fullscreen
const eFullscreen = () => {
  const elem = document.getElementById("game");
  reqFs(elem);
};
