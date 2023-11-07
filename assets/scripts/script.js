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

/* const parallaxScroll = (parallaxClass, scrollSpeed) => {
  const imageParallax = document.querySelector(`.${parallaxClass}`);

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const translateY = -scrollValue * scrollSpeed;

    imageParallax.style.transform = `translateY(${translateY}px)`;
    const containerHeight = window.getComputedStyle(imageParallax).height;
    imageParallax.style.height =
      Number(containerHeight.slice(0, -2)) - translateY + "px";
    if (imageParallax.style.height > "5000px") {
      imageParallax.style.height = "4000px";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    return;
  }

  parallaxScroll("parallax", 0.1);
}); */
