import React, { useState, useEffect } from 'react';
import { PageProps } from '../../types';

const Page15: React.FC<PageProps> = ({ onContinue }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Analisando a condição da sua pele...",
    "Revisando seus cuidados e rotinas...",
    "Gerando protocolo personalizado..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => onContinue!(), 1000);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [onContinue]);

  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}>
                {index <= currentStep ? '✓' : index + 1}
              </div>
              <span className={`text-lg ${
                index <= currentStep ? 'text-blue-600 font-semibold' : 'text-gray-500'
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>

        <img 
          src="https://i.ibb.co/S2ZbDbN/Chat-GPT-Image-21-de-jun-de-2025-21-46-07.webp" 
          alt="Resultados FaceYoga" 
          className="w-full max-w-sm mx-auto rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
};

export default Page15;