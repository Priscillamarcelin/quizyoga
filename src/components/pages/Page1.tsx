import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page1: React.FC<PageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      
      <img
  src="https://i.ibb.co/gL2sKnhK/foto-capa-yoga-2.webp"
  alt="Yoga Facial"
  className="https://i.ibb.co/1NHn8XX/Screenshot-2025-06-23-022630-removebg-preview.webp"
  loading="lazy"
/>


      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
        Rejuvenesça 3 áreas do rosto em 5 minutos por dia, sem cremes caros e sem sair de casa.
      </h1>

      <div className="max-w-md w-full">
        <Button onClick={onContinue!}>
          Iniciar
        </Button>
      </div>
    </div>
  );
};

export default Page1;