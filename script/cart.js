$(document).ready(function () {
    let itemName = item1.code;
    let itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    let itemCost = parseFloat(item1.cost);
    let totalCost = itemCost * itemQty;
    $("#item1").children("img").attr("src", item1.src);
    $("#item1>.itemName").text(item1.name);
    $("#item1 > .itemQty").val(itemQty);
    $("#item1 > .itemCostEa").text("$" + item1.cost + " each");
    $("#item1 > .itemCostTo").text("$" + totalCost + " total");

    itemName = item2.code;
    itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    itemCost = parseFloat(item2.cost);
    totalCost = itemCost * itemQty;
    $("#item2").children("img").attr("src", item2.src);
    $("#item2>.itemName").text(item2.name);
    $("#item2 > .itemQty").val(itemQty);
    $("#item2 > .itemCostEa").text("$" + item2.cost + " each");
    $("#item2 > .itemCostTo").text("$" + totalCost + " total");

    itemName = item3.code;
    itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    itemCost = parseFloat(item3.cost);
    totalCost = itemCost * itemQty;
    $("#item3").children("img").attr("src", item3.src);
    $("#item3>.itemName").text(item3.name);
    $("#item3 > .itemQty").val(itemQty);
    $("#item3 > .itemCostEa").text("$" + item3.cost + " each");
    $("#item3 > .itemCostTo").text("$" + totalCost + " total");

    itemName = item4.code;
    itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    itemCost = parseFloat(item4.cost);
    totalCost = itemCost * itemQty;
    $("#item4").children("img").attr("src", item4.src);
    $("#item4>.itemName").text(item4.name);
    $("#item4 > .itemQty").val(itemQty);
    $("#item4 > .itemCostEa").text("$" + item4.cost + " each");
    $("#item4 > .itemCostTo").text("$" + totalCost + " total");

    itemName = item5.code;
    itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    itemCost = parseFloat(item5.cost);
    totalCost = itemCost * itemQty;
    $("#item5").children("img").attr("src", item5.src);
    $("#item5>.itemName").text(item5.name);
    $("#item5 > .itemQty").val(itemQty);
    $("#item5 > .itemCostEa").text("$" + item5.cost + " each");
    $("#item5 > .itemCostTo").text("$" + totalCost + " total");

    itemName = item6.code;
    itemQty = localStorage.getItem(itemName);
    console.log(itemName + " : " + itemQty);
    if (itemQty == null) {
        itemQty = 0;
    } else {
        itemQty = parseInt(itemQty);
    }
    itemCost = parseFloat(item6.cost);
    totalCost = itemCost * itemQty;
    $("#item6").children("img").attr("src", item6.src);
    $("#item6>.itemName").text(item6.name);
    $("#item6 > .itemQty").val(itemQty);
    $("#item6 > .itemCostEa").text("$" + item6.cost + " each");
    $("#item6 > .itemCostTo").text("$" + totalCost + " total");
})