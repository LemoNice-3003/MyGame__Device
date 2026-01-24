$(document).ready(function() {
    // ここで$を使用できる
    const st1_1 = $("#st1-1");
    const st1_2 = $("#st1-2");
    const st1_3 = $("#st1-3");
    const st2_1 = $("#st2-1");
    const st2_2 = $("#st2-2");
    const st2_3 = $("#st2-3");
    var stTitle = [
        st1_1,
        st1_2,
        st1_3,
        st2_1,
        st2_2,
        st2_3,
    ];
    const stage_1 = $("#stage_1");
    const stage_2 = $("#stage_2");
    const stage_3 = $("#stage_3");
    const stage_4 = $("#stage_4");
    const stage_5 = $("#stage_5");
    const stage_6 = $("#stage_6");
    const preview = $("#preview");
    if(userName.length > 10) {
        alert("名前が不正な値です。文字数が10字以内であるか確認してください");
    } else {
        $("#header_h1").text(userName);
    }
    console.log(nowProgress);

    if (!Number.isInteger(nowProgress)) { //異常処理
        console.warn("value が不正です", nowProgress);
        alert("セーブデータに不正な値が含まれています"); // ホームに戻るべき？
        for (let i = 0; i <= 5; i++) { // lock
            stTitle[i].css({
                "opacity": .5,
                "pointer-events": "none"
            });
            stTitle[i].toggleClass('lock');
        }
        return;
    }

    for (let i = 5; i >= nowProgress; i--) { // lockの解除
        stTitle[i].css({
            "opacity": .5,
            "pointer-events": "none"
        });
        stTitle[i].toggleClass('lock');
    }

    $('#st1-1').on({
        click : function(){
            stage_1.addClass("active");
        },
        mouseenter : function() {
            preview.css("background-image", "url(../images/stage_thumbnail/1.png)");
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
            preview.css("background-image", "url(../images/stage_thumbnail/3.png)");
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
            preview.css("background-image", "url(../images/stage_thumbnail/4.png)");
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
            preview.css("background-image", "url(../images/stage_thumbnail/5.png)");
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
            preview.css("background-image", "url(../images/stage_thumbnail/6.png)");
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
});
const root = document.documentElement;

const customElement = document.querySelector('#header_h1');
try {
    textLength = parseInt(userName.length) + 7;
} catch { alert("ログインしていません"); }
customElement.style.setProperty('--nameLength', textLength + "em");

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });
// alert(`name="${userName}"\nprogress="${nowProgress}"\n10${clearFlag_1}\n20${clearFlag_2}\n30${clearFlag_3}\n300${clearFlag_3_0}\n301${clearFlag_3_1}\n302${clearFlag_3_2}\n303${clearFlag_3_3}\n40${clearFlag_4}\n50${clearFlag_5}\n500${clearFlag_5_0}\n501${clearFlag_5_1}\n502${clearFlag_5_2}\n503${clearFlag_5_3}\n504${clearFlag_5_4}\n60${clearFlag_6}\n600${clearFlag_6_0}\n601${clearFlag_6_1}\n602${clearFlag_6_2}\n`);
