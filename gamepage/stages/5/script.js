const _0_cssField = "--defaultWidh-5-0";
const _1_cssField = "--defaultWidh-5-1";
const _2_cssField = "--defaultWidh-5-2";
const _3_cssField = "--defaultWidh-5-3";
const _4_cssField = "--defaultWidh-5-4";

let _0_Width = checkbox_5_0.clientWidth;
let _1_Width = checkbox_5_1.clientWidth;
let _2_Width = checkbox_5_2.clientWidth;
let _3_Width = checkbox_5_3.clientWidth;
let _4_Width = checkbox_5_4.clientWidth;

let _0_val = document.getElementById('px_val_5_0');
let _1_val = document.getElementById('px_val_5_1');
let _2_val = document.getElementById('px_val_5_2');
let _3_val = document.getElementById('px_val_5_3');
let _4_val = document.getElementById('px_val_5_4');

let _0_flg = true;
let _1_flg = true;
let _2_flg = true;
let _3_flg = true;
let _4_flg = true;

const data = [
    {checkbox: checkbox_5_0, css: _0_cssField, width: _0_Width, var: _0_val, flag: _0_flg},
    {checkbox: checkbox_5_1, css: _1_cssField, width: _1_Width, var: _1_val, flag: _1_flg},
    {checkbox: checkbox_5_2, css: _2_cssField, width: _2_Width, var: _2_val, flag: _2_flg},
    {checkbox: checkbox_5_3, css: _3_cssField, width: _3_Width, var: _3_val, flag: _3_flg},
    {checkbox: checkbox_5_4, css: _4_cssField, width: _4_Width, var: _4_val, flag: _4_flg}
];



async function onload() {
    if(nowProgress >= 6) {
        data[0].flag = false;
        data[0].width = 68;
        data[0].checkbox.style.setProperty(data[0].css, "68px");

        data[1].flag = false;
        data[1].width = 113;
        data[1].checkbox.style.setProperty(data[1].css, "113px");

        data[2].flag = false;
        data[2].width = 50;
        data[2].checkbox.style.setProperty(data[2].css, "50px");

        data[3].flag = false;
        data[3].width = 60;
        data[3].checkbox.style.setProperty(data[3].css, "60px");

        data[4].flag = false;
        data[4].width = 201;
        data[4].checkbox.style.setProperty(data[4].css, "201px");

        checkbox_5_0.style.backgroundColor = "rgb(157, 152, 135)";
        checkbox_5_1.style.backgroundColor = "rgb(157, 152, 135)";
        checkbox_5_2.style.backgroundColor = "rgb(157, 152, 135)";
        checkbox_5_3.style.backgroundColor = "rgb(157, 152, 135)";
        checkbox_5_4.style.backgroundColor = "rgb(157, 152, 135)";

        checkClearIcon(clearFlag_5, checkbox_5_0, "10vw", "80vh");
        checkClearIcon(clearFlag_5, checkbox_5_1, "30vw", "25vh");
        checkClearIcon(clearFlag_5, checkbox_5_2, "50vw", "50vh");
        checkClearIcon(clearFlag_5, checkbox_5_3, "70vw", "86vh");
        checkClearIcon(clearFlag_5, checkbox_5_4, "90vw", "1vh");
    }
    else {
        if(clearFlag_5_0) {
            data[0].checkbox.style.setProperty(data[0].css, "68px");
            data[0].flag = false;
            data[0].width = 68;
            checkbox_5_0.style.backgroundColor = "rgb(157, 152, 135)";
            await checkClearIcon(clearFlag_5, checkbox_5_0, "10vw", "80vh");
        }
        if(clearFlag_5_1) {
            data[1].checkbox.style.setProperty(data[1].css, "113px");
            data[1].flag = false;
            data[1].width = 113;
            checkbox_5_1.style.backgroundColor = "rgb(157, 152, 135)";
            await checkClearIcon(clearFlag_5, checkbox_5_1, "10vw", "80vh");
        }
        if(clearFlag_5_2) {
            data[2].checkbox.style.setProperty(data[2].css, "50px");
            data[2].flag = false;
            data[2].width = 50;
            checkbox_5_2.style.backgroundColor = "rgb(157, 152, 135)";
            await checkClearIcon(clearFlag_5, checkbox_5_2, "50vw", "50vh");
        }
        if(clearFlag_5_3) {
            data[3].checkbox.style.setProperty(data[3].css, "60px");
            data[3].flag = false;
            data[3].width = 60;
            checkbox_5_3.style.backgroundColor = "rgb(157, 152, 135)";
            await checkClearIcon(clearFlag_5, checkbox_5_3, "70vw", "86vh");
        }
        if(clearFlag_5_4) {
            data[4].checkbox.style.setProperty(data[4].css, "201px");
            data[4].flag = false;
            data[4].width = 201;
            checkbox_5_4.style.backgroundColor = "rgb(157, 152, 135)";
            await checkClearIcon(clearFlag_5, checkbox_5_4, "90vw", "1vh");
        }
    }
}


