import { smoothScroll } from "./smoothScrollTo";
const window = document.querySelector("html");

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

  function closeMobileMenu() {
    mobileMenu.classList.remove("menu--open");
    menuOverlay.classList.remove("navbar__overlay--open");
    hamburgerButton.classList.remove("hamburger--open");
  }

  const actionMobile = (e) => {
    e.preventDefault();
    smoothScroll(e.target);
    changeHamburgerButton();
    showMobileMenu();
    showOverlay();
  };
  const actionDesktop = (e) => {
    e.preventDefault();
    smoothScroll(e.target);
  };
  const menuObserver = new ResizeObserver((entry) => {
    entry[0].contentRect.width <= 1000
      ? (mobileMenuLinks.forEach((menulink) => {
          menulink.addEventListener("click", (e) => {
            actionMobile(e);
          });
        }),
        changeTabBlock(-1),
        closeMobileMenu())
      : mobileMenuLinks.forEach((menulink) => {
          menulink.addEventListener("click", (e) => {
            actionDesktop(e);
          });
          changeTabBlock(1);
        });
  });
  menuObserver.observe(window);
};

mobileMenu();
