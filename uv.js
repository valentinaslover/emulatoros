const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("plink", 'https://r2.emulatoros.ga');
	} 
});
var proxlink = JSON.parse(localStorage.getItem('plink'));
console.log(proxlink);
console.log()

document.getElementById("iframesrc").src = proxlink;