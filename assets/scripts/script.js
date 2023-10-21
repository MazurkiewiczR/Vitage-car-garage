document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
  });
});
