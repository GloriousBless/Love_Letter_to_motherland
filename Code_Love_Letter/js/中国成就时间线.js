window.addEventListener('load', function() {
    var li = this.document.getElementById('dis');
    li.style.opacity = 0;
    var img1 = this.document.getElementById('img1');
    var img2 = this.document.getElementById('img2');
    var ul1 = this.document.getElementById('first-list');
    // console.log(ul.children[2]);
    ul1.children[1].addEventListener('mouseover', function() {
        animate(img1, 410, function() {});

    });
    ul1.children[1].addEventListener('mouseout', function(e) {
        animate(img1, 197, function() {});
    });
    ul1.children[3].addEventListener('mouseover', function() {
        animate(img2, 410, function() {});

    });
    ul1.children[3].addEventListener('mouseout', function(e) {
        animate(img2, 197, function() {});
    });


    var ul2 = this.document.getElementById('second-list');
    var img3 = this.document.getElementById('img3');
    var img4 = this.document.getElementById('img4');
    var img5 = this.document.getElementById('img5');
    ul2.children[0].addEventListener('mouseover', function() {
        animate(img3, 410, function() {});

    });
    ul2.children[0].addEventListener('mouseout', function(e) {
        animate(img3, 197, function() {});
    });
    ul2.children[2].addEventListener('mouseover', function() {
        animate(img4, 410, function() {});

    });
    ul2.children[2].addEventListener('mouseout', function(e) {
        animate(img4, 197, function() {});
    });
    ul2.children[4].addEventListener('mouseover', function() {
        animate(img5, 410, function() {});

    });
    ul2.children[4].addEventListener('mouseout', function(e) {
        animate(img5, 197, function() {});
    });
})