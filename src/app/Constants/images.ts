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
import contactLinesBg from "../assets/contact-lines.svg";
import overviewImg from "../assets/Overview_new.webp";
import banking1 from "../assets/banking1.webp";
import banking2 from "../assets/banking2.webp";
import banking3 from "../assets/banking3.webp";
import banking4 from "../assets/banking4.webp";
import banking5 from "../assets/banking5.webp";
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
  contactLinesBg,
  overviewImg,
  banking1,
  banking2,
  banking3,
  banking4,
  banking5,
} as const;

export default images;
