'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Question } from '@phosphor-icons/react';

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const steps = [
    {
      title: 'Conecta con nosotros',
      image: '/images/steps/connect.png'
    },
    {
      title: 'Elige tu plan',
      image: '/images/steps/plan.png'
    },
    {
      title: 'Deja tus productos',
      image: '/images/steps/products.png'
    },
    {
      title: 'Relájate',
      image: '/images/steps/relax.png'
    },
    {
      title: '¡Vende más!',
      image: '/images/steps/sales.png'
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="px-4 py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl text-[#2D2D5F] font-bold mb-6 flex items-center justify-center gap-3">
            USAR
            <Image
              src="/images/conecta-logo-dark.png"
              alt="Conecta"
              width={160}
              height={48}
              className="h-auto"
            />
            ES
          </h2>
          <p className="text-2xl md:text-3xl text-[#2D2D5F] font-bold">
            ASÍ DE FÁCIL
          </p>
        </div>

        <div className="relative mb-16 md:mb-24">
          {/* Slider Container */}
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px] relative mx-auto max-w-full">
            {steps.map((step, index) => {
              const position = index - activeSlide;
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 cursor-pointer"
                  onClick={() => setActiveSlide(index)}
                  style={{
                    left: '50%',
                    transform: `translateX(-50%) translateX(${position * (window.innerWidth < 768 ? 140 : 300)}px) scale(${
                      isActive ? 1 : 0.6
                    })`,
                    zIndex: isActive ? 10 : 5,
                    opacity: isActive ? 1 : 0.5
                  }}
                >
                  <div className={`
                    w-[200px] md:w-[320px] aspect-square rounded-2xl flex flex-col items-center justify-center p-4 md:p-6
                    ${isActive ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-[#FFE4D6]'}
                    transition-all duration-500
                  `}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={isActive ? 100 : 50}
                      height={isActive ? 100 : 50}
                      className="object-contain mb-6 md:mb-8"
                    />
                    <p className={`text-[#2D2D5F] font-bold transition-all duration-500 text-center
                      ${isActive ? 'text-lg md:text-2xl' : 'text-sm md:text-base'}
                    `}>
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? 'bg-[#FF5C00] w-6'
                    : 'bg-gray-300 w-2'
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks; 