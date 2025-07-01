import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page4: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      
      <img
        src="https://i.ibb.co/Qj8RV9NC/Chat-GPT-Image-21-de-jun-de-2025-12-40-00.webp"
        alt="Incômodos faciais"
        className="w-full max-w-md md:max-w-lg h-auto mb-6 rounded-md shadow-lg"
      />

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Qual o seu maior incômodo?
      </h2>

      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("Rugas e linhas de expressão")}>
          Rugas e linhas de expressão
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Flacidez")}>
          Flacidez
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Gordura facial")}>
          Gordura facial
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Rosto desproporcional")}>
          Rosto desproporcional
        </Button>
      </div>
    </div>
  );
};

export default Page4;