(function($) {
  "use strict";
  var headerBottom = $(window);
  var headTopmenu = $(".main-header");

  headerBottom.on("scroll", function() {
    if (headerBottom.scrollTop() > 150) {
      headTopmenu.addClass("menu-down");
    } else {
      headTopmenu.removeClass("menu-down");
    }
  });

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 70
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  Smoth Scroll
   * ----------------------------------------------------------------------------------------
   */

  $("a.smoth-scroll").on("click", function(e) {
    var menu = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(menu.attr("href")).offset().top - 50
        },
        1000
      );
    e.preventDefault();
  });
})(jQuery);

jQuery(window).on("load", function() {
  $(".preloader").fadeOut(200);
});
