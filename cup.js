function getFlags(code) {
  var flags = "https://emulatoros.up.railway.app/flags?q=" + code
  return flags
}

function mapEventType(type) {
  if (type === 'booking') {
    return 'card';
  }
  return type;
}

function eventToColour(eventType) {
  if (eventType === 'goal') {
    return 'green';
  }
  if (eventType === 'booking') {
    return 'yellow';
  }
  return 'gray';
}

function PlayByPlay(match) {
  console.log(match)
  const events = [
    ...match.home_team_events.map(event => (Object.assign(Object.assign({}, event), {
      country: match.home_team_country
    }))),
    ...match.away_team_events.map(event => (Object.assign(Object.assign({}, event), {
      country: match.away_team_country
    })))
  ];
  events.sort((a, b) => b.id - a.id);
  console.log(events)
  return (events)
}

function update() {

  $.getJSON(
    "https://emulatoros.up.railway.app/api?q=matches/current",
    function(json) {
      for (app in json) {
        $('#score').text(json[app].home_team.goals + ' - ' + json[app].away_team.goals);
        $('#time').text(json[app].time);
      }

      // Patching payload into page element ID = "dog" 
    });
}

function interval(app, play, json) {

  var events = PlayByPlay(json[app]);
  const home = json[app].home_team_country
  const away = json[app].away_team_country

  for (app in events) {

    if (events[app].country === home) {

      var eventelm = document.createElement("div");
      eventelm.setAttribute("style", "text-align:right;")
      play.appendChild(eventelm);
      eventelm.innerHTML = `<span class="type ${eventToColour(events[app].type_of_event)}">${mapEventType(events[app].type_of_event)}</span>
      <p>${events[app].player}</p>`

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("style", "width: 100%; height: 58px;")
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      play.appendChild(svg);
      svg.innerHTML = ` 
        <rect x="40%" y="30%" width="20%" height="100%" fill="#ffffff"></rect>
        <circle cx="50%" cy="30%" r="10%" fill="#ffffff"></circle>`

      var p = document.createElement("p");
      p.setAttribute("style", "margin:0;")
      p.innerHTML = `${events[app].time}`
      play.appendChild(p);
    } else {
      var p = document.createElement("p");
      p.setAttribute("style", "margin:0;text-align:right;")
      p.innerHTML = `${events[app].time}`
      play.appendChild(p);



      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("style", "width: 100%; height: 58px;")
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      play.appendChild(svg);
      svg.innerHTML = ` 
      <rect x="40%" y="30%" width="20%" height="100%" fill="#ffffff"></rect>
      <circle cx="50%" cy="30%" r="10%" fill="#ffffff"></circle>`

      var eventelm = document.createElement("div");
      eventelm.setAttribute("style", "text-align:left;")
      play.appendChild(eventelm);
      eventelm.innerHTML = `<span class="type ${eventToColour(events[app].type_of_event)}">${mapEventType(events[app].type_of_event)}</span>
        <p>${events[app].player}</p>`


    }


  }
  setInterval(update, 10000);
}

function fetchapps() {
  $.getJSON(
    "https://emulatoros.up.railway.app/api?q=matches/current",
    function(json) {
      var main = document.getElementById("font-md-10");
      var previous = document.getElementById("previous");
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
  )
}

function previous() {
  $.getJSON(
    "https://emulatoros.up.railway.app/api?q=matches/current",
    function(json) {
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
          stats.setAttribute("onclick", `window.location.href='/stats#${json[app].id}'`);
          maindiv.appendChild(stats);

        }
      }
    })
}


function current() {
  $.getJSON(
    "https://emulatoros.up.railway.app/api?q=matches/current",
    function(json) {

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

        // 1fr 1em 1fr


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
        datediv.setAttribute("class", "d-flex flex-column justify-content-center align-items-center col-4 text-center");
        maindiv2.appendChild(datediv);

        var min = document.createElement("span");
        min.setAttribute("class", "p-2 d-flex text-center green-txt");
        min.setAttribute("id", "time");
        min.innerHTML = json[app].time;
        datediv.appendChild(min);

        var datespan = document.createElement("span");
        datespan.setAttribute("class", "p-2 d-flex text-center text-dark-l");
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
        var play = document.createElement("div");
        play.setAttribute("class", "d-grid play bg-dark-gray");
        play.setAttribute("style", "cursor:default;")
        maindiv.appendChild(play);

        var streamsdiv = document.createElement("div");
        streamsdiv.setAttribute("class", "d-flex justify-content-center");
        maindiv.appendChild(streamsdiv);

        var stream = document.createElement("button");
        stream.setAttribute("class", "btn btn-sm btn-danger m-2 ");
        stream.setAttribute("id", "stream" + app);
        stream.innerText = "Stream 1(EN)";
        stream.setAttribute("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://1l1l.to/embed4')");
        streamsdiv.appendChild(stream);

        var stream2 = document.createElement("button");
        stream2.setAttribute("class", "btn btn-sm btn-danger m-2");
        stream2.setAttribute("id", "2stream" + app);
        stream2.innerText = "Stream 2(EN)";
        stream2.setAttribute("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://techclips.net/clip/s1.html')");
        streamsdiv.appendChild(stream2);

        var stream3 = document.createElement("button");
        stream3.setAttribute("class", "btn btn-sm btn-danger m-2 " );
        stream3.setAttribute("id", "3stream" + app);
        stream3.innerText = "Stream 3(ES)";
        stream3.setAttribute("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://gamerarcades.com/assets/ts1.html')");
        streamsdiv.appendChild(stream3);
        
        var stream4 = document.createElement("button");
        stream4.setAttribute("class", "btn btn-sm btn-danger m-2 ");
        stream4.setAttribute("id", "4stream" + app);
        stream4.innerText = "Stream 4(EN)";
        stream4.setAttribute("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://mactecharena.com/m2.html')");
        streamsdiv.appendChild(stream4);
        var best = document.createElement("button");
        best.setAttribute("class", "btn btn-sm btn-danger m-2 ");
        best.setAttribute("id", "5stream" + app);
        best.innerText = "Best but Laggy(EN)";
        best.setAttribute("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://v4.sportsonline.to/channels/hd/hd1.php')");
        streamsdiv.appendChild(best);


        interval(app, play, json);
      }
    }
  )
}


$(document).ready(function() {
  fetchapps();
  previous();
  current();
  const check = $('#stream1');
console.log(check)
  console.log('load4')
if (check === null) {
  console.log('is null' + check)
} else {
  console.log('is not null')
  var streamatt = $('#stream1');
  streamatt.attr("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://1l1l.to/embed2')");

  var streamatt2 = $('#2stream1');
  streamatt2.attr("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://techclips.net/clip/s2.html')");

  var streamatt3 = $('#3stream1');
  streamatt3.attr("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://gamerarcades.com/assets/ts1.html')");

  var streamatt4 = $('#4stream1');
  streamatt4.attr("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://mactecharena.com/m1.html')");

  var streamatt5 = $('#5stream1');
  streamatt5.attr("onclick", "window.open('https://emulatoros.up.railway.app/apps/apps.html#https://v4.sportsonline.to/channels/hd/hd2.php')");

}
})

