const bounds = checkbox_2_0.getBoundingClientRect();
const x = bounds.left + 45 + "px";
const y = bounds.top + 45 + "px";

async function onload() {
    console.log(x, y);
    if(nowProgress >= 3) {
        await checkClearIcon(clearFlag_2, checkbox_2_0, x, y);
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
    alert('iOS ホーム画面から起動');
}


if(isAppLaunch() || isIOSStandalone) {
    alert('clear');
    checkClearIcon(clearFlag_2, checkbox_2_0, x, y);
    clearFlag_2 = true;
    if (clearFlag_2 && nowProgress == 2) {
        sessionStorage.setItem('progress', nowProgress + 1);
    }
}
