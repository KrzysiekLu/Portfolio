export const copyContactDetails = () => {
  const copyLinks = document.querySelectorAll(" .wraper >.copy");

  copyLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
      navigator.clipboard.writeText(
        e.target.previousElementSibling.textContent
      );
    });
  });
};

copyContactDetails();
