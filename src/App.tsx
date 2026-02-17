
function App() {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] text-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/bajaj_logo.webp"
            alt="Bajaj Logo"
            className="w-[640px] max-w-[98vw] h-auto mb-12 drop-shadow-2xl mx-auto pr-8"
            style={{ objectFit: 'contain', display: 'block' }}
          />
          <p className="font-montserrat font-normal text-3xl md:text-5xl tracking-wide text-center mt-2 md:mt-6">
            Próximamente
          </p>
        </div>
      </div>
    </div>
  );
}

export default App
