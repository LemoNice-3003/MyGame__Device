const loginFlag = sessionStorage.getItem('loginFlag');

const hamburgerMenu = document.getElementById('js-hamburger');
const hamburgerItems = document.getElementById('js-items');
const container = document.getElementById('js-container');


const nowUserName = document.querySelector('#nowUserName');
const loginNow = document.querySelector('#loginNow');
const loginButton = document.querySelector('#loginButton');



const userName = sessionStorage.getItem('name');
let textLength = 0;
const nowProgress = Number(sessionStorage.getItem('progress'));

document.addEventListener('touchend', (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300 && timeDifference > 0) {
    event.preventDefault(); // ダブルタップを無効化
    }
    
    lastTouchTime = currentTime;
});
