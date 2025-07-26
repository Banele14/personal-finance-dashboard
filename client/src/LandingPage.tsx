// client/src/LandingPage.tsx
import React, { useState } from 'react';

interface LandingPageProps {
  onLoginClick: (username: string, password: string) => void;
  onRegisterClick: (email: string, password: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick, onRegisterClick }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUsername || !loginPassword) {
      setError('Please fill in both username and password.');
      return;
    }
    setError(null);
    onLoginClick(loginUsername, loginPassword);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerEmail || !registerPassword) {
      setError('Please fill in both email and password.');
      return;
    }
    setError(null);
    onRegisterClick(registerEmail, registerPassword);
  };

  return (
    <div>
      <nav>
        <h1>Personal Finance Dashboard</h1>
      </nav>
      <div className="content">
        <h2>Manage Your Finances</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <form onSubmit={handleLogin} className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              placeholder="Username"
            />
            <label>Password:</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
          <form onSubmit={handleRegister} className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
            />
            <label>Password:</label>
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className="register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;