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
    <section className="px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-[#2D2D5F] text-2xl font-bold mb-2">
          Resolvemos tus
          <br />
          dudas <Question size={24} className="inline text-[#2D2D5F]" />
        </h2>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-[#2D2D5F] font-medium text-base pr-4">
                {item.question}
              </span>
              <CaretDown
                size={20}
                className={`text-[#2D2D5F] transition-transform flex-shrink-0 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-4 text-[#4A4A68] text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 