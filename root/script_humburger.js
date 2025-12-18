nowUserName.style.setProperty('--nameLength', textLength + "em");
function onload() {
    if(loginFlag === "true") {
        // alert("アカウント認識");
        $("#nowUserName").text(userName);
        
        loginNow.style.opacity = 1;
        loginNow.style.pointerEvents = 'auto';
        
        loginButton.style.opacity = 0;
        loginButton.style.pointerEvents = 'none';
    }
    else if((loginFlag == "false") || (loginFlag === null) || (typeof sessionStorage === "undefined") || (sessionStorage.length === 0)){ // 初期状態または"0"だった場合
        // alert("アカウントなし");
        $("#nowUserName").text("");
        
        loginNow.style.opacity = 0;
        loginNow.style.pointerEvents = 'none';
        
        loginButton.style.opacity = 1;
        loginButton.style.pointerEvents = 'auto';
    }
    else {
        alert("error");
    }
}

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    try {
        textLength = parseInt(userName.length) + 2;
        sessionStorage.setItem('loginFlag', true);
    } catch {
        // alert(`名前：${textLength}文字`);
        sessionStorage.setItem('loginFlag', false);
    }
    nowUserName.style.setProperty('--nameLength', textLength + "em");
    onload();
});
