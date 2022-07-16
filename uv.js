const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "r2link"){
    r2Link();
  }
});
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "rlink"){
    rLink();
  }
});
console.log(game.dataset.gamelink);
function r2Link() 
{
 
    
        console.log(`start r2 change link`);
        var site = 'https://r2.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;

    document.getElementById('gameiframe').src = site;
    console.log(`finish r2 change link`);
    
	
}
function rLink() 
{
 
    
        console.log(`start r change link`);
        var site = 'https://r.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;

    document.getElementById('gameiframe').src = site;
    console.log(`finish r change link`);
    
	
}

