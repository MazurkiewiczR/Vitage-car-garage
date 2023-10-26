document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  const imageParallax = document.querySelector(".image-parallax");
  const imageContainer = document.querySelector(".image-container");
  const imageText = document.querySelector(".image-text");

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const translateY = -scrollValue * 0.4;

    imageParallax.style.transform = `translateY(${translateY}px)`;
    const containerHeight = window.getComputedStyle(imageParallax).height;
    imageParallax.style.height =
      Number(containerHeight.slice(0, -2)) - translateY + "px";
    if (imageParallax.style.height > "10000px") {
      imageParallax.style.height = "4000px";
    }
  });
});
