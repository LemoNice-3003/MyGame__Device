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
