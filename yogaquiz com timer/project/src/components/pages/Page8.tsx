import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page8: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Qual parte do seu rosto você gostaria de melhorar primeiro?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("Testa")}>
          Testa🤨
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Bochechas")}>
          Bochechas😊
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Área dos olhos")}>
          Área dos olhos👁️
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Queixo/Papada")}>
          Queixo/Papada😶⬇️
        </Button>
      </div>
    </div>
  );
};

export default Page8;