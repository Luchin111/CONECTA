import React from 'react';
import Image from 'next/image';
import { List, User } from '@phosphor-icons/react';

const WelcomeSection = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <button className="p-2">
          <List size={24} color="#2D2D5F" weight="bold" />
        </button>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Conecta Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </div>
        <button className="p-2">
          <User size={24} color="#2D2D5F" weight="bold" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4">
        <div className="text-center mb-8">
          <h1 className="text-[#2D2D5F] text-3xl font-bold mb-4">
            Vende desde cualquier lugar
          </h1>
          <h2 className="text-[#2D2D5F] text-2xl mb-4">
            y <span className="text-[#FF5C00] font-bold">CONECTA</span> con tu próximo cliente
          </h2>
          <p className="text-gray-700 mb-8">
            Sabemos que nuestro servicio es excelente pero queremos que lo compruebes por tu cuenta
          </p>
          <button className="bg-[#2D2D5F] text-white rounded-full py-3 px-6 flex items-center justify-center mx-auto">
            <span>¡Prueba</span>
            <Image
              src="/images/logo.png"
              alt="Conecta"
              width={80}
              height={24}
              className="mx-2"
            />
            <span>un mes gratis!</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default WelcomeSection; 