if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Service Worker registered', reg);
        })
        .catch(err => {
            console.error('Service Worker registration failed', err);
        });
}


let lastTouchTime = 0;

newName.form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        doneNewName();
        e.preventDefault();  // Enterキー入力によるformの再読み込み（ページ自体の更新）を防止
    }
});

// 新しいセーブデータを作るときのボタンの処理
async function doneNewName() {
    const newName = document.getElementById('newName');
    // 異常処理
    if (!newName.value || newName.value.length > 10) {
        alert("名前が無効です。再入力してください。");
        return;
    }

    await sessionStorage.setItem('loginFlag', true);
    await sessionStorage.setItem('progress', 1);
    await sessionStorage.setItem('name', newName.value);
    await sessionStorage.setItem('clearFlag_1', false);
    await sessionStorage.setItem('clearFlag_2', false);
    await sessionStorage.setItem('clearFlag_3', false);
    await sessionStorage.setItem('clearFlag_3_0', false);
    await sessionStorage.setItem('clearFlag_3_1', false);
    await sessionStorage.setItem('clearFlag_3_2', false);
    await sessionStorage.setItem('clearFlag_3_3', false);
    await sessionStorage.setItem('clearFlag_4', false);
    await sessionStorage.setItem('clearFlag_5', false);
    await sessionStorage.setItem('clearFlag_5_0', false);
    await sessionStorage.setItem('clearFlag_5_1', false);
    await sessionStorage.setItem('clearFlag_5_2', false);
    await sessionStorage.setItem('clearFlag_5_3', false);
    await sessionStorage.setItem('clearFlag_5_4', false);
    await sessionStorage.setItem('clearFlag_6', false);
    await sessionStorage.setItem('clearFlag_6_0', false);
    await sessionStorage.setItem('clearFlag_6_1', false);
    await sessionStorage.setItem('clearFlag_6_2', false);
    goToGamepage(newName.value, 1);
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
