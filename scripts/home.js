$(function () {

  "use strict";

  var headerOffset = 58;
  var headerStart = 30;
  var headerIsFixed = false;
  var slideshowScrollPosition = 4000;
  var browserHeight;
  var slideshowStarted = false;
  var slideshowPresent = false;

  function getWindowSize() {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    browserHeight = (w.innerHeight || e.clientHeight || g.clientHeight);
  }

  function getQuoteScrollPos() {
    var customerQuotes = $('.customer-quotes');
    if (customerQuotes.length > 0) {
      slideshowScrollPosition = customerQuotes.offset().top;
    }
  }

  function detectSlideshow() {
    var customerQuotes = $('.customer-quotes');
    if (customerQuotes.length > 0) {
      slideshowPresent = true;
    }
  }

  getWindowSize();

  $(document).ready(function () {
    detectSlideshow();
    if (slideshowPresent) {
      getQuoteScrollPos();
    }
  });

  $(window).on('resize', function () {
    if (slideshowPresent) {
      getWindowSize();
      getQuoteScrollPos();
    }
  });

  $(window).on('scroll', function (e) {
    var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (headerIsFixed) {
      if (scrollY <= headerStart) {
        $('.fixed-header').removeClass('fixed-mode');
        headerIsFixed = false;
      }
    } else {
      if (scrollY > headerStart) {
        $('.fixed-header').addClass('fixed-mode');
        headerIsFixed = true;
      }
    }
    if (slideshowPresent && (!slideshowStarted)) {
      if ((scrollY + browserHeight) > (slideshowScrollPosition + 100)) {
        window.initSlideshow();
        slideshowStarted = true;
      }
    }
  });

  $(document).on('focus', '.signup-form input', function (e) {
    $(this).parents('.signup-form').addClass('signup-form-has-focus');
  });

  $(document).on('blur', '.signup-form input', function (e) {
    $(this).parents('.signup-form').removeClass('signup-form-has-focus');
  });

  $('[data-scroll=true]').on("click", function () {
    var id = this.href.split("#")[1],
        hash = "#" + id,
        $destination = $(hash);

    if ($destination.length) {
      $("html, body").animate({scrollTop: $destination.offset().top - headerOffset}, 500, function () {
        window.location.hash = hash;
      });
      return false;
    }
  });

  $('#Pricing').on('click', function() {
    try{
      __adroll.record_user({"adroll_segments": "use_cases"})
    } catch(err) {}
  });

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $(document).on('submit', '.ios-signup-wrapper form', function (e) {
    var email_form = $(this);
    var email_input = $('input', email_form);
    if (validateEmail(email_input.val())) {
      email_form.removeClass('signup-form-has-errors');
    } else {
      email_form.addClass('signup-form-has-errors');
      e.preventDefault();
    }
    email_input.focus();
  });

  $('link[type="image/x-icon"]').remove();

  $('.pricing-block .tooltip').tooltip();
});
