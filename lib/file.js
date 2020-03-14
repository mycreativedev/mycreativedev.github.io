// Preloader
function hideMy(showElement){
    setTimeout(() => {
        showElement.style.opacity = '0';
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    let preloader = document.querySelectorAll('.preloader');

    let preloaderGo = new Promise((resolve, reject) => {
        resolve(hideMy(preloader[0]));
    });

    preloaderGo.then(() => {
        setTimeout(() => {
            preloader[0].style.display = 'none';
        }, 1300);
    });
});

// Menu burger
let menuBtn = document.querySelectorAll('.menu-bth'),
    menuStatus = document.querySelectorAll('.nav-bar');

    console.log(menuBtn[0]);
if(menuBtn[0] != undefined){
    menuBtn[0].addEventListener('click', (e)=> {
        e.preventDefault();
        menuBtn[0].classList.toggle('menu-bth-active');
        menuStatus[0].classList.toggle('nav-bar-active');
    });
}

// Button up
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

// Slow scroll
$(function(){

    $('a[data-target^="scroll"]').bind('click.smoothscroll',function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;    
    });

});

// Portfolio filter
$(function(){
    $(".gallery-btn").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");         
        }
    });
});


// var galleryBtn = document.querySelectorAll('.gallery-btn'),
//     filter = document.querySelectorAll('.filter');

// for(i = 0; i < galleryBtn.length; ++i) {

//     let value = galleryBtn[i].getAttribute('data-filter');

//     galleryBtn[i].addEventListener('click', (e)=> {
        
//         for(key = 0; key < filter.length; ++key){
//             let filterAttr = filter[key].getAttribute('data-item');

//             console.log(filterAttr);

//             if (value == 'all'){
//                 filter[key].style.display = 'block';
//                 filter[key].style.opacity = '1';
                
//             }else{
//                 hideMy(filter[key]);
//             }
//         }
//     });
// }

// Parallax
function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function(){
    parallax('.title-hellow', window.scrollY, 1);
});