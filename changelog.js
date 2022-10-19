$.getJSON('/changelog.json', (data) => {
$.each(result, function(field){
    console.log(result)
    console.log(field)
    const main = document.createElement('div');
    $('changelog').appendTo(main);
  });
});