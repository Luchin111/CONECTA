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
    <section className="px-4 py-8">
      <div className="space-y-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              {feature.icon}
            </div>
            <h3 className="text-[#2D2D5F] font-semibold text-base mb-1">
              {feature.title}
            </h3>
            <p className="text-[#4A4A68] text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 