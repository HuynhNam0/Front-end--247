const $ = (selector) => {
  return document.querySelectorAll(selector);
}
const getScrollTop = (el) => {
  return el.getBoundingClientRect().top + document.documentElement.scrollTop - 600;
}
const hideShowMenu = () => {
  const iconShowMenu = $(".icon__mobile");
  const iconHideMenu = $(".menu__mobile--cancel");
  const listMenu = $(".header__menu");
  const menuMobile = $(".menu__mobile");
  const cloneBtnBuy = $(".btn__blue")[0].cloneNode(true);
  const cloneMenu = listMenu[0].cloneNode(true);

  menuMobile[0].appendChild(cloneMenu);
  menuMobile[0].appendChild(cloneBtnBuy);
  iconShowMenu[0].addEventListener('click', () => {
    menuMobile[0].setAttribute("class", "menu__mobile menu__mobile--show");
  })
  iconHideMenu[0].addEventListener('click', () => {
    menuMobile[0].setAttribute("class", "menu__mobile");
  })
}

window.onload = () => {
  //////// show hide menu mobile
  hideShowMenu(); ///////////////////////////////////////////////////////////////////////////////


  const elements = document.getElementsByClassName('typewrite');

  const btnNext = $(".testimonials__next");
  const btnPrev = $(".testimonials__prev");
  const elSlider = $(".testimonials__slider--list");
  const elImg = $(".slider__img");
  const listImgSlider = ['./images/photo-26.jpg', "./images/photo-1.jpg"];

  const elCount = $(".pricing__card--price .number")[0];
  const btnCount = $("#btn__count")[0];
  const elDropdown = $(".menu__mobile .dropdown__account--item");
  console.log("🚀 ~ file: custom.js ~ line 57 ~ elDropdown", elDropdown)

  const elWelcome = $(".welcome__inner")[0].children;
  const elFeature = $(".feature__inner")[0].children;
  const elAbout = $(".about__inner")[0].children;
  const elExperience = $(".about__experience")[0].children;
  const elStart = $(".start");
  const elPricing = $(".pricing__card");

  const listCheck = {
    welcome: true,
    feature: true,
    about: true,
    experience: true,
    start: true,
    pricing: true
  }
  let scroll = window.scrollY;

  //// dropdown
  dropdown(elDropdown);

  ////type write
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  ///count price
  btnCount.addEventListener("click", () => {
    if (btnCount.checked === true) {
      new countPrice(29, 49, elCount, 500);
    } else {
      new countPrice(49, 29, elCount, 500);
    }
  })

  /////////////////////////////////////////////////////////////////////////////////////////////
  /// scroll position and fade in
  if (scroll >= -1 & listCheck.welcome === true) {
    FadeUp(elWelcome);
    listCheck.welcome = false;
  }

  if (scroll > getScrollTop(elFeature[0]) & listCheck.feature === true) {
    FadeUp(elFeature);
    listCheck.feature = false
  }

  if (scroll > getScrollTop(elAbout[0]) & listCheck.about === true) {
    FadeLeft(elAbout[0], 800);
    FadeRight(elAbout[1], 1100);
    listCheck.about = false
  }
  if (scroll > getScrollTop(elExperience[0]) & listCheck.experience === true) {

    FadeLeft(elExperience[0], 800);
    FadeRight(elExperience[1], 1100);

    listCheck.experience = false
  }
  if ((scroll - 500) > getScrollTop(elStart[0]) & listCheck.start === true) {
    new countPrice(0, 100, $(".Satisfaction")[0], 800);
    new countPrice(0, 24, $(".time-total")[0], 800);
    new countPrice(0, 7, $(".time-support")[0], 800);
    new countPrice(0, 100, $('.number-sales')[0], 800);
    listCheck.start = false;
  }
  if (scroll > getScrollTop(elPricing[0]) & listCheck.pricing === true) {
    FadeUp(elPricing);
    listCheck.pricing = false;
  }
  // scrolling
  window.addEventListener("scroll", (event) => {
    scroll = this.scrollY;

    if (scroll >= -1 & listCheck.welcome === true) {
      FadeUp(elWelcome);
      listCheck.welcome = false;
    }
    if (scroll > getScrollTop(elFeature[0]) & listCheck.feature === true) {
      FadeUp(elFeature);
      listCheck.feature = false
    }
    if (scroll > getScrollTop(elAbout[0]) & listCheck.about === true) {
      FadeLeft(elAbout[0], 800);
      FadeRight(elAbout[1], 1100);
      listCheck.about = false
    }
    if (scroll > getScrollTop(elExperience[0]) & listCheck.experience === true) {

      FadeLeft(elExperience[0], 800);
      FadeRight(elExperience[1], 1100);

      listCheck.experience = false
    }
    if ((scroll - 500) > getScrollTop(elStart[0]) & listCheck.start === true) {

      new countPrice(0, 100, $(".Satisfaction")[0], 800);
      new countPrice(0, 24, $(".time-total")[0], 800);
      new countPrice(0, 7, $(".time-support")[0], 800);
      new countPrice(0, 100, $('.number-sales')[0], 800);
      listCheck.start = false
    }
    if (scroll > getScrollTop(elPricing[0]) & listCheck.pricing === true) {
      FadeUp(elPricing);
      listCheck.pricing = false;
    }
  });

  ///slider
  new Slider(listImgSlider, elSlider[0], btnNext[0], btnPrev[0], elImg[0]);
  //// validator form download
  Validator({
    form: "#form-1",
    download: "#download",
    rules: [
      Validator.isRequired('#name'),
      Validator.isRequired('#email'),
      Validator.isRequired('#password'),
      Validator.isEmail("#email"),
      Validator.isPassword("#password"),

    ]
  })

}