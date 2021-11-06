var top_nav_text = [
    "Customize your cream now! Get started.",
    "Speak with certified ayurvedic doctors.Book Now!",
    "We are delivering across India and Internationally",
];
function top_nav() {
    let nav_text = document.getElementById("top_nav_bar");
    nav_text.textContent = "Customize your cream now! Get started."

    var count = 0;
    count++
    setInterval(() => {
        if (count == top_nav_text.length) { count = 0 }
        nav_text.textContent = top_nav_text[count]

        count++
    }, 5000);
}
top_nav();

let orders = document.getElementById("order_details");

let order_items = JSON.parse(localStorage.getItem("f_cart"));


function order_summary() {
    let total_amount = 0;
    order_items.forEach(function (item) {

        let price_num = "";
        for (let i = 0; i < item.price.length; i++) {
            if (item.price[i] != ",") {
                price_num += item.price[i];
            }
        }
        total_amount = total_amount + Number(price_num) * item.qty;

    });
    if (JSON.parse(localStorage.getItem("promo")) != null) {
        total_amount = JSON.parse(localStorage.getItem("promo"));
        total_amount = total_amount[0];
    }
    let item_box = document.createElement("p");
    item_box.textContent = order_items.length + " items " + order_items[0].currency + total_amount;
    let delivery_box = document.createElement("p");
    delivery_box.textContent = "Delivery(Fixed rate)  0.00";
    let total_box = document.createElement("p");
    total_box.textContent = "Total " + order_items[0].currency + total_amount;
    let hr = document.createElement("hr");
    orders.append(item_box, delivery_box, hr, total_box);
}



order_summary();


function checkout(e) {
    e.preventDefault();
    window.location.href = "payment.html";
}