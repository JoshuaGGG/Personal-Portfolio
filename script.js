//toggle menu//
var navLinks = document.getElementById("nav-links");

function hideMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.right = "-200px";
  }
  
  function showMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.right = "0";
  }

const logo = document.querySelector(".logo");

logo.addEventListener("click", () =>{
    logo.classList.toggle("rotate");
});
logo.addEventListener("mouseenter", () =>{
    logo.classList.add("bounce");
});
logo.addEventListener("animationend", () =>{
    logo.classList.remove("bounce");
});

const swiper = new Swiper('.swiper', {
  autoplay:{
    delay:3000,
    disableOnInjection:false,
  },
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


