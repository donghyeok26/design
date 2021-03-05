var nav = $("#nav ul li");
var cont = $("#contents > div");

nav.click(function () {
    event.preventDefault(); // 하이퍼링크 기능이 생기지 않게함 (초기화 시킴)
    var target = $(this); // this=nav.click
    var index = target.index();
    // alert(index); (index가 몇번인지 보기위한 경고창)
    var section = cont.eq(index); //컨텐츠 div 중 순서(몇번쨰인지)
    var offset = section.offset().top; //offset(위치따기, 절대값) position(부모값)
    $("html,body").animate({
        scrollTop: offset
    }, 600);
});

$(window).scroll(function () {
    var location = $(window).scrollTop();
    // $('.scrolltop').text(location) //현재 팁스크롤위치를 텍스트로 쓰겠다.

    cont.each(function () { //each는 반복문에 사용

        var target = $(this); //this = window.scroll(function)
        var index = target.index();

        if (target.offset().top <= location) { //if 만약을 전제해서 ~해라 or 만약을 전제해서 ~해라 아니면 ~~해라
            nav.removeClass("active");
            nav.eq(index).addClass("active"); //eq= 순서를 불러옴
        }

        if (location >= cont.eq(index).offset().top - $(window).height() / 3) {
            cont.eq(index).addClass("show"); //cont.eq(1).children(0) = contents h3
        } else {
            cont.eq(index).removeClass("show");
        }

        if (location >= cont.eq(index).offset().top + $(window).height() / 3) {
            cont.eq(index).removeClass("show");
        }
    });
});

///////////////////////////////////layout//////////////////////////////////////////////

$(window).scroll(function () {
    var location = $(window).scrollTop();

    if (location == cont.eq(1).offset().top) {
        draw(85, '.pie-chart1', '#787ebb');
        draw(70, '.pie-chart2', '#787ebb');
        draw(80, '.pie-chart3', '#787ebb');
    }

});

function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
        if (i < max) {
            color1(i, classname, colorname);
            i++;
        } else {
            clearInterval(func1);
        }
    }, 10);
}

function color1(i, classname, colorname) {
    $(classname).css({
        "background": "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"
    });
}

(function ($) {
    $.aniPage = function (e, type) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $("body, html").animate({
                scrollTop: $(window).scrollTop() - $(window).height()
            }, 1000, function () {
                $.aniOk = 0;
            });
        } else {
            $("body, html").animate({
                scrollTop: $(window).scrollTop() + $(window).height()
            }, 1000, function () {
                $.aniOk = 0;
            });
        }
    };
})(jQuery);
$(function () {
    $(window).height();
    $.aniOk = 0;
    $(window).scrollTop(0);
});

$(document).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    if ($.aniOk == 0) {
        $.aniPage(e, e.type);
        $.aniOk = 1;
    }
});

// /////////////////////////////////////percent////////////////////////////

var topEle = $('#topBtn');
var delay = 1000;
topEle.on('click', function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, delay);
});

$(function () {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
    mySwiper.autoplay.running
});

///////////////////////////////////slider////////////////////////////////

// $('.port_view1').click(function () {
//     $('#article1').show()
// })

// $('#article1').click(function () {
//     $('#article1').hide()
// })

// $('.port_view2').click(function () {
//     $('#article2').show()
// })

// $('#article2').click(function () {
//     $('#article2').hide()
// })

// $('.swiper-wrapper .poster1_3 ').click(function () {
//     var target = $(this);
//     var index = target.index();
//     $('.popup1_3').show()
// })   

// $('.popup1_3').click(function () {
//     var target = $(this);
//     $('.popup1_3').hide()
// })

// $('.swiper-wrapper .poster1_4 ').click(function () {
//     var target = $(this);
//     var index = target.index();
//     $('.popup1_4').show()
// })

// $('.popup1_4').click(function () {
//     var target = $(this);
//     $('.popup1_4').hide()
// });