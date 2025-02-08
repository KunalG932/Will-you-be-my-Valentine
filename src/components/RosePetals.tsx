import React from 'react';

const RosePetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-50px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 10}s`,
          }}
        >
          <span className="text-3xl transform rotate-45" role="img" aria-label="rose">
            🌸
          </span>
        </div>
      ))}
    </div>
  );
};

export default RosePetals;