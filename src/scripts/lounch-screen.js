export const launchScreen = () => {
  //Elements

  const launchScreenCurtain = document.querySelectorAll(
    ".launch-screen__curtain"
  );
  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }

  document
    .querySelector("body")
    .addEventListener("wheel", preventScroll, { passive: false });

  const enableScroll = () => {
    document.querySelector("body").removeEventListener("wheel", preventScroll);
  };

  const launchScreenButton = document.querySelector(".launch-screen__button");
  const launchScreenContainer = document.querySelector(".launch-screen");

  //////// Helping functions
  // Open left side
  const openLeft = () => {
    launchScreenCurtain[0].classList.add("launch-screen__curtain--left--open");
  };

  // Open left side
  const openRight = () => {
    launchScreenCurtain[1].classList.add("launch-screen__curtain--right--open");
  };

  //changing button
  const openButton = () => {
    launchScreenButton.classList.add("launch-screen__button--clicked");
  };

  // Listeners
  launchScreenButton.addEventListener("click", (e) => {
    enableScroll();
    openLeft();
    openRight();
    openButton();
    setTimeout(() => {
      launchScreenContainer.style.display = "none";
    }, 1500);
  });
};
launchScreen();
