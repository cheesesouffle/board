$(document).ready(function(){

    // sub2
    var container = $('#bType');
        
    container.isotope({
        animationEngine : 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });	

    $('#filters a').click(function(){
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({ filter: selector });
        setProjects();		
        return false;
    });	


    // header
    $('.hamburger').click(function(){
        $(this).toggleClass("h_active");
        $('section').toggleClass("wrap_plus");
        $('.main-menu > li').toggleClass("active")
    });
    $('.main-menu > li').click(function(){
        $('.main-menu > li').removeClass("main-menu_active")
        $(this).addClass("main-menu_active");
    });


    // sub1
    var numAc = $("article").size();
    var widSec = 200*numAc;
    var widTotal = widSec+600;
    $(".sub1-card").width(widTotal);
    $("body").height(widSec);		
    $("html,body").animate({"scrollTop":widSec},2000);	

    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();			
        $(".sub1-card").stop().animate({"left":-scroll},600);
    });

    $("article h3").on("click",function(e){
        e.preventDefault();
        var index = $(this).parent().index();
        var src = $(this).children("a").attr("href");	
        var posAc = 200*index;
        $("article").removeClass("on");
        $(this).parent().addClass("on");
        $("article p img").attr({"src":""});
        $(this).siblings("p").children("img").attr({"src":src});	
        $("html,body").scrollTop(posAc);
    });

    $("span").on("click",function(){
        $("article").removeClass("on");
    });

    $("#navi li").on("click",function(){
        var i = $(this).index();
        var posNavi = 1000*i;		
        $("#navi li, article").removeClass();
        $(this).addClass("on");		
        $("html,body").scrollTop(posNavi);
    });

    
});
