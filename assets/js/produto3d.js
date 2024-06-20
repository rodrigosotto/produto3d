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

      document.addEventListener('fullscreenchange', function() {
          var fullscreenElement = document.fullscreenElement ||
                                  document.webkitFullscreenElement ||
                                  document.mozFullScreenElement ||
                                  document.msFullscreenElement;

          var images = document.querySelectorAll('.main-image');
          images.forEach(function(image) {
              if (image === fullscreenElement) {
                  enableZoomAndPan(image);
              } else {
                  disableZoomAndPan(image);
              }
          });
      });

      function enableZoomAndPan(image) {
          image.classList.add('fullscreen-image');
          image.addEventListener('touchstart', handleTouchStart, false);
          image.addEventListener('touchmove', handleTouchMove, false);
      }

      function disableZoomAndPan(image) {
          image.classList.remove('fullscreen-image');
          image.removeEventListener('touchstart', handleTouchStart, false);
          image.removeEventListener('touchmove', handleTouchMove, false);
      }

      // Variables to keep track of touch points for zoom and pan
      var initialDistance = 0;
      var initialScale = 1;
      var initialX = 0;
      var initialY = 0;

      function handleTouchStart(event) {
          if (event.touches.length === 1) {
              initialX = event.touches[0].clientX;
              initialY = event.touches[0].clientY;
          } else if (event.touches.length === 2) {
              initialDistance = getDistance(event.touches[0], event.touches[1]);
              initialScale = parseFloat(event.target.style.transform.replace(/[^0-9.]/g, '')) || 1;
          }
      }

      function handleTouchMove(event) {
          if (event.touches.length === 1) {
              var currentX = event.touches[0].clientX;
              var currentY = event.touches[0].clientY;
              var deltaX = currentX - initialX;
              var deltaY = currentY - initialY;
              event.target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
              event.preventDefault();
          } else if (event.touches.length === 2) {
              var newDistance = getDistance(event.touches[0], event.touches[1]);
              var scale = initialScale * (newDistance / initialDistance);
              event.target.style.transform = `scale(${scale})`;
              event.preventDefault();
          }
      }

      function getDistance(touch1, touch2) {
          var dx = touch1.pageX - touch2.pageX;
          var dy = touch1.pageY - touch2.pageY;
          return Math.sqrt(dx * dx + dy * dy);
      }
  
    // Exit fullscreen when fullscreen mode is closed
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
        console.log("Exited fullscreen mode");
      }
    });