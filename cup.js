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
  let response = await fetch("/cup.json");
  let json = await response.json();
  var main = document.getElementById("font-md-10");
  for (app in json) {
    var date = json[app].date;
    var day = json[app].day;
    var month = json[app].month;
    var time = json[app].time;
    var team1 = json[app].team1;
    var team2 = json[app].team2;
    var streaml = json[app].link[1];
    var alll = json[app].link[0];
    var hour = json[app].hour;
    var appelm = document.createElement("a");

    appelm.className = "app";

    main.appendChild(appelm);

    var app = document.getElementsByClassName("app")[app];

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 position-relative");
    maindiv.setAttribute("style", "cursor:default;")
    app.appendChild(maindiv);

    var maindiv2 = document.createElement("div");
    maindiv2.setAttribute("class", "d-flex justify-content-center row");
    maindiv.appendChild(maindiv2);

    var team1div = document.createElement("div");
    team1div.setAttribute("class", "col-4 text-right");
    maindiv2.appendChild(team1div);

    var team1span = document.createElement("span");
    team1span.setAttribute("class", "d-inline-block mt-2");
    team1span.innerText = team1;
    team1div.appendChild(team1span);

    var datediv = document.createElement("div");
    datediv.setAttribute("class", "col-4 text-center");
    maindiv2.appendChild(datediv);

    var datespan = document.createElement("span");
    datespan.setAttribute("class", "d-inline-block text-center text-dark-l");
    datespan.innerHTML = '<i class="fas fa-clock"></i><br>' + date + "&nbsp;&nbsp;" + time + " CT";
    datediv.appendChild(datespan);

    var team2div = document.createElement("div");
    team2div.setAttribute("class", "col-4 text-left");
    maindiv2.appendChild(team2div);

    var team2span = document.createElement("span");
    team2span.setAttribute("class", "d-inline-block mt-2");
    team2span.innerText = team2;
    team2div.appendChild(team2span);
    var max = hour+1
    if (dt.getDate() == day && dt.getMonth() + 1 == month) {
      console.log('today is ' + team1)
      if (hour <= dt.getHours()) {
        console.log('after ' + hour)
        console.log(`${hour + 1} >= ${dt.getHours()}`)
        if (max >= dt.getHours()) {
          console.log('before ' + max)
          var streamsdiv = document.createElement("div");
          streamsdiv.setAttribute("class", "text-right d-none d-md-inline-block float-right");
          team2div.appendChild(streamsdiv);

          var stream = document.createElement("button");
          stream.setAttribute("class", "btn btn-sm btn-danger m-2");
          stream.innerText = "Stream 1(EN)";
          stream.setAttribute("onclick", "window.open('https://qatar.up.railway.app/apps/apps.html#https://l1l1.to/ch1')");
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

          var all = document.createElement("button");
          all.setAttribute("class", "btn btn-sm btn-danger m-2");
          all.innerText = "All Live Streams";
          all.setAttribute("onclick", "openapp(" + '"' + alll + '"' + ")");
          streamsdiv.appendChild(all);
        }
      }
    }
  }
}

fetchapps();
