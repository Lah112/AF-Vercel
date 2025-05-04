import React, { useState } from 'react';
import { setSessionData } from './session';
import './LoginPage.css';  // Make sure this is the correct path

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      setSessionData('user', { username });
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container"> {/* Added the login-container class here */}
      <form onSubmit={handleLogin} className="login-form"> {/* Added the login-form class here */}
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
