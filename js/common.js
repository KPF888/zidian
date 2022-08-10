window.addEventListener('DOMContentLoaded', function () {
    //页面导航栏遮罩
    var nav_lis = this.document.querySelector('nav').querySelectorAll('li');
    //清除其他
    for (var i = 0; i < nav_lis.length; i++) {
        nav_lis[i].children[1].style.display = 'none';
    }
    for (var i = 0; i < nav_lis.length; i++) {
        //自己显示
        nav_lis[i].addEventListener('mouseover', function () {
            this.children[1].style.display = 'block';
        })

        //离开隐藏
        nav_lis[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';
        })

        //点击则显示
        nav_lis[i].addEventListener('click', function () {
            //移除离开事件
            for (var i = 0; i < nav_lis.length; i++) {
                nav_lis[i].removeEventListener()
            }
            this.children[1].style.display = 'block';
        })
    }
})