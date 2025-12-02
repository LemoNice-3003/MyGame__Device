$(document).ready(function() {
    // ここで$を使用できる
    const st1_1 = $("#st1-1");
    const st1_2 = $("#st1-2");
    const st1_3 = $("#st1-3");
    const st2_1 = $("#st2-1");
    const st2_2 = $("#st2-2");
    const st2_3 = $("#st2-3");
    const st3_1 = $("#st3-1");
    const st3_2 = $("#st3-2");
    const st3_3 = $("#st3-3");
    var stTitle = [
        st1_1,
        st1_2,
        st1_3,
        st2_1,
        st2_2,
        st2_3,
        st3_1,
        st3_2,
        st3_3
    ];
    const stage_1 = $("#stage_1");
    const stage_2 = $("#stage_2");
    const stage_3 = $("#stage_3");
    const stage_4 = $("#stage_4");
    const stage_5 = $("#stage_5");
    const stage_6 = $("#stage_6");
    const stage_7 = $("#stage_7");
    const stage_8 = $("#stage_8");
    const stage_9 = $("#stage_9");
    const preview = $("#preview");
    const params = new URLSearchParams(location.search);
    const value = params.get("value");
    const valueNum = parseInt(value, 10);
    if (!Number.isInteger(valueNum)) { //異常処理
        console.warn("value が不正です", valueNum);
        for (let i = 0; i <= 8; i++) { // lock
            stTitle[i].css({
                "opacity": .5,
                "pointer-events": "none"
            });
            stTitle[i].toggleClass('lock');
        }
        return;
    }

    for (let i = 8; i >= parseInt(value); i--) { // lockの解除
        stTitle[i].css({
            "opacity": .5,
            "pointer-events": "none"
        });
        stTitle[i].toggleClass('lock');
    }
    console.log(value);

    $('#st1-1').on({
        click : function(){
            stage_1.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/1.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st1-1')) {
            stage_1.removeClass("active");
        }
    });
    $('#st1-2').on({
        click : function(){
            stage_2.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/2.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st1-2')) {
            stage_2.removeClass("active");
        }
    });
    $('#st1-3').on({
        click : function(){
            stage_3.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/3.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st1-3')) {
            stage_3.removeClass("active");
        }
    });
    $('#st2-1').on({
        click : function(){
            stage_4.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/4.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st2-1')) {
            stage_4.removeClass("active");
        }
    });
    $('#st2-2').on({
        click : function(){
            stage_5.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/5.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st2-2')) {
            stage_5.removeClass("active");
        }
    });
    $('#st2-3').on({
        click : function(){
            stage_6.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/6.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st2-3')) {
            stage_6.removeClass("active");
        }
    });
    $('#st3-1').on({
        click : function(){
            stage_7.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/7.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st3-1')) {
            stage_7.removeClass("active");
        }
    });
    $('#st3-2').on({
        click : function(){
            stage_8.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/8.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st3-2')) {
            stage_8.removeClass("active");
        }
    });
    $('#st3-3').on({
        click : function(){
            stage_9.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/9.jpg)");
        },
        mouseleave : function() {
            preview.css("background-image", "none");
        }
    });
    $(document).on('click', function(e) {
        // クリックされた要素が input 以外なら active クラスを削除
        if (!$(e.target).is('#st3-3')) {
            stage_9.removeClass("active");
        }
    });
});
const root = document.documentElement;

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


const hamburgerMenu = document.querySelector('#js-hamburger');
const hamburgerItems = document.querySelector('#js-items');
const container = document.querySelector('#js-container');

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');
});




// $(function(){
//    $("span").css({"color" : "red", "font-size" : "100px", "border" : "solid 5px"});
// });
