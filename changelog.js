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
      const main = document.createElement("div");
      main.classList.add('flex', 'flex-col', 'gap-y-2');
      const div1 = document.createElement("div");
      const version = div1.createElement('h1');
      version.innerHTML = change.version
      const datediv = div1.createElement('div');
      datediv.classList.add('flex', 'flex-col');
      const datetxt = datediv.createElement('h2');
      datetxt.innerHTML = change.date
      const date = document.createElement("div");
      date.innerHTML = change.date  
      main.appendChild(div1)     
      main.appendChild(date)         
        console.log(change.version, change.date)
        for (let i = 0; i < change.changes.length; i++) {
            let changes =  changestext(change.changes[i]);
            main.appendChild(changes)
        }
        return main
    }
    const changestext = (text) => {
        const allchanges = document.createElement("div");
      const type = document.createElement("div");
      type.innerHTML = text.type
      const desc = document.createElement("div");
      desc.innerHTML = text.desc
      allchanges.appendChild(type)  
      allchanges.appendChild(desc)    
      return allchanges
    }
    const topdiv = document.getElementById('changelog')
    for (let i = 0; i < data.length; i++) {
       let main =  changesdiv(data[i]);
       topdiv.appendChild(main);

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