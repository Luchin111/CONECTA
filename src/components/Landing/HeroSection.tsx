'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from '@phosphor-icons/react';

const HeroSection = () => {
  return (
    <section className="px-4 pt-6 pb-4">
      <div className="text-center mb-6">
        <h1 className="text-[#2D2D5F] text-[28px] font-bold leading-tight mb-4">
          Vende desde
          <br />
          cualquier lugar
          <br />
          y <span className="text-[#FF5C00]">CONECTA</span>
          <br />
          con tu próximo
          <br />
          cliente
        </h1>
        <p className="text-[#4A4A68] text-sm mb-6">
          Sabemos que nuestro servicio es excelente pero queremos que lo compruebes por tu cuenta
        </p>
        <button className="bg-[#2D2D5F] text-white rounded-full py-3 px-6 w-full flex items-center justify-center">
          <span>¡Prueba</span>
          <span className="mx-2 text-white font-bold">CONECTA</span>
          <span>un mes gratis!</span>
        </button>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-gray-200 h-[200px]">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-1">
              <Play size={24} color="white" weight="fill" />
              <span className="text-sm">Al prestar servicios con</span>
            </div>
            <span className="text-[#FFD60A] font-semibold">Envíos Extra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 