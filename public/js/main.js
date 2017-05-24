console.log('main.js');

var UI = {
  setEvenListeners: function() {

    //Click Events
    $('#c2go-icon').click(function(){
      UI.hideDivs();
      $('#c2go-div').fadeIn();
      console.log("Click!");
    });
    $('#nitpic-icon').click(function(){
      UI.hideDivs();
      $('#nitpic-div').fadeIn();
      console.log("Click!");
    });
    $('#store-icon').click(function(){
      UI.hideDivs();
      $('#store-div').fadeIn();
      console.log("Click!");
    });
    $('#dog-icon').click(function(){
      UI.hideDivs();
      $('#dog-div').fadeIn();
      console.log("Click!");
    });
    //Hover Events
    // $('#c2go-icon').hover(
    //   function() {
    //     $('#c2go-label').show();
    //     $('.project-div').css({marginTop: "-11px"});
    //   },
    //   function() {
    //     $('#c2go-label').hide();
    //     $('.project-div').css({marginTop: "25px"});
    //   }
    // );
    // $('#nitpic-icon').hover(
    //   function() {
    //     $('#nitpic-label').show();
    //     $('.project-div').css({marginTop: "-11px"});
    //   },
    //   function() {
    //     $('#nitpic-label').hide();
    //     $('.project-div').css({marginTop: "25px"});
    //   }
    // );
    // $('#store-icon').hover(
    //   function(){
    //     $('#store-label').show();
    //     $('.project-div').css({marginTop: "-11px"});
    //   },
    //   function() {
    //     $('#store-label').hide();
    //     $('.project-div').css({marginTop: "25px"});
    //   }
    // );
    // $('#dog-icon').hover(
    //   function(){
    //     $('#dog-label').show();
    //     $('.project-div').css({marginTop: "-11px"});
    //   },
    //   function() {
    //     $('#dog-label').hide();
    //     $('.project-div').css({marginTop: "25px"});
    //   }
    // );
  },

  // hideLabels: function() {
  //   $('#c2go-label').hide();
  //   $('#nitpic-label').hide();
  //   $('#store-label').hide();
  //   $('#dog-label').hide();
  // },

  hideDivs: function() {
    $('#c2go-div').hide();
    $('#nitpic-div').hide();
    $('#store-div').hide();
    $('#dog-div').hide();
  }
}

//Initial Events

$(document).ready(function() {

  // var $ = jQuery.noConflict();
  UI.setEvenListeners();
  UI.hideDivs();
  // UI.hideLabels();
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $('img.project-image').each(function(){
      var $this = $(this);
      var title = $this.attr('title');
      var src = $this.attr('src');
      var a = $('<a class="fancybox"></a>').attr('href', src);
      $this.wrap(a);
  });
  $("a.fancybox").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : true,
    autoSize  : true,
    closeClick  : true,
    openEffect  : 'fade',
    closeEffect : 'fade'
  });

});
