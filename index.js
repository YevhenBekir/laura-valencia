// SCROLL TO NECESSARY BLOCK
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // #header-signature - CURSOR TRACKING
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

  // .slide-image - SHOW LISTENER
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

  // #fs-right-fr-first - SHOW LISTENER
  let fsRightFrFirstImage = document.getElementById("fs-right-fr-first");
  let fsRightFrFirstImageSectionPosition =
    fsRightFrFirstImage.getBoundingClientRect().top;
  let fsRightFrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let fsRightFrFirstImageScrollPosition =
      window.scrollY + fsRightFrFirstImageScreenPosition;

    if (
      fsRightFrFirstImageSectionPosition < fsRightFrFirstImageScrollPosition
    ) {
      fsRightFrFirstImage.classList.add("opacity-100", "translate-y-0");
      fsRightFrFirstImage.classList.remove("opacity-0", "translate-y-[-50px]");
    }
  });

  // #fs-right-sr-first - SHOW LISTENER
  let fsRightSrFirstImage = document.getElementById("fs-right-sr-first");
  let fsRightSrFirstImageSectionPosition =
    fsRightSrFirstImage.getBoundingClientRect().top;
  let fsRightSrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let fsRightSrFirstImageScrollPosition =
      window.scrollY + fsRightSrFirstImageScreenPosition;

    if (
      fsRightSrFirstImageSectionPosition < fsRightSrFirstImageScrollPosition
    ) {
      fsRightSrFirstImage.classList.add("opacity-100", "translate-x-0");
      fsRightSrFirstImage.classList.remove("opacity-0", "translate-x-[30px]");
    }
  });

  // #fs-left-sr-first - SHOW LISTENER
  let fsLeftSrFirstImage = document.getElementById("fs-left-sr-first");
  let fsLeftSrFirstImageSectionPosition =
    fsLeftSrFirstImage.getBoundingClientRect().top;
  let fsLeftSrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let fsLeftSrFirstImageScrollPosition =
      window.scrollY + fsLeftSrFirstImageScreenPosition;

    if (fsLeftSrFirstImageSectionPosition < fsLeftSrFirstImageScrollPosition) {
      fsLeftSrFirstImage.classList.add("opacity-100", "translate-x-0");
      fsLeftSrFirstImage.classList.remove("opacity-0", "translate-x-[-50px]");
    }
  });

  // #fs-left-horizontal - SHOW LISTENER
  let fsLeftHorizontalImage = document.getElementById("fs-left-horizontal");
  let fsLeftHorizontalImageSectionPosition =
    fsLeftHorizontalImage.getBoundingClientRect().top;
  let fsLeftHorizontalImageScreenPosition = window.innerHeight / 3.3;

  window.addEventListener("scroll", () => {
    let fsLeftHorizontalImageScrollPosition =
      window.scrollY + fsLeftHorizontalImageScreenPosition;

    if (
      fsLeftHorizontalImageSectionPosition < fsLeftHorizontalImageScrollPosition
    ) {
      fsLeftHorizontalImage.classList.add("opacity-100", "translate-y-0");
      fsLeftHorizontalImage.classList.remove("opacity-0", "translate-y-[70px]");
    }
  });

  // #info-desktop-block - SHOW LISTENER
  let infoDesktopBlock = document.getElementById("info-desktop-block");
  let infoDesktopBlockSectionPosition =
    infoDesktopBlock.getBoundingClientRect().top;
  let infoDesktopBlockScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let infoDesktopBlockScrollPosition =
      window.scrollY + infoDesktopBlockScreenPosition;

    if (infoDesktopBlockSectionPosition < infoDesktopBlockScrollPosition) {
      infoDesktopBlock.classList.add("opacity-100", "translate-x-0");
      infoDesktopBlock.classList.remove("opacity-0", "translate-x-[50px]");
    }
  });

  // #sixth-section - SHOW LISTENER
  let sixthSection = document.getElementById("sixth-section");
  let sectionPosition = sixthSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let sixthSectionScrollPosition = window.scrollY + screenPosition;

    if (sectionPosition < sixthSectionScrollPosition) {
      sixthSection.classList.add("opacity-100", "translate-y-0");
      sixthSection.classList.remove("opacity-0", "translate-y-10");
    }
  });

  // #ss-left-fr-first - SHOW LISTENER
  let ssLeftFrFirstImage = document.getElementById("ss-left-fr-first");
  let ssLeftFrFirstImageSectionPosition =
    ssLeftFrFirstImage.getBoundingClientRect().top;
  let ssLeftFrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let ssLeftFrFirstImageScrollPosition =
      window.scrollY + ssLeftFrFirstImageScreenPosition;

    if (ssLeftFrFirstImageSectionPosition < ssLeftFrFirstImageScrollPosition) {
      ssLeftFrFirstImage.classList.add("opacity-100", "translate-x-0");
      ssLeftFrFirstImage.classList.remove("opacity-0", "translate-x-[-30px]");
    }
  });

  // #ss-right-sr-first - SHOW LISTENER
  let ssRightSrFirstImage = document.getElementById("ss-right-sr-first");
  let ssRightSrFirstImageSectionPosition =
    ssRightSrFirstImage.getBoundingClientRect().top;
  let ssRightSrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let ssRightSrFirstImageScrollPosition =
      window.scrollY + ssRightSrFirstImageScreenPosition;

    if (
      ssRightSrFirstImageSectionPosition + 200 <
      ssRightSrFirstImageScrollPosition
    ) {
      ssRightSrFirstImage.classList.add("opacity-100", "translate-x-0");
      ssRightSrFirstImage.classList.remove("opacity-0", "translate-x-[30px]");
    }
  });

  // #ss-left-tr-first - SHOW LISTENER
  let ssLeftTrFirstImage = document.getElementById("ss-left-tr-first");
  let ssLeftTrFirstImageSectionPosition =
    ssLeftTrFirstImage.getBoundingClientRect().top;
  let ssLeftTrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let ssLeftTrFirstImageScrollPosition =
      window.scrollY + ssLeftTrFirstImageScreenPosition;

    if (ssLeftTrFirstImageSectionPosition < ssLeftTrFirstImageScrollPosition) {
      ssLeftTrFirstImage.classList.add("opacity-100", "translate-y-0");
      ssLeftTrFirstImage.classList.remove("opacity-0", "translate-y-[30px]");
    }
  });

  // #ss-right-fourr-first - SHOW LISTENER
  let ssRightFourrFirstImage = document.getElementById("ss-right-fourr-first");
  let ssRightFourrFirstImageSectionPosition =
    ssRightFourrFirstImage.getBoundingClientRect().top;
  let ssRightFourrFirstImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let ssRightFourrFirstImageScrollPosition =
      window.scrollY + ssRightFourrFirstImageScreenPosition;

    if (
      ssRightFourrFirstImageSectionPosition <
      ssRightFourrFirstImageScrollPosition
    ) {
      ssRightFourrFirstImage.classList.add("opacity-100", "translate-y-0");
      ssRightFourrFirstImage.classList.remove(
        "opacity-0",
        "translate-y-[30px]"
      );
    }
  });

  // #ss-right-fourr-second - SHOW LISTENER
  let ssRightFourrSecondImage = document.getElementById(
    "ss-right-fourr-second"
  );
  let ssRightFourrSecondImageSectionPosition =
    ssRightFourrSecondImage.getBoundingClientRect().top;
  let ssRightFourrSecondImageScreenPosition = window.innerHeight / 2.3;

  window.addEventListener("scroll", () => {
    let ssRightFourrSecondImageScrollPosition =
      window.scrollY + ssRightFourrSecondImageScreenPosition;

    if (
      ssRightFourrSecondImageSectionPosition <
      ssRightFourrSecondImageScrollPosition
    ) {
      ssRightFourrSecondImage.classList.add("opacity-100", "translate-y-0");
      ssRightFourrSecondImage.classList.remove(
        "opacity-0",
        "translate-y-[30px]"
      );
    }
  });
});
