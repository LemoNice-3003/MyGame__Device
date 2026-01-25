/**
 * @type {string} セッションストレージ内の、ログインの有無を判定しているflag
 */
const loginFlag = sessionStorage.getItem('loginFlag');


/**
 * @type {Element | null} ログインしているユーザーの名前
 */
const nowUserName = document.querySelector('#nowUserName');

/**
 * @type {Element | null} ログインしているときにメニューに表示される要素（「ユーザー名」「Log out」）
 */
const loginNow = document.querySelector('#loginNow');

/**
 * @type {Element | null} ログインしていないときにメニューに表示される要素（「Log in」）
 */
const loginButton = document.querySelector('#loginButton');


/**
 * @type {string} セッションストレージ内の、ログインしているユーザーの名前
 */
const userName = sessionStorage.getItem('name');
/**
 * @type {number} ユーザーの名前の長さを格納するフィールド
 */
let textLength = 0;
/**
 * セッションストレージ内の、ログインしているユーザーの進捗度
 */
const nowProgress = Number(sessionStorage.getItem('progress'));


let clearFlag_1 = sessionStorage.getItem('clearFlag_1') === 'true';

let clearFlag_2 = sessionStorage.getItem('clearFlag_2') === 'true';

let clearFlag_3 = sessionStorage.getItem('clearFlag_3') === 'true';
let clearFlag_3_0 = sessionStorage.getItem('clearFlag_3_0') === 'true';
let clearFlag_3_1 = sessionStorage.getItem('clearFlag_3_1') === 'true';
let clearFlag_3_2 = sessionStorage.getItem('clearFlag_3_2') === 'true';
let clearFlag_3_3 = sessionStorage.getItem('clearFlag_3_3') === 'true';

let clearFlag_4 = sessionStorage.getItem('clearFlag_4') === 'true';

let clearFlag_5 = sessionStorage.getItem('clearFlag_5') === 'true';
let clearFlag_5_0 = sessionStorage.getItem('clearFlag_5_0') === 'true';
let clearFlag_5_1 = sessionStorage.getItem('clearFlag_5_1') === 'true';
let clearFlag_5_2 = sessionStorage.getItem('clearFlag_5_2') === 'true';
let clearFlag_5_3 = sessionStorage.getItem('clearFlag_5_3') === 'true';
let clearFlag_5_4 = sessionStorage.getItem('clearFlag_5_4') === 'true';

let clearFlag_6 = sessionStorage.getItem('clearFlag_6') === 'true';
let clearFlag_6_0 = sessionStorage.getItem('clearFlag_6_0') === 'true';
let clearFlag_6_1 = sessionStorage.getItem('clearFlag_6_1') === 'true';
let clearFlag_6_2 = sessionStorage.getItem('clearFlag_6_2') === 'true';
// let clearFlag_7 = false;
// let clearFlag_8 = false;
// let clearFlag_9 = false;

const checkbox_1_0 = document.getElementById("checkbox_1_0");

const checkbox_2_0 = document.getElementById("checkbox_2_0");

const checkbox_3_0 = document.getElementById("checkbox_3_0");
const checkbox_3_1 = document.getElementById("checkbox_3_1");
const checkbox_3_2 = document.getElementById("checkbox_3_2");
const checkbox_3_3 = document.getElementById("checkbox_3_3");

const checkbox_4_0 = document.getElementById("checkbox_4_0");

const checkbox_5_0 = document.getElementById("checkbox_5_0");
const checkbox_5_1 = document.getElementById("checkbox_5_1");
const checkbox_5_2 = document.getElementById("checkbox_5_2");
const checkbox_5_3 = document.getElementById("checkbox_5_3");
const checkbox_5_4 = document.getElementById("checkbox_5_4");

const checkbox_6_0 = document.getElementById("checkbox_6_0");
const checkbox_6_1 = document.getElementById("checkbox_6_1");
const checkbox_6_2 = document.getElementById("checkbox_6_2");


document.addEventListener('touchend', (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300 && timeDifference > 0) {
    event.preventDefault(); // ダブルタップを無効化
    }
    
    lastTouchTime = currentTime;
});

















// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');
    }
});








let lastTouchTime = 0;

newName.form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        doneNewName();
        e.preventDefault();  // Enterキー入力によるformの再読み込み（ページ自体の更新）を防止
    }
});

// 新しいセーブデータを作るときのボタンの処理
async function doneNewName() {
    const newName = document.getElementById('newName');
    // 異常処理
    if (!newName.value || newName.value.length > 10) {
        alert("名前が無効です。再入力してください。");
        return;
    }

    await sessionStorage.setItem('loginFlag', true);
    await sessionStorage.setItem('progress', 1);
    await sessionStorage.setItem('name', newName.value);
    await sessionStorage.setItem('clearFlag_1', false);
    await sessionStorage.setItem('clearFlag_2', false);
    await sessionStorage.setItem('clearFlag_3', false);
    await sessionStorage.setItem('clearFlag_3_0', false);
    await sessionStorage.setItem('clearFlag_3_1', false);
    await sessionStorage.setItem('clearFlag_3_2', false);
    await sessionStorage.setItem('clearFlag_3_3', false);
    await sessionStorage.setItem('clearFlag_4', false);
    await sessionStorage.setItem('clearFlag_5', false);
    await sessionStorage.setItem('clearFlag_5_0', false);
    await sessionStorage.setItem('clearFlag_5_1', false);
    await sessionStorage.setItem('clearFlag_5_2', false);
    await sessionStorage.setItem('clearFlag_5_3', false);
    await sessionStorage.setItem('clearFlag_5_4', false);
    await sessionStorage.setItem('clearFlag_6', false);
    await sessionStorage.setItem('clearFlag_6_0', false);
    await sessionStorage.setItem('clearFlag_6_1', false);
    await sessionStorage.setItem('clearFlag_6_2', false);
    goToGamepage(newName.value, 1);
}

var form = document.forms.myGameSite;


document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });



$('#circle1')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle2')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle3')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});
$('#circle4')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});