var today = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
const dt = new Date(today);
var hrs = dt.getHours();

console.log(today);
console.log(dt)
function openapp(app) {
  var appframe = document.getElementById("surf");
  var controls = document.getElementById("controls");
  var header = document.getElementById("header");
  header.style.display = "none";
  controls.style.display = "flex";
  appframe.style.display = "initial";
  appframe.setAttribute("src", "https://qatar.up.railway.app/apps/apps.html#" + app);
}

function reloadapp() {
  document.getElementById("surf").src = document.getElementById("surf").src;
}
function closeapp() {
  var appframe = document.getElementById("surf");
  var controls = document.getElementById("controls");
  var header = document.getElementById("header");
  header.style.display = "block";
  controls.style.display = "none";
  appframe.style.display = "none";
  appframe.setAttribute("src", "");
}
function fullapp() {
  var appframe = document.getElementById("surf");
  appframe.requestFullscreen();
}
function opentab() {
  var url = document.getElementById("surf").src;

  var tabOrWindow = window.open(url, "_blank");
  closeapp();
  console.log("open in new tab");

  tabOrWindow.focus();
}
var plink = localStorage.getItem("plink");
async function fetchapps() {
  let response = await fetch("https://qatar.up.railway.app/api?q=matches");
  let json = await response.json();
  var main = document.getElementById("font-md-10");
  for (app in json) {

    var format = moment(json[app].datetime);
    var date = format.tz('America/Chicago').format('llll');
    console.log(date)
    var team1 = json[app].home_team;
    var team2 = json[app].away_team;
    var home = team1.name;
    var away = team2.name;
    console.log(away + " and " + home)
    var status = json[app].status;
    if (status == "completed") {
      console.log('before ' + status)
      var appelm = document.createElement("a");

      appelm.className = "app";

      main.appendChild(appelm);


      var maindiv = document.createElement("div");
      maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 position-relative");
      maindiv.setAttribute("style", "cursor:default;")
      appelm.appendChild(maindiv);

      var maindiv2 = document.createElement("div");
      maindiv2.setAttribute("class", "d-flex justify-content-center row");
      maindiv.appendChild(maindiv2);

      var team1div = document.createElement("div");
      team1div.setAttribute("class", "col-4 text-right");
      maindiv2.appendChild(team1div);

      var team1span = document.createElement("span");
      team1span.setAttribute("class", "d-inline-block mt-2");
      team1span.innerText = home;
      team1div.appendChild(team1span);

      var datediv = document.createElement("div");
      datediv.setAttribute("class", "col-4 text-center");
      maindiv2.appendChild(datediv);

      var datespan = document.createElement("span");
      datespan.setAttribute("class", "d-inline-block text-center text-dark-l");
      datespan.innerHTML = '<i class="fas fa-clock"></i><br>' + date + " CT";
      datediv.appendChild(datespan);

      var team2div = document.createElement("div");
      team2div.setAttribute("class", "col-4 text-left");
      maindiv2.appendChild(team2div);

      var team2span = document.createElement("span");
      team2span.setAttribute("class", "d-inline-block mt-2");
      team2span.innerText = away;
      team2div.appendChild(team2span);

      // check if playing


      var streamsdiv = document.createElement("div");
      streamsdiv.setAttribute("class", "text-right d-none d-md-inline-block float-right");
      team2div.appendChild(streamsdiv);

      var stream = document.createElement("button");
      stream.setAttribute("class", "btn btn-sm btn-danger m-2");
      stream.innerText = "Stream 1(EN)";
      stream.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://techclips.net/clip/s1.html')");
      streamsdiv.appendChild(stream);

      var stream2 = document.createElement("button");
      stream2.setAttribute("class", "btn btn-sm btn-danger m-2");
      stream2.innerText = "Stream 2(EN)";
      stream2.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://l1l1.to/ch4')");
      streamsdiv.appendChild(stream2);

      var stream3 = document.createElement("button");
      stream3.setAttribute("class", "btn btn-sm btn-danger m-2");
      stream3.innerText = "Stream 3(ES)";
      stream3.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://l1l1.to/ch10')");
      streamsdiv.appendChild(stream3);
      var stream4 = document.createElement("button");
      stream4.setAttribute("class", "btn btn-sm btn-danger m-2");
      stream4.innerText = "Stream 4(EN)";
      stream4.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://liveon.sx/embed1')");
      streamsdiv.appendChild(stream4);
      var best = document.createElement("button");
      best.setAttribute("class", "btn btn-sm btn-danger m-2");
      best.innerText = "Best but Laggy(EN)";
      best.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://v4.sportsonline.to/channels/hd/hd1.php')");
      streamsdiv.appendChild(best);

    }
  }
}


fetchapps();
