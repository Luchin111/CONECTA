'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from '@phosphor-icons/react';

const HeroSection = () => {
  return (
    <section className="w-full relative bg-white">
      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="px-4 pt-6 pb-2">
          <div className="mb-6">
            <h1 className="text-[#2D2D5F] text-[28px] font-bold leading-tight mb-4 text-left">
              Vende desde
              <br />
              cualquier lugar
              <br />
              y{' '}
              <div className="inline-block">
                <span className="text-[#FF5C00] text-[32px]">CONECTA</span>
              </div>
              <br />
              con tu próximo
              <br />
              cliente
            </h1>
            <p className="text-[#4A4A68] text-sm mb-6 text-left">
              Sabemos que nuestro servicio es excelente pero queremos que lo compruebes por tu cuenta
            </p>
            <button className="bg-[#2D2D5F] text-white rounded-full py-3 px-6 w-full flex items-center justify-center">
              <span>¡Prueba</span>
              <Image
                src="/images/conecta-logo-white.png"
                alt="CONECTA"
                width={100}
                height={24}
                className="mx-2"
              />
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
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-16 flex items-center justify-between">
          <div className="w-1/2 pr-8">
            <h1 className="text-[#2D2D5F] text-5xl font-bold leading-tight mb-6">
              Vende desde cualquier lugar y{' '}
              <div className="inline-block">
                <span className="text-[#FF5C00] text-[64px]">CONECTA</span>
              </div>
              {' '}con tu próximo cliente
            </h1>
            <p className="text-[#4A4A68] text-lg mb-8 max-w-xl">
              Sabemos que nuestro servicio es excelente pero queremos que lo compruebes por tu cuenta
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#2D2D5F] text-white rounded-full py-4 px-8 flex items-center justify-center hover:bg-[#1E1E4B] transition-colors">
                <span>¡Prueba</span>
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="CONECTA"
                  width={120}
                  height={28}
                  className="mx-2"
                />
                <span>un mes gratis!</span>
              </button>
              <button className="flex items-center gap-3 text-[#2D2D5F] hover:text-[#FF5C00] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center">
                  <Play size={24} color="white" weight="fill" />
                </div>
                <span className="font-medium">Ver cómo funciona</span>
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-video shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Play size={32} color="white" weight="fill" />
                    <span className="text-lg">Al prestar servicios con</span>
                  </div>
                  <span className="text-[#FFD60A] font-semibold text-xl">Envíos Extra</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-72 h-72 bg-[#FF5C00] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/4 w-64 h-64 bg-[#2D2D5F] opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 