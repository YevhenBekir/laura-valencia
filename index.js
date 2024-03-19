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
});
