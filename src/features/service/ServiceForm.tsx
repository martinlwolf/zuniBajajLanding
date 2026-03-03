
import React, { useState } from 'react';
import { postContacto } from '../../services/service';

type ServiceFormProps = {
  title?: string;
  origen?: 'financiacion' | 'service-oficial' | string;
  compact?: boolean;
  buttonText?: string;
};

const ServiceForm: React.FC<ServiceFormProps> = ({ title = 'SOLICITAR TURNO', origen = 'service-oficial', compact = false, buttonText = 'CONFIRMAR TURNO' }) => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dni, setDni] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [modelo, setModelo] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const trimmed = nombreCompleto.trim();
      const parts = trimmed.split(/\s+/).filter(Boolean);
      const nombre = parts[0] ?? '';
      const apellido = parts.slice(1).join(' ');

      await postContacto({
        nombre,
        apellido,
        dni,
        telefono,
        localidad,
        modelo,
        origen,
      });
      setSuccess(true);
      setNombreCompleto('');
      setTelefono('');
      setDni('');
      setLocalidad('');
      setModelo('');
    } catch (err) {
      setError('Hubo un error al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  const sizeClasses = compact
    ? 'w-[90vw] xs:w-[240px] sm:w-[300px] md:w-[380px] lg:w-[460px]'
    : 'w-[90vw] xs:w-[270px] sm:w-[320px] md:w-[420px] lg:w-[520px]';

  const titleClasses = compact
    ? 'text-xl xs:text-xl sm:text-2xl font-black text-center mb-2 xs:mb-3 sm:mb-4 text-[#003366] tracking-wide'
    : 'text-2xl xs:text-2xl sm:text-3xl font-black text-center mb-2 xs:mb-3 sm:mb-4 text-[#003366] tracking-wide';

  const buttonSize = compact ? 'text-base xs:text-lg' : 'text-lg xs:text-xl';

  return (
    <form onSubmit={handleSubmit} className={`bg-white/95 rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-12 flex flex-col gap-4 xs:gap-5 sm:gap-6 ${sizeClasses} max-w-full`}>
      <h2 className={titleClasses}>{title}</h2>
      <input
        className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
        type="text"
        placeholder="Nombre y Apellido"
        value={nombreCompleto}
        onChange={e => setNombreCompleto(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={e => setTelefono(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
        type="text"
        placeholder="DNI"
        value={dni}
        onChange={e => setDni(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
        type="text"
        placeholder="Localidad"
        value={localidad}
        onChange={e => setLocalidad(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 xs:px-4 xs:py-3 sm:px-5 sm:py-4 text-base xs:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
        type="text"
        placeholder="Modelo de la moto"
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        required
      />
      <button type="submit" className={`bg-[#003366] hover:bg-[#0055a5] text-white ${buttonSize} font-bold py-3 xs:py-4 rounded-lg mt-2 xs:mt-4 transition`} disabled={loading}>
        {loading ? 'Enviando...' : buttonText}
      </button>
      <div className="h-8 flex items-center justify-center mt-2">
        {success && <div className="text-green-600 font-semibold text-center">¡Formulario enviado correctamente!</div>}
        {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
      </div>
    </form>
  );
};

export default ServiceForm;