document.addEventListener('wheel', async function(event) {
    if(event.ctrlKey) {
        event.preventDefault();
        
        if(event.deltaY > 0) { //下方向（スクロールダウン）
            zoomOut();
        }
        else if(event.deltaY < 0) { //上方向（スクロールアップ）
            zoomIn();
        }
        
        transformBoxsize();
    }
}, { passive: false });
document.addEventListener('touchstart', async function(event) {
    // 2本指でタッチされている場合のみ処理
    if(event.touches.length === 2) {
        if(isPinchZooming()) {
            zoomIn();
            await sleep(1500);
        }
    }
}, false);

function isPinchZooming() {
  return window.visualViewport.scale > 1
}

function zoomIn() {
    data.forEach(item => {
        if(item.flag) {
            item.width = Math.round(item.width * 1.5);
        }
        if(item.width > 1100) {
            item.width = Math.round(item.width / 1.5);
            return;
        }
    });
}

function zoomOut() {
    data.forEach(item => {
        if(item.flag) {
            item.width = Math.round(item.width / 1.5);
        }
        if(item.width < 50) {
            item.width = Math.round(item.width * 1.5);
            return;
        }
    });
}

async function transformBoxsize() {
    data.forEach(item => {
        item.checkbox.style.setProperty(item.css, `${item.width}px`); //cssの値を変更（checkboxの大きさ
    });
    
    if(data[0].width <= 68 && data[0].flag) {
        data[0].flag = false;
        clearFlag_5_0 = true;
        await sessionStorage.setItem('clearFlag_5_0', true);
        checkbox_5_0.style.backgroundColor = "rgb(157, 152, 135)";
        await checkClearIcon(clearFlag_5, checkbox_5_0, "10vw", "80vh");
    }
    if(data[1].width == 113 && data[1].flag) {
        data[1].flag = false;
        clearFlag_5_1 = true;
        await sessionStorage.setItem('clearFlag_5_1', true);
        checkbox_5_1.style.backgroundColor = "rgb(157, 152, 135)";
        await checkClearIcon(clearFlag_5, checkbox_5_1, "10vw", "80vh");
    }
    if(data[2].width <= 50 && data[2].flag) {
        data[2].flag = false;
        clearFlag_5_2 = true;
        await sessionStorage.setItem('clearFlag_5_2', true);
        checkbox_5_2.style.backgroundColor = "rgb(157, 152, 135)";
        await checkClearIcon(clearFlag_5, checkbox_5_2, "50vw", "50vh");
    }
    if(data[3].width <= 60 && data[3].flag) {
        data[3].flag = false;
        clearFlag_5_3 = true;
        await sessionStorage.setItem('clearFlag_5_3', true);
        checkbox_5_3.style.backgroundColor = "rgb(157, 152, 135)";
        await checkClearIcon(clearFlag_5, checkbox_5_3, "70vw", "86vh");
    }
    if(data[4].width == 201 && data[4].flag) {
        data[4].flag = false;
        clearFlag_5_4 = true;
        await sessionStorage.setItem('clearFlag_5_4', true);
        checkbox_5_4.style.backgroundColor = "rgb(157, 152, 135)";
        await checkClearIcon(clearFlag_5, checkbox_5_4, "90vw", "1vh");
    }
    
    if(!data[0].flag && !data[1].flag && !data[2].flag && !data[3].flag && !data[4].flag) {
        if(nowProgress == 5) {
            clearFlag_5 = true;
            await sessionStorage.setItem('progress', nowProgress + 1);
        }
    }
}
