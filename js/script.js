$(function() {
    $('#about').click(function(event){
        event.preventDefault();
        $("#about-overlay").fadeIn();  
    });

    $('#follow').click(function(event){
    	event.preventDefault();
    	$("#follow-overlay").fadeIn();

    });
    $('.close').click(function(event){ 
    	event.preventDefault();
    	$("#about-overlay").fadeOut();
    	$("#follow-overlay").fadeOut();    
    });


    $('.icon1').hover(function(){    
        $('.bar-1').animate({width: 'toggle'});

        });
    $('.icon2').hover(function(){    
        $('.bar-2').animate({width: 'toggle'});

        });
    $('.icon3').hover(function(){    
        $('.bar-3').animate({width: 'toggle'});

        });



});





