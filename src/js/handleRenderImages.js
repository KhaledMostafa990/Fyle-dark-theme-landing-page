// // Image
import logo from "../images/logo.svg";
import hero from "../images/illustration-intro.png";
import mainBackground from "../images/bg-curvy-mobile.svg";
import features1 from "../images/icon-access-anywhere.svg";
import features2 from "../images/icon-security.svg";
import features3 from "../images/icon-collaboration.svg";
import features4 from "../images/icon-any-file.svg";
import processImg from "../images/illustration-stay-productive.png";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

function handleRenderImages() {
  document.getElementById("logo").src = logo;
  document.querySelector(".hero__img").src = hero;
  document.querySelector(".hero__bg-curvy").src = mainBackground;
  document.querySelector(".features__feature__icon--anywhere").src = features1;
  document.querySelector(".features__feature__icon--security").src = features2;
  document.querySelector(".features__feature__icon--collaboration").src =
    features3;
  document.querySelector(".features__feature__icon--anytype").src = features4;
  document.querySelector(".process__img").src = processImg;
  document.querySelector(".team__card__avatar--1").src = profile1;
  document.querySelector(".team__card__avatar--2").src = profile2;
  document.querySelector(".team__card__avatar--3").src = profile3;
}
export default handleRenderImages;
