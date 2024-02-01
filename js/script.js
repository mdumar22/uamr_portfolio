AOS.init();
jQuery(document).ready(function($){
    $('.togel_button').click(function(){
        $('.nav_bar').addClass('open_menu');
    })
        $('.toggel_closed').click(function(){
            $('.nav_bar').removeClass('open_menu');
        })
    
})



/* 
jQuery(document).ready(function($){
    $('.toggel_btn a').click(function(){
        $('.nav_bar').addClass('open_menu');
    })
     $('.close_btn').click(function(){
        $('.nav_bar').removeClass('open_menu');
    })
}) */