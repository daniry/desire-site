import $ from "jquery";
import "slick-carousel";

export let highlightMenuLink = function() {
  $('.menu .menu__list-link').each(function() {
    const location = window.location.href;
    const link = this.href;
    if(location == link) {
      $(this).addClass('--active');
    }
    else {
      $(this).removeClass('--active');
    }
  })
}
