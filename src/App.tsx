import React, { useState } from 'react';
import { Heart, GiftIcon, SparklesIcon } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import NoButton from './components/NoButton';
import MusicPlayer from './components/MusicPlayer';
import RosePetals from './components/RosePetals';
import SecretMessage from './components/SecretMessage';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  
  const handleYesClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      navigate('/yes');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      <RosePetals />
      <MusicPlayer showMessage={showMessage} />
      <SecretMessage />
      
      <div className="z-10 text-center p-6 sm:p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-lg mx-auto border border-pink-100">
        <div className="mb-6">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-red-200 rounded-full animate-pulse group-hover:scale-105 transition-transform duration-300"></div>
            <img 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif" 
              alt="Valentine Bear" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
            />
            <div className="absolute -top-2 -right-2 z-20">
              <SparklesIcon className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mb-4 leading-tight">
            Will you be my Valentine? 💝
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            I promise to make you smile every single day! 🌹
          </p>
          <p className="text-sm text-pink-500 italic mb-8">
            Let's make this Valentine's Day 2025 unforgettable together! ✨
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleYesClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold transform hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg text-lg"
          >
            <Heart className="w-6 h-6" />
            Yes, I'd love to! 💖
          </button>
          
          <NoButton messages={[
            "Are you sure? 🥺",
            "Think again! 🤔",
            "Pretty please? 💕",
            "Don't break my heart! 💔",
            "One more chance? 🙏",
            "I'll be the best Valentine! 🌹",
            "You're making me sad! 😢",
          ]} />
        </div>
      </div>

      {showMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl animate-bounce max-w-sm w-full text-center">
            <GiftIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Yaaay! Thank you! 🎉
            </h2>
          </div>
        </div>
      )}

      <footer className="absolute bottom-4 text-gray-600 text-sm sm:text-base">
        Created with love by Kunal
      </footer>
    </div>
  );
}

export default App;