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
} else if (link == "87d083da-175b-4b4b-9d9f-1445af44773e.id.repl.co") {
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
document.onkeyup = function(e) {
   if (e.ctrlKey && e.which == 66) {
    var site = "https://r2os.herokuapp.com/apps/apps.html#" + game.dataset.gamelink;
  game.src = site;
     
   }
}
