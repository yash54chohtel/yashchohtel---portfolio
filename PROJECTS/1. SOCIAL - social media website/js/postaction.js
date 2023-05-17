// -----------------------------------------------------------------------------------------

// POST SECTION FUNCTIONALITY

// like, unlike, increment, decrement
const likeNo = document.querySelector(".like-no");
const likeYes = document.querySelector(".like-yes");
const likeCount = document.querySelector("#likeCount");

likeNo.addEventListener("click", () => {
  // like unlike
  likeNo.style.display = "none";
  likeYes.style.display = "inline-block";

  // increment
  likeCount.value = parseInt(likeCount.value) + 1;
});

likeYes.addEventListener("click", () => {
  // like unlike
  likeYes.style.display = "none";
  likeNo.style.display = "inline-block";

  // decrement
  likeCount.value = parseInt(likeCount.value) - 1;
});

// save
const save = document.querySelector(".save");
save.addEventListener("click", () => {
  save.classList.toggle("fa-solid");
  save.classList.toggle("fa-regular");
  save.classList.toggle("active");
});

// load more description

document.querySelector(".more-desc").addEventListener("click", () => {
  // show full description
  document.querySelector(".to-show-hide").style.display = "inline";
  document.querySelector(".more-desc").style.display = "none";
  document.querySelector(".three-dots").style.display = "none";
  document.querySelector(".less-desc").style.display = "inline-block";
});

document.querySelector(".less-desc").addEventListener("click", () => {
  document.querySelector(".to-show-hide").style.display = "none";
  document.querySelector(".more-desc").style.display = "inline";
  document.querySelector(".three-dots").style.display = "inline";
  document.querySelector(".less-desc").style.display = "none";
});

