import {Hero, Header, Footer, DealingWithObjections, ContentArticles, Recomendations} from "../components/"
import {Helmet} from "react-helmet";

const BlogPage: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Как применить эмпатию</title>
          <meta
            name="description"
            content="Как развить эмоциональный интелект и способы его примение в посвдневной жизни."
          />
        </Helmet>
        <Header />
        <Hero />
        <DealingWithObjections />
        <ContentArticles />
        <Recomendations />
        <Footer />
      </>
    )
  }
  
  export default BlogPage