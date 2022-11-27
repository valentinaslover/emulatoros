let id = decodeURIComponent(window.location.hash.slice(1))
async function current() {
    let response = await fetch("https://qatar.up.railway.app/api?q=matches/" + id);
    let json = await response.json();
    
        var main = document.getElementsByClassName('main');
        var team1 = json.home_team;
        var team2 = json.away_team;
        var home = team1.name;
        var away = team2.name;
        console.log(main)
        var status = json.status;

        console.log('before ' + status)
        var appelm = document.createElement("a");

        appelm.className = "live";

        main.prepend(appelm);


        var maindiv = document.createElement("div");
        maindiv.setAttribute("class", "div-child-box bg-dark-gray  bg-white py-2 position-relative");
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
        team1div.setAttribute("class", "d-flex d-flex justify-content-center align-items-center col-4 text-right");
        maindiv2.appendChild(team1div);

        var team1span = document.createElement("span");
        team1span.setAttribute("class", "p-2 d-inline-block  text-center");
        team1span.innerText = home;
        team1div.appendChild(team1span);

        var datediv = document.createElement("div");
        datediv.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-center");
        maindiv2.appendChild(datediv);

        var datespan = document.createElement("span");
        datespan.setAttribute("class", "p-2 d-inline-block text-center text-dark-l");
        datespan.innerHTML = ' Live <span class="live-icon"></span>';
        datediv.appendChild(datespan);

        var team2div = document.createElement("div");
        team2div.setAttribute("class", "d-flex justify-content-center align-items-center col-4 text-left");
        maindiv2.appendChild(team2div);

        var team2span = document.createElement("span");
        team2span.setAttribute("class", "p-2 d-inline-block  text-center");
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
        interval(json, app);
    }

current();