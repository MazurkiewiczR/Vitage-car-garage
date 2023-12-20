$(".img-parallax").each(function () {
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg() {
    var speed = img.data("speed");
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();

    // The next pixel to show on screen
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = (winBottom - imgY) * speed;
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
    }
    img.css({
      top: imgPercent + "%",
      transform: "translate(-50%, -" + imgPercent + "%)",
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    },
    ready: function () {
      parallaxImg();
    },
  });
});

function addDataAttribute() {
  const blockElements = document.querySelectorAll(".img-parallax");

  if (window.innerWidth > 768) {
    blockElements.forEach((element) => {
      element.setAttribute("data-speed", "-0.75");
    });
  } else {
    blockElements.forEach((element) => {
      element.removeAttribute("data-speed");
    });
  }
}

addDataAttribute();

window.addEventListener("resize", addDataAttribute);

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
  });
});

// IMAGE LOADING

const blurredSections = document.querySelectorAll(".blurred-img");

blurredSections.forEach((section) => {
  const img = section.querySelector("img");

  function loaded() {
    img.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});

//GALLERY

// Open the Modal and hide Menu

function openModalAndHideMenu() {
  const modal = document.getElementById("myModal");
  const desktopMenu = document.querySelector(".desktop-nav");

  modal.style.display = modal.style.display === "block" ? "none" : "block";

  desktopMenu.classList.add("hidden");
}
const galleryImages = document.querySelectorAll(".open-modal");
galleryImages.forEach(function (galleryImage) {
  galleryImage.addEventListener("click", openModalAndHideMenu);
});

// Close the Modal

function closeModalAndShowMenu() {
  const modal = document.getElementById("myModal");
  const desktopMenu = document.querySelector(".desktop-nav");

  modal.style.display = modal.style.display === "none" ? "block" : "none";

  desktopMenu.classList.remove("hidden");
}
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", closeModalAndShowMenu);

//slides

const imageContainers = document.querySelectorAll(".hover-text");

imageContainers.forEach((container, index) => {
  container.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

let slideIndex = 1;
showSlides(slideIndex);

document.querySelectorAll(".prev").forEach((prevButton) => {
  prevButton.addEventListener("click", () => changeSlide(-1));
});
document.querySelectorAll(".next").forEach((nextButton) => {
  nextButton.addEventListener("click", () => changeSlide(1));
});

// Next/previous controls
function changeSlide(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
