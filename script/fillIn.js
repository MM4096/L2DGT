
//insert script for filling in here
$(document).ready(function() {



    let requestedItem = sessionStorage.getItem("getItemName");
    if (requestedItem == null || requestedItem == undefined || requestedItem == "") {
        window.alert("You are viewing the sample page");
    } else {
        for (let i = 1; i <= 6; i++) {
            let objectName = "item" + i;
            if (objectName.code == requestedItem) {
                var requestedObject = objectName
            }
        }
        $("h1").first().text(objectName.name);
        $("ul").first().html(objectName.allergies);
        $("#description").text(objectName.itemDescription);
        $(".cost").first().text(objectName.cost);
    }
})



$("p").first().on("click", function() {
    $("ul").first().slideToggle();
})