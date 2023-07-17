import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Mousewheel,
  Keyboard,
  Parallax,
  Lazy,
  EffectFade,
  Thumbs,
  Controller,
} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Mousewheel, Keyboard, Parallax, Lazy, EffectFade, Thumbs, Controller]);

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('[data-swiper]') || [];

    swipers.forEach((elem) => {
      let options = elem.dataset && elem.dataset.options ? JSON.parse(elem.dataset.options) : {};

      // Set the slidesPerView and spaceBetween options
      options.slidesPerView = 9;
      options.spaceBetween = 14; // adjust this value based on your layout

      var swiper = new Swiper(elem, options);
    });
  })
})();
