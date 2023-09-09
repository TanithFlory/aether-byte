import ArticleNavbar from "../Components/ArticleNavbar/ArticleNavbar";
import ArticleOverview from "../Components/ArticleOverview/ArticleOverview";
import Carousel from "../Components/Carousel/Carousel";
import webDevelopmentData from "./page.data";

function WebDevelopment() {
  const { links, overviewContent, overviewImage } = webDevelopmentData;
  return (
    <section>
      <ArticleNavbar links={links} />
      <ArticleOverview
        content={overviewContent}
        image={overviewImage}
        id={links[0]}
      />
      <Carousel/>
    </section>
  );
}

export default WebDevelopment;
