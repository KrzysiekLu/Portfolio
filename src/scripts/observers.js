export const observers = () => {
  const sections = document.querySelectorAll(".section");

  const sectionObserverOptions = {
    rootMargin: "-200px 0px -150px 0px",
  };

  // function adding a class to show sections
  const showSection = (obsSection) => {
    obsSection[0].target.classList.add("section--active");
  };

  // observer for fadein section
  const sectionObserver = new IntersectionObserver((e) => {
    e[0].isIntersecting ? showSection(e) : false;
  }, sectionObserverOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};
observers();
