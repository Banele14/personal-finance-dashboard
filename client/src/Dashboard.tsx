// client/src/Dashboard.tsx
import React from 'react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div>
      <nav style={{ backgroundColor: '#1e40af', padding: '1rem', width: '100%' }}>
        <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
          Personal Finance Dashboard
        </h1>
      </nav>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#1f2937', fontSize: '1.875rem' }}>Welcome to Your Dashboard</h2>
        <p>Manage your finances here!</p>
        <button
          onClick={onLogout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;