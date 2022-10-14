export const mobileMenu = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".navbar__overlay");

  // change hamburger button
  const changeHamburgerButton = () => {
    hamburgerButton.classList.toggle("hamburger--open");
  };

  // show mobile menu
  const showMobileMenu = () => {
    mobileMenu.classList.toggle("menu--open");
    console.log(mobileMenu);
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
};

mobileMenu();
