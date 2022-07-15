const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("plink", 'https://r2.emulatoros.ga');
	} 
});
console.log(`${gamelink}.`);
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "https://r2.emulatoros.ga"){
    var site = 'https://r2.emulatoros.ga'+ '${gamelink}';
    document.getElementById('gameiframe').src = site;
	} 
});
