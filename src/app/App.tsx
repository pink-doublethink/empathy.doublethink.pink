import { lazy } from 'react'
import styles from "./app.module.css"
import '../styles/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Link from 'react-router-dom';
// <Link to="/quiz">Пройти опрос</Link>
import HomePage from '../pages/HomePage';
import QuizPage from '../pages/QuizPage';
import BlogPage from '../pages/BlogPage';
import SinglePostPage from '../pages/SinglePostPage';

// const HomePage: React.FC = lazy(() => import('../pages/HomePage'));
// const QuizPage = lazy(() => import('../pages/QuizPage'));
// const BlogPage = lazy(() => import('../pages/BlogPage'));

function App() {

  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/blog">
            <BlogPage/>
          </Route>
          <Route exact path="/blog/post-1">
            <SinglePostPage/>
          </Route>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
