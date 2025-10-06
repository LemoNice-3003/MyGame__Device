var $moveTile = $('#moveTile');
var volumeStr, volumeNum, newVolume;
// 現在の--volumeの値を取得
volumeStr = $moveTile.css('--volume').trim();
// 数値部分を抽出
volumeNum = parseFloat(volumeStr);
document.getElementById("moveTile").innerHTML = volumeNum;

document.addEventListener("keydown", function(event) {
    volumeStr = $moveTile.css('--volume').trim();
    volumeNum = parseFloat(volumeStr);
    if (event.key == "ArrowDown" && volumeNum > 0) {
        newVolume = volumeNum - 1;
    }
    if (event.key == "ArrowUp" && volumeNum < 60) {
        newVolume = volumeNum + 1;
    }

    var displayVolume = Math.floor(newVolume * (100 / 60));
    document.getElementById("moveTile").innerHTML = displayVolume;
    $(function changeVolume() {
        $moveTile.css('--volume', Math.floor(newVolume) + '%');
    });
});
