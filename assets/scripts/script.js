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
      element.setAttribute("data-speed", "1");
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
