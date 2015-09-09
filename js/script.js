$(function() {
    $('#about').click(function(event){
        event.preventDefault();
        $("#about-overlay").show();  
    });

    $('#follow').click(function(event){
    	event.preventDefault();
    	$("#follow-overlay").show();

    });
    $('.close').click(function(event){ 
    	event.preventDefault();
    	$("#about-overlay").fadeOut();
    	$("#follow-overlay").fadeOut();    
    });


});

