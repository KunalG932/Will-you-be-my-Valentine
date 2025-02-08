import React, { useEffect } from 'react';
import { Music } from 'lucide-react';

interface MusicPlayerProps {
  showMessage?: boolean;
}

const SONG_URL = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/christmas_songs_music/sets/english-top-hits-of-all-time&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";

const MusicPlayer: React.FC<MusicPlayerProps> = () => {
  useEffect(() => {
    const createMusicNote = () => {
      const note = document.createElement('div');
      note.innerHTML = '♪';
      note.className = 'absolute text-pink-500 text-2xl animate-float opacity-0';
      note.style.left = Math.random() * (window.innerWidth - 50) + 'px';
      note.style.bottom = '0';
      document.body.appendChild(note);

      setTimeout(() => {
        document.body.removeChild(note);
      }, 4000);
    };

    const interval = setInterval(createMusicNote, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out forwards;
        }
      `}</style>
      <div className="fixed bottom-4 right-4 text-pink-500">
        <Music className="w-6 h-6 animate-pulse" />
      </div>
      <div className="hidden">
        <iframe
          width="100%"
          height="450"
          allow="autoplay"
          src={SONG_URL}
        />
      </div>
    </>
  );
};

export default MusicPlayer;