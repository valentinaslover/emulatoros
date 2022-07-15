function particleColo(color)
{
 localStorage.setItem("particletheme", color)
}
function pselectio(lin)
{
  localStorage.setItem("plink", lin)
}
document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem("particletheme") !== "hide"){
        
    console.log('nopRT');
    }
    });