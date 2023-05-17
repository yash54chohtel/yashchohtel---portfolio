/* ----------| FOR DESKTOP HEADER ACTION BUTTON SUBMENUS |------------------------------ */

// HEADER ACTION BUTTON
const create = document.querySelector(".create");
const message = document.querySelector(".message");
const notification = document.querySelector(".notification");
const profile = document.querySelector(".profile");

// HEADER SUBMENU'S
const createSubMenu = document.querySelector(".create-sub-menu");
const messageSubMenu = document.querySelector(".message-sub-menu");
const notificationSubMenu = document.querySelector(".notification-sub-menu");
const profileSubMenu = document.querySelector(".profile-sub-menu")

// CREATE BUTTON ACTION
document.querySelector("#create-btn").onclick = () => {

  // BUTTON COLOR CHANGE ON CLICK
  create.classList.toggle("active");
  message.classList.remove("active");
  notification.classList.remove("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.toggle("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // searchbar hide on header submenu click
  searchBoxList.classList.remove("active");

};

// MESSAGE BUTTON ACTION
document.querySelector("#message-btn").onclick = () => {

  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.toggle("active");
  notification.classList.remove("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.toggle("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // searchbar hide on header submenu click
  searchBoxList.classList.remove("active");

};

// NOTIFICATION BUTTON ACTION
document.querySelector("#notification-btn").onclick = () => {

  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.toggle("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.toggle("active");
  profileSubMenu.classList.remove("active");

  // searchbar hide on header submenu click
  searchBoxList.classList.remove("active");

};

// PROFILE BUTTON ACTION
document.querySelector("#profile-btn").onclick = () => {

  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.toggle("active");

  // searchbar hide on header submenu click
  searchBoxList.classList.remove("active");

}


// SUBMENU SEARCHBAR AND BUTTON BACKGROUND CLOSE ON SCROLL
window.onscroll = () => {
  // color hide on scroll
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");

  // submenu hide on scroll
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // searchbar hide on scroll
  searchBoxList.classList.remove("active");
};

/* ----------| HIDE AND SHOW OF HEADER RECENT SEARCH LIST |------------------------------ */

const searchBoxList = document.querySelector(".search-list-box");

document.querySelector("#search-box").onclick = () => {
  searchBoxList.classList.add("active");

  // submenu hide on searchbox click
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // color hide on searchbox click
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");  

};

document.querySelector("#search-box-small").onclick = () => {
  searchBoxList.classList.add("active");

  // submenu hide on searchbox click
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // color hide on searchbox click
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");  

};

document.querySelector(".back-arrow").onclick = () => {
  searchBoxList.classList.remove("active");
};


/* ----------| FOR NAVIGATION IN HOME PAGE FUNCTIONALITY |------------------------------ */

const seeMoreBtn = document.querySelector("#see-more-btn");
const showAbleLink = document.querySelector(".link-to-show");
const upDownIcon = document.querySelector(".up-down-icon");
const moreLessText = document.querySelector(".more-less-text");

seeMoreBtn.addEventListener("click", () => {

  showAbleLink.classList.toggle("active");
  upDownIcon.classList.toggle("fa-angle-up");

  if (moreLessText.innerText === "See More") {
    moreLessText.innerText = "See Less";
  } else {
    moreLessText.innerText = "See More";
  }

});

// MOBILE NAV OPEN AND CLOSE

const navOpenBtn = document.querySelector("#nav-open-btn");
const navCloseBtn = document.querySelector("#nav-close-btn");
const blackOverlay = document.querySelector(".black-overlay");

navOpenBtn.addEventListener("click", () => {
  
  document.querySelector(".left-sidebar").classList.add("active");

  // overlay active
  blackOverlay.classList.add("active");

});

navCloseBtn.addEventListener("click", () => {

  document.querySelector(".left-sidebar").classList.remove("active");

  // overlay deactive
  blackOverlay.classList.remove("active");

});

blackOverlay.addEventListener("click", () => {

  document.querySelector(".left-sidebar").classList.remove("active");
  blackOverlay.classList.remove("active");

});