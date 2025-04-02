'use client';

import React from 'react';
import { CheckSquare, Package, User, ShoppingBag } from '@phosphor-icons/react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <User size={24} color="#FF5C00" />,
      text: "Conecta con nosotros"
    },
    {
      icon: <CheckSquare size={24} color="#FF5C00" />,
      text: "Elige tu plan"
    },
    {
      icon: <Package size={24} color="#FF5C00" />,
      text: "Deja tus productos"
    },
    {
      icon: <User size={24} color="#FF5C00" />,
      text: "Relájate"
    },
    {
      icon: <ShoppingBag size={24} color="#FF5C00" />,
      text: "¡Vende más!"
    }
  ];

  return (
    <section className="px-4 py-8">
      <h2 className="text-[#2D2D5F] text-2xl font-bold text-center mb-8">
        USAR
        <span className="text-[#FF5C00] mx-2">CONECTA</span>
        ES
        <br />
        ASÍ DE FÁCIL
      </h2>

      <div className="flex justify-between items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">
              {step.icon}
            </div>
            <p className="text-[#2D2D5F] text-xs text-center">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 