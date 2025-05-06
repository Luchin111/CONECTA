'use client';

import React from 'react';
import { Clock, Package, ShoppingBag } from '@phosphor-icons/react';

const Features = () => {
  const features = [
    {
      icon: <Clock size={32} color="#FF5C00" />,
      title: "Ahorro de tiempo y costos",
      description: "Más flexibilidad para ti y tus clientes."
    },
    {
      icon: <Package size={32} color="#FF5C00" />,
      title: "Sin estrés en las entregas",
      description: "Nosotros lo hacemos por ti, ya sea en punto de retiro o con delivery."
    },
    {
      icon: <ShoppingBag size={32} color="#FF5C00" />,
      title: "Más ventas con menos esfuerzo",
      description: "Olvídate de coordinar entregas y enfócate en hacer crecer tu negocio."
    }
  ];

  return (
    <section className="px-4 pt-2 pb-8 md:py-16">
      <div className="md:container md:mx-auto max-w-4xl">
        <div className="space-y-6 md:space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3">
                <div className="flex justify-center transform scale-100 md:scale-[2]">
                  {React.cloneElement(feature.icon, {
                    size: 32,
                    className: 'md:w-12 md:h-12'
                  })}
                </div>
              </div>
              <div className="max-w-2xl">
                <h3 className="text-[#2D2D5F] font-semibold text-base md:text-2xl mb-1 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A68] text-sm md:text-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 