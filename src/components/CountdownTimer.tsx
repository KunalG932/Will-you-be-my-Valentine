import React, { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-02-14T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-2xl shadow-lg mb-6 border border-pink-100">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
        <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
          Valentine's Day 2024
        </h3>
        <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-3 rounded-xl shadow-sm border-2 border-pink-100 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 font-medium">Days</div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border-2 border-pink-100 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 font-medium">Hours</div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border-2 border-pink-100 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 font-medium">Minutes</div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border-2 border-pink-100 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;