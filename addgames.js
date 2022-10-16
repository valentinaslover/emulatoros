const buildfilterdiv = (games) => {
    const $divwrap = document.createElement("button");
    $divwrap.classList.add("filter-item");
    for (var i = 0; i < games.filter.length; i++){
        $divwrap.classList.add(games.filter[i]);
    }

    const $imgcontainer = buildimgcontainer(games);
    const $gridcardtext = buildgridcardtext(games);

    const $filtermask = document.createElement("div");
    $filtermask.classList.add("filter-mask");

    $divwrap.appendChild($imgcontainer);
    $divwrap.appendChild($gridcardtext);
    $divwrap.appendChild($filtermask)
    return $divwrap;
  };

  const buildimgcontainer = (games) => {
    const $imgcontainer = document.createElement("div"); //create div imagecontainer
    $imgcontainer.classList.add("img-container");

    const $anchor = document.createElement("a"); //create anchor tag inside that
    $anchor.href = "/games/" + games.link;

    const $imgtag = document.createElement("img"); //create the img tag
    $imgtag.classList.add("hover-center");
    $imgtag.src = "/img/" + games.imgsrc + '.webp';
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


    $gridcardtext.appendChild($p);

    return $gridcardtext;
  };

  const filterwrap = document.querySelector(".filter-wrap");

  for (let i = 0; i < gamesArr.length; i++) {
    let $item = buildfilterdiv(gamesArr[i]);
    filterwrap.appendChild($item);
  }

//Create element for no filter matched
const $noitem = document.createElement("div");
$noitem.classList.add("filter-no-item");
$noitem.innerText = "Sorry, no games match your filter selections";
document.querySelector(".filter-wrap").appendChild($noitem);

//Random game
const randGame = () => {
  for (let i = 0; i < gamesArr.length; i++){
    let randInd = Math.floor(Math.random() * gamesArr.length);
    window.location = "/" + gamesArr[randInd].link + ".html";
  }
}