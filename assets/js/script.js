// loader
jQuery(document).ready(function() {
     setTimeout(() => {
      jQuery('#loading').fadeOut('slow'), function() {
        $(this).remove();
      };
    },2000);
});
// scroll-nav-start
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
        $(".navbar").addClass("fixed");
        $(".navbar").addClass("shadow gradient-two bg-body");
        $(".container-fluid").removeClass("gradient-two");
    } else {
        $(".navbar").removeClass("fixed");
        $(".navbar").addClass("shadow gradient-two bg-body");
    }
});
// scroll-nav-end
// AOS initialized
 AOS.init();
$(window).on("scroll",function(){
  AOS.init({
    offset:300,
  });
})