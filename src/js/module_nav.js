const navBtn = document.querySelector(".nav__btn");
const menu = document.querySelector(".nav__block");
const activeMenu = () => {
  navBtn.addEventListener("click", () => {
    menu.classList.toggle("menu__active");
  });
};
export { activeMenu };
