import desktopImage from "../assets/desktop-image.svg";
import numberBg from "../assets/number-bg.svg";
import arrowRight from "../assets/arrow-right.svg";
import featureIcon0 from "../assets/FeatureIcon (0).svg";
import featureIcon1 from "../assets/FeatureIcon (1).svg";
import featureIcon2 from "../assets/FeatureIcon (2).svg";
import featureIcon3 from "../assets/FeatureIcon (3).svg";
import featureIcon4 from "../assets/FeatureIcon (4).svg";
import featureIcon5 from "../assets/FeatureIcon (5).svg";
import getInTouch from "../assets/get-in-touch.webp";
import { StaticImageData } from "next/image";
interface Image {
  [key: string]: StaticImageData;
}

const images: Image = {
  desktopImage,
  numberBg,
  arrowRight,
  featureIcon0,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  featureIcon4,
  featureIcon5,
  getInTouch,
};

export default images;
