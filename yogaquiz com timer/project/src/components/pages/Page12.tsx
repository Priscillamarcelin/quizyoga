import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page12: React.FC<PageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Você não precisa de ácido hialurônico...
      </h2>
      
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Você precisa reativar os músculos do seu rosto, fortalecer as fibras da pele e estimular a circulação com exercícios de FaceYoga...
      </p>

      <img 
        src="https://i.ibb.co/Swx2BYYD/cover-png.png" 
        alt="Mulher fazendo exercício de faceyoga" 
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-8" 
      />

      <div className="max-w-2xl mx-auto space-y-6 mb-8">
        <p className="text-lg text-gray-700">
          Você sabia que a flacidez começa com a fraqueza muscular facial?
        </p>
        
        <p className="text-lg text-gray-700">
          Sem exercícios, seu rosto desce com o tempo... Mas se você treinar... ele se mantém firme e sobe de novo!
        </p>
      </div>

      <div className="max-w-md w-full">
        <Button onClick={onContinue!}>
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Page12;