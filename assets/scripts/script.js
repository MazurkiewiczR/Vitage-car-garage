document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
  });
});
