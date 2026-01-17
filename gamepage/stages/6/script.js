const frame_0 = document.getElementById("frame_0");
const frame_1 = document.getElementById("frame_1");
const frame_2 = document.getElementById("frame_2");

let _0_Width = frame_0.clientWidth;
let _1_Width = frame_1.clientWidth;
let _2_Width = frame_2.clientWidth;

let _0_height = frame_0.clientHeight;
let _1_height = frame_1.clientHeight;
let _2_height = frame_2.clientHeight;

let _0_flg1 = true;
let _1_flg1 = true;
let _2_flg1 = true;

let _0_flg2 = true;
let _1_flg2 = true;
let _2_flg2 = true;

let _0_flg3 = true;
let _1_flg3 = true;
let _2_flg3 = true;

const data = [
    {checkbox: checkbox_6_0, width: _0_Width, height: _0_height, particle_y: "16vh", frame: frame_0, flag1: _0_flg1, flag2: _0_flg2, flag3: _0_flg3},
    {checkbox: checkbox_6_1, width: _1_Width, height: _1_height, particle_y: "34vh", frame: frame_1, flag1: _1_flg1, flag2: _1_flg2, flag3: _1_flg3},
    {checkbox: checkbox_6_2, width: _2_Width, height: _2_height, particle_y: "45vh", frame: frame_2, flag1: _2_flg1, flag2: _2_flg2, flag3: _2_flg3}
];



async function onload() {
    if(nowProgress >= 7) {
        data[0].flag1 = false;
        data[1].flag1 = false;
        data[2].flag1 = false;
        data[0].flag2 = false;
        data[1].flag2 = false;
        data[2].flag2 = false;
        data[0].flag3 = false;
        data[1].flag3 = false;
        data[2].flag3 = false;

        checkClearIcon(clearFlag_6, checkbox_6_0, "50vw", "16vh");
        checkClearIcon(clearFlag_6, checkbox_6_1, "50vw", "34vh");
        checkClearIcon(clearFlag_6, checkbox_6_2, "50vw", "45vh");
    }
}

window.addEventListener('resize', () => {
    data.forEach(item => {
        if(isNear(window.innerWidth, item.width, 20) && item.flag1) {
            turnOnFluorescent(item.frame, "leftright");
            item.flag1 = false;
        }
        if(!isNear(window.innerWidth, item.width, 20) && !item.flag1 && item.flag3) {
            turnOffFluorescent(item.frame, "leftright");
            item.flag1 = true;
        }
        
        if(isNear(window.innerHeight, item.height, 20) && item.flag2) {
            turnOnFluorescent(item.frame, "topbottom");
            item.flag2 = false;
        }
        if(!isNear(window.innerHeight, item.height, 20) && !item.flag2 && item.flag3) {
            turnOffFluorescent(item.frame, "topbottom");
            item.flag2 = true;
        }

        if (!item.flag1 && !item.flag2 && item.flag3) {
            checkClearIcon(clearFlag_6, item.checkbox, "50vw", item.particle_y);
            item.flag1 = false;
            item.flag2 = false;
            item.flag3 = false;
        }
    })
});

/**
 * 
 * @param {実測値} value 
 * @param {目標値} target 
 * @param {許容値} tolerance 
 * @returns 許容内だったらtrue、許容外だったらfalse
 */
function isNear(value, target, tolerance) {
    // value-target で差分を計算
    // Math.abs() で絶対値に変換
    // <=tolerance で許容値を超えてないかを判定
    return Math.abs(value - target) <= tolerance;
}

function turnOnFluorescent(frame, where, duration = 1200) {
    const start = performance.now();

    function flicker(now) {
        const elapsed = now - start;

        // 終了
        if (elapsed > duration) {
            frame.style.opacity = 1;
            if(where == "topbottom") {
                frame.style.borderTopColor = "white";
                frame.style.borderBottomColor = "white";
                frame.style.boxShadow = "0 -10px 10px rgb(220, 220, 220, .8), 0 10px 10px rgb(220, 220, 220, .8), inset 0 10px 10px rgb(220, 220, 220, .8), inset 0 -10px 10px rgb(220, 220, 220, .8)";
            }
            else if(where == "leftright") {
                frame.style.borderLeftColor = "white";
                frame.style.borderRightColor = "white";
                frame.style.boxShadow = "-10px 0 10px rgb(220, 220, 220, .8), 10px 0 10px rgb(220, 220, 220, .8), inset 10px 0 10px rgb(220, 220, 220, .8), inset -10px 0 10px rgb(220, 220, 220, .8)";
            }
            return;
        }

        // 明滅（後半ほど安定）
        const progress = elapsed / duration;
        const instability = 1 - progress;

        const on = Math.random() > instability * 0.6;
        const brightness = on
            ? 0.3 + Math.random() * 0.7
            : 0;

        frame.style.opacity = brightness;
        frame.style.boxShadow =
            brightness > 0
                ? `0 0 ${10 + brightness * 15}px rgb(255,255,255,${brightness})`
                : "0 0 0 rgb(255,255,255,0)";

        setTimeout(() => flicker(performance.now()), 30 + Math.random() * 50);
    }

    flicker(start);
}


function turnOffFluorescent(frame, where, duration = 1200) {
    const start = performance.now();

    function flicker(now) {
        const elapsed = now - start;

        // 終了
        if (elapsed > duration) {
            frame.style.opacity = 1;
            if(where == "topbottom") {
                frame.style.borderTopColor = "black";
                frame.style.borderBottomColor = "black";
                frame.style.boxShadow = "none";
            }
            else if(where == "leftright") {
                frame.style.borderLeftColor = "black";
                frame.style.borderRightColor = "black";
                frame.style.boxShadow = "none";
            }
            return;
        }

        // 明滅（後半ほど安定）
        const progress = elapsed / duration;
        const instability = 1 - progress;

        const on = Math.random() > instability * 0.6;
        const brightness = on
            ? 0.3 + Math.random() * 0.7
            : 0;

        frame.style.opacity = brightness;
        frame.style.boxShadow =
            brightness > 0
                ? `0 0 ${10 + brightness * 15}px rgb(255,255,255,${brightness})`
                : "0 0 0 rgb(255,255,255,0)";

        setTimeout(() => flicker(performance.now()), 30 + Math.random() * 50);
    }

    flicker(start);
}
