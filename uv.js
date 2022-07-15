const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("plink", 'r2');
	} 
});
console.log(`${gamelink}.`);
localStorage.setItem("plink", 'r2');
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "r2"){
    setTimeout(function(){
        var site = 'https://r2.emulatoros.ga'+ '${gamelink}';

    document.getElementById('gameiframe').src = site;
    console.log(`change link`);
    }, 1000);
    
	} 
});
