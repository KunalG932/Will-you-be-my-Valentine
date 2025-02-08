import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import RosePetals from '../components/RosePetals';
import MusicPlayer from '../components/MusicPlayer';
import { Heart, GiftIcon, SparklesIcon } from 'lucide-react';

const YesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      <RosePetals />
      <MusicPlayer />
      
      <div className="z-10 text-center p-6 sm:p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-lg mx-auto border border-pink-100">
        <div className="relative">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce" />
          <SparklesIcon className="absolute top-0 right-1/4 w-6 h-6 text-yellow-400 animate-spin-slow" />
          <SparklesIcon className="absolute top-0 left-1/4 w-6 h-6 text-yellow-400 animate-spin-slow" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
          Yaaay! Thank You! 🎉
        </h1>
        
        <div className="relative w-full h-48 sm:h-64 mb-6 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-red-200 animate-pulse"></div>
          <img 
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
            alt="Celebration" 
            className="w-full h-full object-cover rounded-2xl shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            You've made me the happiest person in the world! 💖
          </p>
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-pink-500 font-semibold mb-4">
            <GiftIcon className="w-6 h-6" />
            <p>Get ready for the most amazing Valentine's Day ever! 🌹</p>
          </div>
          <p className="text-base text-gray-500 italic">
            Valentine's Day 2025 will be magical! ✨
          </p>
        </div>
      </div>

      <footer className="absolute bottom-4 text-gray-600 text-sm sm:text-base">
        Created with love by Kunal
      </footer>
    </div>
  );
};

export default YesPage;