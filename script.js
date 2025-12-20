let lastTouchTime = 0;

const newName = document.getElementById('newName');
newName.form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        doneNewName();
        e.preventDefault();  // Enterキー入力によるformの再読み込み（ページ自体の更新）を防止
    }
});

// 新しいセーブデータを作るときのボタンの処理
function doneNewName() {
    // 異常処理
    if (!newName.value || newName.value.length > 10) {
        alert("名前が無効です。再入力してください。");
        return;
    }

    // テキストエリアより文字列を取得
    const txt = "name=\"" + newName.value + "\"\nprogress=\"1\"";
    
    
    const blob = new Blob([txt], { type: 'text/plain' });
    
    if(innerWidth > 999) { // pcは自動ダウンロード
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'sample.txt';
        a.click();
        goToGamepage(newName.value, 1);
        sessionStorage.setItem('progress', 1)
        sessionStorage.setItem('name', userName);
    } else { // スマホは手動ダウンロード
        // iOS対応：リンクを直接表示してユーザーにタップさせる
        showDownloadModal(blob);
    }
}

var form = document.forms.myGameSite;

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
    const text = dropfile[0];
    checkFileType(text);
});


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


function showDownloadModal(blob) {
    const url = URL.createObjectURL(blob);
    const link = document.getElementById("downloadLink");
    const modal = document.getElementById("downloadModal");
    link.href = url;
    link.download = 'DeviceSaveData.txt';
    modal.style.display = "flex"; // 表示
}

function closeDownloadModal() {
    const modal = document.getElementById("downloadModal");
    modal.style.display = "none"; // 非表示
}




document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });



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
