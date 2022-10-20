export const observers = () => {
  const sections = document.querySelectorAll(".section");

  const sectionObserverOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  };

  // function adding a class to show sections
  const showSection = (obsSection) => {
    obsSection.target.classList.add("section--active");
  };

  // observer for fadein section
  const sectionObserver = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting ? showSection(e) : false;
    });

    // showSection(e);
  }, sectionObserverOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};
observers();
