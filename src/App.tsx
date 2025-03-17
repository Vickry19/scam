import React, { useState, useEffect } from 'react';
import { Heart, Music, Music as MusicOff } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/audio/music.mp3'));

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const photos = [
    {
      url: '/image/1.jpg',
      message: 'Setiap detik bersamamu adalah hadiah terindah dalam hidupku',
    },
    {
      url: '/image/2.jpg',
      message: 'Senyummu adalah cahaya yang menerangi setiap hariku',
    },
    {
      url: '/image/3.jpg',
      message: 'Bersamamu, setiap momen menjadi kenangan yang tak terlupakan',
    },
    {
      url: '/image/4.jpg',
      message: 'Di hari spesialmu ini, aku berharap dapat membuat hatimu sebahagia kamu membahagiakan aku',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <Heart className="w-16 h-16 text-pink-400 mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Selamat Ulang Tahun,
            <br />
            Sayangku
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Hari ini adalah hari spesial untuk orang yang paling spesial di hatiku
          </p>
          <button
            onClick={toggleMusic}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300"
          >
            {isPlaying ? <MusicOff className="w-6 h-6" /> : <Music className="w-6 h-6" />}
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <p className="text-white text-sm mb-2">Scroll ke bawah</p>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
            <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-20 px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`max-w-4xl mx-auto mb-32 opacity-0 translate-y-10 animate-reveal`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={photo.url}
                alt={`Romantic moment ${index + 1}`}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white text-xl md:text-2xl p-8 text-center w-full">
                  {photo.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;