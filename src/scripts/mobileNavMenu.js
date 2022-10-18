import { smoothScroll } from "./smoothScrollTo";

export const mobileMenu = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".menu");
  const mobileMenuLinks = document.querySelectorAll(".menu__link");

  const menuOverlay = document.querySelector(".navbar__overlay");

  // change hamburger button
  const changeHamburgerButton = () => {
    hamburgerButton.classList.toggle("hamburger--open");
  };

  // show mobile menu
  const showMobileMenu = () => {
    mobileMenu.classList.toggle("menu--open");
  };
  //show overlay
  const showOverlay = () => {
    menuOverlay.classList.toggle("navbar__overlay--open");
  };

  hamburgerButton.addEventListener("click", () => {
    changeHamburgerButton();
    showMobileMenu();
    showOverlay();
  });

  //action after click on a navbar menu links
  mobileMenuLinks.forEach((menulink) => {
    menulink.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScroll(e.target);

      changeHamburgerButton();
      showMobileMenu();
      showOverlay();
    });
  });
};

mobileMenu();
