$(function(){

    $('header a,.info-container__link a,footer a,.header-modal__list a').click(function(){

        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({
            'scrollTop':position
        },'500');

    });


    // sp-button

    // $('.sp-button').click(function(){

    //     $('header').addClass('openNav');

    // });

    // $('.sp-button').click(function(){
    //     $('header').has('.openNav').addClass('closeNav');
    // });


    $('.sp-button').click(function(){

        if($('header').hasClass('openNav')){
            $('header').removeClass('openNav');
            $('body').removeClass('no-scroll');
            $('#header-modal').fadeOut();

        }else{
            $('header').addClass('openNav');
            $('body').addClass('no-scroll');
            $('#header-modal').fadeIn();
        }

    });

    $('.header-modal__list a').click(function(){

        $('#header-modal').hide();
        $('header').removeClass('openNav');
        $('body').removeClass('no-scroll');
        $('#navToggle div').removeClass('active');

    });



    // ハンバーガーメニュー　アニメーション
    $('.sp-button').click(function(){

        $('#navToggle div').toggleClass('active');

    });



});