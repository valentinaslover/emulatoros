

function getFlags(code) {
  var flags = "https://qatar.up.railway.app/flags?q=" + code
  return flags
}
function update(app) {
  $(function () {
    $.getJSON(
      "https://qatar.up.railway.app/api?q=matches/current",
      function (json) {
        $('#score').text(json[app].home_team.goals + ' - ' + json[app].away_team.goals);
        // Patching payload into page element ID = "dog" 
      });
  });
}
function interval() {
  setInterval(update, 1000);
}

async function fetchapps() {
  let response = await fetch("https://qatar.up.railway.app/api?q=matches");
  let json = await response.json();
  var main = document.getElementById("font-md-10");
  for (app in json) {

    var format = moment(json[app].datetime);
    var date = format.tz('America/Chicago').format('llll');

    var team1 = json[app].home_team;
    var team2 = json[app].away_team;
    var home = team1.name;
    var away = team2.name;

    var status = json[app].status;
    if (status !== "completed" && status !== "in_progress" && home !== "To Be Determined") {

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
      team1div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-right");
      maindiv2.appendChild(team1div);

      var team1img = document.createElement("img");
      team1img.setAttribute("class", "p-2 d-inline-block  ");
      team1img.src = getFlags(team1.country);
      team1div.appendChild(team1img);

      var team1span = document.createElement("span");
      team1span.setAttribute("class", "p-2 d-inline-block  text-center");
      team1span.innerText = home;
      team1div.appendChild(team1span);

      var datediv = document.createElement("div");
      datediv.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-center");
      maindiv2.appendChild(datediv);

      var datespan = document.createElement("span");
      datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
      datespan.innerHTML = '<i class="fas fa-clock"></i><br>' + date + " CT";
      datediv.appendChild(datespan);

      var team2div = document.createElement("div");
      team2div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-left");
      maindiv2.appendChild(team2div);



      var team2img = document.createElement("img");
      team2img.setAttribute("class", "p-2 d-inline-block  ");
      team2img.src = getFlags(team2.country);
      team2div.appendChild(team2img);

      var team2span = document.createElement("span");
      team2span.setAttribute("class", "p-2 d-inline-block text-center ");
      team2span.innerText = away;
      team2div.appendChild(team2span);

    }
  }

}

async function current() {
  let response = await fetch("https://qatar.up.railway.app/api?q=matches/current");
  let json = await response.json();

  for (app in json) {
    var main = document.getElementById('live');
    var team1 = json[app].home_team;
    var team2 = json[app].away_team;
    var home = team1.name;
    var away = team2.name;
    console.log(away + " and " + home)
    var status = json[app].status;

    console.log('before ' + status)
    var appelm = document.createElement("a");

    appelm.className = "live";

    main.prepend(appelm);


    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 d-flex flex-column align-items-center");
    maindiv.setAttribute("style", "cursor:default;")
    appelm.appendChild(maindiv);

    var score = document.createElement("span");
    score.setAttribute("class", "h3 d-flex justify-content-center text-center");
    score.setAttribute("id", "score");
    score.innerText = team1.goals + ' - ' + team2.goals;
    maindiv.appendChild(score);

    var maindiv2 = document.createElement("div");
    maindiv2.setAttribute("class", "d-flex justify-content-center row");
    maindiv.appendChild(maindiv2);

    var team1div = document.createElement("div");
    team1div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-right");
    maindiv2.appendChild(team1div);

    var team1img = document.createElement("img");
    team1img.setAttribute("class", "p-2 d-inline-block  ");
    team1img.src = getFlags(team1.country);
    team1div.appendChild(team1img);

    var team1span = document.createElement("span");
    team1span.setAttribute("class", "p-2 d-inline-block  text-center");
    team1span.innerText = home;
    team1div.appendChild(team1span);

    var datediv = document.createElement("div");
    datediv.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-center");
    maindiv2.appendChild(datediv);

    var min = document.createElement("span");
    min.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
    min.innerHTML = json[app].time+ "'";
    datediv.appendChild(min);

    var datespan = document.createElement("span");
    datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
    datespan.innerHTML = ' Live <span class="live-icon"></span>';
    datediv.appendChild(datespan);

    var team2div = document.createElement("div");
    team2div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-left");
    maindiv2.appendChild(team2div);

    var team2img = document.createElement("img");
    team2img.setAttribute("class", "p-2 d-inline-block  ");
    team2img.src = getFlags(team2.country);
    team2div.appendChild(team2img);

    var team2span = document.createElement("span");
    team2span.setAttribute("class", "p-2 d-inline-block text-center ");
    team2span.innerText = away;
    team2div.appendChild(team2span);

    // check if playing


    var streamsdiv = document.createElement("div");
    streamsdiv.setAttribute("class", "d-flex justify-content-center");
    maindiv.appendChild(streamsdiv);

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
    interval(app);

  }
}

async function previous() {
  let response = await fetch("https://qatar.up.railway.app/api?q=matches");
  let json = await response.json();
  var main = document.getElementById("previous");
  for (app in json) {

    var format = moment(json[app].datetime);
    var date = format.tz('America/Chicago').format('llll');
    var team1 = json[app].home_team;
    var team2 = json[app].away_team;
    var home = team1.name;
    var away = team2.name;

    var status = json[app].status;
    if (status == "completed") {

      var appelm = document.createElement("a");

      appelm.className = "previous";

      main.prepend(appelm);


      var maindiv = document.createElement("div");
      maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 d-flex flex-column align-items-center");
      maindiv.setAttribute("style", "cursor:default;")
      appelm.appendChild(maindiv);

      var score = document.createElement("span");
      score.setAttribute("class", "h3 d-flex justify-content-center text-center");
      score.innerText = team1.goals + ' - ' + team2.goals;
      maindiv.appendChild(score);

      var maindiv2 = document.createElement("div");
      maindiv2.setAttribute("class", "d-flex justify-content-center row");
      maindiv.appendChild(maindiv2);

      var team1div = document.createElement("div");
      team1div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-right");
      maindiv2.appendChild(team1div);

      var team1img = document.createElement("img");
      team1img.setAttribute("class", "p-2 d-inline-block  ");
      team1img.src = getFlags(team1.country);
      team1div.appendChild(team1img);

      var team1span = document.createElement("span");
      team1span.setAttribute("class", "p-2 d-inline-block  text-center");
      team1span.innerText = home;
      team1div.appendChild(team1span);

      var datediv = document.createElement("div");
      datediv.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-center");
      maindiv2.appendChild(datediv);


      var datespan = document.createElement("span");
      datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
      datespan.innerHTML = 'Played on<br>' + date + " CT";
      datediv.appendChild(datespan);

      var team2div = document.createElement("div");
      team2div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-left");
      maindiv2.appendChild(team2div);



      var team2img = document.createElement("img");
      team2img.setAttribute("class", "p-2 d-inline-block  ");
      team2img.src = getFlags(team2.country);
      team2div.appendChild(team2img);

      var team2span = document.createElement("span");
      team2span.setAttribute("class", "p-2 d-inline-block text-center ");
      team2span.innerText = away;
      team2div.appendChild(team2span);
      var stats = document.createElement("button");
      stats.setAttribute("class", "p-2 d-inline-block btn btn-sm btn-danger");
      stats.innerText = 'Stats';
      stats.setAttribute("href", "/stats#" + json[app].id);
      maindiv.appendChild(stats);

    }
  }
}
current();
fetchapps();
previous();
