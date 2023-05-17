// FOR MESSAGE SECTION TAB SWITCHER
const navLink1 = document.querySelector(".link-1");
const navLink2 = document.querySelector(".link-2");
const navLink3 = document.querySelector(".link-3");

const tab1 = document.querySelector(".tab-content-1");
const tab2 = document.querySelector(".tab-content-2");
const tab3 = document.querySelector(".tab-content-3");

document.querySelector("#nav-tab-1").addEventListener("click", () => {
  // for link color change on click
  navLink1.classList.add("active");
  navLink2.classList.remove("active");
  navLink3.classList.remove("active");

  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
});

document.querySelector("#nav-tab-2").addEventListener("click", () => {
  // for link color change on click
  navLink1.classList.remove("active");
  navLink2.classList.add("active");
  navLink3.classList.remove("active");

  tab1.classList.remove("active");
  tab2.classList.add("active");
  tab3.classList.remove("active");
});

document.querySelector("#nav-tab-3").addEventListener("click", () => {
  // for link color change on click
  navLink1.classList.remove("active");
  navLink2.classList.remove("active");
  navLink3.classList.add("active");

  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab3.classList.add("active");
});
