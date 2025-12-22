let secondTimer;
let minuteTimer;
let hourTimer;
secondTimer = setInterval(secondClock, 1000);
minuteTimer = setInterval(minuteClock, 60000);
hourTimer = setInterval(hourClock, 3600000);

const secondDial = document.getElementById("second");
const minuteDial = document.getElementById("minute");
const hourDial = document.getElementById("hour");
let secondAngle = 0;
let minuteAngle = 0;
let hourAngle = 0;


function onload() {
    if(nowProgress >= 4) {
        checkClearIcon();
    }

    let now = new Date();
    let hour24 = now.getHours();
    let hour12 = hour24 % 12 || 12;
    console.log(hour12);
    secondAngle = parseInt(now.getSeconds()) * 6;
    minuteAngle = parseInt(now.getMinutes()) * 6;
    hourAngle = parseInt(hour12) * 30;
    secondDial.style.transform = `rotate(${secondAngle}deg)`;
    minuteDial.style.transform = `rotate(${minuteAngle}deg)`;
    hourDial.style.transform = `rotate(${hourAngle}deg)`;
}

function secondClock() {
    let now = new Date();
    secondAngle += 6;
    secondDial.style.transform = `rotate(${secondAngle}deg)`;
    console.log(now.toLocaleTimeString('ja-JP', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    }));
}
function minuteClock() {
    minuteAngle += 6;
    minuteDial.style.transform = `rotate(${minuteAngle}deg)`;
    minuteDial.style.transition = `transform 60s linear`;
}
function hourClock() {
    hourAngle += 30;
    hourDial.style.transform = `rotate(${hourAngle}deg)`;
    hourDial.style.transition = `transform 3600s linear`;
}
