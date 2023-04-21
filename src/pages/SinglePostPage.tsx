import {Hero} from "../components/"
import {Helmet} from "react-helmet";

const SinglePostPage: React.FC  = () => {
  return (
    <>
      <Helmet>
          <title>Эмпатия</title>
          <meta
            name="description"
            content="Узнайте, что такое импатия. И почему ее важно развивать для нашей жизни."
          />
      </Helmet>
      <Hero />
    </>
  )
}

export default SinglePostPage