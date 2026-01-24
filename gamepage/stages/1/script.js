const symbol = document.querySelector('#symbol');
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
async function onload() {
    if(nowProgress >= 2) {
        await checkClearIcon(clearFlag_1, checkbox_1_0, "50vw", "calc(75vh + 40px)");
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
    clearFlag_1 = true;
    await sessionStorage.setItem('clearFlag_1', true);
    if (clearFlag_1 && nowProgress == 1) {
        await sessionStorage.setItem('progress', nowProgress + 1);
    }
    console.log(nowProgress);
    if (event.matches) {
        console.log('ダークモードに変更されました');
    } else {
        console.log('ライトモードに変更されました');
    }
});
