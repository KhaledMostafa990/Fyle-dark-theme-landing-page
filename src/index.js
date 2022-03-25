import "./styles/main.scss";

import handleRenderImages from "./js/handleRenderImages";
import handleEmailInput from "./js/form";
import handleAnimateOnScroll from "./js/animations";
function init() {
  document.querySelector("body").style.visibility = "hidden";
  document.getElementById("loader").style.visibility = "visible";
  handleRenderImages();
  handleEmailInput();
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loader").style.visibility = "hidden";
      document.querySelector("body").style.visibility = "visible";
      document.getElementById("loader").style.display = "none";
      handleAnimateOnScroll();
    }, 50);
  });
}
init();
