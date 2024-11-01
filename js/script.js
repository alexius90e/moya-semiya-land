const watchSlider = new Swiper('.watch__slider', {

  navigation: {
    nextEl: '.watch .watch__controls-next',
    prevEl: '.watch .watch__controls-prev',
  },
  pagination: {
    el: '.watch__pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1.5,
    },
    576: {
      spaceBetween: 20,
      slidesPerView: 1.7,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2.25,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 2.5,
    },
    1280: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3.2,
    },
    1560: {
      spaceBetween: 40,
      slidesPerView: 3.6,
    },
    1720: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});

function checkUrlHashAndActivateSlide(swiper) {
  const hash = window.location.hash;
  if (hash.startsWith('#video')) {
    const videoNumber = parseInt(hash.replace('#video', ''));
    if (videoNumber >= 1 && videoNumber <= 4) {
      const slideIndex = videoNumber - 1;
      swiper.slideTo(slideIndex, 0);
      swiper.slides[slideIndex].classList.add('active');
    }
  }
}

window.addEventListener('hashchange', function () {
  checkUrlHashAndActivateSlide(watchSlider);
});
const headerMenu = document.querySelector('.header__menu');

const headerMobileMenu = document.querySelector('.header-mobile');

const headerMobileClose = document.querySelectorAll('.header-mobile__close');

headerMenu.addEventListener('click', () => {
  headerMobileMenu.classList.toggle('active');
});

headerMobileClose.forEach((item) => {
  item.addEventListener('click', () => {
    headerMobileMenu.classList.remove('active');
  });
});

if (window.innerWidth) {
  const watchItems = document.querySelectorAll('.watch__item');

  watchItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.add('active');
    });
  });

  const watchClose = document.querySelectorAll('.watch__close');

  watchClose.forEach((close) => {
    close.addEventListener('click', (event) => {
      event.stopPropagation();
      close.closest('.watch__item').classList.remove('active');
    });
  });
}

const fruitImage = document.querySelector('.fruits__image');

if (fruitImage) {
  window.addEventListener('scroll', (event) => {
    const windowHeit = event.currentTarget.innerHeight;
    const scrollY = event.currentTarget.scrollY;
    const fruitImageTopY = fruitImage.offsetTop;
    const fruitImageHeight = fruitImage.scrollHeight;

    const startHeight = fruitImageTopY - windowHeit;
    const endHeight = fruitImageTopY + fruitImageHeight;

    if (scrollY >= startHeight && scrollY <= endHeight) {
      const position = (scrollY - startHeight) / (endHeight - startHeight);
      const angleLimit = 200;

      fruitImage.style.transform = `rotate(${position * angleLimit}deg)`;
    }
  });
}
