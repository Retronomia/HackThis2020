
function footerUp(){
    console.log('doot');
    coll=document.getElementsByName('footer');
    coll.addEventListener("click", function() {
        var content = this.parentElement.nextElementSibling;
        if (content.style.display == "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
}

function getFocus(arg){
    arg.style.backgroundColor = "red";
    arg.removeEventListener('click',getFocus(arg));
    document.addEventListener('click',offClick(arg));
}
function offClick(arg){
    arg.style.backgroundColor = "white";
    document.removeEventListener('click',offClick(arg));
}