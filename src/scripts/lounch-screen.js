export const launchScreen = () => {
  //Elements

  const launchScreenCurtain = document.querySelectorAll(
    ".launch-screen__curtain"
  );
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
    openLeft();
    openRight();
    openButton();
    setTimeout(() => {
      launchScreenContainer.style.display = "none";
    }, 1500);
  });
};
// launchScreen();
