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
    1:'#FF0000',
    2:'#FF7F00',
    3:'#FFFF00',
    4:'#00FF00',
    5:'#0000FF',
    6:'#4B0082',
    7:'#9400D3'
};
let colorCount = 1;

function onload() {
    if(nowProgress >= 4) {
        checkClearIcon();
    }

    updateClock();
}

function updateClock() {
    const now = new Date();

    const ms = now.getMilliseconds();

    const second = now.getSeconds() + ms / 1000;
    const secondCurrentDeg = second * 6;
    lastSecondDeg = checkOverFllow("second", secondCurrentDeg, lastSecondDeg);
    
    const minute = now.getMinutes() + second / 60;
    const minuteCurrentDeg = minute * 6;
    lastMinuteDeg = checkOverFllow("minute", minuteCurrentDeg, lastMinuteDeg);
    
    const hour = now.getHours() % 12 + minute / 60;
    const hourCurrentDeg = hour * 30;
    lastHourDeg = checkOverFllow("hour", hourCurrentDeg, lastHourDeg);
    

    const secondAngle = secondCurrentDeg + secondRotation;
    const minuteAngle = minuteCurrentDeg + minuteRotation;
    const hourAngle = hourCurrentDeg + hourRotation;


    secondDial.style.transform = `rotate(${secondAngle}deg)`;
    minuteDial.style.transform = `rotate(${minuteAngle}deg)`;
    hourDial.style.transform = `rotate(${hourAngle}deg)`;

    if(colorCount > 7) {
        colorCount = 1;
    }
    timeZone.style.setProperty('--sora-color', soraColor[colorCount]);
    colorCount++;
}

function checkOverFllow(type, current, deg) {
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
