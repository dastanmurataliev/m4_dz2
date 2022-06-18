import './App.css';
// import  {MainPage}  from './pages/mainPage/MainPage';
// import UsersPage from './pages/usersPage/UsersPage';

import BlogPage from './pages/blogPages/BlogPage';
import BigBlogPage from './pages/blogPages/BigBlogPage';


function App() {
  return(
    <div>
      <BlogPage category = "VIP-client" money = "rich"/>
      <BigBlogPage text = "Кроссбраузерная и семантическая вёрстки." number = "0554505605" />
    </div>
  )
}

export default App;

