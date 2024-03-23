import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import Profile from './component/Profile'
import Product from './component/Product';
import ProductAdd from './component/ProductAdd';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/add" element={<ProductAdd/>}/>
        </Routes>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
