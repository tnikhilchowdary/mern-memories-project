import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.js";
import Sign from "./components/SignUp.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
