'use client';

import React from 'react';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-left md:text-center">
          <h2 className="text-[#2D2D5F] font-bold mb-8">
            <div className="text-[48px] md:text-6xl leading-[1.1] mb-1">¡Empieza hoy</div>
            <div className="text-[48px] md:text-6xl leading-[1.1] mb-1">
              <span className="text-[#FF5C00] text-[48px]">sin costo</span>
              <span className="text-[48px]"> y</span>
            </div>
            <div className="text-[48px] md:text-6xl leading-[1.1] mb-1">
              <span className="text-[48px]">haz </span>
              <span className="text-[#FF5C00] text-[48px]">crecer</span>
              <span className="text-[48px]"> tu</span>
            </div>
            <div className="text-[48px] md:text-6xl leading-[1.1]">negocio!</div>
          </h2>

          <p className="text-[#4A4A68] text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Prueba Conecta gratis por 30 días y simplifica tus entregas.
          </p>

          <button className="bg-[#2D2D5F] text-white text-lg md:text-xl rounded-full py-4 px-8 w-full max-w-lg mx-auto flex items-center justify-center mb-4 hover:bg-[#373777] transition-colors duration-300">
            <span>¡Prueba</span>
            <div className="mx-3 relative">
              <Image
                src="/images/conecta-logo-white.png"
                alt="Conecta"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <span>gratis ahora!</span>
          </button>

          <p className="text-[#4A4A68] text-base text-center">
            Oferta válida por tiempo limitado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 