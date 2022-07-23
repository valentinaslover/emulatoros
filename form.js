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
function hidebyID(idname)
{
	var menu = document.querySelectorAll('#random > button')
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "none"
	}
	var menu = document.querySelectorAll('#random > .' + idname)
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "inline"
	}
}
function displayQuestion(answer) {

  document.getElementById(answer + 'Question').style.display = "block";
document.getElementById(answer + 'Question2').setAttribute('required', '');
  
  if (answer == "game") { // hide the div that is not selected

    document.getElementById('pr*xyQuestion').style.display = "none";
    document.getElementById('pr*xyQuestion2').removeAttribute('required');
   

  } else if (answer == "pr*xy") {

   document.getElementById('gameQuestion').style.display = "none";
     document.getElementById('gameQuestion2').removeAttribute('required');

  } 

}
function hideQuestion() {

  
    document.getElementById('pr*xyQuestion').style.display = "none";
    document.getElementById('pr*xyQuestion2').removeAttribute('required'); document.getElementById('gameQuestion').style.display = "none";
     document.getElementById('gameQuestion2').removeAttribute('required');


}
function displayQuestionRequest(answer) {

  document.getElementById(answer + 'Question').style.display = "block";
document.getElementById(answer + 'Question2').style.display = "none";
  document.getElementById(answer + 'Question3').setAttribute('required', '');

}
function hideQuestionRequest() {

  
    document.getElementById('emulatorQuestion').style.display = "none";
   document.getElementById('emulatorQuestion2').style.display = "block";
document.getElementById('emulatorQuestion3').removeAttribute('required');  
}