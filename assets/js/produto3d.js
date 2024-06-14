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

    // Add fullscreen functionality
    document.querySelectorAll('.main-image').forEach(function(image) {
      image.addEventListener('click', function() {
        if (image.requestFullscreen) {
          console.log('funciona ou nao');
          image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { // Firefox
          console.log('funciona ou nao');
          image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { // Chrome, Safari and Opera
          console.log('funciona ou nao');
          image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { // IE/Edge
          console.log('funciona ou nao');
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