initNav = document.getElementById("init-nav-container");
scrollNav = document.getElementById("scroll-nav");


//fuction that hides the navbar when reached a certain scroll point
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 300) {
      scrollNav.className = "navbar navbar-expand-lg navbar-light bg-light show"
    } else {
      scrollNav.className = "navbar navbar-expand-lg navbar-light bg-light hide"

    }
  };

  if(screen.width >= 1024){
    window.addEventListener("scroll", myScrollFunc);
  }



//checks if window resizes and executes adds or removes scroll listener according to screen size
window.onresize = ()=>{
    if(screen.width >= 1024){
        window.addEventListener("scroll", myScrollFunc);
      }else{

        window.removeEventListener("scroll", myScrollFunc);
      }
}

