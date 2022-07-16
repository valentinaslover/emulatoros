const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;
const container = document.querySelector(".content-container");

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
console.log(game.dataset.gamelink);

function rLink() 
{
 
    
        console.log(`start r change link`);
        var site = 'https://r.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;
game.remove();
var iframeElm = document.createElement('iframe');
            iframeElm.setAttribute('id', 'riframe');
            iframeElm.setAttribute('allowfullscreen', 'true')
            iframeElm.setAttribute('scrolling', 'no')
    iframeElm.src = site;
    container.prepend(iframeElm);
    console.log(`finish r change link`);
    
	
}
function r3Link() 
{
 
    
        console.log(`start r3 change link`);
        var site = 'https://r3.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;
game.remove();
var iframeElm = document.createElement('iframe');
            iframeElm.setAttribute('id', 'r3iframe');
            iframeElm.setAttribute('allowfullscreen', 'true')
            iframeElm.setAttribute('scrolling', 'no')
    iframeElm.src = site;
    container.prepend(iframeElm);
    
    
    console.log(`finish r3 change link`);
}
