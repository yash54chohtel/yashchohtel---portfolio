/* --------------------:| NAVIGATION STYLE CHANGE ON SCROLL |:-------------------- */

window.onscroll = () => {
  if (window.scrollY > 40) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

/* --------------------:| NAVIGATION OPEN AND CLOSE |:--------------------------- */

const navigation = document.querySelector(".navigation");
const navOpenBtn = document.querySelector(".nav-open-button");
const navCloseBtn = document.querySelector(".nav-close-button");
const navOpenOverlay = document.querySelector(".nav-open-overlay");

navOpenBtn.addEventListener("click", () => {
  navigation.classList.add("active");
  navOpenOverlay.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
  navOpenOverlay.classList.remove("active");
});

navOpenOverlay.addEventListener("click", () => {
  navigation.classList.remove("active");
  navOpenOverlay.classList.remove("active");
});

/* --------------------:| NAVIGATION CLOSE ON LINK CLICK |:----------------------- */

const navLinks = document.querySelectorAll(".nav-list");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navigation.classList.remove("active");
    navOpenOverlay.classList.remove("active");
  });
}

/* --------------------:| PROJECT SECTION SLIDER |:-------------------------------- */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});

/* --------------------:| ANIMATE ON SCROLL |:---------------------------------- */

const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'1500',
  delay:'400'
})


sr.reveal('.animate-text-content')
sr.reveal('.animate-img-content', {delay: 700, origin:"bottom"})
sr.reveal('.animate-card',{interval:100})
