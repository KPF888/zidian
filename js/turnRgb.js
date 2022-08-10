function turnRgb(obj, current, target) {
    // 初始化移动值
    var moveRgb = [0, 0, 0];
    for (var i = 0; i < moveRgb.length; i++) {
        moveRgb[i] = target[i] - current[i];
    }
    obj.timer = setInterval(function () {

    }, 15)
}