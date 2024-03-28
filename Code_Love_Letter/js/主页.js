window.addEventListener('load', function() {
    //5张图片依次移动
    var ul = this.document.getElementById('first');
    console.log(ul);
    var num = 1;
    this.setTimeout(function() {
        animate(ul, 750, function() {
            animate(ul.children[num], 100, function() {
                var ul1 = ul.children[num].children[num];
                animate(ul1, 100, function() {
                    var ul2 = ul1.children[num];
                    animate(ul2, 100, function() {
                        var ul3 = ul2.children[num];
                        animate(ul3, 100, function() {});
                    });
                });
            });
        });
    }, 1000);

    // 留言板js
    let comments = [{
        name: '张欣',
        comment: '祖国母亲是我们的港湾，我与祖国同在！',
        time: 'The Sun 12 2022'
    }, {
        name: '赵阳',
        comment: '祖国的发展时刻激励着我们，我们要为祖国发展做出贡献！',
        time: 'The Mon 9 2022'
    }];
    let nameStr = document.getElementById('name');
    let commentStr = document.getElementById('comment');
    let content = document.getElementById('comments');
    let btnclose = document.getElementById('btn-close');
    let btnsubmit = document.getElementById('btn-submit');

    function postComments() {
        comments.unshift({
            name: nameStr.value,
            comment: commentStr.value,
            time: new Date()
        })
    }

    let renderComments = function(comments) {
        content.innerHTML = '';
        for (let i = 0; i < comments.length; i++) {
            let Comment = comments[i];
            content.insertAdjacentHTML(
                'beforeend',
                `
                <hr/>
                <h4 style="padding:20px;>
                <span style="padding:20px ;">${Comment.name}</span>
                <span class="date">${Comment.time}</span>
                </h4>
                <p>${Comment.comment}</p>
                `
            );
        }
    }
    renderComments(comments);

    btnsubmit.onclick = function() {
        postComments(comments);
        renderComments(comments);
    }
    btnclose.onclick = function() {
        if (btnclose.innerHTML == '关闭留言') {
            btnclose.innerHTML = '开启留言';
            nameStr.disabled = true;
            commentStr.disabled = true;
        } else {
            btnclose.innerHTML = '关闭留言';
            nameStr.disabled = false;
            commentStr.disabled = false;
        }
    }

    //导航栏js
    var lis = this.document.querySelector('nav');
    console.log(lis.children[0]);
    lis.children[0].style.backgroundColor = 'lightblue';
    lis.children[0].style.borderRadius = '10px';
    for (var j = 0; j < lis.children.length; j++) {

        lis.children[j].addEventListener('click', function() {
            for (var i = 0; i < lis.children.length; i++) {
                lis.children[i].style.backgroundColor = '';
                //lis.children[i].children[0].style.color = '#f4f4f4';
            }
            this.style.backgroundColor = 'lightblue';
            this.style.borderRadius = '10px';
            //console.log(this.children[0]);
            //this.children[0].style.color = '#22bbff';

        })
    }

    //祖国心声图片百叶图

    // 获取所有.item元素
    let items = document.querySelectorAll('.item');
    console.log(items);
    // 设置选中态样式
    function setActive() {
        // 遍历所有.item元素，移出active样式
        items.forEach((item) => {
                item.classList.remove('active');
            })
            // 为当前选中项添加active样式
        this.classList.add('active');
    }
    // 遍历所有.item元素，分别为其设置点击事件
    items.forEach((item) => {
        item.addEventListener('click', setActive);
    })
})