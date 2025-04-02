'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <section className="px-4 py-8">
      <div className="text-center">
        <h2 className="text-[#2D2D5F] text-[32px] font-bold leading-tight mb-6">
          ¡Empieza hoy
          <br />
          <span className="text-[#FF5C00]">sin costo</span> y
          <br />
          haz <span className="text-[#FF5C00]">crecer</span> tu
          <br />
          negocio!
        </h2>
        <p className="text-[#4A4A68] text-sm mb-6">
          Prueba Conecta gratis por 30 días y simplifica tus entregas.
        </p>
        <button className="bg-[#2D2D5F] text-white rounded-full py-3 px-6 w-full flex items-center justify-center mb-2">
          <span>¡Prueba</span>
          <span className="mx-2 text-white font-bold">CONECTA</span>
          <span>gratis ahora!</span>
        </button>
        <p className="text-[#4A4A68] text-xs">
          Oferta válida por tiempo limitado.
        </p>
      </div>
    </section>
  );
};

export default CallToAction; 