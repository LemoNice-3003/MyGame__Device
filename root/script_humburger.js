let pathName = '';
nowUserName.style.setProperty('--nameLength', textLength + "em");
function onload() {
    pathName = location.pathname;
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
            setProgress(lines);
            // console.log(userName, userProgress);
            if(loginFlag == "true") {
                alert("すでにログインされています\nログアウトして再度実行してください")
            }
            else {
                await sessionStorage.setItem('loginFlag', true);
                await sessionStorage.setItem('progress', userProgress);
                await sessionStorage.setItem('name', userName);
                goToGamepage(userName, userProgress);
            }
        }
        return;
    }
    else
    {
        alert("テキストファイルをアップロードしてください");
    }
}

async function setProgress(lines) {
    await sessionStorage.setItem('clearFlag_1', lines[2].slice(2, lines[2].length));
    await sessionStorage.setItem('clearFlag_2', lines[3].slice(2, lines[3].length));
    await sessionStorage.setItem('clearFlag_3', lines[4].slice(2, lines[4].length));
    await sessionStorage.setItem('clearFlag_3_0', lines[5].slice(3, lines[5].length));
    await sessionStorage.setItem('clearFlag_3_1', lines[6].slice(3, lines[6].length));
    await sessionStorage.setItem('clearFlag_3_2', lines[7].slice(3, lines[7].length));
    await sessionStorage.setItem('clearFlag_3_3', lines[8].slice(3, lines[8].length));
    await sessionStorage.setItem('clearFlag_4', lines[9].slice(2, lines[9].length));
    await sessionStorage.setItem('clearFlag_5', lines[10].slice(2, lines[10].length));
    await sessionStorage.setItem('clearFlag_5_0', lines[11].slice(3, lines[11].length));
    await sessionStorage.setItem('clearFlag_5_1', lines[12].slice(3, lines[12].length));
    await sessionStorage.setItem('clearFlag_5_2', lines[13].slice(3, lines[13].length));
    await sessionStorage.setItem('clearFlag_5_3', lines[14].slice(3, lines[14].length));
    await sessionStorage.setItem('clearFlag_5_4', lines[15].slice(3, lines[15].length));
    await sessionStorage.setItem('clearFlag_6', lines[16].slice(2, lines[16].length));
    await sessionStorage.setItem('clearFlag_6_0', lines[17].slice(3, lines[17].length));
    await sessionStorage.setItem('clearFlag_6_1', lines[18].slice(3, lines[18].length));
    await sessionStorage.setItem('clearFlag_6_2', lines[19].slice(3, lines[19].length));
}

function goToGamepage(userName, userProgress) {
    if(pathName == '/MyGame__Device/gamepage/index.html') {
        window.location.reload();
    }
    else {
        const url = `gamepage/index.html?name=${encodeURIComponent(userName)}&value=${encodeURIComponent(userProgress)}`;
        window.location.href = url;
    }
}

function logout() {
    try {
        if(window.confirm("ログアウトしますか？")) {
            if(window.confirm("ログアウトします。\nセーブデータをダウンロードしますか？")) {
                downloadSaveData();
                return;
            }
            sessionStorage.clear();
            sessionStorage.setItem('loginFlag', false);
            if (pathName == '/MyGame__Device/gamepage/index.html' || pathName == '/MyGame__Device/introduction/index.html') {
                const url = `../index.html`;
                window.location.href = url;
            }
            else {
                window.location.reload(); // 現在のページをリロード
            }
        }
        else {
            alert("ログアウトがキャンセルされました");
        }
    } catch (e) {
        console.warn("error", e);
    }
}

function downloadSaveData() {
    const txt = `name="${userName}"\nprogress="${nowProgress}"\n10${clearFlag_1}\n20${clearFlag_2}\n30${clearFlag_3}\n300${clearFlag_3_0}\n301${clearFlag_3_1}\n302${clearFlag_3_2}\n303${clearFlag_3_3}\n40${clearFlag_4}\n50${clearFlag_5}\n500${clearFlag_5_0}\n501${clearFlag_5_1}\n502${clearFlag_5_2}\n503${clearFlag_5_3}\n504${clearFlag_5_4}\n60${clearFlag_6}\n600${clearFlag_6_0}\n601${clearFlag_6_1}\n602${clearFlag_6_2}\n`;    
    const blob = new Blob([txt], { type: 'text/plain' });
    
    if(innerWidth > 999) { // pcは自動ダウンロード
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'DeviceSaveData.txt';
        a.click();
    } else { // スマホは手動ダウンロード
        // iOS対応：リンクを直接表示してユーザーにタップさせる
        showDownloadModal(blob);
    }
}

const modal = document.getElementById("downloadModal");
function showDownloadModal(blob) {
    const url = URL.createObjectURL(blob);
    const link = document.getElementById("downloadLink");
    link.href = url;
    link.download = 'DeviceSaveData.txt';
    modal.style.display = "flex"; // 表示
}

function closeDownloadModal() {
    modal.style.display = "none"; // 非表示
    sessionStorage.clear();
    sessionStorage.setItem('loginFlag', false);
    if (pathName == '/MyGame__Device/gamepage/index.html' || pathName == '/MyGame__Device/introduction/index.html') {
        const url = `../index.html`;
        window.location.href = url;
    }
    else {
        window.location.reload(); // 現在のページをリロード
    }
}

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    const isActive = hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');

    if(loginFlag === "true") {
        // alert("アカウント認識");
        if(isActive) {
            $("#nowUserName").text(userName);
            
            loginNow.style.opacity = 1;
            loginNow.style.pointerEvents = 'auto';
            
            loginButton.style.opacity = 0;
            loginButton.style.pointerEvents = 'none';
        }
        else {
            loginNow.style.opacity = 0;
            loginNow.style.pointerEvents = 'none';
            
            loginButton.style.opacity = 0;
            loginButton.style.pointerEvents = 'none';
        }
    }
    else if((loginFlag == "false") || (loginFlag === null) || (typeof sessionStorage === "undefined") || (sessionStorage.length === 0)){ // 初期状態または"0"だった場合
        // alert("アカウントなし");
        if(isActive) {
            $("#nowUserName").text("");
            
            loginNow.style.opacity = 0;
            loginNow.style.pointerEvents = 'none';
            
            loginButton.style.opacity = 1;
            loginButton.style.pointerEvents = 'auto';
        }
        else {
            loginNow.style.opacity = 0;
            loginNow.style.pointerEvents = 'none';
            
            loginButton.style.opacity = 0;
            loginButton.style.pointerEvents = 'none';
        }
    }
    else {
        alert("error");
    }

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
