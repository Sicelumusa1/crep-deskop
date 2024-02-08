import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/Contact';
import MyProfile from  './pages/MyProfile';
import MyCouncilor from './pages/MyCouncilor';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import EmailVerification from './components/EmailVerification';
import './App.css';
import { useState } from 'react';


function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h2>CREP</h2>
        { <p>Community Rating and Empowerment Platform</p> }
      </header>
        <Router>
            <NavBar isAuthenticated={isAuthenticated} />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/my-councilor" element={<MyCouncilor />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/signup" element={<Signup  isRegistered={isRegistered}  setIsRegistered={setIsRegistered} />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path='/otp-verification' element={<EmailVerification  isVerified={isVerified} setIsVerified={setIsVerified} />} />
           </Routes>
        </Router>
      <footer className="App-footer">
        <p>Trasparency is Key to African Economic Transformation and Poverty Alleviation</p>
      </footer>
    </div>
  );
}

export default App;
