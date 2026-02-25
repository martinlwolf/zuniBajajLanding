import React from 'react';

const ServiceForm: React.FC = () => {
  return (
    <form className="bg-white/95 rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-12 flex flex-col gap-4 xs:gap-5 sm:gap-6 w-[90vw] xs:w-[270px] sm:w-[320px] md:w-[420px] lg:w-[520px] max-w-full">
      <h2 className="text-2xl xs:text-2xl sm:text-3xl font-black text-center mb-2 xs:mb-3 sm:mb-4 text-[#003366] tracking-wide">SOLICITAR TURNO</h2>
      <input className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition" type="text" placeholder="Nombre y Apellido" required />
      <input className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition" type="tel" placeholder="Teléfono" required />
      <input className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition" type="text" placeholder="DNI" required />
      <input className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition" type="text" placeholder="Localidad" required />
      <input className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition" type="text" placeholder="Modelo de la moto" required />
      <button type="submit" className="bg-[#003366] hover:bg-[#0055a5] text-white text-lg xs:text-xl font-bold py-3 xs:py-4 rounded-lg mt-2 xs:mt-4 transition">CONFIRMAR TURNO</button>
    </form>
  );
};

export default ServiceForm;
