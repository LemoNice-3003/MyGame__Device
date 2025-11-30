const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); //sleep関数の定義

async function checkClearIcon() {
    await sleep(2000);
    $("#rectangle2").css({"opacity" : 1});
}