import ArticleNavbar from "../Components/ArticleNavbar/ArticleNavbar";
import ArticleOverview from "../Components/ArticleOverview/ArticleOverview";
import Carousel from "../Components/Carousel/Carousel";
import OpacityCarousel from "../Components/OpacityCarousel/OpacityCarousel";
import QnA from "../Components/QnA/QnA";
import WorkStats from "../Components/WorkStats/WorkStats";
import webDevelopmentData from "./page.data";

function WebDevelopment() {
  const { links, overviewContent, overviewImage } = webDevelopmentData;
  return (
    <section>
      <OpacityCarousel />
      <ArticleNavbar links={links} />
      <ArticleOverview
        content={overviewContent}
        image={overviewImage}
        id={links[0]}
      />
      <Carousel />
      <WorkStats
        title="Powered by a global team of 221,000+ diverse and passionate people across 60 countries, we deliver smarter, better ways for all our stakeholders to benefit from technology."
        stats={[
          { count: "210+", countName: "Delivery Centers" },
          { count: "210+", countName: "Delivery Centers" },
          { count: "210+", countName: "Delivery Centers" },
          { count: "210+", countName: "Delivery Centers" },
          { count: "210+", countName: "Delivery Centers" },
        ]}
      />
      <QnA
        qnaCards={[
          {
            question: "What is digital workplace?",
            answer:
              "Gartner defines Digital Workplace as one that enables new, more effective ways of working; raises employee engagement and agility; and exploits consumer-oriented styles and technologies.",
          },
          {
            question: "What is digital workplace?",
            answer:
              "Gartner defines Digital Workplace as one that enables new, more effective ways of working; raises employee engagement and agility; and exploits consumer-oriented styles and technologies.",
          },
          {
            question: "What is digital workplace?",
            answer:
              "Gartner defines Digital Workplace as one that enables new, more effective ways of working; raises employee engagement and agility; and exploits consumer-oriented styles and technologies.",
          },
          {
            question: "What is digital workplace?",
            answer:
              "Gartner defines Digital Workplace as one that enables new, more effective ways of working; raises employee engagement and agility; and exploits consumer-oriented styles and technologies.",
          },
          {
            question: "What is digital workplace?",
            answer:
              "Gartner defines Digital Workplace as one that enables new, more effective ways of working; raises employee engagement and agility; and exploits consumer-oriented styles and technologies.",
          },
        ]}
      />
    </section>
  );
}

export default WebDevelopment;
