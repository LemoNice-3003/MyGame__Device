if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Service Worker registered', reg);
        })
        .catch(err => {
            console.error('Service Worker registration failed', err);
        });
}

async function onload() {
    const symbol = document.querySelector('#symbol');
    if(nowProgress >= 3) {
        await checkClearIcon(clearFlag_2, checkbox_2_0, "50vw", "calc(75vh + 40px)");
    }
}
function isInstalledPWA() {
    return window.matchMedia('(display-mode: standalone)').matches;
}

if(isInstalledPWA()) {
    console.log('PWA（ホーム画面・アプリ）から起動');
}
else {
    console.log('通常のブラウザアクセス');
}
const isIOSStandalone = window.navigator.standalone === true;

if(isIOSStandalone) {
    console.log('iOS ホーム画面から起動');
}