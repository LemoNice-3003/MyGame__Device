function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function onload() {
    const symbol = document.querySelector('#symbol');
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
    if (event.matches) {
        console.log('ダークモードに変更されました');
    } else {
        console.log('ライトモードに変更されました');
    }
});
