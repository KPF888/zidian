window.addEventListener('DOMContentLoaded', function () {
    var main_text = this.document.getElementsByClassName('main_text');
    var newsNavUl = main_text[1].querySelector('.main_t_bd').querySelector('ul');
    var newsNav = newsNavUl.querySelectorAll('li');
    var news = this.document.querySelector('.t_bd_con').querySelectorAll('li');
    var ul = document.querySelector('.main_nav').children[1];
    var lis = ul.children;
    console.log(news[0]);
    // 当点击对应新闻导航时显示对应新闻
    for (var i = 0; i < news.length; i++) {
        // 给每个导航注册下标
        newsNav[i].setAttribute('index', i);

        newsNav[i].addEventListener('click', function () {
            // 获取对应下标
            var index = this.getAttribute('index');

            //隐藏导航栏ul
            newsNavUl.style.display = 'none';

            // 隐藏所有新闻
            for (var i = 0; i < news.length; i++) {
                news[i].style.display = 'none';
            }

            //显示对应新闻
            news[index].style.display = 'block';
        })
    }

    // 鼠标点击第二个导航，显示新闻导航，隐藏所有新闻
    lis[1].addEventListener('click', function () {
        newsNavUl.style.display = 'block';
        for (var i = 0; i < news.length; i++) {
            news[i].style.display = 'none';
        }
    })
})