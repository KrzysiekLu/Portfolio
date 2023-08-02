import KeenSlider from "../../node_modules/keen-slider/keen-slider.cjs";

const linksLiveSite = [
  "https://melodious-bombolone-1d775e.netlify.app/",
  " https://advice-generator-krzysiek.netlify.app",
  "https://noughts-and-crosses-kl.netlify.app/",
  "https://ornate-raindrop-671bf8.netlify.app/",
  "https://dazzling-rugelach-d5a483.netlify.app/",
  "https://timely-kataifi-dcb1c1.netlify.app/",
];
const linksGitHub = [
  "https://github.com/KrzysiekLu/MemoryGame",
  "https://github.com/KrzysiekLu/Advice-Generator-FrontEndMentor",
  "https://github.com/KrzysiekLu/NOUGHTS-AND-CROSSES",
  "https://github.com/KrzysiekLu/Form",
  "https://github.com/KrzysiekLu/Country-information-cards",
  "https://github.com/KrzysiekLu/Timer",
];
const projectLinks = document.querySelectorAll(".project-link");

export const projectsSlider = () => {
  function navigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight;
    const projectsInfo = document.querySelectorAll(".project-info__wraper");

    function markup(remove) {
      wrapperMarkup(remove);
      dotMarkup(remove);
      arrowMarkup(remove);
    }

    function removeElement(elment) {
      elment.parentNode.removeChild(elment);
    }
    function createDiv(className) {
      var div = document.createElement("div");
      var classNames = className.split(" ");
      classNames.forEach((name) => div.classList.add(name));
      return div;
    }

    function arrowMarkup(remove) {
      if (remove) {
        removeElement(arrowLeft);
        removeElement(arrowRight);
        return;
      }
      arrowLeft = createDiv("arrow arrow--left");
      arrowLeft.addEventListener("click", () => {
        slider.prev();
      });
      arrowRight = createDiv("arrow arrow--right");
      arrowRight.addEventListener("click", () => {
        slider.next();
      });

      wrapper.appendChild(arrowLeft);
      wrapper.appendChild(arrowRight);
    }

    function wrapperMarkup(remove) {
      if (remove) {
        var parent = wrapper.parentNode;
        while (wrapper.firstChild)
          parent.insertBefore(wrapper.firstChild, wrapper);
        removeElement(wrapper);
        return;
      }
      wrapper = createDiv("navigation-wrapper");
      slider.container.parentNode.appendChild(wrapper);
      wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots);
        return;
      }
      dots = createDiv("dots");
      slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv("dot");
        dot.addEventListener("click", () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      });
      wrapper.appendChild(dots);
    }

    const updateDescription = (index) => {
      projectsInfo.forEach((el) => {
        el.classList.remove("project-info__wraper--show");
      });
      projectsInfo[index].classList.add("project-info__wraper--show");
    };
    const updateLinks = (index) => {
      projectLinks[0].setAttribute("href", linksGitHub[index]);
      projectLinks[1].setAttribute("href", linksLiveSite[index]);
    };

    function updateClasses() {
      var slide = slider.track.details.rel;
      slide === 0
        ? arrowLeft.classList.add("arrow--disabled")
        : arrowLeft.classList.remove("arrow--disabled");
      slide === slider.track.details.slides.length - 1
        ? arrowRight.classList.add("arrow--disabled")
        : arrowRight.classList.remove("arrow--disabled");
      Array.from(dots.children).forEach(function (dot, idx) {
        idx === slide
          ? (dot.classList.add("dot--active"),
            updateDescription(idx),
            updateLinks(idx))
          : dot.classList.remove("dot--active");
      });
    }

    slider.on("created", () => {
      markup();
      updateClasses();
    });
    slider.on("optionsChanged", () => {
      console.log(2);
      markup(true);
      markup();
      updateClasses();
    });
    slider.on("slideChanged", () => {
      updateClasses();
    });
    slider.on("destroyed", () => {
      markup(true);
    });
  }
  var slider = new KeenSlider(
    "#my-keen-slider",
    {
      loop: true,
      slides: {
        origin: "center",
      },
    },
    [navigation]
  );
};
projectsSlider();
