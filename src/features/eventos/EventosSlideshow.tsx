import React, { useEffect, useState } from 'react';

const images = [
  '/images/events/bajaj-verano-2025.webp',
  '/images/events/BAJAJ_241214_065-1-scaled.webp',
  '/images/events/bike-mk-8.webp',
  '/images/events/Image 2 - Bajaj Auto Drives Sustainable Transportation Solutions At IBET Expo 2024.webp',
];

const FADE_DURATION = 1000; // ms
const SLIDE_DURATION = 6000; // ms


const EventosSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Evento Bajaj"
          className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          draggable={false}
        />
      ))}
      <div className="absolute inset-0 bg-black/45 z-20" />
    </div>
  );
};

export default EventosSlideshow;
