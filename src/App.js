import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Stories from './pages/Stories';
import MyProfile from  './pages/MyProfile';
import MyCouncilor from './pages/MyCouncilor';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ActivePetitionsCircle from "./components/ActivePetitionsCircle";
import EmailVerification from './components/EmailVerification';
import PetitionsPage from './components/PetitionsPage';
import './App.css';
import { useState } from 'react';


function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showHeaderContent, setShowHeaderContent] = useState(true);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {showHeaderContent && (
            <div className='header-content'>
              <h2>CREP</h2>
              {/* <p>Community Rating and Empowerment Platform</p> */}
            </div>
          )}
          <ActivePetitionsCircle />
          <NavBar isAuthenticated={isAuthenticated} toggleHeaderContent={() => setShowHeaderContent(prev => !prev)} />
        </header>
          
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/report" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-councilor" element={<MyCouncilor />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/signup" element={<Signup  isRegistered={isRegistered}  setIsRegistered={setIsRegistered} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/otp-verification' element={<EmailVerification  isVerified={isVerified} setIsVerified={setIsVerified} />} />
          <Route path='/petition' element={<PetitionsPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
