
$(document).ready(function(){
    var menuMain = $('.header_mobile-menu-main'); 
    
    $('.header_mobile-menu').click(function(){
        $('.header_mobile-overlay').css('display', 'block');
        menuMain.css('transform', 'translateX(0%)');
    })
    
    $('.header_mobile-menu-close i').click(function(){
        $('.header_mobile-overlay').css('display', 'none');
        menuMain.css('transform', 'translateX(100%)');
    })
   
    $(document).click(function (e) {
        // Kiểm tra khi overlay hiển thị và menu đang mở
        if ($('.header_mobile-overlay').css('display') === 'block' && menuMain.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
            if (!menuMain.is(e.target) && e.target !== $('.header_mobile-menu-close i')) {
                $('.header_mobile-overlay').css('display', 'none');
                menuMain.css('transform', 'translateX(100%)');
            }
        }
    });
    $('.header_mobile-menu-search-main input').click(function(e){
        e.stopPropagation(); 
    });
});
