export const contact = () => {
  // Copy tel or email to clipboard

  const copyContactDetails = () => {
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

  ////////////// From validation
  const emailInput = document.querySelector(".form__email");
  const formErrorInfo = document.querySelector(".form__error-info");

  // Email validation
  const checkEmail = (mail) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mail.value.match(mailFormat)) {
      return true;
    } else {
      return false;
    }
  };

  const showError = () => {
    formErrorInfo.classList.add("form__error-info--active");
    emailInput.classList.add("form__input--error");
  };
  const resetErrors = () => {
    emailInput.classList.remove("form__input--error");
    formErrorInfo.classList.remove("form__error-info--active");
  };

  const validateForm = (event) => {
    checkEmail(emailInput) ? (handleSubmit(event), resetErrors()) : showError();
  };

  // Submit Email

  const handleSubmit = (event) => {
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        document
          .querySelector(".contact__overlay")
          .classList.add("contact__overlay--open");
        document
          .querySelector(".confirm-message__button")
          .addEventListener("click", () => {
            document
              .querySelector(".contact__overlay")
              .classList.remove("contact__overlay--open");
          });
      })
      .catch((error) => alert(error));
  };

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm(event);
  });
};
contact();
