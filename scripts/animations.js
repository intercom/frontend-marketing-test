window.animation_settings = {
  rate: 0.5,
  old_new_gap: 1
};

function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

function popIn(selector, delay) {
  var obj = $(selector);
  var r = window.animation_settings.rate;

  TweenLite.fromTo(obj, (0.15 * r), {
    scale: 0,
    opacity: 0
  }, {
    scale: 1.1,
    opacity: 1,
    delay: (delay * r)
  });
  TweenLite.fromTo(obj, (0.05 * r), {
    scale: 1.1
  }, {
    scale: 1,
    delay: ((delay + 0.15) * r)
  });
}

function runAnimation() {
  var r = window.animation_settings.rate;
  var g = window.animation_settings.old_new_gap;

  popIn('#HeroAnimationOWYourApp', 0);
  popIn('#HeroAnimationOWCRM', 0.6);
  popIn('#HeroAnimationOWHelpdesk', 0.8);
  popIn('#HeroAnimationOWUserAnalytics', 1.0);
  popIn('#HeroAnimationOWEmailMarketing', 1.2);
  TweenLite.fromTo($('#HeroAnimationOWUsers'), (0.2 * r), {opacity: 0}, {opacity: 1, delay: (2.2 * r)});
  TweenLite.fromTo($('#HeroAnimationOWArrowsFirst'), (0.2 * r), {opacity: 0}, {opacity: 1, delay: (2.8 * r)});
  TweenLite.fromTo($('#HeroAnimationOWArrowsSecond'), (0.2 * r), {opacity: 0}, {opacity: 1, delay: (3.0 * r)});
  TweenLite.fromTo($('#HeroAnimationOWArrowsThird'), (0.2 * r), {opacity: 0}, {opacity: 1, delay: (3.2 * r)});
  TweenLite.fromTo($('#HeroAnimationOWArrowsFourth'), (0.2 * r), {opacity: 0}, {opacity: 1, delay: (3.4 * r)});
  TweenLite.fromTo($('#HeroAnimationNWYou'), (0.4 * r), {opacity: 0}, {opacity: 1, delay: ((3.4 + g) * r)});
  TweenLite.fromTo($('#HeroAnimationNWYourUser'), (0.4 * r), {opacity: 0}, {opacity: 1, delay: ((3.8 + g) * r)});
  TweenLite.fromTo($('#HeroAnimationNWConnection'), (1.6 * r), {opacity: 0}, {opacity: 1, delay: ((5.0 + g) * r)});
}

$(document).ready(function () {
  window.setTimeout(runAnimation, 250);
});
