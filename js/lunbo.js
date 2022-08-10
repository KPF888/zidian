function lunbo(FocusClassName, arrow_lClassName, arrow_rClassName, circleClassName, selectedClassName) {
    //轮播图
    var Focus = document.querySelector(FocusClassName);
    var arrow_l = document.querySelector(arrow_lClassName);
    var arrow_r = document.querySelector(arrow_rClassName);
    var ul = Focus.querySelector('ul');
    var lis = ul.children;
    var circle = Focus.querySelector(circleClassName);

    //动态生成小圆圈
    for (var i = 0; i < lis.length; i++) {
        //创建元素
        var li = document.createElement('li');

        //插入到circle
        circle.appendChild(li);
    }

    // 第一个圈圈给current
    circle.children[0].className = selectedClassName;

    //无缝切换原理
    //把第一张图片放加到图片最后
    ul.appendChild(lis[0].cloneNode(true));


    //鼠标经过focus区域显示左右按钮
    Focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';

        //关闭自动播放效果
        clearInterval(timer);
        timer = null;
    })

    //鼠标离开显示左右按钮
    Focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';

        //恢复自动播放
        timer = setInterval(() => {
            arrow_r.click();
        }, 3000);
    })

    //点击右边按钮 ul向左滑动 一个focus的距离
    // 初始值为0
    //设置节流阀 当动画进行时禁用点击函数
    var num = 0;
    var circles = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == lis.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            var moveWidth = -(num * Focus.offsetWidth);
            animate(ul, moveWidth, function () {
                flag = true;
            });

            circles = num == lis.length - 1 ? 0 : num;
            getCircleWhite(circles);
        }
    })

    //点击左边按钮 ul向右滑动 一个focus的距离
    // 初始值为0
    arrow_l.addEventListener('click', function () {
        //添加节流阀
        if (flag) {
            flag = false;

            if (num == 0) {
                ul.style.left = -(lis.length - 1) * Focus.offsetWidth + 'px';
                num = lis.length - 1;
            }

            num--;
            var moveWidth = -(num * Focus.offsetWidth);
            animate(ul, moveWidth, function () {
                ul.style.left = (lis.length - 2) * Focus.offsetWidth;
                flag = true;
            });

            circles = num;
            getCircleWhite(circles);
        }
    })

    //点击哪个圆圈 ul就移动到哪张图片 圆圈对应的num乘以focus宽度
    //并且这个变白色
    for (var i = 0; i < circle.children.length; i++) {
        circle.children[i].setAttribute('index', i);
        circle.children[i].addEventListener('click', function () {
            var index = this.getAttribute('index');
            var moveWidth = -(index * Focus.offsetWidth);
            animate(ul, moveWidth);

            //num对应的小圆圈变为白色
            //清除其他圆圈颜色
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }

            //给当前的圆圈赋值ClassName
            this.className = selectedClassName;

            //让num等于index  同步按钮与下方按钮的操作
            num = index;
        })
    }

    //添加自动播放效果  手动启动事件
    var timer = setInterval(() => {
        arrow_r.click();
    }, 3000);

    function getCircleWhite(circles) {
        //num对应的小圆圈变为白色
        //清除其他圆圈颜色
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }

        //给当前的圆圈赋值ClassName
        circle.children[circles].className = selectedClassName;
    }
}


// 第二种，y方向

