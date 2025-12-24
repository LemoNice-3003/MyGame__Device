let clockTimer;
clockTimer = setInterval(updateClock, 1000);

const secondDial = document.getElementById("second");
const minuteDial = document.getElementById("minute");
const hourDial = document.getElementById("hour");

let lastSecondDeg = 0;
let lastMinuteDeg = 0;
let lastHourDeg = 0;
let secondRotation = 0;
let minuteRotation = 0;
let hourRotation = 0;

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

function onload() {
    if(nowProgress >= 4) {
        checkClearIcon(checkbox_2_0, "30vw", "50vh");
    }

    updateClock();
}

function updateClock() {
    const now = new Date();

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

    if(colorCount > 23) {
        colorCount = 0;
    }
    timeZone.style.setProperty('--sora-color', soraColor[now.getHours()]);
    console.log(now.getHours());
    colorCount++;
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
