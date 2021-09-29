var top_nav_text = [
  "Customize your cream now! Get started.",
  "Speak with certified ayurvedic doctors.Book Now!",
  "We are delivering across India and Internationally",
]


function cart() {
  console.log("hello");
}

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


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});




let best_seller_product = [{ "name": "Delicate Facial Cleanser Kashmiri Saffron & Neem", "tag": "BESTSELLER", "size": "200 ml", "review": "4.7/5 (140 REVIEWS)", "price": "1,395.00", "image": "images/8878_delicate_facial_cleanser_kashmiri_saffron_neem_200ml_fornt1.png", "qty": 1 },
{ "name": "Soundarya Radiance Cream With 24K Gold & SPF25", "tag": "BESTSELLER", "size": "50 g", "review": "4.7/5 (119 REVIEWS)", "price": "5,400.00", "image": "images/8842_soundarya_radiance_cream_50g_front.png", "qty": 1 },
{ "name": "Hand Pounded Organic Fruit Scrub", "tag": "BESTSELLER", "size": "50 g", "review": "4.8/5 (29 REVIEWS)", "price": "1,950.00", "image": "images/8854_facial_scrub_hand_pounded_fruit_scrub_50g_front.png", "qty": 1 },
{ "name": "Hair Care Ritual For Glossy Hair", "tag": "BESTSELLER", "size": "600 g", "review": "4.8/5 (129 REVIEWS)", "price": "4,500.00", "image": "images/hair_care_ritual_for_glossy_hair.png", "qty": 1 },
];

let gifts_section = [
  { "image": "images/lek_box_2.png", "name": "FACIAL CARE SELECTION BOX ", "tag": "GIFTING", "review": "4.6/5(9 Review)", "price": "₹2,575.00", "qty": 1 },
  { "image": "images/mens_box.png", "name": "GENTELMEN'S BOX ", "tag": "GIFTING", "review": "5/5(1 Review)", "price": "₹4,075.00", "qty": 1 },

  { "image": "images/evening_ritual_box.png", "name": "EVENING RITUAL GIFT BOX ", "tag": "GIFTING", "review": "4.5/5(1 Review)   ", "price": "₹4,950.00", "qty": 1 },
  { "image": "images/morning_ritual_box.png", "name": "MORNING RITUAL  GIFT BOX ", "tag": "GIFTING", "review": "4.6/5(1 Review)    ", "price": "₹4,895.00", "qty": 1 }];

let best_product_info = document.getElementById("best_product_info");
function show_best_seller(best_seller_product) {
  best_seller_product.forEach(function (product) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.image;

    let name = document.createElement("p");
    name.textContent = product.name;

    let tag = document.createElement("p");
    tag.textContent = product.tag;

    let size = document.createElement("p");
    size.textContent = product.size;

    let review = document.createElement("p");
    review.textContent = product.review;

    let price = document.createElement("p");
    price.textContent = "₹" + product.price;

    let add_to_bag = document.createElement("button");
    add_to_bag.innerHTML = "ADD TO BAG";

    add_to_bag.onclick = function () {
      add_to_cart(product);
    }

    div.append(img, tag, name, size, review, price, add_to_bag);

    best_product_info.append(div);


  });
}

show_best_seller(best_seller_product);

let gifts_info = document.getElementById("gifts_info");
function show_gifts() {
  gifts_section.forEach(function (gifts) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = gifts.image;

    let name = document.createElement("p");
    name.textContent = gifts.name;

    let tag = document.createElement("p");
    tag.textContent = gifts.tag;


    let review = document.createElement("p");
    review.textContent = gifts.review;

    let price = document.createElement("p");
    price.textContent = gifts.price;

    let add_to_bag = document.createElement("button");
    add_to_bag.innerHTML = "ADD TO BAG";

    add_to_bag.onclick = function () {
      add_to_cart(gifts);
    }

    div.append(img, tag, name, review, price, add_to_bag);

    gifts_info.append(div);


  });

}

show_gifts();

if (localStorage.getItem("f_cart") == null) {
  localStorage.setItem("f_cart", JSON.stringify([]));
}

function add_to_cart(p) {

  let products_cart = JSON.parse(localStorage.getItem("f_cart"));

  let Incart = true;
  products_cart.forEach(function (el) {
    if (el.name == p.name) {
      el.qty++;
      localStorage.setItem("f_cart", JSON.stringify(products_cart));
      Incart = false;
    }
  });
  if (Incart) {
    products_cart.push(p);

    localStorage.setItem("f_cart", JSON.stringify(products_cart));
  }

  total_quantity();

}


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