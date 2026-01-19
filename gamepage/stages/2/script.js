async function onload() {
    const symbol = document.querySelector('#symbol');
    if(nowProgress >= 3) {
        await checkClearIcon(clearFlag_2, checkbox_2_0, "50vw", "calc(75vh + 40px)");
    }
}
function isAppLaunch() {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true
    );
}

console.log(isAppLaunch() ? 'PWA起動' : '通常ブラウザ');



const isIOSStandalone = window.navigator.standalone === true;

if(isIOSStandalone) {
    console.log('iOS ホーム画面から起動');
}
