/*****************************************************************
 * File Name: main.js
 * Description: javascript file for Xin's personal website
 * Name: Xin Sheng
 * Date created: Jan 18, 2021
 * Last Edited: Jan 18, 2021
 * References:
 * https://stackoverflow.com/questions/51363284/how-to-make-the-scroll-speed-of-background-image-of-the-webpage-slower
 ****************************************************************/

//background parallax effect
 $(document).scroll(function() {
   var scroll = $(window).scrollTop();
   $("#frontPageBG").css("top", (scroll / 10) + "%");
 });


//collapse and show references
function refClicked(e){
    var isCollapsed = $("#refTitle").text() == "+ References";
    if(isCollapsed){
        $("#refTextHidden").attr("id", "refText");
        $("#refTitle").text("- References");
    }else{
        $("#refText").attr("id", "refTextHidden");
        $("#refTitle").text("+ References");

    }
}
