'use client';

import React from 'react';

const Partners = () => {
  const partners = [1, 2, 3, 4, 5, 6];

  return (
    <section className="px-4 py-8">
      <div className="text-center mb-6">
        <div className="mb-2">
          <span className="text-[#FF5C00] font-bold text-xl">+100</span>
          <span className="text-[#2D2D5F] font-bold text-xl"> negocios ya usan</span>
        </div>
        <div className="text-[#2D2D5F] font-bold text-xl mb-2">CONECTA</div>
        <p className="text-[#4A4A68] text-sm">De todo tipo y tamaño</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center h-[60px] bg-gray-100 rounded">
            <span className="text-gray-400">Logo {index + 1}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-[#2D2D5F] font-semibold mb-1">¡Nos adaptamos a ti!</p>
        <p className="text-[#4A4A68] text-sm">No importa el tipo de negocio</p>
      </div>

      <div className="mt-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-[#2D2D5F] rounded-full flex items-center justify-center text-white">
            C
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mb-1">
          <span className="text-[#2D2D5F] font-bold">CONECTA</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
        <p className="text-[#4A4A68] text-xs mb-4">BASADO EN 50.000 ENVÍOS</p>
        <blockquote className="text-[#2D2D5F] text-sm italic mb-4 px-4">
          "DESDE QUE USO CONECTA, YA NO PIERDO TIEMPO COORDINANDO ENTREGAS. AHORA SOLO ME DEDICO A COCINAR Y MIS CLIENTES ESTÁN ENCANTADOS. ME AYUDÓ A DUPLICAR MIS VENTAS EN UN MES!"
        </blockquote>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="text-[#2D2D5F] text-sm font-semibold">
            ANDREA SILVA - DUEÑA DE "MESA EXPRESS"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners; 