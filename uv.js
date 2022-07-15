const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
    r2Link(); 
  if (localStorage.getItem("plink") !== ""){
    localStorage.setItem("plink", 'r2');
	} 
});
console.log(`${gamelink}.`);
localStorage.setItem("plink", 'r2');
function r2Link() 
{
  if (localStorage.getItem("plink") !== "r2"){
    setTimeout(function(){
        console.log(`start change link`);
        var site = 'https://r2.emulatoros.ga'+ '${gamelink}';

    document.getElementById('gameiframe').src = site;
    console.log(`finish change link`);
    }, 1000);
    
	} 
}
