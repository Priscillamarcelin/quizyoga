import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page3: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Como você se sente com a sua aparência hoje?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("😊 Sim, estou feliz")}>
          😊 Sim, estou feliz
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("🤔 Preciso melhorar algumas coisas")}>
          🤔 Preciso melhorar algumas coisas
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("😞 Não estou satisfeita")}>
          😞 Não estou satisfeita
        </Button>
      </div>
    </div>
  );
};

export default Page3;