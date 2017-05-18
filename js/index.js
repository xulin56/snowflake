
(function($){
    $(function(){
        $(window).scroll(function(){
            if ($(window).scrollTop()>300){
                $(".entrance-l").animate({"left":"50%"},1000);
                $(".entrance-r").animate({"right":"50%"},1000);
            }
            if($(window).scrollTop()>1000){
                $(".echarts-l").animate({"left":"0"},1000);
                $(".echarts-r").animate({"right":"0"},1000);
            }
        });
    });
})(jQuery);
