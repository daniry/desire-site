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