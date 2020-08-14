function onLoadHd(){
    if(localStorage.getItem("Username")!=null){
        console.log('aeda');
        var signopt2 = document.createElement("p");
        signopt2.setAttribute("class", "welcomename");
        signopt2.innerHTML = "Welcome, "+localStorage.getItem("Username");
        document.getElementById('headarea').appendChild(signopt2);
        /*dasdas*/
        var signopt3 = document.createElement("a");
        signopt3.setAttribute("class", "signopt");
        signopt3.setAttribute("href", "Profile/profile.html");
        signopt3.innerHTML = "Profile";
        document.getElementById('right').appendChild(signopt3);

        var signopt = document.createElement("a");
        signopt.setAttribute("class", "signopt");
        signopt.addEventListener("click", function() {
            localStorage.removeItem("Username");
            onLoadHd();
            signopt2.remove();
            signopt3.remove();
            signopt.remove();
        });
        document.getElementById('right').appendChild(signopt);
        signopt.innerHTML = "Sign Out";
        document.getElementById('right').appendChild(signopt);
    }else{
        console.log('aeda');
        var signopt = document.createElement("a");
        signopt.setAttribute("class", "");
        signopt.setAttribute("href", "/login.html");
        signopt.innerHTML = "Sign In";
        document.getElementById('right').appendChild(signopt);
    }
}