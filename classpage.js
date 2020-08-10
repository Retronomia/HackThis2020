
function hideTd(){
    var coll = document.getElementsByClassName("collapsesect");
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var content = this.parentElement.nextElementSibling;
        if (content.style.display == "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
}
function addPg(){
  var coll = document.getElementsByClassName("addpage");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.parentElement.nextElementSibling;
      var button = document.createElement("button");
      button.setAttribute("class", "item");
      button.setAttribute("id", "filetitle");
      button.innerHTML = "<h1>New Page</h1>";
      content.appendChild(button);
    });
  }
}

function addSection(){
  var coll = document.getElementsByClassName("addsection");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = document.getElementById("classtitle").parentElement;
      var divouter = document.createElement("div");
      divouter.setAttribute("class", "item collapsible");
      divouter.setAttribute("id", "sectiontitle");
      content.append(divouter);
      var divinner = document.createElement("div");
      divinner.setAttribute("class","collapsesect")
      divouter.appendChild(divinner);
      var button = document.createElement("button");
      button.setAttribute("class", "secttext");
      button.setAttribute("contentEditable", "true");
      button.setAttribute("type","button");
      button.innerHTML = "<h1>New Section</h1>";
      divinner.appendChild(button);
      var button2 = document.createElement("button");
      button2.setAttribute("class","addpage")
      button2.setAttribute("id","sectbutton")
      divouter.appendChild(button2);
      var i = document.createElement("i");
      i.setAttribute("class","fa fa-plus")
      button2.appendChild(i);
      /**add section */
      var divsection = document.createElement("div");
      divsection.setAttribute("class", "sectioncontent");
      divsection.setAttribute("style", "display:block;");
      content.append(divsection);
      /** add listener*/
      button2.addEventListener("click", function() {
        console.log(button2.parentElement);
        var newcontent = button2.parentElement.nextElementSibling;
        var newbutton = document.createElement("button");
        newbutton.setAttribute("class", "item");
        newbutton.setAttribute("id", "filetitle");
        newbutton.innerHTML = "<h1>New Page</h1>";
        newcontent.append(newbutton);
      });
    });
  }
}
function collapseToggle(){
  var left= document.getElementByTagName('sectionleft');
  console.log(left);
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
/**COLOR PICKER */
function execForeColor(command,arg){
  richText.document.execCommand(command, false, arg);
  document.getElementById('foreColor').style.backgroundColor=arg; 
}
function execBackColor(command,arg){
  richText.document.execCommand(command, false, arg);
  document.getElementById('hiliteColor').style.backgroundColor=arg; 
}
function colorForePicker(){
    $("#colorForePicker").click();
}
function colorBackPicker(){
  $("#colorBackPicker").click();
}
/**TOGGLES*/
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


function format(){
  headerFormats = document.getElementsByClassName('wordHeader');
  for (i = 0; i < headerFormats.length; i++){
    console.log(headerFormats[i].value);
  }
}