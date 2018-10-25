var headerMenu = document.querySelector(".header__menu");

var headerButtonMenu = document.querySelector(".header__button-menu");

headerButtonMenu.classList.remove("header__button-menu--no-js");

headerButtonMenu.addEventListener("click", function() {
  if (headerButtonMenu.classList.contains("header__button-menu--open")) {
    headerButtonMenu.classList.remove("header__button-menu--open");
    headerButtonMenu.classList.add("header__button-menu--close");
  }

  else {
    headerButtonMenu.classList.remove("header__button-menu--close");
    headerButtonMenu.classList.add("header__button-menu--open");
  }
});
