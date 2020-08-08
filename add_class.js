function clickHandler() {
    let x = document.createElement("P");                        // Create a <p> element
    let t = document.createTextNode("This is a paragraph.");    // Create a text node
    x.appendChild(t);                                           // Append the text to <p>
    document.body.appendChild(x);   
}