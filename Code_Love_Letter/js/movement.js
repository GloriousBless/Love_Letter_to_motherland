window.addEventListener('load', function() {
    var div_first = document.getElementById('pos');
    // var op = '0';
    var flag = true;
    //脱贫攻坚的图片移动
    function animate(obj, target) {
        console.log(obj);
        clearInterval(obj.timer); //清除以前的定时器
        if (flag) {
            flag = false;
            obj.timer = setInterval(function() {
                if (obj.offsetTop <= target) {
                    clearInterval(obj.timer);
                } else {
                    if (parseFloat(getComputedStyle(obj, null)['opacity']) <= 0.9) {
                        obj.style.opacity = parseFloat(getComputedStyle(obj, null)['opacity']) + 0.03;
                    }

                    obj.style.top = obj.offsetTop - Math.abs((obj.offsetLeft - target)) / 10 + 'px';
                }
            }, 30);
        }
    }
    this.setTimeout(function() {
        animate(div_first, 80, function() {
            flag = true;
        });
    }, 1500);
    var div_sec = this.document.getElementById('story');
    console.log(div_sec);
    // 调整位置，使中国故事居中，并让前面的为none
    this.window.addEventListener('scroll', function() {
        if (this.window.pageYOffset >= 450) {
            //console.log(this.window.pageXOffset);
            div_first.style.display = 'none';
        } else {
            div_first.style.display = 'block';
            // div_sec.style.top = 760 + 'px';
        }
    })
    var img = this.document.getElementsByClassName('click');
    var move = this.document.getElementsByClassName('move');

    function ani(obj) {
        console.log(obj);
        clearInterval(obj.timer); //清除以前的定时器          
        obj.timer = setInterval(function() {
            if (parseFloat(getComputedStyle(obj, null)['opacity']) >= 0.96) {
                clearInterval(obj.timer);
            } else {
                obj.style.opacity = parseFloat(getComputedStyle(obj, null)['opacity']) + 0.03;
            }
        }, 40);
    }
    img[0].addEventListener('mouseover', function() {
        for (var i = 0; i < img.length; i++) {
            ani(move[i]);
        }
    })

})