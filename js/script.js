$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  // (2) Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  // (1) scroll-header
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (scroll > 60) {
      scrollTopBtn.addClass('On');
    } else {
      scrollTopBtn.removeClass('On');
    }
  });

  // (3) Top Button scroll
  scrollTopBtn.on('click', function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // footer
  const ftrBtn = $('.family_wrap>a');
  const ftrWrap = $('.family_wrap');

  ftrBtn.on('click', function(e){
    e.preventDefault();
    ftrWrap.toggleClass('active');
  });

  // megamenu
  $(".h_nav").mouseover(function(){
    $(".magamenu").addClass("active")
    $(".magamenu-bg").addClass("active")
  });

    const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });


$(document).ready(function () {
  let showCount = window.innerWidth >= 1200 ? 3 : 2;

  // 1. 처음엔 2개 또는 3개만 보임
  $(".news li").hide().slice(0, showCount).show();

  // 2. 버튼 누를 때마다 2개 또는 3개씩 보여줌
  $(".news_btn").click(function (e) {
    e.preventDefault();

    const hiddenItems = $(".news li:hidden");

    hiddenItems.slice(0, showCount).fadeIn();

    // 남은 게 현재 보여줄 수 있는 개수보다 적으면 버튼 숨김
    if (hiddenItems.length <= showCount) {
      $(this).hide();
    }
  });
});


// 아코디언 설정
  $(".title").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).next().stop().slideToggle();
  });


$(function(){
  $(".header_right .h_nav").mouseover(function(){
    $(".megamenu").addClass("active");
    $(".megamenu-bg").addClass("active");
  });
  $(".header_right .h_nav").mouseleave(function(){
    $(".megamenu").removeClass("active");
    $(".megamenu-bg").removeClass("active");
  });
});

  function hNav_reset() {
    $(".magamenu").removeClass("active");
    $(".magamenu-bg").removeClass("active");
  }

  function sch_reset() {
    // 필요 시 검색창 초기화 구현
    $(".search_wrap").removeClass("active");
  }

  $(window).on('load resize', function(){
    let w = $(window).innerWidth();
    if(w < 1200) {
      hNav_reset();
      sch_reset();
      $(".sub_nav").removeAttr('style'); // sub_nav가 있다면
    }
  });

});


  // //  브라우저 크기가 변경되었을때 초기화
  // $(window).on('load resize',function(){
  //   let w = $(window).innerWidth();
  //   if(w < 1200) {
  //     hNav_reset();
  //     sch_reset();
  //     subNav.removeAttr('style'); 
  //   };
  // });
  //Mobile Navigation____________________________
  const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });


$(document).ready(function () {
  let showCount = window.innerWidth >= 1200 ? 3 : 2;

  // 1. 처음엔 2개 또는 3개만 보임
  $(".news li").hide().slice(0, showCount).show();

  // 2. 버튼 누를 때마다 2개 또는 3개씩 보여줌
  $(".news_btn").click(function (e) {
    e.preventDefault();

    const hiddenItems = $(".news li:hidden");

    hiddenItems.slice(0, showCount).fadeIn();

    // 남은 게 현재 보여줄 수 있는 개수보다 적으면 버튼 숨김
    if (hiddenItems.length <= showCount) {
      $(this).hide();
    }
  });
});


// 아코디언 설정
  $(".title").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).next().stop().slideToggle();
  });


$(function(){
  $(".header_right .h_nav").mouseover(function(){
    $(".megamenu").addClass("active");
    $(".megamenu-bg").addClass("active");
  });
  $(".header_right .h_nav").mouseleave(function(){
    $(".megamenu").removeClass("active");
    $(".megamenu-bg").removeClass("active");
  });
});