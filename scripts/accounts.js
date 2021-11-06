
// setting default user
if (localStorage.getItem("f_users") === null) {
    localStorage.setItem("f_users", JSON.stringify([{ "email": "user@gmail.com", "password": "default" }]));
  }

// Login function
  function signin(e) {
    e.preventDefault();

    let signin_form = document.getElementById("signin_form");
    let email = signin_form.email.value;
    let password = signin_form.password.value;
    let users_data = JSON.parse(localStorage.getItem("f_users"));
    let flag = true;
    users_data.forEach(function (user) {

      if (user.email == email && user.password == password) {
        flag = false;
        window.location.href = "index.html";
      }

    });
    if (flag) {
      window.location.href = "create_account.html";
    }
  }


  // top nav bar text
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

  top_nav(); //top nav bar function call to change text in very 5 seconds



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

  let cart_items = JSON.parse(localStorage.getItem("f_cart"));
  let cart_show = document.getElementById("cart_show");

  // cart creation function
  function create() {
    let total_div = document.createElement("div");
    cart_show.append(total_div);
    let total = 0;
    cart_items.forEach(function (item) {
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

      price_quantity.textContent = "QTY " + item.qty + " " + "  ₹" + item.price;
      text_div.append(name, price_quantity);

      container.append(img_div, text_div);

      cart_show.append(container);
    });

    total_div.innerHTML = "CART SUBTOTAL " + " ₹" + total;
    total_div.style.margin = "10px 0px 0px 10px"

  }

  create(); // calling the cart creation


