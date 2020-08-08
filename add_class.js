function clickHandler() {
    let div = document.createElement("div");
    div.setAttribute("id", "section");
    

    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Class name"));
    header.setAttribute("contenteditable", "true");
    div.appendChild(header);

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv");
    let img = document.createElement("img");
    img.src = "thonq.png";
    imgdiv.appendChild(img);
    div.appendChild(imgdiv);

    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Text"));
    div.appendChild(p);

    document.getElementById('classes').appendChild(div);  

    //document.body.appendChild(div);   
}