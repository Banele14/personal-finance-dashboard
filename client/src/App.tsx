// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (username: string, password: string) => {
    // Simulate login (replace with API call later)
    if (username === 'user' && password === 'pass') {
      setIsAuthenticated(true);
    }
  };

  const handleRegister = (email: string, password: string) => {
    // Simulate registration (replace with API call later)
    console.log('Registered:', { email, password });
    setIsAuthenticated(true); // For now, auto-login after register
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <LandingPage onLoginClick={handleLogin} onRegisterClick={handleRegister} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;