function lunboY(FocusClassName, arrow_lClassName, arrow_rClassName, circleClassName, selectedClassName) {
    //轮播图
    var Focus = document.querySelector(FocusClassName);
    var arrow_l = document.querySelector(arrow_lClassName);
    var arrow_r = document.querySelector(arrow_rClassName);
    var ul = Focus.querySelector('ul');
    var lis = ul.children;
    var circle = Focus.querySelector(circleClassName);

    //动态生成小圆圈
    // for (var i = 0; i < lis.length; i++) {
    //     //创建元素
    //     var li = document.createElement('li');

    //     //插入到circle
    //     circle.appendChild(li);
    // }

    // 第一个圈圈给current
    circle.children[0].className = selectedClassName;

    //无缝切换原理
    //把第一张图片放加到图片最后
    ul.appendChild(lis[0].cloneNode(true));


    //鼠标经过focus区域显示左右按钮
    Focus.addEventListener('mouseenter', function () {
        // arrow_l.style.display = 'block';
        // arrow_r.style.display = 'block';

        //关闭自动播放效果
        clearInterval(timer);
        timer = null;
    })

    //鼠标离开显示左右按钮
    Focus.addEventListener('mouseleave', function () {
        // arrow_l.style.display = 'none';
        // arrow_r.style.display = 'none';

        //恢复自动播放
        timer = setInterval(() => {
            arrow_r.click();
        }, 3000);
    })

    //点击右边按钮 ul向左滑动 一个focus的距离
    // 初始值为0
    //设置节流阀 当动画进行时禁用点击函数
    var num = 0;
    var circles = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == lis.length - 1) {
                ul.style.top = 0;
                num = 0;
            }
            num++;
            var moveWidth = -(num * Focus.offsetHeight);
            animateY(ul, moveWidth, function () {
                flag = true;
            });

            circles = num == lis.length - 1 ? 0 : num;
            getCircleWhite(circles);
        }
    })

    //点击左边按钮 ul向右滑动 一个focus的距离
    // 初始值为0
    arrow_l.addEventListener('click', function () {
        //添加节流阀
        if (flag) {
            flag = false;

            if (num == 0) {
                ul.style.top = -(lis.length - 1) * Focus.offsetHeight + 'px';
                num = lis.length - 1;
            }

            num--;
            var moveWidth = -(num * Focus.offsetHeight);
            animateY(ul, moveWidth, function () {
                ul.style.top = (lis.length - 2) * Focus.offsetHeight;
                flag = true;
            });

            circles = num;
            getCircleWhite(circles);
        }
    })

    //点击哪个圆圈 ul就移动到哪张图片 圆圈对应的num乘以focus宽度
    //并且这个变白色
    for (var i = 0; i < circle.children.length; i++) {
        circle.children[i].setAttribute('index', i);
        circle.children[i].addEventListener('mouseenter', function () {
            var index = this.getAttribute('index');
            var moveWidth = -(index * Focus.offsetHeight);
            animateY(ul, moveWidth);

            //num对应的小圆圈变为白色
            //清除其他圆圈颜色
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }

            //给当前的圆圈赋值ClassName
            this.className = selectedClassName;

            //让num等于index  同步按钮与下方按钮的操作
            num = index;
        })
    }

    //添加自动播放效果  手动启动事件
    var timer = setInterval(() => {
        arrow_r.click();
    }, 3000);

    function getCircleWhite(circles) {
        //num对应的小圆圈变为白色
        //清除其他圆圈颜色
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }

        //给当前的圆圈赋值ClassName
        circle.children[circles].className = selectedClassName;
    }
}


//第三种轮播图，只自己放自己动

function lunboUniform(FocusClassName, marginX) {
    //轮播图
    var Focus = document.querySelector(FocusClassName);
    var ul = Focus.querySelector('ul');
    var lis = ul.children;
    var lis_num = lis.length;
    //必须先声明一个变量储存lis的长度，否则会死循环，因为for每次都会重新取lis.length

    //无缝切换原理
    //把每一张都加到图片最后
    for (var i = 0; i < lis_num; i++) {
        var li = lis[i].cloneNode(true);
        ul.appendChild(li);
    }

    //鼠标进入
    // Focus.addEventListener('mouseenter', function () {
    //     //关闭自动播放效果
    //     clearInterval(timer);
    //     timer = null;
    // })

    // 鼠标离开*****************************
    // Focus.addEventListener('mouseleave', function () {
    //     //恢复自动播放
    //     timer = setInterval(() => {
    //         animate1(ul, moveWidth);
    //     }, 3000);
    // })


    //获取移动目标
    var moveWidth = -(lis_num * (lis[0].offsetWidth + marginX));
    console.log(lis[0].offsetWidth);
    //右侧溢出部分宽度
    // var ovflowWidth =
    // 开始移动
    animateUniform(ul, moveWidth);

    // 如果到了右边则瞬间跳到第一张
    var timer = setInterval(() => {
        // console.log(ul.offsetLeft);
        // console.log(moveWidth);
        if (ul.offsetLeft == moveWidth) {
            ul.style.left = 0;
            animateUniform(ul, moveWidth);
            // console.log(1);
        }

    }, 10);

}

