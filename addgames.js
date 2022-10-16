const buildfilterdiv = (games) => {
    const $divwrap = document.createElement("div");
    $divwrap.classList.add("filter-item");
    for (var i = 0; i < games.filter.length; i++){
        $divwrap.classList.add(games.filter[i]);
    }

    const $imgcontainer = buildimgcontainer(games);
    const $gridcardtext = buildgridcardtext(games);

    const $filtermask = document.createElement("div");
    $filtermask.classList.add("absolute inset-0 w-full h-full border-transparent border-[3px] hover:border-primary rounded-xl ease-linear transition");
    const $back = document.createElement("div");
    $back.classList.add("back");

    $divwrap.appendChild($back);
    $divwrap.appendChild($imgcontainer);
    $divwrap.appendChild($gridcardtext);
    $divwrap.appendChild($filtermask)
    return $divwrap;
  };

  const buildimgcontainer = (games) => {
    const $imgcontainer = document.createElement("span"); //create div imagecontainer
    $imgcontainer.classList.add("box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;");
    

    const $anchor = document.createElement("a"); //create anchor tag inside that
    $anchor.href = "/games/" + games.link;

    const $imgtag = document.createElement("img"); //create the img tag
    $imgtag.setAttribute("decoding", "true")
    $imgtag.classList.add("position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;");
    $imgtag.src = "/img/" + games.imgsrc + '.webp';
    $imgtag.alt = games.name; //alt is the same as the game's name

$anchor.appendChild($imgtag);
    $imgcontainer.appendChild($anchor);

    return $imgcontainer;
  };

  const buildgridcardtext = (games) => {
    const $gridcardtext = document.createElement("div"); //create div gridcardtext
    $gridcardtext.classList.add("bg-gradient-to-b from-transparent to-gray-900 absolute inset-0");

    const $gridcardtextdiv = document.createElement("div"); //create div gridcardtext
    $gridcardtextdiv.classList.add("absolute bottom-0 p-4");

    const $p = document.createElement("h1"); //create the p tag
    $p.classList.add("text-lg text-white md:text-xl 2xl:text-2xl font-extrabold tracking-tight");
    $p.innerText = games.name; //set the title


    $gridcardtext.appendChild($gridcardtextdiv);
    $gridcardtextdiv.appendChild($p)

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