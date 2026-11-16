import { Route, Routes } from 'react-router';
import './App.css';
import { ThemeProvider } from './components/common/ThemeContext';
import IndividualPostPage from './components/IndividualPostPage';
import ContactPage from './components/contact/ContactPage';
import BlogPostsPage from './components/homepage/BlogPostsPage'
import PostList from './components/postList/PostList';
import CommonLayout from './layouts/commonLayout';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path='/' element={<BlogPostsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts' element={<PostList />}/>
          <Route path='/posts/:post_id' element={<IndividualPostPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
