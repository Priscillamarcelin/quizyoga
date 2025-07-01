import React from 'react';
import Button from '../Button';
import { PageProps } from '../../types';

const Page10: React.FC<PageProps> = ({ onSelectAnswer }) => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Você possui uma rotina de skincare atualmente?
      </h2>
      <div className="max-w-md w-full space-y-4">
        <Button variant="answer" onClick={() => onSelectAnswer!("☀️Sim, de manhã")}>
          ☀️Sim, de manhã
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("🌙 Sim, a noite")}>
          🌙 Sim, a noite
        </Button>
        <Button variant="answer" onClick={() => onSelectAnswer!("❌ Não tenho")}>
          ❌ Não tenho
        </Button>
      </div>
    </div>
  );
};

export default Page10;