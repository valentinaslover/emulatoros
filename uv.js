const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("plink", "r2.emulatoros.ga");
	} 
});
var proxlink = localStorage.getItem("plink");

document.getElementById("iframesrc").src = proxlink;