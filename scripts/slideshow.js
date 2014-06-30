(function() {

  "use strict";

  var currentSlide;
  var currentSlideIndex;
  var maxIndex;
  var firstSlide;
  var nextSlideTimeout;
  var slideshowActive = false;
  var mouseIn = false;

  window.initSlideshow = function() {
    var allSlides = $('.customer-quote');
    firstSlide = allSlides.eq(0);
    currentSlide = firstSlide;
    currentSlideIndex = 0;
    maxIndex = allSlides.length - 1;
    $(document).on('mouseenter', '.customer-quotes-inner', mouseEnterHandler);
    $(document).on('mouseleave', '.customer-quotes-inner', mouseLeaveHandler);
    $(document).on('click', '.customer-quotes-indicator', indicatorClickHandler)
    startSlideshow();
  }

  function mouseEnterHandler() {
    mouseIn = true;
    stopSlideshow();
  }

  function mouseLeaveHandler() {
    mouseIn = false;
    startSlideshow();
  }

  function indicatorClickHandler(e) {
    goToSlide($(this).prevAll('.customer-quotes-indicator').length);
  };

  function startSlideshow() {
    if (!slideshowActive) {
      slideshowActive = true;
      nextSlideTimeout = window.setTimeout(goToNextSlide, 6000);
    }
  }

  function stopSlideshow() {
    if (slideshowActive) {
      slideshowActive = false;
      window.clearTimeout(nextSlideTimeout);
    }
  }

  function goToNextSlide() {
    var nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex > maxIndex) {
      nextSlideIndex = 0;
    }
    goToSlide(nextSlideIndex);
  };

  function goToSlide(nextSlideIndex) {
    stopSlideshow();
    currentSlide.fadeOut({
      duration: 200,
      complete: function() {
        currentSlide = $('.customer-quote').eq(nextSlideIndex);
        currentSlideIndex = nextSlideIndex;
        $('.customer-quotes-indicator').removeClass('customer-quotes-indicator-is-active');
        currentSlide.fadeIn({
          duration: 200,
          complete: function() {
            $('.customer-quotes-indicator').eq(currentSlideIndex).addClass('customer-quotes-indicator-is-active');
            if (!mouseIn) {
              startSlideshow();
            }
          }
        });
      }
    });
  }

})();
