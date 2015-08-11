 $(function(){
        $(".navTitle").typed({
            strings: ["Together we can develop the future. ^750 <br>One line at a time."],
            typeSpeed: 0
        });
    });


/*
var typeing1 = function(){ 
    var r = $.Deferred();

    $(function(){
      $(".navTitle1").typed({
        strings: ["Together we can develope the future."],
        typeSpeed: 0
      });

  });
    return r;

}
var typeing2 = function(){ $(function(){
    

      $(".navTitle2").typed({
        strings: ["One line at a time."],
        typeSpeed: 0
      });
    
  });
}
typeing1().done(alert("Hello! I am an alert box!!"));
//---------
*/  

//.animate({left: '100px'}, "slow");
//experience page


//$(function(){
    //var skill1 = $(".skill1");
  //  $(".skill1").animate({width: '70%'}, 2000);
//});

var growLevel =function(skill,percent){
    $(function(){
        //var skill1 = $(".skill1");
        $(skill).animate({width: percent}, 2000);
    })
}
growLevel(".skill1", '75%')
growLevel(".skill2", '45%')
growLevel(".skill3",'80%')
growLevel(".skill4", '40%')
growLevel(".skill5", '60%')
growLevel(".skill6", '40%')
growLevel(".skill7", '30%')
growLevel(".skill8", '40%')
//experience page END



var mainContent = function(target,title,hiddenContent){

    $(target).mouseenter(function() {
    	if (Modernizr.mq('(min-width: 767px)')) {
            $(title).stop(true,false).animate(
                    {"height": "100%"},
                    "slow").css({
                        'background-color': 'rgba(215,229,92,0.95)', 
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
                "slow").css({'background-color': 'rgba(215,229,92,0.6)'});
        /*$(".aboutHide").css({'display':'none'});*/
        $(hiddenContent).stop(true,false).fadeOut(500)
        
    	}
    });
} 

mainContent(".aboutBox",".aboutMe",".aboutHide")
mainContent(".experienceBox",".experience",".experienceHide")
mainContent(".projectsBox",".projects",".projectsHide")















