function onload() {
    $("body").fadeOut();
    $("body").fadeIn();
    refresh()
}

var clickHere = document.getElementById("btn1")
let door1 = document.getElementById("first")
let door2 = document.getElementById("second")

clickHere.addEventListener("click", function(){ 
    door1.style.display = "none"
    door2.style.display = "block"
    setTimeout(function(){
        window.location.href = "./home.html"
    },
    2800)
});


var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "home.html"){
    document.body.style.backgroundImage = "url(../media/window.png), url(../media/city.gif)"; 
}
else if (page === "about.html"){
    document.body.style.backgroundImage = "url(../media/window.png), url(../media/city1.gif)"; 
}
else if (page === "stuff.html"){
    document.body.style.backgroundImage = "url(../media/window.png), url(../media/party.gif)"; 
}
else if (page === "works.html"){
    document.body.style.backgroundImage = "url(../media/window.png), url(../media/future.gif)";  
}