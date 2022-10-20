const game = document.querySelector("#gameiframe");
var link = localStorage.getItem("plink")
var plink = 'https://' + link

if (link == "r.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'riframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (link == "88894746-f44f-4984-b06a-95324219f0c0.id.repl.co") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'r2iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (link == "r3.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'r3iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
}
console.log(game.dataset.gamelink);
