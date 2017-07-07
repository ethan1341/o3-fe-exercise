$(document).ready(function () {
    setMainContent();
});

$(window).resize(function () {
    setMainContent()
});

function setMainContent() {
    var windowWidth = $('.wrapper').width();
    if (windowWidth <= 768) {

        $('.main-content,.navigation,.content,.sidebar').css({
            width: '100%'
        });

        $('.sidebar').css({
            height:'auto'
        });

    } else {
        var mainContentHeight = $('.main-content').height();
        console.log(mainContentHeight);
        $('.main-content').css({
            width: windowWidth - 200
        });

        $('.sidebar').css({
           height: mainContentHeight,
            width:'200px'
        });

        $('.navigation').css({
            width:'25%'
        });

        $('.content').css({
            width:'75%'
        });
    }
}