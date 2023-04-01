// popup menu-tablet
const btnMenu = document.getElementById("btn-menu");
const showMenu = document.querySelector(".menu-lists-tablet");
const hiddenMenu = document.querySelectorAll(".menu-item-tablet");
let show = false;
const showMenuTablet = () => {
  if (!show) {
    showMenu.style.display = "block";
    s;
    show = true;
  } else {
    showMenu.style.display = "none";
    show = false;
  }
};
const hiddenMenuTablet = () => {
  showMenu.style.display = "none";
};
btnMenu.addEventListener("click", showMenuTablet);
hiddenMenu.forEach((item) => {
  item.addEventListener("click", hiddenMenuTablet);
});
// News - Slide
const slideNews = document.querySelector(".slide-news-main");
const slidesNews = document.querySelectorAll(".slide-news");
let curSlideNews = 0;
const nextSlideNews = document.querySelector(".next-btn-news");
let maxSlideNews = slidesNews.length - 1;
nextSlideNews.addEventListener("click", function () {
  let positionNews = slidesNews[0].offsetWidth;
  prevSlideNews.style.opacity = "1";
  if (curSlideNews === maxSlideNews) {
    nextSlideNews.style.opacity = "0.5";

    return;
  } else {
    curSlideNews++;
  }
  slideNews.style.transform = `translateX(${-positionNews * curSlideNews}px)`;
});
// select prev slide button
const prevSlideNews = document.querySelector(".prev-btn-news");
prevSlideNews.addEventListener("click", function () {
  let positionNews = slidesNews[0].offsetWidth;
  nextSlideNews.style.opacity = "1";

  if (curSlideNews === 0) {
    prevSlideNews.style.opacity = "0.5";

    return;
  } else {
    curSlideNews--;
  }
  slideNews.style.transform = `translateX(${-positionNews * curSlideNews}px)`;
});
// Train - slide
const slideTrain = document.querySelector(".slide-train-main");
const slidesTrain = document.querySelectorAll(".slide-train");

let curSlideTrain = 0;
const nextSlideTrain = document.querySelector(".next-btn-train");
nextSlideTrain.addEventListener("click", () => {
  console.log(curSlideTrain);
  let positionTrain = slidesTrain[0].offsetWidth;
  prevSlideTrain.style.opacity = "1";
  if (curSlideTrain === slidesTrain.length - 1) {
    nextSlideTrain.style.opacity = "0.5";
    return;
  } else {
    curSlideTrain++;
  }
  slideTrain.style.transform = `translateX(${
    -positionTrain * curSlideTrain
  }px)`;
});
const prevSlideTrain = document.querySelector(".prev-btn-train");
prevSlideTrain.addEventListener("click", () => {
  let positionTrain = slidesTrain[0].offsetWidth;
  nextSlideTrain.style.opacity = "1";

  if (curSlideTrain === 0) {
    prevSlideTrain.style.opacity = "0.5";

    return;
  } else {
    curSlideTrain--;
  }
  slideTrain.style.transform = `translateX(${
    -positionTrain * curSlideTrain
  }px)`;
});
// Cooperate-slide
const slide = document.querySelector(".slide-cooperate-main");
const slides = document.querySelectorAll(".slide-cooperate");
let curSlide = 0;
const nextSlide = document.querySelector(".next-btn-coop");
let maxSlide = slides.length - 1;
nextSlide.addEventListener("click", function () {
  let position = slides[0].offsetWidth;
  prevSlide.style.opacity = "1";

  if (curSlide === maxSlide) {
    nextSlide.style.opacity = "0.5";

    return;
  } else {
    curSlide++;
  }
  slide.style.transform = `translateX(${-position * curSlide}px)`;
});

const prevSlide = document.querySelector(".prev-btn-coop");
prevSlide.addEventListener("click", function () {
  let position = slides[0].offsetWidth;
  nextSlide.style.opacity = "1";

  if (curSlide === 0) {
    prevSlide.style.opacity = "0.5";
    return;
  } else {
    curSlide--;
  }
  slide.style.transform = `translateX(${-position * curSlide}px)`;
});
// Sharing - slide
const slideSharing = document.querySelector(".slide-sharing-main");

const slidesSharing = document.querySelectorAll(".slide-sharing");
let curSlideSharing = 0;
const nextSlideShar = document.querySelector(".next-btn-sharing");
nextSlideShar.addEventListener("click", () => {
  let nextStep;
  let frameSize = slideSharing.offsetWidth;
  let positionSharing = slidesSharing[0].offsetWidth;

  if (frameSize > 1024) {
    nextStep = 3;
  } else if (frameSize <= 1024 && frameSize > 768) {
    nextStep = 2;
  } else if (frameSize <= 768) {
    nextStep = 1;
  }

  prevSlideShar.style.opacity = "1";

  if (curSlideSharing === slidesSharing.length - nextStep) {
    nextSlideShar.style.opacity = "0.5";

    return;
  } else {
    curSlideSharing++;
  }
  console.log(positionSharing);
  slideSharing.style.transform = `translateX(${
    -positionSharing * curSlideSharing
  }px)`;
});

const prevSlideShar = document.querySelector(".prev-btn-sharing");
prevSlideShar.addEventListener("click", () => {
  let positionSharing = slidesSharing[0].offsetWidth;
  nextSlideShar.style.opacity = "1";

  if (curSlideSharing === 0) {
    prevSlideShar.style.opacity = "0.5";
    return;
  } else {
    curSlideSharing--;
  }
  slideSharing.style.transform = `translateX(${
    -positionSharing * curSlideSharing
  }px)`;
});
// Gallery-slide
const slideGallery = document.querySelector(".slide-gallery-main");

const slidesGallery = document.querySelectorAll(".slide-gallery");

let curSlideGallery = 0;
const nextBtnGallery = document.querySelector(".next-btn-gallery");
nextBtnGallery.addEventListener("click", () => {
  let positionGallery = slidesGallery[0].offsetWidth;
  prevBtnGallery.style.opacity = "1";
  if (curSlideGallery === slidesGallery.length - 1) {
    nextBtnGallery.style.opacity = "0.5";
    return;
  } else {
    curSlideGallery++;
  }
  slideGallery.style.transform = `translateX(${
    -positionGallery * curSlideGallery
  }px)`;
});
const prevBtnGallery = document.querySelector(".prev-btn-gallery");
prevBtnGallery.addEventListener("click", () => {
  let positionGallery = slidesGallery[0].offsetWidth;
  nextBtnGallery.style.opacity = "1";

  if (curSlideGallery === 0) {
    prevBtnGallery.style.opacity = "0.5";
    return;
  } else {
    curSlideGallery--;
  }

  slideGallery.style.transform = `translateX(${
    -positionGallery * curSlideGallery
  }px)`;
});
