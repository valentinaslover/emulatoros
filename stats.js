let id = decodeURIComponent(window.location.hash.slice(1))
function getFlags(code) {
    var flags = "https://qatar.up.railway.app/flags?q=" + code
    return flags
}

function create() {
    $(function () {
        $.getJSON(
            "https://qatar.up.railway.app/api?q=matches/" + id,
            function (json) {
                var format = moment(json.datetime);
                const date = format.tz('America/Chicago').format('llll');
                var main = document.getElementById('main');
                var team1 = json.home_team;
                var team2 = json.away_team;
                var home = team1.name;
                var away = team2.name;
                var homestats = json.home_team_statistics
                var awaystats = json.away_team_statistics
                var appelm = document.createElement("div");

                appelm.className = "live";

                appelm.innerHTML =
                    `<table class="bg-dark-black">
                    <thead>
  <tr>
    <th><img src="${getFlags(team1.country)}"></img><span>${home}<span></th>
    <th>Played on<br>${date} CT</th>
    <th><img src="${getFlags(team2.country)}"></img><span>${away}<span></th>
  </tr>
  </thead>
  <tbody>
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
  <td>${homestats.on_target}</td>
  <td>Shots On Target</td>
  <td>${awaystats.on_target}</td>
  </tr>
  <tr>
  <td>${homestats.ball_possession}</td>
  <td>Possession</td>
  <td>${awaystats.ball_possession}</td>
  </tr>
  <tr>
  <td>${homestats.pass_accuracy}</td>
  <td>Pass Accuracy</td>
  <td>${awaystats.pass_accuracy}</td>
  </tr>
  <tr>
  <td>${homestats.fouls_committed}</td>
  <td>Fouls</td>
  <td>${awaystats.fouls_committed}</td>
  </tr>
   <tr>
  <td>${homestats.yellow_cards}</td>
  <td>Yellow Cards</td>
  <td>${awaystats.yellow_cards}</td>
  </tr>
  <tr>
  <td>${homestats.red_cards}</td>
  <td>Red Cards</td>
  <td>${awaystats.red_cards}</td>
  </tr>
  <tr>
  <td>${homestats.offsides}</td>
  <td>Offsides</td>
  <td>${awaystats.offsides}</td>
  </tr>
  <tr>
  <td>${homestats.corners}</td>
  <td>Corners</td>
  <td>${awaystats.corners}</td>
  </tr>
  </thead>
</table>`

                // check if playing
                main.appendChild(appelm);

            });
    });
}
create();