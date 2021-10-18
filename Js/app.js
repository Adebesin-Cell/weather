const menuOpenBtn = document.querySelector(".btn--menu-toggle");
const menuCloseBtn = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");

const openMenu = function () {
  menu.classList.remove("menu--hidden");
};

const closeMenu = function () {
  menu.classList.add("menu--hidden");
};

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
