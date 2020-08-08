function clickHandler() {
    /*<div class='section'>
            <h1>DOE</h1>
            <div id='imgdiv'><img src="thonq.png"></img></div>
            <p>A deer, a female deer</p>
        </div>
    */
    
    let div = document.createElement("div");
    div.setAttribute("class", "section");
    div.setAttribute("id", "Class");
    
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Class"));
    header.setAttribute("contenteditable", "true");
    header.addEventListener("keyup", function(event) {
        let parent = event.target.parentNode;
        parent.id = event.target.innerHTML;

        let imgdiv = parent.getElementsByClassName("imgdiv")[0];
        imgdiv.setAttribute("onclick", "location.href=\"classpage.html?class=" + parent.id + "\";");
    });
    div.appendChild(header);


    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    imgdiv.setAttribute("onclick", "location.href=\"classpage.html?class=" + div.id + "\";");
    imgdiv.setAttribute("style", "cursor: pointer;");
    let img = document.createElement("img");
    img.src = "thonq.png";
    imgdiv.appendChild(img);
    div.appendChild(imgdiv);

    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Text"));
    div.appendChild(p);

    document.getElementById('classes').appendChild(div);  

}
