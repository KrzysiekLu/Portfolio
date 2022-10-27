import Typed from "typed.js";
export const writeSubtitle = () => {
  const text = new Typed(".main-header__subtitle", {
    strings: ["Front end developer.", " Wannabe front end developer."],
    // loop: true,
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 800,
  });
};

writeSubtitle();
