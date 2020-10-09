

 
$(".burger").click(function(){
    $(this).next().slideToggle();
});
$('.hamburger').click(function(){
    $('.hamburger').toggleClass('is-active');
    $('.header_nav_menu').toggleClass('active');
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 50) {
        $(".header").addClass("active");
    }else{
        $(".header").removeClass("active");
    }
})

// $('.header_cont_nav_list_items').click(function(){
//      if (!$(this).hasClass("active")) {
//         $('.header_cont_nav_list_items').removeClass('active');
//      }
//     $(this).toggleClass('active');
// });
  

