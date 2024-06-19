var mainSwiper = new Swiper(".mySwiper", {
    effect: "fade",
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
  document.querySelectorAll('.main-image').forEach(function(image) {
    // Check for touch support to enable mobile zoom
    if ('ontouchstart' in window) {
      image.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default behavior (scrolling) on touchstart
      });
    }
  
    // Fullscreen functionality (remains the same)
    image.addEventListener('click', function() {
      if (image.requestFullscreen) {
        image.requestFullscreen();
      } else if (image.mozRequestFullScreen) { // Firefox
        image.mozRequestFullScreen();
      } else if (image.webkitRequestFullscreen) { // Chrome, Safari, Opera
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