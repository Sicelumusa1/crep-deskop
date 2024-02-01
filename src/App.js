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
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>CREP</h2>
        { <p>Community Rating and Empowerment Platform</p> }
      </header>
        <Router>
            <NavBar />
             <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/my-councilor" element={<MyCouncilor />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
           </Routes>
        </Router>
      <footer className="App-footer">
        <p>Trasparency is Key to African Economic Transformation and Poverty Alleviation</p>
      </footer>
    </div>
  );
}

export default App;
