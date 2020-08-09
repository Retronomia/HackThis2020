
function hideTd(className){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
}

function movePanels(className){
    var dragging = false;
    $('#dragbar').mousedown(function(e){
      e.preventDefault();
      dragging = true;
      var side = $('.sectionleft');
      $(document).mousemove(function(ex){
        side.css("width", ex.pageX+2);
      });
    }); 
    $(document).mouseup(function(e){
      if (dragging) 
      {
        $(document).unbind('mousemove');
        dragging = false;
      }
    });
}
var showingSourceCode = false;
var isInEditMode = true;
function enableEditMode(){
  richText.document.designMode = 'On';
}
function execCmd(command){
  richText.document.execCommand(command, false, null);
}
function execCmdWithArg(command,arg){
  richText.document.execCommand(command, false, arg);
}
function toggleSource(){
  if (showingSourceCode){
    richText.document.getElementByTagName('body')[0].innerHTML = richText.document.getElementByTagName('body')[0].textContent;
    showingSourceCode= false;
  }else{
    richText.document.getElementByTagName('body')[0].innerHTML = richText.document.getElementByTagName('body')[0].innerHTML;
    showingSourceCode= true;
  }
}
function toggleEdit(){
  if(isInEditMode){
    richText.document.designMode='Off';
    isInEditMode = false;
  }else{
    richText.document.designMode='On';
    isInEditMode = true;
  }
}