var form = document.forms.myGameSite;
// ①クリック時に実行する関数
function saveDetaUpload (e) {
    const showOpenFileDialog = () => new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';    //inputのタイプ
        input.accept = 'text/plain';    //読み込むファイルの種類
        input.onchange = () => { resolve(input.files); };
        input.click();
    });
    (async () => {
        const files = await showOpenFileDialog();   //fileにダイアログで選択したtxtファイルのデータを渡す
        const content = await files[0].text();  //contentに開いたtxtファイルの中身を移す
        if (content == "0") {
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
                $(".kakapo img").css({"display" : "block"});
            });
        }
        else if (content == "1") {
            $(function changeColor(){
                $(".gametitle").css({"color" : "blue"});
            });
        }
        else {
        }
    })();
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
//const hamburgerContainer = document.querySelector('#js-container');

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
//    hamburgerContainer.classList.toggle('active');
});

// $(function(){
//    $("span").css({"color" : "red", "font-size" : "100px", "border" : "solid 5px"});
// });