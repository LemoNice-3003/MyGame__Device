const nowProgress = Number(sessionStorage.getItem('progress'));

function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function onload() {
    const symbol = document.querySelector('#symbol');
    if(nowProgress >= 2) {
        checkClearIcon();
    }
    if (isDarkMode()) {
        symbol.classList.toggle('active');
        console.log('ダークモードです');
    } else {
        console.log('ライトモードです');
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    symbol.classList.toggle('active');
    checkClearIcon();
    console.log(nowProgress);
    if (event.matches) {
        console.log('ダークモードに変更されました');
    } else {
        console.log('ライトモードに変更されました');
    }
});

function pageback(e) {
    e.preventDefault(); // ページ遷移を止める

    if (clearFlag && nowProgress == 1) {
        sessionStorage.setItem('progress', nowProgress + 1);
    }

    // 書き込み完了を保証するため少し遅延
    setTimeout(() => {
        window.location.href = "index.html";
    }, 50);
}
window.addEventListener('pagehide', () => { // 戻るボタンを使わない場合のデータ保存用コード
    if (clearFlag && nowProgress == 1) {
        sessionStorage.setItem('progress', nowProgress + 1);
    }
});
