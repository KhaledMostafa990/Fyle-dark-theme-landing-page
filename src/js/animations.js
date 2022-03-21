const headings = document.querySelectorAll("h1, h2 ,h3 ");
const paragraphs = document.querySelectorAll("p");
const footerAndHeaderInfo = document.querySelectorAll("a, span, .logo");
const buttonsAndICons = document.querySelectorAll(
  ".btn , .features__feature__icon , input "
);
const images = document.querySelectorAll(".process__img , .hero__img ");

function addAnimation(
  currentCollection,
  interSecting,
  animationClass,
  duration
) {
  return (isIntersecting) => {
    interSecting.style.animationDuration = duration;
    for (let element of currentCollection) {
      if (interSecting === element) {
        if (isIntersecting) {
          interSecting.classList.add(animationClass);
        } else {
          interSecting.classList.remove(animationClass);
          interSecting.style.opacity = "0";
        }
      }
    }
  };
}

const animationsOnScroll = new IntersectionObserver(
  (entries, animateSectionsOnScroll) => {
    entries.forEach((entry) => {
      let target = entry.target;
      const animateText = addAnimation(
        headings,
        target,
        "fade-up-right",
        ".811s"
      );
      const animateParagraph = addAnimation(
        paragraphs,
        target,
        "fade-down",
        ".911s"
      );
      const animateImg = addAnimation(images, target, "flip-up", ".88s");
      const animateBtn = addAnimation(
        buttonsAndICons,
        target,
        "zoom-in-down",
        ".88s"
      );
      const animateFooterAndHeader = addAnimation(
        footerAndHeaderInfo,
        target,
        "fade-up",
        ".88s"
      );

      if (!entry.isIntersecting) {
        animateText(false);
        animateParagraph(false);
        animateImg(false);
        animateBtn(false);
        animateFooterAndHeader(false);
        return;
      } else {
        animateText(true);
        animateParagraph(true);
        animateImg(true);
        animateBtn(true);
        animateFooterAndHeader(true);
      }
    });
  },
  {
    // Options
    root: null,
    threshold: 0.15,
    rootMargin: "-10px",
  }
);

function handleAnimateOnScroll(params) {
  headings.forEach((h) => {
    animationsOnScroll.observe(h);
  });

  images.forEach((img) => {
    animationsOnScroll.observe(img);
  });
  paragraphs.forEach((p) => {
    animationsOnScroll.observe(p);
  });
  buttonsAndICons.forEach((b) => {
    animationsOnScroll.observe(b);
  });
  footerAndHeaderInfo.forEach((el) => {
    animationsOnScroll.observe(el);
  });
}
export default handleAnimateOnScroll;
