$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        effect: "fade",
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        simulateTouch: true,
        paginationClickable: true,
        autoplay: 10000,
        speed: 1000,
    })

    $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }
 
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });

    $('.style-wrapper').each(function(){
        var duration = 300;

        var $images = $('.style-box a');

        $images.on('mouseover', function(){
                $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
            })
            .on('mouseout', function(){
                $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
            });
    });
});