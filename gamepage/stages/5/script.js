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


async function onload() {
    if(nowProgress >= 6) {
        await checkClearIcon(clearFlag_5, checkbox_5_0, "50vw", "50vh");
    }
}

_0_val.textContent = _0_Width + "px";
_1_val.textContent = _1_Width + "px";
_2_val.textContent = _2_Width + "px";
_3_val.textContent = _3_Width + "px";
_4_val.textContent = _4_Width + "px";

document.addEventListener('wheel', async function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
        
        if (event.deltaY > 0) { //下方向（スクロールダウン）
            _0_Width = Math.round(_0_Width / 1.5);
            if(_0_Width < 50) {
                _0_Width = Math.round(_0_Width * 1.5);
                return;
            }
        }
        else if (event.deltaY < 0) { //上方向（スクロールアップ）
            _0_Width = Math.round(_0_Width * 1.5);
            if(_0_Width > 1100) {
                _0_Width = Math.round(_0_Width / 1.5);
            }
        }
        let _0_NewWidth = _0_Width.toString() + "px"
        await checkbox_5_0.style.setProperty("--defaultWidh-5-0", _0_NewWidth);
        _0_val.textContent = _0_Width + "px";
        await checkClearIcon(clearFlag_5, checkbox_5_0, "50vw", "50vh");
    }
}, { passive: false });
