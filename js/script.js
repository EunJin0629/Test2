// header submenu
$(".submenu").hide()

$("#header .menu>ul>li, .hd_right>ul>li").mouseover(function(){
 $(this).find(".submenu").stop().fadeIn()
})

$("#header .menu>ul>li, .hd_right>ul>li").mouseleave(function(){
 $(this).find(".submenu").stop().fadeOut()
})

// header full_wrap
$(".full_wrap").hide()
$(".hd_right img").click(function(){
 $(".full_wrap").fadeIn()
 $(".side_icon").hide()

})
$(".full_wrap .close").click(function(){
 $(".full_wrap").fadeOut()
 $(".side_icon").show()
})

//add_top slide
let swiper = new Swiper(".add_top .mySwiper", {
 loop:true,
 navigation: {
   nextEl: ".add_top .next_btn",
   prevEl: ".add_top .prev_btn",
 },
});

//main video autoplay
let video = $("#video")[0]
video.autoplay=true
video.muted=true 
video.loop=true 
video.play()

/* con1 slide */
let swiper2 = new Swiper(".con1 .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".con1 .con1_next",
    prevEl: ".con1 .con1_prev",
  },
});

// con2_slide1
let swiper3 = new Swiper(".con2_slide1 .mySwiper", {
  slidesPerView: 4,
  loop:true,
  navigation: {
    nextEl: ".con2_arrow",
  },
  simulateTouch:false, // 드래그 했을 때, 슬라이드 이동
});

//con2_slide2
let swiper4 = new Swiper(".con2_slide2 .mySwiper", {
  slidesPerView: 1,
  loop:true,
  navigation: {
    nextEl: ".con2_arrow",
  },
  simulateTouch:false,
});

//con4 site_menu
// index() ==> 순서를 불러올 때 사용하는 매서드
// $(".site_menu>li").index() --> 0 1 2 3 4
// eq() => 

$(".site_menu>li").click(function(){
  // site_menu 클릭시 active 효과 넣기
  $(".site_menu>li").removeClass("active")
  $(this).addClass("active")

  // site_menu>li 클릭시 이미지 띄우기
  
  $(".con4 .site>div").css({display:"none"})

  let Index = $(this).index()

  $(".con4 .site>div").eq(Index).css({display:"block"})

})

//fsite toggle
$(".footer_top .link").hide()
  $(".footer_top .fsite").click(function(){
    $(".footer_top .link").slideToggle();
    $(".footer_top .pluse").toggle();
    $(".footer_top .minus").toggle();
  });

  //icon2 클릭시 top 올리기
  $(".icon2").click(function(){
    $("html, body").animate({ 
      scrollTop: 0 
    },1000)//"slow", "smooth"와 같은 메서드로 사용할 수 있다.
  })

  //스크롤 내릴 때 효과(.icon2 나타내기)

  $(window).scroll(function(){
    let A = $(this).scrollTop()
    if(A > 0){
      $(".icon1").css({top:"0"})
      $(".icon2").css({opacity:"1"})
    }else{
      $(".icon1").css({top:"90px"})
      $(".icon2").css({opacity:"0"})
    }
  })



AOS.init();
