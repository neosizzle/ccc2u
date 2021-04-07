// To prevent "save image as"
var message="Right-click has been disabled";

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}
function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2||e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");
document.getElementsByClassName('my-img').ondragstart = function() { return false; };


//checks current language used and change lang dropdown accordingly
if(window.lang.currentLang == 'en'){
  document.getElementById('active-lang-img').src = 'images/assets/icons/british-icon.png'; 
  document.getElementById('active-lang').innerText = 'English'
}else if(window.lang.currentLang == 'cn'){
  document.getElementById('active-lang-img').src = 'images/assets/icons/china-icon.png';
  document.getElementById('active-lang').innerText = '简体中文'
}

