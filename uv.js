const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "rlink"){
    rLink();
  }
});
console.log(game.dataset.gamelink);

function rLink() 
{
 
    
        console.log(`start r change link`);
        var site = 'https://r.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;

    document.getElementById('gameiframe').src = site;
    console.log(`finish r change link`);
    
	
}

