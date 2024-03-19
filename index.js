// SCROLL TO NECESSARY BLOCK FROM NAV
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  // #header-signature - CURSOR TRACKER
  const headerSignature = document.getElementById("header-signature");
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const headerRect = headerSignature.getBoundingClientRect();
    const headerX = headerRect.left + headerRect.width / 2;
    const headerY = headerRect.top + headerRect.height / 2;

    const diffX = mouseX - headerX;
    const diffY = mouseY - headerY;

    const tiltX = diffX / 50;
    const tiltY = diffY / 50;

    headerSignature.style.transform = `translate(${diffX / 10}px, ${
      diffY / 10
    }px) rotateX(${tiltY}deg) rotateY(${-tiltX}deg)`;
  });

  function isElementPartiallyInViewport(el, margin = 0) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top + margin < windowHeight && rect.bottom - margin > 0;
  }

  function animateOnScroll(element, animationClass, animationClassToRemove) {
    if (isElementPartiallyInViewport(element, 100)) {
      element.classList.add(...animationClass);
      element.classList.remove(...animationClassToRemove);
    }
  }

  // SHOW LISTENERS
  // .slide-image's - SHOW LISTENER
  let images = document.querySelectorAll(".slide-image");
  let imageShowDelay = 0;

  function checkSlide() {
    images.forEach(function (image) {
      let screenImagePosition = window.innerHeight / 2.3;
      let imageScrollPosition = window.scrollY + screenImagePosition;

      if (screenImagePosition < imageScrollPosition) {
        setTimeout(function () {
          image.classList.add("opacity-100", "translate-y-0");
          image.classList.remove("opacity-0", "translate-y-32");
        }, imageShowDelay);
        imageShowDelay += 120;
      }
    });
  }
  window.addEventListener("scroll", checkSlide);
  window.addEventListener("scroll", () => {
    animateOnScroll(
      document.getElementById("fs-right-fr-first"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-[-50px]"]
    );

    animateOnScroll(
      document.getElementById("fs-right-sr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[30px]"]
    );

    animateOnScroll(
      document.getElementById("fs-left-sr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[-30px]"]
    );

    animateOnScroll(
      document.getElementById("fs-left-horizontal"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-[70px]"]
    );

    animateOnScroll(
      document.getElementById("info-desktop-block"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[50px]"]
    );

    animateOnScroll(
      document.getElementById("sixth-section"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-10"]
    );

    animateOnScroll(
      document.getElementById("ss-left-fr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[-30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-left-fr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[-30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-left-fr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[-30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-right-sr-first"),
      ["opacity-100", "translate-x-0"],
      ["opacity-0", "translate-x-[30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-left-tr-first"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-[30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-right-fourr-first"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-[30px]"]
    );

    animateOnScroll(
      document.getElementById("ss-right-fourr-second"),
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-[30px]"]
    );
  });
});
