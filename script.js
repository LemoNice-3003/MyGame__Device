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
// セーブデータアップロードボタンのクリック時に実行する関数
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
        checkFileType(val);
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
    const text = dropfile[0];
    checkFileType(text);
});

async function checkFileType(text) {
    if (/\.(txt)$/i.test(text.name)) // ファイルの拡張子チェック
    {
        const dropContent = await text.text(); // データをテキストとして読み込む
        const lines = dropContent.split(/\r?\n/); // 行ごとに分割し、格納
        // console.log(lines);
        if (dropContent.slice(0, 5) == "name=") {
            const userName = lines[0].slice(6, lines[0].indexOf('\n')); // ユーザー名
            const userProgress = lines[1].slice(10, lines[1].indexOf('\n')); // 進捗度（ステージがどこまで解放されているか）
            // console.log(userName, userProgress);
            goToGamepage(userName, userProgress);
        }
        return;
    }
    else
    {
        alert("テキストファイルをアップロードしてください");
    }
}

// function LoadData(userName, userProgress) {
//     if (userProgress == "0") {
//         kakapo();
//     }
//     else if (userProgress == "1") {
//         $(function changeColor(){
//             $(".gametitle").css({"color" : "blue"});
//         });
//     }
//     else {
//     }
//     goToGamepage(userProgress);
// }



function goToGamepage(userName, userProgress) {
    const url = "gamepage/index.html?value=" + encodeURIComponent(userProgress);
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


// 新しいセーブデータを作るときのボタンの処理
function doneNewName() {
    // テキストエリアより文字列を取得
    const txt = "name=\"" + document.getElementById('newName').value + "\"\nprogress=\"0\"";
    
    if (!txt || document.getElementById('newName').value.length > 10) {
        alert("名前が無効です。再入力してください。");
        return;
    }
    
    const blob = new Blob([txt], { type: 'text/plain' });
    
    if(innerWidth > 999) { // pcは自動ダウンロード
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'sample.txt';
        a.click();
    } else { // スマホは手動ダウンロード
        // iOS対応：リンクを直接表示してユーザーにタップさせる
        showDownloadModal(blob);
    }
    
    //goToGamepage(0);
}

function showDownloadModal(blob) {
    const url = URL.createObjectURL(blob);
    const modal = document.getElementById("downloadModal");
    const link = document.getElementById("downloadLink");
    link.href = url;
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
