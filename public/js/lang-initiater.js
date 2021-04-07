//thank you https://github.com/Irrelon/jquery-lang-js
// Create language switcher instance
var lang = new Lang();

/*
PLEASE NOTE You MUST declare your dynamic language packs BEFORE calling the init() method. 
Declaring your pack via the dynamic() method does not load your pack from the server, 
it just tells the library WHERE the pack is so that when the language is switched to the one the pack 
handles, the pack is then requested from the server
*/

// Define the thai language pack as a dynamic pack to be loaded on demand
// if the user asks to change to that language. We pass the two-letter language
// code and the path to the language pack js file

//function for getting browser cookie
const getCookie = (cname)=>{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


try{
//get default lang from window component (EMBEDDED IFRAMES ONLY)
var defaultLang = getCookie('lang') || window.frameElement.getAttribute('customLang') || 'en'

//loading langpacks
lang.dynamic('en', '../../js/langpack/en.json');
lang.dynamic('cn', '../../js/langpack/cn.json');

}
catch{

var defaultLang = getCookie('lang') || 'en' //conditional variable for language

//loading langpacks
lang.dynamic('en', 'js/langpack/en.json');
lang.dynamic('cn', 'js/langpack/cn.json');
}

//initializes english as default language
lang.init({
  defaultLang
});

//changes language 
window.lang.change(defaultLang)
