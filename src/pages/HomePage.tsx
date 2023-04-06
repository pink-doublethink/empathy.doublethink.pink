import {Home} from "../components/"
import {Helmet} from "react-helmet";

const HomePage: React.FC = () =>  {
  return (
    <>
      <Helmet>
          <title>Эмпатия</title>
          <meta
            name="description"
            content="Узнайте, что такое импатия. И почему ее важно развивать для нашей жизни."
          />
      </Helmet>
      <Home />
    </>
  )
}

export default HomePage