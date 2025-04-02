'use client';

import React from 'react';
import { List, User } from '@phosphor-icons/react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <button className="p-2">
        <List size={24} color="#2D2D5F" />
      </button>
      <div className="flex-1 flex justify-center">
        <span className="text-[#2D2D5F] font-bold text-xl">CONECTA</span>
      </div>
      <button className="p-2">
        <User size={24} color="#2D2D5F" />
      </button>
    </header>
  );
};

export default Header; 