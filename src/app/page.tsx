import Faq from "./Components/Faq/Faq";
import Features from "./Components/Features/Features";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Header from "./Components/Header/Header";
import HowWeWork from "./Components/HowWeWork/HowWeWork";
import OfficeLocation from "./Components/OfficeLocation/OfficeLocation";
import Services from "./Components/Services/Services";
import TestimonialsCarousel from "./Components/Testimonials/TestimonialsCarousel";
export default function Home() {
  return (
    <>
      <Header />
      <HowWeWork />
      <Features />
      <TestimonialsCarousel />
      <Faq />
      <Services />
      <GetInTouch/>
      <OfficeLocation/>
    </>
  );
}
