let id = decodeURIComponent(window.location.hash.slice(1))
function getFlags(code) {
    var flags = "https://qatar.up.railway.app/flags?q=" + code
    return flags
  }
  function update()
{
    $(function() {
        $.getJSON(
            "https://qatar.up.railway.app/api?q=matches/" + id,
        function(json){ 
            $('#score').text(team1.goals + ' Goals ' + team2.goals);
        // Patching payload into page element ID = "dog" 
        });
    });
}
  function interval() {
    setInterval( update, 1000 );
  }

async function current() {
    let response = await fetch("https://qatar.up.railway.app/api?q=matches/" + id);
    let json = await response.json();
    var format = moment(json.datetime);
    var date = format.tz('America/Chicago').format('llll');
        var main = document.getElementById('main');
        var team1 = json.home_team;
        var team2 = json.away_team;
        var home = team1.name;
        var away = team2.name;
        var homestats = json.home_team_statistics
        var awaystats = json.away_team_statistics
        console.log(main)
        var status = json.status;

        console.log('before ' + status)
        var appelm = document.createElement("div");

        appelm.className = "live";

        main.prepend(appelm);


        var maindiv = document.createElement("div");
        maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 position-relative");
        maindiv.setAttribute("style", "cursor:default;")
        appelm.appendChild(maindiv);

        
        var maindiv2 = document.createElement("div");
        maindiv2.setAttribute("class", "d-flex justify-content-center row");
        maindiv.appendChild(maindiv2);

        var team1div = document.createElement("div");
        team1div.setAttribute("class", "d-flex d-flex justify-content-center align-items-center col-4 text-right");
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
        if (status == 'in_progress') {
        var datespan = document.createElement("span");
        datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
        datespan.innerHTML = ' Live <span class="live-icon"></span>';
        datediv.appendChild(datespan);
        interval(json)
        } else {
            var datespan = document.createElement("span");
            datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
            datespan.innerHTML = 'Played on<br>' + date + " CT";
            datediv.appendChild(datespan);
        }
        var team2div = document.createElement("div");
        team2div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-left");
        maindiv2.appendChild(team2div);
 var team2img = document.createElement("img");
      team2img.setAttribute("class", "p-2 d-inline-block  ");
      team2img.src = getFlags(team2.country);
      team2div.appendChild(team2img);

        var team2span = document.createElement("span");
        team2span.setAttribute("class", "p-2 d-inline-block  text-center");
        team2span.innerText = away;
        team2div.appendChild(team2span);
        var score = document.createElement("span");
        score.setAttribute("class", "h3 d-flex justify-content-center text-center");
        score.setAttribute("id", "score");
        score.innerText = team1.goals + ' Goals ' + team2.goals;
        maindiv.appendChild(score);
        try {
        var shots = document.createElement("span");
        shots.setAttribute("class", "h3 d-flex justify-content-center text-center");
        shots.setAttribute("id", "score");
        shots.innerText = homestats.attempts_on_goal + ' Shots ' + awaystats.attempts_on_goal;
        maindiv.appendChild(shots);
        }
        catch(err) {
            console.log(err)
        }
        appelm.innerHTML =
        `<table>
  <tr>
    <th><img src="${getFlags(team1.country)}"></img><span>${home}<span></th>
    <th>Team Stats</th>
    <th><img src="${getFlags(team2.country)}"></img><span>${away}<span></th>
  </tr>
  <tr>
    <td>${team1.goals}</td>
    <td>Goals</td>
    <td>${team2.goals}</td>
  </tr>
  <tr>
    <td>${homestats.attempts_on_goal}</td>
    <td>Shots</td>
    <td>${awaystats.attempts_on_goal}</td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
  </tr>
</table>`

        // check if playing


    }

current();