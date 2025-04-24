// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Intro from './components/Intro';
import Destinations from './components/Destinations';
import Profile from './components/Profile'; // Profile component
import Hotels from './components/Hotels';
import Flights from './components/Flights';
import Final from './components/Final';

const App = () => {
  const [userData, setUserData] = useState(null); // Store user data here

  const handleLogin = (user) => {
    setUserData(user); // Save user data to state
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/profile" element={<Profile userData={userData} />} /> {/* Pass userData to Profile */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
};

export default App;
