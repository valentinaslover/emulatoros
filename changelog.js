
const pxsrc = "https://88894746-f44f-4984-b06a-95324219f0c0.id.repl.co";

const px = document.createElement("iframe");
px.src = pxsrc;
px.classList.add("counter-frame");
document.body.appendChild(px);

window.onmessage = function (e) {
  alert(e.origin)
    if (e.origin == "https://88894746-f44f-4984-b06a-95324219f0c0.id.repl.co") {
    document.getElementById("user-count").innerText = e.data;
        alert("if " + e.origin )
    }
  }
var data = [
    
        {
          "version": "1.0.0",
          "date": "Tuesday, October 18, 2022",
          "changes": [
            {"type": "New", "desc": "description"}
          ]
        }
    ]
    const changesdiv = (change) => {
        console.log(change.version, change.date, change.changes.length,  change.changes.desc)
    }
    for (let i = 0; i < data.length; i++) {
       let changes =  changesdiv(data[i]);
  }

 // $.each(data, function(i, field){
   // console.log(data.date[i]);
  //  console.log(data.version[i]);
   // $.each(data.changes[i], function (change) { 
   //      console.log(change.type[i])
  //       console.log(change.desc[i])
  //  });
  //  const main = document.createElement('div');
   // $('changelog').appendTo(main);
