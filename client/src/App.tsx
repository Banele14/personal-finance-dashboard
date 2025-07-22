// client/src/App.tsx
import React from 'react';
import Welcome from './Welcome';

const App: React.FC = () => {
  return (
    <div>
      <Welcome message="Welcome to Personal Finance Dashboard (Setup)" />
    </div>
  );
};

export default App;