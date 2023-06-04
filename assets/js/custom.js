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
    jQuery('.arrival-carousel-desktop').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 63,
      nav: false,
      dots: true,
      smartSpeed: 900,
      responsiveClass: true,
      autoplayTimeout: 5000,
      fallbackEasing: 'easing',
      transitionStyle: "fade",
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 4,
        },
        992: {
          items: 5,
        },
      }
    })
});
jQuery(document).ready(function() {
  jQuery('.arrival-carousel-mobile').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 17,
    nav: false,
    dots: true,
    smartSpeed: 900,
    responsiveClass: true,
    autoplayTimeout: 5000,
    fallbackEasing: 'easing',
    transitionStyle: "fade",
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 4,
      },
      576: {
        items: 5,
      },
      768: {
        items: 6,
      },
      768: {
        items: 7,
      },
    }
  })
});
jQuery(document).ready(function() {
    jQuery('.gift-area-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayTimeout: 5000,
        fallbackEasing: 'easing',
        transitionStyle: "fade",
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        }
    })
});

jQuery(document).ready(function() {
    jQuery('.filter-area.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayTimeout: 5000,
        fallbackEasing: 'easing',
        transitionStyle: "fade",
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        }
    })
});

jQuery(document).ready(function(){
  jQuery(".dropdown-toggle-btn > a").click(function(e) {
    e.preventDefault();
     
     var val = $(this).attr('id');

     //alert(val);

     if (val == 'active' ) {
          $(".toggle-menu").hide();
          $(this).attr('id', '');
      } 
      else {
          $(".toggle-menu").show();
          $('.dropdown-toggle-btn > a').removeAttr('id');
          $(this).attr('id', 'active');
      }
  });
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 120) {
        $('.sticky').addClass('fixed-header');
    }
    else {
        $('.sticky').removeClass('fixed-header');
    }

    if ($(window).scrollTop() >= 400) {
       $('.sticky').removeClass('fixed-header');
       $('.filter-top').addClass('fixed-header');
       $('.filter-mobile').addClass('fixed-header');
    }
    else {
        $('.filter-top').removeClass('fixed-header');
        $('.filter-mobile').removeClass('fixed-header');
    }
});

// $(".img_product_container")
//   // tile mouse actions
//   .on("mouseover", function() {
//     $(this)
//       .children(".img_product")
//       .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
//   })
//   .on("mouseout", function() {
//     $(this)
//       .children(".img_product")
//       .css({ transform: "scale(1)" });
//   })
//   .on("mousemove", function(e) {
//     $(this)
//       .children(".img_product")
//       .css({
//         "transform-origin":
//           ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
//           "% " +
//           ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
//           "%"
//       });
//   });

$(function () {

    set_($('#three-max'), 3);  //return 3 maximum digites
    set_($('#four-max'), 4);    //return 6 maximum digites
    set_($('#five-max'), 5);  //return 9 maximum digites
    set_($('#five'), 5);  //return 9 maximum digites

    function set_(_this, max) {
        var block = _this.parent();

        block.find(".increase").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && (currentVal + 1) <= max) {
                _this.val(currentVal + 1);
            }
        });

        block.find(".decrease").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && currentVal != 0) {
                _this.val(currentVal - 1);
            }
        });
    }
});



