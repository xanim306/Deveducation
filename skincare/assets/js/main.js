const products=[
    {
        id:1,
        name:"Shower routine set",
        imageSrc:'./image/Rectangle_1.jpg',
        price:46,
        comment:"All-natural shampoo,conditioner food wasted to nourish your hair &skin.get $26 off."
    },
    {
        id:2,
        name:"Summer Routine Set",
        imageSrc:'./image/Rectangle_2.jpg',
        price:50,
        comment:"Best sellers that are great for travel, including in our new Lemongrass scent.get $15 off."
    },
    {
        id:3,
        name:"Dental Routine Set",
        imageSrc:'./image/Rectangle_3.jpg',
        price:36,
        comment:"Toothpaste,mouthwash,and floss designed for a healthy planet.get $9 off."
       
    },
    {
        id:4,
        name:"Hair Care Set",
        imageSrc:'./image/Rectangle_4.jpg',
        price:35,
        comment:"All natural shampoo and conditioner formulated to cleanse your hair.get $15 off."
       
    }
    
   
];

function renderProducts(products) {
    const cards = document.querySelector(".cards");
    products.forEach(data => {
        cards.innerHTML += `<div class="card">
            <img src=${data.imageSrc} alt="shower_routine" />
            <div class="card_header">
              <h3>${data.name}— ${data.price}$</h3>
            </div>
            <div class="card_main">
              <p>
                ${data.comment}
              </p>
            </div>
            <button>Quick Add</button>
          </div>`;
    });
}

renderProducts(products);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let header = document.querySelector(".section_header h3");

async function fetchText() {
    let data = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());
    header.innerText = data[1].name;    
}

fetchText();
