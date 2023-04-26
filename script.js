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
