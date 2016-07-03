/**
 * Created by SamMFFL on 2016/6/28.
 */


$({property: 0}).animate({property: 100}, {
    duration: 1500,
    step: function () {
        var percentage = Math.round(this.property);
        $("#progress").css('width', percentage + "%");
        if (percentage == 100) {
            $("#progress").addClass("done");
        }
    }
})
$(function () {
    mouseWheelHandle.init({
        mainPage: "#main-page",
        sideBar: ".page-bar",
        pageAmount: 6,
        animateTime: 800
    });

    $("#more-info").bind('tap', function () {
        //alert('tap')
        var info = $("#page-1  article .introduce").html();
        notie.alert(4, info);
    });

    $("body").bind('swipeDown', function () {
        var targetNumber = 0;
        var currentNumber = mouseWheelHandle.currentNumber;
        if (currentNumber - 1 < 1) {
            return;
        }
        mouseWheelHandle.animateAction('up');
        targetFunc(mouseWheelHandle.nextNumber)
        changeCurrent(mouseWheelHandle.nextNumber);
    });

    $("body").bind('swipeUp', function () {
        var currentNumber = mouseWheelHandle.currentNumber;
        mouseWheelHandle.animateAction('down');
        console.log('nextNumber', mouseWheelHandle.nextNumber);
        targetFunc(mouseWheelHandle.nextNumber);
        changeCurrent(mouseWheelHandle.nextNumber);
    });


    function targetFunc(target) {
        if (target == 2) {
            mouseWheelHandle.fillPercent();
        } else {
            mouseWheelHandle.fillPercent(true);
        }

        if (target == 5) {
            $('#main-page #page-5 .college').css({
                'transform': ' rotate(0deg) scale(1,1)'
            })
        } else {
            $('#main-page #page-5 .college').css({
                'transform': ' rotate(-180deg) scale(0.001, 0.001)'
            })
        }
    }

    function changeCurrent(target) {
        $('#main-page > section').removeClass('current');
        $('#main-page > section[data-role="' + target + '"]').addClass('current');
        $('.page-bar .page-scroll').removeClass('current');
        $('.page-bar .page-scroll[data-role="' + target + '"]').addClass('current');
    }
});





