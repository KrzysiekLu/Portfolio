export const observers = () => {
  const sectionAboutMe = document.querySelector(".about-me");

  const sectionObserverOptions = {
    rootMargin: "0px 0px -200px 0px",
  };
  const showSection = () => {
    sectionAboutMe.classList.add("about-me--active");
  };

  const sectionObserver = new IntersectionObserver((e) => {
    e[0].isIntersecting ? showSection() : false;
  }, sectionObserverOptions);

  sectionObserver.observe(sectionAboutMe);
};
observers();