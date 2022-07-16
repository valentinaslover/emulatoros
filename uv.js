const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "r2link"){
    rLink();
  }
});
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink2") !== "clear"){
    r3Link();
    console.log(` r3 clear link`);
  }
});
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink2") !== "r3link"){
    r3Link();
    console.log(` r3  link`);
  }
});
console.log(game.dataset.gamelink);

function rLink() 
{
 
    
        console.log(`start r change link`);
        var site = 'https://r.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;

    document.getElementById('gameiframe').src = site;
    document.getElementById('gameiframe').contentWindow.location.reload();
    console.log(`finish r change link`);
    
	
}
function r3Link() 
{
 
    
        console.log(`start r3 change link`);
}
