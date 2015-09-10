 /*var numOfSlides = $('.slide').size(),
      slideWidth = $('.slide').width(),
      slidePos = 0,
      speed =600,
      animateSlide = function(self){
        var distance = slidePos * slideWidth;
        $(self).parent().find('.tray').animate({right: distance},speed);
      };

  $('.tray').width(numOfSlides * slideWidth);

  $('.next').click(function(event){
    event.preventDefault();
    if (slidePos < numOfSlides -1){
      slidePos +=1;
    } else {
      slidePos = 0;

    }
    animateSlide(this);
  });

  $('.prev').click(function(event){
    event.preventDefault();
    if (slidePos > 0) {
      slidePos -=1;
    } else {
      slidePos = numOfSlides - 1;
    }
    animateSlide(this);

  });
*/



  /*$('.carousel first-child').before($
    ('.carousel last-child'));

  $('.next').click(function(){

    var slideWidth = $('.carousel .tray .slide').outerWidth() + 10;

    //left indent
    var left_indent = parseInt($('.carousel .tray').css('left'))
    + slideWidth;

    $('.carousel .tray').animate({'left' : left_indent}
    , {queue:false, duration:500}, function(){

      $('.carousel:eq(3)').after($'.carousel:eq(0)'));
      $('.carousel').css({'left' : '210px'});


    });
*/

$(function(){

  var clicks = 1,
      initialDistance = 25,
      distance = 50,
      speed = 600,
      slides = 1;

    function animateTray(dist){
      $('.tray').animate({'right': dist * clicks + '%'}, speed);
    }
    var length = $('.tray').length,
        slide = $('.slide').length;

    function addtoTray(event){
      $('.tray').after();
      $('slide:last');

    };

    animateTray(initialDistance);

    $('.next').click(function(){
      clicks += 1;

      var $cloneSlide = $('.tray .slide:last').clone();
      $('slide:last').remove();
      $('slide:first').before($cloneSlide);
  
    animateTray(distance);
    });

});



































