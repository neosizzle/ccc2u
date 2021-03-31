// To prevent "save image as"
var message="Right-click has been disabled";

console.log(self.location.host)


// //send post request to server
// fetch("https://api.ipify.org/?format=json")
// .then(response => response.json())//parse response into readable json
// .then((data)=>{
//     //error handling
//     if(data.error){

//     }else{
//         console.log(data)
//     }
// })
// .catch(
//     (error)=>{

//     }
// )

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