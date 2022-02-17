if (typeof(jQuery) === undefined) {
    document.getElementById("jqueryScript").setAttribute("src", "script/jquery-3.6.0.min");
    console.log("Used local file.")
}
if (localStorage.getItem("cookiePermission") != "1") {
    window.alert("You must use cookies to visit this site!");
    localStorage.setItem("cookiePermission", "1");
}