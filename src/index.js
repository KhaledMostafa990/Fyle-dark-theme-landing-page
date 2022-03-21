import "./styles/main.scss";

import handleRenderImages from "./js/handleRenderImages";
import handleEmailInput from "./js/form";
import handleAnimateOnScroll from "./js/animations";
function init() {
  handleRenderImages();
  handleEmailInput();
  handleAnimateOnScroll();
}
init();
