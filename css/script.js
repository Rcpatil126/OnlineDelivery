$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // $(document).ready(function(){

    //     $('.menu1').click(function(){
    //         $('.menu').toggleClass("active");
    //         $('.menu-btn i').toggleClass('active')

    //     })

    // });

    //  toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.menu ').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });




     $('.center').click(function(){
        $('.arrow ').toggleClass("active");
         $('. .arrow i').toggleClass("active");
     });

});
