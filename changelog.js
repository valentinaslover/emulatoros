var data = [
    
        {
          "version": "1.0.0",
          "date": "Tuesday, October 18, 2022",
          "changes": [
            {"type": "New", "desc": "description"}
          ]
        }
    ]
    for (let i = 0; i < data.length; i++) {
        console.log(data.date[i]);
        console.log(data.version[i]);
  }
  $.each(data, function(i, field){
    console.log(data.date[i]);
    console.log(data.version[i]);
    $.each(data.changes[i], function (change) { 
         console.log(change.type[i])
         console.log(change.desc[i])
    });
    const main = document.createElement('div');
    $('changelog').appendTo(main);