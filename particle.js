var scriptElm = document.createElement('script');
scriptElm.setAttribute('class', 'class-name');
var inlineCode = document.createTextNode('alert("hello world")');
scriptElm.appendChild(inlineCode); 
document.body.appendChild(scriptElm);