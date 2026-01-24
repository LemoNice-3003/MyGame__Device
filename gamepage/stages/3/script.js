let clockTimer;
clockTimer = setInterval(updateClock, 1000);

let flag_3_0 = false;
let flag_3_1 = false;
let flag_3_2 = false;
let flag_3_3 = false;

const secondDial = document.getElementById("second");
const minuteDial = document.getElementById("minute");
const hourDial = document.getElementById("hour");

let lastSecondDeg = 0;
let lastMinuteDeg = 0;
let lastHourDeg = 0;
let secondRotation = 0;
let minuteRotation = 0;
let hourRotation = 0;

let lastHourTime = 0;

const timeZone = document.getElementById("timeZone");
var soraColor =  {
    0:'#01002a',
    1:'#0b0052',
    2:'#1f136f',
    3:'#303990',
    4:'#5358a1',
    5:'#7dadde',
    6:'#b2e0f7',
    7:'#aedef5',
    8:'#95d4f5',
    9:'#7ac9f2',
    10:'#5cc1ed',
    11:'#42bced',
    12:'#1eb7ed',
    13:'#56c0ef',
    14:'#92d0dd',
    15:'#beca90',
    16:'#ddad51',
    17:'#ed7002',
    18:'#b0534b',
    19:'#6c2f6a',
    20:'#2e238d',
    21:'#1e136f',
    22:'#130769',
    23:'#000046'
};
let colorCount = 1;

async function onload() {
    const now = new Date();
    if(nowProgress >= 4) {
        timeCheck(5);
        timeCheck(12);
        timeCheck(17);
        timeCheck(23);
    }
    else {
        // 最初に条件を満たしているものがあればクリア判定を出す
        if(clearFlag_3_0) {
            timeCheck(5);
        }
        if(clearFlag_3_1) {
            timeCheck(12);
        }
        if(clearFlag_3_2) {
            timeCheck(17);
        }
        if(clearFlag_3_3) {
            timeCheck(23);
        }

        timeCheck(now.getHours());
    }
    lastHourTime = now.getHours(); // 読み込んだ時の時間を記録しておく

    updateClock(); // 時計スタート
}

function updateClock() {
    const now = new Date();
    // console.log(now.getHours(), now.getMinutes(), now.getSeconds());
    const ms = now.getMilliseconds();

    const second = now.getSeconds() + ms / 1000;
    const secondCurrentDeg = second * 6;
    lastSecondDeg = checkOverflow("second", secondCurrentDeg, lastSecondDeg);
    
    const minute = now.getMinutes() + second / 60;
    const minuteCurrentDeg = minute * 6;
    lastMinuteDeg = checkOverflow("minute", minuteCurrentDeg, lastMinuteDeg);
    
    const hour = now.getHours() % 12 + minute / 60;
    const hourCurrentDeg = hour * 30;
    lastHourDeg = checkOverflow("hour", hourCurrentDeg, lastHourDeg);
    

    const secondAngle = secondCurrentDeg + secondRotation;
    const minuteAngle = minuteCurrentDeg + minuteRotation;
    const hourAngle = hourCurrentDeg + hourRotation;


    secondDial.style.transform = `rotate(${secondAngle}deg)`;
    minuteDial.style.transform = `rotate(${minuteAngle}deg)`;
    hourDial.style.transform = `rotate(${hourAngle}deg)`;

    timeZone.style.setProperty('--sora-color', soraColor[now.getHours()]);
    if(lastHourTime != now.getHours()) {
        timeCheck(now.getHours());
    }
    lastHourTime = now.getHours();
}

function checkOverflow(type, current, deg) {
    switch(type) {
        case "second":
            if(current < deg) {
                secondRotation += 360;
            }
            return current;
            
        case "minute":
            if(current < deg) {
                minuteRotation += 360;
            }
            return current;
        
        case "hour":
            if(current < deg) {
                hourRotation += 360;
            }
            return current;

        default:
            break;
    }
}

async function timeCheck(nowHour) {
    if(nowHour >= 4 && nowHour <= 7 && !flag_3_0) {
        await checkClearIcon(clearFlag_3, checkbox_3_0, "30vw", "50vh");
        flag_3_0 = true;
        await sessionStorage.setItem('clearFlag_3_0', true);
    }
    if(nowHour >= 11 && nowHour <= 13 && !flag_3_1) {
        await checkClearIcon(clearFlag_3, checkbox_3_1, "50vw", "10vh");
        flag_3_1 = true;
        await sessionStorage.setItem('clearFlag_3_1', true);
    }
    if(nowHour >= 16 && nowHour <= 18 && !flag_3_2) {
        await checkClearIcon(clearFlag_3, checkbox_3_2, "70vw", "50vh");
        flag_3_2 = true;
        await sessionStorage.setItem('clearFlag_3_2', true);
    }
    if(nowHour == 22 || nowHour == 23 || nowHour == 0 || nowHour == 1 && !flag_3_3) {
        await checkClearIcon(clearFlag_3, checkbox_3_3, "50vw", "90vh");
        flag_3_3 = true;
        await sessionStorage.setItem('clearFlag_3_3', true);
    }

    if(flag_3_0 && flag_3_1 && flag_3_2 && flag_3_3 && !clearFlag_3 && nowProgress == 3) {
        clearFlag_3 = true;
        await sessionStorage.setItem('progress', nowProgress + 1);
    }
}
