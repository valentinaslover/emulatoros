window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      closeForm();
      hideRequest();
      document.getElementById("bug").style.bottom = "08px";
    })
  });
});
window.addEventListener("load", function() {
  const form = document.getElementById('my-form2');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      closeBug();
      hideBug();
    })
  });
});

function displayQuestion(answer) {

  document.getElementById(answer + 'Question').style.display = "block";

  if (answer == "game") { // hide the div that is not selected

    document.getElementById('pr*xyQuestion').style.display = "none";
   

  } else if (answer == "pr*xy") {

   document.getElementById('gameQuestion').style.display = "none";

  } 

}
function hideQuestion() {

  
    document.getElementById('pr*xyQuestion').style.display = "none";
    document.getElementById('gameQuestion').style.display = "none";


}
