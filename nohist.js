function openInUnblocked(url)
{var myWindow=window.open("","_blank");myWindow.document.write("<title>Google</title><link rel=\"icon\" type=\"image/x-icon\" href=\"https://www.google.com/favicon.ico\">")
myWindow.document.write("<iframe onload=\"\" id='iframe' width=\"100%\" height=\"100%\" style=\"border:none;\"></iframe>");myWindow.document.write("<script>setTimeout(function() {document.getElementById('iframe').src = \""+url+"\"}, 500);</script>")
myWindow.document.write("<style>body { margin:0;}</style>")
myWindow.document.write("<script>function home(){document.getElementById('iframe').src = \""+url+"\"}</script>")
myWindow.document.close();myWindow.stop();window.location.replace('https://google.com');}
function reveal() {
    var reveals = document.querySelectorAll(".GameName");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  $(function() {
    reveal();
  });
  window.addEventListener("scroll", reveal);