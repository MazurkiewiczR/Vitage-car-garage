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

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

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

function hideMenu() {
  const desktopMenu = document.querySelector(".desktop-nav");

  desktopMenu.classList.add("hidden");
}

function showMenu() {
  const desktopMenu = document.querySelector(".desktop-nav");

  if (!desktopMenu.classList.contains("hidden")) {
    return;
  } else {
    desktopMenu.classList.remove("hidden");
  }
}
