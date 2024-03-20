import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
