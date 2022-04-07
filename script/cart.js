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
    $("#item1:nth-child(1)").attr("src", item1.src);
})