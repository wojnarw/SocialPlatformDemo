import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './layout/MainPage';
import TopPosts from './layout/TopPosts';
import NewPost from './layout/NewPost';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/top" element={<TopPosts />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
