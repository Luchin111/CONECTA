'use client';

import React, { useState } from 'react';
import { CaretDown, Question } from '@phosphor-icons/react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "¿Cómo funciona el mes gratis?",
      answer: "Contenido de la respuesta..."
    },
    {
      question: "¿Dónde están los puntos de entrega?",
      answer: "Contenido de la respuesta..."
    },
    {
      question: "¿Qué pasa si un cliente no recoge su pedido?",
      answer: "Contenido de la respuesta..."
    },
    {
      question: "¿Qué pasa si soy de otro departamento?",
      answer: "Contenido de la respuesta..."
    }
  ];

  return (
    <section className="px-4 py-4 md:py-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* Título para móvil */}
        

        {/* Título para desktop */}
        <div className=" md:block text-center mb-16">
          <h2 className="text-4xl text-[#2D2D5F] font-bold flex items-center justify-center gap-3">
            Resolvemos tus dudas
            <Question size={40} className="text-[#FF5C00]" weight="fill" />
          </h2>
        </div>

        {/* Contenedor de preguntas */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`
                group relative mb-4 md:mb-6 
                ${openIndex === index ? 'z-10' : 'z-0'}
              `}
            >
              <button
                className={`
                  w-full text-left p-4 md:p-6 rounded-xl transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-white shadow-lg md:shadow-xl border-t-2 border-[#FF5C00]' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'}
                `}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`
                    font-semibold transition-colors duration-300
                    ${openIndex === index ? 'text-[#FF5C00]' : 'text-[#2D2D5F]'}
                  `}>
                    {item.question}
                  </h3>
                  <CaretDown
                    size={24}
                    className={`
                      flex-shrink-0 mt-1 transition-all duration-300
                      ${openIndex === index 
                        ? 'transform rotate-180 text-[#FF5C00]' 
                        : 'text-[#2D2D5F] group-hover:text-[#FF5C00]'}
                    `}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-[#4A4A68] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 