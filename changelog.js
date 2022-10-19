$.getJSON('/changelog.json', (data) => {
$.each(data, function(field){
    console.log(data)
    console.log(field)
    const main = document.createElement('div');
    $('changelog').appendTo(main);
  });
});