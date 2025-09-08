const st1_1 = document.getElementById("st1-1");
const st1_2 = document.getElementById("st1-2");
const st1_3 = document.getElementById("st1-3");
const st2_1 = document.getElementById("st2-1");
const st2_2 = document.getElementById("st2-2");
const st2_3 = document.getElementById("st2-3");
const st3_1 = document.getElementById("st3-1");
const st3_2 = document.getElementById("st3-2");
const st3_3 = document.getElementById("st3-3");
const stage_1 = document.getElementById("stage_1");
// const stage_2 = document.getElementById("stage_2");
// const stage_3 = document.getElementById("stage_3");
// const stage_4 = document.getElementById("stage_4");
// const stage_5 = document.getElementById("stage_5");
// const stage_6 = document.getElementById("stage_6");
// const stage_7 = document.getElementById("stage_7");
// const stage_8 = document.getElementById("stage_8");
// const stage_9 = document.getElementById("stage_9");
const root = document.documentElement;
st1_1.addEventListener("click", () => {
    root.style.setProperty("--stage_1_height", "36vw");
    root.style.setProperty("--thum1_width", "24vw");
});
stage_1.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_1_height", "0");
    root.style.setProperty("--thum1_width", "0");
})
st1_2.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_2_height", "36vw");
    root.style.setProperty("--thum2_width", "24vw");
});
st1_2.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_2_height", "0");
    root.style.setProperty("--thum2_width", "0");
})
st1_3.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_3_height", "36vw");
    root.style.setProperty("--thum3_width", "24vw");
});
st1_3.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_3_height", "0");
    root.style.setProperty("--thum3_width", "0");
})
st2_1.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_4_height", "36vw");
    root.style.setProperty("--thum4_width", "24vw");
});
st2_1.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_4_height", "0");
    root.style.setProperty("--thum4_width", "0");
})
st2_2.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_5_height", "36vw");
    root.style.setProperty("--thum5_width", "24vw");
});
st2_2.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_5_height", "0");
    root.style.setProperty("--thum5_width", "0");
})
st2_3.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_6_height", "36vw");
    root.style.setProperty("--thum6_width", "24vw");
});
st2_3.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_6_height", "0");
    root.style.setProperty("--thum6_width", "0");
})
st3_1.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_7_height", "36vw");
    root.style.setProperty("--thum7_width", "24vw");
});
st3_1.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_7_height", "0");
    root.style.setProperty("--thum7_width", "0");
})
st3_2.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_8_height", "36vw");
    root.style.setProperty("--thum8_width", "24vw");
});
st3_2.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_8_height", "0");
    root.style.setProperty("--thum8_width", "0");
})
st3_3.addEventListener("mouseenter", () => {
    root.style.setProperty("--stage_9_height", "36vw");
    root.style.setProperty("--thum9_width", "24vw");
});
st3_3.addEventListener("mouseleave", () => {
    root.style.setProperty("--stage_9_height", "0");
    root.style.setProperty("--thum9_width", "0");
})


document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


const hamburgerMenu = document.querySelector('#js-hamburger');
const hamburgerItems = document.querySelector('#js-items');
const container = document.querySelector('#js-container');

// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    hamburgerItems.classList.toggle('active');
    container.classList.toggle('active');
});

// $(function(){
//    $("span").css({"color" : "red", "font-size" : "100px", "border" : "solid 5px"});
// });
