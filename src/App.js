// import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './layout/MainPage';
import TopPosts from './layout/TopPosts';
import PageHeader from './components/PageHeader';
import classes from './styles/Layout.module.css';
import SinglePost from './layout/SinglePost';

function App() {
  return (
    <div className={classes.main}>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/top" element={<TopPosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
