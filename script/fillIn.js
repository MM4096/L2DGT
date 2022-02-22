
//insert script for filling in here
$(document).ready(function() {



    let requestedItem = sessionStorage.getItem("getItemName");
    if (requestedItem == null || requestedItem == undefined || requestedItem == "") {
        window.alert("You are viewing the sample page");
    } else {

    }
})



$("p").first().on("click", function() {
    $("ul").first().slideToggle();
})