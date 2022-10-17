export const moveToAboutMe = () => {
  const headerButton = document.querySelector(".main-header__btn");
  const aboutMeSection = document.querySelector(".about-me");

  headerButton.addEventListener("click", () => {
    aboutMeSection.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
};
moveToAboutMe();
