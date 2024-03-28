window.addEventListener('load', function() {
    var ul = this.document.getElementById('catch');
    console.log(ul);
    var div_px = this.document.getElementById('px');
    var div_over = this.document.getElementById('over');
    var width = div_over.offsetWidth;
    // console.log(width);
    var circle = this.document.getElementById('circle').children;
    var num = 0;
    var cir = 0;
    div_px.addEventListener('click', function() {
        if (num == 4) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * width);
        cir++;
        if (cir == 4) {
            cir = 0;
        }
        for (var j = 0; j < circle.length; j++) {
            circle[j].style.backgroundColor = '';
        }
        //(2)然后才让当前的元素背景颜色为'pink'
        circle[cir].style.backgroundColor = 'pink';
    })
    var timer = this.setInterval(function() {
        div_px.click();
    }, 2000)
})