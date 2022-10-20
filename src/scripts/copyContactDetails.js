export const copyContactDetails = () => {
  const copyLinks = document.querySelectorAll(" .wraper >.copy");
  const emailAdress = document.querySelector(".email__adress");
  copyLinks[0].addEventListener("click", (e) => {
    console.log(e.target);
    navigator.clipboard
      .readText()
      .then(
        (clipText) => (document.querySelector(".editor").innerText += clipText)
      );
  });
};

copyContactDetails();
