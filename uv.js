const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;
const container = document.querySelector(".content-container");

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem("plink") == "r") {
    console.log(`start r change link`);
    var site = 'https://r.emulatoros.ga' + "/" + game.dataset.gamelink;
    game.setAttribute('id', 'riframe');
    game.setAttribute('allowfullscreen', 'true')
    game.setAttribute('scrolling', 'no')
    game.src = site;
    console.log(`finish r change link`);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem("plink") == "r2") {
    console.log(`start r2 change link`);
    var site = 'https://r2.emulatoros.ga' + "/" + game.dataset.gamelink;
    game.setAttribute('id', 'r2iframe');
    game.setAttribute('allowfullscreen', 'true')
    game.setAttribute('scrolling', 'no')
    game.src = site;
    console.log(`finish r2 change link`);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem("plink") == "r3") {
    console.log(`start r3 change link`);
    var site = 'https://r3.emulatoros.ga' + "/" + game.dataset.gamelink;
    game.setAttribute('id', 'r3iframe');
    game.setAttribute('allowfullscreen', 'true')
    game.setAttribute('scrolling', 'no')
    game.src = site;
    console.log(`finish r3 change link`);
  }
});
console.log(game.dataset.gamelink);
