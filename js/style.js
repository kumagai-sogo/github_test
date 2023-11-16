$(function(){
    $('.mv_slide').slick({
        autoplay:true,
        autoplaySpeed:5000,
        
    });
});

//ハンバーガーボタン
$(function() {
    $('.menu_btn').click(function () {
        $('body').toggleClass('open');
    });
    $('a').click(function () {
        $('body').removeClass('open');
    });
  });