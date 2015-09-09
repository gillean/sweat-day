$(function(){
 
  var numOfSlides = $('.slide').size(),
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

  var video = document.getElementById("back");
  //video.muted= true;



});