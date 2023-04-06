import {Hero, DealingWithObjections, ContentArticles, Recomendations} from "../components/"
import {Helmet} from "react-helmet";

const BlogPage: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Как применить эмпатию</title>
          <meta
            name="description"
            content="Как развить эмоциональный интелект и способы его примение в посвдневной жизни.ы"
          />
        </Helmet>
        <Hero />
        <DealingWithObjections />
        <ContentArticles />
        <Recomendations />
      </>
    )
  }
  
  export default BlogPage