import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page2: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Qual a sua idade?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("Menos de 25 anos")}>
          Menos de 25 anos
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("25-35 anos")}>
          25-35 anos
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("36-50 anos")}>
          36-50 anos
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("Mais de 55 anos")}>
          Mais de 55 anos
        </Button>
      </div>
    </div>
  );
};

export default Page2;