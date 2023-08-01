import Faq from "./Components/Faq/Faq";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import HowWeWork from "./Components/HowWeWork/HowWeWork";
import TestimonialsCarousel from "./Components/Testimonials/TestimonialsCarousel";
export default function Home() {
  return (
    <>
      <Header />
      <HowWeWork />
      <Features />
      <TestimonialsCarousel />
      <Faq />
    </>
  );
}
