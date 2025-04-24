import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/register.css'; // Import the new Register page CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Registration:", { username, email, password }); // Log form data

    try {
        await axios.post('http://localhost:5000/api/users/register', {
            username,
            email,
            password,
        });
        console.log("Registration successful");
        navigate('/login');
    } catch (error) {
        console.error('Registration failed:', error);
        alert("Registration failed: " + error.response.data); // Display error message
    }
};

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
            required 
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
