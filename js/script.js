
//782px stops working
//767px is moble

var animateTest = true;


    $(".red").mouseenter(function() {
        

    	if (window.matchMedia('(min-width: 767px)').matches) {
            
           
            $(".aboutMe").stop(true,false).animate(
                    {"height": "100%"},
                    "slow").css({
                        'background-color': 'rgba(249,199,0,0.95)', 
                        'transition': 'background-color 1.0s ease'
                        });
            /*$(".hideMe").css({'display':'inline'});*/
            $(".hideMe").stop(true,false).fadeIn(500)
     	}
    });






    $(".red").mouseleave(function() {

    	if (window.matchMedia('(min-width: 767px)').matches) {
        $(".aboutMe").stop(true,false).animate(
                {"height": "100px"},
                "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
        /*$(".hideMe").css({'display':'none'});*/
        $(".hideMe").stop(true,false).fadeOut(500)
        
    	}
    });



//---------------------------------------

$(".green").mouseenter(function() {
    if ($(window).width() > 767) {
    $(".gggaboutMe").animate(
            {"height": "100%"},
            "slow").css({
                'background-color': 'rgba(249,199,0,0.95)', 
                'transition': 'background-color 1.0s ease'
                });
    /*$(".hideMe").css({'display':'inline'});*/
    $(".ggghideMe").fadeIn(500)
    }
});

$(".green").mouseleave(function() {
    if ($(window).width() > 767) {
    $(".gggaboutMe").animate(
            {"height": "100px"},
            "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
    /*$(".hideMe").css({'display':'none'});*/
    $(".ggghideMe").fadeOut(500)
    }
});

