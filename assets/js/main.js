$(function() {
  var headerBottom = $(window);
  var headTopmenu = $(".main-header");

  headerBottom.on("scroll", function() {
    if (headerBottom.scrollTop() > 0) {
      headTopmenu.addClass("menu-down");
    } else {
      headTopmenu.removeClass("menu-down");
    }
  });
});

jQuery(window).on("load", function() {
  $(".preloader").fadeOut(200);
});
