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
    jQuery('.gallery-area-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      margin: 23,
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
          items: 2,
        },
        414: {
          items: 3,
        },
        576: {
          items: 4,
        },
        992: {
          items: 7,
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

$(document).ready(function(){
  $('#regdiv').hide();
  $('#signup-btn').click(function(){
    
      $('#logindiv').hide();
      $('#regdiv').show();

  });

  $('#login-btn').click(function(){
    
      $('#logindiv').show();
      $('#regdiv').hide();

  });
});

$(document).ready(function () {
    $("#zoom_06").ezPlus({
        zoomType: "inner",
        debug: true,
        cursor: "crosshair"
    });
});

$(document).ready(function() {
  $(".owl-carousel.reverse").owlCarousel({
    items: 3,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
          items: 4,
        },
        768: {
          items: 4,
        },

      }
  });
});
jQuery(document).ready(function(){
  jQuery(".eyeslash > a").click(function(e) {
    e.preventDefault();
     var val = $(this).attr('id');
     if (val == 'active' ) {
        $(this).attr('id', '');
      } 
      else {
        $(this).attr('id', 'active');
      }
  });
});
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

const newtogglePassword = document.querySelector("#newtogglePassword");
const newpassword = document.querySelector("#newpassword");

const confirmtogglePassword = document.querySelector("#confirmtogglePassword");
const confirmpassword = document.querySelector("#confirmpassword");

togglePassword.addEventListener("click", function () {
   
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

});

newtogglePassword.addEventListener("click", function () {
   
  const type = newpassword.getAttribute("type") === "password" ? "text" : "password";
  newpassword.setAttribute("type", type);

});

confirmtogglePassword.addEventListener("click", function () {
   
  const type = confirmpassword.getAttribute("type") === "password" ? "text" : "password";
  confirmpassword.setAttribute("type", type);

});





