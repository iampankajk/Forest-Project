let best_seller_product = [{"name":"Delicate Facial Cleanser Kashmiri Saffron & Neem","tag":"BESTSELLER","size":"200 ml","review":"4.7/5 (140 REVIEWS)","price":"1,395.00","image":"images/8878_delicate_facial_cleanser_kashmiri_saffron_neem_200ml_fornt1.png"},
    {"name":"Soundarya Radiance Cream With 24K Gold & SPF25","tag":"BESTSELLER","size":"50 g","review":"4.7/5 (119 REVIEWS)","price":"5,400.00","image":"images/8842_soundarya_radiance_cream_50g_front.png"},
    {"name":"Hand Pounded Organic Fruit Scrub","tag":"BESTSELLER","size":"50 g","review":"4.8/5 (29 REVIEWS)","price":"1,950.00","image":"images/8854_facial_scrub_hand_pounded_fruit_scrub_50g_front.png"},
    {"name":"Hair Care Ritual For Glossy Hair","tag":"BESTSELLER","size":"600 g","review":"4.8/5 (129 REVIEWS)","price":"4,500.00","image":"images/hair_care_ritual_for_glossy_hair.png"},
    ];

    let best_product_info = document.getElementById("best_product_info");
    function show_best_seller(){
        best_seller_product.forEach(function(product){
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
            price.textContent = "₹"+product.price;

            let add_to_bag = document.createElement("button");
            add_to_bag.innerHTML="ADD TO BAG";

            div.append(img,tag,name,size,review,price,add_to_bag);

            best_product_info.append(div);


        });
    }

show_best_seller();