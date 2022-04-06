
var cost = 0;
//insert script for filling in here
$(document).ready(function() {



    let requestedItem = sessionStorage.getItem("getItemName");
    if (requestedItem == null || requestedItem == undefined || requestedItem == "") {
        window.alert("You are viewing the sample page");
    } else {
        switch (requestedItem) {
            case "peppermintCandy":
                fill(1);
            break
            case "chocolate":
                fill(2);
            break
            case "lollipop":
                fill(3);
            break
            case "allsortedLollies":
                fill(4);
            break
            case "candyCorn":
                fill(5);
            break
            case "sourGummyWorms":
                fill(6);
            break
            default:
                window.alert("You are viewing default page")
            break

        }

        
    }
})

function fill(itemCode) {
    switch(itemCode) {
        case 1:
            $("h1").first().text(item1.name);
            $("ul").first().html(item1.allergies);
            $("#description").text(item1.itemDescription);
            $(".cost").first().text("$" + item1.cost);
            $("img").last().attr("src", item1.src);
            cost = item1.cost;
        break
        case 2:
            $("h1").first().text(item2.name);
            $("ul").first().html(item2.allergies);
            $("#description").text(item2.itemDescription);
            $(".cost").first().text("$" + item2.cost);
            $("img").last().attr("src", item2.src);
            cost = item2.cost;
        break
        case 3:
            $("h1").first().text(item3.name);
            $("ul").first().html(item3.allergies);
            $("#description").text(item3.itemDescription);
            $(".cost").first().text("$" + item3.cost);
            $("img").last().attr("src", item3.src);
            cost = item3.cost;
        break
        case 4:
            $("h1").first().text(item4.name);
            $("ul").first().html(item4.allergies);
            $("#description").text(item4.itemDescription);
            $(".cost").first().text("$" + item4.cost);
            $("img").last().attr("src", item4.src);
            cost = item4.cost;
        break
        case 5:
            $("h1").first().text(item5.name);
            $("ul").first().html(item5.allergies);
            $("#description").text(item5.itemDescription);
            $(".cost").first().text("$" + item5.cost);
            $("img").last().attr("src", item5.src);
            cost = item5.cost;
        break
        case 6:
            $("h1").first().text(item6.name);
            $("ul").first().html(item6.allergies);
            $("#description").text(item6.itemDescription);
            $(".cost").first().text("$" + item6.cost);
            $("img").last().attr("src", item6.src);
            cost = item6.cost;
        break
    }
    
}


$("p").first().on("click", function() {
    $("ul").first().slideToggle();
})

function calculateCost() {
    let totalItems = $("#addTotal").val();
    console.log(totalItems);
    let itemCost = totalItems * cost;
    $("button").text("Add " + totalItems + " to cart for $" + itemCost);
}

function addToCart() {
    let totalItems = $("#addTotal").val();
    totalItems = parseInt(totalItems);
    if (totalItems < 0) {
        console.warn("Error: Unexpected quantity of items - negative values");
        window.alert("Error. See console for more info (ctrl + shift + i), chrome on windows");
    } else if (totalItems > 20) {
        if (window.confirm("You ordered a lot of items. Are you sure you want to do this?")) {
            localStorage.setItem(requestedItem, totalItems);
        }
    } else {
        localStorage.setItem(requestedItem, totalItems);
    }
}