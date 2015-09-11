$(function(){
  var clicks1 = 0;
      clicks2 = 0;
  var screenWidth = $('.carousel').width();
  $('.slide').width(screenWidth/2);


  var numOfSlides = $('.slide').size();
  $('.tray').width(numOfSlides * (screenWidth/2) + (screenWidth/2));
  $('.tray').animate({right: screenWidth/4}, 0);
//////////reset width of elements when resize window////////

  $(window).resize(function(){
    screenWidth = $('.carousel').width();
    $('.slide').width(screenWidth/2);
    $('.tray').width(numOfSlides * (screenWidth/2) + (screenWidth/2));
    $('.tray').animate({right: screenWidth/4}, 0);


  });

////////click function////////////

  $('.next').click(function(){

  clicks1 += 1;
    $('.tray').animate({right: (screenWidth * 0.5) * clicks1 + (screenWidth/4)}, 200);
    var cloneSlide = $('.slide:first').clone();
    $('.slide:first').remove();
    $('.slide:last').after(cloneSlide);
    $('.slide').css({left: (screenWidth/2) * clicks1});
    
  });

  $('.prev').click(function(){
    clicks2 += 1;

    $('.tray').animate({left: (screenWidth * 0.5) * clicks2 - (screenWidth/4)}, 200);
    var cloneSlide = $('.slide:last').clone();
    $('.slide:last').remove();
    $('.slide:first').before(cloneSlide);
    $('.slide').css({right: (screenWidth/2) * clicks2});
  });




















});


































