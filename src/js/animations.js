const t0 = performance.now();
const parentToAnimateChildren = document.querySelectorAll("[data-aws-seq]");
const elementsToAnimate = document.querySelectorAll("[data-aws]");

const observerOptions = {
  root: null,
  threshold: 0.45,
  rootMargin: "0px",
};
function handleAnimateOnScroll() {
  elementsToAnimate.forEach((el) => animationsOnScroll.observe(el));
  parentToAnimateChildren.forEach((parent) =>
    [...parent.children].forEach((child) => animationsOnScroll.observe(child))
  );
}
const animationsOnScroll = new IntersectionObserver(Callback, observerOptions);
function Callback(entries, animationsOnScroll) {
  entries.forEach(({ target, isIntersecting }) => {
    // While Scrolling..
    if (!isIntersecting) {
      handleInterSectingTarget(target, false);
      return;
    } else {
      handleInterSectingTarget(target, true);
    }
  });
}
function handleInterSectingTarget(target, inView) {
  addAnimation(parentToAnimateChildren, true)(target, inView);
  addAnimation(elementsToAnimate, false)(target, inView);
}
function addAnimation(elements, sequencely) {
  if (!sequencely) {
    return (target, isIntersecting) => {
      elements.forEach((element) => {
        if (target === element) {
          isIntersecting
            ? target.classList.add("animate")
            : target.classList.remove("animate");
        }
      });
    };
  } else {
    return (target, isIntersecting) => {
      elements.forEach((parent) =>
        [...parent.children].forEach((child, indx) => {
          child.dataset.aws
            ? (child.style.transitionDuration = `1s`)
            : (child.style.transitionDuration = `${indx + 0.8 * 0.8}s`);
          if (target === child)
            isIntersecting
              ? target.classList.add("animate")
              : target.classList.remove("animate");
        })
      );
    };
  }
}
const t1 = performance.now();
console.log((t1 - t0).toFixed(2));
export default handleAnimateOnScroll;
