import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.js";
import Sign from "./components/SignUp.js";
import Data from "./components/fetchingUserData.js";
import Form from "./pages/AddMemory.js"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/data" element={<Data />} />
          <Route path="/form" element={<Form />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
