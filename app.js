$('.count').counterUp({
    delay: 10,
    time: 2000
})
btn = document.getElementById('myBtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";

    }
    else {
        btn.style.display = "none";

    }

}
btn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  //for firefox and other browsers.
})
