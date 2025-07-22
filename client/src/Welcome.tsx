// client/src/Welcome.tsx
import React from 'react';

interface WelcomeProps {
  message: string;
}

const Welcome: React.FC<WelcomeProps> = ({ message }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-blue-600">{message}</h1>
    </div>
  );
};

export default Welcome;