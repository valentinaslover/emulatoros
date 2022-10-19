var data = {
          "version": "1.0.0",
          "date": "Tuesday, October 18, 2022",
          "changes": [
            {"type": "New", "desc": "description"}
          ]
}
$.each(data, function(field){
    console.log(data.date);
    console.log(data.version);
    $.each(data.changes, function (change) { 
         console.log(change.type)
         console.log(change.desc)
    });
    const main = document.createElement('div');
    $('changelog').appendTo(main);
  });