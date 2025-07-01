import React from 'react';
import { PageProps } from '../../types';

const Page1: React.FC<PageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">

      <img
        src="https://i.ibb.co/gL2sKnhK/foto-capa-yoga-2.webp"
        alt="Yoga Facial"
        className="mb-8 w-auto max-w-xs md:max-w-sm"
        loading="lazy"
      />

      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
        Rejuvenesça 3 áreas do rosto em 5 minutos por dia — sem cremes caros e sem sair de casa.
      </h1>

      <button
        onClick={onContinue}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
      >
        Iniciar
      </button>
    </div>
  );
};

export default Page1;

