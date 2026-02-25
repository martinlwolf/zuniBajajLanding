
import React from 'react';
import ServiceSlideshow from './ServiceSlideshow';
import ServiceForm from './ServiceForm';
import './service.css';

const ServicePage: React.FC = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden md:overflow-hidden">
      <ServiceSlideshow />
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full h-full px-2 xs:px-4 md:px-20 pt-24 md:pt-0 pb-4 md:py-0 overflow-y-auto md:overflow-visible" style={{maxHeight: '100vh'}}>
        {/* Arriba en mobile: Textos grandes y logo */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:max-w-[50vw] mb-8 md:mb-0">
          <h1 className="text-[2.2rem] xs:text-[2.7rem] sm:text-[3rem] md:text-[3.5rem] font-black italic text-white drop-shadow-lg leading-none mb-4 md:mb-6 text-center md:text-left">
            <span className="text-[#00aaff] block italic">SERVICE OFICIAL</span>
          </h1>
          <img src="/images/bajaj_logo.webp" alt="Bajaj Logo" className="w-44 xs:w-56 sm:w-64 md:w-96 mb-6 md:mb-10 drop-shadow-xl" />
          <p className="text-white text-lg xs:text-xl sm:text-2xl md:text-2xl font-semibold mt-2 drop-shadow-lg text-center md:text-left">
            Tu Bajaj en manos de expertos.<br />Repuestos 100% Originales.
          </p>
        </div>
        {/* Abajo en mobile: Formulario grande */}
        <div className="flex flex-col justify-center items-center md:items-end w-full max-w-[90vw] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[600px]">
          <ServiceForm />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
