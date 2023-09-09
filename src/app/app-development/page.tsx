import ArticleNavbar from "../Components/ArticleNavbar/ArticleNavbar";
import ArticleOverview from "../Components/ArticleOverview/ArticleOverview";
import appDevelopmentData from "./page.data";

function AppDevelopment() {
  const { links, overviewContent, overviewImage } = appDevelopmentData;
  return (
    <section>
      <ArticleNavbar links={appDevelopmentData.links} />
      <ArticleOverview
        content={overviewContent}
        image={overviewImage}
        id={links[0]}
      />
    </section>
  );
}
export default AppDevelopment;
