const dotOne = document.querySelector(".dot__item-one");
const dotTwo = document.querySelector(".dot__item-two");
const dotThree = document.querySelector(".dot__item-three");
const leftArrow = document.querySelector(".banner__arrow-left");
const rightArrow = document.querySelector(".banner__arrow-right");

const slider = () => {
  dotOne.addEventListener("click", () => {
    document.querySelector(
      ".banner"
    ).style.backgroundImage = `url("./src/assets/img/banner1.jpg")`;
  });
  dotTwo.addEventListener("click", () => {
    document.querySelector(
      ".banner"
    ).style.backgroundImage = `url("./src/assets/img/banner2.jpg")`;
  });
  dotThree.addEventListener("click", () => {
    document.querySelector(
      ".banner"
    ).style.backgroundImage = `url("./src/assets/img/banner3.jpg")`;
  });
};
export { slider };
