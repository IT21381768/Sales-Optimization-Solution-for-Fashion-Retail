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


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
