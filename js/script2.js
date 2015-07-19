




var mainContent = function(target,title,hiddenContent){

    $(target).mouseenter(function() {
    	if (Modernizr.mq('(min-width: 767px)')) {
            $(title).stop(true,false).animate(
                    {"height": "100%"},
                    "slow").css({
                        'background-color': 'rgba(249,199,0,0.95)', 
                        'transition': 'background-color 1.0s ease'
                        });
            /*$(".aboutHide").css({'display':'inline'});*/
            $(hiddenContent).stop(true,false).fadeIn(500)
     	}
    });


    $(target).mouseleave(function() {

    	if (Modernizr.mq('(min-width: 767px)')) {
        $(title).stop(true,false).animate(
                {"height": "100px"},
                "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
        /*$(".aboutHide").css({'display':'none'});*/
        $(hiddenContent).stop(true,false).fadeOut(500)
        
    	}
    });
} 

mainContent(".aboutBox",".aboutMe",".aboutHide")
mainContent(".experienceBox",".experience",".experienceHide")
mainContent(".projectsBox",".projects",".projectsHide")















