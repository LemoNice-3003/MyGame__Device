nowUserName.style.setProperty('--nameLength', textLength + "em");
function onload() {
    if((loginFlag == false) || (typeof sessionStorage === "undefined") || (sessionStorage.length === 0)){ // 初期状態または"0"だった場合
        alert("アカウントなし");
        $("#nowUserName").text("");
        loginNow.style.display = "flex";
        loginButton.style.display = "none";
    }
    else {
        alert("アカウント認識");
        $("#nowUserName").text(userName);
        loginNow.style.display = "none";
        loginButton.style.display = "block";
    }
}

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    onload();
    try {
        textLength = parseInt(userName.length) + 2;
    } catch { alert("miss"); }
    nowUserName.style.setProperty('--nameLength', textLength + "em");
});