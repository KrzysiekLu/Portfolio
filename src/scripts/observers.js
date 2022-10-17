export const observers = () => {
  const sectionAboutMe = document.querySelector(".about-me");
  const aboutMeTitle = document.querySelector(".about-me__title");
  const aboutMeDescription = document.querySelector(".about-me__description");

  const aboutMeElemensts = [aboutMeTitle, aboutMeDescription];

  const sectionObserverOptions = {
    rootMargin: "0px 0px -100px 0px",
  };
  const showSection = (elemetns) => {
    elemetns.forEach((element) => {
      element.classList.add("about-me--active");
    });
  };

  const sectionObserver = new IntersectionObserver((e) => {
    e[0].isIntersecting ? showSection(aboutMeElemensts) : false;
  }, sectionObserverOptions);

  sectionObserver.observe(sectionAboutMe);
};
observers();
