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

  // Prevent tab key navigation when mobile menu is close
  const changeTabBlock = (index) => {
    mobileMenu.childNodes.forEach((item) =>
      item.children ? item.children[0].setAttribute("tabindex", index) : false
    );
  };

  // action for hamburger click
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.contains("menu--open")
      ? changeTabBlock(-1)
      : changeTabBlock(1);

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
