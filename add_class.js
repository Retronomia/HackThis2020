function clickHandler() {
    /*<div class='section'>
            <div><input>DOE</input></div>
            <div id='imgdiv'><img src="thonq.png"></img></div>
            <p>A deer, a female deer</p>
        </div>
    */
    
    let div = document.createElement("div");
    div.setAttribute("class", "classcard");
    div.setAttribute("id", "Class classcard");
    const colors = ["#1aacf4","#b61af4","#1a4df4","#ed1af4","#1af480","#f48e1a","#f41a34","#c51af4","#f48b1a"];
    const random = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor=colors[random];

    let div2 = document.createElement("div");
    div2.setAttribute("class", "headersect");
    div.appendChild(div2);


    let header = document.createElement("input");
    header.appendChild(document.createTextNode("Class"));
    header.setAttribute("contenteditable", "true");
    header.setAttribute("maxlength", "12");
    header.setAttribute("value", "Class");
    header.setAttribute("class","classtitle")
    header.addEventListener("keyup", function(event) {
        let parent = event.target.parentNode.parentNode;
        parent.id = event.target.innerHTML;

        let imgdiv = parent.getElementsByClassName("imgdiv")[0];
        let className = event.target.value;
        imgdiv.setAttribute("onclick", "location.href=\"classpage.html?class=" + className + "\";  localStorage.setItem(\"className\",className);");
    });
    div2.appendChild(header);


    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    imgdiv.setAttribute("onclick", "location.href=\"classpage.html?class=" + "Class" + "\";  localStorage.setItem(\"className\",\"Class\");");
    imgdiv.setAttribute("style", "cursor: pointer;");
    let img = document.createElement("img");
    img.src = "books.png";
    imgdiv.appendChild(img);
    div.appendChild(imgdiv);

    /*let p = document.createElement("p");
    p.appendChild(document.createTextNode("Text"));
    div.appendChild(p);*/

    document.getElementById('classes').appendChild(div);  

}
