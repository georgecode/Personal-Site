
//782px stops working
//767px is moble



    $(".aboutBox").mouseenter(function() {
        

    	if (Modernizr.mq('(min-width: 767px)')) {
            
           
            $(".aboutMe").stop(true,false).animate(
                    {"height": "100%"},
                    "slow").css({
                        'background-color': 'rgba(249,199,0,0.95)', 
                        'transition': 'background-color 1.0s ease'
                        });
            /*$(".aboutHide").css({'display':'inline'});*/
            $(".aboutHide").stop(true,false).fadeIn(500)
     	}
    });






    $(".aboutBox").mouseleave(function() {

    	if (Modernizr.mq('(min-width: 767px)')) {
        $(".aboutMe").stop(true,false).animate(
                {"height": "100px"},
                "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
        /*$(".aboutHide").css({'display':'none'});*/
        $(".aboutHide").stop(true,false).fadeOut(500)
        
    	}
    });



//---------------------------------------

$(".experienceBox").mouseenter(function() {
    if ($(window).width() > 767) {
    $(".gggaboutMe").animate(
            {"height": "100%"},
            "slow").css({
                'background-color': 'rgba(249,199,0,0.95)', 
                'transition': 'background-color 1.0s ease'
                });
    /*$(".ggghideMe").css({'display':'inline'});*/
    $(".ggghideMe").fadeIn(500)
    }
});

$(".experienceBox").mouseleave(function() {
    if ($(window).width() > 767) {
    $(".gggaboutMe").animate(
            {"height": "100px"},
            "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
    /*$(".ggghideMe").css({'display':'none'});*/
    $(".ggghideMe").fadeOut(500)
    }
});

