import React, { useState } from 'react';
import './LoginPage.css';
import { setSessionData } from './session';
import Footer from './Footer';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
    <>
      <div className="login-container">
        <div className="login-card">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login to Your Account</h2>

            <div className="input-group">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className={username ? 'filled' : ''}>Username</label>
            </div>

            <div className="input-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className={password ? 'filled' : ''}>Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="social-login">
              <p>or sign in with</p>
              <div className="social-buttons">
                <button className="google-btn">🔵 Google</button>
                <button className="github-btn">⚫ GitHub</button>
              </div>
            </div>
          </form>
        </div>

        <div className="chatbot">
          <div className="chatbot-header">
            <div className="robot-icon">🤖</div>
            Need Help?
          </div>
          <div className="chatbot-body">
            <p>Hey! I'm your assistant. Having trouble logging in?</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;
