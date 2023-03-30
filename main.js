// popup menu-tablet
const btnMenu = document.getElementById("btn-menu");
const showMenu = document.querySelector(".menu-lists-tablet");
const hiddenMenu = document.querySelectorAll(".menu-item-tablet");
let show = false;
const showMenuTablet = () => {
  if (!show) {
    showMenu.style.display = "block";
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
let positionNews = slidesNews[0].offsetWidth;
const nextSlideNews = document.querySelector(".next-btn-news");
let maxSlideNews = slidesNews.length - 1;
nextSlideNews.addEventListener("click", function () {
  if (curSlideNews === maxSlideNews) {
    return;
  } else {
    curSlideNews++;
  }
  slideNews.style.transform = `translateX(${-positionNews * curSlideNews}px)`;
});
// select prev slide button
const prevSlideNews = document.querySelector(".prev-btn-news");
prevSlideNews.addEventListener("click", function () {
  if (curSlideNews === 0) {
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
let positionTrain = slidesTrain[0].offsetWidth;
const nextSlideTrain = document.querySelector(".next-btn-train");
nextSlideTrain.addEventListener("click", () => {
  if (curSlideTrain === slidesTrain.length - 1) {
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
  if (curSlideTrain === 0) {
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
let position = slides[0].offsetWidth;
const nextSlide = document.querySelector(".next-btn-coop");
let maxSlide = slides.length - 1;
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    return;
  } else {
    curSlide++;
  }
  slide.style.transform = `translateX(${-position * curSlide}px)`;
});

const prevSlide = document.querySelector(".prev-btn-coop");
prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    return;
  } else {
    curSlide--;
  }
  slide.style.transform = `translateX(${-position * curSlide}px)`;
});
// Sharing - slide
const slideSharing = document.querySelector(".bal");
const slidesSharing = document.querySelectorAll(".slide-sharing");
let curSlideSharing = 0;
let positionSharing = slidesSharing[0].offsetWidth;
const nextSlideShar = document.querySelector(".next-btn-sharing");
nextSlideShar.addEventListener("click", () => {
  if (curSlideSharing === slidesSharing.length - 3) {
    return;
  } else {
    curSlideSharing++;
  }
  slideSharing.style.transform = `translateX(${
    -positionSharing * curSlideSharing
  }px)`;
});

const prevSlideShar = document.querySelector(".prev-btn-sharing");
prevSlideShar.addEventListener("click", () => {
  if (curSlideSharing === 0) {
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
console.log(slidesGallery.length);
let curSlideGallery = 0;
let positionGallery = slidesGallery[0].offsetWidth;
const nextBtnGallery = document.querySelector(".next-btn-gallery");
nextBtnGallery.addEventListener("click", () => {
  if (curSlideGallery === slidesGallery.length - 1) {
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
  if (curSlideGallery === 0) {
    return;
  } else {
    curSlideGallery--;
  }
  console.log("prev");

  slideGallery.style.transform = `translateX(${
    -positionGallery * curSlideGallery
  }px)`;
});
