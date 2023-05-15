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

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".text-box", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".details", { opacity: 0, y: "50px" }, { opacity: 1, y: 0, duration: 1.5 });

window.onload = function () {
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  lax.addElements(".details", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1, 0],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [50, 0, -50],
      ],
    },
  });
  lax.addElements(".portfolio-projects", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1, 0],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [50, 0, -50],
      ],
    },
  });
  lax.addElements(".hobbies", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1, 0],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [50, 0, -50],
      ],
    },
  });

  lax.addElements(".postsecondaryplan", {
    scrollY: {
      rotateZ: [
        ["elInY", "elCenterY", "elOutY"],
        [-20, 0, 20],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 100],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1.2, 0],
      ],
    },
  });
  lax.addElements(".about-intro", {
    scrollY: {
      rotateZ: [
        ["elInY", "elCenterY", "elOutY"],
        [-20, 0, 20],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 100],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1.2, 0],
      ],
    },
  });
  lax.addElements(".letter", {
    scrollY: {
      rotateZ: [
        ["elInY", "elCenterY", "elOutY"],
        [-500, 0, 500],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [-400, 0, 400],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1.2, 0],
      ],
    },
  });
  lax.addElements(".resume", {
    scrollY: {
      rotateZ: [
        ["elInY", "elCenterY", "elOutY"],
        [-500, 0, 500],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [-1000, 0, 1000],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1.2, 0],
      ],
    },
  });
  lax.addElements(".white-container", {
    scrollY: {
      rotateZ: [
        ["elInY", "elCenterY", "elOutY"],
        [-20, 0, 20],
      ],
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 100],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1.2, 0],
      ],
    },
  });
};
  lax.addElements(".portfolio-container", {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 1, 0],
      ],
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [50, 0, -50],
      ],
    },
  });

function sendFormData() {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const successMessage = document.querySelector("#success");

  const formData = new FormData();
  formData.append("name", nameInput.value.trim());
  formData.append("email", emailInput.value.trim());
  formData.append("message", messageInput.value.trim());

  fetch("server_script.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      sendEmail();
      successMessage.innerText = "Success!";
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function sendEmail() {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const subject = "Contact Form Submission";
  const body = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`;

  const mailtoLink = `mailto:joshua.guzman@student.cart.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

function clearMessages() {
  const errorNodes = document.querySelectorAll(".error");
  const inputs = document.querySelectorAll("input, textarea");
  const successMessage = document.querySelector("#success");

  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }

  inputs.forEach(input => input.classList.remove("error-border"));

  successMessage.innerText = "";
}

function emailIsValid(email) {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
function showContent(id) {
  document.getElementById(id + '-content').style.display = 'block';
}

function hideContent(id) {
  document.getElementById(id + '-content').style.display = 'none';
}