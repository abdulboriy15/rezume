$(function() {
    $('.icone').on('click', function() {
        $('nav').toggleClass('active');
    })
})
$(function() {
    let link = $('nav ul a');
    
    link.on('click', function(ls) {
        ls.preventDefault();
        link.removeClass('active');
        let selector =  $(this).addClass('active').attr('href');
        let target = $(selector);
        
        $('html, body').animate({scrollTop: target.offset().top - 70}, 500);
    })
    
    
    
    $(window).scroll(function() {
        
        if($(this).scrollTop() > 2000){
            $('.top').fadeIn();
        }
        else{
            $('.top').fadeOut();
        }
        
        
        let scrull = $(window).scrollTop();
        link.each(function() {
            let selector =  $(this).attr('href');
            let target = $(selector); 
            
            if(scrull >= target.offset().top - 80){
                link.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
    
    $('.top').click(function() {
        $('html, body').animate({scrollTop:0}, 1000);
    })
    
})