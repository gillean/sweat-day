$(function(){

  
//var active=$('.slide.active').find('video');


$('.prev,.next').click(function(){
  playActive();
  console.log("runs the function");
})

function playActive(){
  $('video').each(function(){
    if($(this).parent().hasClass("active"))
    this.muted=false;
    else
    this.muted=true;
  });
}

  

});