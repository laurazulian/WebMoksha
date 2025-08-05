function Portada({ onEnter }) {
  return (
    <div className="min-h-screen bg-[url('/Foto1.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6">
      <div className="bg-black/60 p-8 rounded-xl max-w-xl w-full">
        <img
          src="/Recurso1.svg"
          alt="Logo Moksha"
          className="w-40 h-auto mx-auto rounded-xl shadow-lg bg-white/80 p-2 border-2 border-beige mb-6"
        />

        <h1 className="text-3xl font-amiri mb-4">Bienvenidos a Moksha</h1>
        <p className="text-latte mb-6 italic">Una taza que te libera</p>

        <div className="flex flex-col gap-4">
          {/* Idiomas */}
            <button
                onClick={() => onEnter("es")}
                className="bg-white text-oliva font-semibold px-6 py-3 rounded-full hover:bg-arena transition"
                >
                Entrar en Español
                </button>

                <button
                onClick={() => onEnter("en")}
                className="bg-white text-oliva font-semibold px-6 py-3 rounded-full hover:bg-arena transition"
                >
                Enter in English
        </button>


          {/* Mapa y contacto */}
          <div className="mt-6 text-sm text-latte">
            <p>Mendoza, Argentina</p>
            <a
              href="https://wa.me/5492610000000"
              className="text-[#25D366] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +54 9 261 0000000
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full h-72 mt-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Ubicación Moksha"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.716752047106!2d-68.84505958480499!3d-32.88945868094154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09c39fbdc0a3%3A0xfcc6d02d5c2851fa!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1653680509112!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Portada;
