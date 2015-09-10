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


    $('a .icon1').click(function(event){
        event.preventDefault();
        $('.bar-1').slideToggle();

        });

    });

});



