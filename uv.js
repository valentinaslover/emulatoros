const gamelink = game.dataset.gamelink;
const game = document.querySelector("#gameiframe");
var proxlink = localStorage.getItem("plink");
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("stylepallet", "r2.emulatoros.ga");
	} 
	
});
document.getElementById("iframesrc").src = "proxlink/${gamelink}";