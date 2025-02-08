import React, { useState, useRef } from 'react';

interface NoButtonProps {
  messages: string[];
}

const NoButton: React.FC<NoButtonProps> = ({ messages }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (buttonRef.current) {
      const x = Math.random() * (window.innerWidth - 200);
      const y = Math.random() * (window.innerHeight - 100);
      
      buttonRef.current.style.position = 'fixed';
      buttonRef.current.style.left = `${x}px`;
      buttonRef.current.style.top = `${y}px`;
      
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={moveButton}
      className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold transition-all z-20 text-sm sm:text-base"
    >
      {messages[messageIndex]}
    </button>
  );
};

export default NoButton