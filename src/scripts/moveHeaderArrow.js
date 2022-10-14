export const moveHeaderArrow = () => {
  const headerButton = document.querySelector(".main-header__btn");
  const arrow = document.querySelector(".main-header__arrow-down");

  const addClassArrow = () => {
    arrow.classList.add("main-header__arrow-down--active");
  };

  const removeArrowClass = () => {
    arrow.classList.remove("main-header__arrow-down--active");
  };
  headerButton.addEventListener("mouseover", addClassArrow);
  headerButton.addEventListener("mouseleave", removeArrowClass);
};
moveHeaderArrow();
