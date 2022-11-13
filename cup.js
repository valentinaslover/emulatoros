
  
  function openapp(app) {
    var appframe = document.getElementById("surf");
    var controls = document.getElementById("controls");
    var header = document.getElementById("header");
    header.style.display = "none";
    controls.style.display = "flex";
    appframe.style.display = "initial";
    appframe.setAttribute("src", 'https://' + plink + '/apps/apps.html#' + app);
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
      var appframe = document.getElementById("surf")
      appframe.requestFullscreen()
    }
    function opentab() {
      var url = document.getElementById("surf").src;
    
      var tabOrWindow = window.open(url, '_blank');
      closeapp();
      console.log('open in new tab')
      
       tabOrWindow.focus();
    }
    var plink = localStorage.getItem("plink")
    async function fetchapps() {
    let response = await fetch("/cup.json")
    let json = await response.json()
    var main = document.getElementById("font-md-10")
    for (app in json) {
    var date = json[app].date
    var time = json[app].time
    var team1 = json[app].team1
    var team2 = json[app].team2
    var location = json[app].link
    var appelm = document.createElement("a")
    
    appelm.className = "app"
    appelm.setAttribute("onclick", 'openapp(' + '"'  + location + '"' + ')')
    main.appendChild(appelm)
    
    var app = document.getElementsByClassName("app")[app]
    
    var maindiv = document.createElement("div")
    maindiv.setAttribute("class", 'div-child-box bg-dark-gray  bg-white py-2 position-relative') 
    app.appendChild(maindiv)
    
    var maindiv2 = document.createElement("div")
    maindiv2.setAttribute("class", 'd-flex justify-content-center row') 
    maindiv.appendChild(maindiv2)

    var team1div = document.createElement("div")
    team1div.setAttribute("class", 'col-4 text-right') 
    maindiv2.appendChild(team1div)

    var team1span = document.createElement("span")
    team1span.setAttribute("class", 'd-inline-block mt-2') 
    team1span.innerText = team1
    team1div.appendChild(team1span)

    var datediv = document.createElement("div")
    datediv.setAttribute("class", 'col-3 text-center') 
    maindiv2.appendChild(datediv)

    var datespan = document.createElement("span")
    datespan.setAttribute("class", 'd-inline-block text-center text-dark-l') 
    datespan.innerHTML = '<i class="fas fa-clock"></i><br>' + date + '&nbsp;&nbsp;' + time
    datediv.appendChild(datespan)

    var team2div = document.createElement("div")
    team2div.setAttribute("class", 'col-5 text-left') 
    maindiv2.appendChild(team2div)

    var team2span = document.createElement("span")
    team2span.setAttribute("class", 'd-inline-block mt-2') 
    team2span.innerText = team2
    team2div.appendChild(team2span)
    

   
    }
    
    }
    
    fetchapps()
   
    
    