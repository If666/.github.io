
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/sevi2.png') {
      myImage.setAttribute ('src','bilder/sevi.png');
    } else {
      myImage.setAttribute ('src','bilder/sevi2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  myHeading.textContent = 'Dies ist der Kopf von: ' + myName;
}

myButton.onclick = function() {
  setUserName();
}