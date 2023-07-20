let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('.body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');
// openShopping.addEventListener('click', ()=>{
//   body.classList.add('active')
// })
// openShopping.addEventListener('click', ()=>{
//   body.classList.add('active');
// })
// openShopping.addEventListener('click', ()=>{
//   body.classList.remove('active');
// })
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');
window.onscroll = () =>{
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      
      if(top >= offset && top < offset + height){
        navlinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;