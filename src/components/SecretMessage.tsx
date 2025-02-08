import React, { useState, useEffect } from 'react';
import { MessageCircleHeart as MessageHeart, Heart, Stars } from 'lucide-react';

const LOVE_MESSAGES = [
  "My heart skips a beat every time I see you ❤️",
  "You're the missing piece to my puzzle 💝",
  "With you, every day feels like Valentine's Day ✨",
  "You make my world complete 🌟",
  "You're my favorite love story 💖",
  "Together forever, that's my dream with you ❤️",
  "You had me at hello 💘",
  "My love for you grows stronger each day ✨",
  "You're the best thing that's ever happened to me 💝",
  "Life is beautiful because of you ❤️"
];

const SecretMessage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (isRevealed) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % LOVE_MESSAGES.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isRevealed]);

  return (
    <div className="absolute top-4 left-4 z-50">
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group relative"
      >
        <MessageHeart className="w-6 h-6 text-pink-500 group-hover:text-pink-600" />
        <div className="absolute -top-1 -right-1">
          <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
        </div>
      </button>

      {isRevealed && (
        <div className="absolute top-full left-0 mt-4 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl w-80 transform transition-all duration-500 ease-in-out">
          <div className="relative">
            <Stars className="absolute -top-8 -left-4 w-6 h-6 text-pink-400 animate-pulse" />
            <Stars className="absolute -top-6 -right-2 w-4 h-4 text-pink-300 animate-pulse" />
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-pink-600 font-cursive">My Valentine</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 text-base leading-relaxed font-cursive min-h-[100px] transition-all duration-300 ease-in-out">
                {LOVE_MESSAGES[currentMessage]}
              </p>
              <div className="text-center mt-4">
                <p className="text-pink-500 font-cursive">Forever Yours ❤️</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @font-face {
          font-family: 'Dancing Script';
          src: url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        }
        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </div>
  );
};

export default SecretMessage;