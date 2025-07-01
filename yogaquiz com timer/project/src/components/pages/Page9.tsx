import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page9: React.FC<PageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        582 mil mulheres brasileiras
      </h2>
      
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Testaram e aprovaram a técnica YogaFacial™ de 3 minutos por dia para rejuvenescimento natural de pele...
      </p>

      <img 
        src="https://i.ibb.co/KjXpFXxd/Chat-GPT-Image-21-de-jun-de-2025-21-17-07.webp" 
        alt="Mulheres felizes" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-8" 
      />

      <div className="max-w-md w-full">
        <Button onClick={onContinue!}>
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Page9;