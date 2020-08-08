function clickHandler() {
    /*<div class='section'>
            <h1>DOE</h1>
            <div id='imgdiv'><img src="thonq.png"></img></div>
            <p>A deer, a female deer</p>
        </div>
    */

    
    let div = document.createElement("div");
    //div.class = "section";
    //div.id = "Class";
    //div.onclick = "location.href='classpage.html?class='" + this.id;
    div.setAttribute("class", "section");
    div.setAttribute("id", "Class");
    //div.setAttribute("onclick", "location.href='home.html';");
    //div.setAttribute("style", "cursor: pointer;");
    
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Class"));
    header.setAttribute("contenteditable", "true");
    div.appendChild(header);

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    imgdiv.setAttribute("onclick", "location.href='classpage.html?class=Class';");
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
