export const smoothScroll = (el) => {
  document.getElementById(el.dataset.destn).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
document.querySelector(".main-header__btn").addEventListener("click", () => {
  smoothScroll(document.querySelector(".main-header__btn"));
});
