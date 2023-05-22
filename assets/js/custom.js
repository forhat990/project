jQuery(document).ready(function() {
	jQuery("body").on('click',".dropdown-menu",function (e){
		e.stopPropagation();
	}); 
});

$(document).ready(function() {
    jQuery(".scroll").niceScroll({
      cursorborder:"",
      cursorcolor:"#972A25"
    }); 
});

jQuery(document).ready(function(){
  jQuery('#home-slider').flexslider({
      animation: "slide",
      controlNav: true, 
      directionNav: true,
      slideshowSpeed: 5000,
      animationSpeed: 2000,
      start: function(slider){
          jQuery('body').removeClass('loading');
      }
  });
});

jQuery(document).ready(function() {
    jQuery('.arrival-area-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 63,
        nav: false,
        dots: true,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayTimeout: 3000,
        fallbackEasing: 'easing',
        transitionStyle: "fade",
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 4,
          },
          1200: {
            items: 5,
          },
        }
    })
});
jQuery(document).ready(function() {
    jQuery('.gift-area-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 63,
        nav: false,
        dots: false,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayTimeout: 3000,
        fallbackEasing: 'easing',
        transitionStyle: "fade",
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 4,
          },
        }
    })
});

