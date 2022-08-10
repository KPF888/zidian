window.addEventListener('DOMContentLoaded', function () {
    var ul = document.querySelector('.main_nav').children[1];
    var lis = ul.children;
    var cloud = document.querySelector('.nav_cloud');
    var texts = this.document.getElementsByClassName('main_text');

    texts[0].style.display = 'block';
    //鼠标经过云飘过来
    for (var i = 0; i < lis.length; i++) {
        // 注册序号
        lis[i].setAttribute('index', i);

        lis[i].addEventListener('mouseenter', function () {
            var moveWidth = this.getAttribute('index') * lis[0].offsetHeight;
            animateY(cloud, moveWidth);
        })

        //鼠标点击后让那个位置等于原点
        var back = 0;
        lis[i].addEventListener('click', function () {
            back = this.getAttribute('index') * lis[0].offsetHeight;

            //所有文本隐藏
            for (var i = 0; i < lis.length; i++) {
                texts[i].style.display = 'none';
            }

            //对应文本显示
            texts[this.getAttribute('index')].style.display = 'block';
        })

        //鼠标离开回到原点
        lis[i].addEventListener('mouseleave', function () {
            animateY(cloud, back);
        })
    }
})