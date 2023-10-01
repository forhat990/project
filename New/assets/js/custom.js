$(document).ready(function() {
    jQuery("#seller-area-scroll").niceScroll({
      cursorborder:"",
      cursorcolor:"#ff7833"
    }); 
});
jQuery(document).ready(function(){
  jQuery('#slider').flexslider({
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