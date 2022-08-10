function bgResize(bgElementClassName, spriteWidth, spriteHight, needWidth, needHight, spriteMinWidth, spriteMinHeight) {
    var bg = document.querySelectorAll(bgElementClassName);
    //背景宽度= 要的宽度/精灵图宽度 *精灵图宽度
    //背景高度= 要的高度/精灵图高度 *精灵图高度
    var bgWidth = (needWidth / spriteMinWidth) * spriteWidth;
    var bgHight = (needHight / spriteMinHeight) * spriteHight;
    bgWidth = Math.ceil(bgWidth);
    bgHight = Math.ceil(bgHight);
    console.log('宽度' + bgWidth + ' 高度' + bgHight);
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundSize = bgWidth + 'px' + ' ' + bgHight + 'px';
    }
}