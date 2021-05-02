const navBtn = document.querySelector(".nav__btn");
const activeMenu = () => {
  document.querySelector(".nav__block").classList.toggle("menu__active");
};
export { navBtn, activeMenu };
