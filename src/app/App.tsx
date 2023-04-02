import { lazy } from 'react'
import '../styles/App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Link from 'react-router-dom';
// <Link to="/quiz">Пройти опрос</Link>

const HomePage: React.FC = lazy(() => import('../pages/HomePage'));
const QuizPage: React.FC = lazy(() => import('../pages/QuizPage'));
const BlogPage: React.FC = lazy(() => import('../pages/BlogPage'));

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/blog">
          <BlogPage/>
        </Route>
        <Route exact path="/quiz">
          <QuizPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
