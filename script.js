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
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){
  clearMessages();
  let errorFlag = false;

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name is required";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if(message.value.length < 1){
    errorNodes[2].innerText = "Please enter a Message";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if(!errorFlag){
    success.innerText = "Success!";
  }
}
function clearMessages(){
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes [i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}
function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

const textArr = ["Joshua", "Yehoshua", "Josué", "Yoshua"];
let count = 0;

function flip() {
  const flipContainer = document.getElementById("flip-text");
  flipContainer.classList.remove("flip");
  void flipContainer.offsetWidth;
  flipContainer.setAttribute("data-text", textArr[count]);
  count++;
  if (count >= textArr.length) {
    count = 0;
  }
  flipContainer.classList.add("flip");
}

setInterval(flip, 2000);



