var mainSwiper = new Swiper(".mySwiper", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  var thumbs = document.querySelectorAll(".swiper-thumb");
  thumbs.forEach(function(thumb, index) {
    thumb.addEventListener("click", function() {
      mainSwiper.slideToLoop(index);
      updateThumbs(index);
    });
  });
  
  function updateThumbs(activeIndex) {
    thumbs.forEach(function(thumb, index) {
      if (index === activeIndex) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });
  }

    // Add fullscreen functionality
    document.querySelectorAll('.main-image').forEach(function(image) {
      image.addEventListener('click', function() {
        if (image.requestFullscreen) {
          image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { // Firefox
          image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { // Chrome, Safari and Opera
          image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { // IE/Edge
          image.msRequestFullscreen();
        }
      });
    });
  
    // Exit fullscreen when fullscreen mode is closed
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
        console.log("Exited fullscreen mode");
      }
    });