window.addEventListener('DOMContentLoaded', function () {
    var Focus = this.document.querySelector('.focus');
    var focus_ul = Focus.querySelector('ul');
    //添加轮播图
    // 轮播
    lunbo('.focus', '.arrow-l', '.arrow-r', '.circle', 'current');
    lunboUniform('.pro_focus', 10);
    lunboY('.apl_ba_focus', '.apl_arrow-l', '.apl_arrow-r', '.apl_circle', 'apl_current');

    //给focus宽度
    Focus.style.width = this.document.body.clientWidth + 'px';

    //给每个轮播图li 屏幕的宽度
    var Focus_ul_lis = this.document.querySelector('.focus').querySelector('ul').querySelectorAll('li');
    for (var i = 0; i < Focus_ul_lis.length; i++) {
        Focus_ul_lis[i].style.width = Focus.clientWidth + 'px';
        Focus_ul_lis[i].style.height = Focus.clientWidth / 2 + 'px';
    }

    //给轮播图的ul高度
    Focus.style.height = Focus.clientWidth / 2 + 'px';
    focus_ul.style.height = Focus.clientWidth / 2 + 'px';

    //给产品轮播图的a背景重置宽度
    bgResize('.pro_a_img', 1920, 916, 268, 308, 337, 430);
})