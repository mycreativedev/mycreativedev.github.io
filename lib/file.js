// Preloader

$(window).on('load', function () {
    var preloader = $('.preloader');
    preloader.delay(1000).fadeOut('slow');
});

//  Button up

$(function(){
  
    $('body').append('<button class="button-up" />');
    
    $('.button-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
      
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.button-up').addClass('active');
        }else{
            $('.button-up').removeClass('active');
        }
    });
      
});


//  Menu burger

$('.menu-bth').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('menu-bth-active');
    $('.nav-bar').toggleClass('nav-bar-active');
});


//  Slow scroll

$(function(){

    $('a[data-target^="scroll"]').bind('click.smoothscroll',function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;    
    });

});


//  Portfolio filter

$(function(){
    $(".gallery-btn").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all")
        {
            $(".filter").show("1000");
        }
        else
        {
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");         
        }
    });
});

// Init animations
new WOW().init();