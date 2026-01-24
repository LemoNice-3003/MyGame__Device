async function onload() {
    if(nowProgress >= 5) {
        await checkClearIcon(clearFlag_4, checkbox_4_0, "50vw", "50vh");
    }
}

async function clearOnce() {
    checkClearIcon(clearFlag_4, checkbox_4_0, "50vw", "50vh");
    clearFlag_4 = true;
    await sessionStorage.setItem('clearFlag_4', true);
    if (clearFlag_4 && nowProgress == 4) {
        await sessionStorage.setItem('progress', nowProgress + 1);
    }
}

window.addEventListener("beforeprint", clearOnce);

// Safari対策
const mq = window.matchMedia("print");
mq.addEventListener("change", e => {
    if (e.matches) clearOnce();
});
