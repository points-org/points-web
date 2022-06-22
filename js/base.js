$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 100) {
        $('.header').addClass('fixed animated fadeInDown');
    } else {
        $('.header').removeClass('fixed animated fadeInDown');
    }
});

$(function () {
    $(function () {
        var w = $(window).width();
        //05-31增加，移动端导航栏获取焦点、失去焦点事件
        if (w > 1024) {

        } else {
            $(function () {
                $('.menu_btn').click(function () {
                    $('.menu_btn').toggleClass('sp_nav_se');
                    $('.nav').toggleClass('nav_show');
                });

                $('.nav li a').click(function () {
                    $(this).parent().children('.subnav').slideToggle().parent().siblings().children('.subnav').slideUp();
                    $(this).toggleClass('sjj_nav_i_se');
                    $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
                });

                $('.icon_down').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');

            });
        };
    });
});

$(function () {
    $(window).resize(function () {
        var w = $(window).width();
        if (w < 1024) {
            $(function () {
                $('.menu_btn').click(function () {
                    $('.menu_btn').toggleClass('sp_nav_se');
                    $('.nav').toggleClass('nav_show');
                });
                $('.nav li a').click(function () {
                    $(this).parent().children('.subnav').slideToggle().parent().siblings().children('.subnav').slideUp();
                    $(this).toggleClass('sjj_nav_i_se');
                    $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
                });
                $('.icon_down').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');
            });
        }
    })
})


