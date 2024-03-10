$(function () {
    $('#langBtn').click(function () {
        url = $('#langList').val();
        window.open(url);
    });

    // 메인슬라이드 탭메뉴 제어
    $('.sc-visual .group-nav .btn-nav').click(function (e) {
        e.preventDefault();

        target = $(this).data('target')

        $(this).addClass('active').siblings().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');
    });
    
    // 메인슬라이드
    visualSlide = new Swiper('.sc-visual .visual-slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.fraction',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        }
    });

    // 메인슬라이드 멈춤/재생
    $('.sc-visual .control-wrap .btn-autoplay').click(function () {
        if ($(this).hasClass('on')) {
            visualSlide.autoplay.start()
            $(this).text('자동재생 정지')
        } else {
            visualSlide.autoplay.stop()
            $(this).text('자동재생 적용')
        }
        $(this).toggleClass('on')
    });


    // bannerSlide = new Swiper('.sc-banner .banner-slide', {
    //     loop: true,
    //     slidesPerView: 3,
    //     spaceBetween: 43,
    //     autoplay: {
    //         delay: 1500,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.fraction',
    //         type: 'fraction'
    //     },
    //     navigation: {
    //         nextEl: '.btn-next',
    //         prevEl: '.btn-prev'
    //     }
    // });

   






    // 고정버튼
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr >= 100) {
            $('.fixed-btn').addClass('show')
        } else {
            $('.fixed-btn').removeClass('show')
        }
    });

    $('.fixed-btn a').click(function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    $('.sc-related .btn-related').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $('.sc-related .btn-related').removeClass('on');
            $('.sc-related .sub-area').stop().slideUp();
        } else {
            $('.sc-related .sub-area').stop().slideUp();
            $('.sc-related .btn-related').removeClass('on');
            $(this).addClass('on').next().stop().slideDown();
        }
    });

    // 첫번째 LI 에 뒤로가기탭 : 닫혀야함
    $('.sc-related .sub-area li:first-child').keydown(function (e) {
        code = e.keyCode;
        // console.log(e.shiftKey);
        if (code === 9 && e.shiftKey) {
            $('.sc-related .btn-related').removeClass('on');
            $('.sc-related .sub-area').stop().slideUp();
        }
    });

    // 마지막 LI 에 그냥탭 : 닫혀야함
    $('.sc-related .sub-area li:last-child').keydown(function (e) {
        code = e.keyCode;
        // console.log(e.shiftKey);
        if (code === 9 && !e.shiftKey) {
            $('.btn-related').removeClass('on');
            $('.sub-area').stop().slideUp();
        }
    });

    bannerSlide = new Swiper('.sc-banner .banner-slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.fraction',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        }
    });

    $('.sc-banner .btn-autoplay').click(function () {
        if ($(this).hasClass('on')) {
            bannerSlide.autoplay.start()
            $(this).text('자동재생 정지')
        } else {
            bannerSlide.autoplay.stop()
            $(this).text('자동재생 적용')
        }
        $(this).toggleClass('on')
    });




}); //end