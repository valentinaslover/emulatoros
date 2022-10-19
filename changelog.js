$.getJSON('/changelog.json', (data) => {
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
});