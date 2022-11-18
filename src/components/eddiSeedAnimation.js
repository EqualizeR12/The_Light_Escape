"use strict";

function seedEddiAnimation() {
  let seed = document.querySelector(".descr-info__cid");
  let eddi = document.querySelector(".descr-info__eddi");

  seed.style.marginRight = "700px";
  seed.style.opacity = "0";
  seed.style.transition = "1s";

  eddi.style.marginLeft = "700px";
  eddi.style.opacity = "0";
  eddi.style.transition = "1s";

  window.addEventListener("scroll", () => {
    let positionScroll =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;

    if (positionScroll > 75) {
      seed.style.marginRight = "0px";
      seed.style.opacity = "1";

      eddi.style.marginLeft = "0px";
      eddi.style.opacity = "1";
    }

    if (positionScroll < 76) {
      seed.style.marginRight = "700px";
      seed.style.opacity = "0";

      eddi.style.marginLeft = "700px";
      eddi.style.opacity = "0";
    }

    console.log(positionScroll);
  });
}

module.exports = seedEddiAnimation;
