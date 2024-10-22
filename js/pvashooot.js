$(document).ready(function(){

  $("body").on("click", ".slide-block-close, .slide-block-detail-shadow", function(){

    $(".slide-block-detail").removeClass("open");
    setTimeout(function(){
      $(".slide-block-detail-shadow").removeClass("open");
    }, 500);

    return false;
  });


  $("body").on("click", ".openModalPage", function(){

    var linkToGet = $(this).data("openlink");

    $.get(linkToGet, function(data) {

      var newContent = $(data).find(".slide-block-detail-container").get(0);

      $(".slide-block-detail-page .slide-block-detail-container").replaceWith(newContent);

      $(".slide-block-detail-shadow").addClass("open");

      setTimeout(function(){
        $(".slide-block-detail").addClass("open");

        if($(".dinner-slider").length > 0){

          $(".dinner-slider").each(function(index){

            var sliderContainer = $(this).find(".dinner-slider-container").get(0);
            var sliderBtnsPrev = $(this).find(".prev-banner").get(0);
            var sliderBtnsNext = $(this).find(".next-banner").get(0);
            var sliderDotsContainer = $(this).find(".slick-list-dots").get(0);

            $(sliderContainer).slick({
              dots: true,
              infinite: false,
              prevArrow: sliderBtnsPrev,
              nextArrow: sliderBtnsNext,
              appendDots: sliderDotsContainer,
              autoplay: false,
              speed: 300,
              slidesToShow: 1,
              adaptiveHeight: true,
              responsive: [
                {
                  breakpoint: 1359,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },{
                  breakpoint: 833,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //arrows: false,
                  }
                },{
                  breakpoint: 439,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            });

          });

        }

      }, 500);


    });

    return false;
  });


  $("body").on("click", ".rezidenty-item-btn a", function(){

    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).find(".text").text("Развернуть описание");
      $(this).closest(".rezidenty-item").find(".rezidenty-item-detail-text").slideUp();
    }else{
      $(this).addClass("active");
      $(this).find(".text").text("Свернуть");
      $(this).closest(".rezidenty-item").find(".rezidenty-item-detail-text").slideDown();
    }

    return false;
  });


  $("body").on("click", ".accordion-block-item-header a", function(){

    if($(this).hasClass("active")){

      $(this).closest(".accordion-block-item").find(".accordion-block-item-body").slideUp(300);
      $(this).removeClass("active");

    }else{

      $(this).closest(".accordion-block-item").find(".accordion-block-item-body").slideDown(300);
      $(this).addClass("active");

    }

    return false;
  });


  if ($(".partners-list-container").length > 0) {
    $(".partners-list-container").each(function(index) {
      const $container = $(this);
      const $sliderContainer = $container.find(".partners-list");
      const $sliderBtnsPrev = $container.find(".prev-banner");
      const $sliderBtnsNext = $container.find(".next-banner");
      const $sliderDotsContainer = $container.find(".slick-list-dots");
      const slidesToShow = $sliderContainer.data("itemcount") || 4;

      $sliderContainer.slick({
        dots: true,
        infinite: false,
        prevArrow: $sliderBtnsPrev.length > 0 ? $sliderBtnsPrev[0] : null,
        nextArrow: $sliderBtnsNext.length > 0 ? $sliderBtnsNext[0] : null,
        appendDots: $sliderDotsContainer.length > 0 ? $sliderDotsContainer[0] : null,
        autoplay: false,
        speed: 300,
        slidesToShow: slidesToShow,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1359,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 833,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              // arrows: false,
            }
          },
          {
            breakpoint: 439,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  }



  if($(".dinner-slider").length > 0){

    $(".dinner-slider").each(function(index){

      var sliderContainer = $(this).find(".dinner-slider-container").get(0);
      var sliderBtnsPrev = $(this).find(".prev-banner").get(0);
      var sliderBtnsNext = $(this).find(".next-banner").get(0);
      var sliderDotsContainer = $(this).find(".slick-list-dots").get(0);

      $(sliderContainer).slick({
        dots: true,
        infinite: false,
        prevArrow: sliderBtnsPrev,
        nextArrow: sliderBtnsNext,
        appendDots: sliderDotsContainer,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1359,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },{
            breakpoint: 833,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              //arrows: false,
            }
          },{
            breakpoint: 439,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    });

  }


  $("body").on("click", ".popular-themes-detail-tabs a", function(){

    if(!$(this).hasClass("active")){
      $(this).closest(".popular-themes-detail-tabs").find("a").removeClass("active");
      $(this).addClass("active");
      var tabClass = $(this).data("tabclass");
      $(".popular-themes-detail-tabs-box-item").hide();
      $(".popular-themes-detail-tabs-box-item."+tabClass).fadeIn();

      $(".dinner-slider-container").slick("refresh");

    }

    return false;

  });






  $("body").on("click", ".opener-main-menu, .burger", function(){

    $("html").addClass("has-menu-open");
    //$("html").addClass("is-first-loaded").addClass("is-loading");

    var menu = $(".footer__catalogue").clone();
    $(menu).appendTo(".opened-menu-body");

    var linksFooterMenu = $(".opened-menu-body").find(".footer__catalogue-link");

    $(linksFooterMenu).each(function(index) {

      var thisLink = $(this).attr("href");
      var thisName = $(this).text();

      var newElement = '<a href="'+thisLink+'" class="link-with-arrow arrow-right"><span class="text">'+thisName+'</span><span class="icon"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.25229 14.6178L13.9807 8.0002C12.293 6.34499 8.93994 3.03771 7.25229 1.38254L6.40302 2.20396C7.92097 3.6928 9.92919 5.6761 11.7008 7.41592L0.74524 7.41591L0.745239 8.58426L11.7009 8.58426L6.40301 13.7871L7.25229 14.6178Z" fill="currentColor"></path></svg></span></a>';

      $(this).replaceWith(newElement);

      console.log($(this).text());

    });


    return false;

  });

  //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ
  $("body").on("click", ".scrollTo", function(){
    $("html, body").animate({
      scrollTop: ($($(this).attr("href")).offset().top-100) + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ

  $("body").on("click", ".opened-menu-btn a", function () {

    $("html").removeClass("has-menu-open");
    $(".opened-menu-body").empty();

    return false;
  });

  $("body").on("click", ".opened-menu-body .footer__ttl-link", function(){

    if(!$(this).hasClass("active")){
      $(".opened-menu-body .footer__ttl-link").removeClass("active");
      $(this).addClass("active");
    }else{
      $(".opened-menu-body .footer__ttl-link").removeClass("active");
    }

    return false;
  });
  // СЕЛЕКТРИК
  $(function() {
    if ($('select').length > 0) {
        $('select').selectric();
    }
});
// "Сайт находится в разработке"
const btnClose = document.querySelector('.slide-block-detail-btn.test')
  if (btnClose) {
    btnClose.addEventListener('click', function() {
      try {
        $('.test-top').hide();
      } catch (e) {
      }
    });
  }
});
// Табы на странице резидентов интц

const tabLinks = document.querySelectorAll('.svedeniya-page-menu-container ul li a');
const tabContents = document.querySelectorAll('.svedeniya-page-right  .slide-block-detail-container .popular-themes-detail .popular-themes-detail-body');

tabLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    // Активируем нужную вкладку
    tabLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    // Отображаем нужное содержимое
    tabContents.forEach(content => content.classList.remove('active'));
    document.querySelector(targetId).classList.add('active');
  });
})


  // Слайдер кнопок якорей
if (window.matchMedia("(max-width: 767px)").matches) {
  swiperAnchor = new Swiper(".popular-themes-detail-anchor", {
    slidesPerView: "auto",
  });
}


if (window.innerWidth < 1024) {
  if ($(".flex-elements-list.swiper-container").length > 0) {
    let swiperPicture = new Swiper(".flex-elements-list.swiper-container", {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }
}
  if($('.svedeniya-page-menu').length > 0){
    if (window.innerWidth < 1024){
    $('.svedeniya-page-menu').click(function() {
      $(this).toggleClass('active');
      $(this).find('.svedeniya-page-menu-container').slideToggle();
    });
  }
}



