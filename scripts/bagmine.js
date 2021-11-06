
  // top nav bar text
var top_nav_text = [
    "Customize your cream now! Get started.",
    "Speak with certified ayurvedic doctors.Book Now!",
    "We are delivering across India and Internationally",
  ]


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

  top_nav();  //top nav bar function call to change text in very 5 seconds


// total quantity of of items in cart function
  function total_quantity() {
    let cart_total = document.getElementById("cart_total");
    let items = JSON.parse(localStorage.getItem("f_cart"));
    let total_items = 0;
    items.forEach(function (p) {
      total_items = total_items + p.qty;
    });

    cart_total.innerHTML = total_items;
  }

  total_quantity();


  // show products on bag function
  let show_count = 0;
  function show_cart() {
    if (show_count == 0) {
      document.getElementById("cart_container").style.display = "block";
      show_count++;
    } else if (show_count == 1) {
      document.getElementById("cart_container").style.display = "none";
      show_count = 0;

    }

  }
  // closing the cart function
  function close_cart() {
    document.getElementById("cart_container").style.display = "none";
  }

  let cart_items_s = JSON.parse(localStorage.getItem("f_cart"));
  let cart_show = document.getElementById("cart_show");

    // cart creation function
  function create() {
    let total_div = document.createElement("div");
    cart_show.append(total_div);
    let total = 0;
    cart_items_s.forEach(function (item) {
      let container = document.createElement("div");

      container.setAttribute("class", "wrapper");

      let img_div = document.createElement("div");
      let img = document.createElement("img");
      img.src = item.image;

      img_div.append(img);

      let text_div = document.createElement("div");
      let name = document.createElement("p");

      name.textContent = item.name;

      let price_quantity = document.createElement("p");


      let price_num = "";

      for (let i = 0; i < item.price.length; i++) {
        if (item.price[i] != ",") {
          price_num += item.price[i];
        }
      }

      total = total + parseInt(price_num) * item.qty;

      price_quantity.textContent = "QTY " + item.qty + " " + item.currency + "  " + item.price;

      if (item.currency == "$") {
        price_quantity.textContent = "QTY " + item.qty + " " + item.currency + " " + item.price;
      }
      text_div.append(name, price_quantity);

      container.append(img_div, text_div);

      cart_show.append(container);
    });

    total_div.innerHTML = "CART SUBTOTAL " + " ₹" + total;
    if (cart_items_s.length > 0) {
      if (cart_items_s[0].currency == "$") {
        total_div.innerHTML = "CART SUBTOTAL " + " $" + total;
      }
    }
    total_div.style.margin = "10px 0px 0px 10px"

  }

  create();  // calling the cart creation


// free gift item
  let freegift = {
    name: "FREE - INTENSE REPAIR HAIR CARE RITUAL WORTH ₹875",
    image: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/p/o/pouch_image__1.png",
    price: "0",
    qty: "1",

  }







  var basket_parent = document.getElementById("basket_parent")



  inpt = document.getElementById("promocode-input");

  inpt.addEventListener('focus', buttonappear)

  btn = document.getElementById("btn")
  function buttonDisappear() {
    btn.style.display = "none";

  }


  function buttonappear() {

    btn.style.display = "block";

    btn.addEventListener('click', applypromocode)

  }



  cartprod = JSON.parse(localStorage.getItem('f_cart'))

  function removeitem(prod) {

    item = JSON.parse(localStorage.getItem('f_cart'))

    for (i = 0; i < item.length; i++) {
      if (item[i].name == prod.name) { item.splice(i, 1) }
    }


    localStorage.setItem('f_cart', JSON.stringify(item))
    basket_parent.innerHTML = null;
    cartshow(item)

    window.location.reload();

  }




// increasing quantity of same product
  function plusitem(prod) {
    item = JSON.parse(localStorage.getItem('f_cart'))

    for (i = 0; i < item.length; i++) {
      if (item[i].name == prod.name) { item[i].qty = item[i].qty + 1 }
    }


    localStorage.setItem('f_cart', JSON.stringify(item))
    basket_parent.innerHTML = null;
    cartshow(item)

    window.location.reload();

  }


