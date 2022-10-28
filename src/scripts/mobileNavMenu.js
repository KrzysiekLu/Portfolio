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

  // show navbar when cursor is at the very top

  const toglleDesktopNavbarCursor = (e) => {
    e.clientY < 100 ? mobileMenu.classList.add("menu--openDesk") : false;
  };

  // show nav when scroll up hide when scroll down
  const toglleDesktopNavbarScroll = (e) => {
    e.deltaY === 100
      ? mobileMenu.classList.remove("menu--openDesk")
      : mobileMenu.classList.add("menu--openDesk");
  };

  //action after click on a navbar menu links

  function closeMobileMenu() {
    console.log("ddd");

    mobileMenu.classList.remove("menu--open");
    menuOverlay.classList.remove("navbar__overlay--open");
    hamburgerButton.classList.remove("hamburger--open");
  }

  const actionMobile = (e) => {
    e.preventDefault();
    smoothScroll(e.target);
    changeHamburgerButton();
  };
  const actionDesktop = (e) => {
    e.preventDefault();
    smoothScroll(e.target);
  };
  const menuObserver = new ResizeObserver((entry) => {
    if (entry[0].contentRect.width < 1000) {
      mobileMenuLinks.forEach((menulink) => {
        menulink.addEventListener("click", (e) => {
          closeMobileMenu();
          changeHamburgerButton();
          actionMobile(e);
        });
      });
      changeTabBlock(-1);
    } else {
      changeTabBlock(1);

      mobileMenuLinks.forEach((menulink) => {
        menulink.addEventListener("click", (e) => {
          actionDesktop(e);
        });
        document.addEventListener("wheel", (e) => {
          toglleDesktopNavbarScroll(e);
        });
        document.addEventListener("mouseover", (e) => {
          toglleDesktopNavbarCursor(e);
        });
      });
    }
  });
  menuObserver.observe(window);
};

mobileMenu();
