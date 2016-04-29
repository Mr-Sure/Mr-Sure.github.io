var nBannerSizeL;
$(function(){
    var slideTimeL=400, slideTimeS=600, pics=4, curIndex=0, nBannerSizeS=0, oBannerS=$("#phoneUiList");
    window.onresize=function(){
                oBannerL.css("marginLeft","0px");
                oBannerS.css("marginLeft","0px");
                fnResize();
            }
    function fnSlideLeft(){
        if(curIndex<pics-1){
            oBannerL.animate({marginLeft:"-="+nBannerSizeL},slideTimeL);
            oBannerS.animate({marginLeft:"-="+nBannerSizeS},slideTimeS);
            curIndex++;
        }
        else {
            oBannerL.animate({marginLeft:"0px"},slideTimeL);
            oBannerS.animate({marginLeft:"0px"},slideTimeS);
            curIndex=0;
        }
    }
    function fnSlideRight(){
        if(curIndex>0){
            oBannerL.animate({marginLeft:"+="+nBannerSizeL},slideTimeL);
            oBannerS.animate({marginLeft:"+="+nBannerSizeS},slideTimeS);
            curIndex--;
            
        }
        else {
            oBannerL.animate({marginLeft:-nBannerSizeL*(pics-1)+"px"},slideTimeL);
            oBannerS.animate({marginLeft:-nBannerSizeS*(pics-1)+"px"},slideTimeS);
            curIndex=pics-1;
        }
    }
    
    var slideAni=setInterval(fnSlideLeft,1116000);
    
    $("#leftBtn").click(function(){
        clearInterval(slideAni);
        slideAni=setInterval(fnSlideLeft,2000);
        if(oBannerL.is(":animated") || oBannerS.is(":animated")){
            oBannerL.stop(true,true);
            oBannerS.stop(true,true);
        }
        else {fnSlideRight();}
    })
    
    $("#rightBtn").click(function(){
        clearInterval(slideAni);
        slideAni=setInterval(fnSlideLeft,2000);
        if(oBannerL.is(":animated") || oBannerS.is(":animated")){
            oBannerL.stop(true,true);
            oBannerS.stop(true,true);
        }
        else {fnSlideLeft();}
    })
})