// decreasing quantity of same product
  function minusitem(prod) {

    item = JSON.parse(localStorage.getItem('f_cart'))

    for (i = 0; i < item.length; i++) {

      if (item[i].name == prod.name) {
        if (item[i].qty > 1) {
          item[i].qty = item[i].qty - 1
        }

      }

    }


    localStorage.setItem('f_cart', JSON.stringify(item))
    basket_parent.innerHTML = null;
    cartshow(item)


    window.location.reload();

  }





// show the cart items on cart page function  
  function cartshow(p) {

    p.forEach(prod => {

      let row = document.createElement("div");
      row.setAttribute("class", "row1");

      let img_div = document.createElement("div")
      img_div.setAttribute('id', "img-div")



      let img = document.createElement("img")
      img.src = prod.image;
      img.setAttribute('id', 'main_prod_img')
      img_div.append(img);
      img.onclick = function () {
        singleprod(prod)
      }

      let name_div = document.createElement("div")

      name_div.setAttribute('id', "name-div")
      name_div.textContent = prod.name

      let qty_div = document.createElement('div')
      qty_div.setAttribute('id', "qty-div")

      let qty_div_minus = document.createElement('div')
      qty_div_minus.setAttribute('id', "qty-div-minus")
      qty_div_minus.innerHTML = "-"
      qty_div_minus.onclick = function () {
        minusitem(prod)
      }

      let qty_div_curr = document.createElement('div')
      qty_div_curr.setAttribute('id', "qty-div-curr")
      qty_div_curr.innerHTML = prod.qty


      let qty_div_plus = document.createElement('div')
      qty_div_plus.setAttribute('id', "qty-div-plus")
      qty_div_plus.innerHTML = "+"
      qty_div_plus.onclick = function () {
        plusitem(prod)
      }

      qty_div.append(qty_div_minus, qty_div_curr, qty_div_plus);


      let price_div = document.createElement('div');
      price_div.setAttribute('id', 'price-div');
      let spn1 = document.createElement('span')
      spn1.innerHTML = "₹";

      let price_span = document.createElement('span')
      price_span.setAttribute('id', 'price-span')
      price_span.innerHTML = prod.price

      price_div.append(spn1, price_span)


      let close_btn_div = document.createElement('div');
      let close_btn = document.createElement('button');
      close_btn.setAttribute('id', 'close-btn')

      close_btn.setAttribute('class', 'btn-close')

      close_btn.onclick = function () {
        removeitem(prod)
      }

      close_btn_div.append(close_btn)

      row.append(img_div, name_div, qty_div, price_div, close_btn_div)

      basket_parent.append(row)


    });

  }





  cartshow(cartprod)




  let emptycartnotifier_p = document.getElementById("empty-cart-notice")

  if (cartprod.length == 0) {
    emptycartnotifier_p.style.display = "block";
  }

  else { emptycartnotifier_p.style.display = "none" }





  function totalcost() {
    let total = 0;
    for (i = 0; i < cartprod.length; i++) {
      total = total + cartprod[i].price.replace(',', "") * Number(cartprod[i].qty);

    }

    return total;
  }

  let totalCost = totalcost();


  let cart_items = document.getElementById("num-items-span")
  cart_items.textContent = cartprod.length;


  function costshow(totalCost) {

    let total_cost = document.getElementById("itemscost")
    total_cost.innerHTML = totalCost



    let final_total = document.getElementById("finalcost")
    finalcost.textContent = totalCost;

  }

  costshow(totalCost)



  let count = 0;
  function applypromocode() {
    let promocode = document.getElementById("promocode-input").value;

    if (promocode === "masai30" && count < 1) {
      var discountedcost = Number(totalCost) - (0.3 * Number(totalCost)).toFixed(2);
      count++;
      localStorage.setItem("promo", JSON.stringify([discountedcost]));
      costshow(discountedcost)

    } else if (count == 1) {
      alert("You already use you promocode");
    } else {
      alert("Please apply valid promocode");
    }

  }

  localStorage.setItem("promo", JSON.stringify([Number(totalCost)]));

  function singleprod(product) {

    localStorage.setItem('s_p', JSON.stringify(product))

    window.location.href = "product_single.html"
  }


  function go_checkout() {
    window.location.href = "checkout.html";
  }
