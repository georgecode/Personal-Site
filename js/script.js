

 

$(".red").mouseenter(function() {
	if ($(window).width() > 767) {
    $(".aboutMe").animate(
            {"height": "100%"},
            "slow").css({
                'background-color': 'rgba(249,199,0,0.95)', 
                'transition': 'background-color 1.0s ease'
                });
    /*$(".hideMe").css({'display':'inline'});*/
    $(".hideMe").fadeIn(500)
 	}
});

$(".red").mouseleave(function() {
	if ($(window).width() > 767) {
    $(".aboutMe").animate(
            {"height": "100px"},
            "slow").css({'background-color': 'rgba(249,199,0,0.6)'});
    /*$(".hideMe").css({'display':'none'});*/
    $(".hideMe").fadeOut(500)
	}
});

