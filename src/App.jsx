import Login from './login';
import Signup from './signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
