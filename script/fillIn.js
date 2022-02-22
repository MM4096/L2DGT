
//insert script for filling in here
$(document).ready(function() {



    let requestedItem = sessionStorage.getItem("getItemName");
    if (requestedItem == null || requestedItem == undefined || requestedItem == "") {
        window.alert("You are viewing the sample page");
    } else {
        for (let i = 1; i <= 6; i++) {
            let objectName = "item" + i;
            if (objectName.code == requestedItem) {
                var requestedObject = objectName;
            }
        }
        $("h1").first().text(requestedObject.name);
        $("ul").first().html(requestedObject.allergies);
        $("#description").text(requestedObject.itemDescription);
        $(".cost").first().text(requestedObject.cost);
    }
})



$("p").first().on("click", function() {
    $("ul").first().slideToggle();
})