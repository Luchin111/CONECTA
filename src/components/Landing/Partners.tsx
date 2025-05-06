'use client';

import React from 'react';
import Image from 'next/image';

const Partners = () => {
  const partners = [1, 2, 3, 4, 5, 6];

  return (
    <section className="px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-[#FF5C00]">+100</span> negocios ya usan
          </h2>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/conecta-logo-dark.png"
              alt="Conecta Logo"
              width={180}
              height={42}
              className="h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-[#4A4A68]">
            De todo tipo y tamaño
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-xl text-gray-400">Logo {partner}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl text-[#4A4A68] font-semibold mb-2">
            ¡Nos adaptamos a ti!
          </p>
          <p className="text-lg md:text-xl text-[#4A4A68]">
            No importa el tipo de negocio
          </p>
        </div>

        {/* Sección de Testimonios */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/conecta-logo-dark.png"
                alt="Conecta Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-[#2D2D5F] font-bold text-xl">CONECTA</span>
                <div className="flex">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <span className="text-[#2D2D5F] font-bold">5.0</span>
              </div>
              <p className="text-sm text-[#4A4A68]">BASADO EN 38 COMENTARIOS</p>
            </div>
          </div>

          <div className="relative mt-8 mb-8">
            <span className="absolute top-0 left-0 text-6xl text-[#2D2D5F] opacity-20">"</span>
            <p className="text-[#2D2D5F] text-lg md:text-xl px-12 italic">
              DESDE QUE USO CONECTA, YA NO PIERDO TIEMPO COORDINANDO ENTREGAS. AHORA SOLO ME ENFOCO EN VENDER Y MIS CLIENTES RECOGEN CUANDO LES CONVIENE. ¡ME AYUDÓ A DUPLICAR MIS VENTAS EN UN MES!
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-[#2D2D5F] opacity-20">"</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="/images/andrea-profile.jpg"
                alt="Andrea Rojas"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2D2D5F] font-semibold">
              ANDREA ROJAS - DUEÑA DE "MODA EXPRESS"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 