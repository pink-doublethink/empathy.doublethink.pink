import {Hero, Header, Footer, Gallery, DealingWithObjections, ContentArticles, Recomendations} from "../components/"
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
        {/* <Gallery 
          photos={[
            {id: 1, src: './Ex1.jpg', preview: './Ex1.jpg', desc: 'Бяка 1'},
            {id: 2, src: './Ex2.jpg', preview: './Ex2.jpg', desc: 'Бяка 2'},
            {id: 3, src: './Ex3.jpg', preview: './Ex3.jpg', desc: 'Бяка 3'},
            {id: 4, src: './Ex4.jpg', preview: './Ex4.jpg', desc: 'Бяка 4'},
            {id: 5, src: './Ex1.jpg', preview: './Ex1.jpg', desc: 'Бяка 5'},
            {id: 6, src: './Ex5.png', preview: './Ex5.png', desc: 'Бяка 6'},
            {id: 7, src: './Ex6.jpg', preview: './Ex6.jpg', desc: 'Бяка 7'},
          ]}
        /> */}
        <Hero />
        <DealingWithObjections />
        <ContentArticles />
        <Recomendations />
        <Footer />
      </>
    )
  }
  
  export default BlogPage