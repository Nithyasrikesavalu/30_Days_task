function foodOrder(name, item, callback) {
    let message = "";
    if(item === "Pizza"){
       message = "Order Accepted";
    }else{
       message = "Order Rejected";
    }
    callback(message);
}
function orderStatus(message) {
    console.log(message);
}
foodOrder("Sri", "Puff", orderStatus);