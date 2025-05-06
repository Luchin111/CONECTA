'use client';

import React from 'react';
import Image from 'next/image';
import { List, CaretLeft } from '@phosphor-icons/react';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isInfoPage = pathname === '/info';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {isInfoPage ? (
          <button 
            onClick={() => router.back()}
            className="p-2"
          >
            <CaretLeft size={24} color="#2D2D5F" />
          </button>
        ) : (
          <button 
            onClick={() => router.push('/info')}
            className="p-2"
          >
            <List size={24} color="#2D2D5F" />
          </button>
        )}

        <div className="flex-1 flex justify-center">
          <Image
            src="/images/conecta-logo-dark.png"
            alt="Conecta"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </div>

        {/* Espacio vacío para mantener el logo centrado */}
        <div className="w-10"></div>
      </div>
    </header>
  );
};

export default Header; 