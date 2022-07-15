function particleColo(color)
{
 localStorage.setItem("particletheme", color)
}
function pselectio(lin)
{
  localStorage.setItem("plink", lin)
}
document.addEventListener('DOMContentLoaded', function () {
  
    if (localStorage.getItem("particletheme") !== "noparticles2"){
      console.log('no-particles');
      var div2 = document.getElementById('class-name2')
  div2.remove();
  var div3 = document.getElementById('class-name3')
  div3.remove();
  }
  });