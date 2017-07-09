 //Typeing Nav title start
 $(function(){
        $(".overviewPage .navTitle").typed({
            strings: ["Together we can develop the future. ^750 <br>One line at a time."],
            typeSpeed: 0
        });
    });
 //Typing Nav title END


//Hopefully this will prevent some spaming
$(".myMail").append("George@GeorgeCzurlanis.com")
$(".PhoneMail").html("George@GeorgeCzurlanis.com")
$(".address").html("San Francisco Bay Area")
//spaming prevention END


//Slide up curtain animation on home page start
var mainContent = function(target,title,hiddenContent){

    $(target).mouseenter(function() {
    	if (Modernizr.mq('(min-width: 767px)')) {
            $(title).stop(true,false).animate(
                    {"height": "100%"},
                    "slow").css({
                        'background-color': 'rgba(215,229,92,0.95)',
                        'transition': 'background-color 1.0s ease'
                        });
            $(hiddenContent).stop(true,false).fadeIn(500)
     	}
    });


    $(target).mouseleave(function() {

    	if (Modernizr.mq('(min-width: 767px)')) {
        $(title).stop(true,false).animate(
                {"height": "100px"},
                "slow").css({
                    'background-color': 'rgba(215,229,92,0.95)'
                });
        $(hiddenContent).stop(true,false).fadeOut(500)

    	}
    });
}

mainContent(".aboutBox",".aboutMe",".aboutHide")
mainContent(".experienceBox",".experience",".experienceHide")
mainContent(".projectsBox",".projects",".projectsHide")

var projectSites = function(num){
    var target= num +" .infoBar"
    $(num).mouseenter(function() {
        if (Modernizr.mq('(min-width: 767px)')) {
            $(target).css({"display":"block"})
        }
    })

    $(num).mouseleave(function() {
        if (Modernizr.mq('(min-width: 767px)')) {
            $(target).css({"display":"none"})
        }
    })
}


// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 767px)");
    mq.addListener(xxWidthChange);
    xxWidthChange(mq);
}

// media query change
function xxWidthChange(mq) {
    if (mq.matches) {
        $(".infoBar").css({"display":"none"})
    }
    else {
        $(".infoBar").css({"display":"block"})
    }
}


projectSites(".one")
projectSites(".two")
projectSites(".three")
//Slide up curtain animation on home page END










