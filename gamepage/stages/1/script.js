function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
async function onload() {
    const symbol = document.querySelector('#symbol');
    if(nowProgress >= 2) {
        await checkClearIcon(checkbox_1_0, "50vw", "calc(75vh + 40px)");
    }
    if (isDarkMode()) {
        symbol.classList.toggle('active');
        console.log('ダークモードです');
    } else {
        console.log('ライトモードです');
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async event => {
    symbol.classList.toggle('active');
    await checkClearIcon(clearFlag_1, checkbox_1_0, "50vw", "calc(75vh + 40px)");
    console.log(nowProgress);
    if (event.matches) {
        console.log('ダークモードに変更されました');
    } else {
        console.log('ライトモードに変更されました');
    }
});

function pageback() {
    if (clearFlag_1 && nowProgress == 1) {
        sessionStorage.setItem('progress', nowProgress + 1);
    }

    // 書き込み完了を保証するため少し遅延
    setTimeout(() => {
        window.location.href = "index.html";
    }, 50);
}
window.addEventListener('pagehide', () => { // 戻るボタンを使わない場合のデータ保存用コード
    if (clearFlag_1 && nowProgress == 1) {
        sessionStorage.setItem('progress', nowProgress + 1);
    }
});
