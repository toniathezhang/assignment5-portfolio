
var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "home.html"){
    document.body.style.backgroundImage = "url(./media/window.png), url(./media/city.gif)"; 
}
else if (page === "about.html"){
    document.body.style.backgroundImage = "url('./media/window.png'), url('./media/city1.gif')"; 
}
else if (page === "stuff.html"){
    document.body.style.backgroundImage = "url('./media/window.png'), url('./media/party.gif')"; 
}
else if (page === "works.html"){
    document.body.style.backgroundImage = "url('./media/window.png'), url('./media/future.gif')";  
}
