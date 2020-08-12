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
