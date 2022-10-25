import { launchScreen } from "./lounch-screen.js";
import { mobileMenu } from "./mobileNavMenu.js";
import { writeSbtitle } from "./writeSubtitle.js";
import { moveHeaderArrow } from "./moveHeaderArrow.js";
import { smoothScroll } from "./smoothScrollTo.js";
import { observers } from "./observers.js";
import { projectsSlider } from "./projectSlider.js";
import { copyContactDetails } from "./copyContactDetails.js";

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("krzysztof.luuczak@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
