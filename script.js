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




let best_seller_product = [{ "name": "Delicate Facial Cleanser Kashmiri Saffron & Neem", "tag": "BESTSELLER", "size": "200 ml", "review": "4.7/5 (140 REVIEWS)", "price": "1,395.00", "image": "images/8878_delicate_facial_cleanser_kashmiri_saffron_neem_200ml_fornt1.png", "qty": 1,"description":"The secret to proper cleansing is to remove dead cells, toxins and make up, and clear clogged pores, without stripping the skin’s natural oil and moisture content. Following this philosophy, the Forest Essentials Delicate Facial Cleanser Kashmiri Saffron & Neem is an ideal gentle and natural alternative to harsh sulphate infused cleansers, and is especially designed to treat sensitive, acne prone and oily skin. This Ayurvedic facial cleanser is infused with purifying herbs including Neem and Kewda to deeply cleanse the skin, while leaving it glowing and balanced after each use." },
{ "name": "Soundarya Radiance Cream With 24K Gold & SPF25", "tag": "BESTSELLER", "size": "50 g", "review": "4.7/5 (119 REVIEWS)", "price": "5,400.00", "image": "images/8842_soundarya_radiance_cream_50g_front.png", "qty": 1, "description":"Ayurveda speaks of flawless skin as lustrous, smooth, firm and elastic, with a golden sheen. The Forest Essentials Soundarya Radiance Cream With 24K Gold & SPF25 is an exceptionally rich yet light textured face cream that incorporates a combination of precious herbs and real 24 Karat Gold, which helps to restore the firmness of the skin, giving it a natural facelift. This face moisturizer comes with SPF 25 that helps neutralize UVA and UVB radiation and protects the skin from sun damage, environmental stressors and pollution. The Soundarya Cream has been awarded as the 'Best Moisturizer' by Elle India and as the 'Best Anti-Aging Cream' by Asia Spa." },
{ "name": "Hand Pounded Organic Fruit Scrub", "tag": "BESTSELLER", "size": "50 g", "review": "4.8/5 (29 REVIEWS)", "price": "1,950.00", "image": "images/8854_facial_scrub_hand_pounded_fruit_scrub_50g_front.png", "qty": 1, "description": "The Forest Essentials Hand Pounded Organic Fruit Scrub is a nourishing face exfoliator, hand-pounded to the right consistency and blended with fresh organically grown Dates and Peaches, which are excellent antioxidants and improve the skin's elasticity. It is infused with Apricot Kernel oil which nourishes, softens and restores collagen production in the skin. This Ayurvedic face exfoliator also contains pure raw Honey, a natural antioxidant that protects the skin from sun damage, replenishes the skin's moisture, and absorbs impurities from the pores, making it an ideal exfoliating face scrub."},
{ "name": "Hair Care Ritual For Glossy Hair", "tag": "BESTSELLER", "size": "600 g", "review": "4.8/5 (129 REVIEWS)", "price": "4,500.00", "image": "images/hair_care_ritual_for_glossy_hair.png", "qty": 1, "description": "For a natural swing and voluminous hair with a lustrous sheen, use our Hair Care Ritual for Glossy Hair at least twice a week. Enriched with fresh Amla, sweet raw Honey, Brahmi, Mulethi and Japapatti, this ritual cleanses the scalp and nourishes the hair."},
];

let gifts_section = [
  { "image": "images/lek_box_2.png", "name": "FACIAL CARE SELECTION BOX ", "tag": "GIFTING", "review": "4.6/5(9 Review)", "price": "2,575.00", "qty": 1 },
  { "image": "images/mens_box.png", "name": "GENTELMEN'S BOX ", "tag": "GIFTING", "review": "5/5(1 Review)", "price": "4,075.00", "qty": 1 },

  { "image": "images/evening_ritual_box.png", "name": "EVENING RITUAL GIFT BOX ", "tag": "GIFTING", "review": "4.5/5(1 Review)   ", "price": "4,950.00", "qty": 1 },
  { "image": "images/morning_ritual_box.png", "name": "MORNING RITUAL  GIFT BOX ", "tag": "GIFTING", "review": "4.6/5(1 Review)    ", "price": "4,895.00", "qty": 1 }];

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
    price.textContent = "₹" + gifts.price;

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
  window.location.reload();

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


let show_count = 0;
function show_cart(){
  if(show_count==0){
    document.getElementById("cart_container").style.display="block";
    show_count++;
  }else if(show_count==1){
    document.getElementById("cart_container").style.display="none";
    show_count=0;

  }

}

function close_cart(){
  console.log("hello");
  document.getElementById("cart_container").style.display="none";
}

let cart_items = JSON.parse(localStorage.getItem("f_cart"));
let cart_show = document.getElementById("cart_show");
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

            console.log(item.price);

            let price_num = "";

            for(let i = 0; i<item.price.length; i++){
                if(item.price[i]!=","){
                    price_num+= item.price[i];
                }
            }

            total = total + parseInt(price_num)*item.qty;

            price_quantity.textContent = "QTY " + item.qty + " " + "  ₹" + item.price;
            text_div.append(name, price_quantity);

            container.append(img_div, text_div);

            cart_show.append(container);
        });

        total_div.innerHTML = "CART SUBTOTAL " + " ₹"+total;
        total_div.style.margin= "10px 0px 0px 10px"

    }

    create();