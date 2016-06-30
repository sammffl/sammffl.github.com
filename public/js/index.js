/**
 * Created by SamMFFL on 2016/6/28.
 */


mouseWheelHandle.init({
    mainPage: "#main-page",
    sideBar: ".page-bar",
    pageAmount: 6,
    animateTime: 800
});
//fillPercent()
function fillPercent() {
    var $percents = $(".skills-percent >.percent");
    for (var i= 0,max = $percents.length;i<max;i++){
        var $percent = $($percents[i]);
        $percent.css({'width':'0%'})
    }
    for (var i= 0,max = $percents.length;i<max;i++){
        var $percent = $($percents[i]);
        $percent.css({'width':$percent.attr('percent')+'%'})
    }
}