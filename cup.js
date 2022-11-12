
  
  function openapp(app) {
    var appframe = document.getElementById("appframe");
    var controls = document.getElementById("controls");
    var header = document.getElementById("header");
    header.style.display = "none";
    controls.style.display = "flex";
    appframe.style.display = "initial";
    appframe.setAttribute("src", 'https://' + plink + app);
    }
        
    function closeapp() {
    var appframe = document.getElementById("appframe");
    var controls = document.getElementById("controls");
    var header = document.getElementById("header");
    header.style.display = "block";
    controls.style.display = "none";
    appframe.style.display = "none";
    appframe.setAttribute("src", "");
    }
    function fullapp() {
      var appframe = document.getElementById("appframe")
      appframe.requestFullscreen()
    }
    function opentab() {
      var url = document.getElementById("appframe").src;
    
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
    var title = json[app].date
    var team1 = json[app].team1
    var location = json[app].link
    var appelm = document.createElement("a")
    
    appelm.className = "app"
    appelm.setAttribute("onclick", 'openapp(' + '"'  + location + '"' + ')')
    main.appendChild(appelm)
    
    var app = document.getElementsByClassName("app")[app]
    
    var maindiv = document.createElement("div")
    maindiv.setAttribute("style", 'div-child-box bg-dark-gray  bg-white py-2 position-relative') 
    app.appendChild(maindiv)
    
    var maindiv2 = document.createElement("div")
    maindiv2.setAttribute("style", 'd-flex justify-content-center row') 
    maindiv.appendChild(maindiv2)

    var team1div = document.createElement("div")
    team1div.setAttribute("style", 'col-4 text-right') 
    maindiv2.appendChild(team1div)

    var team1span = document.createElement("span")
    team1span.setAttribute("style", 'd-inline-block mt-2') 
    team1span.innerText = team1
    team1div.appendChild(team1span)

    var titleelm = document.createElement("div")
    titleelm.innerText = title
    titleelm.className = "appinfo"
    maindiv2.appendChild(titleelm)

   
    }
    
    }
    
    fetchapps()
   
    
    