let parsent = document.getElementById('par');
let vw = document.getElementById('vw');
let px = document.getElementById('px');

let parsentWidth = parsent.clientWidth;
let vwWidth = vw.clientWidth;
let pxWidth = px.clientWidth;

let parsent_val = document.getElementById("par_val");
let vw_val = document.getElementById('vw_val');
let px_val = document.getElementById('px_val');


async function onload() {
    if(nowProgress >= 6) {
        await checkClearIcon(clearFlag_5, checkbox_5_0, "50vw", "50vh");
    }
}

parsent_val.textContent = parsentWidth + "px";
vw_val.textContent = vwWidth + "px";
px_val.textContent = pxWidth + "px";
