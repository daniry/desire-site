import * as flsFunctions from "./modules/functions.js";

import "./modules/import-jquery.js";
import "@fancyapps/fancybox";
import "slick-carousel";
import mixitup from 'mixitup';

// flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  })
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  })

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  })

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  
  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="../img/arrow-slide-back.svg" alt="arrow-slide-back"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="../img/arrow-slide-next.svg" alt="arrow-slide-next"></button>',
  });
  

  if($('.gallery__inner').length) {
    var mixer = mixitup('.gallery__inner', {
      load: {
        filter: ".living",
      }
    });
  }

  // $(".about__popup-play").fancybox({
  //   type:'swf',
  //   allowfullscreen: 'true',
  // })
  
})

flsFunctions.highlightMenuLink();
flsFunctions.moveBlock();