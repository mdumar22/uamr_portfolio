jQuery(document).ready(function($){
    $('.togel_button').click(function(){
        $('.nav_bar').addClass('open_menu');
    })
        $('.toggel_closed').click(function(){
            $('.nav_bar').removeClass('open_menu');
        })
        
AOS.init();

new Typed('#typed',{
    strings : ['Developer','Md Umar'],
    typeSpeed : 40,
    delaySpeed : 90,
    loop : true
  });
    
})


