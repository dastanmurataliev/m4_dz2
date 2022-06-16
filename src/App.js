import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  const product = {
    name: "GeekTech",
    address: "BC Victory",
    media: "Instagram, TikTok"
}
  
  return (
      <div className="container">
      App js
      <UsersPage/>
      <AboutUs text="There You can show information about our company" product={product} / >
    </div>
  );
}

export default App;
