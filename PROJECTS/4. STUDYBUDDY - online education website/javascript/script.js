/* --------------------:| NAVIGATION STYLE CHANGE ON SCROLL |:-------------------- */

window.onscroll = () => {
  if (window.scrollY > 10) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

/* --------------------:| NAVIGATION OPEN AND CLOSE |:--------------------------- */

const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const navigationMenu = document.querySelector(".navigation");
const blurOverlay = document.querySelector(".blur-overlay");

openMenuBtn.addEventListener("click", function () {
  // nav open
  navigationMenu.classList.add("active");
  // overlay active
  blurOverlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", function () {
  // nav close
  navigationMenu.classList.remove("active");
  // overlay active
  blurOverlay.classList.remove("active");
});

blurOverlay.addEventListener("click", function () {
  // nav close
  navigationMenu.classList.remove("active");
  // overlay active
  blurOverlay.classList.remove("active");
});

/* --------------------:| NAVIGATION CLOSE ON NAB LINKS CLICK |:--------------------------- */

const navLinks = document.querySelectorAll(".seprate-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    // nav close
    navigationMenu.classList.remove("active");
    // overlay active
    blurOverlay.classList.remove("active");
  });
}

/* --------------------:| LOGIN FORM CLOSE AND OPEN |:----------------------------------- */

const loginForm = document.querySelector(".login-container");
const formCloseBtn = document.querySelector(".form-close-btn");
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  // form open
  loginForm.classList.add("active");
  // nav close
  navigationMenu.classList.remove("active");
  // overlay active
  blurOverlay.classList.remove("active");
});

formCloseBtn.addEventListener("click", () => {
  // form colose
  loginForm.classList.remove("active");
  // nav close
  navigationMenu.classList.remove("active");
  // overlay active
  blurOverlay.classList.remove("active");
});
