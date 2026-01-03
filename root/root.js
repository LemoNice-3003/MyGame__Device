/**
 * @type {string} セッションストレージ内の、ログインの有無を判定しているflag
 */
const loginFlag = sessionStorage.getItem('loginFlag');

const hamburgerMenu = document.getElementById('js-hamburger');
const hamburgerItems = document.getElementById('js-items');
const container = document.getElementById('js-container');


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
 * 
 */
const nowProgress = Number(sessionStorage.getItem('progress'));

let clearFlag_1 = false;
let clearFlag_2 = false;
let clearFlag_3 = false;
let clearFlag_4 = false;
let clearFlag_5 = false;
let clearFlag_6 = false;
let clearFlag_7 = false;
let clearFlag_8 = false;
let clearFlag_9 = false;

document.addEventListener('touchend', (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300 && timeDifference > 0) {
    event.preventDefault(); // ダブルタップを無効化
    }
    
    lastTouchTime = currentTime;
});


const checkbox_1_0 = document.getElementById("checkbox_1_0");

const checkbox_2_0 = document.getElementById("checkbox_2_0");
const checkbox_2_1 = document.getElementById("checkbox_2_1");
const checkbox_2_2 = document.getElementById("checkbox_2_2");
const checkbox_2_3 = document.getElementById("checkbox_2_3");

const checkbox_4_0 = document.getElementById("checkbox_4_0");
