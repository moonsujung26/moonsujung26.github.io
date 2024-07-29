$(function () {

    const tl = gsap.timeline({});
    tl.from('.intro h2 span:nth-child(1)', {
        y: -400,
        opacity: 0,
        duration: 1,
        ease: 'bounce'
    });


    $('#mainFull').fullpage({
        scrollingSpeed: 1000,
        anchors: ['intro', 'portfolio01', 'portfolio02', 'profile'],
        loopHorizontal: false,
        controlArrows: false,
        slidesNavigation: true,
        afterLoad: function (name, idx) {
            $('#hd .gnb li')
                .eq(idx - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            // if (idx) {
            //     $('#hd').addClass('on');
            //     $('.gnb').addClass('on');
            // } else {
            //     $('#hd').removeClass('on');
            //     $('.gnb').removeClass('on');
            // }
        },
        onLeave: function (o, d) {
            if (d == 1) {
                tl.restart();
            } else {
                tl.kill();
            }
        },

        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            let idx = nextSlideIndex;
            console.log(nextSlideIndex)
            $('.desc .itm').eq(idx).addClass('on').siblings().removeClass('on')
        },

    });

    $('.pt01').on('wheel', function (e) {
        console.log(e.originalEvent.wheelDelta);
        let n = e.originalEvent.wheelDelta;
        if (n > 0) {
            $.fn.fullpage.moveSlideLeft();
        } else {
            $.fn.fullpage.moveSlideRight();
        }

    })
});

$(function () {



})
