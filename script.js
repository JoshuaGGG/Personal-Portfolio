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


const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide =1;

const manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  }
  
  )

});

const repeat = function (activeClass){
  let active =document.getElementsByClassName('active');
  let i = 1;

  const repeater = () =>{
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      })
      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length ){
        return;
      }
      repeater();
    }, 10000)
  }
  repeater();
}
repeat();



