let lastTouchTime = 0;

document.addEventListener('touchend', (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300 && timeDifference > 0) {
    event.preventDefault(); // ダブルタップを無効化
    }

    lastTouchTime = currentTime;
});



var form = document.forms.myGameSite;
// クリック時に実行する関数
function uploadSaveData () {
    const showOpenFileDialog = () => new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';    //inputのタイプ
        input.accept = 'text/plain';    //読み込むファイルの種類
        input.onchange = () => { resolve(input.files); };
        input.click();
    });
    (async () => {
        const files = await showOpenFileDialog();   //fileにダイアログで選択したtxtファイルのデータを渡す
        const val = await files[0];  //contentに開いたtxtファイルの中身を移す
        CheckFileType(val);
    })();
}

const dropArea = document.getElementById('dropArea');
//ドラッグエンターイベント（ドラッグしている対象がドロップできる場所に入ったとき）
dropArea.addEventListener('dragenter', () => {
    dropArea.style.background = 'rgb(0, 0, 0, .5)'; //色を変える
});
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault(); //デフォルトの動作をキャンセル（dropイベントを使用するため）
});
//ドラッグリーブイベント（ドラッグしている対象がドロップできる場所から離れたとき）
dropArea.addEventListener('dragleave', async () => {
    dropArea.style.background = 'rgb(0, 0, 0, 0)'; //色を元に戻す（透明）
});
//ドロップイベント（ドラッグしている対象をドロップしたとき）
dropArea.addEventListener('drop', async (e) => {
    e.preventDefault(); //デフォルトの動作をキャンセル
    dropArea.style.background = 'rgb(0, 0, 0, 0)'; //色を元に戻す（透明）
    const dropfile = await e.dataTransfer.files; //ドロップされたファイルを取得
    const val = dropfile[0];
    CheckFileType(val);
});

async function CheckFileType(val) {
    if (/\.(txt)$/i.test(val.name))
    {
        const dropcontent = await val.text();
        LoadData(dropcontent);
        return;
    }
    else
    {
        alert("テキストファイルをアップロードしてください");
    }
}

function LoadData(content) {
    if (content == "0") {
        kakapo();
    }
    else if (content == "1") {
        $(function changeColor(){
            $(".gametitle").css({"color" : "blue"});
        });
    }
    else {
    }
    lock(content);
}



function lock(content) {
    const base = location.origin + location.pathname.replace(/\/[^\/]*$/, "/");
    const url = base + "gamepage/index.html?value=" + encodeURIComponent(content);
    window.location.href = url;
}


function kakapo() {
    $(function changeColor(){
        $(".gametitle").css({"background" : "linear-gradient(to right, rgb(230, 25, 25), rgb(243, 163, 25), rgb(253, 241, 25), rgb(25, 153, 68), rgb(25, 104, 183), rgb(50, 53, 139), rgb(146, 29, 134), rgb(230, 25, 25)) 0 / 200%"});
        $(".gametitle").css({"margin-block-end" : "0px"});
        $(".gametitle").css({"text-shadow" : "none"});
        $(".gametitle").css({"display" : "inline-block"});
        $(".gametitle").css({"-webkit-background-clip" : "text"});
        $(".gametitle").css({"-webkit-text-fill-color" : "transparent"});
        $(".welcome").css({"background" : "linear-gradient(to right, rgb(230, 25, 25), rgb(243, 163, 25), rgb(253, 241, 25), rgb(25, 153, 68), rgb(25, 104, 183), rgb(50, 53, 139), rgb(146, 29, 134), rgb(230, 25, 25)) 0 / 200%"});
        $(".welcome").css({"margin" : "0px"});
        $(".welcome").css({"text-shadow" : "none"});
        $(".welcome").css({"display" : "inline-block"});
        $(".welcome").css({"-webkit-background-clip" : "text"});
        $(".welcome").css({"-webkit-text-fill-color" : "transparent"});
        $(".kakapo img").css({"width" : "120px"});
    });
}


function doneNewName() {
    // テキストエリアより文字列を取得
    const txt = document.getElementById('newName').value;
    if (!txt) { return; }
    // 文字列をBlob化
    const blob = new Blob([txt], { type: 'text/plain' });
    // ダウンロード用のaタグ生成（aタグを使用するのは、download属性にダウンロードするファイル名と形式を設定できるため）
    const a = document.createElement('a');
    a.href =  URL.createObjectURL(blob);
    a.download = 'sample.txt';
    a.click();
}



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



$('#circle1')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle2')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle3')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle4')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});

// $(function(){
//    $("span").css({"color" : "red", "font-size" : "100px", "border" : "solid 5px"});
// });

