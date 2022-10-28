function openNav(){
  document.getElementById("myNav").style.width="100%";
}
function closeNav(){
  document.getElementById("myNav").style.width="0";
}

$(document).ready(function(){
  $('.about-sec').waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    }
    else{
        $("nav").removeClass("sticky");
    }
});
  //mixer
  var mixer = mixitup('.portfolio-wrapper');
  //type js 
  var typed = new Typed('.element', {
   // Waits 1000ms after typing "First"
   strings: ['Front-end developer.', 'Wordpress developer.'],
   typeSpeed:30,
   backSpeed: 30,
   loop:true,
 });
 // slick
 $('.sliders').slick({
   arrows: !1,
   dots: !0,
   appendDots: ".slider-dots",
   dotClass: "dots"
 });
 //Back top
 $(window).scroll(function(){
   $(this).scrollTop() >100 ? $("#backTop") .fadeIn() : $("#backTop") .fadeOut()
 });
 $("#backTop").click(function(){
  $("html,body").animate({
   scrollTop:0
  }, "slow")
 });
});
