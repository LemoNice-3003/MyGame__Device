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


// セーブデータアップロードボタンのクリック時に実行する関数
function uploadSaveData() {
    const showOpenFileDialog = () => new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';    //inputのタイプ
        input.accept = 'text/plain';    //読み込むファイルの種類
        input.onchange = () => { resolve(input.files); };
        input.click();
    });
    (async () => {
        const files = await showOpenFileDialog();   //fileにダイアログで選択したtxtファイルのデータを渡す
        const val = await files[0];  //contentに開いたtxtファイルの中身を移す
        checkFileType(val);
    })();
}



async function checkFileType(text) {
    if (/\.(txt)$/i.test(text.name)) // ファイルの拡張子チェック
    {
        const dropContent = await text.text(); // データをテキストとして読み込む
        const lines = dropContent.split(/\r?\n/); // 行ごとに分割し、格納
        // console.log(lines);
        if (dropContent.slice(0, 5) == "name=") {
            const userName = lines[0].slice(6, lines[0].indexOf('\n')); // ユーザー名
            const userProgress = lines[1].slice(10, lines[1].indexOf('\n')); // 進捗度（ステージがどこまで解放されているか）
            // console.log(userName, userProgress);
            if(loginFlag == "true") {
                alert("すでにログインされています\nログアウトして再度実行してください")
            }
            else {
                if(userName == "kakapo") {
                    kakapo();
                } else {
                    goToGamepage(userName, userProgress);
                    sessionStorage.setItem('loginFlag', true);
                    sessionStorage.setItem('progress', userProgress);
                    sessionStorage.setItem('name', userName);
                }
            }
        }
        return;
    }
    else
    {
        alert("テキストファイルをアップロードしてください");
    }
}
function goToGamepage(userName, userProgress) {
    const url = `gamepage/index.html?name=${encodeURIComponent(userName)}&value=${encodeURIComponent(userProgress)}`;
    window.location.href = url;
}

function logout() {
    try {
        if(window.confirm("ログアウトしますか？")) {
            sessionStorage.clear()
            sessionStorage.setItem('loginFlag', false);
            alert("ログアウトします");
            window.location.reload(); // 現在のページをリロード
        }
        else {
            alert("ログアウトがキャンセルされました")
        }
    } catch (e) {
        console.warn("error", e);
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
