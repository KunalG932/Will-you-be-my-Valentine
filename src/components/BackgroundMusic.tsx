import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const defaultMusicRef = useRef<HTMLAudioElement>(null);
  const romanticMusicRef = useRef<HTMLAudioElement>(null);
  const [isYesClicked, setIsYesClicked] = useState(false);

  useEffect(() => {
    // Start playing default music when component mounts
    if (defaultMusicRef.current) {
      defaultMusicRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleYesClick = () => {
    setIsYesClicked(true);
    if (defaultMusicRef.current) {
      defaultMusicRef.current.pause();
    }
    if (romanticMusicRef.current) {
      romanticMusicRef.current.play().catch(error => {
        console.log("Playback prevented:", error);
      });
    }
  };

  return (
    <div>
      <audio
        ref={defaultMusicRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3?filename=relaxing-mountains-rivers-142569.mp3"
      />
      <audio
        ref={romanticMusicRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=sweet-love-168340.mp3"
      />
      <button 
        onClick={handleYesClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Yes
      </button>
    </div>
  );
};

export default BackgroundMusic;
