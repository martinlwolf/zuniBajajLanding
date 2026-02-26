import React, { useState, useEffect } from 'react';

const serviceImages = [
  '/images/service/Bajaj-Argentina-iniciativa-service-gratis-portada.webp',
  '/images/service/Bajaj-Argentina-iniciativa-service-gratis.webp',
  '/images/service/Bajaj-Argentina-iniciativa-service.webp',
  '/images/service/servicio-tecnico-bajaj-barcelona-3.webp',
  '/images/service/WhatsApp-Image-2022-03-28-at-10.52.10-AM-5.webp',
];

const ServiceSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % serviceImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {serviceImages.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="service"
          className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          draggable={false}
        />
      ))}
      <div className="absolute inset-0 bg-black/45 z-20" />
    </div>
  );
};

export default ServiceSlideshow;
