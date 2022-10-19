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
        console.log(change.version, change.date)
        for (let i = 0; i < change.changes.length; i++) {
            let changes =  changestext(change.changes[i]);
        }
    }
    const changestext = (text) => {
        console.log(text.type, text.desc, text)
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