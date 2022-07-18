const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
} else {
  document.querySelector("link[rel=icon]").href = '/assets/icon.png';
}
if (localStorage.getItem("particletheme") == 'neon') {

    var cssElm = document.createElement('link');
    cssElm.setAttribute('href', '/neon.css');
    cssElm.setAttribute('rel', 'stylesheet');
    document.head.appendChild(cssElm);
  
    console.log('neon')
  }
  function loadPallet(pal)//function to load pallets
{
  sheet = document.querySelector(':root');
  index = pal.split(";");

  for (x = 0; x < index.length - 1; x++) {
    varname = index[x].split("/")[0];
    col = index[x].split("/")[1];
    sheet.style.setProperty('--' + varname, col);
  }
  return sheet;
}
pallet = "ubg/#800080;bg/#1F2029;footerbg/#170E1F;link/#0084ff;scroll-active/#717171;scrollbg/#191a21;users-online/#49ff0d";

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem("stylepallet") !== "") {
    pallet = localStorage.getItem("stylepallet");
  }
  else {
    localStorage.setItem("stylepallet", pallet)
  }
  loadPallet(pallet);
});
function savePallet(pal) {
  localStorage.setItem("stylepallet", pal)
  loadPallet(pal);
  window.location.href = window.location.href
  window.location.reload()
}