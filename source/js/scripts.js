var headerMenu = document.querySelector(".header__menu");
var headerButtonMenu = document.querySelector(".header__button-menu");
var orderButton = document.querySelector(".main-product__button");
var productItem = document.querySelectorAll(".product__price");
var modalPurchase = document.querySelector(".purchase__container");
var modalOverlay = document.querySelector(".modal--purchase");

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

if (orderButton) {
orderButton.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
});
}

productItem.forEach(e =>
e.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
})
);

modalOverlay.addEventListener(
"click",
function(evt) {
if (evt.currentTarget !== evt.target) {
return;
}

modalOverlay.classList.add("visually-hidden");
},
false
);
