export const observers = () => {
  const sectionAboutMe = document.querySelector(".about-me");

  const skilsSection = document.querySelector(".skils");
  const sections = document.querySelectorAll(".section");
  console.log(sections);

  const sectionObserverOptions = {
    rootMargin: "-200px 0px -100px 0px",
  };
  const showSection = (obsSection) => {
    console.log(obsSection);

    obsSection[0].target.classList.add("section--active");
  };

  const sectionObserver = new IntersectionObserver((e) => {
    e[0].isIntersecting ? showSection(e) : false;
  }, sectionObserverOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
  // sectionObserver.observe(sectionAboutMe);
  // sectionObserver.observe(skilsSection);
};
observers();
